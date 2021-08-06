const searchBtn = document.querySelector('.movie-search-button');
const input = document.querySelector('.movie-search-query');
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const YOUR_APP_KEY = `` // App Key를 발급받아서 여기에 넣으세요.

function onSearch() {
    searchBtn.addEventListener('click', () => {
        if (input.value === '') {
            alert('검색어를 입력하세요');
            return;
        }
        assignData();
    });
}

function assignData() {
    const key = `?key=${YOUR_APP_KEY}`
    const movieNmQuery = `&movieNm=${input.value}`
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json${key}${movieNmQuery}`
    loadData(url);
}

function loadData(url) {
    fetch(url)
        .then((response) => response.json())
        .then((json) => showData(json.movieListResult))
        .catch(console.log);
}

function showData(movieListResult) {
    try {
        const movieList = movieListResult.movieList;
        const row = movieList
            .map((item) => {
                return `
          <tr>
            <td class="name-cell">${item.movieNm}</td>
            <td class="year-cell">${item.prdtYear}</td>
            <td class="genre-cell">${item.genreAlt}</td>
            <td class="nation-cell">${item.nationAlt}</td>
          </tr>`;
            })
            .join('');
        thead.style.visibility = 'visible';
        tbody.innerHTML = row;
    } catch  {
        console.log();
        alert('해당 정보를 불러올 수 없습니다.');
    }
}

onSearch();