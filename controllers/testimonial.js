import { Testimonial } from "../models/testimoniales.js";

const guardarTestmonial = async (req, res) => {

    const { nombre, correo, mensaje } =  req.body

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: "El campo nombre esta vacio"});
    }

    if(correo.trim() === '') {
        errores.push({mensaje: "El campo correo esta vacio"});
    }

    if(mensaje.trim() === '') {
        errores.push({mensaje: "El campo mensaje esta vacio"});
    }

    if(errores.length > 0) {
        //consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        //Mostrando la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales', 
            errores,
            nombre, 
            correo,
            mensaje,
            testimoniales
        })
    }else {
        //Almacenar en la base de datos

        try  {
            await Testimonial.create({
                nombre,
                correo,
                mensaje 
            })
            res.redirect('/testimoniales');
        } catch (error) {
            console.log( error );
        }
    }
}


export {
    guardarTestmonial
}