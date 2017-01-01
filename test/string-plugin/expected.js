var sayHi$1 = function () {
  console.log('hi');
};

var sayBye = function () {
  console.log('bye');
};

var otherFile = {
	sayHi: sayHi$1,
	sayBye: sayBye
};

// import {sayHi} from './other-file'
var {sayHi} = otherFile;
var foo = function () {
  sayHi();
};

foo();

var input = {

};

export default input;
