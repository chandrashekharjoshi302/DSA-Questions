

let arr = [10, 30, 5, 2, 5];

let min_pad = Infinity;
let index=-1;

for(let father=0; father<arr.length; father++)
{
  let sum = 0;
  for(let son=0; son<arr.length; son++)
    {
      if(father == son)
      {
        continue;
      }

      sum = sum + arr[son];
    }

  if(sum%7 == 0)
  {
    if(min_pad > arr[father])
    {
      min_pad = arr[father];
      index = father;
    }
  }
  
}

console.log(index);

