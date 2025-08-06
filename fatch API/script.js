async function fetchUsers() {
    try{
        const res = await fetch("https://fakestoreapi.com/users");
        if(!res.ok){
            throw new Error("Uers api fetching error");
        }
        const users = await res.json();
        displayUsers(users);
    }catch(err){
        console.error(err);
    }
}
function displayUsers (users){
    const container=document.getElementById("user-countainer");

    users.forEach(data => {
        const div=document.createElement("div");
        div.className="user-detail";

        div.innerHTML=`
        <h3>Name:-${data.name.firstname} ${data.name.lastname}</h3>
        <h4>${data.username}</h4>
        <h4>${data.email}</h4>
        <h4>${data.password}</h4>
        <h4>${data.phone}</h4>
        <h4>${data.address.city}</h4>
        `
        container.appendChild(div);
    })
}
fetchUsers();