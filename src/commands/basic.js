
var id = 1;
var arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];// Keeps track of different commands(i.e., if they are completed or not)
                                // 0 -> not completed
                                // 1 -> completed 
                                // added 1 more position
var arr2 = ['echo','pwd','ls','cd','cd ..','cd ~','cat','touch','cp','rm','mkdir','clear','uname','date','ifconfig','tty','history'];
//all the newly added commands must be updated in both the above arrays
var task = ['[[b;#ff3300;]Not Completed]', '[[b;#44D544;]Completed]'];  // To print the task status

var pwdv = ["lterm"]  // To print pwd 
var s = [];   //Array for directories
var f = [];   //Array for files
var count = 6;    //Required to continue making ~sub directories
var o = { "lterm": "0", "Documents": "1", "Downloads": "2", "Music": "3", "Pictures": "4", "Videos":"5" };  //Object to assign array of sub folders to a folder
var of = { "hello.txt": "Hey there newbie!\nHaving fun? I hope so." };  //Object to assign text to a file
f[0] = ["hello.txt"];
s[0] = ["Documents", "Downloads", "Music", "Pictures", "Videos"];   //Array listing sub directories
s[1] = []; f[1] = [];
s[2] = []; f[2] = [];
s[3] = []; f[3] = [];
s[4] = []; f[4] = [];
s[5] = []; f[5] = [];
let basic = context => {
    return {
     
        help: () => {
            context.echo("Hello")
            context.echo('\nList of commands available:');
            context.echo('===========================\n');
            context.echo('> [[b;#44D544;]about]');
            context.echo('> [[b;#44D544;]contribute]');
            context.echo('> echo ----------- ' + task[arr[0]]);
            context.echo('> pwd ------------ ' + task[arr[1]]);
            context.echo('> ls ------------- ' + task[arr[2]]);
            context.echo('> cd ------------- ' + task[arr[3]]);
            context.echo('> cd .. ---------- ' + task[arr[4]]);
            context.echo('> cd ~ ----------- ' + task[arr[5]]);
            context.echo('> cat ------------ ' + task[arr[6]]);
            context.echo('> touch ---------- ' + task[arr[7]]);
            context.echo('> cp ------------- ' + task[arr[8]]);
            context.echo('> rm ------------- ' + task[arr[9]]);
            context.echo('> mkdir ---------- ' + task[arr[10]]);
            context.echo('> clear ---------- ' + task[arr[11]]);
            context.echo('> uname ---------- ' + task[arr[12]]);
            context.echo('> date  ---------- ' + task[arr[13]]);
            context.echo('> ifconfig ------- ' + task[arr[14]]);
            context.echo('> tty ------------ ' + task[arr[15]]);
            context.echo('> history -------- ' + task[arr[16]]);
            context.echo('\n');
        },
        echo: (text)=>{
            arr[0] = 1;
            context.echo(text + '\n');
            context.echo('> The [[b;#ff3300;]echo] command prints back your arguments.');
            context.echo('> Type [[b;#ff3300;]help] and check your first task is completed.');
            context.echo('> Now type [[b;#ff3300;]pwd] to continue.');
        },
        mkdir: (arg1)=>{
            arr[10] = 1;
            context.echo('> The [[b;#ff3300;]mkdir] command (Make Directory) creates a directory if it doesn’t already exist.');
            context.echo('> Type [[b;#ff3300;]ls] to see the new directory created.');
            let x = o[pwdv[pwdv.length - 1]];
            o[arg1] = count;
            s[x].push(arg1);
            s[count] = [];
            f[count] = [];
            x = 0;
            count++;
        },
        ls: function() {  
            arr[2] = 1; 
            let x = o[pwdv[pwdv.length - 1]];
            let y = "[[b;#44D544;]" + s[x] + "]," + f[x];
            var z = y.replace(/,/g, '        ').split();
            this.echo(z);
            x = 0;
            this.echo('> The [[b;#ff3300;]ls] command will list directories and files in the current directory by default,\n' +
            'however you can specify which path you want to list the directories of.');
            this.echo('> Now type [[b;#ff3300;]cd Documents] to enter a sub directory.');
        },
    }
}

export { basic }