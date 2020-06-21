import { Router } from 'express';
import appointmentsRoputer from './appointment.routes';

const routes = Router();

routes.use('/appointments', appointmentsRoputer);

export default routes;
