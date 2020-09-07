const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const euler7 = require('../datos.json');

router.get('/', (req, res) => {
    res.json(euler7);

});

router.post('/', (req, res) => {
    const id = 7;
    const {answer} = req.body;
    const newAnswer = { ...req.body, id };
    if (answer) {
        euler7.push(newAnswer);
        res.json(euler7);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {answer} = req.body;
    if (answer) {
        _.each(euler7, (euler, i) => {
            if (euler.id === id) {
                euler.answer = answer;
            }
        });
        res.json(euler7);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(euler7, (euler, i) => {
            if (euler.id == 7) {
                euler7.splice(i, 1);
            }
        });
        res.json(euler7);
    }
});

module.exports = router;