const { listen } = require("socket.io");

const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);




Socketio.on("connection", (socket) => {
  setTimeout(()=> socket.emit("wlan", {status : "Diabled"}), 1500);
  setTimeout(()=> socket.emit("wlan", {status : "Enabled"}), 5000);
  setTimeout(()=> socket.emit("wlan", {status : "Pending"}), 6000);
  
});

Http.listen(3000, () => {
  console.log("Server is listening at : 3000");
});
