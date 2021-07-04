import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";

class Product extends Model {
    static table = "products";
    static timestamps = true;

    static fields = {
        id: { primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID },
        name: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        price: { type: DataTypes.INTEGER },
    };
}

export default Product;
