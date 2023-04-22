const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.post("/sendmail", controller.sendMail);
router.post("/updatePassword", controller.updatePassword);
router.post("/login", controller.getStudentsById);
router.post("/addcomplaint", controller.addComplaint);
router.post("/getcomplaint", controller.getComplaint);
router.get("/gettitle", controller.getTitle);
router.post("/getlinks", controller.getLinks);
router.post("/addlinks", controller.addLinks);

module.exports = router;
