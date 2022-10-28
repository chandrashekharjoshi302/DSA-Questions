a,c,b = map(str,input().split())
x = int(a)
y = int(b)
if c=='+':
    print(x+y)
else:
   if c=='-':
    print(x-y)
   else:
     if c=='*':
      print(x*y)
     else:
      if c=='/':
         print(x//y)