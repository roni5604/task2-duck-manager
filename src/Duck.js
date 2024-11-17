// src/Duck.js
class Duck {
    constructor(name, color, age, weight, image) {
      this.name = name;
      this.color = color;
      this.age = parseInt(age);
      this.weight = parseFloat(weight);
      this.image = image;
    }
  
    show() {
      return `
        Name: ${this.name}
        Color: ${this.color}
        Age: ${this.age}
        Weight: ${this.weight}
      `;
    }
  
    quack() {
      let times = Math.floor((this.age * this.weight) / 2);
      let quacks = 'Quack '.repeat(times);
      return quacks;
    }
  }
  
  export default Duck;
  