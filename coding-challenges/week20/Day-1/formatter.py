def formatter(n):
  width = len("{0:b}".format(n))
  print(width)

  for i in range(1,n+1):
    print("{0:{w}d} {0:{w}o} {0:{w}X} {0:{w}b}".format  (i,w=width))


(formatter(int(input("Enter a Number : "))))