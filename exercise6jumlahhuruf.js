function hitungHuruf(kata) {
  // console.log('memisah kalimat dengan spasi')
var splitKalimat = kata.split(' ');
  var tempKata = 0;
  var mecahkata = '';
  
  for( var i = 0 ; i < splitKalimat.length ; i ++ ) {
    mecahkata = splitKalimat [i];
    var huruf = 0;
    for( var j = 0 ; j < splitKalimat[i].length ; j++ ) {
      var arrHuruf = mecahkata[j];
      for( var k = 0; k < mecahkata.length ; k++ ) { 
        // console.log('proses looping dan condition untuk memilah huruf');
        if(( j !== k ) && ( arrHuruf === mecahkata [k] )) { 
          //menentukan jumlah huruf yang sama
          huruf ++;
        //   console.log(huruf);
        }
      }
    }
    if( huruf > tempKata ) { 
      //menentukan kata pertama yang diambil dari jumlah huruf yang sama
      tempKata = huruf;
      splitKalimat = mecahkata;
    return mecahkata;
    }
  }
}
// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau