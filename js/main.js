let search = document.getElementById('searcher');
let searchBox = document.getElementById('search-box');
search.addEventListener('focus', () => { searchBox.style.boxShadow = '0 0 5px rgba(81, 203, 238, 1)'; });
search.addEventListener('blur', () => { searchBox.style.boxShadow = ''; });

