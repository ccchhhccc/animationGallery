# 个人博客动漫-电影的图库
## 托管到github
### 看了一下截图有点大，用gulp压缩一下

# install
```js
npm i
//不记得gulp是不是要全局安装了，如果不行再全局安装gulp
//npm i gulp -g
```

# compress
```js
//执行gulp任务压缩图片
gulp imagemin
```

# complete
图片将会压缩在dist文件夹里面

# 新增cache缓存，只压缩新增或者修改过的图片
通过使用gulp-cache插件达到目的


![](https://raw.githubusercontent.com/ccchhhccc/animationGallery/master/dist/blog/WeChatb30d3a27f00a76513ef6b6a0a24dc8b3.png)


# 清空缓存
```js
gulp clear
```
