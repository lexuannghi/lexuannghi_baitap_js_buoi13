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
document.getElementById("tongKy1").onclick = function () {
  var kySo1 = document.getElementById("kySo1").value * 1;
  var hangDonVi1 = kySo1 % 10;
  var hangChuc1 = Math.floor(kySo1 / 10);
  var tongKy1 = hangDonVi1 + hangChuc1;
  console.log(alert("Số hàng đơn vị là: " + hangDonVi1));
  console.log(alert("Số hàng chục là: " + hangChuc1));
  console.log(alert("Tổng số ký 1 là: " + tongKy1));
};
document.getElementById("tongKy2").onclick = function () {
  var kySo2 = document.getElementById("kySo2").value * 1;
  var hangDonVi2 = kySo2 % 10;
  var hangChuc2 = Math.floor(kySo2 / 10);
  var tongKy2 = hangDonVi2 + hangChuc2;
  console.log(alert("Số hàng đơn vị là: " + hangDonVi2));
  console.log(alert("Số hàng chục là: " + hangChuc2));
  console.log(alert("Tổng số ký 2 là: " + tongKy2));
};
