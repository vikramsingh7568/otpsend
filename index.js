// var sid = "ACb3f60ee9c3653a8e19bcf03480054ce6";
// var auth_token = "cba0f32f759ddf2b7be68bbaf76db526";
// let otp = "123456"
// var twilio = require("twilio")(sid, auth_token);

// twilio.messages
//   .create({
//     from: "+19458995964",
//     to: "+918514075565",
//     body: `this is testing otp from my side to my phone ok vikram${otp}`,
//   })
//   .then(function(res) {console.log("message has sent!")})
//   .catch(function(err)  {
//     console.log(err);
//   });


const otpGen = require("otp-generator")
let otp = otpGen.generate(6, { digits: true, upperCaseAlphabets: false, lowerCaseAlphabets:
     false, specialChars: false })

var sid = "";
var auth_token = "";
var twilio = require("twilio")(sid, auth_token);

twilio.messages
    .create({
        from: "+13608032863",
        to: "+918514075565",
        body: `this is testing otp is ${otp}`,
    })
    .then(function (res) { console.log("message has sent!") })
    .catch(function (err) {
        console.log(err);
    });
    // step one create empty folder open the folder in vs code
    // step two create index.js file in that folder  press enter
    // step three open terminal and write npm init -y press enter
    // step four in that terminal write npm i otp-generator press enter
    // step five in the terminal write npm i twilio press enter
    // npm init 
   // npm i otp-generator
   // npm i twilio
   // go to this website and create the account and copy paste teh sid token or twilio no
    //https://www.twilio.com/
    // 