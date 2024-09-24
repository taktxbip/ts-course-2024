class Animal {
  private name:string 

  constructor(name:string){
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const cat = new Animal('cat');

// interfaces ?
// types ?