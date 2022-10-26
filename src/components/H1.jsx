import React from 'react'

const H1 = (props) => {
    console.log(props)
    const { text, redColor, blueColor, objectOfDetails, arrayOfStudents, children } = props     //destructuring
    
  return (
    //if it's one expression, dollar sign and backtick is not needed
    <h1 className = {`${redColor && "red-color"} ${blueColor && "blue-color"}`}> 
        {text || children || "pass a prop"}
        {children}
    </h1>
  )
}

export default H1

/* 
const details ={ name:"unclebigbay", stack:"frontend"};
const students = ["rashford", "jemmy", "tfk", "roy"]

//useState
//to monitor the state of props
const [greetingText, setGreetingText] = useState("hello, world");

<H1 text ={greetingText} 
      redColor 
      objectOfDetails={details} 
      arrayOfStudents={[students]}
      // for the array, we can use curly braces and square bracket together or use only curly braces.
      /> 
      <button onClick={() => setGreetingText("enjoy your day")}>change greetingText</button>
*/
