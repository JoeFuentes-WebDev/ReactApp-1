import { useState, useEffect, useContext } from 'react';
import './css/Names.scss';
import { NamesContext } from './App';


const Names = () => { 

  const setDefaultTitle = () => { document.title = 'Learning React' };
  const setTitle = () => { document.title = personName }
  const styleTitle = () => { document.title =  `"[${document.title}]"`; }
  const [ personName, setPersonName ] = useState('');
  const [ newPerson, setNewPerson] = useState({name: '', age: 0})
  
  useEffect(setDefaultTitle, []);
  useEffect(setTitle)

  const defaultNames = useContext(NamesContext)
  const [people, setPeople ] = useState(defaultNames);
  const setName = (name) => {
    setPersonName((oldName)=> {
      console.log(' this is the FUNCTION way to useState')
      console.log('Names:', oldName, name);
      return name
    });
  };
  useEffect(styleTitle, [personName]);
  const clear = () => setPersonName('');
  const pending = () => setPersonName('---');

  const incrementUserAge = (e) => {
    e.stopPropagation();
    const person = people.find(p => p.id === parseInt(e.target.name));
    person.age++;
    setPeople([...people]);
  };

  const deleteUser = (e) => {
    e.stopPropagation();
    const filteredPeople = people.filter(p => p.id !== parseInt(e.target.name));
    setPeople(filteredPeople);
  }

  const prepNewPerson = (e) => {
    setNewPerson({...newPerson, [e.target.name]: e.target.value});
  }

  const addNewPerson = () => {
    if (newPerson.name && newPerson.age) {
      newPerson.id = people.reduce((max, p) => p.id > max ? p.id : max, 0) + 1;
      setPeople((people) => { 
        return [...people, newPerson]
      });
      setNewPerson({name: '', age: 0});
    }
  }

  const data = people && people.map(row => {
    const { id, name, age } = row;
    return  <li key={id} data-testid={`item-${id}`}
                onClick={() => setName(name)} 
                onMouseOver={pending} 
                onMouseOut={clear}>
                
              <span>{ id }</span>
              <span data-testid={`name-${id}`}>{ name }</span>
              <span data-testid={`age-${id}`}>{ age }</span> 
              <button name={id} data-testid={`increment-${id}`} onClick={incrementUserAge}>+</button>
              <button name={id} onClick={deleteUser}>delete</button>
            </li>;
  });
  
  return <div data-testid='names-list'>
          <ul className='name-list'>
            <li><span>id</span> <span>name</span> <span>age</span> <button></button></li>
            { data }
          </ul>
          <input data-testid='name-input' name='name' onChange={prepNewPerson} value={newPerson.name}></input> 
          <input data-testid='age-input' name='age' onChange={prepNewPerson} value={newPerson.age}></input>
          <button data-testid='add-person' onClick={addNewPerson}>add</button>
          <Person person={personName} />
        </div>
}

const Person = ({ person }) => <h2 data-testid='person'>{ person }</h2> ;
   
export default Names;