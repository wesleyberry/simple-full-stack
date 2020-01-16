let button = document.getElementById("submit");

button.onclick = async function(e) {
    e.preventDefault();
    const body = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    };
    
    const otherPram = {
        headers: {
            "Content-type": "application/json"
        },
        body,
        method: "POST"
    }

    fetch('/api/users', otherPram)
        .then(data => data.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
}