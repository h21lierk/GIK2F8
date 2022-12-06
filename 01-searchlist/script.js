'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) => searchBooks(e.target.value));

  /* searchField.addEventListener('keyup', (e) => 
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 || author.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
      })
  )
); */



function searchBooks(searchTerm) {
  renderBookList(
    bookList.filter(
      ({ title, author }) => 
        title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
        author.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
    )
  );
}



function renderBookList(bookList) {
  /* Element i HTML-listan visas/döljs beroende på listans innehåll*/

  const existingElement = document.querySelector('.book-list');
  console.log(existingElement);

  const root = document.getElementById('root');
  if (existingElement) {
    root.removeChild(existingElement);
  }
  if (bookList.length > 0 && searchField.value) {
    root.insertAdjacentHTML('beforeend', BookList(bookList));
  }
}


getAll().then((bookList) => console.log(bookList));