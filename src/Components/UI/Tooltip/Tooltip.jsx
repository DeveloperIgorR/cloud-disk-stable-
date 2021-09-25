import { useContext, useState } from "react"
import { AuthContext } from "../../../context"

const Tooltip = ({children}) => {
    const {visible,setVisible} = useContext(AuthContext)

    return(
        <div>
           {children}
        </div>
    )
}
export default Tooltip