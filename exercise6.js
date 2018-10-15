function hitungHuruf(kata) {
  var pisahKata = kata.split(' ');//memisahkan tiap kata untuk dijadikan array
  var perulanganKata = []; //menampung perulangan pada setiap kata
  var ulangHuruf = [];
  for(var i = 0; i < pisahKata.length; i++){
    var pisahHuruf = pisahKata[i].split(''); //membuat array dari 1 kata
    var perulanganHuruf = 0; //penampung jumlah pengulangan huruf di setiap kata
    for(var j = 0; j < pisahKata[i].length -1; j++){
      for(var k = j; k < pisahHuruf.length; k++){
        
        if(j !== k && pisahKata[i][j] === pisahHuruf[k]){
          perulanganHuruf ++;//penghitungan jumlah pengulangan huruf pada setiap kata
          var splice = pisahHuruf.splice(k, 1);
          
        }
        
      }
      //console.log(perulanganHuruf)
    }
    perulanganKata.push(perulanganHuruf);
  } 
  console.log(pisahKata)
  console.log(perulanganKata)
  for( var a=0 ; a<pisahKata.length ; a++){
    for( var b=0 ; b<perulanganKata ; b++){
      if( perulanganKata>){
        
      }
    }
  }

  // var hurufTerbanyak = Math.max.apply(null, perulanganKata); //menentukan score pengulangan paling besar
  // var lokasiPerulanganTerbesar = perulanganKata.indexOf(hurufTerbanyak);//Cari lokasi array dari array kata yang udah di split
  // // console.log(lokasiPerulanganTerbesar)
  // if(lokasiPerulanganTerbesar !== 0){
  //   return pisahKata[lokasiPerulanganTerbesar];
  // }else{
  //   return -1;
  // }
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
// console.log(hitungHuruf('I am a passionate developer')); // passionate
// console.log(hitungHuruf('aku adalah anak gembala')); // adalah
// console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
// console.log(hitungHuruf('mengayuh perahu di danau')); // danau