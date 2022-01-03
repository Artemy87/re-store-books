import React from 'react';

import styles from './book-list-item.module.css';


const BookListItem = ({ book }) => {
    const { title, author, price, coverImage } = book;
    return (
        <div className={styles.list_item}>
          <div className={styles.cover}>
            <img src={coverImage} />
          </div>
          <div className={styles.details}>
            <span className={styles.title}>{title}</span>
            <div className={styles.author}>{author}</div>
            <div className={styles.price}>${price}</div>
            <button>Add-to cart</button>
          </div>
        </div>
    );
};

export default BookListItem;