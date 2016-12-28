# MAC 部分开发环境的搭建
### [安装Homebrew](http://brew.sh/index_zh-cn.html)

### 安装 node.js / ruby / git

```
brew install ruby
brew install node
brew install git
```

#### 更新命令
[注]在安装Homwbrew 和 **node.js**之后使用

```
brew update 
brew upgrade
brew cleanup
npm update -g
```

### ssh-key

```
ssh-keygen -t rsa -c abcd@gmail.com
```

若指定git多用户，可以在~/.ssh目录下新建config文件，写入

```
# Default github user(first@mail.com),User项直接填git，不用填在github的用户名
Host github.com
 HostName github.com
 # 多用户 此处用户名应为git
 User git
 IdentityFile ~/.ssh/id_rsa

# second user(second@mail.com)
# 建一个gitlab别名，新建的帐号使用这个别名做克隆和更新
Host **.**.**.**
 HostName **.**.**.**
 User abc
 IdentityFile ~/.ssh/id_rsa_annother
```

### git 配置
```
// 全局用户及邮箱
git config --global user.name "abcd"
git config --global user.email "abcd@gmail.com"

// 也可以切到项目目录下添加单项目用户
git config user.name "abcd"
git config user.email "abcd@gmail.com"

// 全局代理，国内有些地区访问 Github 实在是慢得过分
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'

// 创建一个新文件 .gitignore ，并添加以下内容，这样全部 git 仓库将会忽略以下内容所提及的文件
.DS_Store
Desktop.ini
._*
Thumbs.db
.Spotlight-V100
.Trashes
*.pyc
```

### git 取消 commit  
```
// 回退错误的提交，注意参数的差异
git reset --hard <commit_id>

// 已经推送到远程分支的，可以用此命令取消上一次的推送
git push origin HEAD --force
```

### 用npm 安装 gulp webpack
```
npm install -g webpack
```
- [npm安装gulp参考](https://github.com/lisposter/gulp-docs-zh-cn/blob/master/getting-started.md)
- [参考2](https://blog.jetbrains.com/webstorm/2014/11/gulp-in-webstorm-9/)

### 用 gem 安装 scss/sass
```
// 依赖于ruby
gem install scss
gem install sass
```

### webstorm 中 SCSS / SASS 的 file watcher设置

IDEA 系列的 IDE 都适用
```
// program:
/usr/local/bin/scss
/usr/local/bin/sass

// Arguments
// sourcemap参数 用于浏览器调试SCSS
// style参数 expanded展开 compressed压缩 compact简洁 nested嵌套缩进（默认值）
--sourcemap --no-cache --update --watch --style expanded $FileName$:$FileParentDir$/css/$FileNameWithoutExtension$.css

// output path to refresh
$FileNameWithoutExtension$.css:$FileNameWithoutExtension$.css.map
```