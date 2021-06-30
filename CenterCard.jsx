import React, {useState, useRef, useEffect} from "react"

const myStatement = ["My name is Stella",
                     "i enjoy coding, it's fun",
                     "i hope to be simply the best"]
const myColor = ["blue","green","pink","yellow"]

const myImage =["./Asset/1.jpg",
                "./Asset/2.jpg",
                "./Asset/3.jpg",
                "./Asset/4.jpg",
                "./Asset/5.jpg"]

const CenterCard = () =>{
    const bgClr = useRef()

    const[counter, setCounter] = useState(0)
    const add= () =>{
        setCounter(counter + 1)
        console.log(counter)}
    const sub = () =>{
        setCounter(counter - 1)
        console.log(counter) }
    const remov = () =>{
        if (counter === 0){
            setCounter(myStatement.length - 1)}
            else{setCounter(counter - 1)}
    }

    useEffect(() =>{
        setInterval(()=>{
            setCounter((r)=> r + 1)
        }, 5000);
    },[])

    // useEffect(() => {
    //     bgClr.current.style.color =
    //         myColor[Math.floor(Math.random()*myColor.length)]
    // },[counter])
    
    return(
        <div style = {{
            width:"400px",
            height:"30px",
            backgroundColor:"whitesmoke",
            borderRadius:"10px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }}>
            <div style = {{
                width:"400px",
                height:"300px",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                padding: "0 30px",
            }}>
               <button onClick={
                    ()=>{
                        
                        remov()
                    }
                }>
                    decrease
                </button>
                
            <div style = {{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
            }}>
                {/* ref ={bgClr} */}
                <div style = {{
                     color:"red",
                    }}> <h1>{counter}</h1></div>
                    <div>{myStatement[counter%myStatement.length]}</div>
                    <div style ={{
                        width:"400px",
                        height:"300px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                    }} >
                        <img src = {myImage[counter% myImage.length]}
                            style = {{
                            width:"400px",
                            height:"300px",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            borderRadius:"10px",
                            objectFit:"cover",
                             }}/>
                    </div>
                    {/* <button onClick ={()=>{
                //   const rand = Math.floor(Math.random()*myStatement.length)
                //   console.log(myStatement[rand])
                  }}> tap

              </button> */}


                </div>
              <button onClick = {
               () =>{ add()}
               }> increase
              </button>

              
            </div>


        </div>
    )
}

export default CenterCard;