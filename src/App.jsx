import { useState } from 'react'
import Contactlist from './components/ContactList'
import './App.css'
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
    {selectedContactId ? (
      <SelectedContact setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId}/>
    ) : (
      <Contactlist 
      setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  )
}

export default App
