function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
   console.log('Name: ' + profile.getName());
   console.log('Image URL: ' + profile.getImageUrl());
   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
   <button id onclick="signin();">Signin</button> 
      function signin() { 
        var auth2 = gapi.auth2.getAuthInstance(); 
          auth2.signOut().then(function () { 
         console.log('User signed out.'); 
      }); 
    function onsignIn() 
    { 
       document.getElementById("onsinin").innerHTML.toggle("active"); 
       document.getElementById("ul").innerHTML.toggle("link"); 
    } 
                                                                      