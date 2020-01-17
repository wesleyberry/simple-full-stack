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

function getUsers() {
    fetch('api/users')
        .then(response => response.json())
        .then(data => {
            let body = document.querySelector('body');
            body.append(`${data.name} the ${data.profession}`);
        })
        .catch(err => console.log(err));
}

getUsers();