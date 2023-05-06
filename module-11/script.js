let array = [];

function addElement() {
  let input = document.getElementById("input").value;
  array.push(input);
  alert(`Added ${input} at position ${array.length}`);
  document.getElementById("input").value = "";
}

function deleteElement() {
  array.pop();
}

function displayElements() {
  let list = document.getElementById("list");
  list.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li");
    li.textContent = `Item ${i+1}: = ${array[i]}`;
    list.appendChild(li);
  }
}
