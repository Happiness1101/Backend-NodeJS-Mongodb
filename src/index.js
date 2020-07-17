const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const app = express();


mongoose.connect('mongodb+srv://BlogUser:jame1101@cluster0.pmu5g.mongodb.net/myapp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    //userUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connnected");
});

app.use(express.json());
const userRoute = require('./routes/users');
app.use("/user", userRoute);

app.route("/").get((req, res) => { res.json("First Rest API") })

app.listen(port, () => console.log('Server on port 4000'));




//main();