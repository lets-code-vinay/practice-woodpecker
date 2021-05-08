 
import string
alpha = string.ascii_lowercase

n = int(input("Enter a number please... "))
L = []
M = []
N = []
O = []
for i in range(n):
    s = "-".join(alpha[i:n])
    print('\n', s, end= "")
    M.append(s[::-1]+s[1:])
    N.append(s[1:].center(4*n-3, "-"))
    O.append(s[::-1].center(4*n-3, "-"))
    L.append((s[::-1]+s[1:]).center(4*n-3, "-"))
print('\n'.join(M[:0:-1]+M))
print('\n'.join(N[:0:-1]+N))
print('\n'.join(O[:0:-1]+O))
print('\n'.join(L[:0:-1]+L))

# import string
# alpha = string.ascii_lowercase

# n = int(input("Enter a number please... "))
# L = []
# for i in range(n):
#     s = "-".join(alpha[i:n])
#     L.append((s[::-1]+s[1:]).center(4*n-3, "-"))
# print('\n'.join(L[:0:-1]+L))
