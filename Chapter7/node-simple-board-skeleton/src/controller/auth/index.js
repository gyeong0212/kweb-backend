const { Router } = require("express");

const ctrl = require("./ctrl");
const router = Router();

router.get("/sign_in", ctrl.signInForm); // 구조화하기 위함. 그래서 sign_in 사용
router.post("/sign_in", ctrl.signIn);
router.get("/sign_up", ctrl.signUpForm);
router.post("/sign_up", ctrl.signUp);
router.get("/sign_out", ctrl.signOut);

module.exports = router;
