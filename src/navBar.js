const navAdder = (contentDiv) => {


    const nav = document.createElement("div");
    nav.setAttribute("style", "width: 80%; margin: 0 auto;");
    nav.innerHTML = `
    <ul>
    <li><div id="home">Home</div></li>
    <li><div id="menu">Menu</div></li>
    <li><div id="contact">Contact</div></li>
    <li style="float:right"><div class="active" id="about">About</div></li>
    </ul>
    <style>
    ul {
        list-style-type: none;
        margin: 0; 
        padding: 0; 
        overflow: hidden; 
        background-color: #333;
      }
      
      li {
        float: left;
      }
      
      li div {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      
      li div:hover:not(.active) {
        background-color: #111;
        cursor: pointer;
      }
      
      .active {
        background-color: #4CAF50;
        cursor: pointer;
      }
      </style>
    `


    contentDiv.appendChild(nav);
    const toHome = () => {
        alert("tohome")
    }
}



export {navAdder}