 // Toggle between showing and hiding the sidebar when clicking the menu icon
 var mySidebar = document.getElementById("mySidebar");
  
 function w3_open() {
   if (mySidebar.style.display === 'block') {
     mySidebar.style.display = 'none';
   } else if (mySidebar.style.display === 'none'){
     mySidebar.style.display = 'block';
   }
 }

 // Close the sidebar with the close button
 function w3_close() {
     mySidebar.style.display = "none";
 }

 w3_open();
 w3_close();






