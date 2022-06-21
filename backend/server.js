const app = require("./app")
const PORT = process.env.port || 4000;
const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' })
const db = String(process.env.DATABASE).replace("<password>", process.env.PASSWORD)
//we get replace function in string
console.log(db)
mongoose.connect(db).then(() => {//it returns promise
    console.log("db connected")
}).catch((err) =>
    console.log(err)
)

app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})