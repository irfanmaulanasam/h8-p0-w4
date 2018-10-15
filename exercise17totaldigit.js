function totalDigitRekursif(angka) {
  var digit = Number(String(angka).slice(0,1));
  angka = Number(String(angka).slice(1));
  if(! angka) {
    return digit;
  }
  else {
    return digit + totalDigitRekursif(angka);
  }
}
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5