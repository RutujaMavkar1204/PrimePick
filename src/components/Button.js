import React from "react"


export default function Button({
    children,
    className="",
    name="",
    type="button",
    ...props
}){
    return(
        <button className={`${className} `} {...props} >{children}</button>
    );
}