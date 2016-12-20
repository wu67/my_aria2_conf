# LAMP 相关

## lamp.sh 
在 Debian 系统的 vps 上一键无脑安装 LAMP ，期间需要设置用户密码
```bash
sh lamp.sh
```

## https 相关 
自行替换 abcde.com 
```
// 生成证书
openssl req -new -newkey rsa:2048 -sha256 -nodes -out abcde_com.csr -keyout abcde_com.key -subj "/C=CN/ST=BeiJing/L=BeiJing/O=abcde Inc./OU=Web Security/CN=abcde.com"

// 执行
(a2ensite default-ssl)&&(a2enmod ssl)&&(a2enmod rewrite)&&(service apache2 restart)

// 修改default-ssl && 000-default中ServerName，以及前者中的证书和key位置

// 在000-default加入, 全部重定向到https
Redirect permanent / https://abcde.com/
```