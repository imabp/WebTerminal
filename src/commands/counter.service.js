
class counterService{
    constructor(){
            this.commandCounter = [0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1];// Keeps track of different commands(i.e., if they are completed or not)
            // 0 -> not completed
            // 1 -> completed 
            // added 1 more position

            this.commands = [
            // FORMAT: commands, commandCounterIndex
            'echo',//0
            'pwd',//1
            'ls',//2
            'cd',//3
            'cd ..',//4
            'cd ~',//5
            'cat',//6
            'touch',//7
            'cp',//8
            'rm',//9
            'mkdir',//10
            'clear',//11
            'uname',//12
            'date',//13
            'ifconfig',//14
            'tty',//15
            'history',//16
            'about',//17
            'contribute'//18
            ];
            //all the newly added commands must be updated in both the above arrays
            // --------------------------------------------------------------------
            this.taskStatus = ['[[b;#ff3300;]Not Completed]', 
            '[[b;#44D544;]Completed]'];  // To print the task status
            // --------------------------------------------------------------------

    }
    getCounter(){
    return this.commandCounter;
                    }
    getCommands(){
    return this.commands;
                    }
    getStatus(index){
    return this.taskStatus[this.commandCounter[index]]
                        }
    setStatusTrue(index){
    this.commandCounter[index]=1
    return this.taskStatus[this.commandCounter[index]]
    }


}
export default counterService;