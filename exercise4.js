function cariModus(arr) {
    modus = arr;
    //var frekuensi = 0;
    var hasil = 0;
    for( i = 0 ; i < modus.length ; i++ ){
        for(j = 0 ; j < modus.length ; j++){
            console.log([i]);
    //         if(modus[i] === modus[j] && i === j){
    //             hasil = modus [i];
    //         }else if(modus[i] !== modus[j] || i !== j){
    //             hasil = '-1';
    //         }
    //         // if(modus[i] === modus[j] && i !== j){
    //         //    hasil = modus[j];
    //         // }
         }
    } //return hasil; 
}
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1