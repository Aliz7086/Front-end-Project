let books = [
  {
    id: 1,
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    genre: "Classic",
    status: "To Read",
    rating: 5,
    favorite: true,
    cover: "https://m.media-amazon.com/images/I/71mbJoazlCL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 2,
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    genre: "Historical Fiction",
    status: "Reading",
    rating: 4,
    favorite: false,
    cover: "https://m.media-amazon.com/images/I/717BhQWsrWL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 3,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    genre: "Fantasy",
    status: "Completed",
    rating: 5,
    favorite: true,
    cover: "https://m.media-amazon.com/images/I/71OZY035QKL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 4,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    status: "Reading",
    rating: 5,
    favorite: false,
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg"
  },
  {
    id: 5,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    status: "Completed",
    rating: 5,
    favorite: true,
    cover: "https://m.media-amazon.com/images/I/71XqqKTZz7L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 6,
    title: "And Then There Were None",
    author: "Agatha Christie",
    genre: "Mystery",
    status: "To Read",
    rating: 4,
    favorite: false,
    cover: "https://img1.od-cdn.com/ImageType-100/0293-1/%7B3182EF08-F941-46E1-9DDA-B2B791B235F2%7DImg100.jpg"
  },
  {
    id: 7,
    title: "Dream of the Red Chamber",
    author: "Cao Xueqin",
    genre: "Classic",
    status: "Reading",
    rating: 5,
    favorite: false,
    cover: "https://m.media-amazon.com/images/I/81yLeT6vB-L._UF1000,1000_QL80_.jpg"
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    status: "Completed",
    rating: 5,
    favorite: false,
    cover: "https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 9,
    title: "She: A History of Adventure",
    author: "H. Rider Haggard",
    genre: "Adventure",
    status: "To Read",
    rating: 3,
    favorite: false,
    cover: "https://m.media-amazon.com/images/I/612HiSyvnQL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 10,
    title: "The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    genre: "Fantasy",
    status: "Reading",
    rating: 4,
    favorite: false,
    cover: "https://m.media-amazon.com/images/I/812pHkTwkOL._AC_UF1000,1000_QL80_.jpg"
  }
];

function showBooks() {
  let bookList = document.getElementById("bookList");
  let searchText = document.getElementById("searchInput").value.toLowerCase();
  let genreValue = document.getElementById("genreFilter").value;
  let sortValue = document.getElementById("sortSelect").value;

  let newList = [];

  bookList.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    let oneBook = books[i];
    let sameSearch = false;
    let sameGenre = false;

    if (
      oneBook.title.toLowerCase().includes(searchText) ||
      oneBook.author.toLowerCase().includes(searchText)
    ) {
      sameSearch = true;
    }

    if (genreValue === "all" || oneBook.genre === genreValue) {
      sameGenre = true;
    }

    if (sameSearch && sameGenre) {
      newList.push(oneBook);
    }
  }

  if (sortValue === "title") {
    newList.sort(function(a, b) {
      return a.title.localeCompare(b.title);
    });
  }
  else if (sortValue === "author") {
    newList.sort(function(a, b) {
      return a.author.localeCompare(b.author);
    });
  }
  else if (sortValue === "rating") {
    newList.sort(function(a, b) {
      return b.rating - a.rating;
    });
  }
  else if (sortValue === "status") {
    newList.sort(function(a, b) {
      return a.status.localeCompare(b.status);
    });
  }

  for (let i = 0; i < newList.length; i++) {
    let book = newList[i];
    let stars = "";
    let favoriteText = "";
    let coverPart = "No Cover";

    for (let j = 0; j < book.rating; j++) {
      stars = stars + "⭐";
    }

    if (book.favorite === true) {
      favoriteText = "⭐ Favorite";
    }

    if (book.cover !== "") {
      coverPart = '<img src="' + book.cover + '" alt="' + book.title + '">';
    }

    bookList.innerHTML +=
      '<div class="book">' +
        '<div class="cover">' + coverPart + '</div>' +
        '<div class="title">' + book.title + '</div>' +
        '<div class="info">Author: ' + book.author + '</div>' +
        '<div class="info">Genre: ' + book.genre + '</div>' +
        '<div class="info">Status: ' + book.status + '</div>' +
        '<div class="rating">' + stars + '</div>' +
        '<div class="favorite">' + favoriteText + '</div>' +
        '<div class="actions">' +
          '<button class="btn btn-warning btn-sm" onclick="toggleFavorite(' + book.id + ')">Favorite</button>' +
          '<button class="btn btn-info btn-sm" onclick="changeRating(' + book.id + ')">Change Rating</button>' +
          '<button class="btn btn-danger btn-sm" onclick="deleteBook(' + book.id + ')">Delete</button>' +
        '</div>' +
      '</div>';
  }
}

