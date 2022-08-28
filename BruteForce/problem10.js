

let x = 17;

let factor = 0;

let p = Math.sqrt(x);

for(let i=1; i<=p; i++)
{
  if(x%i == 0)
  {
    factor++;
  }
}

if(factor==1)
{
  console.log("prime");
}
else
{
  console.log("not prime");
}
