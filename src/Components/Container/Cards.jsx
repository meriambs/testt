import React from 'react'
import './Cards.css'

const Cards = ({element}) => {
  return (
      <div className='cards'>
        {/* partie lettre */}
<div className='miniCards'>
{element.num}
</div>
{/* partie checkboxet chiffre */}
<div className='chiffrebox'>


<h4 className='chiffre'>{element.element}</h4>

<div className='checkbox'>

</div>
</div>




      </div>
  )
}

export default Cards