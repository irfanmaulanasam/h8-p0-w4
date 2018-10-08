function ubahHuruf(kata) {
    var result = '';
    var huruf = 'abcdefghijklmnopqrstuvwxyz' ;
    for ( var i = 0; i < kata.length; i++ ) {
        for( var a = 0 ; a < huruf.length; a++){
            if(kata[i] === huruf[a]){
                result += huruf[a+1]
            }
    }
  }return result;
} 
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu