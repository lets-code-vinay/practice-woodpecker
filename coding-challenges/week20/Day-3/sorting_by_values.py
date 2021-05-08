import operator
dict={
    "e":3,
    "b":2,
    "c":1,
    "d":5,
    "a":4
}

print('Original dictionary : ',dict)
sorted_dict = sorted(dict.items(), key=operator.itemgetter(1))
print('Dictionary in ascending order by value : ',sorted_dict)
sorted_dict = sorted(dict.items(), key=operator.itemgetter(1),reverse=True)
print('Dictionary in descending order by value : ',sorted_dict)