class Dog() :
    def __init__(self,name,age,color='#fff'):
        self.name = name
        self.age = age
        self.color = color
    def sit(self):
        print(self.name.title() + "is now sitting")

    def roll_over(self):
        print(self.name.title() + "is now rollovering")

dog = Dog('tezt', 20)
cat = Dog('cat', 3)
dog.sit()
dog.color = 'red'
print(dog.color)

print(cat.color)

