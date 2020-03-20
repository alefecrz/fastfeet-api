import * as Yup from 'yup';

import Recipents from '../models/Recipients';

class RecipientsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zipCode: Yup.string()
        .required()
        .min(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.json({ error: 'Validate fails' });
    }

    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zipCode,
    } = await Recipents.create(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zipCode,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.string(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      zipCode: Yup.string().min(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.json({ error: 'Validate fails' });
    }

    const recipent = await Recipents.findByPk(req.body.id);

    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zipCode,
    } = await recipent.update(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zipCode,
    });
  }
}

export default new RecipientsController();
