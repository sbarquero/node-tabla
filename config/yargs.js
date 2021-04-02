const argv = require('yargs')
  .option('b', {
    alias: 'base',
    describe: 'Es la base de la tabla de multiplicar',
    type: 'number',
    demandOption: true
  })
  .option('l', {
    alias: 'listar',
    describe: 'Muestra la tabla en consola',
    type: 'boolean',
    default: false
  })
  .option('h', {
    alias: 'hasta',
    describe: 'Número hasta donde se genera la tabla',
    type: 'number',
    default: 10
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw 'La base debe ser un número'.red;
    }
    if (isNaN(argv.hasta)) {
      throw 'El valor de h tiene que ser un número'.red;
    }
    return true;
  })
  .argv;

module.exports = argv;