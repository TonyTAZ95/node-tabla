
const { crearArchivo } = require( './helpers/multiplicar' );
const argv = require( './config/yargs' );
const colors = require( 'colors' );

// OPTION 'l' listar boolean (opcional, valor default en false)
/* mostrar o esconder la salida de consola */ 

console.clear();

console.log( argv );

// Print tabla del 5

// console.log( 'base: yargs', argv.base );
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split( '=' );

crearArchivo( argv.b, argv.h, argv.l )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado' ))
    .catch( err => console.log( err ) );