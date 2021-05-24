import { List } from "./List.js";

export class App {
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
			if (e.target.classList.contains("main__item-btn")) {
				let li = e.target.closest("li");
				this.list.removeItem(Number(li.dataset.no));
				li.classList.add("disappear");
				setTimeout(() => li.remove(), 750);
			}
		});
	}
}
