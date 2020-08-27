# 🏅 第六週每日任務問答集

- [🏅 8/18(二)每日任務](#-818二-每日任務)
	- [問題](#問題)
	- [答案](#答案)

# 🏅 8/18(二)每日任務

## 題目

請觀看並理解 [Modal 元件](https://bootstrap.hexschool.com/docs/4.2/components/modal/) 的運作原理，只能更改下方的 Button 內容讓這個 Modal 可以順利被開啟（不能更動 Modal 內容）

需透過 Codepen 繳交 （載入 Bootstrap CSS + JS）

![](https://i.imgur.com/NVDv3rN.png)

![](https://i.imgur.com/XcC6DG3.png)

### HTML
```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
	Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="openMe" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				...
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save changes</button>
			</div>
		</div>
	</div>
</div>
```

## 答案

```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#openMe">
	Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="openMe" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				...
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save changes</button>
			</div>
		</div>
	</div>
</div>
```