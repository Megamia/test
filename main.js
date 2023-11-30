document.addEventListener("DOMContentLoaded",function(){
  const header=document.querySelector("header");
  const headerHeight=header.offsetHeight;
  const headerHeightSmall=80;
  window.addEventListener("scroll",function(){
    if(window.pageYOffset>headerHeight)
    {
      header.classList.add("fixed");
      header.style.height=headerHeightSmall+"px";
    }
    else
    {
      header.style.height="";
      header.classList.remove("fixed");
    }
  });
});

function signup(e){
  event.preventDefault();
  var username=document.getElementById("username").value;
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  var tel=document.getElementById("tel").value;
  var user={
    username:username,
    email:email,
    password:password,
    tel:tel
  };
  localStorage.setItem("user",JSON.stringify(user));
  alert("Dang ky thanh cong");
  window.location.href="./signin.html";
}

function login(e){
  event.preventDefault();
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  var storeUser=JSON.parse(localStorage.getItem("user"));
  if(storeUser && username===storeUser.username && password===storeUser.password){
    alert("Dang nhap thanh cong");
    window.location.href="./profile.html";
  }else{
    alert("Dang nhap that bai");
  }
}

function displayProfileInfor(){
  var storeUser=JSON.parse(localStorage.getItem("user"));
  if(storeUser){
    document.getElementById("username").innerText=storeUser.username;
    document.getElementById("email").innerText=storeUser.email;
    document.getElementById("tel").innerText=storeUser.tel;
  }
}

displayProfileInfor();

function ProfileLink(e){
  var storeUser=JSON.parse(localStorage.getItem("user"));
  if(storeUser){
    var username=storeUser.username;
    var profileLink=document.getElementById("profileLink");
    profileLink.innerText=username;
  }
}

ProfileLink();



