function angkaPrima(angka) {
    var result=true;
    for(var i=2;i<angka;i++){// i harus sama dengan 2 tidak sama dengan 1 dan 0 karena angka prima akan habis dibagi 1 dan 0
        if(angka % i === 0){//pengecekan looping i dimulai dari urutan 2 sampai dengan angka yang dicek(-1) hingga dinyatakan dalam return bahwa bilangan tersebut prima atau bukan
            result=false;
        }
    }return result;
}
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false