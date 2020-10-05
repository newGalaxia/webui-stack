const { listen } = require("socket.io");

const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);




Socketio.on("connection", (socket) => {
  setTimeout(()=> socket.emit("wlan", {status : "Disabled"}), 3000);
  setTimeout(()=> socket.emit("wlan", {status : "Enabled"}), 6000);
  setTimeout(()=> socket.emit("wlan", {status : "Pending"}), 12000);
  setTimeout(()=> socket.emit("wlan", {status : "Disabled"}), 15000);
  setTimeout(()=> socket.emit("wlan", {status : "Enabled"}), 18000);
  setTimeout(()=> socket.emit("wlan", {status : "Pending"}), 21000);
  
});

Http.listen(3000, () => {
  console.log("Server is listening at : 3000");
});
