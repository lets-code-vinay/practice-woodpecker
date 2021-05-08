seqList = []
s0 = []
s1 = []
N = 2
lastAnswer = 0

list = [[1, 0, 5],
        [1, 1, 7],
        [1, 0, 3],
        [2, 1, 0],
        [2, 1, 1]]

# print(list[0][2])
for i in list:
    for j in range(0, 3):
        # print(i[j], end="")
        if i[0] == 1:
            print(i[j], "Query One Applicable...")
            index = ((i[j] ^ lastAnswer)% N)
            if(index == 0):
              s0.append(i[2])
              print("S0 = ", s0)
            else:
                s1.insert(index, i[2])
                print("S1 = ", s1)

        else:
            print(i[j], "Query Two Applicable...")
            index = ((i[j] ^ lastAnswer) % N)
            s1[index] = i[2]
            print("S1 = ", s1)
            lastAnswer = i[2]%len([s1])
            print("lastAnswer = ", lastAnswer)
