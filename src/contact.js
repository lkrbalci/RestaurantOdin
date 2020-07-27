const contactAdder = (contentDiv) => {

    const nav = document.createElement("div");
    nav.setAttribute("style", "width: 80%; height: 100%; margin: 0 auto;");
    nav.innerHTML = `
            <div style="
            display: block;
            margin: 18% auto;
            height: 150px;
            width: 40%;
            background: rgba(250, 250, 250, 0.4);
            color: rgba(100, 100, 255, 1); 
            ">
            <h1 style="padding:10px">Phone: 0900 910 10 33</h1>
            <h1 style="padding:10px">Mail: restourantodin@odin.org</h1>
            </div>
    `

    contentDiv.appendChild(nav);
}

export {contactAdder}