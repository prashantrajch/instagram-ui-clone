
import React, { useState } from 'react'
import InstagramContext from './ContextCreate'

function InstagramState({children}) {
    const [postMenuActive,setPostMenuActive] = useState(false);

    function handlePostMenuClick(){
        setPostMenuActive(!postMenuActive);
    }

  return (
    <InstagramContext.Provider value={{handlePostMenuClick,postMenuActive}}>
        {children};
    </InstagramContext.Provider>
  )
}

export default InstagramState
