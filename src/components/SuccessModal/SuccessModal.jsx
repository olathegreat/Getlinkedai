import React from 'react'
import "./SuccessModal.css"

const SuccessModal = () => {
  return (
    <div className='success-modal'>

        <img src='/images/congratulation.png' alt='congratulations'/>

        <h3>
            Congratulations <br></br>
            you have successfully Registered!
        </h3>

        <p>Yes, it was easy and you did it!</p>
        <p>check your mailbox for next step<span><img src='/images/smiley.png' alt='smiley'/></span></p>


        <button>Back</button>



    </div>
  )
}

export default SuccessModal