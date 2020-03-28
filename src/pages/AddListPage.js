import React from 'react';

const AddListPage = () => {
    return (
        <div className="contents">
            <div id="AddList">
                <div className="add-wrap">
                    <h1 className="title">Add Books</h1>
                    <div className="add-form-wrap">
                        <form action="">
                            {/* 
                            <span className="input-area">
                                <select name="category" id="category">
                                    <option value="category_d">
                                        카테고리를 선택해주세요.
                                    </option>
                                    <option value="category_1">소설</option>
                                    <option value="category_2">로맨스</option>
                                    <option value="category_3">기타</option>
                                </select>
                                <i className="icon-down-open"></i>
                            </span>
                        */}
                            <span className="input-area">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="책 이름"
                                />
                            </span>
                            <span className="input-area upload">
                                <input type="file" id="image" />
                            </span>
                            <span className="input-area">
                                <input
                                    type="text"
                                    id="author"
                                    placeholder="저자"
                                />
                            </span>
                            <span className="input-area">
                                <input
                                    type="text"
                                    id="publisher"
                                    placeholder="출판사"
                                />
                            </span>
                            <textarea
                                name="description"
                                id="description"
                                cols="30"
                                rows="8"
                                placeholder="책 소개"
                            ></textarea>
                            <button className="btn-signup">등록하기</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddListPage;
