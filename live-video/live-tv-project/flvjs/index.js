$(function () {
    // var liveData = [
    //     {name:'NHK World',url:'http://nhkwtvglobal-i.akamaihd.net/hls/live/263941/nhkwtvglobal/index_1180.m3u8'},
    //     {name:'HKS',url:'http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8'},
    //     {name:'HKS(RMTP)',url:'rtmp://live.hkstv.hk.lxdns.com/live/hks'},
    //     {name:'NHK',url:'http://203.162.235.41:17801'},
    //     {name:'CCTV1',url:'http://hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221225556/index.m3u8'},
    //     {name:'CCTV4',url:'http://hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221225521/index.m3u8'},
    // ]

    ~ function () {
        var liObj = $('<li></li>');
        for (var i in liveData) {
            liObj.text(liveData[i].name);
            liObj.attr('data-src', liveData[i].url);
            $('#listMain').append(liObj.clone())
        }
    }()

    $('.video-list li').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        var url = $(this).attr('data-src');
        $('#liveUrl')[0].value = url;
        playLiveVideo(url);
    });

    $('#btnPlay').click(function () {
        playLiveVideo($('#liveUrl')[0].value);
    });

    $('#example-video').click(function(){
        var v = $(this)[0];
        if(v.paused){
            v.play();
        } else {
            v.pause();
        }
    });

    var video = $('#example-video')[0];
    function playLiveVideo(url) {
        if (flvjs.isSupported()) {
            var flvPlayer = flvjs.createPlayer({
                type: 'flv',
                url: url
            });
            flvPlayer.attachMediaElement(video);
            flvPlayer.load();
            flvPlayer.play();
        }
    }


})