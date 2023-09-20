import React, {useState} from 'react'
import Nav from '../../components/Nav/Nav'
import "./RegisterPage.css"

const RegisterPage = () => {
    const [teamInfo, setTeamInfo] = useState({});
  return (
    <div className='register-page'>
        <Nav/>

        <main>


            <div className='left'>
                <img src='/images/worker.png' alt='worker'/>

            </div>

            <div className='right'>

                <form>
                    <h3>Register</h3>
                    <img src='/images/movement.png' alt='movement'/>

                    <h2>Create Your Account</h2>

                    <div className='form-row'>
                        <div className='form-group'>
                            <label>Team's Name</label>
                            <input onChange={(e)=>setTeamInfo({...setTeamInfo, team_name:e.target.value})} value={teamInfo.team_name}  type='text' placeholder='Enter the name of your group'/>

                        </div>


                        <div className='form-group'>
                            <label>Phone</label>
                            <input onChange={(e)=>setTeamInfo({...setTeamInfo, phone_number:e.target.value})} value={teamInfo.phone_number}  type='text' placeholder='Enter your phone number'/>

                        </div>

                    </div>


                    <div className='form-row'>
                        <div className='form-group'>
                            <label>Email</label>
                            <input onChange={(e)=>setTeamInfo({...setTeamInfo, email:e.target.value})} value={teamInfo.email}  type='text' placeholder='Enter your email address'/>

                        </div>


                        <div className='form-group'>
                            <label>Phone</label>
                            <input onChange={(e)=>setTeamInfo({...setTeamInfo, project_topic:e.target.value})} value={teamInfo.project_topic}  type='text' placeholder='What is your group project topic'/>

                        </div>

                    </div>


                    <div className='form-row'>
                        <div className='form-group'>
                            <label>Category</label>
                            <select onChange={(e)=>setTeamInfo({...setTeamInfo, category:e.target.value})} value={teamInfo.category}>
                                <option>Select Your Category</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                         
                        </div>


                        <div className='form-group'>
                            <label>Group Size</label>
                            <select onChange={(e)=>setTeamInfo({...setTeamInfo, group_size:e.target.value})} value={teamInfo.group_size}>
                                <option>Select</option>
                                <option>2</option>
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                            </select>
                
                        </div>

                    </div>

                    <p>Please review your registration details before submitting</p>

                    <div className='checker-row'>
                        <input type='checkbox' value={teamInfo.privacy_poclicy_accepted} onChange={(e)=>setTeamInfo({...setTeamInfo, privacy_poclicy_accepted:e.target.value})}/>
                        <p>I agree with the event terms and conditions and privacy policy</p>
                    </div>

                    <button> Register Now</button>
                </form>

            </div>

            

        </main>

      <img src="/images/lensflarepurple.png" alt="lensflare" className="firstlensflare"/>
      <img src="/images/lensflarepurple.png" alt="lensflare" className="secondlensflare"/>
      <img src="/images/lailacstar.png" alt="star" className="lailacstar"/>
      <img src="/images/lightpurplestar.png" alt="lensflare" className="lightpurplestar"/>
      <img src="/images/outlinestar.png" alt="lensflare" className="outlinestar"/>
      <img src="/images/greystar.png" alt="lensflare" className="greystar"/>
      <img src="/images/whitestar.png" alt="lensflare" className="whitestar"/>
  

    </div>
  )
}

export default RegisterPage