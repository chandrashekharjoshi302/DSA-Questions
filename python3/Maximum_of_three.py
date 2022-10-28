
a,b,c= map(int,input().split())

if a>=c and a>=b:
    print(a)
else:
    if b>=a and b>=c:
        print(b)
    else:
        print(c)