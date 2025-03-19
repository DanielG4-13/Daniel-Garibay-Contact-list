import { useState } from "react";
import { useEffect } from "react";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (selectedContactId) {
      fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
        .then((response) => response.json())
        .then((data) => setContact(data))
        .catch((error) => console.error("Error fetching contact:", error));
    }
  }, [selectedContactId]);

  if (!contact) {
    return <div>Error man...</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>UserName:</strong> {contact.username}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Address:</strong> {contact.address.street}, {contact.address.suite}, {contact.address.city}, {contact.address.zipcode}, ({contact.address.geo.lat}, {contact.address.geo.lng})</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Website:</strong> {contact.website}</p>
      <p><strong>Company:</strong> {contact.company.name}, {contact.company.bs}, "{contact.company.catchPhrase}"</p>


      <button onClick={() => setSelectedContactId(null)}>Back to List</button>
    </div>
  );
}

export default SelectedContact;

// import { useState } from "react";
// import { useEffect } from "react";

// function SelectedContact({ selectedContactId, setSelectedContactId }) {
//   const [contact, setContact] = useState(null);

//   useEffect(() => {
//     async function fetchSelectedContact() {
//         try {
//             const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`) 
//             const result= await response.json()
//             setContact(result)
            

//         } catch (error) {
//             console.error(error)
//         }
        
//     }
//     fetchSelectedContact()
// },[selectedContactId]);

// export default SelectedContact;

