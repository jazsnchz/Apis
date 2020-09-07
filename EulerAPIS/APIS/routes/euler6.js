const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const euler6 = require('../datos.json');

router.get('/', (req, res) => {
    res.json(euler6);

});

router.post('/', (req, res) => {
    const id = 6;
    const {answer} = req.body;
    const newAnswer = { ...req.body, id };
    if (answer) {
        euler6.push(newAnswer);
        res.json(euler6);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {answer} = req.body;
    if (answer) {
        _.each(euler6, (euler, i) => {
            if (euler.id === id) {
                euler.answer = answer;
            }
        });
        res.json(euler6);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(euler6, (euler, i) => {
            if (euler.id == 6) {
                euler6.splice(i, 1);
            }
        });
        res.json(euler6);
    }
});

module.exports = router;