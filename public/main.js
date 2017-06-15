const socket = io();

// 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;

    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        events: {
          'onReady': bread,
          //'onStateChange': onPlayerStateChange
        }
      });
    }

    // 4. The API will call this function when the video player is ready.
    function bread(event) {
      // console.log(event.target);
      console.log('player ready');
      player.playVideo();
      // let frame = document.querySelector('iframe');
      // console.log(frame);
      // let i = setTimeout((event) => {
      //   event.target.stopVideo();
      // }, 2000)
    }



    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    //function onPlayerStateChange(event) {
      // console.log(event.data);
      // if (event.data === YT.PlayerState.PAUSE || event.data === -1) {
      //   console.log('pushed play');
      //   document.querySelector('.play-video').addEventListener('click', function() {
      //     console.log('play button works');
      //     player.playVideo();
      //   // when the play button is clicked, tell the server
      //     socket.emit('pushed play');
      //   });
      // } else if (event.data === YT.PlayerState.PLAYING) {
      //   console.log('pushed pause');
      //   document.querySelector('.pause-video').addEventListener('click', function() {
      //     console.log('pause button works');
      //     player.pauseVideo();
      //     socket.emit('pushed pause');
      //   });
      // }
    //}

    // socket.on('now playing')

    // function stopVideo() {
    //   player.stopVideo();
    // }

    // function playVideo() {
    //   console.log('playing video function');
    //   player.playVideo();
    // }
  




















  // $('#play-video').on('click', function(ev) {
  //   console.log(ev);
  //   $("#video")[0].src += "&autoplay=1";
  //   ev.preventDefault();
 
  // });


// $('#change-bg').on('click', function() {
//     // when the button is clicked, tell the server so
//     socket.emit('change bg color');
//   });

//   // Whenever the server emits 'update bg color', update the damn thing
//   socket.on('update bg color', function(data) {
//     $('body').css('background-color', data.color);
//   });
