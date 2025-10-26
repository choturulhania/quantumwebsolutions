const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { v4: uuidv4 } = require("uuid");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" } // allow your Netlify frontend
});

// Store chats in memory for now (later use DB)
const chats = {};

app.get("/create", (req, res) => {
    const chatId = uuidv4();
    chats[chatId] = { messages: [] };
    res.json({ chatId });
});

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinChat", (chatId) => {
        socket.join(chatId);
        console.log(`User ${socket.id} joined chat ${chatId}`);
        if (chats[chatId]) {
            socket.emit("chatHistory", chats[chatId].messages);
        }
    });

    socket.on("sendMessage", ({ chatId, user, text }) => {
        if (!chats[chatId]) return;
        const msg = { user, text, time: Date.now() };
        chats[chatId].messages.push(msg);
        io.to(chatId).emit("newMessage", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
