const API_KEY = "1cda4274   ";
const BASE_URL = "https://www.omdbapi.com";

async function fetchMovies() {
    try {
        const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=batman`);
        const data = await response.json();

        const movies = data.Search;
        const movieList = document.getElementById("movieList");

        movies.forEach(movie => {
            const movieSlide = document.createElement("div");
            movieSlide.classList.add("swiper-slide");

            movieSlide.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
            `;

            movieList.appendChild(movieSlide);
        });

        new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

    } catch (error) {
        console.error("Xatolik yuz berdi: ", error);
    }
}

fetchMovies();
