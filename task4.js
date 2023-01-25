function discount(jumlahMakanan, hargaSatuan) {
    let totalHarga = jumlahMakanan * hargaSatuan
    let potongan = 0;
    let subTotal = totalHarga


    totalHarga >= 60000 ? (potongan = totalHarga * 0.35, potongan > 50000 ? potongan = 50000 : null, subTotal = totalHarga - potongan) : null;

    console.log(`totalHarga: ${totalHarga}\npotongan: ${potongan}\nsubTotal: ${subTotal}`)
}


discount(3,25000)