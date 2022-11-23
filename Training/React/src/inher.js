class vehicle
{
    gear;
    speed;
    constructor(gear,speed) {
        this.gear=gear;
        this.speed=speed;
    }
    display2()
    {
        return `No of gears=${this.gear} speed=${this.speed}`;
    }
}
class Hyundai extends vehicle
{
    drive;
    constructor(gear,speed,drive)
    {
        super(gear,speed);
        this.drive=drive;
    }
    display1()
    {
        return ` gear=${this.gear} speed=${this.speed} drive=${this.drive}`;
    }
}
const a=new Hyundai(4,500,5);
console.log(`${a.display1 ()}`);