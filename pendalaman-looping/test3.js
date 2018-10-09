var name = 'katak makan'
for ( i = 0 ; i < name.length ; i++){
        console.log(name[i]%2 )
}
console.log('kesalahan yang terjadi disini adalah penempatan console log yang mengulang serta penulisan string yang tidak bisa dibagi 2')
console.log('kesalahan kedua kenapa muncul angka 0 ditengah karena didalam javascript spasi sama dengan 0 dalam angka')
console.log('=========')
for ( i = 0; i <= 10 ; i++ ){
    if( i%2 !== 0 ){
        console.log('ganjil');
    }else{
        console.log(i)
    }
}
console.log('looping yang pertama adalah untuk memisahkan antara angka ganjil dan genap dan apabila genap yang keluar maka yang dimunculkan adalah angka dan apabila ganjil maka yang dimunculkan adalah string bervalue ganjil')
console.log('=========')
for ( i = 0; i < name.length ; i++ ){
    if( i%2 !== 0 ){
        console.log(i);
    }else{
        console.log();
    }
}
console.log('looping yang kedua adalah untuk memisahkan antara angka ganjil dan genap dan menampilkan hanya angka ganjilnya saja sedangkan genap dikosongkan')
console.log('=========')
for ( i = 0; i < name.length ; i++ ){
    if( i%2 !== 0 ){
        console.log(name[i]);
    }else{
        console.log('');
    }
}
console.log('looping yang ketiga adalah memunculkan huruf a dalam variabel secara berurutan berdasarkan indeks dengan acuan indeks yang ganjil')
console.log('=========')
var tampung = '';
for ( i = 0; i < 1 ; i++ ){
    for ( j = 0; j < name.length ; j++ ){
        if( j%2 === 0 ){
            tampung = tampung + name[j];
        }
    }console.log(tampung);
}
console.log('looping yang ketiga adalah memunculkan huruf a dalam variabel secara berurutan berdasarkan indeks dengan acuan indeks yang ganjil')
console.log('=========')
var tampung = '';
for ( i = 0; i < 1 ; i++ ){
        if( i%2 === 0 ){
            tampung = tampung + name[i];
        }
}console.log(tampung);
console.log('=========')
var tampung = '';
for ( i = 0; i < name.length ; i++ ){
        if( i%2 === 0 ){
            tampung = tampung + name[i];
        }
}console.log(tampung);
console.log('=========')