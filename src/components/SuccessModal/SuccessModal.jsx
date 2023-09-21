import React from 'react'
import "./SuccessModal.css"

const SuccessModal = ({changeToggle}) => {
  return (
    <div className='success-modal'>

        <img src='/images/congratulation.png' alt='congratulations'/>

        <h3>
            Congratulations <br></br>
            you have successfully Registered!
        </h3>

        <div className='group'>
                <p>Yes, it was easy and you did it!</p>
                <p><span>check your mailbox for next step</span><span><img src='/images/smiley.png' alt='smiley'/></span></p>


        </div>

       

        <button onClick={changeToggle}>Back</button>



        <img src="/images/greystar.png" alt="lensflare" className="successgreystar"/>
        <img src="/images/lailacstar.png" alt="star" className="successlailacstar"/>



    </div>
  )
}

export default SuccessModal