'''
Take inputs of 5 marks from the users and print the average of those 5 marks and allot them a grade according to the following scheme:
A >90

90 >= B >80

80 >= C >60

60 >= D >40

E >40
'''
print("Enter 5 numbers")
sub1 = int(input("Enter the marks of first subject:"))
sub2 = int(input("Enter the marks of Second subject:"))
sub3 = int(input("Enter the marks of third subject:"))
sub4 = int(input("Enter the marks of Fourth subject:"))
sub5 = int(input("Enter the marks of fifth subject:"))
avg = (sub1+sub2+sub3+sub4+sub5)/5
#print("The Average of entered numbers are",(a +b+ c +d)/4)
print("The average is ", avg)

if (avg > 90):
    print("The grade is A")
elif  (avg >= 90 and avg >80):
    print("The average is B")
elif (avg >= 80 and avg > 60):
    print("The average is C")
elif (avg >= 60 and avg > 40):
    print("The average is D")
elif (avg > 40):
    print("The average is E")
else:
    print("The Average is F")

'''
A >90

90 >= B >80

80 >= C >60

60 >= D >40

E >40
'''