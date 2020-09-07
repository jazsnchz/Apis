const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const euler10 = require('../datos.json');

router.get('/', (req, res) => {
    res.json(euler10);

});

router.post('/', (req, res) => {
    const id = 10;
    const {answer} = req.body;
    const newAnswer = { ...req.body, id };
    if (answer) {
        euler10.push(newAnswer);
        res.json(euler10);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {answer} = req.body;
    if (answer) {
        _.each(euler10, (euler, i) => {
            if (euler.id === id) {
                euler.answer = answer;
            }
        });
        res.json(euler10);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(euler10, (euler, i) => {
            if (euler.id == 10) {
                euler10.splice(i, 1);
            }
        });
        res.json(euler10);
    }
});

module.exports = router;