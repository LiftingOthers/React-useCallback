import React, {memo} from 'react'

function ButtonComponent({component,click}) {
  console.log(`render component Button ${component}`)
  return (
<button className="button-30"  onClick={click}>Click Here</button>
  )
}

export default memo(ButtonComponent);