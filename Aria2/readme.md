# [Aria2](https://github.com/aria2/aria2) 的配置
按自己的想法稍微'优化'了一下参数，伪装成了 utorrent 的 UA，添加了一些 tracker

## 安装 Aria2
```brew install aira2```
- 注意，配置里的 dir 和 rpc-secret 参数留空了，务必自己修改，前者为下载路径，后者为一个口令，该口令可选(个人建议使用)，如果设置了
```rpc-secret=12345670```, 那么你的用户界面里的 JSON-RPC PATH 应该设置为 ```http://token:12345670@127.0.0.1:6800/jsonrpc```, 注意IP地址和端口填你自己的。另外，无论是配置文件还是启动命令里的路径，都应该使用**绝对路径** 

## 启动方法

```bash
aria2c --conf-path="$yourConfPathHere/aria2.conf" -D
```

## [YAAW](http://binux.github.io/yaaw/demo/) - 一个简洁的 Aria2 控制界面

为了方便使用，还可以在浏览器里安装扩展以快速添加下载到 Aria2

- Firefox 可以用 [send-to-aria2](https://addons.mozilla.org/zh-CN/firefox/addon/send-to-aria2/aria2.md)
- Chrome 可以用 [YAAW for Chrome](https://chrome.google.com/webstore/detail/yaaw-for-chrome/dennnbdlpgjgbcjfgaohdahloollfgoc)

###### 最后说一下
配置里的很多 tracker 是从各个动漫 BT 站的种子上 copy 下来的

另外, 配置里的大部分 ip tracker 使用了 [@ngosang](https://github.com/ngosang) 的 [trackerslist](https://github.com/ngosang/trackerslist) 项目里提供的 tracker 