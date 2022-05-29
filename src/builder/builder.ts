class HotDog {
  constructor(
    public bread: string,
    public ketchup?: boolean,
    public mustard?: boolean,
    public relish?: boolean,
    public pickles?: boolean
  ) {}

  addKetchup() {
    this.ketchup = true;
    return this;
  }

  addMustard() {
    this.mustard = true;
    return this;
  }

  addRelish() {
    this.relish = true;
    return this;
  }

  addPickles() {
    this.pickles = true;
    return this;
  }

  getPrice() {
    let price = 0;
    if (this.bread === 'gluten-free') {
      price += 1;
    }
    if (this.ketchup) {
      price += 0.5;
    }
    if (this.mustard) {
      price += 0.5;
    }
    if (this.relish) {
      price += 0.5;
    }
    if (this.pickles) {
      price += 0.5;
    }
    return price;
  }
}

const myHotDog = new HotDog('wheat');

myHotDog.addKetchup().addMustard().addRelish().addPickles();
console.log(`HotDog price: ${myHotDog.getPrice()}`);