import React, { useEffect, useState } from 'react'

const ButtonLoading = () => {

    const [wid, setWid] = useState(0);
    const [id, setId] = useState(null);


    useEffect(() => {
        if(wid >= 500){
            clearInterval(id);
            setId(null);
        }


    },[wid])
    const inc = () => {
        if (wid < 500 && !(id)) {
            setId(setInterval(() => {
                setWid((prev) => prev + 100);
            }, 500));
        }
    }

    const stop = () => {
        if (id) {
            clearInterval(id);
            setId(null);
        }
    }

    const reset = () =>{ 
        stop();
        setWid(0);
    }
  return (
        <div style={{width: "100vw" , height: "100vh" , backgroundColor: "black" , display: "flex" , justifyContent: "center" , alignItems: "center" , flexDirection: "column" }}>

            <div id="outer" style={{height: "14px" , width: "504px" , backgroundColor: "white" , border:"2px solid red" }} >

                <div id='inner' style={{height:"10px" , width: `${wid}px`, backgroundColor: wid <300 ? "red" : ( wid <435 ? "yellow" : "green"), transition: "width 0.5s ease-out" }}>

                </div>

            </div>
          <div className="flex gap-5 border-2 py-2 px-6 border-white mt-5">
            <button onClick={inc} className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'>Increase</button>
            <button onClick={stop} className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>Stop</button>
            <button onClick={reset} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Reset</button>  
          </div>



        </div>
  )
}

export default ButtonLoading