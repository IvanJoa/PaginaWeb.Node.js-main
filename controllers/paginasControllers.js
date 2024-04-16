import { viaje } from "../models/viaje.js";
import { Testimonial } from "../models/testimoniales.js";

const paginaInicio =   async (req, res) => {
    // Consultar 3 viajes del modelo viaje

    const promiseDB = [];

    promiseDB.push( viaje.findAll( { limit: 3}));
    promiseDB.push( Testimonial.findAll( { limit: 3}));
    try {
        const resultado = await Promise.all( promiseDB );

        res.render('inicio', {
            pagina: 'Inicio',
            clase: "home",
            viajes: resultado[0],
            testimoniales: resultado[1]

        })

        
        
    } catch (error) {
        console.log( error );
    }

}

const paginaNosotros = (req, res) => {
    res.render('nosotros',{
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => {
    //Consultar la Base de Datos
    const viajes = await viaje.findAll();
    console.log( viajes );

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    })
}

const paginaTestimonio =  async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: "Testimonios",
            testimoniales
        });

    } catch (error) {
        console.log( error );
    }

}

//Mostrar viaje por su slug
const paginaDetalleViaje =  async (req, res) => {
    
    const { slug } = req.params;

    try {
        const Viaje = await viaje.findOne( {where : {slug }});

        res.render('viaje', {
            pagina: 'Informacion del Viaje',
            Viaje
        })
    } catch (error) {
        console.log( error );
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonio,
    paginaDetalleViaje
}

