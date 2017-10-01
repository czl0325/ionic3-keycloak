# ionic3-keycloak
ionic3集成keycloak登录


keycloak就是一个类似第三方登录的接口，你在你的应用集成了keycloak，然后登录时候会跳到keycloak的登录页面，输入用户名密码后登录成功会回跳回来。并且把登录信息传递回来。

首先你要在   http://www.keycloak.org/   上下载keycloak，下载完解压，打开bin目录下的standalone.bat启动服务。

启动完服务后，在浏览器上输入127.0.0.1:8080打开keycloak页面，第一次打开先创建个用户，我这里用户名密码都输admin，创建成功后点击Administration Console进入下一页，输入用户名密码登录，在左上角可以添加realm，我这里创建了一个叫qipai的realm，然后点击左侧栏的clients创建一个clientId，我这边叫qipaipm，注意设置，如图

![](http://upload-images.jianshu.io/upload_images/2587882-42983664f6c0264b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

左侧栏user添加一个用户

![](http://upload-images.jianshu.io/upload_images/2587882-c923760d45d608cc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这里设置新的密码

![](http://upload-images.jianshu.io/upload_images/2587882-f847caaaa29d7d96.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

ionic客户端：

1.新建一个Ionic工程，ionic start testKeycloak blank

2.新建一个服务,ionic g provider keycloak

3.index.html添加   <script src="http://127.0.0.1:8080/auth/js/keycloak.js"></script>   ，先运行看看能不能找到keycloak.js文件，没报错就是添加成功。

4.在keycloak.ts里的init()函数里面吧服务端设置的参数配置进去



![](http://upload-images.jianshu.io/upload_images/2587882-efcbdecf98ebf4dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

但是目前填完用户名密码回调回来显示跨域错误，还没有解决。解决后更新代码。

![](http://upload-images.jianshu.io/upload_images/2587882-50bb8cf310cec334.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
