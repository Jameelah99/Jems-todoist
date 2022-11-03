import React from 'react'
import { useState } from 'react'
import styles from "./form.module.css"

export const PlayGroundForm = () => {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);

  const handleUsernameChange = (e) =>{
      setusername(e.target.value)
  };

  const handlePasswordChange = (e) =>{
    setpassword(e.target.value)
  };

  const handleSubmit =() =>{
    setisSubmitting(true)
    console.log("submitting form");
    console.log(`${username} - ${password}`);

    setTimeout(()=>{
      setisSubmitting(false);
      console.log("form submitted")
    }, 4000);
  }


  return (
    <React.Fragment>

      <form>
        <input
         
          className={styles.inputBox}
          type="text" 
          placeholder='Enter Username'
          value= {username}
          onChange={handleUsernameChange}
        />
        <input
          className={styles.inputBox} 
          type="password" 
          placeholder='Enter Password'
          value= {password}
          onChange= {handlePasswordChange}
        />
          <button className={styles.btn} disabled={isSubmitting} type="button" onClick={handleSubmit}>
          {isSubmitting ? "Loading" : "Login"}
        </button>
      </form>
      {isSubmitting ? (
        <h3>Form is submitting, please don't close this window! </h3>
        ) : null }
    </React.Fragment>
  )
}
