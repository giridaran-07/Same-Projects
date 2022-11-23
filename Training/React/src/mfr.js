const marks=[10,20,30,40,50,60,70];

const grade = marks.map(function (e)
{
    let result = e>=50?"pass":"fail";
    return result;
});
console.log(marks);
console.log(grade);
const fil=marks.filter(e => e>=50);

console.log(fil);
const red=marks.reduce(function(tot,e)
{
    return tot+e;
});

console.log(red);
/*map filter reduce*/