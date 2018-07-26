const express = require('express');
const router = express.Router();

// Model
const Incident = require('../../models/Incident');

// GET /incidents
router.get('/', (req, res) => {
    Incident.find()
        .sort({ date: -1 })
        .then(incidents => res.json(incidents))
        .catch(error =>
            res.status(404).json({ noincidents: 'No incidents found' })
        );
});

// GET /incidents/:id
router.get('/:incident_id', (req, res) => {
    Incident.findById(req.params.incident_id)
        .then(incident => res.json(incident))
        .catch(error =>
            res.status(404).json({ noincident: 'No such incident found' })
        );
});

// POST /incidents
router.post('/', (req, res) => {
    const upcomingIncident = new Incident({
        user: req.body.user,
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date
    });

    upcomingIncident
        .save()
        .then(incident => res.json(incident))
        .catch(error => res.status(400).json(error));
});

// DELETE /incidents/:id
router.delete('/:incident_id', (req, res) => {
    Incident.findById(req.params.incident_id)
        .then(incident => {
            // if (incident.user.toString() !== req.user.id) {
            //     return res.status(401).json({
            //         unauthorized: 'User is not authorized to delete this incident'
            //     });
            // }

            incident.remove().then(() => res.json({ success: true }));
        })
        .catch(error =>
            res.status(404).status({ noincident: 'No such incident found' })
        );
});

module.exports = router;
