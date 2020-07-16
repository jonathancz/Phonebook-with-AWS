import React, {useState, useEffect} from 'react';
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
      <caption>People</caption>
      {contacts.map(contact => 
      <div>
          <table class="horizontal">
            <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="name">{contact.name}</td>
              <td data-label="lastName">{contact.lastName}</td>
              <td data-label="phoneNumber">{contact.phoneNumber}</td>
            </tr>
          </tbody>
          </table>
      </div>
        )}
    </div>
  )
}

export default App;
