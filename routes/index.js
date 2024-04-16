import express  from "express";
import { paginaInicio, 
        paginaNosotros,
        paginaViajes, 
        paginaTestimonio, 
        paginaDetalleViaje,
} from "../controllers/paginasControllers.js";

import { guardarTestmonial } from "../controllers/testimonial.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimonio);
router.post('/testimoniales', guardarTestmonial)

export default router;

