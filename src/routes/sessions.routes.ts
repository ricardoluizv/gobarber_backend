import { Router } from 'express';

import AuthenticaticateUserService from '../services/AuthenticateUserService';

const sessionsRoutes = Router();

sessionsRoutes.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticaticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  // apaga o atributo password
  delete user.password;

  return response.json({ user, token });
});

export default sessionsRoutes;
