(()=>{"use strict";class t{constructor(t,e){this.id=t,this.content=e}static render(t){let e=document.createElement("li");return e.innerHTML=`${t.content} <input type="checkbox" class="main__item-btn"></input>`,e.classList.add("main__item"),e.dataset.no=t.id,e}}class e{static listElement=document.getElementById("list");static clearList(){e.listElement.innerHTML=""}constructor(t){if(this.type=t,localStorage.getItem(t))return this.items=JSON.parse(localStorage.getItem(t)),void this.render();this.items=[]}addToList(e){this.items.push(new t(this.items.length,e))}removeItem(t=-1){this.items.splice(this.items.findIndex((e=>e.id===t)),1),this.save()}renderTopEl(){e.listElement.append(t.render(this.items[this.items.length-1]))}render(){this.items.forEach((i=>{e.listElement.append(t.render(i))}))}save(){localStorage.setItem(this.type,JSON.stringify(this.items))}}(new class{constructor(){this.addBtn=document.getElementById("btn--add"),this.input=document.getElementById("input"),this.list=new e("todo-list")}clearInput(){this.input.value=""}isValidInput(){return""!==this.input.value.trim()}addToList(){this.list.addToList(this.input.value.trim()),this.clearInput(),this.list.renderTopEl(),this.list.save()}active(){this.input.addEventListener("keydown",(t=>{"Enter"===t.key&&this.isValidInput()&&this.addToList()})),this.addBtn.addEventListener("click",(t=>{this.isValidInput()&&this.addToList()})),e.listElement.addEventListener("click",(t=>{if(t.target.classList.contains("main__item-btn")){let e=t.target.closest("li");this.list.removeItem(Number(e.dataset.no)),e.classList.add("disappear"),setTimeout((()=>e.remove()),750)}}))}}).active()})();