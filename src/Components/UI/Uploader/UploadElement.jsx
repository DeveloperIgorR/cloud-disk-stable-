import ue from './UploadElement.module.css'

const UploadElement = (props) => {
    console.log(props.file.name)
    function onDelClick(event){
      let newFile = props.file.filter(filtredFile => filtredFile._id != event.target._id)
    }

    return(
        <div className={ue.uploader}>
            <div className={ue.header}>
                <h4>{props.file.name}</h4>
                <button onClick={event => onDelClick(event.target)}>X</button>
            </div>
            <div>
                <div className={ue.uploadBar}></div>
                <div className={ue.percent}>{props.file.progress}</div>
            </div>

        </div>
    )
}
export default UploadElement