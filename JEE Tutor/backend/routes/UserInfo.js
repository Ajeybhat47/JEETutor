const router = require("express").Router();
const User=require('../models/user.model'); 

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

  
// router.route("/").get(function (req, res) {
//    users.find().then(users=>res.json(users))
//     .catch(err=>res.status(400).json('Error:'+err))
// });

// router.route('/:id').get((req,res)=>{
//   users.findById(req.params.id)
//   .then(users=>res.json(users))
//   .catch(err=>res.status(400).json('Error:'+err))
// })

router.route("/register").post(async (req, res) => {
  const { fname, lname, email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

router.route("/login-user").post( async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});

router.route("/userData").post(async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

// router.route().listen(5000, () => {
//   console.log("Server Started");
// });

// router.route("/forgot-password").post( async (req, res) => {
//   const { email } = req.body;
//   try {
//     const oldUser = await User.findOne({ email });
//     if (!oldUser) {
//       return res.json({ status: "User Not Exists!!" });
//     }
//     const secret = JWT_SECRET + oldUser.password;
//     const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
//       expiresIn: "5m",
//     });
//     const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
//     var transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "adarsh438tcsckandivali@gmail.com",
//         pass: "rmdklolcsmswvyfw",
//       },
//     });

//     var mailOptions = {
//       from: "youremail@gmail.com",
//       to: "thedebugarena@gmail.com",
//       subject: "Password Reset",
//       text: link,
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Email sent: " + info.response);
//       }
//     });
//     console.log(link);
//   } catch (error) {}
// });

// router.route("/reset-password/:id/:token").get(async (req, res) => {
//   const { id, token } = req.params;
//   console.log(req.params);
//   const oldUser = await User.findOne({ _id: id });
//   if (!oldUser) {
//     return res.json({ status: "User Not Exists!!" });
//   }
//   const secret = JWT_SECRET + oldUser.password;
//   try {
//     const verify = jwt.verify(token, secret);
//     res.render("index", { email: verify.email, status: "Not Verified" });
//   } catch (error) {
//     console.log(error);
//     res.send("Not Verified");
//   }
// });

// router.route("/reset-password/:id/:token").post(async (req, res) => {
//   const { id, token } = req.params;
//   const { password } = req.body;

//   const oldUser = await User.findOne({ _id: id });
//   if (!oldUser) {
//     return res.json({ status: "User Not Exists!!" });
//   }
//   const secret = JWT_SECRET + oldUser.password;
//   try {
//     const verify = jwt.verify(token, secret);
//     const encryptedPassword = await bcrypt.hash(password, 10);
//     await User.updateOne(
//       {
//         _id: id,
//       },
//       {
//         $set: {
//           password: encryptedPassword,
//         },
//       }
//     );
    

//     res.render("index", { email: verify.email, status: "verified" });
//   } catch (error) {
//     console.log(error);
//     res.json({ status: "Something Went Wrong" });
//   }
// });



module.exports = router;