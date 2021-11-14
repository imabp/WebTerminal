var pwdv = ["imabp"]  // To print pwd 

let basic = (context,counter) => {
    
    return {
        help: () => {

            context.echo("Hello")
            context.echo('\nList of commands available:');
            context.echo('===========================\n');
            context.echo('> [[b;#44D544;]about]');
            context.echo('> [[b;#44D544;]contribute]');
            context.echo('> echo ----------- ' + counter.getStatus(0));
            context.echo('> pwd ------------ ' + counter.getStatus(1));
            context.echo('> cd ------------- ' + counter.getStatus(2));
            context.echo('> cd .. ---------- ' + counter.getStatus(3));
            context.echo('> ls ------------- ' + counter.getStatus(4));
            context.echo('> cd ~ ----------- ' + counter.getStatus(5));
            context.echo('> cat ------------ ' + counter.getStatus(6));
            context.echo('> touch ---------- ' + counter.getStatus(7));
            context.echo('> cp ------------- ' + counter.getStatus(8));
            context.echo('> rm ------------- ' + counter.getStatus(9));
            context.echo('> mkdir ---------- ' + counter.getStatus(10));
            context.echo('> clear ---------- ' + counter.getStatus(11));
            context.echo('> uname ---------- ' + counter.getStatus(12));
            context.echo('> date  ---------- ' + counter.getStatus(13));
            context.echo('> ifconfig ------- ' + counter.getStatus(14));
            context.echo('> tty ------------ ' + counter.getStatus(15));
            context.echo('> history -------- ' + counter.getStatus(16));
            context.echo('\n');
        },
        echo: (text)=>{
            counter.setStatusTrue(0)
            context.echo(text + '\n');
            context.echo('> The [[b;#ff3300;]echo] command prints back your arguments.');
            context.echo('> Type [[b;#ff3300;]help] and check your first task is completed.');
            context.echo('> Now type [[b;#ff3300;]pwd] to continue.');
        },
        pwd: function() {
            counter.setStatusTrue(1)
            var pwdvNew = pwdv.join(',').replace(',', '/').split();
            context.echo("/home/" + pwdvNew + '\n');
            context.echo('> Everything in Linux is a file. Every file is organized in a hierarchical directory tree.\n' +
                '> The first directory in the filesystem is aptly named the root directory.\n' +
                '> To see where you are, you can use the [[b;#ff3300;]pwd] command, this command means “print working directory”\n' +
                'and it just shows you which directory you are in.');
            context.echo('> Now type [[b;#ff3300;]ls] to see the directories and files present in the current directory');
        },
        uname: () => {
            counter.setStatusTrue(12)
            let uname;
            if (navigator.appVersion.indexOf("Win") !== -1) uname = "Windows"; 
            if (navigator.appVersion.indexOf("Mac") !== -1) uname = "Mac"; 
            if (navigator.appVersion.indexOf("X11") !== -1) uname = "UNIX"; 
            if (navigator.appVersion.indexOf("Linux") !== -1) uname = "Linux"; 
            context.echo(`${uname}\n`);
            context.echo('> The [[b;#ff3300;]uname] command prints the operating system of the current machine.\n');
            context.echo('> Now type [[b;#ff3300;]date] to get current date and time.');
        },
        date: () => {
            counter.setStatusTrue(13)
            context.echo(`${new Date()}\n`);
            context.echo('> The [[b;#ff3300;]date] command will display the date in the timezone on which the operating system was configured. You must be the super user to change date and time.');
            context.echo('> Now type [[b;#ff3300;]ifconfig] to get interface configuration of the system.');
        },
        about: () => {
            counter.setStatusTrue(17)
            context.echo('> The shell is basically a program that takes your commands from the keyboard and sends them to the operating system to perform.\n');
            context.echo('> The [[b;#44D544;]Terminal] is a program that launches a shell for you.\n');
        },
        contribute: () => {
            counter.setStatusTrue(18)
            context.echo('> This is part of project under [[b;#FFFF00;]Ninja Developers ] \n We [[b;#FF0000;]❤]  Open Source \n');
            context.echo('> If you want to contribute, you can at github imabp/WebTerminal.');
        }
    }
}

export { basic }
