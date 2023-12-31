import React, { useEffect , useState } from 'react'
import { firestore } from './firebase'
import { collection , doc , getDoc } from 'firebase/firestore'
import Loading from './Loading'
import { useParams } from 'react-router-dom'
import Location from './Location'

// Importation d'un calendrier 

import Calendrier from './Calendrier'



const Detail = () => {

  const {idlocation} = useParams()
  console.log('idLocation :' , idlocation)

  const [location , setLocation] = useState({})
  const [isLoading , setIsLoading] = useState(true) ; // Lancer le chargement

  const click = () => { 

    window.my_modal_1.showModal()

  }


  const getOneLocation = async () =>{

    console.log('start')

    setIsLoading(true) // Debut du chargement

    const docLocationRef = doc(collection(firestore, 'locations'), idlocation)
    const snapLocation = await getDoc(docLocationRef)


    if (snapLocation.exists()) {

      setLocation(snapLocation.data());
      
    }
    setIsLoading(false) // fin du chargement

  }

  useEffect(() => {

    getOneLocation()
  
  }, [])
  

  return (
    
    <div className="relative mx-auto w-full max-w-sm pt-6">

      <div className='py-5'>
        <h1 className='text-accent text-3xl text-start font-serif font-semibold underline'>{location.nom}</h1>
        <h1 className='text-accent text-2xl text-start font-serif font-semibold py-1'>{location.lieux}</h1>
      </div>
  
      <div className="rounded-lg">
        <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
        
          <img className='h-full w-full' src={location.image} alt="" />
        

          <div className="absolute bottom-0 mb-3 flex justify-center">
            <div className="flex space-x-5 overflow-hidden rounded-lg bg-white/70 px-4 py-1 shadow">
              <p className="flex items-center font-medium text-gray-500">
                <svg className="mr-2 h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path></svg>
                {location.chambre}
              </p>

              <p className="flex items-center font-medium text-gray-500">
                <svg className="mr-2 h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path></svg>
                {location.parking}
              </p>

              <p className="flex items-center font-medium text-gray-500">
                <svg className="mr-2 h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"></path></svg>
                {location.douche}
              </p>
            </div>
          </div>

        
        </div>

        <div className="">
          <div className="mt-4 grid grid-cols-2">
            <div className="flex items-center">
            
            </div>

            <div className="flex items-center justify-end">
              <p className="text-white inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                <span className="text-sm uppercase"> € </span>
                <span className="text-lg">{location.prix}</span>/m
              </p>
            </div>
          </div>

          <div className='mt-2 border-t border-gray-200 pt-3'>{location.description}</div>

          <div className="form-control mt-6">
              <button onClick={click} type="submit" className='inline-block cursor-pointer rounded-md bg-accent px-4 py-3 text-center text-xl font-semibold text-white font-serif'>Réserver</button>
          </div>
        
        </div>
      </div>
        
      <div className="carousel w-full py-10">
        <div id="item1" className="carousel-item overflow-hidden rounded-lg w-full">
          <img src={location.carousel1} className="w-full" />
        </div> 
        <div id="item2" className="carousel-item overflow-hidden rounded-lg w-full">
          <img src={location.carousel2} className="w-full" />
        </div> 
        <div id="item3" className="carousel-item overflow-hidden rounded-lg w-full">
          <img src={location.carousel3} className="w-full" />
        </div> 
        <div id="item4" className="carousel-item overflow-hidden rounded-lg w-full">
          <img src={location.carousel4} className="w-full" />
        </div>
      </div> 
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-sm bg-accent text-sm font-serif">1</a> 
        <a href="#item2" className="btn btn-sm bg-accent text-sm font-serif">2</a> 
        <a href="#item3" className="btn btn-sm bg-accent text-sm font-serif">3</a> 
        <a href="#item4" className="btn btn-sm bg-accent text-sm font-serif">4</a>
      </div>

        <div className='py-20'>
          <p className='font-serif font-semibold text-sm text-white'>Retourner vers la page d'<a href="/" className='underline'>accueil</a></p>
        </div>

        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
            <Calendrier/>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="inline-block cursor-pointer rounded-md bg-accent px-4 py-3 text-center text-xl font-semibold text-black font-serif">Fermer</button>
              <button className="inline-block cursor-pointer rounded-md bg-accent px-4 py-3 text-center text-xl font-semibold text-black font-serif">Valider</button>
            </div>
          </form>
        </dialog>

    </div>

    
  )
}

export default Detail