const mongoose = require("mongoose");

// mongoose.set('debug', true);

// this is gonna return the data in future to us
mongoose.connect("mongodb://127.0.0.1:27017/RegistrationForm", {
    // to avoid debrication warnings
    // useNewUrlParser:true,
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(e);
    console.log(`didn't connect`);
})