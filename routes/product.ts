import { Router } from "https://deno.land/x/oak/mod.ts";
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct } from "../controllers/products.ts";

const router = new Router();

router.get("/", getProducts);
router.get("/:uuid", getProduct);
router.post("/", addProduct);
router.put("/:uuid", updateProduct);
router.delete("/:uuid", deleteProduct);

export default router;
