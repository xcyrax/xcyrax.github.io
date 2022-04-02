function myBio(name, stat, job){
    this.name = name;
    this.stat = stat;
    this.job = job;
};
let yourName = new myBio('Roboto', 'test_Prototype', 'Student');

alert(yourName);

const testObject = {
     eat : function(pizza){
       this.energy += pizza;
       return `Hello bro your helth + ${this.energy}`;
     }
}

let Enemy = function(name, energy){
  obj = {}
  obj.name = name;
  obj.energy = energy;
  obj.eat = testObject.eat;
  return obj;
}

const xroboto = Enemy('Prototype', 7);

alert(`Hello ${this.name} get your service`);