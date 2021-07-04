import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

import productRouter from "./product.ts";

router.get("/api", (context: RouterContext) => {
    context.response.body = { message: "Hello World" };
});

router.use(productRouter.prefix("/api/product").routes());

export default router;
