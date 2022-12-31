var form = document.getElementById("myForm");

// Read input value of form after submit clicked
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var search = document.getElementById("search").value;
  // Info is data that stored and read from localhost
  var info = {
    fullname: "",
    url: "",
    url_href: "",
    location: "",
    bio: "",
    avatar_url: "",
    favorite_lan: "",
  };
  // Read date from localhost
  if (localStorage.getItem(search)) {
    data = localStorage.getItem(search);
    data = JSON.parse(data);
    document.getElementById("user_stage").innerHTML =
      "old User(Read from localstorage)";
    document.getElementById("name").innerHTML = data.fullname;
    document.getElementById("url").innerHTML = data.url;
    document.getElementById("url").href = data.url_href;
    document.getElementById("location").innerHTML = data.location;
    document.getElementById("bio").innerHTML = data.bio;
    document.getElementById("avatar_url").src = data.avatar_url;
    document.getElementById("lan").innerHTML =
      "Pop language: " + data.favorite_lan;
  } else {
    // Get data of new user from github
    fetch("https://api.github.com/users/" + search)
      .then((result) => result.json())
      .then((data) => {
        //Username doesn't exist
        if (data.message) {
          document.getElementById("user_error").innerHTML = "User Not Found";
          document.getElementById("name").innerHTML = "";
          document.getElementById("url").innerHTML = "";
          document.getElementById("url").href = "";
          document.getElementById("location").innerHTML = "";
          document.getElementById("bio").innerHTML = "";
          document.getElementById("avatar_url").src = "avatar.png";
          document.getElementById("lan").innerHTML = "";
        } else {
          // Get data of username
          document.getElementById("user_stage").innerHTML = "New User";
          document.getElementById("name").innerHTML = data.name;
          document.getElementById("url").innerHTML = data.blog;
          document.getElementById("url").href = data.blog;
          document.getElementById("location").innerHTML = data.location;
          document.getElementById("bio").innerHTML = data.bio;
          document.getElementById("avatar_url").src = data.avatar_url;
          // Get data for find languages that user pushed
          fetch("https://api.github.com/users/" + search + "/repos")
            .then((result) => result.json())
            .then((res) => {
              var list_languges = [];
              var favorite_lan;
              // The number of user repos may be less than 5
              if (res.length <= 5) {
                for (let i = 0; i < res.length; i++) {
                  if (res[i].language) {
                    list_languges.push(res[i].language);
                  }
                }
              } else {
                for (let i = 0; list_languges.length < 5; i++) {
                  if (res[i].language) {
                    list_languges.push(res[i].language);
                  }
                }
              }

              console.log("list_languges: " + list_languges);
              favorite_lan = mode(list_languges);
              console.log("favorite_lan: " + favorite_lan);
              document.getElementById("lan").innerHTML =
                favorite_lan == null ? "" : "Pop language: " + favorite_lan;
              // Store information in the info variable
              info.fullname = data.name;
              info.url = data.blog;
              info.url_href = data.blog;
              info.location = data.location;
              info.bio = data.bio;
              info.avatar_url = data.avatar_url;
              info.favorite_lan = favorite_lan;
              // Save data into localhost
              localStorage.setItem(search, JSON.stringify(info));
            });
        }
      });
  }
});

// The function to find the language with the most repetition among the array of maximum length 5
function mode(array) {
  var mf = 1;
  var m = 0;
  var item;
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[i] == array[j]) m++;
      if (mf < m) {
        mf = m;
        item = array[i];
      }
    }
    m = 0;
  }
  if (mf >= 2) {
    return item;
  } else {
    return null;
  }
}
