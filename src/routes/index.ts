import { Router } from 'express';

import appointmentsRoputer from './appointment.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRoputer);
routes.use('/users', usersRouter);

export default routes;
