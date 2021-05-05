// Shop Class
// function genarateID() {
//   return Math.random().toString().slice(5)
// }

// console.log(genarateID())




class Shop {
  #items;

  constructor(name, adress, items) {
    this.name = name;
    this.adress = adress;
    this.#items = items
  }

  // Private method
  #genarateID() {
    return Math.random().toString().slice(5)
  }

  #showItems() {
    for (let item of this.#items) {
      let { id, name, price, category } = item
      console.log(`id: ${id}, name: ${name}, price: ${price}, category: ${category}`)
    }
  }
  addItem(name, price, amount, category) {
    let item = {
      id: this.#genarateID(),
      name,
      price,
      amount,
      category
    }
    this.#items.push(item)

    this.#showItems()

  }
  updateItem(producName, newName) {
    for (let item of this.#items) {
      if (item.name === producName) {
        item.name = newName
      }
    }
    this.#showItems()
  }
  remuveItem(producName) {
    let itemsLength = this.#items.length;
    for (let i = 0; i < itemsLength; i += 1) {
      if (producName === this.#items[i].name) {
        console.log(this.#items[i].name)
        this.#items.splice(i, 1);
        break
      }
    }
    this.#showItems()
  }

  init() {
    this.#showItems()
  }
}


let itemsBilla = [
  { id: 1, name: 'apples', price: '35', amount: '200', category: 'fruits' },
  { id: 2, name: 'bananes', price: '25', amount: '350', category: 'fruits' },
  { id: 3, name: 'potato', price: '15', amount: '500', category: 'vegetables' },
  { id: 4, name: 'tomato', price: '37', amount: '150', category: 'vegetables' },
];

// let grocerySore = new Shop('Grocery Store', 'Kyiv', items)
// grocerySore.init()

// console.log(grocerySore.name)
// console.log(grocerySore.adress)
// console.log(grocerySore.items)
// grocerySore.showItems()
// grocerySore.addItem('Carroot', 24, 150, 'vegetables')
// grocerySore.addItem('Pear', 60, 200, 'fruits')
// grocerySore.addItem('Pizza', 100, 50, 'qwe')
// grocerySore.showItems()

// let id = grocerySore.#genarateID()
// console.log(id)

// console.log(grocerySore.items)
// grocerySore.items = null;
// grocerySore.showItems()

// grocerySore.addItem('Beans', 24, 150, 'vegetables')


// ===============================================
// Multiple instances
// let itemsSilbo = [
//   { id: 1, name: 'apples', price: '35', amount: '200', category: 'fruits' },
//   { id: 2, name: 'bananes', price: '25', amount: '350', category: 'fruits' },
//   { id: 3, name: 'potato', price: '15', amount: '500', category: 'vegetables' },
//   { id: 4, name: 'tomato', price: '37', amount: '150', category: 'vegetables' },
// ];

// let itemsAtb = [
//   { id: 1, name: 'apples', price: '35', amount: '200', category: 'fruits' },
//   { id: 2, name: 'bananes', price: '25', amount: '350', category: 'fruits' },
//   { id: 3, name: 'potato', price: '15', amount: '500', category: 'vegetables' },
//   { id: 4, name: 'tomato', price: '37', amount: '150', category: 'vegetables' },
// ];

// let silpo = new Shop('Silpo', 'Kiyv', itemsSilbo)
// let atb = new Shop('ATB', 'Lviv', itemsAtb)


// =======================================
// Inharitance
class Billa extends Shop {
  constructor(delivery, ...args) {
    super(...args)
    this.delivery = delivery
  }

  showDelivery() {
    console.log(this.delivery)
  }

  showItems() {
  }

  init() {
    console.log('Hello BIlla')
  }
}

let billa = new Billa('UkrPost', 'Billa', 'Dnipro', itemsBilla)

billa.showDelivery()
// billa.init()