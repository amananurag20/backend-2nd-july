const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://amananurag20:d4cbOLDUr6xWSJPy@cluster0.gcimphc.mongodb.net/mernstack"
    );

    console.log("db connected");
  } catch (e) {
    console.log(e);
  }
};

module.exports = dbConnect;