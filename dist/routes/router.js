"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/messages', (req, res) => {
    res.json({
        ok: true,
        message: 'All ok!'
    });
});
router.post('/messages', (req, res) => {
    const message = req.body.message;
    res.json({ message });
});
exports.default = router;
