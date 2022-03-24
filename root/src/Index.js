function allowDrop(ev) {
  ev.preventDefault();
}

function dragStart(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragDrop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  keyvalue = data;
  keyposition = ev.target.id;
  if (keyposition == "lowerL6Key6N") {
    document.getElementById("key1").style.display = "block";
    document.getElementById("key").style.display = "none";
    console.log(data);
  }
  if (keyposition == "upperL6Key5") {
    document.getElementById("key1").style.display = "none";
    document.getElementById("key").style.display = "block";
    console.log(data);
  }
}
