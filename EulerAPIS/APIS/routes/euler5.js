const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const euler5 = require('../datos.json');

router.get('/', (req, res) => {
    res.json(euler5);

});

router.post('/', (req, res) => {
    const id = 5;
    const {answer} = req.body;
    const newAnswer = { ...req.body, id };
    if (answer) {
        euler5.push(newAnswer);
        res.json(euler5);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {answer} = req.body;
    if (answer) {
        _.each(euler5, (euler, i) => {
            if (euler.id === id) {
                euler.answer = answer;
            }
        });
        res.json(euler5);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(euler5, (euler, i) => {
            if (euler.id == 5) {
                euler5.splice(i, 1);
            }
        });
        res.json(euler5);
    }
});

module.exports = router;