const app = require("./app");
const { connectDB } = require("./config/Database");
connectDB();
app.listen(process.env.PORT , ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})