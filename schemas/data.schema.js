const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(80);
const email = Joi.string();
const phone = Joi.number().integer();
const vacant = Joi.string();
const cv = Joi.any();
const link = Joi.string();
const comment = Joi.string();

// const createDataSchema = Joi.object({
//   name: name.required(),
//   email: email.required(),
//   phone: phone.required(),
//   vacant: vacant.required(),
//   cv: cv,
//   link: link.required(),
//   comment: comment.required(),
// });

const createDataSchema = Joi.object({
  name: name,
  email: email,
  phone: phone,
  vacant: vacant,
  cv: cv,
  link: link,
  comment: comment,
});

module.exports = { createDataSchema };
