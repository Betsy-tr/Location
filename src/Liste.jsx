import React from 'react'
import { firestore } from './firebase'
import { collection , query , getDocs } from "firebase/firestore";
import { useState , useEffect } from 'react'
import Loading from './Loading'
import Location from './Location';


const Liste = () => {

  const [locations  , setLocations] = useState([]) ;
  const [isLoading , setIsLoading] = useState(true) ; // Lancer le chargement

  const getAllLocation = async () => {

    console.log('start')

    setIsLoading(true) ; // Début du chargement

    const rqLocations = query(collection(firestore, "locations"));
    const snapLocations = await getDocs(rqLocations);
    console.log('snapLocations')

    // Vérification pour savoir si snapLocations est vide ou pas
    if (!(snapLocations.empty)) {
      
      const dataLocations = snapLocations.docs.map(item=>{

        return{id: item.id, ...item.data() }

      })
      console.log('dataLocations :' , dataLocations) ;

      setLocations(dataLocations) ;
    }
    setIsLoading(false); // Fin du chargement

  }

  useEffect(() => {

    getAllLocation() ;

  }, [])

  return (
    <div>

      <h1 className=' text-5xl text-accent font-extrabold font-serif'>Bienvenue sur location villas de rêve</h1>
      <br/>
      <h3 className='font-serif text-2xl text-white'>Tu souhaites t'évader, te changer les idées entre amis, ou en famille ? Tu es au bon endroit </h3>
      <h3 className='font-serif text-2xl text-white'>Ici, tu trouveras tous types de villas, splendides, luxueuses, situées dans des lieux incroyables et paisibles</h3>
      <br/>

      <div className='flex flex-wrap gap-3 py-3'>
        {isLoading ? <Loading/> : locations.map(locationItem=><Location key={locationItem.id} data={locationItem}/>)}
      </div>

    </div>
  )
}

export default Liste