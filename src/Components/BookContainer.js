import React from 'react'
import { Image } from 'semantic-ui-react'
import { useState } from 'react'

export default function BookContainer() {

    const [clicked, setClicked] = useState(false)

    const handleOnClick = () => {
        console.log('clieck')
        setClicked(!clicked)
    }

    if(!clicked){
        return (
            <div> 
               <Image onClick={handleOnClick} src="https://foreignpolicy.com/wp-content/uploads/2019/09/new_Uighur-Muslims-refugees-China-Turkey-DSC_2175.jpg" centered size="mini" style={{'marginLeft': '200px'}}/>
            </div>
        )
    }else{
        return (
            <div> 
               <Image onClick={handleOnClick} src="https://img11.360buyimg.com//n0/jfs/t2983/197/1803794161/1234671/74cadcbe/57903192Ne8445616.jpg" centered size="mini" style={{'marginLeft': '200px'}}/>
            </div>
        )
    }
    
}
