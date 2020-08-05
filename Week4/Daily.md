# 🏅 第四週每日任務問答集

- [🏅 7/28(二)每日任務](#-728二-每日任務)
	- [問題](#問題)
	- [答案](#答案)
- [🏅 7/29(三)每日任務](#-729三-每日任務)
	- [問題](#問題-1)
	- [答案](#答案-1)
- [🏅 7/30(四)每日任務](#-730四-每日任務)
	- [問題](#問題-2)
	- [答案](#答案-2)
- [🏅 7/31(五)每日任務](#-731五-每日任務)
	- [問題](#問題-3)
	- [答案](#答案-3)

# 🏅 7/28(二)每日任務

## 問題

只需要更改 CSS 內的「...」並替換成程式碼
目標：使用 left 和 top 屬性讓 .box 可以**分成四個階段逆時針沿著 .wrapper 移動** (需透過 Codepen 繳交結果)

### HTML

```html
<div class="wrapper">
	<div class="box"></div>
</div>
```

### CSS

```css
@keyframes example{
	0%{

	}
	25%{

	}
	50%{
		
	}
	75%{

	}
	100%{

	}
}

.box{
    position: relative;
    width: 100px;
    height: 100px;
    background: red;
    animation-name: example;
    animation-duration: 4s;
    animation-delay: 2s;
    animation-iteration-count: infinite; 
    animation-fill-mode: both; 
}
.wrapper{
	width: 300px;
	height: 300px;
	border:1px solid black;
}
```

## 答案

[答案預覽連結](https://iotalh.github.io/HexSchoolTasks/Week4/Daily-728.html)

# 🏅 7/29(三)每日任務

## 問題

在 CSS 的 `.card` hover 時加上 `transform` 語法使圖片可以水平旋轉 180 度 （需透過 Codepen 繳交）

### HTML

```html
<div class="card">
	<div class="card-img">
		<img src="https://www.filepicker.io/api/file/tNa2so2RRMuedpc2yydt" alt="Avatar" width="200">
	</div>
</div>
```

### CSS

```css
.card{
	width: 300px;
	height: 300px;
}
.card-img{
	text-align: center;
	background: #e8eeea;
	transition: transform 0.6s;
}
.card:hover .card-img {
	/* 請使用 transform 完成此作業*/
}
```

## 答案

[答案預覽連結](https://iotalh.github.io/HexSchoolTasks/Week4/Daily-729.html)

# 🏅 7/30(四)每日任務

## 問題

請使用 jQuery 的 `toggleClass` 語法嘗試在點擊 `.list-item` 時加上 `.active`，再次點擊時會取消 `.active` 樣式 （需透過 Codepen 繳交）

### HTML

```html
<ul class="list">
	<li class="list-item list-title">甜點類別</li>
	<li class="list-item active"><a class="list-link" href="#">所有甜點（48）</a></li>
</ul>
```

### CSS

```css
a {
	text-decoration: none;
}
.list {
	width: 300px;
	text-align: center;
}

.list-title {
	font-size: 24px;
	background: #3F5D45;
	color: #EAF0ED;
	padding: 16px 0;
}

.list-item {
	border: 1px solid #EAF0ED;
}

.list .active {
	background: #EAF0ED;
}

.list-link {
	font-size: 24px;
	line-height: 40px;
	font-weight: bold;
	color: #3F5D45;
	display: block;
	padding: 16px 0;
}
```

### JS

```javascript
$('.list-item').click(function (e) {
	e.preventDefault();
	/* 請使用 toggleClass 完成此作業 */
})
```

# 🏅 7/31(五)每日任務

## 問題

請觀看並理解[下拉選單的範例](https://codepen.io/AliceChiang/pen/MWKLJrQ)，用文字描述這是如何透過 CSS 與 jQ 做出該效果（可小組討論）

## 答案

範例中的做法是先將 `.navbar-nav` 的 `max-height` 設為 `0px` ，再透過 `JQuery` 的 `toggleClass` 動態加入帶有 `max-height: 200px;` 的 `.active`，達成下拉式選單的效果。 



