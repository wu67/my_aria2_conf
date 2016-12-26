# [Aria2](https://github.com/aria2/aria2) 的配置
按自己的想法稍微'优化'了一下参数，伪装成了 utorrent-1.8.7 的 UA，添加了一些 tracker。
完成此配置时，aira2 的版本号为 1.29.0，请自行测试在更低版本上能否正常运行，理论上应该从版本号 1.18.4 开始都可以正常使用的

注意事项:

1. PT 用户请务必把`bt-enable-lpd enable-dht enable-peer-exchange`这三个参数的值设置为`false`，并自行修改(增加)你的 tracker
1. BT 用户可以直接用了，影响不是很大，当然也可以修改 tracker
1. 加密参数 bt-require-crypto 等 保留默认了，国内不少人做种都不开加密，强制加密之后，不少种子的下载速度慢得感人
1. 如果你不知道前三项在说什么，大可**不必在意**，直接**看后面的**即可
1. 请务必**自己修改**配置里`dir`和`rpc-secret`参数:
    - `dir`为下载文件的保存路径，例如`dir=/Users/me/Downloads`
    - `rpc-secret`为一个可选的口令(推荐使用，非必选，可以删掉)，如果设置了`rpc-secret=12345`, 那么:
       + **默认**的 JSON-RPC Path 应该设为 `http://token:12345@127.0.0.1:6800/jsonrpc`
       + **如果**能分别设置`JSON-RPC Path`和`rpc-secret`，JSON-RPC Path 应设置为 `http://127.0.0.1:6800/jsonrpc`，rpc-secret 直接填

## 安装 Aria2
在 Mac OS 下推荐用 `brew install aira2` 安装，其他平台请自行判断；可以从[这里](https://github.com/aria2/aria2)获取可执行文件和源码。

## 配置文件的路径
在 Mac OS / *nix 系统下推荐的路径为 `~/.aria2/aria2.conf`

## 启动
```bash
aria2c -D
```
- 推荐写进 shell 脚本(例如本项目的 aria2.sh)，并将它添加到开机启动项
- 如果配置文件没按本文推荐的路径放置，启动命令则为`aria2c --conf-path="*****/aria2.conf" -D`,配置文件路径自行替换
- 至于 Windows 用户， 可以看看[这个说明](https://github.com/acgotaku/BaiduExporter/tree/master/aria2c)

## Aria2 控制界面，个人推荐使用[YAAW](http://binux.github.io/yaaw/demo/)

## 浏览器扩展
在浏览器里安装扩展以快速添加下载链接到 Aria2

- Firefox 可以用 [send-to-aria2](https://addons.mozilla.org/zh-CN/firefox/addon/send-to-aria2/aria2.md)
- Chrome 可以用 [YAAW for Chrome](https://chrome.google.com/webstore/detail/yaaw-for-chrome/dennnbdlpgjgbcjfgaohdahloollfgoc)

###### 最后说一下
配置里的很多 tracker 是从各个动漫 BT 站的种子上 copy 下来的

另外, 配置里的大部分 ip tracker 使用了 [@ngosang](https://github.com/ngosang) 的 [trackerslist](https://github.com/ngosang/trackerslist) 项目里提供的 tracker 