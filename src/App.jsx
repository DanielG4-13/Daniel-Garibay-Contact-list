import { useState } from 'react'
import Contactlist from './components/ContactList'
import './App.css'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
    {selectedContactId ? (
      <div>Selected Contact View</div>
    ) : (
      <Contactlist 
      setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  )
}

export default App
