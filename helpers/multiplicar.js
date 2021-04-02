const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, hasta = 10, listar) => {
  let salida = '';
  let consola = '';

  consola += '==============\n'.cyan;
  consola += ' Tabla del ' + base.toString().yellow + '\n';
  consola += '==============\n'.cyan;

  for (let i = 1; i <= hasta; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
    consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    
  }

  if (listar) {
    console.log(consola);
  }

  try {
    await fs.writeFileSync(`salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }

}

module.exports = {
  crearArchivo
}