import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_PORT } from "./config/index.ts";

import router from "./routes/index.ts";
import db from "./config/db.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

db.sync({ drop: true });

console.log("DB Connected");

await app.listen({ port: +APP_PORT });

console.log("Server Running on : localhost:8000");
