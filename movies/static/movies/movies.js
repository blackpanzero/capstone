
function dateConvert(date){
  let dat=new Date(date)
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var month=months[dat.getMonth()]
  var year=dat.getFullYear()
  var date=dat.getDate()
  var result= `${month} ${date},${year}`
  return result
 }

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
  
  function timeConvert(n) {
      var num = n;
      var hours = (num / 60);
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      return rhours + " hour(s) and " + rminutes + " minute(s).";
      }
  
      function thousands_separators(num)
    {
      var num_parts = num.toString().split(".");
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return num_parts.join(".");
    }
  
  

  
  
  
          document.addEventListener("DOMContentLoaded",()=>{
            document.querySelector('#game_view').style.display="none"
              
            if (!localStorage.getItem('status'))
            localStorage.setItem('status', 'offline');

            if ($('#username').length > 0) {
              localStorage.setItem('status', 'online');
                 // Exists.
            }
            else{
              localStorage.setItem('status', 'offline');
            }

            console.log(localStorage.getItem('status'))


  
            document.querySelector('#alert').style.display = 'none';
  
          fetch('/movies/covid')
          .then(response => response.json())
          .then(posts => {
            
              console.log(posts.results)
              document.querySelector('.country_entered').innerHTML=posts.results.location;
              document.querySelector('.cases').innerHTML=posts.results.confirmed;
              document.querySelector('.deaths').innerHTML=posts.results.deaths;
              document.querySelector('.recovered').innerHTML=posts.results.recovered;
          })
  
          document.querySelector('#covid_search').onsubmit=()=>{
              let country=document.querySelector('#country').value
              console.log(country)
              fetch(`/movies/covid/${country}`)
              .then(response => response.json())
              .then(results => {
                  console.log(results)
                  document.querySelector('.country_entered').innerHTML=results.results.location;
                  document.querySelector('.cases').innerHTML=results.results.confirmed;
                  document.querySelector('.deaths').innerHTML=results.results.deaths;
                  document.querySelector('.recovered').innerHTML=results.results.recovered;
                  
               })
               document.querySelector('#country').value=""
               return false;
  
          }
  
    let l=1;
  
          document.querySelector("#home").onclick=()=>{
              location.reload();
          }
  
  
          page("https://api.themoviedb.org/3/discover/movie?api_key=6cb00cf7384ce440e05dcc537cc3b109&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=",1);
    
  
  function page(link,page_no){
              document.querySelector('#user_review').style.display = "none";
              document.querySelector('#review-view').style.display = "none";
              document.querySelector('#review-heading').innerHTML=""



              var background=[]
              
             

        
        
       
          
       


  
  
    document.body.style.backgroundSize="100%"
    document.querySelector(".search_div").style.backgroundColor="rgb(32, 15, 15)"
           
   
      document.querySelector('.search').onsubmit=()=>{
              const search=document.querySelector('.search2').value
              document.querySelector('title').innerHTML=`search | ${search}`
           
              document.querySelector('.search2').value=''
              document.querySelector('#search-view').innerHTML="" ;
              page(`https://api.themoviedb.org/3/search/movie?api_key=6cb00cf7384ce440e05dcc537cc3b109&language=en-US&query=${search}&page=1&include_adult=false`)
            
              document.querySelector('#search-heading').innerHTML=`search result for '${search}'`
        
              return false
          }
       
        
  
         

          document.querySelector('#load').onclick=()=>{  

      
                 
          l++;  
        

          page(`https://api.themoviedb.org/3/discover/movie?api_key=6cb00cf7384ce440e05dcc537cc3b109&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=`,l)
       
     
        }
  
  
              
        
  
          fetch(`${link}${page_no}`)
          .then(response => response.json())
          .then(posts => {
           
              const li=document.createElement('li');
             
              res=posts.results

            console.log(posts.results)
            if(res.length===0){
              
             
              document.querySelector('#search-heading').innerHTML=`<h2 style="color:black;text-align:center;">Sorry no results found for your querry</h2>` ;
              document.querySelector('#emails-view').style.display="none"
              document.querySelector('#load').style.display="none"
            }
          
          for(i in res){

            
            background.push(res[i].backdrop_path)
  
      
            let div = document.createElement('div');
            let div1=document.createElement('div');
            let div2=document.createElement('div');
            let div3=document.createElement('img');
            let div4=document.createElement('div');
            let div5=document.createElement('div');

           
    
  
            let br = document.createElement('br')
            let a=document.createElement('div')
           
            const movie_id=res[i].id
        
          
  
          div4.setAttribute("class","polaroid")
          div5.setAttribute("class","divcontainer")

  
            a.setAttribute("class",`col-lg-3 col-md-6 col-sm-12 pointer movie${movie_id} cont `)
            a.setAttribute("cursor","pointer")
          
            
            div.setAttribute("class","dropdown-divider")
            div.setAttribute("id","dropdown-divider")
            if(res[i].poster_path){
              div3.setAttribute("src",`https://image.tmdb.org/t/p/original${res[i].poster_path}`)
              div3.setAttribute("class","image")
  
            }
            else{
             
              div3.setAttribute("src",`https://www.socabelec.co.ke/wp-content/uploads/no-photo-13.jpg`)
              div3.setAttribute("class","noimage")
  
            }
          
            
           
            
  
            
  
  
            div1.innerHTML=`<strong>${res[i].title}</strong>`
            div2.innerHTML=`<p style="color:grey;">${dateConvert(res[i].release_date)}</p>`

          

           
            div5.innerHTML=div1.outerHTML+div2.outerHTML 
            div4.innerHTML=div3.outerHTML + br.outerHTML+div5.outerHTML+ br.outerHTML;
            
         
            
            a.innerHTML+=div4.outerHTML
          
  
            if (link!=="https://api.themoviedb.org/3/discover/movie?api_key=6cb00cf7384ce440e05dcc537cc3b109&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=")
            
              {
                
                  document.querySelector('#emails-view').innerHTML="" ;
                  document.querySelector('#search-view').append(a) ;
                  document.querySelector('#search-view').append(div) ;
                  document.querySelector('#load').setAttribute("style","display:none")
                  document.querySelector('form').setAttribute("style","display:none")
                
              }
  
          else{
               
              document.querySelector('#emails-view').append(a) ;
            document.querySelector('#emails-view').append(div) ;
  
  
          }
          
  
  
  
          //favourites
       
          if(localStorage.getItem('status')==="online"){  
          document.querySelector('#favourites_list').onclick=()=>{
            document.querySelector('#user_review_entered').innerHTML=""
            document.querySelector('#video').style.display="none"
            document.querySelector('title').innerHTML=`Movie Zone|favourites`
            document.querySelector('#search-heading').innerHTML="" ;
            document.querySelector('#game_view').style.display="none"
            document.querySelector('.search_div').style.display="block";
            document.querySelector('footer').style.display="block";
            document.querySelector('#review-view').innerHTML = "";
            document.querySelector('#favourites_list').style.color="white"
            document.querySelector('#home').style.color="grey"
            document.querySelector('.gamenav').style.color="grey"
            history.pushState({favourite: "favourites"}, "", `favourites`);
            document.body.style.backgroundImage="none"
            document.body.style.backgroundColor="white"
            document.querySelector('#review-heading').innerHTML=""

            document.querySelector('#favourites-view').innerHTML=""
  
            document.querySelector('#user_review').style.display = "none";
           
            document.querySelector('#review-view').style.display = "none";
            
            document.querySelector('.form-review').style.display="none";

            document.querySelector('#movie_heading').innerHTML='Favourites'
            document.querySelector('#movie_par').innerHTML='Save the movies you love and view them here '
            document.querySelector(".search_div").style.backgroundImage = `url('https://image.tmdb.org/t/p/original/nPg1pbYuvnfPAfq9p4TC8bM8BIM.jpg')`;
            document.querySelector(".search_div").style.padding="120px"
            document.querySelector('#load').setAttribute("style","display:none")
            document.querySelector('#emails-view').innerHTML="" ;
            document.querySelector('#search_form').innerHTML=''
            document.querySelector('#search-view').innerHTML="" ;
            document.querySelector('#load').style.display="none" ;
          
  
            fetch(`/movies/fav/favourites`)
          .then(response => response.json())
          .then(posts => {
            if(posts.length===0){
              console.log("favourites empty")
             
             
              
              document.querySelector('#search-heading').innerHTML=`<h2 class="center-text" style="color: black;">You have no favourites yet</h2>` ;
            }

              
            console.log(posts)
            for(i in posts){
            
              const movieid=posts[i].movie_id
             
  
            fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=6cb00cf7384ce440e05dcc537cc3b109&language=en-US`)
          .then(response => response.json())
          .then(posts => {
           
  
            let div = document.createElement('div');
            let div1=document.createElement('div');
            let div2=document.createElement('div');
            let div3=document.createElement('img');
            let div4=document.createElement('div')
            let div5=document.createElement('div')
    
  
            let br = document.createElement('br')
            let a=document.createElement('div')
         
            console.log("what")
          
  
          
  
            a.setAttribute("class",`col-lg-3 col-md-6 col-sm-12 pointer movie${movieid}`)
            a.setAttribute("cursor","pointer")
          
            
            div.setAttribute("class","dropdown-divider")
            div.setAttribute("id","dropdown-divider")
            div4.setAttribute("class","divcontainer")
            div5.setAttribute("class","polaroid")
            if(posts.poster_path){
              div3.setAttribute("src",`https://image.tmdb.org/t/p/original${posts.poster_path}`)
              div3.setAttribute("class","image")
  
            }
            else{
             
              div3.setAttribute("src",`https://www.socabelec.co.ke/wp-content/uploads/no-photo-13.jpg`)
              div3.setAttribute("class","noimage")
  
            }
          
            
           
            
  
            
  
  
            div1.innerHTML=`<strong>${posts.title}</strong>`
            div2.innerHTML=`${posts.release_date}`
            div4.innerHTML=div1.outerHTML+div2.outerHTML
           
  
  
            
         
            div5.innerHTML=div3.outerHTML + br.outerHTML+div4.outerHTML + br.outerHTML
          
            a.innerHTML+=div5.outerHTML
          
                 
                  document.querySelector('#favourites-view').append(a) ;
                  document.querySelector('#favourites-view').append(div) ;
              
                
                
              
  
                  document.querySelector(`.movie${movieid}`).onclick=()=>{
                 
                    window.scrollTo(0, 0); 
                    console.log("clicked")
                    history.pushState({movieid: movieid}, "", `${movieid}`);
                    

                    favourite()
  
                  }
  
                  function favourite(){
                    
                   
                
                    document.querySelector('#user_review-heading').innerHTML=`User Reviews <span data-toggle="tooltip" data-placement="top" title="write review"><i class="fa fa-edit"></i></span>`
          
                    document.querySelector('.fa-edit').onclick=()=>{
                      console.log("clicked")
           
                
                        document.querySelector('.form-review').style.display="block";
                        
                 
        
              
                      let rev= document.querySelector('.form-review')
                      rev.scrollIntoView()
        
                    
        
                    }
  
                 
                    document.querySelector('.search_div').style.display = "none";
                    
  
                    document.querySelector('#user_review').style.display = "block";
              document.querySelector('#review-view').style.display = "block";



              save_reviews()

              function save_reviews(){
         
              fetch(`movies/allreview/${movieid}`)
              .then(response => response.json())
              .then(posts =>{
                console.log("hbggvgvgtvvcvvfy")
                if(posts.length===0){
                  console.log("no reveiews")
                  document.querySelector('#user_review_entered').innerHTML=`<h4 class="center-text">No user revews yet for this movie.Would you like to write one? </h4>`
                }
              
                for(i in posts){
                
               
              let br=document.createElement('br')
      
               let a=document.createElement('a')
               a.setAttribute("class","list-group-item list-group-item-action flex-column align-items-start")
      
               let div1=document.createElement('div')
               div1.setAttribute("class","d-flex w-100 justify-content-between")
      
               let h6=document.createElement('h6')
               h6.setAttribute("class","mb-1")
               h6.setAttribute("style","color:burlywood")
      
               let p=document.createElement('p')
               p.setAttribute("class","mb-1")
               p.setAttribute("style","color:black")
               
      
               let div2=document.createElement('div')
               div.setAttribute("class","dropdown-divider")
      
               h6.innerHTML=`Review by ${posts[i].user}`
               div1.innerHTML=h6.outerHTML
               let content=`${posts[i].review}`
            
                  
                let stars=document.querySelector(`#star${posts[i].rating}`).innerHTML
              
            
                p.innerHTML=content+br.outerHTML+stars
          
              
               a.innerHTML=div1.outerHTML + p.outerHTML
               
               document.querySelector('#user_review_entered').innerHTML+=a.outerHTML+div2.outerHTML
    
    
          
                }
      
              })
            }
  
  
           
                  
  
  document.querySelector('.form-review').onsubmit=()=>{
    
    var e = document.getElementById("rating");
    var rating = e.options[e.selectedIndex].value;
    let review=document.querySelector('#entered_review').value
  
    fetch(`/movies/review/${movieid}`, {
            method: 'POST',
            body: JSON.stringify({
                        rating: rating,             
                        body: review
                    })
                  })
                  .then(response => response.json())
                  .then(result => {
                      // Print result
                      console.log(result.message);
                      if(result.message==="success"){
                        document.querySelector('.form-review').style.display="none";
                  
                        document.querySelector('#user_review_entered').innerHTML=""
                        save_reviews()
                        let revi= document.querySelector('#user_review_entered')
                        revi.scrollIntoView()
          
                      }
                      else{
            document.querySelector('#message').innerHTML=result.message
            document.querySelector('#alert').style.display = 'block';
            document.querySelector('.form-review').style.display="none";
          }
                  
                   
                 
                    })
                    document.querySelector('#rating').value=""
                    document.querySelector('#entered_review').value=""
                   
                    return false
                 
                
              }
          
            
  
  
  
  fetch(`https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=6cb00cf7384ce440e05dcc537cc3b109&language=en-US&page=1`)
  .then(response => response.json())
  .then(posts => {
  
  for(f in posts.results){
  console.log(posts.results[f])
  
  div.setAttribute("class","list-group")
  
  let a=document.createElement('a')
  a.setAttribute("class","list-group-item list-group-item-action flex-column align-items-start")
  
  let div1=document.createElement('div')
  div1.setAttribute("class","d-flex w-100 justify-content-between")
  
  let h6=document.createElement('h6')
  h6.setAttribute("class","mb-1")
  h6.setAttribute("style","color:burlywood")
  
  let p=document.createElement('p')
  p.setAttribute("class","mb-1")
  p.setAttribute("style","color:black")
  
  let div2=document.createElement('div')
  div.setAttribute("class","dropdown-divider")
  
  h6.innerHTML=`Review by ${posts.results[f].author}`
  div1.innerHTML=h6.outerHTML
  let content=`${posts.results[f].content}`
  let sub_content=content.substring(0, 500)
  let a1=document.createElement('a')
  a1.setAttribute("href",`${posts.results[f].url}`)
  a1.innerHTML="Read more..."
  a1.setAttribute("target","__blank")
  a1.setAttribute("class","list-group-item list-group-item-action flex-column align-items-start")
  p.innerHTML=sub_content +"..." + a1.outerHTML
  a.innerHTML=div1.outerHTML + p.outerHTML
  
  document.querySelector('#review-view').innerHTML+=a.outerHTML+div2.outerHTML
  document.querySelector('#review-heading').innerHTML="Reviews from moviedb"
  
  
  }
  
  })
  
  
             
             
             
              document.querySelector("#rec-heading").innerHTML=""
              document.querySelector("#search-heading").innerHTML=""
            
          
          fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=6cb00cf7384ce440e05dcc537cc3b109&language=en-US`)
          .then(response => response.json())
          .then(posts => {
            console.log(movieid)
           
          console.log(posts)
          const genres=posts.genres
          let gen=[]
          for (g in genres){
           
              gen.push(genres[g].name)
          }
          console.log(gen)
          let div = document.createElement('div');
            let div1=document.createElement('div');
            let div2=document.createElement('div');
            let div3=document.createElement('div');
            let img=document.createElement('img')
            let button=document.createElement('BUTTON')
            let i=document.createElement('i')
    
  
            let br = document.createElement('br')
            let a=document.createElement('div')
        
          
  
          
  
            a.setAttribute("class",`pointer movie${movieid} row`)
          
          
  
           button.setAttribute("class","btn btn-primary")
           button.setAttribute("id","similar")
           button.innerHTML=`Similar to ${posts.title}`
            
            div.setAttribute("class","dropdown-divider")
            div.setAttribute("id","dropdown-divider")
            i.setAttribute("class","fa fa-bookmark")
            i.setAttribute("style","color:white")
         
            
  
  
            if(posts.poster_path){
              img.setAttribute("src",`https://image.tmdb.org/t/p/original${posts.poster_path}`)
  
            }
            else{
             
              img.setAttribute("src",`https://www.socabelec.co.ke/wp-content/uploads/no-photo-13.jpg`)
  
            }
          
            img.setAttribute("class","prof_image ")
            div3.setAttribute("class","col-md-4")
            div3.innerHTML=img.outerHTML;
            div1.setAttribute("class","col-md-4")
            div2.setAttribute("class","col-md-4")
  
  
            div2.innerHTML=`<div class="par"><h2>Overview</h2>`+`${posts.overview}</div>`
  
            console.log(timeConvert(posts.runtime));
  
        
          let date=new Date(posts.release_date)
            
          console.log(date.getFullYear())
  
  
            div1.innerHTML=`<h1>${posts.title}(${date.getFullYear()})${i.outerHTML}</h1>` + br.outerHTML + `<strong>genre</strong>: ${gen}` +br.outerHTML +
            `<strong>budget</strong>:$${thousands_separators(posts.budget) }` + br.outerHTML +`<strong>Revenue</strong>:$${thousands_separators(posts.revenue) }`+ br.outerHTML+ `<strong>Duration</strong>: ${timeConvert(posts.runtime)}`+
            br.outerHTML+button.outerHTML+br.outerHTML+br.outerHTML  + `<a href="#video"<button class="btn btn-outline-primary" style="font-size:18px" id="video_button"><i class="fa fa-play"></i>Play Trailer </button>`
  
            document.querySelector('title').innerHTML=`${posts.title}`
  
            
  
            let backdrop=`https://image.tmdb.org/t/p/original${posts.backdrop_path}`
  
      
            document.body.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${posts.backdrop_path}')`;
            document.body.style.color="white"
            document.body.style.backgroundSize="100%"
            document.body.style.backgroundColor="rgb(32, 15, 15)"
           
         
           
  
  
            
         
            a.innerHTML+=div3.outerHTML + br.outerHTML;
            a.innerHTML+=div1.outerHTML  ;
            a.innerHTML+=div2.outerHTML;
  
          document.querySelector('#load').setAttribute("style","display:none")
        
  
       
       
     
    
       
              document.querySelector('#favourites-view').innerHTML= a.outerHTML ;
           
  
  
          
          fetch(`/movies/all/${movieid}`)
  
          .then(response => response.json())
          .then(response => {  
            if(response.message==="present"){
              document.querySelector(".fa-bookmark").style.color="red"
  
            }
            else{
              document.querySelector(".fa-bookmark").style.color="white"
  
            } 
          })
  
          document.querySelector(".fa-bookmark").onclick=()=>{
            console.log("clicked")
            fetch(`/movies/all/all`, {
                      method: 'POST',
                      body: JSON.stringify({
                                                    
                                  body: movieid
                              })
                            })
                            .then(response => response.json())
                            .then(result => {
                                // Print result
                                console.log(result.message);
                                  if (result.message==="saved"){
                                    document.querySelector(".fa-bookmark").style.color="red"
                                  }
                          
                              else{
                                document.querySelector(".fa-bookmark").style.color="white"
  
                              }
  
                            });
  
        
          }
    
          document.querySelector('#video_button').onclick=()=>{
            fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=6cb00cf7384ce440e05dcc537cc3b109&language=en-US`)
          .then(response => response.json())
          .then(posts =>{
            console.log(posts.results)
            let post=posts.results
            videos=[]
            for(i in post){
              if(post[i].type==="Trailer"){
             
                videos.push(post[i].key)
  
              }
           
            }
            console.log(videos[0])
            document.querySelector('iframe').setAttribute("src",`https://www.youtube.com/embed/${videos[0]}`)
            document.querySelector('#video').style.display="block"
            
            let vid= document.querySelector('#video')
            vid.scrollIntoView()
  
        
            })
  
          }
  
          document.querySelector('#similar').onclick=()=>{
            document.querySelector('#video').style.display="none"
            document.querySelector('title').innerHTML=`similar to ${posts.title}`
            document.body.style.backgroundImage="none"
            document.body.style.backgroundColor="white"
            window.scrollTo(0, 0); 

              document.querySelector('#rec-heading').innerHTML=`Similar to '${posts.title}'`
             
              document.querySelector('#user_review').setAttribute("display","none")
              document.querySelector('#favourites-view').innerHTML=""
              document.querySelector('#review-heading').innerHTML=""
             
             
              page(`https://api.themoviedb.org/3/movie/${movieid}/similar?api_key=6cb00cf7384ce440e05dcc537cc3b109&language=en-US&page=`,1)
             
  
          }
                    
             
              
         
  
          
          })
  
                  }
  
  
          })
  
  
    
            }
            
            
          
          })
           
  
          }
        }
  
          
           
          document.querySelector(`.movie${movie_id}`).onclick=()=>{
            
            window.scrollTo(0, 0); 
            history.pushState({movie_id: movie_id}, "", `${movie_id}`);
            movie()
          }
  
  
  
            function movie(){
           
              if(localStorage.getItem('status')==="online"){   
              document.querySelector('#user_review-heading').innerHTML=`User Reviews <span data-toggle="tooltip" data-placement="top" title="write review"><i class="fa fa-edit"></i></span>`
             
              document.querySelector('.fa-edit').onclick=()=>{
           
                if(document.querySelector('.form-review').style.display="none"){
                  document.querySelector('.form-review').style.display="block";
                  
           
  
                }
                else{
                  document.querySelector('.form-review').style.display="none"
              
  
                }
                let rev= document.querySelector('.form-review')
                rev.scrollIntoView()
  
              
  
              }
            }
            else{
              document.querySelector('#user_review-heading').innerHTML=`User Reviews`
              
            }
              document.querySelector('#user_review').style.display = "block";
              document.querySelector('#review-view').style.display = "block";
  
           
  
  
            saved_reviews()

            function saved_reviews(){
            fetch(`movies/allreview/${movie_id}`)
          .then(response => response.json())
          .then(posts =>{
               if(posts.length===0){
         
            document.querySelector('#user_review_entered').innerHTML=`<h4 class="center-text">No user revews yet for this movie.Would you like to write one? </h4>`
          }
        
            for(i in posts){
              console.log(posts[i].user)
             
           
          let br=document.createElement('br')
  
           let a=document.createElement('a')
           a.setAttribute("class","list-group-item list-group-item-action flex-column align-items-start")
  
           let div1=document.createElement('div')
           div1.setAttribute("class","d-flex w-100 justify-content-between")
  
           let h6=document.createElement('h6')
           h6.setAttribute("class","mb-1")
           h6.setAttribute("style","color:burlywood")
  
           let p=document.createElement('p')
           p.setAttribute("class","mb-1")
           p.setAttribute("style","color:black")
           
  
           let div2=document.createElement('div')
           div.setAttribute("class","dropdown-divider")
  
           h6.innerHTML=`Review by ${posts[i].user}`
           div1.innerHTML=h6.outerHTML
           let content=`${posts[i].review}`

          
       
          let stars=document.querySelector(`#star${posts[i].rating}`).innerHTML
         
      
           p.innerHTML=content+br.outerHTML+stars
           
           a.innerHTML=div1.outerHTML + p.outerHTML
           
           document.querySelector('#user_review_entered').innerHTML+=a.outerHTML+div2.outerHTML



      
            }
  
          })
        }

          document.querySelector('.form-review').onsubmit=()=>{
                
            var e = document.getElementById("rating");
            var rating = e.options[e.selectedIndex].value;
            let review=document.querySelector('#entered_review').value
          
            fetch(`/movies/review/${movie_id}`, {
                    method: 'POST',
                    body: JSON.stringify({
                                rating: rating,             
                                body: review
                            })
                          })
                          .then(response => response.json())
                          .then(result => {
                              // Print result
                              console.log(result.message);
                              if(result.message==="success"){
                                document.querySelector('.form-review').style.display="none";
                          
                                document.querySelector('#user_review_entered').innerHTML=""
                                
                      
                                saved_reviews()
                                let rev= document.querySelector('#user_review_entered')
                                rev.scrollIntoView()
                              }
                              else{
                    document.querySelector('#message').innerHTML=result.message
                    document.querySelector('#alert').style.display = 'block';
                    document.querySelector('.form-review').style.display="none";
                  }
                          
                           
                         
                            })
                            document.querySelector('#rating').value=""
                            document.querySelector('#entered_review').value=""
                           
                            return false
                         
                          
                        }


            
                        
  
  
  
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=6cb00cf7384ce440e05dcc537cc3b109&language=en-US&page=1`)
          .then(response => response.json())
          .then(posts => {
          
            for(f in posts.results){
            
           
              div.setAttribute("class","list-group")
  
              let a=document.createElement('a')
              a.setAttribute("class","list-group-item list-group-item-action flex-column align-items-start")
  
              let div1=document.createElement('div')
              div1.setAttribute("class","d-flex w-100 justify-content-between")
  
              let h6=document.createElement('h6')
              h6.setAttribute("class","mb-1")
              h6.setAttribute("style","color:burlywood")
  
              let p=document.createElement('p')
              p.setAttribute("class","mb-1")
              p.setAttribute("style","color:black")
  
              let div2=document.createElement('div')
              div.setAttribute("class","dropdown-divider")
  
              h6.innerHTML=`Review by ${posts.results[f].author}`
              div1.innerHTML=h6.outerHTML
              let content=`${posts.results[f].content}`
              let sub_content=content.substring(0, 500)
              let a1=document.createElement('a')
              a1.setAttribute("href",`${posts.results[f].url}`)
              a1.innerHTML="Read more..."
              a1.setAttribute("target","__blank")
              a1.setAttribute("class","list-group-item list-group-item-action flex-column align-items-start")
              p.innerHTML=sub_content +"..." + a1.outerHTML
              a.innerHTML=div1.outerHTML + p.outerHTML
              
              document.querySelector('#review-view').innerHTML+=a.outerHTML+div2.outerHTML
              document.querySelector('#review-heading').innerHTML="Reviews from moviedb"

          
  
            }
        
          })
             
             
              document.querySelector("#rec-heading").innerHTML=""
              document.querySelector("#search-heading").innerHTML=""
             
            
            
          
          fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=6cb00cf7384ce440e05dcc537cc3b109&language=en-US`)
          .then(response => response.json())
          .then(posts => {
         
          const genres=posts.genres
          let gen=[]
          for (g in genres){
           
              gen.push(genres[g].name)
          }
          console.log(gen)
          let div = document.createElement('div');
            let div1=document.createElement('div');
            let div2=document.createElement('div');
            let div3=document.createElement('div');
            let img=document.createElement('img')
            let button=document.createElement('BUTTON')
            let i=document.createElement('i')
    
  
            let br = document.createElement('br')
            let a=document.createElement('div')
        
          
  
          
  
            a.setAttribute("class",`pointer movie${movie_id} row`)
          
          
  
           button.setAttribute("class","btn btn-primary")
           button.setAttribute("id","similar")
           button.innerHTML=`Similar to ${posts.title}`
            
            div.setAttribute("class","dropdown-divider")
            div.setAttribute("id","dropdown-divider")
            i.setAttribute("class","fa fa-bookmark")
            i.setAttribute("style","color:white")
         
            
  
  
            if(posts.poster_path){
              img.setAttribute("src",`https://image.tmdb.org/t/p/original${posts.poster_path}`)
  
            }
            else{
             
              img.setAttribute("src",`https://www.socabelec.co.ke/wp-content/uploads/no-photo-13.jpg`)
  
            }
          
            img.setAttribute("class","prof_image ")
            div3.setAttribute("class","col-md-4")
            div3.innerHTML=img.outerHTML;
            div1.setAttribute("class","col-md-4")
            div2.setAttribute("class","col-md-4")
  
  
            div2.innerHTML=`<div class="par"> <h2>Overview</h2>`+`${posts.overview}</div>`
  
            console.log(timeConvert(posts.runtime));
  
        
          let date=new Date(posts.release_date)
            
          console.log(date.getFullYear())
          console.log(posts.budget)

          if(posts.budget===0){
              budget="N/A"  
          }
          else{
            budget=`$${thousands_separators(posts.budget)}`
          }

          if(posts.revenue===0){
            revenue="N/A"
          }
          else{
            revenue=`$${thousands_separators(posts.revenue) }`
          }
  
          if(localStorage.getItem('status')==="online"){  
            div1.innerHTML=`<h1>${posts.title}(${date.getFullYear()})${i.outerHTML}</h1>` + br.outerHTML + `<strong>genre</strong>: ${gen}` +br.outerHTML +
            `<strong>budget</strong>:${budget}` + br.outerHTML +`<strong>Revenue</strong>:${revenue }`+ br.outerHTML+ `<strong>Duration</strong>: ${timeConvert(posts.runtime)}`+
            br.outerHTML+button.outerHTML+br.outerHTML +br.outerHTML + `<a href="#video"<button class="btn btn-outline-primary" style="font-size:18px" id="video_button"><i class="fa fa-play"></i>Play Trailer </button>`
  
          }
          else{
            div1.innerHTML=`<h1>${posts.title}(${date.getFullYear()})</h1>` + br.outerHTML + `<strong>genre</strong>: ${gen}` +br.outerHTML +
            `<strong>budget</strong>:${budget }` + br.outerHTML +`<strong>Revenue</strong>:${revenue }`+ br.outerHTML+ `<strong>Duration</strong>: ${timeConvert(posts.runtime)}`+
            br.outerHTML+button.outerHTML+br.outerHTML +br.outerHTML + `<a href="#video"<button class="btn btn-outline-primary" style="font-size:18px" id="video_button"><i class="fa fa-play"></i>Play Trailer </button>`
  

          }
       
          document.querySelector('title').innerHTML=`${posts.title}`

       
  
            let backdrop=`https://image.tmdb.org/t/p/original${posts.backdrop_path}`
  
      
            document.body.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${posts.backdrop_path}')`;
            document.body.style.color="white"
            document.body.style.backgroundSize="100%"
            document.body.style.backgroundColor="rgb(32, 15, 15)"
           
         
           
  
  
            
         
            a.innerHTML+=div3.outerHTML + br.outerHTML;
            a.innerHTML+=div1.outerHTML  ;
            a.innerHTML+=div2.outerHTML;
  
          document.querySelector('#load').setAttribute("style","display:none")
          document.querySelector('.search_div').setAttribute("style","display:none")
  
       
          if(link===`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=6cb00cf7384ce440e05dcc537cc3b109&language=en-US&page=`){
             
              document.querySelector('#search-view').innerHTML+=a.outerHTML ;            
  
          }
     
           else if (link==="https://api.themoviedb.org/3/discover/movie?api_key=6cb00cf7384ce440e05dcc537cc3b109&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=")
              {
                  
                  document.querySelector('#emails-view').innerHTML= a.outerHTML ;
             
                 
     
              }
  
          else{
              document.querySelector('#search-view').innerHTML= a.outerHTML ;
           
  
  
          }
          if(localStorage.getItem('status')==="online"){  
          fetch(`/movies/all/${movie_id}`)
  
          .then(response => response.json())
          .then(response => {  
            if(response.message==="present"){
              document.querySelector(".fa-bookmark").style.color="red"
  
            }
            else{
              document.querySelector(".fa-bookmark").style.color="white"
  
            } 
          })
        }
        
          if(localStorage.getItem('status')==="online"){  
          document.querySelector(".fa-bookmark").onclick=()=>{
         
            fetch(`/movies/all/all`, {
                      method: 'POST',
                      body: JSON.stringify({
                                                    
                                  body: movie_id
                              })
                            })
                            .then(response => response.json())
                            .then(result => {
                                // Print result
                              
                                  if (result.message==="saved"){
                                    document.querySelector(".fa-bookmark").style.color="red"
                                  }
                          
                              else{
                                document.querySelector(".fa-bookmark").style.color="white"
  
                              }
  
                            });
  
        
          }
        }
  
          document.querySelector('#video_button').onclick=()=>{
            fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=6cb00cf7384ce440e05dcc537cc3b109&language=en-US`)
          .then(response => response.json())
          .then(posts =>{
          
            let post=posts.results
            videos=[]
            for(i in post){
              if(post[i].type==="Trailer"){
             
                videos.push(post[i].key)
  
              }
           
            }
          
            document.querySelector('iframe').setAttribute("src",`https://www.youtube.com/embed/${videos[0]}`)
            document.querySelector('#video').style.display="block"
            
            let vid= document.querySelector('#video')
            vid.scrollIntoView()
  
        
            })
  
          }
    
  
          document.querySelector('#similar').onclick=()=>{
            document.querySelector('#video').style.display="none"
            document.querySelector('title').innerHTML=`similar to ${posts.title}`
            history.pushState({similar:"similar"}, "", `similar/${movie_id}`);
            document.body.style.backgroundImage="none"

            document.body.style.backgroundColor="white"
            window.scrollTo(0, 0); 

              document.querySelector('#rec-heading').innerHTML=`Similar to' ${posts.title}'`
              document.querySelector('#user_review-heading').innerHTML=""
              document.querySelector('#user_review_entered').innerHTML=""
              document.querySelector('#review-view').innerHTML=""
              document.querySelector('#search-view').innerHTML=""
            
       
              page(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=6cb00cf7384ce440e05dcc537cc3b109&language=en-US&page=`,1)
             
  
          }
                    
             
              
         
  
          
          })
            
            }
  
          }
          var randomItem = background[Math.floor(Math.random()*background.length)];
          console.log(randomItem)
          document.querySelector(".search_div").style.backgroundImage = `url('https://image.tmdb.org/t/p/original${randomItem}')`;
         
          })
  
       
      }
        
      document.querySelector('.gamenav').onclick=()=>{
        games()
      }
  
  function games(){

  

  document.querySelector('title').innerHTML=`Movie Zone|Game`
  if(localStorage.getItem('status')==="online"){ 
  document.querySelector('#favourites_list').style.color="grey"
  }
  document.querySelector('#home').style.color="grey"
  document.querySelector('.gamenav').style.color="white"
  game()
}
function game(){

  document.querySelector('#review-view').innerHTML = "";
      
  document.querySelector('#review-heading').innerHTML=""

  document.querySelector('#favourites-view').innerHTML=""
  document.querySelector('#search-view').innerHTML=""
  
  document.querySelector('#user_review').style.display = "none";
           
  document.querySelector('#review-view').style.display = "none";
            
  document.querySelector('.form-review').style.display="none";
  document.querySelector('#emails-view').style.display="none";
  document.querySelector('.search_div').style.display="none";
  document.querySelector('#load').style.display="none";

  $('br').remove();
  
  
  const total_scores=[]
 


  document.querySelector("footer").style.display="none"
  document.body.style.backgroundColor="rgb(31, 10, 10)"
  document.body.style.backgroundImage='url("https://wallpaperset.com/w/full/8/3/5/507901.jpg")'
  document.body.style.color="white"



  document.querySelector('#game_view').style.display="block"

  document.querySelector('canvas').style.border="10px solid white"


  var canvas = document.getElementById('game');
  var context = canvas.getContext('2d');

  
  var grid = 16;
  var count = 0;
  var scores=0;
  const highscore=[];
  
  var snake = {
    x: 160,
    y: 160,
    
    // snake velocity. moves one grid length every frame in either the x or y direction
    dx: grid,
    dy: 0,
    
    // keep track of all grids the snake body occupies
    cells: [],
    
    // length of the snake. grows when eating an apple
    maxCells: 4
  };
  var apple = {
    x: 320,
    y: 320
  };
  
  // get random whole numbers in a specific range
  // @see https://stackoverflow.com/a/1527820/2124254
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  // game loop
  function loop() {
    
    requestAnimationFrame(loop);
  
    // slow game loop to 15 fps instead of 60 (60/15 = 4)
    if (++count < 4) {
      return;
    }
  
    count = 0;
    context.clearRect(0,0,canvas.width,canvas.height);
  
    // move snake by it's velocity
    snake.x += snake.dx;
    snake.y += snake.dy;
  
    // wrap snake position horizontally on edge of screen
    if (snake.x < 0) {
      snake.x = canvas.width - grid;
    }
    else if (snake.x >= canvas.width) {
      snake.x = 0;
    }
    
    // wrap snake position vertically on edge of screen
    if (snake.y < 0) {
      snake.y = canvas.height - grid;
    }
    else if (snake.y >= canvas.height) {
      snake.y = 0;
    }
  
    // keep track of where snake has been. front of the array is always the head
    snake.cells.unshift({x: snake.x, y: snake.y});
  
    // remove cells as we move away from them
    if (snake.cells.length > snake.maxCells) {
      snake.cells.pop();
    }
  
    // draw apple
    context.fillStyle = 'red';
    context.fillRect(apple.x, apple.y, grid-1, grid-1);
  
    // draw snake one cell at a time
    context.fillStyle = 'burlywood';
    snake.cells.forEach(function(cell, index) {
      
      // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
      context.fillRect(cell.x, cell.y, grid-1, grid-1);  
  
      // snake ate apple
      if (cell.x === apple.x && cell.y === apple.y) {
        snake.maxCells++;
        scores++
        
      
  
        // canvas is 400x400 which is 25x25 grids 
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }
      const scr=document.querySelector("#score").innerHTML
  
  
  
      // check collision with all cells after this one (modified bubble sort)
      for (var i = index + 1; i < snake.cells.length; i++) {
        
        // snake occupies same space as a body part. reset game
        if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
          const l=scores
  
         
          highscore.push(l)
          snake.x = 160;
  
          snake.y = 160;
          snake.cells = [];
          snake.maxCells = 4;
          snake.dx = grid;
          snake.dy = 0;
          scores=0
  
          apple.x = getRandomInt(0, 25) * grid;
          apple.y = getRandomInt(0, 25) * grid;
        }
      }
      document.querySelector('#score').innerHTML=`Your score:${scores}`
  
    
   
  
    });
    fetch('/Leaderboard/points')
    .then(response => response.json())
    .then(posts => {
   
      for(i in posts)
      {
        total_scores.push(posts[i].score)
      
      
      
      }
     
      const highestscore=Math.max(...total_scores)
      if(highestscore>0){
        document.querySelector('#highscore').innerHTML=`Highscore:${highestscore}`

      }
     
      
      let highscr=Math.max(...highscore)
      if(highscr>highestscore){
          document.querySelector('#highscore').innerHTML=`Highscore:${highscr}`
          fetch(`/Leaderboard/points/post`, {
            method: 'POST',
            body: JSON.stringify({
               
               
                body: highscr
            })
          })
          .then(response => response.json())
          .then(result => {
              console.log(result)
              
             
          });
          
    
        }
      
      
      
    
  
  
  
  
    })
    
  

  
   
  
  
  }
  fetch('/Leaderboard/points')
  .then(response => response.json())
  .then(posts => {
 
    for(i in posts)
    {
     
    
    
      document.querySelector('.mod').innerHTML+=` <li class="card-header" style="color:black;"> ${posts[i].user} :${posts[i].score}</li>`

    }
  })
  
  
  // listen to keyboard events to move the snake
  
  document.addEventListener('keydown', function(e) {
    // prevent snake from backtracking on itself by checking that it's 
    // not already moving on the same axis (pressing left while moving
    // left won't do anything, and pressing right while moving left
    // shouldn't let you collide with your own body)
    
    // left arrow key
    if (e.which === 37 && snake.dx === 0) {
      snake.dx = -grid;
      snake.dy = 0;
    }
    // up arrow key
    else if (e.which === 38 && snake.dy === 0) {
      snake.dy = -grid;
      snake.dx = 0;
    }
    // right arrow key
    else if (e.which === 39 && snake.dx === 0) {
      snake.dx = grid;
      snake.dy = 0;
    }
    // down arrow key
    else if (e.which === 40 && snake.dy === 0) {
      snake.dy = grid;
      snake.dx = 0;
    }
  });
  
  // start the game
  requestAnimationFrame(loop);



            }
        
  
          })
        



