var bookmarkNameInput = document.getElementById("bookmarkName");
var bookmarkURLInput = document.getElementById("bookmarkURL");

var bookmarks;

if(localStorage.getItem("links") == null){
    bookmarks=[];
}else{
    bookmarks= JSON.parse(localStorage.getItem("links"));
    display();
}

function addLink(){

if(bookmarkNameInput.classList.contains("is-valid") && bookmarkURLInput.classList.contains("is-valid")){
    var bookmark = {
        name : bookmarkNameInput.value,
        url : bookmarkURLInput.value,

    };

    bookmarks.push(bookmark);
    console.log(bookmarks);
    localStorage.setItem("links", JSON.stringify(bookmarks))
    clear()
    display()
}else{
    alert("Not vaild data");
}

   
}

function deleteLink(index){
    bookmarks.splice(index,1);
    console.log(bookmarks);
    display()
    localStorage.setItem("links", JSON.stringify(bookmarks))
    
    
    
}
function display(){
    var cartona="";
    for(var i=0;i<bookmarks.length ; i++){
        cartona += ` <tr>
        <th scope="row">${(i+1)}</th>
        <td>${bookmarks[i].name}</td>
        <td><a href="${bookmarks[i].url}" target="_blank" class="visit text-decoration-none"><i class="fa-solid fa-eye"></i> Visit</a></td>
        <td><a href="#" onclick="deleteLink(${i})" class="delete text-decoration-none"><i class="fa-regular fa-trash-can"></i> Delete</a></td>
      </tr>`
    }
    document.getElementById("row").innerHTML =cartona;
}

function clear(){
    bookmarkNameInput.value=null;
    bookmarkURLInput.value=null;
   
}

function validateInputs(element){
    var regex ={
        bookmarkName : /^\w{3,}$/,
        bookmarkURL : /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/
     }
    
    if (regex[element.id].test(element.value) == true){
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        element.nextElementSibling.classList.add("d-none");
    }else{
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        element.nextElementSibling.classList.remove("d-none");
        console.log(element.nextElementSipling);
        
    }
    
}

