

function checkPrime(n)
{
  let count=0;
  for(let i=1; i<=n; i++)
    {
      if(n%i == 0)
      {
        count++;
      }
    }

  if(count==2)
  {
    return true;
  }
  else
  {
    return false;
  }
}



let arr = [ [1,2,3],
            [4,5,6],
            [7,8,9]
          ];

let rows = arr.length;
let cols = arr[0].length;

let sum_prime = 0;
let sum_composite = 0;

for(let father=0;father<rows; father++)
  {
    for(let son=0; son<cols; son++)
      {
        let value = arr[father][son];

        if(value==1){
          continue;
        }
        let prime = checkPrime(value)

        if(prime==true)
        {
          sum_prime += value;
        }
        else{
          sum_composite += value;
        }
      }
  }

console.log(Math.abs(sum_prime-sum_composite));