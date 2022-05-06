const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
});
app.use(express.static(__dirname)); //load js and css-static files
app.get("/", (req, res) => {
  
         //render html
    res.sendFile(__dirname + "/websitelanding.html"); //by default index.html
}
);