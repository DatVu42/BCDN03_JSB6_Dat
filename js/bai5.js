/**
 * Khối 1: Input
 *  số n
 * 
 * Khối 2: Các bước xử lý
 *  B1: Tạo hàm kiemTraSoNguyenTo
 *      + for (var i = 2; i <= Math.sqrt(n); i++)
 *          nếu n % i == 0 => return false (không phải là số nguyên tố)
 *      + Còn không return true => là số nguyên tố
 *  B2: Tạo hàm inSoNguyenTo
 *      + Lấy giá trị n từ form
 *      + var result = ""
 *      + for (var i = 1; i < n; i++)
 *          nếu kiemTraSoNguyenTo(i) == true => result += i
 *      + Hiển thị kết quả lên UI
 *  B3: Gắn hàm inSoNguyenTo vào sự kiện click
 * 
 * Khối 3: Output
 *  danh sách các số nguyên tố từ 1 -> n
 */

function inSoNguyenTo() {
    var n = document.getElementById("number").value;
    var result = "";

    if (n <= 1) {
        alert("Giá trị bạn nhập không hợp lệ. Vui lòng nhập lại!");
        return document.getElementById("number").focus();
    }
    
    for (var i = 2; i <= n; i++) {
        if (kiemTraSoNguyenTo(i)) {
            result += i + " ";
        }
    }

    document.getElementById("hienThiSNT").innerHTML = result;
}

function kiemTraSoNguyenTo(n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}