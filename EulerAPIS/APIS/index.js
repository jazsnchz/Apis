const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes/rutas
app.use(require('./routes'));
app.use('/api/euler1', require('./routes/euler1'));
app.use('/api/euler2', require('./routes/euler2'));
app.use('/api/euler3', require('./routes/euler3'));
app.use('/api/euler4', require('./routes/euler4'));
app.use('/api/euler5', require('./routes/euler5'));
app.use('/api/euler6', require('./routes/euler6'));
app.use('/api/euler7', require('./routes/euler7'));
app.use('/api/euler8', require('./routes/euler8'));
app.use('/api/euler9', require('./routes/euler9'));
app.use('/api/euler10', require('./routes/euler10'));

// inicia el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});
