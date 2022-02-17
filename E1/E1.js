class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

}
let obj1 = new Rectangle(5, 3);
let obj2 = new Rectangle(8, 9);
console.log(obj1.width);
console.log(obj1.height);
console.log(obj2.width);
console.log(obj2.height);

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
}
console.log(obj1.getArea());
console.log(obj2.getArea());

let r = new Rectangle(4, 5);
r.hieght = 50; //the spelling of height is wrong.
console.log(r.getArea()); //So the area=4*5=20;