import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import AddListPage from './pages/AddListPage';
import MyPage from './pages/MyPage';
import SearchResultPage from './pages/SearchResultPage';
import BookDetailPage from './pages/BookDetailPage';

const routes = [
    { path: '/', name: '홈', component: HomePage, exact: true },
    { path: '/home', name: '홈', component: HomePage },
    { path: '/books', name: '책리스트', component: BookListPage },
    { path: '/addlist', name: '책등록', component: AddListPage },
    { path: '/mypage', name: '마이페이지', component: MyPage },
    { path: '/search/:searchVal', name: '검색결과', component: SearchResultPage },
    { path: '/book_detail/:id', name: '책상세', component: BookDetailPage },
];

export default routes;
