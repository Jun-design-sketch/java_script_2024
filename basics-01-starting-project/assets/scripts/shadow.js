// get alert 'Max'

// global var
let userName = 'Max';
function greetUser(name) {
  // local var
  let userName = name;
  alert(userName);
}
userName = 'Manu';
greetUser('Max');

