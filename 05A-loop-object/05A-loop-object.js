// ubah function convertMe dengan parameter berupa multidimensi Array
// yg berisi firstName, lastName, gender & birth year.

// convertMe akan me return sebuah object yg mempunyai property:
// firstName,
// lastName,
// gender,
// age

// value age di dapatkan, dengan mengurangi tahun saat ini dengan tahun lahir.
// Jika birth year tidak di isi, maka tampilkan 'invalid date'


dataArr = [['Tom', 'Cruise', 'Male', 1962], ['Johnny', 'Deep', 'Male'], ['nobita', 'Male']];

function convertMe(arr) {
    for (let i=0; i<arr.length; i++) {
        let data = {};

        for (let j=0; j<arr[i].length+1; j++) {
            switch (j) {
                case 0:
                    data.firstName = arr [i][j];
                break;
                case 1:
                    if (arr[i][j]!='Male' || arr[i][j]!='Female') {
                        data.lastName = arr [i][j];
                    } else {
                        data.lastName = 'Invalid Last Name';
                    }
                break;
                case 2:
                    if (arr[i][j]=='Male' || arr[i][j]=='Female') {
                    data.gender = arr [i][j];
                    } else {
                        data.lastName = '';
                    }
                break;
                case 3:
                    if (typeof(arr[i][j])=='number') {
                        data.age = (new Date().getFullYear()-arr[i][j]);
                    } else {
                        data.age = 'Invalid Birth Year'
                    }

            }
        } console.log(data);
        
    } 
}

convertMe(dataArr);

// TEST CASES
//convertMe([['Tom', 'Cruise', 'Male', 1962], ['Johnny', 'Deep', 'Male'], ['nobita', 'Male']]);
// 1. Tom Cruise:
// { firstName: 'Tom',
//   lastName: 'Cruise',
//   gender: 'Male',
//   age: 37 }
// 2. Johnny Deep:
// { firstName: 'Johnny',
//   lastName: 'Deep',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
convertMe([]); // ""