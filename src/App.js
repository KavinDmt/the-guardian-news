import React, { useState } from 'react';
import axios from 'axios';
import NewsSearch from './components/NewsSearch';
import NewsList from './components/NewsList';
import './App.css';

const API_KEY = '623f36ca-1fab-4908-adf0-37321113063b';

function App() {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState('');

    const fetchNews = async (searchQuery, page = 1) => {
        try {
            const response = await axios.get(
                `https://content.guardianapis.com/search?q=${searchQuery}&page=${page}
&api-key=${API_KEY}`
            );

            setArticles(response.data.response.results);
            setQuery(searchQuery);
            setCurrentPage(page);
        } catch (error) {
            console.error('Ошибка при загрузке новостей:', error);
        }
    };

    const handlePageChange = (direction) => {
        const nextPage = currentPage + direction;
        if (nextPage > 0) {
            fetchNews(query, nextPage);
        }
    };

    return (
        <div className="app">
            <h1>Новости The Guardian</h1>
            <NewsSearch onSearch={(query) => fetchNews(query)} />
            <NewsList articles={articles} />
            {articles.length > 0 && (
                <div className="pagination">
                    <button onClick={() => handlePageChange(-1)}>Предыдущая</button>
                    <span>Страница: {currentPage}</span>
                    <button onClick={() => handlePageChange(1)}>Следующая</button>
                </div>
            )}
        </div>
    );

}

export default App;