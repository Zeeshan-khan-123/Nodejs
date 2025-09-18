const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("this is 1 middle ware");
    next();
});

app.use((req, res, next) => {
    console.log("this is 2 middle ware");
    next();
});
app.get("/student", (req, res) => {
    res.json({
        data: "studemt data",
    });
});
app.get("/teacher", (req, res) => {
    res.json({
        data: "teacher data",
    });
});
app.listen(3000, (err) => {
    console.log("server running");
    if (err) console.log(err);
});