class car
{
    name;
    year;
    constructor(name,year)
    {
        this.name=name;
        this.year=year || 2018;
    }
    display()
    {
     return    `Name = ${this.name}`;
    }
     age()
     {
        let date=new Date();
        return date.getFullYear()-this.year; 
     } 
}
const a=new car("ford",2000);
const b=new car("toyota",2002);
console.log("Name="+a.display()+"  Age="+a.age());
console.log("Name="+b.display()+"  Age="+b.age());     
console.log(`${a.display()} Age=${a.age()}`);