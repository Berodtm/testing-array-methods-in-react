import booksData from './data/booksData';
import { useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {
  const [search, setSearch] = useState('');

  const inputSearch = (e) => setSearch(e.target.value);
  const inputSearchValue = search.toLowerCase();

  const filteredSearch = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(inputSearchValue) ||
      book.author.toLowerCase().includes(inputSearchValue) ||
      book.id.toString().includes(inputSearchValue)
  );

  return (
    <>
      <label htmlFor='search'>Search Input </label>
      <input
        onChange={inputSearch}
        id='search'
        type='text'
        placeholder='Search...'
      ></input>

      <p>Searching for: {search}</p>
      <br />
      <h2>Table Test</h2>
      <Table
        key={filteredSearch.id}
        colHeadA='ID'
        colHeadB='Title'
        colHeadC='Author'
        filteredSearch={filteredSearch}
      />
    </>
  );
}

export default App;
