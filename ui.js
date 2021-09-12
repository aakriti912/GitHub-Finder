class UI{
constructor(){
    this.profile = document.getElementById('profile');
}
showProfile(user){
    this.profile.innerHTML = `
    <div class= "card  card-body mb-3">
    <div class="row">
    <div class="col-mb-3">
    <img class="img-fluid mb-2" src="${user.avatar_url}" style:"height:50px; width:30px;">
    <a href="${user.html_url}" target="_blank" class=""btn btn-primary btn-block mb-4" style="background-color:black;padding:5px;">View Profile</a>
    </div>

    <div class="col-md-9">
    <span class = "badge badge-primary" >public_repos:${user.public_repos} </span>
    <span class = "badge badge-secondary" >public_gists:${user.public_gists} </span>
    <span class = "badge badge-danger" >public_followers:${user.followers} </span>
    <span class = "badge badge-primary" >public_following:${user.following} </span>
    </div>
    <br><br>
    <ul>
    <li class="list-group-iteam">blog:${user.blog}</li>
    <li class="list-group-iteam">location:${user.location}</li>
    </ul>
    </div>
    </div>
    `
}

// showProfile(message,className){
//     this.clearAlert();
//     const div= document.createElement('div');
//     div.className= className;
//     div.appendChild(document.createTextNode(message));

    // const container = document.querySelector('.searchContainer');
    // const find= document.getElementById('searchUser');

    // container.insertBefore(div ,find);

// setTimeout(()=>{
// this.clearAlert();
// },3000);
// }

clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
        currentAlert.remove();
    }
}

clearProfile(){
    this.profile.innerHTML="";
}
}