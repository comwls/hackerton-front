import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HomePage = () => {
    // const [value, setValue] = useState(2);
    const value = 2;
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1400 },
            items: 4,
            slidesToSlide: 1,
        },
    };
    const responsiveNew = {
        desktop: {
            breakpoint: { max: 3000, min: 1100 },
            items: 6,
            slidesToSlide: 6,
        },
    };

    return (
        <div id="main">
            <div className="banner-wrap">
                <Carousel
                    swipeable={true}
                    draggable={false}
                    responsive={responsive}
                    ssr={true}
                    autoPlay={true}
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={['tablet', 'mobile']}
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className="banner">
                        <img
                            src="/images/banner_1.jpg"
                            alt="비행청소년에서 억만장자 CEO로 성공한 비결"
                        />
                    </div>
                    <div className="banner">
                        <img
                            src="/images/banner_2.jpg"
                            alt="공부, 이래도 안되면 포기하세요!"
                        />
                    </div>
                    <div className="banner">
                        <img
                            src="/images/banner_3.jpg"
                            alt="콜미 바이 유어 네임 후속작 출간!"
                        />
                    </div>
                    <div className="banner">
                        <img
                            src="/images/banner_4.jpg"
                            alt="김영사 편집자 추천 분야별 필독서"
                        />
                    </div>
                    <div className="banner">
                        <img
                            src="/images/banner_5.jpg"
                            alt="반값 대여에 5,000 포인트백까지!"
                        />
                    </div>
                </Carousel>
            </div>
            <div className="new-book-wrap">
                <div className="contents">
                    <h2 className="title">
                        <Link to="/">
                            이달의 신작<i className="icon-right-open-big"></i>
                        </Link>
                    </h2>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        responsive={responsiveNew}
                        ssr={true}
                        infinite={true}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={1000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={['tablet', 'mobile']}
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div className="banner">
                            <div className="img">
                                <img
                                    src="/images/img_book_1.jpg"
                                    alt="book_1"
                                />
                            </div>
                            <h3 className="name">울트라러닝</h3>
                            <h4 className="author">스콧영</h4>
                        </div>
                        <div className="banner">
                            <div className="img">
                                <img
                                    src="/images/img_book_2.jpg"
                                    alt="book_2"
                                />
                            </div>
                            <h3 className="name">울트라러닝</h3>
                            <h4 className="author">스콧영</h4>
                        </div>
                        <div className="banner">
                            <div className="img">
                                <img
                                    src="/images/img_book_3.jpg"
                                    alt="book_3"
                                />
                            </div>
                            <h3 className="name">울트라러닝</h3>
                            <h4 className="author">스콧영</h4>
                        </div>
                        <div className="banner">
                            <div className="img">
                                <img
                                    src="/images/img_book_4.jpg"
                                    alt="book_4"
                                />
                            </div>
                            <h3 className="name">울트라러닝</h3>
                            <h4 className="author">스콧영</h4>
                        </div>
                        <div className="banner">
                            <div className="img">
                                <img
                                    src="/images/img_book_5.jpg"
                                    alt="book_5"
                                />
                            </div>
                            <h3 className="name">울트라러닝</h3>
                            <h4 className="author">스콧영</h4>
                        </div>
                        <div className="banner">
                            <div className="img">
                                <img
                                    src="/images/img_book_6.jpg"
                                    alt="book_6"
                                />
                            </div>
                            <h3 className="name">울트라러닝</h3>
                            <h4 className="author">스콧영</h4>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="best-book-wrap">
                <div className="contents">
                    <h2 className="title">
                        <Link to="/">
                            베스트셀러<i className="icon-right-open-big"></i>
                        </Link>
                    </h2>
                    <div className="book-list">
                        <div className="item-box">
                            <div className="item">
                                <div className="img">
                                    <span className="rank">1</span>
                                    <img
                                        src="/images/img_book_1.jpg"
                                        alt="book_1"
                                    />
                                </div>
                                <div className="txt-box">
                                    <h3 className="name">
                                        날씨가 좋으면 찾아가겠어요
                                    </h3>
                                    <h4 className="author">이도우</h4>
                                    <Rating
                                        name="read-only"
                                        value={value}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <span className="rank">2</span>
                                    <img
                                        src="/images/img_book_1.jpg"
                                        alt="book_1"
                                    />
                                </div>
                                <div className="txt-box">
                                    <h3 className="name">
                                        날씨가 좋으면 찾아가겠어요
                                    </h3>
                                    <h4 className="author">이도우</h4>
                                    <Rating
                                        name="read-only"
                                        value={value}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <span className="rank">3</span>
                                    <img
                                        src="/images/img_book_1.jpg"
                                        alt="book_1"
                                    />
                                </div>
                                <div className="txt-box">
                                    <h3 className="name">
                                        날씨가 좋으면 찾아가겠어요 날씨가 좋으면
                                        찾아가겠어요날씨가 좋으면 찾아가겠어요
                                    </h3>
                                    <h4 className="author">이도우</h4>
                                    <Rating
                                        name="read-only"
                                        value={value}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <span className="rank">4</span>
                                    <img
                                        src="/images/img_book_1.jpg"
                                        alt="book_1"
                                    />
                                </div>
                                <div className="txt-box">
                                    <h3 className="name">
                                        날씨가 좋으면 찾아가겠어요 날씨가 좋으면
                                        찾아가겠어요날씨가 좋으면 찾아가겠어요
                                    </h3>
                                    <h4 className="author">이도우</h4>
                                    <Rating
                                        name="read-only"
                                        value={value}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <span className="rank">5</span>
                                    <img
                                        src="/images/img_book_1.jpg"
                                        alt="book_1"
                                    />
                                </div>
                                <div className="txt-box">
                                    <h3 className="name">
                                        날씨가 좋으면 찾아가겠어요 날씨가 좋으면
                                        찾아가겠어요날씨가 좋으면 찾아가겠어요
                                    </h3>
                                    <h4 className="author">이도우</h4>
                                    <Rating
                                        name="read-only"
                                        value={value}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <span className="rank">6</span>
                                    <img
                                        src="/images/img_book_1.jpg"
                                        alt="book_1"
                                    />
                                </div>
                                <div className="txt-box">
                                    <h3 className="name">
                                        날씨가 좋으면 찾아가겠어요 날씨가 좋으면
                                        찾아가겠어요날씨가 좋으면 찾아가겠어요
                                    </h3>
                                    <h4 className="author">이도우</h4>
                                    <Rating
                                        name="read-only"
                                        value={value}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <span className="rank">7</span>
                                    <img
                                        src="/images/img_book_1.jpg"
                                        alt="book_1"
                                    />
                                </div>
                                <div className="txt-box">
                                    <h3 className="name">
                                        날씨가 좋으면 찾아가겠어요 날씨가 좋으면
                                        찾아가겠어요날씨가 좋으면 찾아가겠어요
                                    </h3>
                                    <h4 className="author">이도우</h4>
                                    <Rating
                                        name="read-only"
                                        value={value}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <span className="rank">8</span>
                                    <img
                                        src="/images/img_book_1.jpg"
                                        alt="book_1"
                                    />
                                </div>
                                <div className="txt-box">
                                    <h3 className="name">
                                        날씨가 좋으면 찾아가겠어요 날씨가 좋으면
                                        찾아가겠어요날씨가 좋으면 찾아가겠어요
                                    </h3>
                                    <h4 className="author">이도우</h4>
                                    <Rating
                                        name="read-only"
                                        value={value}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <span className="rank">9</span>
                                    <img
                                        src="/images/img_book_1.jpg"
                                        alt="book_1"
                                    />
                                </div>
                                <div className="txt-box">
                                    <h3 className="name">
                                        날씨가 좋으면 찾아가겠어요 날씨가 좋으면
                                        찾아가겠어요날씨가 좋으면 찾아가겠어요
                                    </h3>
                                    <h4 className="author">이도우</h4>
                                    <Rating
                                        name="read-only"
                                        value={value}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
