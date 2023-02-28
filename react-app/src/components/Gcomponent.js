import React from 'react'

const Gcomponent = ({data}) => {

  return (

  
    <div id='galle'>
        {
            data && data.map((slide,index) => {
                return (
                    <>
                    <div id="myDiv"  key={index}>
                        <img class="grid" src={slide.name} alt=''/>
                    </div>
                    </>
                )
            })
        }
        <img src={data.data} alt=''/>
    </div>
  )
}

export default Gcomponent