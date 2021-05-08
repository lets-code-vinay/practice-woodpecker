s = input("Enter a string in CAPS : ")

vowels = 'AEIOU'
kevsc = 0
stusc = 0
for i in range(len(s)):
  if s[i] in vowels:
     kevsc += (len(s) - i)
  else:
    stusc += (len(s) - i)

if kevsc > stusc:
  print (" Kevin  = ", kevsc,"\n", "Stuart = ", stusc,"\n", "winner is Kevin")
elif kevsc < stusc:
  print (" Kevin  = ", kevsc,"\n", "Stuart = ", stusc,"\n", "winner is Stuart")
else:
  print ("Kevin  = ", kevsc,"\n","Stuart = ", stusc,"\n", "Draw")