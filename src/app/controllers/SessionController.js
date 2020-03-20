import * as Yup from 'yup';

import User from '../models/User';

class SessionController {
  async store(req, res) {
    const userExist = User.findOne({ where: { email: req.body.email } });
    return res.json(userExist);
  }
}

export default new SessionController();
