let button = document.getElementById("submit");

button.onclick = async function(e) {
    e.preventDefault();
    const body = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    };
    
    const otherPram = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body,
    }

    axios.post('/api/users', otherPram)
        .then(data => data.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

function getUsers() {
    fetch('api/users')
        .then(response => response.json())
        .then(data => {
            let h1 = document.createElement("h1");
            let h1_text = document.createTextNode(`${data.name} the ${data.profession}`);
            h1.appendChild(h1_text);
            document.body.appendChild(h1);
        })
        .catch(err => console.log(err));
}

getUsers();