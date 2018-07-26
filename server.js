const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const crypto = require('crypto');
const multer = require('multer');
const MulterGridFsStorage = require('multer-gridfs-storage');
const GridFsStream = require('gridfs-stream');

// routes/api
const incidents = require('./routes/api/incidents');
const users = require('./routes/api/users');

const app = express();

const port = process.env.PORT || 8080;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

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

app.all('/*', function(req, res, next) {
    console.log(
        'REQUEST: ' +
            req.method +
            ' ' +
            req.path +
            ' ' +
            JSON.stringify(req.body)
    );
    next();
});

// default route
app.get('/', function(req, res) {
    res.send('Hello World');
});

// POST /incident
app.post('/incident', incident.single('file'), (req, res) => {
    res.json({ file: req.file });
});

// GET /files/:filename
app.get('/files/:filename', (req, res) => {
    gfs.
})

// routes
app.use('/users', users);
app.use('/incidents', incidents);

app.listen(port, console.log('running on port', port));
