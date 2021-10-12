function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}
loadComments();

function displayComments(comments) {
    const div = document.getElementById('comment');
    for (const comment of comments) {
        const h2 = document.createElement('h2');
        h2.style.color = 'salmon';
        h2.style.textAlign = 'center';
        h2.innerText = comment.name;
        div.appendChild(h2);
        // console.log(comment.name);
    }
}