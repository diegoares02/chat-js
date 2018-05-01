$(function(){
    const socket = io();

    //getting DOM elements
    var messageForm = $('#message-form');
    var messageBox = $('#message');
    var chat = $('#chat');

    //eventos
    messageForm.submit( e=>{
        e.preventDefault();
        socket.emit('send message',messageBox.val());
        messageBox.val('');
    })

    socket.on('new message',function(data){
        chat.append(data + '<br>');
    })
})