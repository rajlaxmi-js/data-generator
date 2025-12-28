import { useEffect,useState } from "react"

const App = () => {
    const [joke,setJoke]=useState(null);
    async function fetching() {
        let Data = await fetch('https://official-joke-api.appspot.com/random_joke');
        let Fdata = await Data.json();
        setJoke(Fdata)
        
    }
    useEffect(()=>{
        setTimeout(()=>{
            fetching()
        },1000)
    },[])
  return (
    <div className="joke">
      <h1>Joke Generator</h1>
      { joke === null ?(
        <h2 className="loading">loading...</h2>
      ):(
          <>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}😁😀😅😆</p>
       </>
     )}
      <button onClick = {fetching}>Get New Joke</button>
     </div>
  )
}

export default App
