const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const euler9 = require('../datos.json');

router.get('/', (req, res) => {
    res.json(euler9);

});

router.post('/', (req, res) => {
    const id = 9;
    const {answer} = req.body;
    const newAnswer = { ...req.body, id };
    if (answer) {
        euler9.push(newAnswer);
        res.json(euler9);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {answer} = req.body;
    if (answer) {
        _.each(euler9, (euler, i) => {
            if (euler.id === id) {
                euler.answer = answer;
            }
        });
        res.json(euler9);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(euler9, (euler, i) => {
            if (euler.id == 9) {
                euler9.splice(i, 1);
            }
        });
        res.json(euler9);
    }
});

module.exports = router;