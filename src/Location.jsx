import React from 'react'

const Location = ({data}) => {
  return (
    <div className="card w-96 bg-base-100   shadow-xl">
        <figure><img src={data.image} alt=" " className='  w-56 h-56'/></figure>
        <div className="card-body">
            <a href={'/detail/'+ data.id}><h1 className="text-white text-2xl text-center font-serif font-semibold">{data.nom}</h1></a>
            
        </div>
    </div>
  )
}

export default Location