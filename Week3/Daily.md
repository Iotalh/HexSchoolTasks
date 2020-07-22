# 🏅 第三週每日任務問答集

- [🏅 7/21(二)每日任務](#-721二-每日任務)
	- [問題](#問題)
	- [答案](#答案)
- [🏅 7/22(三)每日任務](#-722三-每日任務)
	- [問題](#問題-1)
	- [答案](#答案-1)

# 🏅 7/21(二)每日任務

## 問題

1. 請問下列何者是正確的 media query 語法？
    1. `@media (min-width: 600px) {...}`
    2. `@media min-width: 600px {...}`
    3. `@media (min-width = 600px) {...}`
    4. `@media min-width = 600px {...}`
2. 根據以下 CSS 請問最後字呈現的顏色為什麼？
    ```html
    <div id="color-id" class="color-class">Color</div>

    <style>
    	.color-class { color: blue; }
    	#color-id { color: red; }
    	div {color: yellow; }
    </style>
    ```
    1. 藍色
    2. 紅色 
    3. 黃色
    4. 黑色
3. 根據以下 CSS，在螢幕解析度 600px 時文字的顏色為何？
    ```css
    @media (min-width: 576px){
        p { color: red; }
    }
    @media (min-width: 768px){
        p { color: black; }
    }
    p { color: yellow; }
    ```
    1. 紅色 
    2. 黑色
    3. 黃色
    4. 藍色
4. 根據以下 CSS，在螢幕解析度 600px 時文字的顏色為何？
    ```css
    p { color: yellow; }
    @media (min-width: 576px){
        p { color: red; }
    }
    @media (min-width: 768px){
        p { color: black; }
    }
    ```
    1. 紅色 
    2. 黑色
    3. 黃色
    4. 藍色
5. 針對響應式圖片的設定，應該幫 img 標籤加上什麼語法？
    1. `max-width:100%`
    2. `width:100%`
    3. `max-width: 100px`
    4. `width: 100px`

## 答案

1. 1，正確語法為 `@media (min-width: 600px) {…}`
2. 2，依照權重分數來看 `.color-class` 為 10 分， `#color-id` 為 100 分， `div` 為 1 分，照大小排序為 `#color-id>.color-class>div`，因此顏色為紅色
3. 3，因為後面的 `p` 的設定把前面的設定覆蓋過去了
4. 1，因為 576px < 600px < 768px 所以會套用 576px 的設定
5. 1，目的是讓 `img` 能自適應大小

# 🏅 7/22(三)每日任務

## 問題

做出響應式排版：任務中已提供 HTML 的部分，請同學將 CSS 內有「...」部分替換成 CSS 語法，練習將以下版型在**桌機尺寸時設為四個一排**，**平板尺寸時設定為兩個一排**，在**手機尺寸時設定為一個一排**，如圖所示：

> 桌機尺寸時設為四個一排

![](https://i.imgur.com/TQlwI1n.png)

> 平板尺寸時設定為兩個一排

![](https://i.imgur.com/cU4FF87.png)

> 手機尺寸時設定為一個一排

![](https://i.imgur.com/xM2BUvK.png)

### HTML

```html
<div class="container">
    <div class="main">
        <div class="card">
            <img class="card-img"
                src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
            <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional
                    content. This content is a little bit longer.</p>
                <small>9 mins</small>
                <button class="card-btn">點我</button>
            </div>
        </div>
        <div class="card">
            <img class="card-img"
                src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
            <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional
                    content. This content is a little bit longer.</p>
                <small>9 mins</small>
                <button class="card-btn">點我</button>
            </div>
        </div>
        <div class="card">
            <img class="card-img"
                src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
            <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional
                    content. This content is a little bit longer.</p>
                <small>9 mins</small>
                <button class="card-btn">點我</button>
            </div>
        </div>
        <div class="card">
            <img class="card-img"
                src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
            <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional
                    content. This content is a little bit longer.</p>
                <small>9 mins</small>
                <button class="card-btn">點我</button>
            </div>
        </div>
    </div>
</div>
```

### CSS

```css
img {
    ...
    height: auto;
}

.container {
    ...
    margin: 0 auto;
}

.main {
    display: flex;
    flex-wrap: wrap;
}

.card {
    ...
}

@media (max-width: 768px) {
    .card {
        ...    
    }
    .container {
        max-width: 720px;
    }
}
@media (max-width: 576px) {
    .card {
        ...
    }
    .container {
        max-width: 540px;
    }
}

```

## 答案

[答案預覽連結](https://iotalh.github.io/HexSchoolTasks/Week3/Daily-722.html)