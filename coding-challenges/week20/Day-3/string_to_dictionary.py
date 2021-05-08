name_string = input("Enter a string : ")
dict={}

for i in name_string:
    dict.update({i:name_string.count(i)})
print(dict)
