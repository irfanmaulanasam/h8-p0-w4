function digitPerkalianMinimum(angka) {
  var digit =[];
    for( i=1; i<=angka ; i++){
      for(j=1; j<=angka ; j++){
        if( i*j == angka){
          digit.push(String(i).length+String(j).length);
        }
      }
    }//console.log(digit)
    for(var i = 0; i < digit.length; i++) {
        var terkecil = digit[i]
        for(var j = i + 1; j < digit.length; j++) {
            if(digit[j] < terkecil) {
                var temp = digit[i]
                terkecil = digit[j]
                digit[i] = digit[j]
                digit[j] = temp
            }
        }
    }
    return digit[0]
}
  // digit perkalian minimum adalah sebuah function yang menghitung berapa angka yang dipakai untuk mencapai hasil perkalian angka yang telah disediakan
  // yang pertama harus dilakukan adalah mencari perkalian yang bisa mengeluarkan samadengan angka proses ini dilakukan berulang kali sampai dengan angka tersebut dikali dengan angka 1
  // kedua adalah melakukan proses hitung berapa digit angka yang keluar untuk menghasilkan perkalian sama dengan angka
  // terakhir ialah melihat berapa digit angka yang paling kecil dengan menyortirnya dahulu dan dan merubahnya menjadi string supaya bisa dihitung digitnya 

  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2