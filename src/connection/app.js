import mysql from 'mysql2';

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'Agendamiento',
    user: 'root',
    password: '852574565126Pp?'
});

conexion.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexión exitosa');

        // Realizar una consulta para verificar que la conexión está funcionando correctamente
        conexion.query('SELECT * FROM profesionales', function (err, results, fields) {
            if (err) {
                console.error('Error ejecutando la consulta: ', err);
                return;
            }
            console.log('Resultados:', results);

            // Insertar Datos
            const sqlInsert = 'INSERT INTO profesionales (id_profesional, tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const valuesInsert = [3, 'Cc', '0987654321', 'Bastidas', 'Masculino', 3, 'Bosa', 'Fontibon'];

            conexion.query(sqlInsert, valuesInsert, function (error, results) {
                if (error) {
                    console.error('Error al insertar los datos:', error);
                    return;
                }
                console.log("¡Registro Agregado!");

                // Actualizar Registro
                // const sqlUpdate = 'UPDATE usuarios SET nombre = ?, estrato = ? WHERE id = ?';
                // const valuesUpdate = ['Steve', 2, 4]; // Cambia los valores según los campos de tu tabla

                // conexion.query(sqlUpdate, valuesUpdate, function (error, results) {
                //     if (error) {
                //         console.error('Error al actualizar los datos:', error);
                //         return;
                //     }
                //     console.log('¡Registro Actualizado!', results);

                    // Eliminar Registro
                    // const sqlDelete = 'DELETE FROM profesionales WHERE id_profesional = ?';
                    // const valuesDelete = [3]; // Cambia el valor según el id que deseas eliminar

                    // conexion.query(sqlDelete, valuesDelete, function (error, results) {
                    //     if (error) {
                    //         console.error('Error al eliminar los datos:', error);
                    //         return;
                    //     }
                    //     console.log("¡Registro Eliminado!", results);

                    //     // Finalizar la conexión después de todas las consultas
                    //     conexion.end(function (err) {
                    //         if (err) {
                    //             console.error('Error al cerrar la conexión:', err);
                    //             return;
                    //         }
                    //         console.log('Conexión cerrada');
                    //     });
//llave Delete
                    // });
//llave Update
               // });
//llave Insert
            });
        });
    }
});
