
from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),

    #api routes
    path("movies/covid",views.covid,name="covid"),
    path("movies/covid/<str:country>",views.country,name="country"),
    path("movies/all/all",views.movies,name="movies"),
    path("movies/all/<int:movie_id>",views.movie,name="movie"),
    path("movies/fav/favourites",views.favourites,name="favourites"),
    path("movies/review/<int:movie_id>",views.post_review,name="review"),
    path("movies/allreview/<int:movie_id>",views.reviews,name="reviews"),
    path("Leaderboard/points", views.leaderboard, name="leaderboard"),
    path("Leaderboard/points/post", views.post_points, name="points"),




]
