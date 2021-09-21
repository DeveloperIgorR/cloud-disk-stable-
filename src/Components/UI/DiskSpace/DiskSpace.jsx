import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../../context'
import d from './DiskSpace.module.css'

const DiskSpace = () => {
    const { user, setUser } = useContext(AuthContext)
    
    if(user){
    let freeSpace = Math.round((user.diskSpace - user.usedSpace)/1000000000)
    let space = Math.round(user.diskSpace/1000000000)
    let value = `${+freeSpace}%`

    return (
        <div>
            <div className={d.OutsideWrapper}>
                <div style={{ width: value, height: '20px', borderRadius: '13px', backgroundColor: '#566885' }}></div>
            </div>
            <div style={{color:'white',paddingTop:'5px'}}>
                {`Свободно${freeSpace}/${space} Гб`}
            </div>            
        </div>

    )
    }else{
    let freeSpace = 1
    let space = 10
    let value = `${+freeSpace}%`

    return (
        <div>
            <div className={d.OutsideWrapper}>
                <div style={{ width: value, height: '20px', borderRadius: '13px', backgroundColor: '#566885' }}></div>
            </div>
            <div style={{color:'white',paddingTop:'5px'}}>
                {`Свободно${freeSpace}/${space} Гб`}
            </div>            
        </div>

    )
    }
    
}
export default DiskSpace