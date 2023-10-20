//complete this code
class Animal {
      constructor(species){

         this._species= species;
      }

      get species(){
         return this._species;
      }

      

      makeSound(sound){
         console.log(sound);

      }
   }

   class Cat extends Animal {

      purr(){
         console.log("purr");

      }
   }
   let c1 = new Cat();
   c1.purr();
   

   class Dog extends Animal {

      bark(){
         console.log("woof"); 
      }
   }
   let d1 = new Dog();
   d1.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
