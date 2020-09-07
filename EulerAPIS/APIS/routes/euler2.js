const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const euler2 = require('../datos.json');

router.get('/', (req, res) => {
    res.json(euler2);

});

router.post('/', (req, res) => {
    const id = 2;
    const {answer} = req.body;
    const newAnswer = { ...req.body, id };
    if (answer) {
        euler2.push(newAnswer);
        res.json(euler2);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {answer} = req.body;
    if (answer) {
        _.each(euler2, (euler, i) => {
            if (euler.id === id) {
                euler.answer = answer;
            }
        });
        res.json(euler2);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(euler2, (euler, i) => {
            if (euler.id == 2) {
                euler2.splice(i, 1);
            }
        });
        res.json(euler2);
    }
});

module.exports = router;