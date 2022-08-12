module.exports = 
function reverse (n) {

let arr = Array.from(n.toString());
arr.reverse();
return arr.slice(0, 3).join('');

}

