githubs = [
    "https://raw.githubusercontent.com/Tymski/100innovations/master/README.md",
    "https://raw.githubusercontent.com/Tymski/10minutes/master/readme.md",
    "https://raw.githubusercontent.com/jquery/jquery/master/README.md",
    "https://raw.githubusercontent.com/tehnokv/picojs/master/readme.md",
    "https://raw.githubusercontent.com/showdownjs/showdown/master/README.md"
]
var converter = new showdown.Converter();
converter.setFlavor('github');

nameRepo = github => github.slice("https://raw.githubusercontent.com/".length, -1 * "/master/readme.md".length).split("/");
githubURL = github => "https://github.com/" + github.slice("https://raw.githubusercontent.com/".length, -1 * "/master/readme.md".length);

githubs.forEach(github => {
    $.get(github, (x) => {
        let div = document.createElement("div");
        div.setAttribute("class", "project");

        div.innerHTML += `
            <div class="info">
                <span class="field"><span class="label">Author:</span> <span class="value">${nameRepo(github)[0]}</span></span>
                <span class="field"><span class="label">Project:</span> <span class="value">${nameRepo(github)[1]}</span></span>
                <span class="field"><span class="label">Address:</span> <span class="value"><a href="${githubURL(github)}">${githubURL(github).slice(8)}</a></span></span>
            </div>
        `

        div.innerHTML += converter.makeHtml(x);
        projects.appendChild(div);
    });
});


//"https://raw.githubusercontent.com/JakubStawko/hackaton-social-innovations/master/readme.md"