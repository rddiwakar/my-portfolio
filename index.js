let projects = document.getElementById("projects");
let projectArr = [
    {
        name: "technical-documentary-page",
        img:"./technical.png" 
    },
    {
        name: "randomcatgenerator",
        img:"./randomcat.png"
    },
    {
        name: "Rockpaperscissor",
        img:"./rock-papaer-scissor.png"  
    },
    {
        name: "todo-list",
        img:"./todo.png"   
    },
    {
        name: "product-landing-page",
        img:"./landing.png"  
    }
]

projects.innerHTML = `<h1>These are some of my projects.</h1>
    <hr/>
    <ul>
        ${String(projectArr.map(project =>{
            return `<li> <img src=${project.img} />
                        <a href="https://rddiwakar.github.io/${project.name}/">
                            <h2>${project.name} </h2>
                        </a>
                </li>`
        })).replace(/,/g,"")}
    </ul>
    <button><a href="https://github.com/rddiwakar?tab=repositories" target="_blank">Show All</a></button>
`

