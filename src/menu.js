const menuAdder = (contentDiv) => {

    const nav = document.createElement("div");
    nav.setAttribute("style", "width: 80%; height: 100%; margin: 0 auto;");
    nav.innerHTML = `
    <div class="card">
        <img src="../src/salat.jpg" alt="Salat" style="width:100%">
        <div class="container">
            <h4><b>Salat</b></h4> 
            <p>Good One!</p> 
        </div>
    </div>
    <div class="card">
        <img src="../src/egg.jpg" alt="Egg" style="width:100%">
        <div class="container">
            <h4><b>Egg</b></h4> 
            <p>Best Egg Ever!</p> 
        </div>
    </div>
        <div class="card">
        <img src="../src/hamburger.jpg" alt="Hamburger" style="width:100%">
        <div class="container">
            <h4><b>Hamburger</b></h4> 
            <p>Ohh Juicy Meat!</p> 
        </div>
    </div>
    <div class="card">
        <img src="../src/fish.jpg" alt="Fish" style="width:100%">
        <div class="container">
            <h4><b>Fish</b></h4> 
            <p>Soo Fresh!</p> 
        </div>
    </div>
        <div class="card">
        <img src="../src/fishchips.jpg" alt="Fish&chips" style="width:100%">
        <div class="container">
            <h4><b>Fish And Chips</b></h4> 
            <p>English Style!</p> 
        </div>
    </div>
    <div class="card">
        <img src="../src/musli.jpg" alt="Musli" style="width:100%">
        <div class="container">
            <h4><b>Musli</b></h4> 
            <p>Healty!</p> 
        </div>
    </div>
        <div class="card">
        <img src="../src/pie.png" alt="Pie" style="width:100%">
        <div class="container">
            <h4><b>Pie</b></h4> 
            <p>Sweet!</p> 
        </div>
    </div>
        <div class="card">
        <img src="../src/breakfast.png" alt="Breakfast" style="width:100%">
        <div class="container">
            <h4><b>Breakfast</b></h4> 
            <p>Good Morning!</p> 
        </div>
    </div>
    <style>
        .card {
            display: inline-block;
            margin: 40px 55px;
            position: relative;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6);
            transition: 0.3s;
            width: 15%;
            border-radius: 5px;
            color: black;
            background-color: rgba(255,255,255,0.5)
        }

            .card:hover {
            box-shadow: 0 8px 16px 0 rgba(205,205,205,0.6);
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