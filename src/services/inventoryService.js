const products = require("../config/products");
const AppError = require("../utils/AppError");

const getProducts = () => {
    return products;
};

const purchaseProduct = (productId, quantity) => {
    const product = products.find(item => item.id === productId);

    if (!product) throw AppError("Product not found", 404);

    product.stock += quantity;

    return product;
};

const checkoutProduct = (productId, quantity, discount) => {
    const product = products.find(item => item.id === productId);

    if (!product) throw AppError("Product not found", 404);

    if (quantity > product.stock) {
        throw AppError("Insufficient stock", 400);
    }

    product.stock -= quantity;

    const markedPrice = product.price + (product.price * 0.20);
    const finalPrice = markedPrice - (markedPrice * discount / 100);

    return {
        product: product.name,
        quantity,
        finalPrice,
        remainingStock: product.stock
    };
};

module.exports = {
    getProducts,
    purchaseProduct,
    checkoutProduct
};