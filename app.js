const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require('./routes/BlogRoutes');

const app = express();

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/27017",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//     (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Connected to MongoDB");
//       }
//     }
//   );

mongoose.connect('mongodb://localhost:27017',
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  }
);

//middleware
app.use(express.json());
app.use("/api/blogs", blogRouter);
app.listen(2000, () => {
  console.log("Server is running on port 2000");
});


module.exports = app;
