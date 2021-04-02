// Tabla de multiplicar

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

//console.log(process.argv);
//console.log(argv);

//console.log('base yargs:', argv.base);

crearArchivo(argv.base, argv.hasta, argv.listar)
  .then(nombreArchivo => console.log(`Fichero ${colors.rainbow(nombreArchivo)} creado`))
  .catch(err => console.log(err));