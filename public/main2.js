$(function() {
  var socket = io();

  // with socket.io, the client side is pretty straightforward -
  // the socket object will either emit events to the server,
  // or it will act on events being emitted from the server

  $('.input').on('click', function() {
    // when the button is clicked, tell the server so
    socket.emit('change iframe src');
  });
  
  // Whenever the server emits 'update bg color', update the damn thing
  socket.on('update iframe src', function(data) {
    document.querySelector('.video').setAttribute('src', data.URL);
  });
  document.querySelector('.test').addEventListener('click', () => {
    const frame = document.querySelector('iframe');
    console.log(frame.body);
  })
  //console.log(player);
});