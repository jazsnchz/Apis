const { Router } = require('express');

const router = new Router();


//prueba de servidor
router.get('/test', (req, res) => {
    const data = {
        name: 'Jazmin',
        website: 'jazmin.com'
    };
    res.json(data);
});  

module.exports = router;
