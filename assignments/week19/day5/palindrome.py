def palindrome_find(n):
  largest_palindrome=0
  for i in range(10**(n-1),(10**n)):
    for j in range(10**(n-1),(10**n)):
      result=str(i*j)
      if(len(result)==n*2):
        first_half=result[0:len(result)//2]
        second_half=result[len(result)//2:len(result)]
        reverse_second_half=second_half[::-1]
        if(first_half==reverse_second_half):
          result=int(result)
          if(largest_palindrome<result):
            largest_palindrome=result

  return(largest_palindrome)
     

print(palindrome_find(int(input("enter a number : "))))