import folderIcon from '../../Asets/Images/fxemoji_filefolder.png'
import fileIcon from '../../Asets/Images/flat-color-icons_file.png'
import avaIcon from '../../Asets/Images/carbon_user-avatar-filled.png'
import c from './CreateFolder.module.css'
import { useState } from 'react'
import { instance } from '../../API/instance'
import FileService from '../../API/FileService/FileService'

const CreateFolder = (props) => {

    const [newFolder, setNewFolder] = useState([])
    const [newFiles, setNewFiles] = useState(null)
    const [newAva, setNewAva] = useState(null)

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
    function uploadFile() {
        for (let i = 0; i < newFiles.length; i++) {
            const file = newFiles[i]
            setFile(file)
        }
    }

    async function setFile(file) {
        props.setFetching(true)
        try {
            const formData = new FormData()
            formData.append('file', file) 
            if (props.parentDir) {
                formData.append('parent', props.parentDir)
            }
            const response = await FileService.uploadFile(formData)
            props.addFormData(response.data)
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
            const formData = new FormData()
            if(newAva){
                formData.append('avatar', newAva)
            }        
            if (props.parentDir) {
                formData.append('parent', props.parentDir)
            }
            const response = await FileService.uploadAva(formData)
            props.addNewAva(response.data)
            props.setActiveChild(false)

        } catch (e) {
            console.log(e)
        } finally {
            props.setFetching(false)
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
                    <input multiple={true} type='file' onChange={event => setNewFiles(event.target.files)} placeholder='введите название файла' />
                    <button onClick={uploadFile} >Загрузить</button>

                </div>
                <div>
                    <img src={avaIcon} />
                    <input  type='file' onChange={event => setNewAva(event.target.files[0])} />
                    <button onClick={setAva} >Загрузить </button>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default CreateFolder