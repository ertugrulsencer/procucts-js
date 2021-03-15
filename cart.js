const cart = [
  { productName: 'Lenovo 7X', price: 2499.99, productNumber: 100, description: 'Lenova bilgisayar 16GB Ram' },
  { productName: 'Xiaomi MI8', price: 1889.99, productNumber: 250, description: 'Xiaomi telefon 6GB Ram' },
  { productName: 'MacBook Pro', price: 8599.99, productNumber: 50, description: 'Apple MacBook Pro 6GB Ram, Intel Core i8' },
  { productName: 'Lenovo 7X', price: 2499.99, productNumber: 100, description: 'Lenova bilgisayar 16GB Ram' },
  { productName: 'Xiaomi MI8', price: 1889.99, productNumber: 250, description: 'Xiaomi telefon 6GB Ram' },
  { productName: 'MacBook Pro', price: 8599.99, productNumber: 50, description: 'Apple MacBook Pro 6GB Ram, Intel Core i8' }
]
const list = document.querySelector('#table')
const refreshList = () => {
  list.innerHTML = null
  cart.forEach(cart => {
    const li = document.createElement('tr')
    li.className = 'item'
    li.innerHTML = `
      <td><span class="name">${cart.productName}</span></td>
      <td><strong>${cart.price}₺</strong></td>
      <td><input type="number" value="${cart.productNumber}"></td>
      <td><span>${cart.description}</span></td>`
    list.appendChild(li)
  })
}
const addProduct = (productName, price, productNumber, description) => {
  price = parseInt(price)
  productNumber = parseInt(productNumber)
  if (productName.trim() == '' || price == 0 || productNumber == 0 || description.trim() == '') {
    alert('Boş alan bırakmayınız !')
  } else {
    cart.push({
      productName,
      price,
      productNumber,
      description,
    })
    refreshList()
  }
}
const inputs = {
  name: document.querySelector('#productName'),
  price: document.querySelector('#productPrice'),
  number: document.querySelector('#productNumber'),
  desc: document.querySelector('#productDesc')
}
inputs.desc.addEventListener('keyup', e => {
  if (e.key == 'Enter') {
    addProduct(inputs.name.value, inputs.price.value, inputs.number.value, inputs.desc.value)
    inputs.name.value = null
    inputs.price.value = 0
    inputs.number.value = 0
    inputs.desc.value = null
  }
})
document.querySelector('#addProduct').addEventListener('click', e => {
  addProduct(inputs.name.value, inputs.price.value, inputs.number.value, inputs.desc.value)
  inputs.name.value = null
  inputs.price.value = 0
  inputs.number.value = 0
  inputs.desc.value = null
})
refreshList()