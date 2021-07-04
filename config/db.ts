import { Database, PostgresConnector } from "https://deno.land/x/denodb/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

config({ export: true });

const connection = new PostgresConnector({
    host: Deno.env.get("DB_HOST")!,
    username: Deno.env.get("DB_USERNAME")!,
    password: Deno.env.get("DB_PASSWORD")!,
    database: Deno.env.get("DB_DATABASE")!,
});

import Product from "../models/product.ts";

const db = new Database(connection);

db.link([Product]);

export default db;
