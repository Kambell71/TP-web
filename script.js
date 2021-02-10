 function showCity() {
          let villeCourante = document.getElementById("city-select").value;
          	if(villeCourante!=""){
            	document.getElementById("selection").innerHTML=" Vous avez séléctionné : "+villeCourante;
		}
            else{
              	document.getElementById("selection").innerHTML=" Vous avez séléctionné : ";
		}
          
         let cities = document.getElementsByClassName("local");
	 	
          for(let i=0;i<cities.length;i++){
		
            if(cities[i].id== villeCourante){
		   
              cities[i].style.display="block";
            }
            else{
              cities[i].style.display="";
            }
          }  
	}