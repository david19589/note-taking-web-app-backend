import mongoose from "mongoose";

const connection = () => {
  try {
    const connectionUrl = `${process.env.MONGO_PROTOCOL}://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`;
    return mongoose.connect(connectionUrl);
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default connection;
