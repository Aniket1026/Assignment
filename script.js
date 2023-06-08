const list_items = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");

let originalOrder = [];
let draggedItems = null;

for (let i = 0; i < list_items.length; i++) {
  const item = list_items[i];

  // event for when the user starts dragging an item
  item.addEventListener("dragstart", function (e) {
    draggedItems = item;
    setTimeout(function () {
      item.style.display = "none";
    }, 0);
  });

  // event for when  a drag operation ends (such as releasing a mouse button or hitting the Esc key
  item.addEventListener("dragend", function () {
    setTimeout(function () {
      draggedItems.style.display = "block";
      draggedItems = null;
    }, 0);
  });

  for (let j = 0; j < lists.length; j++) {
    const list = lists[j];

    // event for a dragged item is being dragged over a valid drop target, every few hundred milliseconds.
    list.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    // event for a dragged item enters a valid drop target
    list.addEventListener("dragenter", function (e) {
      e.preventDefault();
    });

    // event for an item is dropped on a valid drop target
    list.addEventListener("drop", function (e) {
      this.append(draggedItems);
    });
  }
}

// function resets back to the initial order
function resetItems() {
  console.log("click");
  var list1 = document.getElementById("list1");
  var list2 = document.getElementById("list2");

  // reset list1
  list1.innerHTML = "";

  for (var i = 0; i < originalOrder.length; i++) {
    list1.appendChild(originalOrder[i]);
  }
  // reset list2
  list2.innerHTML = "";
}

var list1Items = document.querySelectorAll("#list1 .list-item");
originalOrder = Array.from(list1Items);
