

var AllLinks = document.getElementsByClassName("nav-link");

var cat = "general"

callAjax();



for(var i=0;i<AllLinks.length ;i++)
    {
        AllLinks[i].addEventListener("click",function(ev){
            
            
         cat =  ev.target.innerHTML;
           
            callAjax()
            
            
        })
    }




function callAjax()
{ 
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET","https://newsapi.org/v2/top-headlines?country=eg&category="+cat+"&apiKey=1276733642214965bbf911ac6a64941e")

    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status ==200)
            {
                var ouRdataString = this.responseText;
               
                
                var AllPostJson = JSON.parse(ouRdataString)
                
                
                
                var myArrarticles = AllPostJson.articles;
                
                var AllCards=""
                
                for(var i=0;i<myArrarticles.length;i++)
                    {
                        
                        if(myArrarticles[i].urlToImage==null)
                            {
                                myArrarticles[i].urlToImage="images/1.jpg"
                            }
                        
                        
                        AllCards+= '<div class="col-md-4"><div class="card" style="width: 18rem;"><img src="'+myArrarticles[i].urlToImage+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+myArrarticles[i].title+'</h5><p class="card-text">'+myArrarticles[i].description+'</p><a href="'+myArrarticles[i].url+'" class="btn btn-primary">Read More</a></div></div></div></div>'
                        
                        
                        
                        //console.log(myArrarticles[i].title)
                    }
                document.querySelector(".row").innerHTML=AllCards
                
                
                
            }


    }


}
    