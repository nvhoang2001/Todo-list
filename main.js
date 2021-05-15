class Item {
	constructor(id, content) {
		this.id = id;
		this.content = content;
	}

	static render(item) {
		let li = document.createElement("li");
		li.innerHTML = `${item.content} <button>x</button>`;
		li.dataset.no = item.id;

		return li;
	}
}

class List {
	static listElement = document.getElementById("list");

	static clearList() {
		List.listElement.innerHTML = "";
	}

	constructor(type) {
		this.type = type;

		// If there is a record of this type in local storage
		if (localStorage.getItem(type)) {
			this.items = JSON.parse(localStorage.getItem(type));
			this.render();
			return;
		}

		this.items = [];
	}

	addToList(itemContent) {
		this.items.push(new Item(this.items.length, itemContent));
	}

	removeItem(no = -1) {
		this.items.splice(
			this.items.findIndex((item) => item.id === no),
			1
		);
		this.save();
	}

	renderTopEl() {
		List.listElement.append(Item.render(this.items[this.items.length - 1]));
	}

	render() {
		this.items.forEach((item) => {
			List.listElement.append(Item.render(item));
		});
	}

	save() {
		localStorage.setItem(this.type, JSON.stringify(this.items));
	}
}

class App {
	constructor() {
		this.addBtn = document.getElementById("btn--add");
		this.input = document.getElementById("input");
		this.list = new List("todo-list");
	}

	clearInput() {
		this.input.value = "";
	}

	isValidInput() {
		return this.input.value.trim() !== "";
	}

	addToList() {
		this.list.addToList(this.input.value.trim());
		this.clearInput();
		this.list.renderTopEl();
		this.list.save();
	}

	active() {
		this.input.addEventListener("keydown", (e) => {
			if (e.key === "Enter" && this.isValidInput()) {
				this.addToList();
			}
		});

		this.addBtn.addEventListener("click", (e) => {
			if (this.isValidInput()) {
				this.addToList();
			}
		});

		List.listElement.addEventListener("click", (e) => {
			if (e.target.tagName === "BUTTON") {
				let li = e.target.closest("li");
				this.list.removeItem(Number(li.dataset.no));
				li.remove();
			}
		});
	}
}

let app = new App();
app.active();
