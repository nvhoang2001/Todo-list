export class Item {
	constructor(id, content) {
		this.id = id;
		this.content = content;
	}

	static render(item) {
		let li = document.createElement("li");
		li.innerHTML = `${item.content} <input type="checkbox" class="main__item-btn"></input>`;
		li.classList.add("main__item");
		li.dataset.no = item.id;

		return li;
	}
}
