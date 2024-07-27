// DOM(document object model)

// window.alert();
//alert('same');
// window.document
//console.dir(document);
// window: currently loaded tab
// document is part of window

// html tag > html node(element node)
// tree of element/node
// parent ~ child node

// querySelector(), getElementById()
// Return single elements
// Different ways of querying elements(by CSS selector, by ID)
// Direct reference to DOM element is returned

// querySelectorAll(), getElementsByTagName()..
// Return collections of elements(array-like objects): NodeList
// Different ways of querying elements(by CSS selector, by tag name, by CSS class)
// querySelectorAll() returns a non-live NodeList, getXByY return live NodeLists

// Nodes
// The objects that make up the DOM
// HTML tags are "element nodes" (or just "elements")
// Text creates "text nodes"
// Attributes create "attribute nodes"

// Elements: one type of nodes
// Special properties and methods to interact with the elements
// Available methods and properties depend on the kind of element
// Can be selected in various different ways(via JavaScript)
// Can be created and removed via JavaScript

console.log(document.getElementById('main-title'));
console.dir(document.getElementById('main-title'));
const test = document.getElementById('main-title');
console.log(document.getElementsByClassName('list-item'));

console.log(document.querySelector('.list-itme'));
console.log(document.querySelector('ul li:first-of-type')); // Pseudo selector?
console.log(document.querySelector('ul li:last-of-type'));
const ul = document.querySelector('ul');
console.log(ul.querySelector('li'));

const h1 = document.querySelector('h1');
h1.textContent = 'Some new text'; // remove text node and replace it
h1.className = 'title'; // same
h1.style.color = 'grey';
h1.style.backgroundColor = 'black';

console.dir(h1); // with search of MDN...

const input = document.querySelector('input');
console.dir(input);
input.value = 'changed value';

input.setAttribute('value', 'some other default text');
console.count(input.value);

// 
//const listItemElements = document.querySelectorAll('li');
// relect elements changes
const listItemElements = document.getElementsByTagName('li');
for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}

// Ancestor - parent(ancestor) - (element) - child(descendent) - descendent

const ul2 = document.querySelector('ul');
console.log(ul2.children[1]);
// document.body
console.log(ul2.closest('body'));
const li = document.querySelector('li');
const ul3 = li.parentElement;
console.log(ul3.previousElementSibling);
console.log(ul3.nextElementSibling);

//hard to read, also html file could change..
const ul4 = document.body.firstElementChild.nextElementSibling;
console.log(ul4);