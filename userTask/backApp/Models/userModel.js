const mongoose = require("mongoose");

const userModel = mongoose.model("users", {
  //   userId: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  userGroup: { type: String },
  //   userGroup: { type: Boolean },
});

module.exports = userModel;

// {
//     "_id": {
//       "$oid": "63340b7f7c7a16c6a62f56ee"
//     },
//     "userId": "6ddca37b-8f02-43de-9ea1-81837c743026",
//     "firstName": "John",
//     "lastName": "Appleseed",
//     "userGroup": "Operator",
//     "userAuthorizations": [
//       {
//         "authorizationKey": "jumping",
//         "granted": true
//       },
//       {
//         "authorizationKey": "standing",
//         "granted": true
//       },
//       {
//         "authorizationKey": "sitting",
//         "granted": true
//       },
//       {
//         "authorizationKey": "running",
//         "granted": false
//       }
//     ]
//   }
