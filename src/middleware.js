const jwt = require("jsonwebtoken");
const config = require("./config");

const checkToken = (req, res, next) => {
    let token = req.headers["authorization"];
    console.log(token);
    //token = token.slice(7, token.length);
    if (token) {
        jwt.verify(token, config.key, (err, decoded) => {
            if (err) {
                return res.json({
                    status: false,
                    msg: "token is invalid"
                })
            } else {
                req.aaa = decoded;
                console.log("decode", req.aaa);
                console.log(`enconde ==> ${req.aaa.username}`);
                next();
            }
        })
    } else {
        return res.json({
            status: false,
            msg: "Token is not provided",
        })
    }

};
module.exports = { checkToken: checkToken, };