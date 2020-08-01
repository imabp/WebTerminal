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
                root: '/',
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
        let dr = _.find(this.fs,{level: this.level})
        if(!_.includes(dr.contents, dir) ){
            return "directoy not present"
        }
        let d = {
            level: this.level+1,
            root: dir,
            contents: []
        }
        this.level++

        this.fs.push(d)
        return d.contents
    }

}

export default FileSystem