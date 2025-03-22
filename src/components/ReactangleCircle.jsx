import { useState } from 'react'

function ReactangleCircle() {

  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState('right');
  // const clickHandle = () => {

  //   if(direction === 'right'){
  //     if(position <=400){
  //       setPosition((p) => p+ 450)
  //       }else{
  //         setDirection('left')
  //       }
  //   }


  //   if(direction === 'left'){
  //     if(position > 0){
  //       setPosition((p) => p - 450);
        
  //     }else{
  //       setDirection('right');
  //     }

  //   }

  //   console.log(position);
  // }
  const clickHandle = () => {

    if(direction === 'right'){
      setPosition((p) => p+ 450);
      setDirection('left');
    }else{
      setPosition((p) => p - 450);
      setDirection('right');
    }
    console.log(position);
  }
  return (
    <div className=" flex flex-col pt-5 justify-center items-center bg-zinc-900 h-screen max-w-screen border-white border-[2px]">
      <h1 className='text-5xl text-cyan-200  justify-start mb-3'>Rectangle and Circle</h1>

      <div className=" relative  flex flex-col items-center justify-center h-screen">
      <div style={{width: "550px"}} className=" relative border-2 border-amber-50  h-[250px]  p-10 rectangle">
            <div style={{
              left: `${position}px`,
              transition: 'left 0.8s'
            }} className={`absolute ml-3 mr-2 w-[50px] h-[50px] border-2 border-amber-50  bg-red-600 flex justify-center items-center rounded-full`}>
            </div>
      </div>

        <button onClick={clickHandle} className=" border-2  border-amber-50 rounded-full px-5 hover:bg-blue-500 text-cyan-300 transition duration-300 my-5" >  Move </button>
    </div>
    </div>
  )
}

export default ReactangleCircle
