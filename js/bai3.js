/**
 * Khối 1: Input
 *  số n
 * 
 * Khối 2: Các bước xử lý
 * B1: Lấy các thẻ bằng id
 * B2: Tạo hàm tinhGiaThua
 *  + Lấy các giá trị từ form
 *      var giaiThua = 1
 *      for (var i = 1; i <= n; i++)
 *          giaiThua *= i
 *  + Hiển thị lên UI
 * B3: Gắn hàm vào sự kiện click
 * 
 * Khối 3: Output
 *  n!
 */

var inpN = document.getElementById("num");

function tinhGiaiThua() {
    var n = inpN.value;
    var giaiThua = 1;

    if (n < 0 || n == "") {
        alert("Giá trị bạn nhập không hợp lệ. Vui lòng nhập lại!");
        return inpN.focus();
    }

    for (var i = 1; i <= n; i++) {
        giaiThua *= i;
    }

    document.getElementById("giaiThua").innerHTML = n + "! = " + giaiThua.toLocaleString();
}