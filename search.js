const searchBox = document.getElementById('search-box');
const keywordInput = document.getElementById('keyword');
const productContainer = document.getElementById('product');

// Khởi tạo danh sách sản phẩm
const products = [
  {
    name: 'SamSung Galaxy S22 Plus',
    price: '20.999.000đ',
  },
  // Các sản phẩm khác...
];

// Hàm tìm kiếm sản phẩm
function searchProducts(keyword) {
  // Xóa các sản phẩm hiện tại trong container
  productContainer.innerHTML = '';

  // Lặp qua danh sách sản phẩm
  for (let i = 0; i < products.length; i++) {
    // Kiểm tra từ khóa tìm kiếm có khớp chính xác với tên sản phẩm hay không
    if (products[i].name.toLowerCase() === keyword.toLowerCase()) {
      // Tạo phần tử HTML cho sản phẩm
      const productItem = document.createElement('div');
      productItem.classList.add('slider-product-one-content-item');

      // Thêm nội dung cho sản phẩm
      productItem.innerHTML = `
        <img src="images/Galaxy-S22-Plus-White-600x600.jpg"> 
        <div class="slider-product-one-content-item-text">
          <li id="hinhanh"><img src="images/text1.jpg" alt=""><p>Giá sốc online</p></li>
          <li id="name">${products[i].name}</li>
          <li>Giá rẻ quá</li>
          <li id="price">${products[i].price}<sup>đ</sup></li>
          <li><a>25.999.000</a><sup>đ</sup><span style="font-size: 12px;">-20%</span></li>
          <li>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </li>
        </div>
        <button type="submit" class="addcart"><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng</button>
      `;

      // Thêm sản phẩm vào container
      productContainer.appendChild(productItem);
    }
  }
}
searchBox.addEventListener('keyup', function() {
    const keyword = keywordInput.value;
    searchProducts(keyword);
  });
  

// Hàm hiển thị sản phẩm
function displayProducts(products) {
  // Xóa các sản phẩm hiện có trong phần productContainer
  productContainer.innerHTML = '';

  // Hiển thị sản phẩm phù hợp trong phần productContainer
  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('slider-product-one-content-item');

    // Tạo các phần tử HTML để hiển thị thông tin sản phẩm
    const productName = document.createElement('li');
    productName.textContent = product.name;

    const productPrice = document.createElement('li');
    productPrice.textContent = product.price;

    // Thêm các phần tử vào productItem
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);

    // Thêm productItem vào productContainer
    productContainer.appendChild(productItem);
  });
}

// Hàm hiển thị sản phẩm
function displayProducts(products) {
  // Xóa các sản phẩm hiện có trong phần productContainer
  productContainer.innerHTML = '';

  // Hiển thị sản phẩm phù hợp trong phần productContainer
  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('slider-product-one-content-item');

    // Tạo các phần tử HTML để hiển thị thông tin sản phẩm
    const productName = document.createElement('li');
    productName.textContent = product.name;

    const productPrice = document.createElement('li');
    productPrice.textContent = product.price;

    // Thêm các phần tử vào productItem
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);

    // Thêm productItem vào productContainer
    productContainer.appendChild(productItem);
  });
}
