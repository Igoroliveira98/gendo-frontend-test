function openEvents(evt, name) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("content__repos");

  for (i = 0; i < tabcontent.length; i++) {

    console.log(tabcontent);
    
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("btn-repos");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");

  }
  
  // Show the current tab, and add an "active" class to the button that opened the tab
  
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
} 