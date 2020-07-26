const menuAdder = (contentDiv) => {

    const nav = document.createElement("div");
    nav.setAttribute("style", "width: 80%; height: 100%; margin: 0 auto;");
    nav.innerHTML = `
    <div class="card">
        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
        </div>
    </div>
    <div class="card">
        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
        </div>
    </div>
        <div class="card">
        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
        </div>
    </div>
    <div class="card">
        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
        </div>
    </div>
        <div class="card">
        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
        </div>
    </div>
    <div class="card">
        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
        </div>
    </div>
        <div class="card">
        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
        </div>
    </div>
        <div class="card">
        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
        </div>
    </div>
    <style>
        .card {
            display: inline-block;
            margin: 55px;
            position: relative;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 15%;
            border-radius: 5px;
        }

            .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

        img {
            border-radius: 5px 5px 0 0;
        }

        .container {
            padding: 2px 16px;
        }
    </style>
    `

    contentDiv.appendChild(nav);
}

export {menuAdder}