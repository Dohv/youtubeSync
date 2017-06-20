const socket = io.connect('http://localhost:3000');

  const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an iframe> (and YouTube player)
    //    after the API code downloads.
    let player;

    function onYouTubeIframeAPIReady() {
      console.log('iframe loaded');
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'sGPrx9bjgC8',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange, 
        }
      });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(e) {
      console.log('video is ready to play');
      socket.emit('ready');
      //debugger;
      // console.log('status code of video is' + YT.PlayerState.UNSTARTED);
      // console.log('status code of video is' + YT.PlayerState.PLAYING);
      // console.log('status code of video is' + YT.PlayerState.PAUSED);
      // console.log('status code of video is' + YT.PlayerState.CUED);
      // console.log('status code of video is' + YT.PlayerState.ENDED);
      console.log(player.getPlayerState());

    }


    function onPlayerStateChange(e) {
      console.log('printing state =>', e.data)
      if (e.data === 3) {
        console.log('video is buffereing');
        socket.emit('status');
      } else if (e.data === 5) {
        console.log('video cued to specific time');
      } else if (e.data === 0) {
        console.log('video has ended');
      } else if (e.data === 2) {
        console.log('video is paused');
        socket.emit('pause');
      } else if (e.data === 1) {
        socket.emit('play');
        console.log('video is playing');
      } else if (e.data === -1) {
        console.log('video has not yet started');
      }


      socket.on('play', () => {
        console.log('play from server recieved')
        player.playVideo();
      })

      socket.on('pause', () => {
        console.log('pause from server recieved')
        //console.log(player.getCurrentTime());
        //player.seekTo(0);
        player.pauseVideo();
        player.seekTo(0);
      });

        

      // socket.on('sync', () => {
      //   let currTime = player.getCurrentTime();
      //   console.log(currTime);
      //   //console.log('server recieved time');
      //   player.seekTo(currTime);
      // })

      //thanks taka :-) for this code and all of your help
       // this is the video loader with the input button
      let btn = document.querySelector('.load');
      btn.addEventListener('click', (event) => {
        console.log(event.target);
        let value = document.querySelector('input').value;
        // now parse the URL so it only grabs the id
        console.log(value.substr(value.indexOf('=')+1));
        player.loadVideoById({
          //not sure how substr works, i would use slice i think
          'videoId': `${value.substr(value.indexOf('=')+1)}`,
          'suggestedQuality': 'large'
        });
      })


    }

