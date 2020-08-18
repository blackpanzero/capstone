from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass

class Movie(models.Model):
    movie_id = models.IntegerField()
    user = models.ForeignKey('User', on_delete=models.CASCADE)

    def serialize(self):
        return {
          
            "movie_id": self.movie_id,
            "user":self.user.username,
   
        }
        
class Review(models.Model):
    movie_id = models.IntegerField()
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    review=models.CharField(max_length=255)
    rating = models.IntegerField(default=0)

    def serialize(self):
        return {
          
            "movie_id": self.movie_id,
            "user":self.user.username,
            "review":self.review,
            "rating":self.rating
   
        }

class Leaderboard(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    score=models.IntegerField(default=0)

    def serialize(self):
        return {
          
            "user": self.user.username,
            "score":self.score,
      
        }