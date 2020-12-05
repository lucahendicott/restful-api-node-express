const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("we have been hit!");
  res.json({
    msg: "success",
    status: 200,
    data: { user: "Thomas", title: "Instructor" },
  });
});

router.get("/isActive", (req, res) => {
  console.log("we have been hit!");
  res.json({
    msg: "success",
    status: 200,
    data: { active: true },
  });
});

router.put("/putexample", (req, res) => {
  console.log(req.body);
  res.json({
    msg: "success",
    status: 200,
  });
});

router.post("/queryString", (req, res) => {
    console.log(req.params);
    res.json(req.query);
});

router.patch("/parameter/:hash/:name", (req, res) => {
    console.log(req.params);
    res.json({ msg: "success" });
});

module.exports = router;