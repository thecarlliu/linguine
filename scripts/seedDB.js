const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/carbos",
    {
        useMongoClient: true
    }
);

const endorsementSeed = [
    {
        text: "",
        name: "",
        email: "",
        role: "",
        phone: "",
    }
];

db.Endorsement
    .remove({})
    .then(() => db.Endorsement.collection.insertMany(endorsementSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
