const mongoose = require('mongoose');
const connection = "mongodb+srv://user1:AxmsC3a09dRBV056@imagecitationmachine.pizxlt2.mongodb.net/searches?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));