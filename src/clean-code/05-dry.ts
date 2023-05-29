class Product {
  constructor(
      public name: string = '',
      public price: number = 0,
      public size: Size = '',
  ) {}
  
  isProductReady() {
      for(const key in this) {
          switch (typeof this[key]) {
              case 'string':
                  if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`);
                  break;
              case 'number':
                  if ((<number><unknown>this[key]) <= 0) throw Error(`${key} is empty`);
                  break;
              default:
                  throw Error(`${typeof this[key]} is not valid`);
          }
      }

      return true;
  }

  toString() {
    if ( !this.isProductReady()) return;
    return `Product: ${this.name}, Price: ${this.price}, Size: ${this.size}`;
  }
}

(() => {
  // al iniciar la aplicación, se debe mostrar un mensaje de bienvenida
  console.log("Bienvenido a la aplicación");

  const bluePants = new Product("Blue large pants", 10, 'S');
  console.log(bluePants.toString());
})();
