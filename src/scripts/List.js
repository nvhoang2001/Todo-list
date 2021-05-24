import { Item } from "./Item";

export class List {
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
