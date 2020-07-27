const aboutAdder = (contentDiv) => {

    const nav = document.createElement("div");
    nav.setAttribute("style", "width: 80%; height: 100%; margin: 0 auto;");
    nav.innerHTML = `
            <div style="
            display: block;
            margin: 18% auto;
            height: 180px;
            width: 31%;
            background: rgba(250, 250, 250, 0.7);
            color: rgba(250, 125, 255, 1);
            text-align: center; 
            ">
            <p style="padding:20px; font-size: 30px;">Just build to get used to JS modules, webpack etc</h1>
            <p style="padding:20px;">nothing real :)</h1>
            </div>
    `

    contentDiv.appendChild(nav);
}

export {aboutAdder}