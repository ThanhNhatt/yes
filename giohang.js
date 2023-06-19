
  // Hàm xử lý thêm sản phẩm vào giỏ hàng
  function addToCart() {
    // Lấy thông tin sản phẩm từ HTML
    var hinhanh = document.getElementById('hinhanh').src;
    var price = document.getElementById('price').textContent;
    var name = document.getElementById('name').textContent;

    // Tạo một đối tượng sản phẩm với số lượng mặc định là 1
    var product = {
        hinhanh: hinhanh,
        price: price,
        name: name,
        quantity: 1
    };

    // Kiểm tra xem giỏ hàng đã được lưu trong localStorage chưa
    var cart = localStorage.getItem('cart');
    if (cart) {
        // Nếu giỏ hàng đã tồn tại, thêm sản phẩm vào giỏ hàng
        cart = JSON.parse(cart);
        cart.push(product);
    } else {
        // Nếu giỏ hàng chưa tồn tại, tạo giỏ hàng mới và thêm sản phẩm vào
        cart = [product];
    }

    // Lưu giỏ hàng vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Sản phẩm đã được thêm vào giỏ hàng!');
}


    // Hàm xử lý xem giỏ hàng
    function viewCart() {
        // Chuyển hướng đến trang giỏ hàng
        window.location.href = 'cart.html';
    }
