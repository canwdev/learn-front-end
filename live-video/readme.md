# H5与微信小程序直播开发

## 直播原理

![直播原理](res\直播原理.png)

常见视频格式：

| 格式\浏览器 | Chrome | Firefox | Safari |
| ----------- | ------ | ------- | ------ |
| mp4         | yes    | yes     | no     |
| webm        | yes    | yes     | no     |
| hls         | no     | no      | yes    |
| flv         | no     | no      | no     |

直播协议：

HLS协议、RTMP协议、 HTTP-FLV协议

### HLS协议

由于hls协议仅有Safari支持，所以需要用Safari浏览器打开。（或者可以使用ckplayer）

- http://live.streamingfast.net/osmflivech4.m3u8
- http://live.streamingfast.net/osmflivech5.m3u8
- http://live.streamingfast.net/osmflivech1.m3u8
- http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8
- http://nhkwtvglobal-i.akamaihd.net/hls/live/263941/nhkwtvglobal/index_900.m3u8
- http://nhkwtvglobal-i.akamaihd.net/hls/live/263941/nhkwtvglobal/index_1180.m3u8

![hls1](res\hls协议1.png)

### RTMP协议

该协议基于tcp，主要用在flash

### HTTP-FLV协议

即将音视频数据封装成FLV，然后通过HTTP协议传输给客户端。

优点：

- 可以在一定程度上避免防火墙的干扰 （例如， 有的机房只允许 80 端口通过）。
- 可以很好的兼容HTTP 302跳转，做到灵活调度。
- 可以使用HTTPS做加密通道。
- 很好的支持移动端（Android，IOS）。

## video详解

[video-demo](video-demo/index.html)

## 安装配置 nginx 服务器（Windows向）

### 安装配置 nginx

[Windows下载带有rtmp的nginx](https://github.com/illuspas/nginx-rtmp-win32)

编辑`conf/nginx.conf`

```conf
# 根节点
rtmp{
    server {
        listen 1935;
        chunk_size 4096;

        # RTMP 直播流配置
        application rtmplive {
            live on;
            max_connections 1024;
        }

        # hls 直播流配置
        application hls {
            live on;
            hls on;
            hls_path D:/Download;
            hls_fragment 5s;
        }
    }
}

# http节点
http {
# ..........

location /hls{
    types{
        application/vnd.apple.mpegurl m3u8;
        video/mp2t ts;
    }
    root D:/Download;
    add_header Cache-Control no-cache;
}

# ..........
}
```

### 安装配置 ffmpeg

[Windows下载ffmpeg](https://ffmpeg.zeranoe.com/builds/)

下载完成后建议把bin目录添加到系统环境变量。

```sh
ffmpeg -re -i xiaomi5s-soc.mp4 -vcodec libx264 -acodec aac -f flv rtmp://localhost:1935/rtmplive/rtmp
```

然后用potplayer/vlc播放器打开链接：`rtmp://127.0.0.1:1935/rtmplive/rtmp`就可以看到直播

```sh
ffmpeg -re -i xiaomi5s-camera.mp4 -vcodec libx264 -acodec aac -f flv rtmp://localhost:1935/hls/stream
```

`rtmp://localhost:1935/hls/stream`