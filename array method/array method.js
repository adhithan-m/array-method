//Array.at()
var array = [5, 12, 8, 130, 44];
document.write(array.at(2));      
//document.write(array.at(-2));
document.write("<br>");


//array.concat()
var a = ['a', 'b', 'c'];
var b = ['d', 'e', 'f'];
var c = a.concat(b);
document.write(c);
document.write("<br>");


//array.pop()
var x = [5, 12, 8, 130, 44];
x.pop();
document.write(x);
document.write("<br>");

//array.push()
var x = [5, 12, 8, 130, 44];
x.push(23,36);
document.write(x);
document.write("<br>");

//array.shift
var x = [5, 12, 8, 130, 44];
x.shift();
document.write(x);
document.write("<br>");

//array.unshift
var x = [5, 12, 8, 130, 44];
x.unshift(1,2);
document.write(x);
document.write("<br>");


//array.splice()
//add
var month=["jan","feb","mar","apr"];
month.splice(2,0,"may");
document.write(month);
document.write("<br>");

//remove
var month=["jan","feb","mar","apr"];
month.splice(2,1);
document.write(month);
document.write("<br>");

//replace
var month=["jan","feb","mar","apr"];
month.splice(0,4,"may");
document.write(month);
document.write("<br>");


//array.slice()
var month=["jan","feb","mar","apr","may"];
var x=month.slice(1,3);
document.write(x);
document.write("<br>");

//negative
var month=["jan","feb","mar","apr","may"];
var x=month.slice(-4,-1);
document.write(x);
document.write("<br>");


//array.reverse()
var a=[1,2,3,4,5];
a.reverse();
document.write(a);
document.write("<br>");


//array.sort()
var a=[12,1,3,34,6,90,80,70];
a.sort();
document.write(a);
document.write("<br>");


//array.includes()
var a=[1,2,3,4,5];
var b=a.includes(2);
document.write(b);
document.write("<br>");


//array.indexof()
var a=[1,2,3,4,5];
var b=a.indexOf(4);
document.write(b);
document.write("<br>");


//array.fill()
var sum=[1,2,3,4,5];
var a=sum.fill(4);
document.write(a);
document.write("<br>");


var sum=[1,2,3,4,5];
var a=sum.fill(2,0,1);
document.write(a);
document.write("<br>");


var sum=[1,2,3,4,5];
var a=sum.fill(2,3);
document.write(a);
document.write("<br>");

//array.map()
var a=[0,3,4,5,3];
var res=a.map(function(val,index)
{
	return val+2;
});
document.write(res);
document.write("<br>");

// var a = [1,2,3,4];
// var b = a.map(2);
// document.write(b);
// document.write("<br>");

//array.filter()
var arr=[0,3,4,5,3];
var res=arr.filter(function(val,index)
{
	return val>2;
});
document.write(res);
document.write("<br>");

// var a =[0,1,2,3,4] 
// var b = a.filter(2);
// document.write(b);
// document.write("<br>");

//array.every()
var a=[0,3,4,5,3];
var res=a.every(function(val,index)
{
	return val<=5;
});
document.write(res);
document.write("<br>");


//array.some()
var a=[0,3,4,5,3];
var res=a.some(function(val,index)
{
	return val *2;
});
document.write(res);
document.write("<br>");


//array.find()
var a=[0,3,4,5,3];
var res=a.find(function(val,index)
{
	return val>2;
});
document.write(res);
document.write("<br>");

//array.reduce()
var a=[0,3,4,5,3];
var res=a.reduce(function(acc,c)
{
	return acc+c;
});
document.write(res);
document.write("<br>");


//array.forEach()
var array1 = ['a', 'b', 'c'];
array1.forEach(element => document.write(element));