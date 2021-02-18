/*******************
 * YOUR CODE HERE! *
 *******************/

 function yell(string) {
   return string + "!";
 }

function getFirstCharacter(string) {
  return string[0];
}

function getLastCharacter(string) {
  return string[string.length - 1];
}

function getOneCharacter(string, number) {
  return string[number];
}
function getTwoCharacters(string, number, number1) {
  return string[number] + string[number1];
}

function makeCapitalized(string) {
  return string.toUpperCase();
}

function yellLouder(string) {
  return string.toUpperCase() + '!!!';
}

function getInitials(h){
  const i = h.indexOf(' ');
  return h[0] + '.' + h[i+1] + '.';
}
/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
