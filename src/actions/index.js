// naming convention
// [тип запроса]_[объект]_[действие] 'FETCH_BOOKS_REQUEST' or 'FETCH_BOOKS_SUCCESS' or
// 'FETCH_BOOKS_FAILURE'

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    };
};

const fetchBooks = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
      .then((data) => dispatch(booksLoaded(data)))
      .catch((err) => dispatch(booksError(err)));
}

export {
    fetchBooks
};