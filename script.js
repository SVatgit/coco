console.log("hey you!");
var image= document.getElementsByTagName('img');
console.log(image);

var anchor= document.getElementsByTagName('a');
console.log(anchor);

var phase= document.getElementsByTagName('p');
console.log(phase);

var heading= document.getElementsByTagName('h1');
console.log(heading);

var headings= document.getElementById('headings');
console.log(headings);
console.log(headings.innerHTML);
console.log(headings.nodeType);


var main_content = document.getElementById('main_content');
main_content.setAttribute('align','center');

var headings = document.getElementById('headings');
headings.innerHTML="Welcome Back!";

var main_content = document.getElementById('main_content');
var new_head = document.createElement('h2');
var new_phase = document.createElement('p');
new_head.innerHTML = "Second  Heading";
new_phase.innerHTML = "Welcome Back! agin in second paragraph ";
main_content.appendChild(new_head);
main_content.appendChild(new_phase);

