const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const eueler4 = require('../datos.json');

router.get('/', (req, res) => {
    res.json(eueler4);

});

router.post('/', (req, res) => {
    const id = 4;
    const {answer} = req.body;
    const newAnswer = { ...req.body, id };
    if (answer) {
        eueler4.push(newAnswer);
        res.json(eueler4);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {answer} = req.body;
    if (answer) {
        _.each(eueler4, (euler, i) => {
            if (euler.id === id) {
                euler.answer = answer;
            }
        });
        res.json(eueler4);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(eueler4, (euler, i) => {
            if (euler.id == 4) {
                eueler4.splice(i, 1);
            }
        });
        res.json(eueler4);
    }
});

module.exports = router;