'''
Write a Python program to convert temperatures 
to and from celsius, fahrenheit.
 Formula : c/5 = f-32/9 
 [ where c = temperature in celsius and f = temperature in fahrenheit ]
 expected Output : 60°C is 140 in Fahrenheit 45°F is 7 in Celsius

F= 9/5 * c + 32
'''

print('What do you want to convert C-F or F-C')
print("press C for Celcius to Farenhite")
print("Press F for farenhite to celcius")

inp = input()
if inp == 'c' or 'C':
  print("Enter the temprature in degree Calcius")
  cel = int(input())
#BEDMAS
  far = 9/5 * cel +32

  print("The temprature of ",cel,"deg is ", far)

elif inp == 'f' or 'F':
  print("Enter the temprature in degree farenhite")
  far = int(input())

  cel = 5/9 * (far -32)

  print("The temprature of ",far,"deg is ", cel)
else:
  print ("Kindly choose only 'c' and 'f'")