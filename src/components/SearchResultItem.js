import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';

const SearchResultItem = ({data}) => {
    return (
        <div className="search-item">
            <ul className="item-wrap">
            {data.map(list => (
                <li className="item" key={list.id}>
                    <div className="book-img">
                        <Link to={`/book_detail/${list.id}`}>
                            <img src={list.thumbnail} alt="" />
                        </Link>
                    </div>
                    <div className="book-info">
                        <Link to={`/book_detail/${list.id}`}>
                        <h3 className="book-title">{list.name}</h3>
                        </Link>
                        <h4 className="book-sub">{list.author}</h4>
                        <div className="star-box">
                            <Rating name="read-only" value={list.reviewScore} readOnly />
                            <span className="review">/ {list.reviewCnt}명</span>
                        </div>
                        <p className="book-desc">
                            {list.content}
                        </p>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResultItem;
