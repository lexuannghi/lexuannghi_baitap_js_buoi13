//Bài 1
document.getElementById("tinhTienLuong").onclick = function () {
  var tienLuong = document.getElementById("tienLuong").value * 1;
  console.log(alert("Tiền lương của bạn là: " + tienLuong * 100000 + " VND"));
};

//Bài 2
document.getElementById("tinhTrungBinh").onclick = function () {
  var giaTri1 = document.getElementById("giaTri1").value * 1;
  var giaTri2 = document.getElementById("giaTri2").value * 1;
  var giaTri3 = document.getElementById("giaTri3").value * 1;
  var giaTri4 = document.getElementById("giaTri4").value * 1;
  var giaTri5 = document.getElementById("giaTri5").value * 1;
  var trungBinh = (giaTri1 + giaTri2 + giaTri3 + giaTri4 + giaTri5) / 5;
  console.log(alert("Tổng tiền trung bình là: " + trungBinh));
};

//Bài 3
document.getElementById("tinhQuyDoi").onclick = function () {
  var tienUsa = document.getElementById("tienUsa").value * 1;
  var tienMuonDoi = tienUsa * 23500;
  console.log(alert("Số tiền bạn đổi được là: " + tienMuonDoi + " VND"));
};

//Bài 4
document.getElementById("tinhDienTich").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var tongDienTich = chieuDai * chieuRong;
  console.log(alert("Tổng diện tích là: " + tongDienTich));
};
document.getElementById("tinhChuVi").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var tongChuVi = (chieuDai + chieuRong) * 2;
  console.log(alert("Tổng chu vi là: " + tongChuVi));
};

//Bài 5
document.getElementById("tongKy").onclick = function () {
  var kySo = document.getElementById("kySo").value * 1;
  var hangDonVi = kySo % 10;
  var hangChuc = Math.floor(kySo / 10);
  var tongKy = hangDonVi + hangChuc;
  console.log(alert("Số hàng đơn vị là: " + hangDonVi));
  console.log(alert("Số hàng chục là: " + hangChuc));
  console.log(alert("Tổng ký là: " + tongKy));
};
