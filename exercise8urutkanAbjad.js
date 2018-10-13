function urutkanAbjad(str) {
    // return str.split('').sort().join('');
}
    // huruf= str
    for( i=0; i<str; i++){
        var depan = str[i]
        console.log(depan)
    }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'