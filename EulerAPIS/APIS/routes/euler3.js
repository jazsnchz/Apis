const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const euler3 = require('../datos.json');

router.get('/', (req, res) => {
    res.json(euler3);

});

router.post('/', (req, res) => {
    const id = 3;
    const {answer} = req.body;
    const newAnswer = { ...req.body, id };
    if (answer) {
        euler3.push(newAnswer);
        res.json(euler3);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {answer} = req.body;
    if (answer) {
        _.each(euler3, (euler, i) => {
            if (euler.id === id) {
                euler.answer = answer;
            }
        });
        res.json(euler3);
    } else {
        res.status(500).json({error: 'Ha existido un error, disculpa'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(euler3, (euler, i) => {
            if (euler.id == 3) {
                euler3.splice(i, 1);
            }
        });
        res.json(euler3);
    }
});

module.exports = router;