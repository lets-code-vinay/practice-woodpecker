import math


class Point(object):

    """Represent a point on a 3d cartesian coordinate system."""

    def __init__(self, x, y, z):
        self.x = float(x)
        self.y = float(y)
        self.z = float(z)

    def cross_product(self, other):
        return Point(
            self.y * other.z - self.z * other.y,
            self.z * other.x - self.x * other.z,
            self.x * other.y - self.y * other.x)

    def dot_product(self, other):
        return (self.x * other.x) + (self.y * other.y) + (self.z * other.z)

    def __abs__(self):
        return math.sqrt(self.x ** 2 + self.y ** 2 + self.z ** 2)

    def __str__(self):
        return '%f, %f, %f' % (self.x, self.y, self.z)

    def __sub__(self, other):
        return Point(
            self.x - other.x,
            self.y - other.y,
            self.z - other.z)


a = Point(*map(float, input().split()))
b = Point(*map(float, input().split()))
c = Point(*map(float, input().split()))
d = Point(*map(float, input().split()))

x = (b - a).cross_product(c - b)
y = (c - b).cross_product(d - c)

cos = x.dot_product(y) / (abs(x) * abs(y))
print('%.2f' % math.degrees(math.acos(cos)))
