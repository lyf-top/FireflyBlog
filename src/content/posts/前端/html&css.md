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

| 属性值 |      效果      |
| :----: | :------------: |
|  left  | 左对齐（默认） |
| center |    居中对齐    |
| right  |     右对齐     |

- 可居中的标签
  - 文本
  - span a
  - input img
- 内容居中需要给父元素设置居中属性

```
<p>Hello World!</p>
<p style="text-align: center;">Hello World!</p>
```

#### 文体修饰

```
<p style="text-decoration: none;">Hello World!</p>
<p style="text-decoration: underline;">Hello World!</p>
<p style="text-decoration: line-through;">Hello World!</p>
<p style="text-decoration: overline;">Hello World!</p>
```

#### 行高

- 取值

  - 数字 + px
  - 倍数（当前标签 font-size 的倍数）

- 文本高度

  - 上间距
  - 文本高度
  - 下间距

- 应用：

  - 单行文本垂直居中：line-height=元素父元素高度

  - 取消上下间距：line-height=1

    ```
    <p style="line-height: 1">Hello World!</p>
    <p style="line-height: 1.5;">Hello World!</p>
    <p style="line-height: 3;">Hello World!</p>
#### font属性编写

```
font: [font-style font-weight] font-size/line-height font-family;
<div style="font: italic normal 700 24px/3 sans-serif;">Hello World!</div>
```

#### 商品信息

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-color: #f5f5f5;
        }

        .goods {
            width: 234px;
            height: 300px;
            background: #fff;
            margin: 0 auto;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .img {
            width: 160px;
        }

        .good {
            font-size: 14px;
            line-height: 25px;
        }

        .desc {
            line-height: 30px;
            font-size: 12px;
            color: #ccc;
        }

        .price {
            font-size: 14px;
            color: #ffa500;
        }

    </style>
</head>

<body>
    <div class="goods">
        <img class="img" src="../imgs/01.png" >
        <div class="good">樱岛麻衣</div>
        <div class="desc">我永远喜欢樱岛麻衣</div>
        <div class="price">9421$</div>
    </div>
</body>

</html>
```

#### 新闻练习

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 800px;
            height: 600px;
            margin: 0 auto;
        }

        .center {
            text-align: center;
        }

        .gray {
            color: #808080;
        }

        .blue {
            color: #87ceeb;
        }

        a { 
            text-decoration: none;
        }

        .indent {
            text-indent: 2em;
        }
    </style>
</head>

<body>
    <div>
        <h1 class="center">《自然》评选改变科学的10个计算机代码项目</h1>
        <p class="center">
            <span class="gray">2077年e1月28日14:58</span>
            <span class="blue">新浪科技</span>
            <a href="#">收藏本文</a>
        </p>
        <hr>
        <p class="indent">
            2019年，事件视界望远镜团队让世界首次看到了黑洞的样子。不过，研究人员公布的这张发光环形物体的图像并不是传统的图片，而是经过计算获得的。利用位于美国、墨西哥、智利、西班牙和南极地区的射电望远镜所得到的数据，研究人员进行了数学转换，最终合成了这张标志性的图片。研究团队还发布了实现这一壮举所用的编程代码，并撰文记录这一发现，其他研究者也可以在此基础上进一步加以分析。
        </p>
        <p class="indent">
            这种模式正变得越来越普遍。从天文学到动物学，在现代每一项重大科学发现的背后，都有计算机的参与。美国斯坦福大学的计算生物学家迈克尔·莱维特因“为复杂化学系统创造了多尺度模型”与另两位研究者分享了2013年诺贝尔化学奖，他指出，今天的笔记本电脑内存和时钟速度是他在1967年开始获奖工作时实验室制造的计算机的1万倍。“我们今天确实拥有相当可观的计算能力，”他说，“问题在于，我们仍然需要思考。"
        </p>
        <p class="indent">
            如果没有能够解决研究问题的软件，以及知道如何编写并使用软件的研究人员，一台计算机无论再强大，也是毫无用处的。如今的科学研究从根本上已经与计算机软件联系在一起，后者已经渗透到研究工作的各个方面。近日，《自然》(Nature)杂志将目光投向了幕后，着眼于过去几十年来改变科学研究的关键计算机代码，并列出了其中10个关键的计算机项目。
        </p>
        <p class="indent">
            最初的现代计算机并不容易操作。当时的编程实际上是手工将电线连接成—排排电路来实现的。后来出现了机器语言和汇编语言，允许用户用代码为计算机编程，但这两种语言都需要对计算机的架构有深入的了解，使得许多科学家难以掌握。20世纪50年代，随着符号语言的发展，特别是由约翰·巴克斯及其团队在加州圣何塞的IBM开发的“公式翻译”语言Fortran，这种情况发生了变化。利用Fortran，用户可以用人类可读的指令来编程，例如x
            =3 + 5。然后由编译器将这些指令转换成快速、高效的机器代码。
        </p>

    </div>

