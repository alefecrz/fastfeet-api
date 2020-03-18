import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ test: 'test' }));

export default routes;
