# 🏅 第一週每日任務問答集

- [🏅 7/7(二) 每日任務](#-77二-每日任務)
	- [問題](#問題)
	- [答案](#答案)
- [🏅 7/8(三) 每日任務](#-78三-每日任務)
	- [問題](#問題-1)
	- [答案](#答案-1)
- [🏅 7/9(四) 每日任務](#-79四-每日任務)
	- [問題](#問題本日是陷阱題)
	- [答案](#答案-2)
- [🏅 7/10(五) 每日任務](#-710五-每日任務)
	- [問題](#問題-2)
	- [答案](#答案-3)

# 🏅 7/7(二) 每日任務

## 問題

請問 .card 的寬度是多少？(請不要用瀏覽器觀察)

### HTML

```html
<div class="card"></div>
```

### CSS

```css
.card{
	width: 70px;
	height: 50px;
	border-bottom: 3px solid orange;
	border-right: 5px solid #000;
	background: #000;
	padding: 30px;
}
```

### 答案

根據設定，可以得知寬度為
70px (width) + 5px (border-right) + 30px (padding) * 2(right&left) = 135px

# 🏅 7/8(三) 每日任務

## 問題

請問 .container 的高度是多少？(請不要用瀏覽器觀察)

### HTML

```html
<div class="container">
	<h1>標題</h1>
	<p>段落</p>
	<p>段落</p>
	<img alt="" src="logo.png" height="45" /> 
</div>
```

### CSS

```css
.container{
	padding: 0 0 30px 0;
}
.container h1{
	font-size: 24px;
	line-height: 36px;
	margin-bottom: 36px;
}
.container p{
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 24px;
}
.container img{
	display: block;
}
```

## 答案

根據設定可以得知，
container 下方有 30px 的 padding，本身的高度為 30px；h1 的行高為 36px、下方的 margin 為 36px，總和為 72px；p 的行高為 24px、下方的 margin 為 24px，又 p 段落有兩個，故 p 段落的高度為 96px，img 有設定 display:block; ，所以高度為 45px。

將所有高度加總起來，算式如下：
30px(container) + (36px + 36px)(h1) + (24px + 24px)(p) * 2 + 45px(img) = 243px

# 🏅 7/9(四) 每日任務

## 問題，本日是陷阱題

下面的 HTML 標籤會變成什麼顏色？ 請在任務提交區要解釋為什麼。
PS：建議藉由小組或公開討論，思考陷阱在哪裡

### HTML

```html
<a class="a b">HELLO</a>
```

### CSS

```css
a { color:red }
b { color:blue }
```

## 答案

根據設定，在 <a> 標籤中的 class 並沒有被定義，有被定義到樣式的僅有 <a> 的樣式，因此HELLO的字樣顏色應為紅色。

如果要套用 class a, b ，CSS設定應為
```
.a { color:red; }
.b { color:blue; }
```
如果這樣設定的話，CSS 會被最後一個套用的設定覆蓋，也就是套用到 b 的設定，字樣會變成藍色的。

# 🏅 7/10(五) 每日任務

## 問題

請解答此[問答集](https://docs.google.com/presentation/d/152xEyL0SLxgVaPdG5u_1sL6ZWPuqJGXFLTj7S_F2C-Y/edit?usp=sharing)的 10 道選擇題。

1. 哪一個標籤格式才是正確的?
	1. `<p>hello`
	2. `<h1>logo</h1>`
	3. `<a href=http://www.kimo.com.tw>link</a>`
2. 哪個是行內(inline)標籤？
	1. `<h3></h3>`
	2. `<span></span>`
	3. `<p></p>`
	4. `<li></li>`
3. 哪個是區塊(block)標籤？
	1. `<div></div>`
	2. `<em></em>`
	3. `<i></i>`
	4. `<a></a>`
4. 如何在HTML檔案加上CSS樣式？
	1. 載入外部CSS檔，`<link href="xx.css" type="text/css"/>`
	2. 寫在 JS 檔案上
5. CSS reset可清除瀏覽器的預設css設定(是非)
	1. 對
	2. 錯
6. 哪個CSS選擇器是錯的？
	1. `.header`
	2. `#wrap`
	3. `.nav h1`
	4. `.nav %kk`
7. 下面描述 `div` 與 `span` 何者為錯?
	1. `div` 為區塊排版元素
	2. `span` 為行內排版元素
	3. `div`在語意上不具任何意義，`span` 則為列表排版元素
	4. `div` 與 `span` 在語意上不具任何意義，僅拿來協助排版
8. 如果`A div`和`B div`上下間距30px，A需要下什麼語法？
	1. `padding-bottom:30px`
	2. `margin-bottom:30px`
	3. `border:15px solid red`
	4. `line-height:30px`
9. 此[元素](http://codepen.io/liao/pen/CkFwe)的寬度多少？
	HTML
	```html
	<div class="box"></div>
	```
	CSS
	```css
	.box{
		width: 50px;
		padding-left:10px;
		padding-top: 10px;
		color: #fff;
		background: #000;
		height: 200px;
		border-right:3px solid yellow;
	}
	```
	1. 50px
	2. 63px
	3. 73px
	4. 80px
10. 如何讓行內元素變成區塊元素？
	1. `display:inline`
	2. `display:block`
	3. `margin: 0 auto`
	4. `position:relative`

## 答案

1. 2，1應改為 `<p>hello</p>`，3應改為`<a href="http://www.kimo.com.tw">link</a>`
2. 2，除`<span></span>`之外皆為區塊標籤
3. 1，`<em>`、`<i>`、`<a>`為行內標籤，其中`<em>`、`<i>`皆為強調文字使用
4. 1，寫入 css 設定到 JS 檔案並不會套用css設定
5. 1，~完美解釋 reset~
6. 4，並無 `%kk` 的用法，僅有 `id` 、 `class` 、 `HTML tag` 選擇器
7. 3，`span`在語意上不具任何意義
8. 2，1. `padding-bottom:30px`：此設定是用來設定內部間距，3. `border:15px solid red`：設定邊框，4. `line-height:30px`：設定行高
9. 2，寬度會將這三個設定納入計算：`width: 50px;`、`padding-left:10px;`、`border-right:3px solid yellow;`，因此可以得知寬度為 50 + 10 + 3 = 63px
10. 2，1. `display:inline`：設定成行內元素，3. `margin: 0 auto`：設定外部間距，4. `position:relative`：設定元素為相對定位

 