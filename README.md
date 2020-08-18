## HarvardX CS50W: Web Programming with Python and JavaScript



### Final project(Capstone)

My final project is a single-page movie review website. Users are able to access millions of movies through the use of the [themoviedb](https://www.themoviedb.org/) API.They can view popular movies,search for movies by title names,save movies to favourites,post review to  movies,read reviews from moviedb and watch movie trailers and teasers.
The project was built using Django as a backend framework and JavaScript as a frontend programming language. The movie lists and details are from [themoviedb](https://www.themoviedb.org/) while the saved movies in favourites are saved in database (SQLite by default).
Additionally,using javascript,I built a snake game in the website ehere users can compete on who would be top of the scoreboard.The highscores are saved in the SQLite database.

All webpages of the project are mobile-responsive.

#### Files and directories
  - `movies` - main application directory.
    - `static/movies` contains all static content.
        - `movies.js` - this script run in every template because it is included in base template. 
        - `styles.css` - contains styles used in the website
    - `templates/movies` contains all application templates.
        - `layout.html` -  All other tempalates extend it.
        - `login.html` - this template shows the login form for users.
        - `register.html` - this template shows the registration form for users.
        - `index.html` - This is the home template that contains all the data for the user.
    - `admin.py` - here I added some admin classes and re-registered User model.
    - `models.py` contains four models I used in the project. `UserExtended` model extends the standard User model, `Movie` model is for storing favourite movies,`Review` model is for storing reviews entered by the user  and `Leaderboard` represents highscores obtained by the userswhen playing the snake game.
    - `urls.py` - all application URLs.
    - `views.py` respectively, contains all application views.
  - `finalproject` - project directory.

## APIS
I utilized a number of APIs in the implementation of my single-page project.These APIs enable the user:

* View Popular movies details on the home page
* load more videos by clicking on the 'load' button on the bottom of the screen
* Search for desired movie using keywords.Possible resuls to the querry are displayed for the user to choose the desired one
* Access individual movie details by clicking on the desired one
* View reviews from users as well as those from [themoviedb](https://www.themoviedb.org/) website
* Post reviews if the user is signedin
* Access simalar movies to the one selected
* View movie trailers for the movies selected
* Allows loggedin users to save movies to their favourites and also remove movies from favourites.
* Allows loggedin users to view movies on their favourites list.
* Get latest COVID19 stats globally and also search for stats for a particular country.
* Save highscores from the snake game and display the user scoreboard

The APIs include:

# GET /movies/covid/${country}
I used this API to obtain latest covid19 stats of countries entered in the search bar in the footer.
```
        fetch(`/movies/covid/${country}`)
              .then(response => response.json())
              .then(results => {
                  console.log(results)
              })
```                                                
# GET /movie/{movie_id}
This was used to get the primary information about a movie

   fetch("https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US")
          .then(response => response.json())
          .then(result => {
           console.log(result)
          })
# GET /search/movie
This wis used in searching of movies by entering of keywords
```
   fetch(`https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=${search}&page=1&include_adult=false`)
          .then(response => response.json())
          .then(result => {
           console.log(result)
          })
      
```



# GET /movies/fav/favourites
This was used to get movies tht a user has saved to favourites
```
fetch(`/movies/fav/favourites`)
          .then(response => response.json())
          .then(result => {
           console.log(result)
          })
```
   
        

# POST /movies/review/${movieid}
This was used in saving reviews for a particular movie using the movieid
```
    fetch(`/movies/review/${movieid}`, {
            method: 'POST',
            body: JSON.stringify({
                        rating: rating,             
                        body: review
                    })
                  })
                  .then(response => response.json())
                  .then(result => {
                      console.log(result);
                  })
```

# GET /movie/{movie_id}/reviews
This was used to get reviews from the  moviedb website on a particular movie
```
fetch(`https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=<<api_key>>&language=en-US&page=1`)
  .then(response => response.json())
  .then(result => {
      console.log(result)
  })
```

# GET /movie/popular
This was used to get a list of currently popular movies
```
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`)
  .then(response => response.json())
  .then(result => {
      console.log(result)
  })
```


# GET /movies/all/all
This was used in saving movies to favourites through storing of the movied id
```
 fetch(`/movies/all/all`, {
                      method: 'POST',
                      body: JSON.stringify({
                                                    
                                  body: movieid
                              })
                            })
                            .then(response => response.json())
                            .then(result => {
                                console.log(result.message);
                            })
```

# GET /movie/{movie_id}/videos
This was used to obtain movie trailers and teasers for each movie
```
fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=<<api_key>>&language=en-US`)
  .then(response => response.json())
  .then(result => {
      console.log(result)
  })
```

# GET /movie/{movie_id}/similar
Get a list of similar movies
```
fetch(`https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1`)
  .then(response => response.json())
  .then(result => {
      console.log(result)
  })

```


