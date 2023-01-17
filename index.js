const express = require("express");
const app = express();

app.listen(9000, () => {
    console.log("listening on 9000");
});

app.get("/", (req, res) => {
    res.send("나가주세요");
});
