import React, { useState } from 'react';
import './home.css';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const books = [
    {
      title: 'Poetry Book',
      genre: 'Poetry',
      image: 'https://c8.alamy.com/comp/2GPP40A/poetry-and-a-magnifying-glass-on-english-word-poetry-to-symbolize-studying-examining-or-searching-for-an-explanation-and-answers-related-to-a-concept-2GPP40A.jpg',
    },
    {
      title: 'Drama Book',
      genre: 'Drama',
      image: 'https://slideplayer.com/13/3908124/big_thumb.jpg',
    },
    {
      title: 'Fiction Book',
      genre: 'Fiction',
      image: 'https://th.bing.com/th/id/OIP.1Rye2FE5FUGpcOK36l517wHaFj?w=248&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      title: 'Romance Book',
      genre: 'Romance',
      image: 'https://th.bing.com/th/id/OIP.YOQ5fdLKBjKXimJ_5TPzBgHaFj?w=260&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      title: 'Science Fiction Book',
      genre: 'Science Fiction',
      image: 'https://th.bing.com/th/id/OIP.qVOZzEd5Cm4dq8qJGORUYwHaEz?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      title: 'Horror Book',
      genre: 'Horror',
      image: 'https://th.bing.com/th/id/OIP.xjgqvzHyGVwavHvf9Ei-tgHaFj?w=202&h=152&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
  ];

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleImageClick = (genre) => {
    if (genre === 'Poetry') {
      navigate('/poetry');
    } else if (genre === 'Drama') {
      navigate('/drama');
    } else if (genre === 'Fiction') {
      navigate('/fiction');
    } else if (genre === 'Romance') {
      navigate('/romance');
    } else if (genre === 'Science Fiction') {
      navigate('/science-fiction');
    } else if (genre === 'Horror') {
      navigate('/horror');
    }
  };
  
  const filteredBooks = books.filter((book) =>
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header>
        <h1>Welcome to Our Library</h1>
        <p>Explore a world of knowledge</p>
      </header>
      <div className="container">
        <h2>Genre</h2>
        <Search onSearch={handleSearch} />
        <div className="featured-books">
          {filteredBooks.map((book) => (
            <div className="book" key={book.title}>
              <img
                src={book.image}
                alt={book.title}
                onClick={() => handleImageClick(book.genre)}
              />
              <h3 className="book-title">{book.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
