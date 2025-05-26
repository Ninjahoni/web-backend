const express = require('express');
const { connectDB, sequelize } = require('./database/database');
require("dotenv").config();

const app = express();
app.use(express.json());


const PORT = process.env.PORT;

app.get('/', (req, res) => {

res.send('Hi, World! Welcome to Express.js server.');

});
app.get('/about', (req, res) => {

res.send('Hi, World! welcome to endpoint.');

});
app.use('/api/user', require('./route/userRoute'));
app.use('/api/product', require('./route/productRoute'));
app.use('/api/order', require('./route/orderRoute'));
app.use("/api/practise", require('./route/practiseroute'));
//app.listen(PORT, () => {
const startServer = async () => {
    await connectDB();
    await sequelize.sync();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
});
};
startServer();
