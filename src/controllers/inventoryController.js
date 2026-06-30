const inventoryService = require("../services/inventoryService");
const catchAsync = require("../utils/catchAsync");

const getProducts = catchAsync(async(req, res) => {
    const products = inventoryService.getProducts();

    res.status(200).json(products);
});

const purchase = catchAsync(async(req, res) => {
    const { productId, quantity } = req.body;

    const updatedProduct = inventoryService.purchaseProduct(productId, quantity);

    res.status(200).json({
        message: "Stock updated",
        product: updatedProduct
    });
});

const checkout = catchAsync(async(req, res) => {
    const { productId, quantity, discount } = req.body;

    const result = inventoryService.checkoutProduct(productId, quantity, discount);

    res.status(200).json(result);
});

module.exports = {
    getProducts,
    purchase,
    checkout
};