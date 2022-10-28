n=int(input())
for i in range(1,n+1):
    if (i%2==0):
        for j in range(n):
            print("*", end="")
        print()
    else:
        for z in range(n):
            print("_",end="")
        print()