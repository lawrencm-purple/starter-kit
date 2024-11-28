import React from "react"

type Props = {
    firstName: string;
    lastName: string;
    phone: string;
}

const MyComponent:React.FC<Props> = (props) => {
  return (
    <div>MyComponent</div>
  )
}

export default MyComponent