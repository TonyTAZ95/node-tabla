const fs = require( 'fs' );
const colors = require( 'colors' );

const crearArchivo = async( base = 5, hasta = 10, listar = false ) => {

    try {
        let output = '';
        let archivo = '';

        for ( let i = 1; i <= hasta; i++ ) {
            output += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
            archivo += `${ base } x ${ i } = ${ base * i }\n`;
        }

        if ( listar ) {
            console.log( output );
        }
        
        fs.writeFileSync( `./output/tabla-${ base }.txt`, archivo );    
        return `Tabla-${ base }.txt creado!`;
    } catch ( err ) {
        
        throw err;
    }
    
}   

module.exports = { 
    crearArchivo
 }