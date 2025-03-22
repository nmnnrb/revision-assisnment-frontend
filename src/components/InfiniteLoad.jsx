import {useState , useEffect} from 'react'

export default function InfiniteLoad() {

    const [wid,setWid] = useState(0);

    useEffect(() => {
        console.log("rerender: 1")
    const interval = setInterval(() => {
      setWid((prev) => (prev < 400 ? prev + 100 : 0)); 
        
        // Reset after reaching 400
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
     <div className="flex flex-col gap-12 bg-black h-screen w-screen justify-center items-center">
      <h1 className='text-white text-3xl md:text-5xl italic  mx-auto text-center'>
        Loading ...<span className='text-gray-500  text-lg font-black' >  [Forth and Back] </span>
      </h1>
         <div id="outer" style={{backgroundColor: "white" , border: "0.1px solid red" ,
                         height: "12px" , width: "400px", position: "relative"      
                 }}>

                    <div id="inner" style={{height:"10px" , width: `${wid}px`, backgroundColor: wid <= 250 ? "red" :  (wid <=345 ? "yellow" : "green")  , transition: "width 0.5s ease-out"}}>
                         </div>

            </div>
     </div>  
  )
}


// import {useState , useRef, useEffect} from 'react'
// export default function App() {
//     const [barWidth, setBarWidth] = useState(0)
//     const inter = useRef(null);
//     const [load,setLoad] = useState (true);

//         const start = () => {
//             if(barWidth <400 && !(inter.current) ){
//              inter.current =  setInterval(() => {
//                     setBarWidth(e => e+10);
//                 }, 100)
//                 setLoad(false);
//             }
//         }

//          const stop = () => {
//             if(inter.current){
//                 clearInterval(inter.current);
//                 inter.current = null;
                
//             }
//             return  setLoad(true);
//         }
//      const reset = () => {
//                if(inter.current){
//                 clearInterval(inter.current);
//                    inter.current = null;
//             }
//          setBarWidth(0);
//        return  setLoad(true);
//         }

    
    
//   return (
//     <div style={{backgroundColor: "white" , border: "0.1px solid red" ,
//                         height: "10px" , width: "400px"      
//                 }}>

//         <div style={{height: "10px" , maxWidth: `${barWidth}px` ,
                     
//                        backgroundColor: barWidth <= 250 ? "red" :  (barWidth <=345 ? "yellow" : "green") ,
//                     }}
//             className="bar" >
//         </div>

//         <div style={{display: "flex" , flexDirection: "row" , gap: "25px" , marginTop: "50px" ,
//                         justifyContent: "center" , border: "1px solid grey", padding : "15px 10px" , 
//                      borderRadius : "100px"
//                     }} >
//             <button onClick={start} style={{backgroundColor: "green" , color: "white" , padding : "6px 12px" , border: "1px solid black" ,
//                  borderRadius: "50px"}}> Start</button>
//             <button onClick={stop} style={{backgroundColor: "red", color: "white" , padding : "6px 12px" , border: "1px solid black" ,
//                  borderRadius: "50px"}} > Stop</button>
//             <button onClick={reset} style={{backgroundColor: "yellow" , padding : "6px 12px" , border: "1px solid black" ,
//                  borderRadius: "50px"}}> Reset</button>
//         </div>
//     </div>
      
//   )
// }
