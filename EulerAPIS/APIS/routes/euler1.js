const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const euler1 = require('../datos.json');

router.get('/', (req, res) => {
    res.json(euler1);

});

router.post('/', (req, res) => {
    const id = 1;
    const {answer} = req.body;
    const newAnswer = { ...req.body, id };
    if (answer) {
        euler1.push(newAnswer);
        res.json(euler1);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {answer} = req.body;
    if (answer) {
        _.each(euler1, (euler, i) => {
            if (euler.id === id) {
                euler.answer = answer;
            }
        });
        res.json(euler1);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(euler1, (euler, i) => {
            if (euler.id == 1) {
                euler1.splice(i, 1);
            }
        });
        res.json(euler1);
    }
});

module.exports = router;