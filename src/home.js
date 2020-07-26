const homeAdder = (contentDiv) => {

    const nav = document.createElement("div");
    nav.setAttribute("style", "width: 80%; height: 100%; margin: 0 auto;");
    nav.innerHTML = `
            <div style="
            display: block;
            margin: 18% auto;
            height: 80px;
            width: 31%;
            background: rgba(250, 250, 250, 0.7);
            color: rgba(250, 125, 255, 1); 
            "><h1 style="padding:20px">Wanna Eat Something?</h1></div>
    `

    contentDiv.appendChild(nav);
}

export {homeAdder}