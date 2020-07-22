# 🏅 第二週每日任務問答集

- [🏅 7/14(二)每日任務](#-714二-每日任務)
	- [問題](#問題)
	- [Answer](#answer)
- [🏅 7/15(三) 每日任務](#-715三-每日任務)
	- [問題](#問題-1)
	- [Answer](#answer-1)
- [🏅 7/16(四) 每日任務](#-716三-每日任務)
	- [問題](#問題-2)
	- [Answer](#answer-2)

# 🏅 7/14(二)每日任務

## 問題

請試著加上 flex 屬性讓 logo 圖片在垂直水平置中的位置，如圖：

![](https://i.imgur.com/qWEVuCO.png)

### HTML

```html
<div class="box">
	<img src="https://www.filepicker.io/api/file/tNa2so2RRMuedpc2yydt" alt="logo" width="150">
</div>
```

### CSS

```css
.box{
	background-color: #e8eeea;
	width: 300px;
	height: 300px;
}
```

## Answer

[答案預覽連結](https://iotalh.github.io/HexSchoolTasks/Week2/Daily-714.html)

# 🏅 7/15(三)每日任務

## 問題

請試著加上 flex 屬性讓 UFO 換到第一個位置並且讓四張圖片可以水平對齊，左右靠齊邊，如圖：

![](https://i.imgur.com/6SrO6s6.png)

### HTML

```html
<div class="box">
	<img src="https://www.filepicker.io/api/file/tNa2so2RRMuedpc2yydt" alt="logo" width="150">
	<img src="https://www.filepicker.io/api/file/tNa2so2RRMuedpc2yydt" alt="logo" width="150">
	<img src="https://www.filepicker.io/api/file/tNa2so2RRMuedpc2yydt" alt="logo" width="150">
	<img src="https://register.rocket-coding.com/img/ufo.png?1081104" width="150">
</div>
```

### CSS

```css
.box{
	width: 850px;
	margin: 0 auto;
	border: 1px solid black;
}
```

## Answer

[答案預覽連結](https://iotalh.github.io/HexSchoolTasks/Week2/Daily-715.html)

# 🏅 7/16+17(四+五)每日任務

## 問題

下方有提供部分程式碼，請再試著加上 flex 屬性完成剩下的版型，如圖：

![](https://i.imgur.com/aMOHoek.png)

### HTML

```html
<nav class="nav">
	<img src="https://www.filepicker.io/api/file/tNa2so2RRMuedpc2yydt" alt="logo" width="100">
	<ul class="nav-list">
		<li class="nav-item"><a class="nav-link" href="#">首頁</a></li>
		<li class="nav-item"><a class="nav-link" href="#">關於</a></li>
		<li class="nav-item"><a class="nav-link" href="#">產品</a></li>
		<li class="nav-item"><a class="nav-link" href="#">購物車</a></li>
	</ul>
</nav>

<div class="container">
	<div class="card">
		<img class="card-img"
			src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
			width="200">
		<div class="card-body">
			<h2 class="title">標題文字</h2>
			<p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsum ab sit neque
				accusamus praesentium, quisquam veritatis perferendis ipsa aspernatur nulla!<a
					href="https://unsplash.com/photos/HlNcigvUi4Q">圖來自unsplash</a>
			</p>
			<a href="#" class="btn">點我</a>
		</div>
	</div>
</div>
```

### CSS

```css
.nav{
	background-color: #e8eeea;
	padding: 0 10px;
	margin-bottom: 25px;
}
.nav-link{
	text-decoration: none;
	color: #00cc99;
	padding: 5px 10px;
}
.container{
	width: 800px;
	margin: 0 auto;
}
.title{
	font-size: 20px;
	font-weight: 500;
	margin-bottom: 5px;
}
.card{
	margin-bottom: 10px;
}
.card:nth-child(2){
	...
}	
.card:nth-child(2) .card-img{
	margin-right: 0;
	margin-left: 5px;
}
.card-img{
	margin-right: 5px;
}
.btn{
	width: 50px;
	padding: 8px 16px;
	color: white;
	background-color: #00cc99;
	text-decoration: none;
	display: block;
	margin-left: auto;
	text-align: center;
}
```

## Answer

[答案預覽連結](https://iotalh.github.io/HexSchoolTasks/Week2/Daily-716.html)