import React, { useState, useCallback, useEffect } from 'react';
import SearchResultItem from '../components/SearchResultItem';
import axios from 'axios';

const SearchResultPage = ({match: {params}}) => {
    let [data, setData] = useState([]);
    let [view, setView] = useState({});
    let limit = 12;
    let page = 1;
    let searchVal = params.searchVal;
    const getAll = useCallback(
        page => {
            axios
                (process.env.REACT_APP_API_URL + '/books', {
                    params: {
                        method: 'GET',
                        page: page,
                        limit: limit,
                        searchVal: searchVal,
                        sort : 'createdAt'
                    },
                })
                .then(res => {
                    console.log(res)
                    setData(res.data.rows);
                    setView(res.data);
                });
        },
        [limit,searchVal],
    );

    useEffect(() => {
        getAll();
    }, [getAll, limit, page, searchVal]);
    
    return (
        <div className="contents" style={{ width: '1024px' }}>
            <div id="searchResult">
                <h3 className="result-title">
                    <span>{params.searchVal}</span> 도서 검색 결과 ({view.count})
                </h3>
                <div className="sort-box">
                    <span>인기순</span>
                    <span>최신순</span>
                    <span>평점순</span>
                    <span>리뷰 많은순</span>
                </div>
                <SearchResultItem 
                    data={data}
                />
            </div>
        </div>
    );
};

export default SearchResultPage;
