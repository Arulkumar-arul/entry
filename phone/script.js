async function fetchUsers() {
    
    try {
     const res = await fetch("https://fakestoreapi.com/users");
     if(!res.ok){
        throw new Error("Users api fetching error");
     }
     const users = await res.json();
     displayUsers(users);
     
    }catch(err){
        console.error(err);
    }
}

function displayUsers(users) {
    const container =document.getElementById("users-containers");

    users.forEach(data => {
        const  div = document.createElement("div");
        div.className="users-detail";

        div.innerHTML =`
        <h3> Name:- ${data.name.firstname} ${data.name.lastname}</h3>
        <h4> ${data.username}</h4>
        `
        container.appendChild(div);
    

    })  
}
fetchUsers();