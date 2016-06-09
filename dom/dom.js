function callChildren() {
    console.log(document.childNodes);
    console.log(document.children);
}
function callBody() {
    console.log(document.body);
}
function callCreateElement() {
    var elem = document.createElement("p");
    elem.textContent = "Hi";
    console.log(elem);
}
function createElement() {
    var elem = document.createElement("p");
    elem.textContent = "Hi";
    return elem;
}
function callGetById() {
    console.log(document.getElementById("p1"));
}
function callGetByTagName() {
    console.log(document.getElementsByTagName("p"));
}
function callNextSibling() {
    var elem = document.getElementById("p1");
    console.log(elem.nextSibling);
    console.log(elem.nextElementSibling);
}
function callPrevSibling() {
    var elem = document.getElementById("p2");
    console.log(elem.previousSibling);
    console.log(elem.previousElementSibling);
}
function callAppendChild() {
    var elem = createElement();
    var parent = document.getElementById("top");
    parent.appendChild(elem);
}
function callInsertBefore() {
    var elem = createElement();
    var parent = document.getElementById("top");
    var sibling = document.getElementById("p1");
    parent.insertBefore(elem, sibling);
}
function callRemoveChild() {
    var parent = document.getElementById("top");
    var elem = document.getElementById("p1");
    parent.removeChild(elem);
}
function callReplaceChild() {
    var elem = createElement();
    var parent = document.getElementById("top");
    var sibling = document.getElementById("p2");
    parent.replaceChild(elem, sibling);
}
function callQuerySelectAll() {
    var parent = document.querySelector("#container");
    console.log(parent.querySelectorAll("#p1"));
    console.log(parent.querySelectorAll("p"));
    console.log(parent.querySelectorAll(".p1class"));
    console.log(parent.querySelectorAll("p.p1class"));
    console.log(parent.querySelectorAll("p.p1class.p1class2"))
}
function callQuerySelect() {
    var parent = document.querySelector("#container");
    console.log(parent.querySelector("#p1"));
    console.log(parent.querySelector("p"));
    console.log(parent.querySelector(".p1class"));
    console.log(parent.querySelector("p.p1class"));
    console.log(parent.querySelector("p.p1class.p1class2"))
}
