const daftarProduk = [
  { nama: "Minyak Goreng", harga: 42000, stock: 46 },
  { nama: "Beras", harga: 15000, stock: 50 },
  { nama: "Gulaku", harga: 18000, stock: 36 },
];

// 1. Menghitung diskon
function menghitungDiskon(totalBelanja) {
  let diskon = 0;

  if (totalBelanja >= 100000) {
    diskon = totalBelanja * 0.1;
  } else if (totalBelanja >= 50000) {
    diskon = totalBelanja * 0.05;
  }

  return diskon;
}

// 2. Menampilkan status stok dengan ternary
for (const p of daftarProduk) {
  const label = p.stock > 0 ? "Tersedia" : "Habis";
  console.log(`${p.nama}: ${label}`);
}

// 3. Menghitung total nilai seluruh stok
let total = 0;

for (const p of daftarProduk) {
  total += p.harga * p.stock;
}

console.log("Total nilai stok:", total);

// 4. Memilih metode pembayaran
function menghitungBiaya(total, metode) {
  let biaya = 0;

  switch (metode) {
    case "tunai":
      biaya = 0;
      break;

    case "qris":
      biaya = total * 0.007;
      break;

    default:
      biaya = 2500;
  }

  return biaya;
}

// 5. Simulasi pembayaran
const totalBelanja = 130000;
const diskon = menghitungDiskon(totalBelanja);
const setelahDiskon = totalBelanja - diskon;
const metode = "tunai";
const biaya = menghitungBiaya(setelahDiskon, metode);
const totalBayar = setelahDiskon + biaya;

console.log("Total belanja:", totalBelanja);
console.log("Diskon:", diskon);
console.log("Metode pembayaran:", metode);
console.log("Biaya pembayaran:", biaya);
console.log("Total bayar:", totalBayar);
