import React, { useState,useEffect } from 'react';
import './Books.css';
import List from "./List";
import axios from "axios"
import {  baseURL } from "./utils/constant";


const PoetryBooks = () => {
  const [input,setInput]=useState("")
  const [tasks,setTasks]=useState([]);
  const[updateUI,setUpdateUI]=useState(false);
  const [updateId,setUpdateId]=useState(null);

  useEffect(()=>{
    axios.get(`${baseURL}/get`).then((res)=>{
    console.log(res.data);
    setTasks(res.data)
  });
  
  },[updateUI]);

  const addTask=()=>{
    axios.post(`${baseURL}/save`,{task: input}).then((res)=>{
      console.log(res.data);
      setInput("");
      setUpdateUI((prevState)=>!prevState);

    })
  }
  const updateMode=(id, text)=>{
      console.log(text);
      setInput(text)
      setUpdateId(id)
  }
  const updateTask=()=>{
    axios.put(`${baseURL}/update/${updateId}`,{task:input}).then((res)=>{
      console.log(res.data);
      setUpdateUI((prevState)=>!prevState)
      setUpdateId(null)
      setInput("");
    })
  }
  const [titleSearch, setTitleSearch] = useState('');
  const [authorSearch, setAuthorSearch] = useState('');
  
  const books = [
    {
      id:1,
      title: 'Paradise Lost',
      author: 'John Milton',
      image: 'https://th.bing.com/th/id/OIP.ItLLV_tV_ljdjBLdoEc7igHaLG?w=134&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id:2,
      title: 'The Waste Land',
      author: 'T. S. Eliot',
      image: 'https://th.bing.com/th/id/OIP.r5iTCzh1h0Ak1HECMlre7wHaLH?w=202&h=304&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id:3,
      title: 'Paradise Lost',
      author: 'J A Jance',
      image: 'https://th.bing.com/th/id/OIP.uhdJLym1WQZ_lunic1x2gAHaLB?w=202&h=301&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id:4,
      title: 'Leaves of Grass',
      author: 'Walt Whitman',
      image: 'https://th.bing.com/th/id/OIP.VwnKV_bwhG9or6EIseTrxwAAAA?w=125&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
   
    {
      id:5,
      title: 'The Divine Comedy',
      author: 'Dante Alighieri',
      image: 'https://th.bing.com/th/id/OIP.L1kPJ8gP7BwyFwqGrVrgQgHaJO?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
         id:6,
        title:"Hamlet",
        author:"William Shakespeare",
        image:"https://th.bing.com/th/id/OIP.yXWTQwdiAO-3t8SFAiqKFgHaL0?w=197&h=315&c=7&r=0&o=5&dpr=1.3&pid=1.7"
     },
     {
      id:7,
      title:"Titus Andronicus",
      author:"William Shakespeare",
      image:"https://th.bing.com/th/id/OIP.MRldbecLTrOBU06yrmU6DAHaLQ?w=202&h=308&c=7&r=0&o=5&dpr=1.3&pid=1.7"
   },
   {
    id:8,
    title:"Romeo and Juliet",
    author:"William Shakespeare",
    image:"https://th.bing.com/th/id/OIP.6yZEZaz5cXRATGI0-YaMgAHaL8?w=196&h=317&c=7&r=0&o=5&dpr=1.3&pid=1.7"
 },
 
  ];
  const handleTitleSearch = (event) => {
    setTitleSearch(event.target.value);
  };

  const handleAuthorSearch = (event) => {
    setAuthorSearch(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(titleSearch.toLowerCase()) &&
    book.author.toLowerCase().includes(authorSearch.toLowerCase())
  );
  return (
    <>
      <h1>Poetry Books</h1>
      <main>
      <h3 className="title">Favourites</h3>
      <div className="input_holder">
        <input type="text" value={input} 
        onChange={(e)=>setInput(e.target.value)}
        placeholder="Add your favourite book here"/>

    <button type="submit" onClick={updateId? updateTask:addTask} >
      {updateId ? "Update Book":"Add Book"}
    </button>
      </div>
      <ul>
        {tasks.map((task)=>(
          <List 
          key={task._id} 
          id={task._id} 
          task={task.task} 
          setUpdateUI={setUpdateUI}
          updateMode={updateMode}
          />
          ))}
      </ul>
    </main>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title"
          value={titleSearch}
          onChange={handleTitleSearch}
        />
        <input
          type="text"
          placeholder="Search by author"
          value={authorSearch}
          onChange={handleAuthorSearch}
        />
      </div>
      <ul className="books-list">
        {filteredBooks.map((book) => (
          <li key={book.id} className="book-item">
            <img src={book.image} alt={book.title} />
            <div>
              {book.title} by {book.author}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default PoetryBooks;