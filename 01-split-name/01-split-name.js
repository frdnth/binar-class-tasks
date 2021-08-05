

function intoArr(nama) {                    
  const arr = [];                         
  let theString = '';                     
  for (let i=0; i<nama.length; i++) {        
      if (nama[i] !== " ") {
          theString += nama[i];
      } else {
          arr.push(theString);
          theString = '';
      }
  } 
  if (theString) {
      arr.push(theString);
  }
  return arr
}

console.log(intoArr('Bagas Adi Saputra Hidayat Abdurrahman'));


function konversiNama(namaNama, pilihan) {
  const newArr = intoArr(namaNama);
  console.log(newArr.length)
  let namaString = '';
      if(newArr.length<=1){
          return 'Nama Invalid';
      }
      else {
          switch (pilihan) {
              case 'depan':
                for (let i=0; i<newArr.length; i++) {
                  if (i == newArr.length-1) {
                      namaString += newArr[i][0]+'.';
                  } else {
                      namaString += newArr[i]+' ';
                    }
                  }
               return namaString;
               break;
               case 'belakang':
                 for (let i=0; i<newArr.length; i++) {
                  if (i == 0) {
                      namaString += newArr[i][0]+'. ';
                  } else {
                      namaString += newArr[i]+' ';
                    }
                  }
               return namaString;
               break;
               case 'lengkap':
                   return namaNama;
               default:
                   return 'Pilihan Invalid'
          }
      }
}


console.log(konversiNama('Bagas Adi Saputra Hidayat Abdurrahman','depan'));
console.log(konversiNama('Bagas Adi Saputra Hidayat Abdurrahman','belakang'));
console.log(konversiNama('Bagas Adi Saputra Hidayat Abdurrahman','lengkap'));
console.log(konversiNama('Bagas Adi Saputra Hidayat Abdurrahman','atas'));
console.log(konversiNama('Kenzo','depan'));