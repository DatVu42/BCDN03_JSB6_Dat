/**
 * Khối 1: Input
 *  Các số nguyên dương có tổng > 10000
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo button và gắn function cho button
 * B2: Tạo hàm timSoNguyen
 * B3: Kiểm tra tổng của 1 + 2 + ... + n sao cho tổng > 10000
 *      var n = 1;
 *      var sum = 0;
 *      while(sum <= 10000 - n)
 *          sum = sum + n;
 *          tăng n lên 1 đơn vị
 * B4: Hiển thị lên UI
 * 
 * Khối 3: Output
 *  số n
 */

function timSoNguyen() {
    var n = 1;
    var sum = 0;

    while (sum <= 10000 - n) {
        sum += n;
        n++;
    }

    document.getElementById("displayNumber").innerHTML = "Số nguyên dương nhỏ nhất: " + n;
}