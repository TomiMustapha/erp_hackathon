const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const crypto = require('crypto');
const multer = require('multer');
const MulterGridFsStorage = require('multer-gridfs-storage');
const GridFsStream = require('gridfs-stream');
const path = require('path');

// routes/api
const incidents = require('./routes/api/incidents');
const users = require('./routes/api/users');

const app = express();

// middleware
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// routes
app.use('/users', users);
app.use('/incidents', incidents);

// db options
var options = {
    useNewUrlParser: true
};

// db connection
mongoose
    .connect(
        process.env.mongoURI,
        options
    )
    .then(() => console.log('db connection successful.'))
    .catch(error => console.log(error));

// Get db connection
const connection = mongoose.connection;
var gfs;

connection.once('open', function() {
    gfs = GridFsStream(connection.db, mongoose.mongo);
    gfs.collection('incidents');
});

const storage = new MulterGridFsStorage({
    url: process.env.mongoURI,
    file: (req, file) => {
        console.log(file);
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename =
                    buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'incidents'
                };
                resolve(fileInfo);
            });
        });
    }
});

const incident = multer({ storage });

// app.all('/*', function(req, res, next) {
//     console.log(
//         'REQUEST: ' +
//             req.method +
//             ' ' +
//             req.path +
//             ' ' +
//             JSON.stringify(req.body)
//     );
//     next();
// });

// POST /incident
app.post('/incident', incident.single('file'), (req, res) => {
    res.json({ file: req.file });
});

// GET /files
app.get('/files', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        if (err) {
            return res.status(400).json({ err: err });
        }
        if (!files || files.length === 0) {
            return res.status(404).json({ nofilesfound: 'No files found' });
        }

        return res.json(files);
    });
});

// GET /incident/:filename
app.get('/incident/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        if (err) {
            return res.status(400).json({ err: err });
        }
        if (!file || file.length === 0) {
            return res.status(404).json({ filenotfound: 'No file found' });
        }

        const rs = gfs.createReadStream(file.filename);
        // res.set('Content-Type', 'image/png');
        rs.pipe(res);
    });
});

// DELETE /incident/:file_id
app.delete('/incident/:file_id', (req, res) => {
    gfs.remove(
        {
            _id: req.params.file_id,
            root: 'incidents'
        },
        (error, gridstore) => {
            return res.status(400).json({ error: error });
        }
    );

    res.redirect('/');
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// default route
app.get('/', function(req, res) {
    res.json('Hello World!');
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
