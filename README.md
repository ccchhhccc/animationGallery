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

# 未完成部分
gulp每次都将src下的图片重新压缩，到后期将会压缩很久

后面有时间再改一下gulpfile.js


