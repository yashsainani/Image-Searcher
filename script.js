const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
const input = document.getElementById('input');
const search = document.getElementById('search');
const imageDiv = document.querySelector('.image-div');
const load = document.getElementById('load-more');
load.disabled = true;

let page = 1;

search.addEventListener('click', async () => {
    let toSearch = input.value;
    const res = await fetch (`https://api.unsplash.com/search/photos?page=${page}&query=${toSearch}&client_id=${accessKey}`);
    const data = await res.json();

    if (page === 1) {
        imageDiv.innerHTML = "";
    }

    data.forEach(obj => {
        
    });
});

// https://yashsainani.github.io/Image-Searcher/