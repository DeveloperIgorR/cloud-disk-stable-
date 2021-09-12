import f from './FileList.module.css'
import bigFolder from '../../Asets/Images/fxemoji_filefolder (2).png'
import bigerFolder from '../../Asets/Images/fxemoji_filefolder (3).png'
import downloadIcon from '../../Asets/Images/ant-design_cloud-download-outlined (1).png'
import smallFolder from '../../Asets/Images/fxemoji_filefolder.png'
import smallFile from '../../Asets/Images/flat-color-icons_file.png'
import bigFile from '../../Asets/Images/flat-color-icons_file (1).png'
import bigerFile from '../../Asets/Images/flat-color-icons_file (3).png'
import deleteIcon from '../../Asets/Images/Vector 9.png'
import heartIcon from '../../Asets/Images/heart-svgrepo-com 1.svg'

const FileList = (props) => {

   function onDoubleClick (event){
    props.setParentDir(event)
    props.setPreviosDir([...props.previosDir,props.parentDir])
   }   

    switch (props.type ) { 
        case'LIST':
        return (
            <div>
                {props.files.map((currentFolder) => {
                    return <div key={currentFolder._id} className={f.openFolders}>
                        <div className={f.leftGroopIcons}>
                            <button><img src={downloadIcon} /></button>
                            {(props.docType.pop() === 'dir'||'')
                                ?<img onDoubleClick={() => onDoubleClick(currentFolder._id)} src={smallFolder} />
                                :<img onClick={() => onDoubleClick(currentFolder._id)} src={smallFile} />
                            }
                            
                            <p>{currentFolder.name}</p>
                        </div>
                        <div className={f.rightGroopIcons}>
                            <p>{currentFolder.date}</p>
                            <p>{currentFolder.size}</p>
                            <button onClick={() => props.delFiles(currentFolder)}><img src={deleteIcon} /></button>
                            <button onClick={() => props.onHeartIconClick(currentFolder)} ><img src={heartIcon} /></button>
                        </div>
                    </div>
                })}
            </div>
        )
        case'PLATE':
        return(
            <div className={f.openGroopFolders}>
                {props.files.map((currentFolder) => {
                    return <div key={currentFolder._id} >                        
                        <div className={f.iconGroop} >                            
                        {(props.docType.pop() === 'dir'||'')
                                ?<img onDoubleClick={() => onDoubleClick(currentFolder._id)} src={bigFolder} />
                                :<img onClick={() => onDoubleClick(currentFolder._id)} src={bigFile} />
                            }
                            <p>{currentFolder.name}</p>
                        </div>
                    </div>
                })}
            </div>
        )
        case'BIG_PLATE':
        return(
            <div className={f.openGroopFolders}>
                {props.files.map((currentFolder) => {
                    return <div key={currentFolder._id}>                        
                        <div className={f.bigIconGroop} >                            
                        {(props.docType.pop() === 'dir'||'')
                                ?<img onDoubleClick={() => onDoubleClick(currentFolder._id)} src={bigerFolder} />
                                :<img onClick={() => onDoubleClick(currentFolder._id)} src={bigerFile} />
                            }
                            <p>{currentFolder.name}</p>
                        </div>
                    </div>
                })}
            </div>
        )
        default:
        return (
            <div>
                {props.files.map((currentFolder) => {
                    return <div key={currentFolder._id} className={f.openFolders}>
                        <div className={f.leftGroopIcons}>
                            <button><img src={downloadIcon} /></button>
                            {(props.docType.pop() === 'dir'||'')
                                ?<img onDoubleClick={() => onDoubleClick(currentFolder._id)} src={smallFolder} />
                                :<img onClick={() => onDoubleClick(currentFolder._id)} src={smallFile} />
                            }
                            <p>{currentFolder.name}</p>
                        </div>
                        <div className={f.rightGroopIcons}>
                            <p>{currentFolder.date}</p>
                            <p>{currentFolder.size}</p>
                            <button onClick={() => props.delFiles(currentFolder)}><img src={deleteIcon} /></button>
                            <button onClick={() => props.onHeartIconClick(currentFolder)} ><img src={heartIcon} /></button>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}

export default FileList