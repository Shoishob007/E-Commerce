const app = require("./app");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting Down Server Due To Unhandled Uncaught Exception");

  server.close(() => {
    process.exit(1);
  });
});

//config
dotenv.config({ path: "backend/config/config.env" });

//connecting database
connectDatabase();

cloudinary.config({
  Cloud_name: "dmazsiqdy",
  api_key: "264918474723177",
  api_secret: "a57N2kLh9Ghyt_CZOISt4rOqlco",
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting Down Server Due To Unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});
