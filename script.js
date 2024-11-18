const input = document.getElementById('input');
const search = document.getElementById('search');
const imageDiv = document.querySelector('.image-div');
const load = document.getElementById('load-more');
load.style.display = 'none';

let page = 1;

input.addEventListener('input', () => {
    load.style.display = 'none'
});

async function fetchImg() {
    try {
        let toSearch = input.value;
        if (toSearch === "") {
            alert("Write something to get images.");
            return;
        }
        const res = await fetch (`https://api.unsplash.com/search/photos?page=${page}&query=${toSearch}&client_id=RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw`);
        if (!res.ok) throw new Error("Failed to fetch images");
        
        const data = await res.json();

        if (page === 1) {
            imageDiv.innerHTML = "";
        }

        page ++;

        data.results.forEach(obj => {
            let div = `
                <div class="fetched-img">
                    <div class="img">
                        <img src="${obj.urls.full}" alt="${obj.alt_description}">
                    </div>
                    <p>${obj.alt_description}</p>
                </div>
            `;
            imageDiv.innerHTML += div;
        });
        
        load.style.display = 'block';
    }

    catch(error) {
        console.error(error);
        alert('An error ocurred while fetching images');
    }
}

search.addEventListener('click', () => {
    page = 1;
    fetchImg();
});

load.addEventListener('click', fetchImg);