/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Item.js":
/*!*****************************!*\
  !*** ./src/scripts/Item.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item)
/* harmony export */ });
class Item {
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


/***/ }),

/***/ "./src/scripts/List.js":
/*!*****************************!*\
  !*** ./src/scripts/List.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/scripts/Item.js");


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
		this.items.push(new _Item__WEBPACK_IMPORTED_MODULE_0__.Item(this.items.length, itemContent));
	}

	removeItem(no = -1) {
		this.items.splice(
			this.items.findIndex((item) => item.id === no),
			1
		);
		this.save();
	}

	renderTopEl() {
		List.listElement.append(_Item__WEBPACK_IMPORTED_MODULE_0__.Item.render(this.items[this.items.length - 1]));
	}

	render() {
		this.items.forEach((item) => {
			List.listElement.append(_Item__WEBPACK_IMPORTED_MODULE_0__.Item.render(item));
		});
	}

	save() {
		localStorage.setItem(this.type, JSON.stringify(this.items));
	}
}


/***/ }),

/***/ "./src/scripts/Page.js":
/*!*****************************!*\
  !*** ./src/scripts/Page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./src/scripts/List.js");


class App {
	constructor() {
		this.addBtn = document.getElementById("btn--add");
		this.input = document.getElementById("input");
		this.list = new _List__WEBPACK_IMPORTED_MODULE_0__.List("todo-list");
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

		_List__WEBPACK_IMPORTED_MODULE_0__.List.listElement.addEventListener("click", (e) => {
			if (e.target.classList.contains("main__item-btn")) {
				let li = e.target.closest("li");
				this.list.removeItem(Number(li.dataset.no));
				li.classList.add("disappear");
				setTimeout(() => li.remove(), 750);
			}
		});
	}
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ "./src/scripts/Page.js");


let app = new _Page__WEBPACK_IMPORTED_MODULE_0__.App();
app.active();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9JdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkOEI7O0FBRXZCO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsdUNBQUk7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsOENBQVc7QUFDckM7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQiw4Q0FBVztBQUN0QyxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQzhCOztBQUV2QjtBQUNQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1Q0FBSTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsRUFBRSxvRUFBaUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7VUM5Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNONkI7O0FBRTdCLGNBQWMsc0NBQUc7QUFDakIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBJdGVtIHtcclxuXHRjb25zdHJ1Y3RvcihpZCwgY29udGVudCkge1xyXG5cdFx0dGhpcy5pZCA9IGlkO1xyXG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyByZW5kZXIoaXRlbSkge1xyXG5cdFx0bGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cdFx0bGkuaW5uZXJIVE1MID0gYCR7aXRlbS5jb250ZW50fSA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJtYWluX19pdGVtLWJ0blwiPjwvaW5wdXQ+YDtcclxuXHRcdGxpLmNsYXNzTGlzdC5hZGQoXCJtYWluX19pdGVtXCIpO1xyXG5cdFx0bGkuZGF0YXNldC5ubyA9IGl0ZW0uaWQ7XHJcblxyXG5cdFx0cmV0dXJuIGxpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vSXRlbVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpc3Qge1xyXG5cdHN0YXRpYyBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKTtcclxuXHJcblx0c3RhdGljIGNsZWFyTGlzdCgpIHtcclxuXHRcdExpc3QubGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHR5cGUpIHtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblxyXG5cdFx0Ly8gSWYgdGhlcmUgaXMgYSByZWNvcmQgb2YgdGhpcyB0eXBlIGluIGxvY2FsIHN0b3JhZ2VcclxuXHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlKSkge1xyXG5cdFx0XHR0aGlzLml0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlKSk7XHJcblx0XHRcdHRoaXMucmVuZGVyKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLml0ZW1zID0gW107XHJcblx0fVxyXG5cclxuXHRhZGRUb0xpc3QoaXRlbUNvbnRlbnQpIHtcclxuXHRcdHRoaXMuaXRlbXMucHVzaChuZXcgSXRlbSh0aGlzLml0ZW1zLmxlbmd0aCwgaXRlbUNvbnRlbnQpKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0obm8gPSAtMSkge1xyXG5cdFx0dGhpcy5pdGVtcy5zcGxpY2UoXHJcblx0XHRcdHRoaXMuaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSBubyksXHJcblx0XHRcdDFcclxuXHRcdCk7XHJcblx0XHR0aGlzLnNhdmUoKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlclRvcEVsKCkge1xyXG5cdFx0TGlzdC5saXN0RWxlbWVudC5hcHBlbmQoSXRlbS5yZW5kZXIodGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aCAtIDFdKSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHR0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0TGlzdC5saXN0RWxlbWVudC5hcHBlbmQoSXRlbS5yZW5kZXIoaXRlbSkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzYXZlKCkge1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50eXBlLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1zKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9MaXN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tLWFkZFwiKTtcclxuXHRcdHRoaXMuaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIpO1xyXG5cdFx0dGhpcy5saXN0ID0gbmV3IExpc3QoXCJ0b2RvLWxpc3RcIik7XHJcblx0fVxyXG5cclxuXHRjbGVhcklucHV0KCkge1xyXG5cdFx0dGhpcy5pbnB1dC52YWx1ZSA9IFwiXCI7XHJcblx0fVxyXG5cclxuXHRpc1ZhbGlkSW5wdXQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnB1dC52YWx1ZS50cmltKCkgIT09IFwiXCI7XHJcblx0fVxyXG5cclxuXHRhZGRUb0xpc3QoKSB7XHJcblx0XHR0aGlzLmxpc3QuYWRkVG9MaXN0KHRoaXMuaW5wdXQudmFsdWUudHJpbSgpKTtcclxuXHRcdHRoaXMuY2xlYXJJbnB1dCgpO1xyXG5cdFx0dGhpcy5saXN0LnJlbmRlclRvcEVsKCk7XHJcblx0XHR0aGlzLmxpc3Quc2F2ZSgpO1xyXG5cdH1cclxuXHJcblx0YWN0aXZlKCkge1xyXG5cdFx0dGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG5cdFx0XHRpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiB0aGlzLmlzVmFsaWRJbnB1dCgpKSB7XHJcblx0XHRcdFx0dGhpcy5hZGRUb0xpc3QoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmlzVmFsaWRJbnB1dCgpKSB7XHJcblx0XHRcdFx0dGhpcy5hZGRUb0xpc3QoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0TGlzdC5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuXHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1haW5fX2l0ZW0tYnRuXCIpKSB7XHJcblx0XHRcdFx0bGV0IGxpID0gZS50YXJnZXQuY2xvc2VzdChcImxpXCIpO1xyXG5cdFx0XHRcdHRoaXMubGlzdC5yZW1vdmVJdGVtKE51bWJlcihsaS5kYXRhc2V0Lm5vKSk7XHJcblx0XHRcdFx0bGkuY2xhc3NMaXN0LmFkZChcImRpc2FwcGVhclwiKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IGxpLnJlbW92ZSgpLCA3NTApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi9QYWdlXCI7XHJcblxyXG5sZXQgYXBwID0gbmV3IEFwcCgpO1xyXG5hcHAuYWN0aXZlKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=