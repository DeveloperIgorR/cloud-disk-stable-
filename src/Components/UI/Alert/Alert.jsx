import { useContext } from "react/cjs/react.development"
import { AuthContext } from "../../../context"
import a from "./Alert.module.css "

const { alert, setAlert } = useContext(AuthContext)

const Alert = ({alert, setAlert, children}) => {
    return(
        <div className={alert ? [a.modal, m.modalActive].join(" ") : a.modal} onClick={() => setAlert(false)}>
            <div className={alert? [a.content, a.contentActive].join(" ") : a.content} onClick={e => e.stopPropagation()}>
                <div className={a.inside}>
                    <h3>Информация об ошибке</h3><button>X</button>
                </div>
            {children}

            </div>
        </div>
    )
}
export default Alert