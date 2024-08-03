const mongoose = require("mongoose");

const conn = async (req, res)=>{
    try {
        await mongoose.connect(
            "mongodb+srv://sidhart1010:3abPXf7ENe75Y2ER@cluster0.ny4ez4y.mongodb.net/"
        )
        .then(()=>{
            console.log("Connected");
        });
    } catch (error) {
        res.status(400).json({
            message: "Not Connected",
        });
    }
};
conn();