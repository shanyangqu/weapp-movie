#微信小程序电影网 - weapp-movie

![github](https://github.com/leeleanlean/weapp-movie/blob/master/app.gif?raw=true "github")

#开发总结

### 1、项目结构
    images：存放图片
    pages：存放页面
    utils：公共资源文件
    app.json：项目配置
    
### 2、构建项目流程

    2-1 开发工具安装，以及项目创建：
        目前小程序开发工具为破解版，安装0.7版本后，安装0.9版本覆盖，然后下载补丁文件覆盖即可
        
    2-2 配置底部菜单
    
        修改app.json中的topBar
    
        "tabBar":{
        "color":"#444",
        "selectedColor":"#dd514c",
        "borderStyle":"white",
        "background-color":"#fff",
        "list":[{
            "pagePath":"pages/hot/hot",
            "iconPath":"images/topBar/navBar1.png",
            "selectedIconPath":"images/topBar/navBar11.png",
            "text":"热映"
        },{
            "pagePath":"pages/wordMouth/wordMouth",
            "iconPath":"images/topBar/navBar3.png",
            "selectedIconPath":"images/topBar/navBar33.png",
            "text":"口碑"
        },{
            "pagePath":"pages/ranking/ranking",
            "iconPath":"images/topBar/navBar2.png",
            "selectedIconPath":"images/topBar/navBar22.png",
            "text":"排行榜"
        },{
            "pagePath":"pages/search/search",
            "iconPath":"images/topBar/navBar4.png",
            "selectedIconPath":"images/topBar/navBar44.png",
            "text":"搜索"
        }]
    }

    2-3 配置配置所需页面
    
    修改app.json中的pages
    
    "pages":[
      "pages/hot/hot",
      "pages/hot/hotDetail",
      "pages/wordMouth/wordMouth",
      "pages/wordMouth/wordMouthDetail",
      "pages/ranking/ranking",
      "pages/ranking/rankingDetail",
      "pages/search/search",
      "pages/search/searchDetail"
    ]
    
    2-4 制作热门页面
    
    结构文件 hot.wxml
    样式文件 hot.wxss
    数据文件 hot.js
    
    2-5 其他页面
    
    略...同2-4
