import React from 'react';

const NewsList = ({ articles }) => {
    return (
        <div className="news-list">
            {articles.map((article, index) => (
                <div key={index} className="news-item">
                    <h3>{article.webTitle}</h3>
                    <p>
                        <a href={article.webUrl} target="_blank" rel="noopener noreferrer">
                            Читать статью
                        </a>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default NewsList;