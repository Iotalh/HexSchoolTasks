# 🏅 第三週主線任務

- [任務內容](#任務內容)
    - [值日生檢核點](#值日生檢核點)
    - [助教修改建議](#助教修改建議)
- [答案](#答案)

# 任務內容

1. 本週[作業設計稿](https://xd.adobe.com/spec/934efdb7-a7e4-47d5-572e-efece0914f62-e57f/screen/b11237cd-89ad-4aff-8899-0133ea92eafb/specs/?fbclid=IwAR15fy4gQca7ZDUNrLwshygmfRsPpVtKRXW-ogWntmWT5WHXRzZ10ZG3Heg)，也就是設計第二週的手機版，**最下方的訂閱你我的甜蜜郵件與 footer 請嘗試設計**
2. 可觀看 [作業設計稿 -  線上預覽操作教學](https://hackmd.io/J7ajdobzTlyideAARTLz5Q?view)

備註：線上網址圖片，這裡六角已經上傳到[圖片空間](https://github.com/hexschool/webLayoutTraining1st)，本次作業圖片都放在 **student-week1資料夾**

> 補充：[如果不知道怎麼找到圖片路徑請點我](https://i.imgur.com/O7nQcFm.gif)

## 值日生檢核點

1. 任務完成時間是否有寫正確
2. 是否有使用 flex、justify-content、flex-wrap 等技巧
3. 一個網頁只會有一個 h1
4. 整體畫面視覺元素有 70% 以上都有設計出來
5. 網頁版型是否有居中設計，並使用 margin: 0 auto 語法
6. CSS class 語意命名上，請勿用  編號命名，例如 .box1、2、3，善用功能命名，例如 .profile、.footer、.header
7. 善用 ul、li 標籤
8. 不可直接在 HTML 標籤寫樣式，例如 h2、p，因為一個網站頁面有很多個 h2、p 樣式，比較好的做法是用類別與後代選擇器，例如 .skills h2。不過這網站只有一頁倒是還好，但日後在設計多個頁面時，還請留意此細節。
9. footer、skills 請嘗試不要寫死高度，善用 padding 來產生留白
10. 本週作業不用做 jQ 下拉漢堡選單

## 助教修改建議

1. `.container` 在 pc 版時的 `max-width` 是 `940 px;` 在手機版 `768 px` 時的 `max-width` 是 `375 px;`
`.container` 要記得隨著斷點設定不同的 `max-width;`
2. `.header` 的 `z-index` 不建議下這麼大的數值，因為其實寫 `z-index: 1;` 就可以羅;
另外 `header` 建議可以不用使用 `position: sticky;` 因為這樣 pc 版滑到下面 `footer` 的時候會多了上面那一塊感覺有點怪..不過同學嘗試這樣練習看看也是很棒的！
3. `.subscribe` 在 `(max-width: 768px)` 的 `flex-wrap: wrap;` 可以拿掉

# 答案

[答案預覽連結](https://iotalh.github.io/HexSchoolTasks/Week3/Main.html)

## 斷點設計

共有 3 個斷點，分別為 768px 、 576px 、 375px

### 768px

1. 更換較小張的 logo
2. 調整導覽列(`.header`)項目的左右留白
3. 甜點類別(`.sidebar`)、甜點清單(`.list`)寬度改為 `100%`，變成滿版設計
3. 頁碼(`.pages`)置中
4. 訂閱電子郵件欄位(`.subscribe`)改為垂直置中排版
5. 甜點清單(`.list`)、電子郵件輸入欄位(`.sub-container .email, .sub-container .btn`)增加 `margin-top` 增加間隔。

### 576px

1. 導覽列(`.header`)顯示漢堡選單、購物車選項(`.rwd-items`)，隱藏原本列出來的選項(`.header ul`)
2. `.list, .sub-container` 設定成置中排版
3. 甜點清單(`.list`)每航僅顯示一個甜點
4. 頁尾隱藏標語(`.contact h4`)，僅留下聯絡資訊

### 375px

1. 調整導覽列(`.header`) logo 大小
2. 調整導覽列(`.header`)項目的留白