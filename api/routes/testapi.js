var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    // Disable caching for content files
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.send("API is working properly");
    
});

module.exports = router;