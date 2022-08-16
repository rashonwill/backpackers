let products = [
  {id: 1, name: 'Nike Backpack', price: 40.99, photo: "https://faribucket.s3.amazonaws.com/My+project-1+(7).png"},
  {id: 2, name: 'Nike Shoes', price: 69.99, photo: "https://faribucket.s3.amazonaws.com/My+project-1+(8).png"},
 {id: 3, name: 'Nike Hat', price: 24.99, photo: "https://faribucket.s3.amazonaws.com/My+project-1+(31).png"},
  {id: 4, name: "Adidas Shoes", price: 150.00, photo:"https://faribucket.s3.amazonaws.com/My+project-1+(32).png"},
  {id: 5, name: "Adidas Backpack", price: 21.99, photo:"https://faribucket.s3.amazonaws.com/My+project-1+(25).png"},
  {id: 6, name: "Adidas Hat", price: 28.00, photo: "https://faribucket.s3.amazonaws.com/My+project-1+(24).png"},
  {id:7, name:"Champion Backpack", price: 26.99, photo:"https://faribucket.s3.amazonaws.com/My+project-1+(13).png"},
  {id: 8, name:"Champion Shoes", price: 39.99, photo:"https://faribucket.s3.amazonaws.com/My+project-1+(26).png"},
  {id: 9, name:"Champion Hat", price: 19.99, photo:"https://faribucket.s3.amazonaws.com/My+project-1+(15).png"},
  {id: 10, name:"Puma Backpack", price: 55.00, photo:"https://faribucket.s3.amazonaws.com/My+project-1+(29).png"},
  {id: 11, name:"Puma Shoes", price: 39.99, photo:"https://faribucket.s3.amazonaws.com/My+project-1+(28).png"},
  {id: 12, name:"Puma Hat", price: 12.99, photo:"https://faribucket.s3.amazonaws.com/My+project-1+(18).png"},
  {id: 13, name:"Ralph Lauren Hat", price: 65.00, photo:"https://faribucket.s3.amazonaws.com/My+project-1+(23).png"},
  {id:14, name:"Ralph Lauren Shoes", price: 165.00, photo:"https://faribucket.s3.amazonaws.com/My+project-1+(30).png"},
  {id: 15, name:"Ralph Lauren Backpack", price: 69.99, photo:"https://faribucket.s3.amazonaws.com/My+project-1+(22).png"},
]

function _createProducts(){
  products.forEach((product) =>{
    let listedProducts = $(`
    <div class="card">
            <i class="fa-solid fa-cart-plus"></i>
            <div class="card-content">
              <img src="${product.photo}" alt="product" />
            </div>
            <h3>${product.name}</h3>
            <h4>$${product.price}</h4>
          </div>
    `).data('product', product);
        $(".items").append(listedProducts);
    return listedProducts;
  })
}

_createProducts();
