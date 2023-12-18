function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    // showing the data in console
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    // using jquery to display on screen
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());

    // when the user clicks the signin button, we need to show user the signin information/ the data field
    // we'll use jquery for it
    $(".data").css("display", "block");
    // when the user clicks the sigin, we need to hide the signin buttin, since the user has successfully signed in
    $(".g-signin2").css("display", "none");
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {

      // console.log('User signed out.');
    alert("You have been signed out successfully");
    // now we need to show the user the sigin button again
    $(".g-signin2").css("display", "block");
    // and the data element will also be hidden
    $(".data").css("display", "none");
    });
}