function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}
loadPhotos();

function displayPhotos(photos) {
    const div = document.getElementById('photo');
    for (const photo of photos) {
        const img = document.createElement('img');
        img.innerText = photo.url;
        div.appendChild(img);
        // console.log(comment.name);
    }
}