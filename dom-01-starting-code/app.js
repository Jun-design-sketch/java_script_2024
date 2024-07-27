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

const section = document.querySelector('section');
// section.style.backgroundColor = 'blue';
// section.className = '';

const button = document.querySelector('button');
button.addEventListener('click', () => {
  // if (section.className === 'red-bg invisible'){
  //   section.className = 'red-bg visible';
  // } else {
  //   section.className = 'red-bg invisible';
  // }
  // section.classList.toggle('visible');
  section.classList.toggle('invisible');
})

section.textContent = 'changed content';
// change all nested node, also descendent
section.innerHTML = '<h3>changed content again</h3>';
// how to add?
// it works but all stuffs are re-rendered
section.innerHTML += '<h4>added content with existed stuff</h4>';

// re-render so lost user input
const div = document.querySelector('div');
// div.innerHTML += '<p>and added</p>';

// better, but cannot access this rendered content
div.insertAdjacentHTML('beforeend', '<p>does not rerender others!</p>');

const ul5 = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.textContent = 'Item 5';
ul5.appendChild(newLi);

ul5.append('Some el', 'Some el2');

// what is 'text node'
// <p> paragraph </p>
// ' paragraph '

// attribute, property
// attribute 属性
// htmlドキュメントの静的定義され、文字列表現される
// property
// JSがDocument Object Modelを操作する際、要素自体が持つ情報・状態
// 動的操作が可能（JSで触るからもちろんだが）、オブジェクトの一部となる

// moved because it is object
ul5.prepend(newLi);

// clone, parameter get nested or not
const clone = newLi.cloneNode(true);
ul5.insertAdjacentElement('afterend', clone);

// live node list vs non-live node list?
const list1 = document.querySelector('ul');
const listItems = list1.querySelectorAll('li');
const listItems2 = list1.getElementsByTagName('li');
const newLi2 = document.createElement('li');
newLi2.textContent = 'live or not';
list1.append(newLi2);
// NodeList(5) DOM snapshot
console.log(listItems);
// HTMLCollection(6)
console.log(listItems2);

const select = document.querySelector('select');
// excepe IE
// select.remove();
select.parentElement.removeChild(select);