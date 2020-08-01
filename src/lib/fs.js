/**
 * Here we will create a dummy file system 
 */
import _ from 'lodash'
class FileSystem{
    constructor(){
        this.path = '/'
        this.fs = [
            {
                level: 0,
                contents: ['Documents', 'Downloads']
            }
        ]
        this.level = 0
    }

    getPath(){
        let data =  _.find(this.fs, {level: this.level})
        return data.contents
    }

    changeDir(dir){
        
    }

}

export default FileSystem