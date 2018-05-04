$(function () {
    const socket = io();

    //getting DOM elements
    var messageForm = $('#message-form');
    var messageBox = $('#message');
    var chat = $('#chat');

    //getting nickname form
    const nickForm = $('#nickForm');
    const nickError = $('#nickError');
    const nickname = $('#nickname');
    const usuarios = $('#usernames')

    nickForm.submit(e => {
        e.preventDefault();
        socket.emit('new user', nickname.val(), data => {
            if(data){
                $('#nickWrap').hide();
                $('#contentWrap').show();
            }
            else{
           }
        });
    })

    //eventos
    messageForm.submit(e => {
        e.preventDefault();
        socket.emit('send message', messageBox.val());
        messageBox.val('');
    })

    socket.on('new message', function (data) {
        chat.append('<b>' + data.nick + '</b>: ' + data.msg + '<br>');
    });

    socket.on('usernames', data => {
        let html='';
        for (let index = 0; index < data.length; index++) {
            html += `<p><i class="fas fa-user"></i>${data[index]}</p>`
        }
        usuarios.html(html);
    })
})