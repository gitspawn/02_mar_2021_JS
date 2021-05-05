// CRUD


let shop = {
  name: '',
  adress: 'Kyiv',
  items: [
    { id: 1, name: 'apples', price: '35', amount: '200', category: 'fruits' },
    { id: 2, name: 'bananes', price: '25', amount: '350', category: 'fruits' },
    { id: 3, name: 'potato', price: '15', amount: '500', category: 'vegetables' },
    { id: 4, name: 'tomato', price: '37', amount: '150', category: 'vegetables' },
  ],


  showItems() {
    for (let item of this.items) {
      let { id, name, price, category } = item
      // console.log(`id: ${item.id}, name: ${item.name}, price: ${item.price}, ${item.category}`)
      console.log(`id: ${id}, name: ${name}, price: ${price}, category: ${category}`)
    }
  },

  addItem(id, name, price, amount, category) {
    let item = {
      id,
      name,
      price,
      amount,
      category
    }
    this.items.push(item)
  },

  // updateItem(id, newName) { },
  // updateItem(producName, newName) {
  //   let itemsLength = this.items.length
  //   for (let i = 0; i < itemsLength; i += 1) {
  //     if (producName === this.items[i].name) {
  //       this.items[i].name = newName
  //     }
  //   }
  // },


  updateItem(producName, newName) {
    for (let item of this.items) {
      if (item.name === producName) {
        item.name = newName
      }
    }
  },

  // remuveItem(id) { }
  remuveItem(producName) {
    let itemsLength = this.items.length;
    for (let i = 0; i < itemsLength; i += 1) {
      if (producName === this.items[i].name) {
        console.log(this.items[i].name)
        this.items.splice(i, 1);
        break
      }
    }
  }

  // remuveItem(producName) {
  //   for (let item of this.items) {
  //     if (item.name === producName) {
  //       let index = this.items.indexOf(item);
  //       this.items.splice(index, 1)
  //     }
  //   }
  // }
}

// shop.addItem({ id: 5, name: 'carrot', price: '37', amount: '150', category: 'vegetables' })
// shop.addItem(5, 'carrot', '40', '150', 'vegetables')
shop.updateItem('bananes', 'bananes!!!!')
// shop.remuveItem('potato')
shop.showItems()



// ctrl + /

// remuveItem(producName) {
//   let itemsLength = this.items.length;
//   for (let i = 0; i < itemsLength; i += 1) {
//     if (producName === this.items[i].name) {
//       console.log(this.items[i].name)
//       this.items.splice(i, 1);
//       break
//     }
//   }

