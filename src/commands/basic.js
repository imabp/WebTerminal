

var arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];// Keeps track of different commands(i.e., if they are completed or not)
                                // 0 -> not completed
                                // 1 -> completed 
                                // added 1 more position
var arr2 = ['echo','pwd','ls','cd','cd ..','cd ~','cat','touch','cp','rm','mkdir','clear','uname','date','ifconfig','tty','history'];
//all the newly added commands must be updated in both the above arrays
var task = ['[[b;#ff3300;]Not Completed]', '[[b;#44D544;]Completed]'];  // To print the task status

var pwdv = ["imabp"]  // To print pwd 

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
        pwd: function() {
            arr[1] = 1;
            var pwdvNew = pwdv.join(',').replace(',', '/').split();
            context.echo("/home/" + pwdvNew + '\n');
            context.echo('> Everything in Linux is a file. Every file is organized in a hierarchical directory tree.\n' +
                '> The first directory in the filesystem is aptly named the root directory.\n' +
                '> To see where you are, you can use the [[b;#ff3300;]pwd] command, this command means “print working directory”\n' +
                'and it just shows you which directory you are in.');
            context.echo('> Now type [[b;#ff3300;]ls] to see the directories and files present in the current directory');
        },
        uname: () => {
            arr[12] = 1;
            let uname;
            if (navigator.appVersion.indexOf("Win") != -1) uname = "Windows"; 
            if (navigator.appVersion.indexOf("Mac") != -1) uname = "Mac"; 
            if (navigator.appVersion.indexOf("X11") != -1) uname = "UNIX"; 
            if (navigator.appVersion.indexOf("Linux") != -1) uname = "Linux"; 
            context.echo(`${uname}\n`);
            context.echo('> The [[b;#ff3300;]uname] command prints the operating system of the current machine.\n');
            context.echo('> Now type [[b;#ff3300;]date] to get current date and time.');
        },
        date: () => {
            arr[13] = 1;
            context.echo(`${new Date()}\n`);
            context.echo('> The [[b;#ff3300;]date] command will display the date in the timezone on which the operating system was configured. You must be the super user to change date and time.');
            context.echo('> Now type [[b;#ff3300;]ifconfig] to get interface configuration of the system.');
        }
    }
}

export { basic }
