const express = require("express");
const router = express.Router();
const {
    getProducts,
    purchase,
    checkout
} = require("../controllers/inventoryController");

router.get("/products", getProducts);
router.post("/purchase", purchase);
router.post("/sales/checkout", checkout);

module.exports = router;