var commandCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];// Keeps track of different commands(i.e., if they are completed or not)
// 0 -> not completed
// 1 -> completed 
// added 1 more position
var commands = [
'echo',
'pwd',
'ls',
'cd',
'cd ..',
'cd ~',
'cat',
'touch',
'cp',
'rm',
'mkdir',
'clear',
'uname',
'date',
'ifconfig',
'tty','history'
];
//all the newly added commands must be updated in both the above arrays
// --------------------------------------------------------------------
var taskStatus = ['[[b;#ff3300;]Not Completed]', 
'[[b;#44D544;]Completed]'];  // To print the task status
// --------------------------------------------------------------------
const counterService = ()=>{

            const getCounter=()=>{
            return commandCounter;
            }
            const getCommands=()=>{
                return commands;
            }
            const updateCounter=(index)=>{
            commandCounter[index] = 1;
            }
            const getStatus=(index)=>{
                return taskStatus[index]
            }

}