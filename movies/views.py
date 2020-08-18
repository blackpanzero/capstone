from django.shortcuts import render
import requests
import json
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse

from .models import User,Movie,Review,Leaderboard
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse
from django.db.models import Max

# Create your views here.
def index(request):
 
            
    return render(request, "movies/index.html")

def covid(request):
    url = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total"

    querystring = {"country":""}

    headers = {
    'x-rapidapi-host': "covid-19-coronavirus-statistics.p.rapidapi.com",
    'x-rapidapi-key': "c1b6241131msh92c1e282962ca9cp1a7b03jsnb45e8785820a"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)

     
    # Make sure request succeeded
    if response.status_code != 200:
        return JsonResponse({"success": False})

    # Make sure currency is in response
    data = response.json()
    
      
    return JsonResponse({"success": True, "results": data["data"]})


def country(request,country):
    url = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total"

    querystring = {"country":country}

    headers = {
    'x-rapidapi-host': "covid-19-coronavirus-statistics.p.rapidapi.com",
    'x-rapidapi-key': "c1b6241131msh92c1e282962ca9cp1a7b03jsnb45e8785820a"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)

     
    # Make sure request succeeded
    if response.status_code != 200:
        return JsonResponse({"success": False})

    # Make sure currency is in response
    data = response.json()

    return JsonResponse({"success": True, "results": data["data"]})


    
   
@csrf_exempt
@login_required
def movies(request):

    
    # Composing a new email must be via POST
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=400)

    # Check recipient emails
    data = json.loads(request.body)
    #post.content = data.get("body","")
    #post.save()
    movie_id=data.get("body","")
    try:
        mov=Movie.objects.get(user=request.user,movie_id=movie_id)
        mov.delete()
        return JsonResponse({"message": "deleted"}, status=201)
    except Movie.DoesNotExist:   
        movie=Movie(user=request.user,movie_id=movie_id) 
        movie.save()
        return JsonResponse({"message": "saved"}, status=201)


@login_required
def movie(request,movie_id):
    try:
        mov=Movie.objects.get(user=request.user,movie_id=movie_id)
        return JsonResponse({"message": "present"}, status=201)
    except Movie.DoesNotExist:
        return JsonResponse({"message": "absent"}, status=201)

@login_required
def favourites(request):
    try:
        favourites=Movie.objects.filter(user=request.user).all()
     
        return JsonResponse([favourite.serialize() for favourite in favourites], safe=False)
    except Movie.DoesNotExist:
        return JsonResponse({"message": "no favourites"}, status=201)


    
         
   
@csrf_exempt
@login_required
def post_review(request,movie_id):

    
    # Composing a new email must be via POST
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=400)

    # Check recipient emails
    data = json.loads(request.body)
    #post.content = data.get("body","")
    #post.save()
    rating=data.get("rating","") 
    review=data.get("body","")
    try:
        rev=Review.objects.get(user=request.user,movie_id=movie_id)
        return JsonResponse({"message": "You have alredy reviewed this movie"}, status=201)
    except Review.DoesNotExist:   
        new_review=Review(user=request.user,movie_id=movie_id,review=review,rating=rating) 
        new_review.save()
        return JsonResponse({"message": "success"}, status=201)


@csrf_exempt
def reviews(request,movie_id):
    try:
        reviews=Review.objects.filter(movie_id=movie_id).all()
        return JsonResponse([review.serialize() for review in reviews], safe=False)
    except Review.DoesNotExist:
        return JsonResponse({"message": "no reviews"}, status=201)

@csrf_exempt
@login_required
def post_points(request):
    highest=Leaderboard.objects.aggregate(Max('score'))
    
    # Composing a new email must be via POST
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=400)

    # Check recipient emails
    data = json.loads(request.body)
    #post.content = data.get("body","")
  
    points=data.get("body","")
    try:
        highpoints=Leaderboard.objects.get(user=request.user)
        highpoints.score=points
        highpoints.save()
        return JsonResponse({"message": "success"}, status=201)

        
    except Leaderboard.DoesNotExist:   
        new_points=Leaderboard(user=request.user,score=points) 
        new_points.save()
        return JsonResponse({"message": "success"}, status=201)


@csrf_exempt
def leaderboard(request):
    try:
        points=Leaderboard.objects.order_by("-score").all()[:5]
        return JsonResponse([point.serialize() for point in points], safe=False)
    except Leaderboard.DoesNotExist:
        return JsonResponse({"message": "no points"}, status=201)




def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "auctions/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "movies/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "auctions/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "auctions/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "movies/register.html")







 
