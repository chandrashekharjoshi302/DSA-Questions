N=int(input())
import math 
if(N==0):
    print("-1")
elif(N<=32):
    print(math.floor(32/N))
else:
    print("Too Low")