// Sort data berdasarkan score yang paling besar -> kecil
// kalau ada nilai yang sama, sort berdasarkan huruf pertama di nama.
//  tidak boleh pakai .sort()



let dataArr1 = [                        
  {
    name: 'agus',
    score: 90,
  },
  {
    name: 'agung',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'ahmad',
    score: 74,
  },
  {
    name: 'anas',
    score: 78,
    class: 'wolves'
  }
]

let dataArr2 = [                        
  {
    name: 'alex',
    score: 100,
  },
  {
    name: 'irwin',
    score: 92,
    class: 'wolves'
  },
  {
    name: 'eri',
    score: 92,
  },
  {
    name: 'irsan',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'umar',
    score: 80,
    class: 'tigers'
  }
]


function highestScore (array) {                      
console.log('Banyak data ada ' +array.length);   
let temp1 = [];                                  
let temp2 = [];                                  
for (let i = 0; i < array.length; i++) {         
    for (let j = i; j < array.length; j++) {     
      if (array[j].score > array[i].score) {     
        temp1 = array[j];                        
        array[j] = array[i];                     
        array[i] = temp1;                        
      } else if(array[j].score == array[i].score) {  
        if (array[j].name<array[i].name) {  
            temp2 = array[j];                    
            array[j] = array[i];                 
            array[i] = temp2;                    
        }
      }
    }
}
return array                                      
}



console.log(highestScore(dataArr1));
console.log(highestScore(dataArr2));
