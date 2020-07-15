import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {getContacts} from './services/contacts'


function App() {
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    getContacts().then(results => {
      console.log('After getContacts...', results)
      setContacts(results)
    })
  }, [])
  
  return (
    <div className="App">
      <ol>
        {contacts.map(contact => 
        <li>{contact.name} {contact.lastName} {contact.phoneNumber} Hello
        </li>)}
      </ol>
    </div>
  )
}

export default App;
