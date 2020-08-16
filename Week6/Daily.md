# 🏅 第六週每日任務問答集

- [🏅 8/11(二)每日任務](#-811二-每日任務)
	- [問題](#問題)
	- [答案](#答案)
- [🏅 8/12(三)每日任務](#-812三-每日任務)
	- [問題](#問題-1)
	- [答案](#答案-1)
- [🏅 8/13(四)每日任務](#-813四-每日任務)
	- [問題](#問題-2)
	- [答案](#答案-2)
- [🏅 8/14(五)每日任務](#-814五-每日任務)
	- [問題](#問題-3)
	- [答案](#答案-3)

# 🏅 8/11(二)每日任務

## 題目

利用 Bootstrap 做出響應式排版：任務中已提供 HTML 的部分，請同學新增 Bootstrap class 將以下版型在**桌機尺寸時設為四個一排**，**平板尺寸時設定為兩個一排**，在**手機尺寸時設定為一個一排**，如圖所示：

> 桌機尺寸時設為四個一排
> ![](https://i.imgur.com/zfi2Imu.png)

> 平板尺寸時設定為兩個一排
> ![](https://i.imgur.com/OYJGTKD.jpg)

> 手機尺寸時設定為一個一排
> ![](https://i.imgur.com/rG9WBOA.jpg)


需透過 Codepen 繳交 （載入 Bootstrap CSS）

![](https://i.imgur.com/lD6ydiD.png)

### HTML

```html
<div class="container">
	<div class="row">
		<div class="...">
			<img class="img-fluid" src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="">
		</div>
		<div class="...">
			<img class="img-fluid" src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="">
		</div>
		<div class="...">
			<img class="img-fluid" src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="">
		</div>
		<div class="...">
			<img class="img-fluid" src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="">
		</div>
	</div>
</div>
```

## 答案

[答案預覽連結](https://codepen.io/Iotalh/pen/WNwQLXM)

# 🏅 8/12(三)每日任務

## 題目

元件組合技：嘗試將 [Card](https://bootstrap.hexschool.com/docs/4.2/components/card/) 和 [Media Object](https://bootstrap.hexschool.com/docs/4.2/components/media-object/) 這兩個元件組合在一起，如圖所示：
![](https://i.imgur.com/EmCasDl.png)

需透過 Codepen 繳交 （載入 Bootstrap CSS）

![](https://i.imgur.com/lD6ydiD.png)

## 答案

[答案預覽連結](https://codepen.io/Iotalh/pen/gOraZBR)

# 🏅 8/13(四)每日任務

## 題目

練習使用 Bootstrap 製作表單，可參考 [水平表單](https://bootstrap.hexschool.com/docs/4.2/components/forms/#horizontal-form) 以及 [表單列](https://bootstrap.hexschool.com/docs/4.2/components/forms/#form-row) 的使用方法來完成以下版型，如圖：
![](https://i.imgur.com/7HrdemB.png)

需注意 label 與 input / select 要透過 for 與 id 互相對應
例如：
```html
<label for="name">姓名</label>
<input type="text" id="name"/>
```
需透過 Codepen 繳交 （載入 Bootstrap CSS）

![](https://i.imgur.com/nzxaG8z.png)

## 答案

[答案預覽連結](https://codepen.io/Iotalh/pen/xxVZrVX)


# 🏅 8/14(五)每日任務

## 題目

需透過 Codepen 繳交 （載入CSS CDN）

使用 Bootstrap 通用類別的 [flex 語法](https://bootstrap.hexschool.com/docs/4.2/utilities/flex/) 替換 HTML 中的「...」來還原以下圖示：

> 桌機尺寸
![](https://i.imgur.com/0qPMiyq.png)

> 手機尺寸
![](https://i.imgur.com/zc1kjMH.png)

### HTML

```html
<div class="bg-dark">
	<div class="container">
		<div class="row ...">
			<div class="col-md-8 py-4">
				<h4 class="text-white">About</h4>
				<ul class="list-unstyled text-muted">
					<li>07-1234-5678</li>
					<li>sweetaste@email.com</li>
					<li>800 高雄市新興區幸福路 520 號</li>
				</ul>
				<ul class="list-unstyled">
					<li><a href="#" class="text-white">Follow on Instagram</a></li>
					<li><a href="#" class="text-white">Like on Facebook</a></li>
				</ul>
			</div>
			<div class="col-md-4 py-4">
				<p>© 2018 Sweetaste* All Rights Reserved</p>
			</div>
		</div>
	</div>
</div>
```

## 答案

[答案預覽連結](https://codepen.io/Iotalh/pen/dyMGYpj)