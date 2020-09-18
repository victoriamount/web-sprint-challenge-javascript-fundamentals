// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(length, width, height){
//     this.length = length;
//     this.width = width;
//     this.height = height;
// }
// CuboidMaker.prototype.volume = function(){
//     return this.length*this.width*this.height;
// };
// CuboidMaker.prototype.surfaceArea = function(){
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// };
// const cuboid = new CuboidMaker(4, 5, 5);

class CuboidMaker{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
        return this.length*this.width*this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker(4, 5, 5);





// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("Classes Task 1: (Complete")
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class Cubemaker extends CuboidMaker{
    constructor(length, width, height){
        super(length, width, height);
    }
    volume(){
        if (this.length == this.width && this.length == this.height && this.width == this.height){
            return Math.pow(this.length, 3);
        }
        else{
            return "Not a cube";
        }
    }
    surfaceArea(){
        if (this.length == this.width && this.length == this.height && this.width == this.height){
            // that if was tricky!
            return 6*Math.pow(this.length, 2);
        }
        else{
            return "Not a cube";
        }
    }
}

const victoriasCube = new Cubemaker(2,2,2);
const sterlingsCube = new Cubemaker(2,3,4);

console.log(victoriasCube.volume());
console.log(sterlingsCube.volume());