import React, { useState, useEffect, useCallback } from 'react';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';

const BookDetailPage = ({match: { params }}) => {
    const [value, setValue] = useState(2);
    let [info, setInfo] = useState([]);
    let [reviews, setReviews] = useState([]);
    let {id} = params;
    
    const getAll = useCallback(
        id => {
            axios
                (process.env.REACT_APP_API_URL + `/books/${id}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                })
                .then(res => {
                    console.log(res.data);
                    setInfo(res.data.info);
                    setReviews(res.data.reviews);
                });
        },
        [id]
    );

    useEffect(() => {
        getAll(id);
    }, [getAll]);


    return (
        <div className="contents">
            <div id="bookDetail">
                <div className="book-info">
                    <div className="img-box">
                        <img src={info.thumbnail} alt="" />
                    </div>
                    <div className="txt-box">
                        <h2 className="book-title">{info.name}</h2>
                        <dl className="clearfix">
                            <dt>저자</dt>
                            <dd>{info.author}</dd>
                        </dl>
                        <dl className="clearfix">
                            <dt>출판사</dt>
                            <dd>{info.publisher}</dd>
                        </dl>
                        <div className="star-box">
                            <Rating name="read-only" value={info.reviewScore} readOnly />
                            <span className="review">/ {info.reviewCnt}명</span>
                        </div>
                    </div>
                </div>
                <div className="desc-box">
                    <h4 className="detail-title">책 소개</h4>
                    <p className="desc">
                       {info.content}
                    </p>
                </div>
                <div className="review-wrap">
                    <h4 className="detail-title">리뷰</h4>
                    <form className="score-wrap">
                        <h4 className="title">이 책의 점수는요?</h4>
                        <div className="star-box">
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                        <div className="review-add">
                            <textarea placeholder="리뷰를 작성해주세요." />
                            <button type="submit">리뷰등록</button>
                        </div>
                    </form>
                    <div className="review-list-wrap">
                        <ul className="list-wrap">
                        {reviews.map(review => (
                            <li className="list" key={review.id}>
                                <div className="content-left">
                                    <div className="star-box">
                                        <Rating
                                            className="star"
                                            name="read-only"
                                            value={3}
                                            readOnly
                                        />
                                    </div>
                                    <p className="name">{review.user.name}</p>
                                    <p className="date">{review.createdAt}</p>
                                </div>
                                <div className="content-right">
                                    <p>
                                       {review.content}
                                    </p>
                                    <div className="btn-wrap">
                                        <button>
                                            <i className="icon-thumbs-up"></i>
                                            <span>0</span>
                                        </button>
                                        <button>
                                            <i className="icon-thumbs-down"></i>
                                            <span>0</span>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;
