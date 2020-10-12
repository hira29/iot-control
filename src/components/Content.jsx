import React from "react";

const Content = ({children, value, index}) => (
 <div hidden={value !== index}> { value === index && (<>{children}</>)} </div> 
)

export default Content;
