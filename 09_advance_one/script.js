document.getElementById("sub_btn").addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const requestUrl = 'https://api.github.com/users/' + username;
    console.log(requestUrl);
    const xhr = new XMLHttpRequest();
    document.getElementById('username').value = "";
    document.querySelector('.detail_table').innerHTML = '';
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText);
            document.getElementById('avator_img').src = data.avatar_url;
            const table = document.querySelector('.detail_table');
            for (const attribute in data) {
                table.innerHTML += `<tr>
                <td>${attribute}</td>
                <td>${data[attribute]}</td>
                </tr>`
            }
        }
    }
    xhr.send()
})