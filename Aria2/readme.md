# [Aria2](https://github.com/aria2/aria2) 的配置
按自己的想法稍微'优化'了一下参数，伪装成了 utorrent 的 UA，添加了一些 tracker

注意事项:

1. PT 请务必把`bt-enable-lpd enable-dht enable-peer-exchange`这三个参数的值设置为`false`，并自行增加你的 tracker
1. BT 可以直接用了，影响不是很大，当然也可以改 tracker
1. 加密参数 bt-require-crypto 等 保留默认了，国内不少人做种都不开加密的，打开强制加密的话，不少种子下载速度慢得感人
1. 如果你不知道前面的注意事项在说什么，大可不必在意，直接看后面一条注意事项就行了
1. 配置里`dir`和`rpc-secret`参数留空了，务必自己修改，前者为下载文件保存路径，后者为一个加密口令，该口令可选(个人建议使用，如果不使可以自行删掉)，如果设置了`rpc-secret=12345`, 那么你的用户界面里的 JSON-RPC Path 应该设置为 `http://token:12345@127.0.0.1:6800/jsonrpc`, 注意IP地址和端口填你自己的。另外，无论是配置文件还是启动命令里的路径，(个人建议)都使用**绝对路径**

## 安装 Aria2
在 Mac OS 下推荐用 `brew install aira2` 安装，其他平台请自行判断。

## 启动方法
```bash
aria2c --conf-path="/Users/wk/aria2/aria2.conf" -D
```
- 这只是个例子，请把配置文件的路径替换成你的配置文件所在路径
- 你也可以把这句命令写进 shell 脚本，甚至将它添加到开机启动项
- 至于 Windows 用户， 可以看看[这个说明](https://github.com/acgotaku/BaiduExporter/tree/master/aria2c)

## [YAAW](http://binux.github.io/yaaw/demo/) - 一个简洁的 Aria2 控制界面

为了方便使用，还可以在浏览器里安装扩展以快速添加下载到 Aria2

- Firefox 可以用 [send-to-aria2](https://addons.mozilla.org/zh-CN/firefox/addon/send-to-aria2/aria2.md)
- Chrome 可以用 [YAAW for Chrome](https://chrome.google.com/webstore/detail/yaaw-for-chrome/dennnbdlpgjgbcjfgaohdahloollfgoc)

###### 最后说一下
配置里的很多 tracker 是从各个动漫 BT 站的种子上 copy 下来的

另外, 配置里的大部分 ip tracker 使用了 [@ngosang](https://github.com/ngosang) 的 [trackerslist](https://github.com/ngosang/trackerslist) 项目里提供的 tracker 