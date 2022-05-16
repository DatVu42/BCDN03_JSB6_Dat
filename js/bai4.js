/**
 * Khối 1: Input
 * 
 * Khối 2: Các bước xử lý
 *  B1: Tạo button và gắn function cho button
 *  B2: Tạo hàm tao10Div
 *      for (var i = 1; i <= 10; i++)
 *          Tạo 1 thẻ Div
 *          Nếu i là chẵn => set backgroundColor cho thẻ Div = "red"
 *          Nếu i là lẻ => set backgroundColor cho thẻ Div = "blue"
 *          Gắn Div vừa tạo lên UI
 * 
 * Khối 3: Output
 *  Tạo 10 thẻ Div
 *      + Các Div chẵn có background màu đỏ
 *      + Các Div lẻ có background màu xanh
 */

function tao10Div() {
    for (var i = 1; i <= 10; i++) {
        var taoDiv = document.createElement("div");
        if (i % 2 == 0) {
            taoDiv.innerHTML = "Div chẵn " + i;
            taoDiv.style.backgroundColor = "red";
        } else {
            taoDiv.innerHTML = "Div lẻ " + i;
            taoDiv.style.backgroundColor = "blue";
        }
        taoDiv.style.color = "white";
        taoDiv.style.padding = "10px";
        document.getElementById("divGroup").appendChild(taoDiv);
    }
}   