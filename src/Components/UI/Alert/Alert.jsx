import { useContext } from "react/cjs/react.development"
import { AuthContext } from "../../../context"
import a from "./Alert.module.css"

const Alert = ({children}) => {
    
    const { alert, setAlert } = useContext(AuthContext)

    return(
        <div className={alert ? [a.modal, a.modalActive].join(" ") : a.modal} onClick={() => setAlert(false)}>
            <div className={alert? [a.content, a.contentActive].join(" ") : a.content} onClick={e => e.stopPropagation()}>
                <div className={a.inside}>
                    <h3>Информация об ошибке</h3>
                </div>
            {children}

            </div>
        </div>
    )
}
export default Alert