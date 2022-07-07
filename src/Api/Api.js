import React, { useContext } from 'react'
import { Context } from '../App'

function Api() {
    const getContext = useContext(Context)
    const {api} = getContext
  return (
    <div>
        {
            api.map((itm,idx)=> <>
                {JSON.stringify(itm)}
            </>)
        }
    </div>
  )
}

export default Api