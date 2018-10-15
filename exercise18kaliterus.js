function kaliTerusRekursif(angka) {
  var angkaStr=String(angka);  
  if(angkaStr.length===1){
    return angka;
  } else {
    var kaliTerus = 1;
    for (var i = 0; i < angkaStr.length; i++) {
      kaliTerus = kaliTerus * Number(angkaStr[i]);
    }
    return kaliTerusRekursif(kaliTerus);

    }
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6