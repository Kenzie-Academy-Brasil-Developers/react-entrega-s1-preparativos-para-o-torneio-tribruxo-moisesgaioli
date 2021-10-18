import { useEffect, useState } from 'react';
import './App.css';
import Students from './components/Students';
import Home from './components/Home';

function App() {

  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(true);
  const [personRandom, setPersonRandom] = useState([]);

  useEffect( () => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
    .then(res => res.json())
    .then(res => setPerson(res))
    .catch(_ => console.log("Erro na api"));
  }, [])

  const handleClick = () => {
    setPage(false);
  }

  const randomIndex = () => Math.floor(Math.random() * ((person.length - 1) + 1));

  const validatePersonRandom = () => {

    const arrayRandomPerson = []

    for (let i = 0; i < person.length; i++) {
      if(arrayRandomPerson.length < 3) {
        let pessoa =  person[randomIndex()];

        if (!arrayRandomPerson.find(item => item.name === pessoa.name || item.house === pessoa.house)) {
          arrayRandomPerson.push(pessoa)
        }
      }
    }

    handleClick()

    setPersonRandom(arrayRandomPerson)
  } 

  return (
      <main className="main-container">
      
        {
          page  
             ? <Home validatePersonRandom={validatePersonRandom} /> 
                    : <Students personRandom={personRandom} setPage={setPage} handleClick={handleClick} validatePersonRandom={validatePersonRandom}/>   
        }
  
      </main>
  );
}

export default App;
