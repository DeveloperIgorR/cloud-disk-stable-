import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../../context'
import u from './Uploader.module.css'

const Uploader = (props) => {
    const {download,setDownload} = useContext(AuthContext)

    return(
        <div className={u.uploader}>
            <div className={u.header}>
                <h4>загрузки</h4>
                <button onClick={() => setDownload(false)}>X</button>
            </div>

        </div>
    )
}
export default Uploader