<script src="https://apis.google.com/js/platform.js" async defer></script>
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // 
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); 

<button id onclick="signOut();">Sign out</a></button>
<script>
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  function onsignIn()
      {
           document.getElementById("onsinin").innerHTML.toggle("active");
           document.getElementById("ul").innerHTML.toggle("link");
      }
            
