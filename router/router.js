const tb_data=require("../controller/tb_data.controllers")
const router = require("express").Router();

router.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.post(`/create`,tb_data.create)

  router.delete(`/delete/:id`, tb_data.delete);
  router.get(`/fetchData`, tb_data.fetchData);
  router.put(`/updateData/:id`,tb_data.updateData)


  module.exports = router;