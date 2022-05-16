/**
 * Khối 1: Input
 *  số x, số n
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo hàm tinhTong
 *  + Lấy các giá trị từ form
 *  + var tong = 0
 *    for (var i = 1; i <= n; i++)
 *          tong += Math.pow(x, i)
 * B2: Gắn hàm vào sự kiện click
 * 
 * Khối 3: Output
 *  tong
 */

function tinhTong() {
    var x = document.getElementById("numX").value;
    var n = document.getElementById("numN").value;
    var tong = 0;

    for (var i = 1; i <= n; i++) {
        tong += Math.pow(x, i);
    }

    document.getElementById("tong").innerHTML = "Tổng: " + tong;
}