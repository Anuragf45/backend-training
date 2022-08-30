const myUserModel = require("../models/myUserModel");
const jwt = require('jsonwebtoken')

//for creating data


const createData = async function (req, res) {


    try {
        let data = req.body;
        let user = await myUserModel.create(data);
        res.status(201).send({ user })
    }
    catch (error) {
        res.status(404).send(error)
        
        console.error(error)
    }
}


//for login purpose
const login = async function (req, res) {
    try {
        let userId = req.body.emailId;
        let password = req.body.password;
        let user = await myUserModel.findOne({ emailId: userId, password: password })

        if (!user) return res.status(401).send({ status: false, msg: "userId or Password is incorrect" })

        let token = jwt.sign({
            userId: user._id.toString(),
            batch: "plutonium",
            organisation: "FunctionUp"
        }, "functionUp is secret key")

        res.setHeader("x-auth-token", token)
        res.status(201).send({ status: true, token: token })
    } catch (error) {
        res.status(404).send({ msg: error })
    }
}


const getUserData = async function (req, res) {



    try {
        let userId = req.params.userId;
        let userDetails = await myUserModel.findById(userId);
        if (!userDetails)
            return res.status(404).send({ status: false, msg: "No such user exists" });

        res.send({ status: true, data: userDetails });
    } catch (error) {
        res.status(404).send({ msg: error })
    }


}

const updateUser = async function (req, res) {


    try {
        let userId = req.params.userId;
        let updateDetails = req.body;


        let user = await myUserModel.findById(userId);

        if (!user) {
            return res.status(400).send("No such user exists");
        }


        let updatedUser = await myUserModel.findOneAndUpdate({ _id: userId }, updateDetails);
        res.status(202).send({ status: true, data: updatedUser });
    } catch (error) {
        res.status(404).send({ msg: "no such user" })
    }
};


const deleteUser = async function (req, res) {


    try {
        let userId = req.params.userId;

        let user = await myUserModel.findById(userId);

        if (!user) {
            return res.status(401).send("No such user exists");
        }

        let upDel = await myUserModel.findOneAndUpdate({ _id: userId }, { "isDeleted": true });
        res.status(200).send("user is deleted");
    } catch (error) {
        res.status(404).send("not found")
    }
}

module.exports.login = login
module.exports.createData = createData;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;