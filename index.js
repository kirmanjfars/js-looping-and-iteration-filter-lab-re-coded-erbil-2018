// Code your solution in this file

const drivers=[];


function findMatching(list , name){
  
  return list.filter( function(s){
      if(s.toLowerCase() == name.toLowerCase()){
        return s;
      }else{
        return undefined;
      }
    } );
}

function fuzzyMatch (list, partialName) {
  
  return list.filter(
    function(s){
      for(let i =0; i<(s.length - 2); i++){
         if(partialName == s.slice(i, i+2)){
           return s;
         }else{
 
           return null;
         }
      }
    }
    );
}



function matchName(list , name){
  
  return list.filter( function(s){
      if(s.name == name){
        return s;
      }else{
        return undefined;
      }
    } );
}



