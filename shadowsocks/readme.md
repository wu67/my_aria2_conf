# Shadowsocks 相关
## ss 编译安装

安装编译依赖项及获取源码

```
sh ss.sh
// 或者复制 ss.sh 里的内容到 ssh工具窗口里运行也可以
```

切换到该目录
```
cd shadowsocks-libev
```

编译安装
```
./configure && make && make install
```


### ss config.json

- fast_open 参数可选，opvz架构的vps应去除该参数，因为不支持
- 仅为实例，自行修改参数
- 配置文件放在```/etc/shadowsocks```

```
{
    "server":["[::0]", "0.0.0.0"],
    "server_port": 12345,
    "password": "1234567890",
    "timeout": 120,
    "method": "aes-128-cfb",
    "fast_open": true
}
```

### 启动 ss

```ss-server -c /etc/shadowsocks/config.json -f /tmp/ss.pid```

- 可以多进程启动以支持多个SS用户，建立多个配置并启动即可；理论上内存够的话就能继续开，实际上2-3个端口就够用了


## [net-speeder](https://github.com/snooda/net-speeder)
