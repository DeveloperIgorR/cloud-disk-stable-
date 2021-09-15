import d from './Disk.module.css'
import arrowLogo from '../../Asets/Images/Vector 3.png'
import backLogo from '../../Asets/Images/Group 2.png'
import downloadLogo from '../../Asets/Images/ant-design_cloud-download-outlined.png'
import { useEffect, useMemo, useState } from 'react'
import FileList from '../../Components/FilesList/FileList'
import Navbar from '../../Components/Navbar/Navbar'
import Modal from '../../Components/Modal/Modal'
import CreateFolder from '../../Components/CreateFolder/CreateFolder'
import SortSelectors from '../../Components/SortSelectors/SortSelectors'
import Loader from '../../Components/UI/Loader/Loader'
import DiskSpace from '../../Components/UI/DiskSpace/DiskSpace'
import FileService from '../../API/FileService/FileService'
import Uploader from '../../Components/UI/Uploader/Uploader'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../context'


const Disk = () => {
    const [favourites, setFavourites] = useState([])
    const [files, setFiles] = useState([])
    const [searchFolder, setSearchFolder] = useState('')
    const [type, setType] = useState('')
    const [sortedtype, setSortedType] = useState('')
    const [activeChild, setActiveChild] = useState(false)
    const [fetching, setFetching] = useState(false)
    const [parentDir, setParentDir] = useState(null)
    const [previosDir, setPreviosDir] = useState([])
    const [dragFiles, setDragFiles] = useState(false)
    const [downloadsFiles,setDownloadsFiles] = useState([])
    const {download,setDownload} = useContext(AuthContext)
    console.log(downloadsFiles)

    let addNewFile = (newFile) => {
        setFiles([...files, newFile])
    }

    let addFormData = (formData) => {
        setFiles([...files, formData])
    }

    useEffect(() => {
        getFiles()
        searchFiles()
        const data = JSON.parse(localStorage.getItem('favourites')) || []
        setFavourites(data)
    }, [parentDir,sortedtype,searchFolder])

    async function getFiles() {
        setFetching(true)
        try {
            const response = await FileService.receiveFiles(parentDir,sortedtype)
            setFiles(response.data)
            console.log(response.data)

        } catch (e) {
            console.log(e)
        } finally {
            setFetching(false)
        }
    }

    async function searchFiles() {
        setFetching(true)
        try {
            const response = await FileService.findFiles(searchFolder)
            setFiles(response.data)
            
        } catch (e) {
            console.log(e)
        } finally {
            setFetching(false)
        }
    }

    async function delFiles(event) {
        console.log(event._id)
        setFetching(true)
        try {
            const response = await FileService.deleteFiles(event._id)
            let filtredFiles = files.filter(i => event._id != i._id)
            setFiles(filtredFiles)

        } catch (e) {
            console.log(e.response)
        } finally {
            setFetching(false)
        }
    }

    // const sortedArr = [...files].sort((a, b) => String(a[selectedSort]).localeCompare(b[selectedSort]))

    // const sortedFolder = useMemo(() => {
    //     return sortedArr.filter(currentFolder => currentFolder.name.toLowerCase().includes(searchFolder))
    // }, [searchFolder, sortedArr])

    // let sortByEvent = (event) => {
    //     let field = event.target.value
    //     setSelectedSort(field)
    //     setFiles(sortedArr)
    // }
    // let sortBySize = (user) => {
    //     setSelectedSort(user)
    //     setFiles(sortedArr)
    //     setSortedType('FROM_SMALL_TO_BIG')
    // }

    function onHeartIconClick(currentFolder) {
        const newFaworites = [...favourites, currentFolder]
        setFavourites(newFaworites)
        localStorage.setItem('favourites', JSON.stringify(newFaworites))
    }

    function dragEnterHandler (event){
        event.preventDefault()
        event.stopPropagation()
        setDragFiles(true)
    }

    function dragLeaveHandler (event){
        event.preventDefault()
        event.stopPropagation()
        setDragFiles(false)
    }

    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let newFiles = [...event.dataTransfer.files]
        for (let i = 0; i < newFiles.length; i++) {
            const file = newFiles[i]
            setFile(file)
        }
    }

    async function setFile(file){
        setFetching(true)
        try {
            const formData = new FormData()
            formData.append('file', file) 
            if (parentDir) {
                formData.append('parent', parentDir)
            }
            const response = await FileService.uploadFile(formData)
            setFiles([...files,response.data])
        } catch (e) {
            console.log(e)
        } finally {
            setFetching(false)
        }
        setDragFiles(false)
    }

    return (
        <div className={d.disk}>

            <Navbar
                searchFolder={searchFolder}
                setSearchFolder={setSearchFolder}
            />

            <div className={d.favourite}>
                <h2>Избранное</h2>
                {favourites.map((i) => {
                    return <div key={i._id} className={d.folder} >
                        <button><img src={arrowLogo} /></button>
                        <a>{i.name}</a>
                    </div>
                })}
                <DiskSpace />
            </div>
            {!dragFiles ?
                <div className={d.openFolder} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler} >

                    <div className={d.header}>
                        {parentDir === null
                            ? <button disabled><img src={backLogo} /></button>
                            : <button onClick={() => setParentDir(previosDir.pop())}><img src={backLogo} /></button>
                        }
                        <h2>Files</h2>
                        <button><img src={downloadLogo} /></button>
                    </div>

                    <div className={d.createButton}>
                        <div className={d.topLineButton}>
                            <button onClick={() => setActiveChild(true)}>загрузить данные</button>
                            <Modal active={activeChild} setActive={setActiveChild}>
                                <CreateFolder
                                    parentDir={parentDir}
                                    setActiveChild={setActiveChild}
                                    addNewFile={addNewFile}
                                    addFormData={addFormData}
                                    fetching={fetching}
                                    setFetching={setFetching}
                                    downloadsFiles={downloadsFiles}
                                    setDownloadsFiles={setDownloadsFiles}
                                />
                            </Modal>
                        </div>

                        <SortSelectors
                            setType={setType}
                            type={type}
                            setSortedType={setSortedType}
                            // sortByEvent={sortByEvent}
                            // sortBySize={sortBySize}
                            sortedtype={sortedtype} />
                    </div>

                    {
                        (type === 'LIST')
                            ? <div className={d.nameField}>
                                <div>
                                    <p>Name</p>
                                </div>
                                <div className={d.nameFieldRight}>
                                    <p>Date</p>
                                    <p>Size</p>
                                </div>
                            </div>
                            : <div className={d.bottomLine}></div>
                    }

                    {fetching
                        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
                        : <FileList
                            // files={sortedFolder}
                            files={files}
                            type={type}
                            delFiles={delFiles}
                            setParentDir={setParentDir}
                            setPreviosDir={setPreviosDir}
                            previosDir={previosDir}
                            parentDir={parentDir}
                            onHeartIconClick={onHeartIconClick}
                        />}

                </div>
                : <div className={d.dropArea} onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler} >
                    Перетащите файлы сюда
                </div>
            }
            {(download)
                ?<Uploader
                  downloadsFiles={downloadsFiles}
                />
                :''
            }
        </div>

    )

}
export default Disk 