/*
    Name: Jaesun Baek
    Date: May 19, 2024
    Section: IAB 6068 - Internet Programming
    find the book info page
    category: projects
*/

"use strict";
(function(){

    window.addEventListener("load", init);
    window.addEventListener("load", searchBook);

    function init() {
        document.getElementById("searchBookBtn").addEventListener("click", searchBook)
    }

    async function searchBook() {
        let bookUrl = 'https://openlibrary.org/search.json?title=harry+potter+and+the+deathly+hallows';
        const inputTitle =  document.getElementById('searchBook').value.replace(/ /g, "+");
        if(inputTitle)
            bookUrl = 'https://openlibrary.org/search.json?title=' + inputTitle;

        await fetchBook(bookUrl);
    }

    async function fetchBook(bookUrl) {
        fetch(bookUrl)
        .then(statusCheck)
        .then(res => res.json())
        .then((bookInfo) => {
            const bookCoverImgKey = bookInfo.docs[0].cover_edition_key;
            const bookCoverImg = 'https://covers.openlibrary.org/b/olid/' + bookCoverImgKey + '-M.jpg';
            const bookTitle = bookInfo.docs[0].title;
            const bookAuthor = bookInfo.docs[0].author_name;
            const bookPublished = bookInfo.docs[0].first_publish_year;

            document.querySelector('#bookCoverImg').src = bookCoverImg;
            document.querySelector('#bookTitle').textContent = bookTitle;
            document.querySelector('#bookAuthor').textContent = bookAuthor;
            document.querySelector('#bookPublish').textContent = bookPublished;
        })
        .catch(handleError);
    }
    async function statusCheck(res) {
        if (!res.ok) {
            throw new Error(await res.json());
        }
        return res;
    }

    function handleError(error) {
        console.log(error);
    }
})();