</body>

</html>
```

### CSS背景

#### 背景颜色

```
/* 默认背景色是透明；背景色在背景图之下*/
background-color: transparent;
```

#### 背景图片

```
<style>
    .box {
        width: 100%;
        /* 元素必须给一个尺寸才能显示背景图 */
        height: 500px;
        background-image: url(../img/樱岛麻衣.png);
    }
</style>

<div class="box"></div>
```

#### 背景平铺

```
<style>
    .box {
        width: 100%;
        /* 元素必须给一个尺寸才能显示背景图 */
        height: 500px;
        background-image: url(https://cn.bing.com/th?id=OHR.FanjingStairs_ZH-CN0360402048_UHD.jpg&rf=LaDigue_UHD.jpg&w=300&h=300&c=8&rs=1&o=3&r=0);
        background-repeat: no-repeat;
       // repeat	（默认值）水平和垂直方向都平铺
       //no-repeat	不平铺
        //repeat-x  	水平方向平铺（x 轴）
        //repeat-y	垂直方向平铺（y 轴）
    }
</style>

<div class="box"></div>
```

#### 背景位置

```
background-position: 水平方向位置 垂直方向位置;
```

- 属性值

  - 方位名词（最多只能表示 9 个位置）

    - 水平方向：left center right
    - 垂直方向：top center bottom

  - 数字+px（坐标）

    - 坐标轴 原点(0,0) 盒子的左上角

    - x 轴 水平方向

    - y 轴 垂直方向
  
- 图片左上角与坐标原点重合

#### 属性连写

```
      <style>
          .box {
              width: 1000px;
              height: 1000px;
      
              /* 不连写 */
              background-color: #000;
              background-image: url(../imgs/01.png);
              background-repeat: no-repeat;
              background-position: center center;
              /* 等价于上面的连写 */
              background: #000 url(../imgs/01.png) no-repeat center bottom;
          }
      </style>
      <div class="box"></div>
      
```

### CSS盒模型      

#### 元素显示模式

##### 块级标签

```
div p h ul li dl dt dd form
header nav footer
```

- 独占一行
- 宽度默认为父元素 100%；高度默认由元素撑开
- 可以设置宽度和高度

##### 行内元素

- 一行显示多个

- 宽度和高度默认由内容撑开

- 不可以设置宽度和高度

```
a span b u i s strong ins em del
```

####   元素显示模式转换

- display: block;

|    属性值    |    效果    |
| :----------: | :--------: |
|    block     |  块级元素  |
| inline-block | 行内块元素 |
|    inline    |  行内元素  |

- 块级元素一般作为大容器;

- 可以嵌套文本、块级元素、行内元素、行内块元素

  - p 标签中不要嵌套 div p h 等块级元素

- a 标签内部可以嵌套任意内容

  - a 标签不能嵌套 a 标签

#### 盒子模型

1. 盒子

- 标签可以看做是一个盒子

1. 盒子模型：
   - 外边距区域 margin
   - 边框区域 border
   - 内边距区域 padding
   - 内容区域 content
1. 盒子内容的宽高
   - width
- height

##### boder边框

  ```
  /* 粗细 线条样式 颜色（不分先后顺序）*/
  /* 默认4个方向都有*/
  border: 10px solid red;
  
  /* 单个方向 */
  border-top: 10px solid red;
  border-bottom: 10px solid red;
  border-left: 10px solid red;
  border-right: 10px solid red;
  
  /* 单个属性 */
  border-width: 边框粗细
  border-style: 边框样式
  border-color: 边框颜色
  //solid 实线
  //dashed 虚线
  //dotted 点线
  ```

##### 内边距padding

```
/* 可取 4 个值、3 个值、2 个值、1 个值 */
padding: 上 右 下 左;
padding: 上 左右 下;
padding: 上下 左右;
padding: 上下左右;

/* 单个方向 */
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 10px;
```

#### 新浪导航

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <style>
        .box {
            height: 40px;
            border-top: 3px #ff8500 solid;
            border-bottom: 1px gray solid;
        }
        .box a { 
            text-align: center;
            width: 80px;
            height: 40px;
            color: black;
            font-size: 10px;
            display: inline-block;
            text-decoration: none;
            line-height: 40px;
        }
        a:hover {
            color: orange;
            background-color: #edeef0;
        }
    </style>
    <div class="box">
        <a href="#">新浪导航</a>
        <a href="#">新浪导航</a>
        <a href="#">新浪导航</a>
        <a href="#">新浪导航</a>
    </div>
</body>

</html>
```

#### 外边距 margin

```
/* 可取 4 个值、3 个值、2 个值、1 个值 */
margin: 上 右 下 左;
margin: 上 左右 下;
margin: 上下 左右;
margin: 上下左右;

/* 单个方向 */
margin-top: 10px;
margin-bottom: 10px;
margin-left: 10px;
margin-right: 10px;
```

##### 元素居中

```
.box { 
  margin: 0 auto;
}
```

##### 清除浏览器默认样式

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

##### 去掉列表前的符号

```
ul {
  list-style: none;
}
```

#### 外边距折叠现象

##### 合并现象

- 场景：垂直布局的块级元素，上下的 margin 会合并
- 结果：最终两者距离为 margin 的最大值
- 解决方法：只给其中一个盒子设置 margin

```
<style>
    .box-1 {
        width: 100px;
        height: 100px;
        background-color: #698e6a;
        margin-bottom: 50px;
    }

    .box-2 {
        margin-top: 100px;
        width: 100px;
        height: 100px;
        background-color: #7f9faf;
    }
</style>

<div class="box-1"></div>
<div class="box-2"></div>
```

##### 塌陷现象

- 场景：相互嵌套的块级元素，子元素的 margin-top 会作用在父元素上

- 结果：导致父元素一起往下移动

- 解决方法：

  1. 给父元素设置 border-top 或者 padding-top(分隔父子元素的 margin-top)

  1. 给父元素设置 overflow:hidden;

  1. 转换为行内块元素

```
<style>
    .box-father {
        width: 200px;
        height: 200px;
        background-color: #b2b6b6;
    }

    .box-child {
        width: 100px;
        height: 100px;
        background-color: #7f9faf;
        margin-top: 100px;
    }

    .resolve {
        overflow: hidden;
        margin-top: 20px;
    }
</style>

<div class="box-wrap">
    <!-- 元素的margin-top 作用在了父元素上 -->
    <div class="box-father">
        <div class="box-child"></div>
    </div>

    <!-- [完美解决方案]给父元素设置 overflow:hidden; -->
    <div class="box-father resolve">
        <div class="box-child"></div>
    </div>

</div>
```

#### 行内标签的 margin/pading

```
//垂直方向不生效，使用行高 line-height 实现
<style>
    .box {
        border: 1px solid #eee;
    }

    .box span {
        margin: 20px;
        padding: 20px;
    }
</style>

<div class="box">
    <span>HELLO WORLD</span>
</div>
```

#### 新闻列表

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .box {
            margin: 0 auto;
            width: 500px;
            height: 400px;
            background-color: #fff; 
            padding: 42px 30px 0;
            border: 1px solid #ccc;
        }

        .box h2 {
            border-bottom: 1px #ccc solid;
            font-size: 30px;
            line-height: 1;
            padding-bottom: 9px;
        }

        ul {
            list-style: none;
        }

        .box li {
            height: 50px;
            line-height: 50px;
            padding-left: 30px;
            border-bottom: #ccc 1px dashed ;
        }

        .box a {
            font-size: 16px;
            display: inline-block;
            color: #666;
            text-decoration: none;
        }

    </style>

    <div class="box">
        <h2>最新文章/New News</h2>
        <ul>
            <li><a href="#">北京招聘网页设计，平面设计，php</a></li>
            <li><a href="#">体验javascript的魅力</a></li>
            <li><a href="#">jquery世界来临</a></li>
            <li><a href="#">网页设计师的梦想</a></li>
            <li><a href="#">jquery中的链式编程是什么</a></li>
        </ul>
    </div>

</body>
</html>
```

### 浮动

#### 结构伪类选择器

- 作用：根据元素在 HTML 中的结构关系查找元素
- 优势：减少对 HTML 中类的依赖，有利于保持代码整洁
- 场景：常用于查找某父级选择器中的子元素

|       选择器        |             说明              |
| :-----------------: | :---------------------------: |
|    E:first-child    |   父元素中的第一个子元素 E    |
|    E:last-child     |  父元素中的最后一个子元素 E   |
|   E:nth-child(n)    |   父元素中的第 n 个子元素 E   |
| E:nth-last-child(n) | 父元素中的倒数第 n 个子元素 E |

- 其中`n`可以写公式

|       功能        |     公式      |
| :---------------: | :-----------: |
|       偶数        |    2n even    |
|       奇数        | 2n+1 2n-1 odd |
|    找到前 5 个    |     -n+5      |
| 找到从第 5 个往后 |      n+5      |

#### 伪元素

- 元素：HTML 标签
- 伪元素：CSS 模拟出标签效果，装饰性内容

|  伪元素  |               作用               |
| :------: | :------------------------------: |
| ::before | 在父元素内容的最前添加一个伪元素 |
| ::after  | 在父元素内容的最后添加一个伪元素 |

- 注意点：

  - 必须设置 content 属性才能生效

  - 伪元素默认是行内元素

    ```
    <style>
        div::before {
            content: '老鼠';
        }
    
        div::after {
            content: '大米';
        }
    </style>
    <div>爱</div>
    ```

#### 标准流

- 标准流：又称为文档流，浏览器排列元素的规则
- 常见标准流的排版规则
  - 块级元素：从上往下，垂直布局，独占一行
  - 行内元素或行内块元素：从左往右，水平布局，空间不够自动换行

#### 浮动

- 行内元素或行内块元素换行书写会产生一个空格

- 浮动的特点

  - 浮动的标签默认顶对齐，可使用 margin-top 修改距离顶部距离

  - 浮动元素会脱离标准流（脱标），在标准流中不占用位置

  - 浮动元素比标准流高半个级别，可以覆盖标准流中的元素

  - 浮动找浮动，下一个浮动元素会在上一个浮动元素后面，左右浮动

  - 浮动标签具备行内块特点：

    1. 一行显示多个
    1. 可设置宽高

  - 浮动之后盒子水平居中不生效 margin: 0 auto;

#### 小米

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .hole {
            margin: 0 auto;
            width: 1226px;
            height: 614px; 
        }

        .left {
            float: left;
            width: 234px;
            height: 614px;
            background-color: #800080;
        }
        .right {
            float: right; 
            width: 978px;
            height: 614px; 
        }

        ul {
            list-style: none;
        }

        .right li {
            float: left;
            margin-right: 14px;
            margin-bottom: 14px;
            width: 234px;
            height: 300px;
            background-color: skyblue;
        }

        .right li:nth-child(4n) {
            margin-right: 0;
        } 

    </style>
    <div class="hole">
        <div class="left"></div>
        <div class="right">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</body>

</html>
```

#### 导航栏

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .box {
            margin: 0 auto;
            width: 640px;
            height: 50px;
            background-color: pink;
        }

        ul {
            list-style: none;
        }

        li {
            float: left; 
        }

        .box li a:hover {
            background-color: #008000;
        }

        .box li a {
            display: inline-block;
            width: 80px;
            height: 50px; 
            text-align: center;
            line-height: 50px;
            color: white;
            text-decoration: none;
        }


    </style>
    <div class="box">
        <ul>
            <li><a href="#">新闻1</a></li>
            <li><a href="#">新闻2</a></li>
            <li><a href="#">新闻3</a></li>
            <li><a href="#">新闻4</a></li>
            <li><a href="#">新闻5</a></li>
            <li><a href="#">新闻6</a></li>
            <li><a href="#">新闻7</a></li>
            <li><a href="#">新闻8</a></li>
        </ul>
    </div>
</body>

</html>
```

#### 消除浮动

父子级标签，子级浮动，父级没有设置高度，会导致后面的标准流盒子受影响

```
  - 正常情况
```

```
<style>
    .box {
        margin: 0 auto;
        width: 1000px;
        height: 300px;
        background-color: pink;
    }

    .left {
        float: left;
        width: 300px;
        height: 300px;
        background-color: #ccc;
    }

    .right {
        float: right;
        width: 680px;
        height: 300px;
        background-color: skyblue;
    }

    .btm {
        height: 100px;
        background-color: green;
    }
</style>
<div class="box">
    <div class="left"></div>
    <div class="right"></div>
</div>
<div class="btm"></div>
```

- left和right是box的子级，现在我们将box的height属性注释掉，此时btm会跑到上面去。

解决方案

1. 直接设置父级元素高度

1. 额外标签：在父级元素最后添加一个块级标签

   ```
       <style>
           .box {
               margin: 0 auto;
               width: 1000px;
               background-color: pink;
           }
   
           .left {
               float: left;
               width: 300px;
               height: 300px;
               background-color: #ccc;
           }
   
           .right {
               float: right;
               width: 680px;
               height: 300px;
               background-color: skyblue;
           }
   
           .btm {
               height: 100px;
               background-color: green;
           }
   
   +       .clearfix {
   +           clear: both;
   +       }
       </style>
       <div class="box">
           <div class="left"></div>
           <div class="right"></div>
   +       <div class="clearfix"></div>
       </div>
       <div class="btm"></div>
   ```

##### 单伪元素清除法

```
    <style>
        .box {
            margin: 0 auto;
            width: 1000px;
            background-color: pink;
        }

        .left {
            float: left;
            width: 300px;
            height: 300px;
            background-color: #ccc;
        }

        .right {
            float: right;
            width: 680px;
            height: 300px;
            background-color: skyblue;
        }

        .btm {
            height: 100px;
            background-color: green;
        }

+       .clearfix::after {
+           content: '';
+           display: block;
+           clear: both;
+       }
    </style>

-   <div class="box">
+   <div class="box clearfix">
        <div class="left"></div>
        <div class="right"></div> 
    </div>
    <div class="btm"></div>
```

##### 双伪元素清除法

```
/* 解决外边距塌陷问题 */
.clearfix::before,
.clearfix::after {
content: '';
display: table;
}

.clearfix::after {
clear: both;
}
```

##### 给父元素设置 overflow:hidden



### 定位

#### 初识

1. 标准流
   - 块级元素独占一行 -> 垂直布局
   - 行内元素/行内块元素一行显示多个 -> 水平布局
1. 浮动
   - 原本垂直布局的块级元素变成水平布局
1. 定位
   - 可以让元素自由的摆放在网页的任意位置
   - 一般用于盒子之间的层叠情况
   - 让盒子固定在页面某一位置

1. 设置定位方式
   - 属性名: position

| 定位方式 |  属性值  |
| :------: | :------: |
| 静态定位 |  static  |
| 相对定位 | relative |
| 绝对定位 | absolute |
| 固定定位 |  fixed   |

#### 相对定位

- 特点

  1. 占有原来的位置

  1. 相对于自己之前的位置

  1. 不改变显示模式

     ```
     position: relative
     left: 100px;
     top: 100px;
     ```

#### 绝对定位

特点

1. 相对于非静态定位的父元素定位

1. 不占有原来的位置

1. 改变显示模式

1. 默认以浏览器 body 定位

   ```
   position: absolue
   left: 100px;
   top: 100px;
   ```

- 子绝父相：父级相对定位，子级绝对定位
- 绝对定位查找父级的方法：逐级向上，最终是浏览器窗口

#### 固定定位

特点

- 脱标-不占位置

- 相对于浏览器定位

- 具备行内块特点

  ```
  positions: fixed;
  ```

#### 元素层级关系

1. 不同布局方式元素的层级关系：标准流 < 浮动 < 定位

1. 同层级，后写的会覆盖在先写的元素

1. 设置元素层级

   ```
   /* 默认值0；数值越大，显示越靠前 */
   z-index: 数值;
   ```

#### 子盒子在父盒子中水平居中

```
<style>
    .box-wrap {
        position: relative;

        width: 500px;
        height: 500px;

        background-color: skyblue;
    }

    .box {
        position: absolute;
        left: 50%;
        top: 50%;

        /* 移动自身一半 */
        transform: translate(-50%, -50%);
        width: 300px;
        height: 300px;

        background-color: pink;
    }
</style>

<div class="box-wrap">
    <div class="box"></div>
</div>
```

### 装饰

#### 垂直对齐 vertical-align

- 基线(baseline)：浏览器文字类型元素排版中存在用于对齐的基线

|  属性值  |      效果      |
| :------: | :------------: |
| baseline | 默认，基线对齐 |
|   top    |    顶部对齐    |
|  middle  |    中部对齐    |
|  bottom  |    底部对齐    |

```
<style>
    .text {
        border-bottom: 1px solid #ccc;
    }

    .text-baseline {
        vertical-align: baseline;
    }

    .text-top {
        vertical-align: top;
    }

    .text-middle {
        vertical-align: middle;
    }

    .text-bottom {
        vertical-align: bottom;
    }
</style>
<div>
    <span class="text text-baseline">咋就对不齐呢</span>
    <span class="text text-top">咋就对不齐呢</span>
    <span class="text text-middle">咋就对不齐呢</span>
    <span class="text text-bottom">咋就对不齐呢</span>
</div>
```

#### 边框圆角 border-radius

```
/* 单值 4个角一样*/
border-radius: 数字px/百分比;

/* 多值 左上角开始，顺时针赋值，没有赋值看对角*/
border-radius: 左上 右上 右下 左下;
```

##### 正圆

- 盒子必须是正方形

- 设置边框圆角为盒子宽高的一半

  ```
  <style>
      .box {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background-color: skyblue;
      }
  </style>
  
  <div class="box"></div>
  ```

  ##### 胶囊按钮

  - 盒子设置为长方形

  - 设置边框圆角为高度的一半

    ```
    <style>
        .box {
            width: 100px;
            height: 50px;
            border-radius: 25px;
            background-color: skyblue;
        }
    </style>
    
    <div class="box"></div>
    ```

#### 溢出部分效果 overflow

- 溢出部分：盒子内容部分超出盒子范围的区域

| 属性值  |                效果                |
| :-----: | :--------------------------------: |
| visible |         默认，溢出部分可见         |
| hidden  |            溢出部分隐藏            |
| scroll  |      无论是否溢出都显示滚动条      |
|  auto   | 根据是否溢出，自动显示或隐藏滚动条 |

```
<style>
    .box {
        width: 100px;
        height: 100px;
        background-color: skyblue;

        overflow: hidden;
    }
</style>

<div class="box">
              将进酒·君不见
  
          【作者】李白 【朝代】唐

    君不见，黄河之水天上来，奔流到海不复回。

    君不见，高堂明镜悲白发，朝如青丝暮成雪。

    人生得意须尽欢，莫使金樽空对月。

    天生我材必有用，千金散尽还复来。

    烹羊宰牛且为乐，会须一饮三百杯。

    岑夫子，丹丘生，将进酒，杯莫停。

    与君歌一曲，请君为我倾耳听。

    钟鼓馔玉不足贵，但愿长醉不愿醒。

    古来圣贤皆寂寞，惟有饮者留其名。

    陈王昔时宴平乐，斗酒十千恣欢谑。

    主人何为言少钱，径须沽取对君酌。

    五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。
</div>
```

#### 元素本身隐藏

```
/* 占位隐藏 */
visibility: hidden;

/* 不占位隐藏（常用） */
display: none;
```

```
鼠标移动过去显示二维码

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    /* 因为有通栏：占满一行的边框，所以需要有一个通栏：占满一行的盒子 */
    .nav {
      height: 40px;
      border-bottom: 1px solid #ccc;
    }

    /* 因为ul中所有的内容都是在网页的宽度固定并且水平居中的盒子内部，所以设置ul为宽度固定并且水平居中的效果（后面项目中所用到的版心） */
    ul {
      list-style: none;
      width: 1200px;
      margin: 0 auto;
    }

    ul li {
      float: left;
      width: 20%;
      height: 40px;
      border-right: 1px solid #ccc;
      /* 自动内减 */
      box-sizing: border-box;
      text-align: center;
      line-height: 40px;
    }

    ul .last {
     border-right: none;
    }

    ul li a {
      /* a标签默认是行内元素，宽高由内容撑开，并且无法设置宽高，此时默认情况用户只能点击文字区域才能调整 */
      /* 如果把a标签转换成块级元素，此时可以设置宽高，会让a标签范围更大，用户可以点击调整的区域也越大 */
      display: block;
      /* 宽度不设置块元素会默认占满一行 */
      height: 40px;
      text-decoration: none;
      color: #000;
    }

    ul li .app {
      position: relative;
    }

    .code {
      position: absolute;
      left: 50%;
      top: 41px;

      display: none;

      transform: translate(-50%);


    }

    /* 鼠标悬停a 显示二维码图片 */
    .nav li a:hover img {
        display: block;
    }
  </style>
</head>
<body>
  <!-- 导航 -->
  <div class="nav">
    <ul>
      <li><a href="#">产品介绍</a></li>
      <li><a href="#">用户评价</a></li>
      <li><a href="#">新手教程</a></li>
      <!-- 因为用户鼠标放在二维码图片上也能跳转，所以证明img也是在a的范围内，因此把img写在a标签的内部 -->
      <li><a href="#" class="app">下载App <img src="./images/code.jpg" alt="" class="code"> </a></li>
      <li class="last"><a href="#">个人中心</a></li>
    </ul>
  </div>

</body>
</html>
```

#### 元素整体透明 opacity

```
<style>
    .box {
        width: 100px;
        height: 100px;
        background-color: skyblue;
        opacity:0;//完全透明
        1不完全透明
    }
</style>

<div class="box"></div>
```

#### 半透明

```
<style>
    .box {
        /* width: 100px; */
        height: 100px;
        background-color: rgba(0, 0, 0, 0.4);
    }
</style>

<div class="box"></div>
```

#### 背景图片大小 background-size

```
background-size: 宽度 高度;
```

|  取值   |                             场景                             |
| :-----: | :----------------------------------------------------------: |
| 数字+px |                           简单方便                           |
| 百分比  |                相对于当前盒子自身的宽高百分比                |
| contain |   包含，背景图等比缩放，直到不会超出盒子的最大，可能有留白   |
|  cover  | 覆盖，背景图等比缩放，直到刚好填满整个盒子没有空白，图片可能显示不全 |

- background 连写

  ```
  background： color image repeat position/size;
  ```

#### 盒子阴影 box-shadow

|   参数   |            作用            |
| :------: | :------------------------: |
| h-shadow | 必须，水平偏移量，允许负值 |
| v-shadow | 必须，垂直偏移量，允许负值 |
|   blur   |        可选，模糊度        |
|  spread  |       可选，阴影扩大       |
|  color   |       可选，阴影颜色       |
|  inset   |  可选，将阴影改为内部阴影  |

```
<style>
    .box {
        width: 100px;
        height: 100px;
        box-shadow: 0 10px 50px 8px #ccc;
    }
</style>

<div class="box"></div>
```

#### 过渡 transition

- 让元素样式慢慢变化

- 常配合 hover 使用

  ```
  transition 属性 时长, 属性 时长;
  ```

|   参数   |             取值             |
| :------: | :--------------------------: |
| 过渡属性 | 所有属性 all；具体属性 width |

- 注意：

  1. 过渡需要默认状态和 hover 样式不同，才能有过渡效果

  1. transition 属性给需要过渡的元素本身加

  1. transition 属性设置在不同状态中，效果不同

  1. 给默认状态设置，鼠标移入移出都有过渡效果

  1. 给 hover 状态设置，鼠标移入有过渡效果，移出没有过渡效果

     ```
     <style>
         .box {
             width: 100px;
             height: 100px;
             background-color: skyblue;
             transition: all 2s;
         }
     
         .box:hover {
             width: 200px;
             background-color: pink;
         }
     </style>
     
     <div class="box"></div>
     ```













