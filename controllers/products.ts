import { v4 as uuid } from "https://deno.land/std@0.74.0/uuid/mod.ts";
import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import Product from "../models/product.ts";

// @desc    Get all products
// @route   GET /api/product
const getProducts = async ({ response }: RouterContext) => {
    try {
        const products = await Product.all();

        response.body = products;
    } catch (err) {
        console.log(err);
        response.body = { error: "Something went wrong" };
        response.status = 500;
    }
};

// @desc    Get single product
// @route   GET /api/product/:id
const getProduct = async ({ params, response }: RouterContext) => {
    try {
        if (!params.uuid) throw new Error("Bad Input");
        const product = await Product.where("uuid", params.uuid).first();

        if (!product) {
            response.body = { product: "Product not found" };
            response.status = 404;
            return;
        }

        response.body = product;
    } catch (err) {
        console.log(err);
        response.body = { error: "Something went wrong" };
        response.status = 500;
    }
};

// @desc    Add product
// @route   Post /api/product
const addProduct = async ({ request, response }: RouterContext) => {
    try {
        const { name, description, price } = await request.body().value;

        const post = await Product.create({ name, description, price, uuid: uuid.generate() });

        console.log(post);
        response.body = post;
    } catch (err) {
        console.log(err);
        response.body = { error: "Something went wrong" };
        response.status = 500;
    }
};

// @desc    Update product
// @route   PUT /api/product/:id
const updateProduct = async ({ params, request, response }: RouterContext) => {
    const { name, description, price } = await request.body().value;

    try {
        if (!params.uuid) throw new Error("Bad Input");
        const product = await Product.where("uuid", params.uuid).first();

        if (!product) {
            response.body = { product: "Post not found" };
            response.status = 404;
            return;
        }

        product.name = name;
        product.description = description;
        product.price = price;

        await product.update();

        response.body = product;
    } catch (err) {
        console.log(err);
        response.body = { error: "Something went wrong" };
        response.status = 500;
    }
};

// @desc    Delete product
// @route   DELETE /api/product/:id
const deleteProduct = async ({ params, response }: RouterContext) => {
    try {
        if (!params.uuid) throw new Error("Bad Input");
        const product = await Product.where("uuid", params.uuid).first();

        if (!product) {
            response.body = { product: "Product not found" };
            response.status = 404;
            return;
        }

        await product.delete();

        response.body = { message: "Product deleted successfully" };
    } catch (err) {
        console.log(err);
        response.body = { error: "Something went wrong" };
        response.status = 500;
    }
};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };
