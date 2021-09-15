import ue from './UploadElement.module.css'

const UploadElement = (props) => {
    console.log(props.file.name)
    return(
        <div className={ue.uploader}>
            <div className={ue.header}>
                <h4>{props.file.name}</h4>
                <button>X</button>
            </div>
            <div>
                <div className={ue.uploadBar}></div>
                <div className={ue.percent}>{props.file.progress}</div>
            </div>

        </div>
    )
}
export default UploadElement