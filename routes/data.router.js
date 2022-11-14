const express = require('express');
const DataService = require('../services/data.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createDataSchema } = require('../schemas/data.schema');
const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })

const router = express.Router();
const service = new DataService();

router.get('/', async (req, res) => {
  res.json({
    status: 'No request avaibable',
  });
});

router.post(
  '/',
  validatorHandler(createDataSchema, 'body'),
  // upload.single('cv'),
  async (req, res, next) => {
    try {
      const data = req.body;
      // const file = req.file

      console.log(data)

      // console.log(file)

      console.log(req.body)
      const rta = await service.sendMail(data,
        // file
      );
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
