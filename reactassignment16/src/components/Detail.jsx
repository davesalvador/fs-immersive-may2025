import { useParams, Link } from 'react-router-dom'
// useParams lets us read the URL parameters
// Link import link so we can navigate without reloading the page 

function Detail({ itemsData }) {

    // useParamas() returns an object of key/value pairs of the dynamic params.
    // In our route, we declared :id, so params.id will be a string like "3".
    const params = useParams();

    const id = Number(params.id); // Convert the id from string to number

    const item = itemsData.find(item => item.id === id); // Find the item with the matching id

    if(!item){
        return <div>Item not found</div>; // Handle case where item is not found
    }


  return (
    <main>
        <p><Link to="/">Back to Home</Link></p>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p><em>ID: {item.id}</em></p>
    </main>
  )
}

export default Detail