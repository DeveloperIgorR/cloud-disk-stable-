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

    static async uploadFile(formData,callback){
        return instance.post('files/upload',formData,{
            onUploadProgress:callback
        })
    }

    static async uploadAva(formData,callback){
        return instance.post('files/avatar',formData,{
            onUploadProgress:callback
        })
    }

}