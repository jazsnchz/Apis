const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const euler8 = require('../datos.json');

router.get('/', (req, res) => {
    res.json(euler8);

});

router.post('/', (req, res) => {
    const id = 1;
    const {answer} = req.body;
    const newAnswer = { ...req.body, id };
    if (answer) {
        euler8.push(newAnswer);
        res.json(euler8);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {answer} = req.body;
    if (answer) {
        _.each(euler8, (euler, i) => {
            if (euler.id === id) {
                euler.answer = answer;
            }
        });
        res.json(euler8);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(euler8, (euler, i) => {
            if (euler.id == 8) {
                euler8.splice(i, 1);
            }
        });
        res.json(euler8);
    }
});

module.exports = router;