let allUsers = [
    {id:1, name:"md nahid", currentReact:false, profilePic:"./img/242620792_917469382515527_6649497678133406014_n.png",postImg:"./img/Screen Shot 2021-02-09 at 06.30.19.png"},

    {id:2, name:"mh murshed", currentReact:false, profilePic:"./img/murshed.jpg",postImg:"./img/story2.jpg"},

    {id:3, name:"facebook user", currentReact:false, profilePic:"./img/tom.jpg",postImg:"./img/nahid.jpg"}
];


const allPost = document.getElementById('users');
allUsers.map((user)=>{
    let dv = document.createElement('div');
    allPost.appendChild(dv);
    dv.innerHTML = `
          <div class="post-card">
            <div class="post-header">
                <div class="profile">
                    <img src="${user.profilePic}" alt="" class="img-fluid">
                    <h5>
                    ${user.name}</h5>
                </div>
                <div class="more-btn"><i class="fa fa-ellipsis"></i></div>
            </div>  
            <div class="post-body">
                <div>
                    <div class="post-img">
                        <img src="${user.postImg}" alt="">
                    </div>
                </div>
            </div>
            <div class="post-footer">
                <button onclick="postReact(this, ${user.currentReact})" type="button"  class="post-react">
                  0
                </button>
                <button type="button" class="post-comment"><i class="fa fa-message"></i> Comment
                </button>
                <button type="button" class="post-share"><i class="fa fa-share"></i> Share
                </button>

            </div>
        </div>
    `;
})

let m = document.getElementById('m');          
let count = document.getElementById('count');
let clicked = false;


function postReact(s, checkLike) {
    parseInt(s);
       if (checkLike === false) {
        checkLike = true;
        console.log(checkLike);
        s.innerText++;
        // console.log(s.innerText++);
    }   
    else{
        checkLike = false;
        console.log(checkLike);
        s.innerText--;
        // console.log(s.innerText++);
    }
    
   
}
 