import React from 'react'
//ici nous avons les 3 parties 
import "./Navbar.css"
import "@fontsource/inter";
const Navbar = () => {
  return (
    <div className='navbox te'>


{/* <p className='upertext'>$PracticeBox_Name</p> */}
     {/**************************************  FIRST PART  **********************************/}
     <div className='block-question-te'>
      <p>$PracticeBox_Name</p>
   <div className='block-question te'>
       {/* ici la partie image du question */}
       <img className='block-question-svg' style={{marginTop:"3px"}} src="./SVG/background.svg" alt="ts"/>
{/* ici la partie name question  */}
<p>Question 4/10</p>
   </div>
     </div>






  {/******************************* *=********* scd part************************** */}
<div  className='blok-Timer te'>
<img src='./SVG/clock.svg' alt="clock" width="20px" />
<p>00:59s</p>
</div>







{/*****************************  partie 3********************************** */}
    <div className='block-myScore te' >
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0H6C2.65625 0 0 2.6875 0 6C0 9.34375 2.65625 12 6 12H14C17.3125 12 20 9.34375 20 6C20 2.6875 17.3125 0 14 0ZM7.71875 6.75H6.71875V7.75C6.71875 8.1875 6.375 8.5 5.96875 8.5C5.53125 8.5 5.21875 8.1875 5.21875 7.75V6.75H4.25C3.8125 6.75 3.46875 6.4375 3.46875 6C3.46875 5.59375 3.78125 5.25 4.21875 5.25H5.21875V4.25C5.21875 3.84375 5.53125 3.5 5.96875 3.5C6.375 3.5 6.71875 3.84375 6.71875 4.25V5.25H7.71875C8.125 5.25 8.46875 5.59375 8.46875 6C8.46875 6.4375 8.15625 6.75 7.71875 6.75ZM13.4688 8.75C12.75 8.75 12.25 8.21875 12.25 7.53125C12.25 6.875 12.7812 6.28125 13.4688 6.28125C14.125 6.28125 14.6875 6.84375 14.6875 7.53125C14.6875 8.25 14.1875 8.75 13.4688 8.75ZM15.4688 5.75C14.75 5.75 14.25 5.21875 14.25 4.53125C14.25 3.875 14.7812 3.28125 15.4688 3.28125C16.1562 3.28125 16.6875 3.84375 16.6875 4.53125C16.6875 5.25 16.1875 5.75 15.4688 5.75Z" fill="#176FFF"/>
</svg>

<p>My Score : 0 Pts</p>
    </div>













    {/*//////////////////////////////// ici la partie display pour 800px  */}
  <section className='sectiona-Mobile'>
  <p className='pp'>$PracticeBox_Name</p>

<div className='firstPart'>


<div className='block-question-scdpart'>



<div className='block-question-txtimg'>

<img className='block-question-svg' style={{marginTop:"3px"}} src="./SVG/background.svg" alt="ts"/>

<div>1/10</div>

</div>
</div>



{/*****************************  partie score********************************** */}
<div className='block-myScore-scdpart' >

<svg   width="20px" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path   d="M14 0H6C2.65625 0 0 2.6875 0 6C0 9.34375 2.65625 12 6 12H14C17.3125 12 20 9.34375 20 6C20 2.6875 17.3125 0 14 0ZM7.71875 6.75H6.71875V7.75C6.71875 8.1875 6.375 8.5 5.96875 8.5C5.53125 8.5 5.21875 8.1875 5.21875 7.75V6.75H4.25C3.8125 6.75 3.46875 6.4375 3.46875 6C3.46875 5.59375 3.78125 5.25 4.21875 5.25H5.21875V4.25C5.21875 3.84375 5.53125 3.5 5.96875 3.5C6.375 3.5 6.71875 3.84375 6.71875 4.25V5.25H7.71875C8.125 5.25 8.46875 5.59375 8.46875 6C8.46875 6.4375 8.15625 6.75 7.71875 6.75ZM13.4688 8.75C12.75 8.75 12.25 8.21875 12.25 7.53125C12.25 6.875 12.7812 6.28125 13.4688 6.28125C14.125 6.28125 14.6875 6.84375 14.6875 7.53125C14.6875 8.25 14.1875 8.75 13.4688 8.75ZM15.4688 5.75C14.75 5.75 14.25 5.21875 14.25 4.53125C14.25 3.875 14.7812 3.28125 15.4688 3.28125C16.1562 3.28125 16.6875 3.84375 16.6875 4.53125C16.6875 5.25 16.1875 5.75 15.4688 5.75Z" fill="#176FFF"/>

</svg>0 Pts

{/* <p className='scorep'></p> */}

</div>


    </div>



    {/* SCD PART  */}
  {/******************************* *=********* scd part************************** */}
  <div  className='blok-Timer-scdpart'>
<img src='./SVG/clock.svg' alt="clock" style={{width:"25px" , margin:"12px"}} />
<p>00:59s</p>
</div>



</section>




















    </div>
  )
}

export default Navbar