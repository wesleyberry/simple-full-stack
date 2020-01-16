let button = document.getElementById("submit");

button.onclick = async function(e) {
    e.preventDefault();
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        }
    };

    const fetchResponse = await fetch('/api/users', settings);
    console.log(fetchResponse);
}