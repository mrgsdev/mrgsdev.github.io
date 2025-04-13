const books = [
  {
    img: "../img/books/gitbook.png",
    alt: "Programming in Lua",
    title: "Git для профессионального программиста",
    author: "С.Чакон, Б.Штрауб",
    category: "other",
    link: null
  },
  {
    img: "../img/books/Core_Data_by_Tutorials_v8.png",
    alt: "Core Data by Tutorials",
    title: "Core Data by Tutorials",
    author: "Kodeco",
    category: "framework",
    link: "https://github.com/mrgsdev/Various_Tutorials/tree/main/Books%20Tutorials/UIKit/Core%20Data%20by%20Tutorials"
  },
  {
    img: "../img/books/mastering-swiftui-xcode15.png",
    alt: "Mastering SwiftUI",
    title: "Mastering SwiftUI Swift 5.9, Xcode 15",
    author: "AppCoda",
    category: "swiftui",
    link: "https://github.com/mrgsdev/AppCoda/tree/main/SwiftUI/Mastering%20SwiftUI"
  },
  {
    img: "../img/books/swiftui-ios17-beginner-book.png",
    alt: "Beginning iOS Programming with Swift and SwiftUI",
    title: "Beginning iOS Programming with Swift and SwiftUI",
    author: "AppCoda",
    category: "swiftui",
    link: "https://github.com/mrgsdev/AppCoda/tree/main/SwiftUI/Beginning%20iOS%20Programming%20with%20SwiftUI"
  },
  {
    img: "../img/books/intermediate-swift-ios17-book.png",
    alt: "Intermediate iOS Programming with Swift",
    title: "Intermediate iOS Programming with Swift",
    author: "AppCoda",
    category: "uikit",
    link: "https://github.com/mrgsdev/AppCoda/tree/main/UIKit/Intermediate%20iOS%20Programming%20with%20Swift"
  },
  {
    img: "../img/books/uikit-ios17-beginner-book.png",
    alt: "Beginning iOS Programming with Swift and UIKit",
    title: "Beginning iOS Programming with Swift and UIKit",
    author: "AppCoda",
    category: "uikit",
    link: "https://github.com/mrgsdev/AppCoda/tree/main/UIKit/Beginning%20iOS%20Programming%20with%20Swift"
  },
  {
    img: "../img/books/advanced-Swift.png",
    alt: "objc Advanced Swift",
    title: "Advanced Swift Updated 5.6",
    author: "objc",
    category: "swift",
    link: null
  },
  {
    img: "../img/books/Flight School Guides.png",
    alt: "Flight School Guides",
    title: "Flight School Guide to Number, String,Codable",
    author: "github.com/mattt",
    category: "swift",
    link: null
  },
  {
    img: "../img/books/swiftdoc.png",
    alt: "Swift Documentation",
    title: "Swift Documentation",
    author: "Apple Inc.",
    category: "swift",
    link: null
  }
];

const bookGrid = document.getElementById("bookGrid");

books.forEach(book => {
  const card = document.createElement("div");
  card.className = `book-card ${book.category}`;

  card.innerHTML = `
      <img class="book-img" src="${book.img}" alt="${book.alt}" />
      <div class="book-title">${book.title}</div>
      <div class="book-author">${book.author}</div>
      ${book.link ? `<a href="${book.link}" target="_blank" rel="noopener noreferrer" class="repo-link">My Repository</a>` : ""}
    `;

  bookGrid.appendChild(card);
});

const filterButtons = document.querySelectorAll('.filter-btn');
const bookCards = document.querySelectorAll('.book-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    bookCards.forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else {
        card.classList.toggle('hidden', !card.classList.contains(filter));
      }
    });
  });
});