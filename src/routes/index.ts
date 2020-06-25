import { Router } from 'express';

import appointmentsRoputer from './appointment.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRoputer);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