function addBook() {
  let title = document.getElementById("titleInput").value;
  let author = document.getElementById("authorInput").value;
  let genre = document.getElementById("genreInput").value;
  let status = document.getElementById("statusInput").value;
  let rating = document.getElementById("ratingInput").value;
  let cover = document.getElementById("coverInput").value;
  let favorite = document.getElementById("favoriteInput").checked;
  let message = document.getElementById("message");

  if (title === "" || author === "" || genre === "") {
    message.innerHTML = "Please fill in title, author, and genre.";
    return;
  }

  let newBook = {
    id: new Date().getTime(),
    title: title,
    author: author,
    genre: genre,
    status: status,
    rating: Number(rating),
    favorite: favorite,
    cover: cover
  };

  books.push(newBook);

  message.innerHTML = "Book added successfully!";

  document.getElementById("titleInput").value = "";
  document.getElementById("authorInput").value = "";
  document.getElementById("genreInput").value = "";
  document.getElementById("statusInput").value = "To Read";
  document.getElementById("ratingInput").value = "1";
  document.getElementById("coverInput").value = "";
  document.getElementById("favoriteInput").checked = false;

  updateGenreFilter();
  showBooks();
}

function deleteBook(bookId) {
  let answer = confirm("Are you sure you want to delete this book?");

  if (answer === false) {
    return;
  }

  let newBooks = [];

  for (let i = 0; i < books.length; i++) {
    if (books[i].id !== bookId) {
      newBooks.push(books[i]);
    }
  }

  books = newBooks;

  updateGenreFilter();
  showBooks();
}

function toggleFavorite(bookId) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === bookId) {
      if (books[i].favorite === true) {
        books[i].favorite = false;
      }
      else {
        books[i].favorite = true;
      }
    }
  }

  showBooks();
}

function changeRating(bookId) {
  let newRating = prompt("Enter a new rating from 1 to 5:");

  if (newRating === null) {
    return;
  }

  newRating = Number(newRating);

  if (newRating < 1 || newRating > 5 || isNaN(newRating)) {
    alert("Please enter a number from 1 to 5.");
    return;
  }

  for (let i = 0; i < books.length; i++) {
    if (books[i].id === bookId) {
      books[i].rating = newRating;
    }
  }

  showBooks();
}

function updateGenreFilter() {
  let genreFilter = document.getElementById("genreFilter");
  let genreList = [];

  genreFilter.innerHTML = '<option value="all">All Genres</option>';

  for (let i = 0; i < books.length; i++) {
    let oneGenre = books[i].genre;
    let alreadyHave = false;

    for (let j = 0; j < genreList.length; j++) {
      if (genreList[j] === oneGenre) {
        alreadyHave = true;
      }
    }

    if (alreadyHave === false) {
      genreList.push(oneGenre);
    }
  }

  for (let i = 0; i < genreList.length; i++) {
    genreFilter.innerHTML +=
      '<option value="' + genreList[i] + '">' + genreList[i] + '</option>';
  }
}

updateGenreFilter();
showBooks();
