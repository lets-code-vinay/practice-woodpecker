# d1 = dict(a = 100, b = 200, c = 300)
# d2 = dict(a =300, b = 200, d = 400)
# d2["a"] = d1["a"] + d2["a"]
# d2["b"] = d1["b"] + d2["b"]
# d2["c"] = d1["c"] 


# print(d2)

from collections import Counter
d1 = {'a': 100, 'b': 200, 'c': 300}
d2 = {'a': 300, 'b': 200, 'd': 400}
d = Counter(d1) + Counter(d2)
print(d)
