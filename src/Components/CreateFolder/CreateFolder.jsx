import folderIcon from '../../Asets/Images/fxemoji_filefolder.png'
import fileIcon from '../../Asets/Images/flat-color-icons_file.png'
import avaIcon from '../../Asets/Images/carbon_user-avatar-filled.png'
import c from './CreateFolder.module.css'
import { useState } from 'react'
import { instance } from '../../API/instance'
import FileService from '../../API/FileService/FileService'

const CreateFolder = (props) => {

    const [newFolder, setNewFolder] = useState([])
    const [newFile, setNewFile] = useState(null)
    const [newAva, setNewAva] = useState([])

    async function setFolder() {
        props.setFetching(true)
        try {
            const response = await FileService.setFiles(newFolder, props.parentDir)
            props.setActiveChild(false)
            props.addNewFile(response.data)
            setNewFolder('')
        } catch (e) {
            console.log(e)
        } finally {
            props.setFetching(false)
        }

    }

    async function setFile() {
        props.setFetching(true)
        try {
            const formData = new FormData()
            if(newFile){
                formData.append('file', newFile)
            }
            
            if (props.parentDir) {
                formData.append('parent', props.parentDir)
            }
            const response = await FileService.uploadFile(formData)
            props.setActiveChild(false)

        } catch (e) {
            console.log(e)
        } finally {
            props.setFetching(false)
        }

    }


    async function setAva() {
        props.setFetching(true)
        try {
            const response = await instance.post('files/avatar')
            props.setActiveChild(false)
            props.setFetching(false)
        } catch (e) {
            console.log(e)
        }

    }

    return (

        <div >
            <div className={c.type}>
                <div>
                    <img src={folderIcon} />
                    <input type='dir' value={newFolder} onChange={event => setNewFolder(event.target.value)} placeholder='введите название папки' />
                    <button onClick={setFolder} >Создать</button>
                </div>
                <div>
                    <img src={fileIcon} />
                    <input multiple={true} type='file'  onChange={event => setNewFile(event.target.file)} placeholder='введите название файла' />
                    <button onClick={setFile} >Загрузить</button>

                </div>
                <div>
                    <img src={avaIcon} />
                    <input value={newAva} onChange={event => setNewAva(event.target.value)} />
                    <button onClick={setAva} >Загрузить </button>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default CreateFolder