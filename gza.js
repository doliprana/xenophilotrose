const typed = document.getElementById("typed");
const terminal = document.getElementById("terminal");

function boot(nextPage) {
    const bootScreen = document.getElementById("boot-screen");

    bootScreen.style.display = "block"; //or "flex"

    setTimeout(() => {
        window.location.href = nextPage;
    }, 5000); 
}

// TERMINAL

document.addEventListener("keydown", (event) => {

    // Type characters
    if (event.key.length === 1) {
        typed.textContent += event.key;
    }

    // Backspace
    else if (event.key === "Backspace") {
        typed.textContent = typed.textContent.slice(0, -1);
    }

    // Enter
    else if (event.key === "Enter") {

        const command = typed.textContent;

        // Add the command that was typed
        terminal.innerHTML += `
            <div>
                <span class="prompt">[root@mileva ~]# </span>${command}
            </div>
        `;


        // Commands

        if (command === "ls") {
            terminal.innerHTML += `<p>secret.txt   documents</p>`;
        }

        else if (command === "be a loser") {

    terminal.innerHTML += `<div>Starting graphical interface...</div>`;

    boot("win.html");

}

        else if (command === "neofetch") {
            terminal.innerHTML += `<pre>

 ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     root@mileva
⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⢰⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    -----------------
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    OS: Arch Linux x86_64
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    Host: Intel Corporation NUC7i5BNB
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣷⣤⣙⢻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀     Kernel: 5.19.13-arch1-1
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀   Uptime: 59mins
⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀   Packages: 2155 (pacman), 10 (flatpak)
⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⡿⠛⠛⠿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀   Shell: bash 5.1.16
⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀   Resolution: 3840x2160
⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⠿⣆⠀⠀⠀⠀   Terminal: /dev/tty1
⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀   CPU: Intel Pentium 3805U (1) @1.895GHz 
⠀⢀⣾⣿⣿⠿⠟⠛⠋⠉⠉⠀⠀⠀⠀⠀⠀⠉⠉⠙⠛⠻⠿⣿⣿⣷⡀⠀  GPU: 00:02.0 VMware SVGA II Adapter
⣠⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠈⠙⠻⣄   Memory: 64MiB / 977MiB


</pre>`;
        }
        else if (command === "cat secret.txt") {
            terminal.innerHTML += `<div>Ever heard of konami code ;3</div>`;
        }

        else if (command === "ls documents") {
            terminal.innerHTML += `<p>cat1 cat2 cat3 cat67 cat99</p>`;
        }
        
        
        else if (command === "help") {
            terminal.innerHTML += `
                <div>Available commands:</div>
                <div>neofetch</div>
                <div>help</div>
                <div>clear</div>
                <div>ls</div>
                <div>cat</div>
            `;
        }

        else if (command === "clear") {
            terminal.innerHTML = "";
        }

        else if (command === "") {
            // Do nothing if they just press Enter
        }



        else if (command.startsWith("cat ")) {

    const file = command.slice(4);

    const img = new Image();
    img.src = `${file}.png`;
    img.className = "terminal-img";

    img.onload = () => {
        terminal.appendChild(img);
    };

    img.onerror = () => {
        terminal.innerHTML += `<div>cat: ${file}: No such file</div>`;
    };
}

        else {
            terminal.innerHTML += `
                <div>command not found!!</div>
            `;
        }


        // Clear what was typed
        typed.textContent = "";
    }

});


// konami

const code = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];

let pos = 0;

document.addEventListener("keydown", (event) => {

    if (event.key === code[pos]) {
        pos++;
    } 
    else {
        pos = 0;
    }

    if (pos === code.length) {

        alert("try be a loser as a command ;3");

        pos = 0;
    }

});
