from django.contrib import admin
from .models import User,Movie,Review,Leaderboard
# Register your models here.
admin.site.register(User)
admin.site.register(Movie)
admin.site.register(Review)
admin.site.register(Leaderboard)