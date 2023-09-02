import { useState } from 'react'
import CardTeam from './components/cards/index';
import './App.css'
let nextId = 0;

function App() {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [cards, setCards] = useState([]);
  const [list, setList] = useState([]);

  const addTeam = (e,id,name)=>{
      if( list.length < 3){
        setList( [...list, {idList:id,nameList:name}] )
        setCards(cards.filter( card  => card.id !== list.idList))
        
      }
    }
    
    
  
 
  console.log(list)
  console.log(cards)
  
  return (
    <>
      <div className="row text-bg-dark">
        <div className="col-4 ps-5">
          <h1>Team</h1>
          <label className="form-label ">Name</label>
          <input className="form-control "
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label className="form-label ">Photo </label>
          <input className="form-control "
            value={photo}
            onChange={e => setPhoto(e.target.value)}
          />
          <button className="btn btn-primary mt-3" onClick={() => {
            setCards([
              ...cards,
              { id: nextId++, name: name, photo: photo }
            ]);
          }}>Save</button>
        </div>

        <div className="col-8 d-flex flex-wrap gap-3">
          <>
            {cards.map(card => (
              <CardTeam
              photo={card.photo}
              id={card.id}
              name={card.name}
              add={addTeam}
              ></CardTeam>
            ))}
          </>
        </div>
        
      </div>
      
        
      <div className='mt-3'>
              <h3>Team</h3>
              {
                list.length >= 3 ? <div className="alert alert-warning" role="alert">
                The team is only 3 people
            </div> : null
              }
              {
                  list.map(( person )=>{
                      return <ul  key={person.idList} className="list-group mb-1">
                        <li className='list-group-item bg-primary text-white fw-bold'>
                          <p>{person.nameList}</p>
                        </li>
                      </ul>
                  })
              }
            </div>
         
      
      


    </>
  );
}

export default App
