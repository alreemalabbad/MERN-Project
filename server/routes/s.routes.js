const Chatcontroller = require('../controllers/s.controller');
module.exports = function(app){
    app.get('/api/chat', Chatcontroller.getAllChats);
    app.get('/api/chat/:id', Chatcontroller.getChat);
    app.post('/api/name', Chatcontroller.createChat);
    app.put('/api/chat/:id', Chatcontroller.updateChat);
    // app.delete('/api/Chat/:id', Chatcontroller.deleteChat);
}
