const assert = require('assert');


function generateTEvenNumbers(n){
  let limit = 0;
  let num =0;
  let evenNumbers = new Array();
  while(true){

    if(limit > n-1){
      break;
    }
    if(num%2==0){
      evenNumbers.push(num);
      limit++;
    }
    num++;
  }
  return evenNumbers;
}

function greaterThan(a,b){
    return new Promise((resolve,reject)=>{
      if(typeof a != 'number' && typeof b != 'number')
        reject('TypeError: Values must be of Number type');
      else{
        setTimeout(()=>{resolve(a>b)},100);
      }
    })
  
}

// Setup first test using mocha
// Test even number generator for validity

describe('Test for even number generator',function(){
  it('Should  generate numbers that are divisible by 2',function(){
    assert.equal(JSON.stringify(generateTEvenNumbers(6)),JSON.stringify([0,2,4,6,8,10]));
  });

  it('Should have a length of 6',function(){
    assert.equal(generateTEvenNumbers(6).length,6);
  })
})

// Test greaterThan for validity
describe('Test for size of value',function(){
  it('Should return true for 9>6',function(done){
    greaterThan(9,6).then((status)=>{
      assert.equal(status,true);
    }).finally(done);
  })
})