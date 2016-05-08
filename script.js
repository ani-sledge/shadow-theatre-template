// Toggles the plus and minus icons in the calendar 
function toggleIcon(elmnt) {
     var icon = elmnt.getElementsByTagName("span")[1];
     if (icon.className === "glyphicon glyphicon-plus pull-right") {
         icon.className = "glyphicon glyphicon-minus pull-right";
     } else {
         icon.className = "glyphicon glyphicon-plus pull-right"; 
     }; 
};  
