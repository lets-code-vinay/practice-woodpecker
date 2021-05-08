sum = 0
t = 0
max = 0
rows, cols = (6, 6)
arr = [[int(input("Enter a number... ")) for i in range(cols)] for j in range(rows)]
# for i in range(cols):
#      for j in range(rows):
#         arr = [int(input("Enter a number... "))]
print(arr)

for k in range(rows-2):
    for l in range(cols-2):

        sum = arr[k][l]+arr[k][l+1]+arr[k][l+2]+arr[k+1][l+1] + arr[k+2][l]+arr[k+2][l+1]+arr[k+2][l+2]
        print("SUM = ", sum)
        if(sum > max):
            max = sum
print("Maximum Sum = ", max)
# SUM(A1, B1, C1, B2, A3, B3, C3)
# =SUM(B1, C1, D1, C2, B3, C3, D3)
# SUM(A2, B2, C2, B3, A4, B4, C4)
# =SUM(B2, C2, D2, C3, B4, C4, D4)
