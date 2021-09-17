import { instance } from "../instance"

export default class FileService {

    static async receiveFiles(parent,sort){
        return instance.get('files', {
            params: {
                parent,
                sort
            }
        })   
    }

    static async findFiles(search){
        return instance.get('files/search', {
            params: {
                search
            }
        })   
    }

    static async deleteFiles(id){
        return  instance.delete('files',{
            params: {
                id
            }                                
        }) 

    }

    static async setFiles(name, parent){
        return instance.post('files',{
            name, parent
        })
    }

    static async uploadFile(formData){
        return instance.post('files/upload',formData,{
            onUploadProgress: progressEvent => {
                const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                console.log('total', totalLength)
                if (totalLength) {
                    let progress = Math.round((progressEvent.loaded * 100) / totalLength)
                    console.log(progress)
                }
            }
        })
    }

    static async uploadAva(formData){
        return instance.post('files/avatar',formData)
    }

}