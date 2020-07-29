const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT;
const app = express();
const url = "mongodb+srv://BlogUser:jame1101@cluster0.pmu5g.mongodb.net/myapp?retryWrites=true&w=majority";
const URL = process.env.URL;

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    //userUnifiedTopology: true,
});
// .then(() => {
//     console.log('MongoDB Connected')
// })
// .catch(err => console.log(err))

// mongoose.connect('mongodb://localhost:27017/myapp', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     //userUnifiedTopology: true,
// });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connnected");
});

app.use(express.json());
const userRoute = require('./routes/users');
app.use("/user", userRoute);

app.route("/").get((req, res) => { res.json("First Rest API") })

app.listen(port, () => console.log(`enconde ==> ${port}`));




//main();