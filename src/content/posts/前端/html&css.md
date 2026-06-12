---

title: html&css
description: 🥧前端学习之路开启
image: 'https://img.f3f3.top/img/2026/05/30/c0ea19f2cdca9df36e06e29b1c2684a4.webp'#文章封面页
tags:
  - 前端基础
category: 前端  
  #永久连接id
abbrlink: "5"
# 文章置顶
pinned: true #文章置顶
published: 2026-04-20 18:19:03
updated: 2026-04-28 10:43:03
---

## html

### 常见元素

```
<hr>分割线 <br>换行 ！生成大致结构
<h1>1号标题</h1>
<P>段落

```

### 表格练习

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="">
        <table border="1" height="500" width="300">
            <caption><b>优秀学生信息表</b></caption>
            <tr>
                <th>年级</th>
                <th>姓名</th>
                <th>学号</th>
                <th>班级</th>
            </tr>
            <tr>
                <td rowspan="2">高三</td>
                <td>张三</td>
                <td>110</td>
                <td>三年二班</td>
            </tr>
            <tr>
                <td>赵四</td>
                <td>120</td>
                <td>三年一班</td>
            </tr>
            <tr>
                <td>评语</td>
                <td colspan="3">你们都很优秀</td>
            </tr>
        </table>
    </form>


</body>

</html>
```



### 表单练习

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <h1>青春不常在，抓紧谈恋爱</h1>
    <form action="">
        <hr><br>
        昵称：<input type="text" name="" id="" placeholder="请输入昵称">
        <br><br>
        性别：
        <label><input type="radio" name="gender" checked>男</label>
        <label><input type="radio" name="gender">女</label>
        <br><br>
        所在城市：
        <select>
            <option>北京</option>
            <option>上海</option>
            <option>广州</option>
            <option selected>深圳</option>
        </select>
        <br><br>
        婚姻状况：
        <input type="radio" name="memroy" checked>未婚
        <input type="radio" name="memroy">已婚
        <input type="radio" name="memroy">保密
        <br><br>
        喜欢的类型：
        <input type="checkbox"> 可爱
        <input type="checkbox" checked> 性感
        <input type="checkbox"> 巨乳
        <input type="checkbox" checked> 萝莉
        <input type="checkbox"> 恶堕
        <input type="checkbox"> HENTAI
        <br><br>
        个人介绍：<br>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <h3>我承诺</h3>
        <ul>
            <li>年满18岁、单身</li>
            <li>抱着严肃的态度</li>
            <li>真诚寻找另一半</li>
        </ul>
        <br><br>
        <input type="checkbox"> 我同意所有条款
        <br><br>
        <button type="submit">免费注册</button>
        <button type="reset">重置</button>
    </form>
</body>

</html>
```

## CSS

### CSS选择器

#### 后代选择器

```
<style>
    div span {
        color: green;
    }
</style>

<div>
    <!-- 这个是儿子标签 -->
    <span>Hello World!</span>
    <p>
        <!-- 这个是孙子标签 -->
        <span>Hello World!</span>
    </p>
</div>
//它允许你选择位于特定元素内部的所有后代元素。
//所有div下的所有span，都会被设置color属性，即div标签下的儿子、孙子、曾孙子..span标签都会被设置color属性，结果中两个HelloWorld均有颜色
```

#### 子代选择器

```
<style>
    div>span {
        color: green;
    }
</style>

<div>
    <!-- 儿子是绿的 -->
    <span>
        Hello World!
    </span>
    <p>
        <!-- 孙子颜色不受影响 -->
        <span>Hello World!</span>
    </p>
</div>
```

#### hover伪选择器

```
<style> 
a:hover{
    color: red;
    text-decoration: none;
}
</style> 

<a href="#">Hello World</a>
//鼠标悬停于超链接上时，链接字体变为红色，并且失去下划线

```

### CSS文体和文字样式

#### 文体大小

```
<div style="font-size: 16px;">Hello World!</div>
<div style="font-size: 26px;">Hello World!</div>
//浏览器默认16px
```



#### 文体粗细

```
<div style="font-weight: normal">Hello World!</div>
<div style="font-weight: bold">Hello World!</div>
```



#### 文体样式

```
<div style="font-style: normal;">Hello World!</div>
<div style="font-style: italic;">Hello World!</div>
//倾斜
```



#### 文体系列

```
<div style="font-family: 微软雅黑, 黑体, sans-serif;">Hello World!</div>
<div style="font-family: 宋体, Times New Roman, serif;">Hello World!</div>
<div style="font-family: Consolas, fira Code, monospace;">Hello World!</div>
```



#### 文体缩进

```
<p>Hello World!</p>
<p style="text-indent: 2em;">Hello World!</p>
//1em=当前标签的 font-size 大小
```



#### 文体对齐方式



#### 文体修饰

#### 行高

#### font属性编写























