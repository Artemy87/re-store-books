import React, {Component} from 'react';
import { connect } from "react-redux"; // используется для подключения компонента к Redux Store

import BookListItem from "../book-list-item";
import Spinner from "../spinner";
import { withBookstoreService } from '../hoc';
import { fetchBooks } from "../../actions";

import styles from './book-list.module.css';
import ErrorIndicator from "../error-indicator";


class BookList extends Component  {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;
    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return (
      <ul className={styles.book_list}>
        {
          books.map(book => (
            <li key={book.id}>
              <BookListItem book={book}/>
            </li>)
          )
        }
      </ul>
    );
  };
}

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService)
  }
}

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList) // вместо mapDispatchToProps, можно сразу передать {booksLoaded}
);
