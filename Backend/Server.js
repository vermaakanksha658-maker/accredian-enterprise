require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");


const app = express();

connectDB();

app.use(cors());
app.use(express.json());




const enquiryRoutes = require("./Routes/enquiryRoutes");


app.use("/api/enquiry", enquiryRoutes);




app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});





