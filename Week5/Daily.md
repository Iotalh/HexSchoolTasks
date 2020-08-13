# 🏅 第五週每日任務問答集

- [🏅 8/4(二)每日任務](#-84二-每日任務)
	- [問題](#問題)
	- [答案](#答案)
- [🏅 8/5(三)每日任務](#-85三-每日任務)
	- [問題](#問題-1)
	- [答案](#答案-1)
- [🏅 8/6(四)每日任務](#-86四-每日任務)
	- [問題](#問題-2)
	- [答案](#答案-2)
- [🏅 8/7(五)每日任務](#-87五-每日任務)
	- [問題](#問題-3)
	- [答案](#答案-3)

# 🏅 8/4(二)每日任務

## 題目

更改 CSS 內的程式碼為 SCSS 的寫法
 
### CSS

```css
.header {
    background-size: cover;
    background-position: center center;
    background-image: url(../asset/img/header_desktop.png);
    background-repeat: no-repeat;
}

.header .banner {
    min-height: 420px;
}

.header .menu-bg {
    min-height: 58px;
    background: #ff0000;
    position: relative;
}

.header .menu {
    top: 0;
}

.header .menu ul a {
    display: block;
}

.header .menu ul li {
    color: #fff;
}

.header .menu ul li a:hover {
    font-weight: bolder;
}

.header .banner-title {
    max-width: 460px;
    background: #ff0000;
    color: #fff;
}

.header .main-menu {
    background: #ff0000;
    overflow: hidden;
}

.header .main-menu a:hover {
    background: #ff0000;
}

.header .hamburger-menu {
    display: block;
    float: right;
}

.header .menu-show {
    max-height: 165px;
}

.header .block-md {
    display: block;
}
```

## 答案

```scss
.header {
	background-size: cover;
	background-position: center center;
	background-image: url(../asset/img/header_desktop.png);
	background-repeat: no-repeat;
	.banner {
		min-height: 420px;
	}
	.menu-bg {
		min-height: 58px;
		background: #ff0000;
		position: relative;
	}
	.menu {
		top: 0;
		ul {
			a {
				display: block;
			}
			li {
				color: #fff;
				a:hover {
					font-weight: bolder;
				}
			}
		}
	}
	.banner-title {
		max-width: 460px;
		background: #ff0000;
		color: #fff;
	}
	.main-menu {
		background: #ff0000;
		overflow: hidden;
		a:hover {
			background: #ff0000;
		}
	}
	.hamburger-menu {
		display: block;
		float: right;
	}
	.menu-show {
		max-height: 165px;
	}
	.block-md {
		display: block;
	}
}
```

# 🏅8/5(三)每日任務

## 問題

只需更換 SCSS 內「...」成程式碼，利用 mixin 搭配 include 的方法讓上方的 CSS 換一個寫法，省去重複寫 @media 的問題

### CSS

```css
.header{
	width: 500px;
}

@media(max-width: 768px){
	.header{
		width: 13px;
		font-size: 20px;
	}
}

@media(max-width: 568px){
	.header{
		font-size: 8px;
	}
}

.header a{
	background: black;
}

@media(max-width: 568px){
	.header a{
		background: white;
	}
}
```

### SCSS

```scss
@mixin pad{
	@media(max-width: 768px){
		@content;
	}
}

@mixin mobile{
	@media(max-width: 568px){
		@content;
	}
}

.header{
	...

	a{
		...
	}
}
```

## 答案

```scss
@mixin pad {
    @media(max-width: 768px) {
        @content;
    }
}

@mixin mobile {
    @media(max-width: 568px) {
        @content;
    }
}

.header {
    width: 500px;
    @include pad() {
        width: 13px;
        font-size: 20px;
    }
    @include mobile() {
        font-size: 8px;
    }
    a {
        background: black;
        @include mobile() {
            background: white;
        }
    }
}
```

# 🏅8/6(四)每日任務

## 題目

在 all.scss 檔中，載入的檔案順序正確是非常重要的事，請回覆下方的順序需要怎麼修改，以及原因

```scss
@import "layout";
@import "reset";
@import "variable";
```

## 答案

```scss
@import "variable";
@import "reset";
@import "layout";
```

變數應該要放在最前面，先宣告完變數後，後面的程式碼才能使用變數
reset 設定放在 layout 前面，這樣後面的設定才不會又被 reset 覆蓋


# 🏅8/7(五)每日任務

## 題目

只需要更改 CSS 內的程式碼，更改為 SCSS 的寫法，需使用到「&」
例如：

```css
.header{

}
.header-title{

}
```
等於以下 SCSS 寫法
```scss
.header{
	&-title{

	}
}
```
 
### HTML

```html
<div class="card">
	<img class="card-img" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/p-1.png" alt="">
	<p class="card-tag">本日精選</p>
	<div class="card-text">
		<h3 class="card-title">焦糖馬卡龍</h3>
		<p class="card-title">NT$ 450</p>
	</div>
	<button class="card-btn">加入購物車</button>
</div>
```

### CSS

```css
img {
    display: block;
}

.card {
    width: 300px;
    position: relative;
}

.card-tag {
    position: absolute;
    top: 0;
    left: 20px;
    writing-mode: vertical-lr;
    letter-spacing: 5px;
    padding: 10px;
    background: #3F5D45;
    color: #EAF0ED;
}

.card-text {
    display: flex;
}

.card-title {
    font-size: 20px;
    line-height: 24px;
    border: 1px solid #EAF0ED;
    padding: 14px 28px;
    color: #3F5D45;
    font-weight: bold;
}

.card-btn {
    display: block;
    padding: 16px 90px;
    border: none;
    font-size: 24px;
    line-height: 20px;
    background: #EAF0ED;
    color: #3F5D45;
}

.card-btn:hover {
    background: #3F5D45;
    color: white;
}
```

## 答案

[答案預覽連結](https://iotalh.github.io/HexSchoolTasks/Week5/Daily-87.html)