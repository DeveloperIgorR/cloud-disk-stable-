import ue from './UploadElement.module.css'

const UploadElement = (props) => {
    console.log(props.file.progress)

    return(
        <div className={ue.uploader}>
            <div className={ue.header}>
                <h4>{props.file.name}</h4>
                <button onClick={() => props.delDowloadsFile(props.file)}>X</button>
            </div>
            <div className={ue.uploadFile}>
                <div className={ue.uploadBar} style={{width: props.file.progress + '%'}}></div>
                <div className={ue.percent}>{props.file.progress}% </div>
            </div>

        </div>
    )
}
export default UploadElement