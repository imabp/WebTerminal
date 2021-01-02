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
        
        if(dir ==='..'){
                 if(this.level===0)
                 return " You are in the root directory. "
                    else{
                        this.level--;
                        let dr = _.find(this.fs,{level: this.level})

                        return `You are now in ${dr.root} directory`
                    }
        
        }else{
        
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
        return d.contents}
    }

    mkdir(dir){
        let currentDir = _.find(this.fs, {level:this.level})
        if(!_.includes(currentDir.contents, dir))
        {
            currentDir.contents.push(dir)
            return ` ${dir} directory successfully created in parent ${currentDir.root}`
        }

    }
    
}

export default FileSystem