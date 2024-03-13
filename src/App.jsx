import { useState } from 'react'
import './App.css'
import ShowWord from './Components/ShowWord';

function App() {
  const [word, setWord] = useState();
  const [words, setWords] = useState([]);
  
  function handleSubmit(e){
    e.prevenDefault();
    if (word.trim() === '') {
      alert('Please, type any word')
      return
    }
    setWord('');
    getWord(word);
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3ac3440c28msh6fe6f6c0213bd26p18a7d9jsn5b62a7ce2da2',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };

  async function getWord(word){
    try {
      const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`;
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.list)
      setWords(result.list);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className='containerApp'>
        <h1 className='title'>Word App</h1>
        <form onSubmit={handleSubmit}>
          <input className='input' type="text" value={word} onChange={(e) => getWord(e.target.value)}/>
        </form>
      </div>
        <ShowWord words={words} />
    </>
    
  )
}

export default App
