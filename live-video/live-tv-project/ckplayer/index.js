$(function () {
    // var liveData = [
    //     {name:'NHK World',url:'http://nhkwtvglobal-i.akamaihd.net/hls/live/263941/nhkwtvglobal/index_1180.m3u8'},
    //     {name:'CNN Live Event',url:'https://cnn-i.akamaihd.net/hls/live/253953/dotcomlive_1/v2/master.m3u8?__b__=650'},
    //     {name:'HKS',url:'http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8'},
    //     {name:'HKS(RMTP)',url:'rtmp://live.hkstv.hk.lxdns.com/live/hks'},
    //     {name:'NHK',url:'http://203.162.235.41:17801'},
    //     {name:'CCTV1',url:'http://hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221225556/index.m3u8'},
    //     {name:'CCTV4',url:'http://hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221225521/index.m3u8'},
    // ]

    ~function () {
        var liObj = $('<li></li>');
        for (var i in liveData) {
            liObj.text(liveData[i].name);
            liObj.attr('data-src', liveData[i].url);
            $('#listMain').append(liObj.clone())
        }
    }()

    var player = null;
    $('.video-list li').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        var url = $(this).attr('data-src');
        $('#liveUrl')[0].value = url;
        playLiveVideo(url);
    });

    $('#btnPlay').click(function () {
        playLiveVideo($('#liveUrl')[0].value);
    })

    function playLiveVideo(url) {
        player = null;
        player = new ckplayer({
            container: '.video',
            variable: 'player', //该属性必需设置
            autoplay: true, //自动播放
            video: url
        });
    }
    })