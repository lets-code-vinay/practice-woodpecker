const constructor = () => {
    let id = 0; 
    return function (name,energy) {
        this.id = ++id;
        this.name = name;
        this.energy = energy;
        this.sing = null;
        this.walk = null;
    }    
}

const sing = function () {
    if (this.energy<2){
        console.log('Cant sing anymore') ;
    } else {
        this.energy-=2;
        console.log(`${this.name} is singing`);
    }
    return this;
}

const walk = function () {
    if (this.energy<1){
        console.log('Cant walk anymore');
    } else {
        this.energy-=1;
        console.log(`${this.name} is walking`);
    }
    return this;
}

const Person = constructor();
let person1 = new Person('Raaj', 7);
person1.sing = sing;
person1.walk = walk;
let person2 = new Person('Abdul', 10);
person2.sing = sing;
person2.walk = walk;
person1 = person1.sing();
person1 = person1.sing();
person1 = person1.sing();
person1 = person1.sing();

