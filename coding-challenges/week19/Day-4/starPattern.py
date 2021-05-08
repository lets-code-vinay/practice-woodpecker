n = int(input("Enter a number"))

for i in range(1, n//2+2):
    print("* "*((n//2+1)-i), "  "*(2*i-1), " *"*((n//2+1)-i), end="")
    print(" "*(2*i-1))
    
for i in range(n//2, 0, -1):
    print("* "*((n//2+1)-i), "  "*(2*i-1), " *"*((n//2+1)-i), end="")
    print(" "*(2*i-1))

# for i in range(1, n//2+2):
#      print(" "*((n//2+1)-i), end="")
#      print("*"*(2*i-1))

# for i in range(n//2, 0, -1):
#     print(" "*((n//2+1)-i), end="")
#     print("*"*(2*i-1))
