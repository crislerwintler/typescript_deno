import { Router } from 'https://deno.land/x/oak@v6.4.2/mod.ts';
import {
  getUser,
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from './controller/user.ts'

import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from "./controller/user.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello Deno!";
});

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.post("/user", addUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello Deno!"
});

router.get("./users", getUsers);
router.get("./user/:id", getUser);
router.post("./user/", addUser);
router.put("./user/:id", updateUser);
router.delete("./user/:id", deleteUser);

export default router;
