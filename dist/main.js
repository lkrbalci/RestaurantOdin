!function(n){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(i,r,function(e){return n[e]}.bind(null,r));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);const i=n=>{const e=document.createElement("div");e.setAttribute("style","width: 80%; height: 100%; margin: 0 auto;"),e.innerHTML='\n            <div style="\n            display: block;\n            margin: 18% auto;\n            height: 80px;\n            width: 31%;\n            background: rgba(250, 250, 250, 0.7);\n            color: rgba(250, 125, 255, 1); \n            "><h1 style="padding:20px">Wanna Eat Something?</h1></div>\n    ',n.appendChild(e)},r=document.getElementById("content");r.setAttribute("style","height: 100%; width: 100%; background-image: url('../src/background.jpg'); margin: 0 auto; background-size: cover; overflow: hidden;"),(n=>{const e=document.createElement("div");e.setAttribute("style","width: 80%; margin: 0 auto;"),e.innerHTML='\n    <ul>\n    <li><div id="home">Home</div></li>\n    <li><div id="menu">Menu</div></li>\n    <li><div id="contact">Contact</div></li>\n    <li style="float:right"><div class="active" id="about">About</div></li>\n    </ul>\n    <style>\n    ul {\n        list-style-type: none;\n        margin: 0; \n        padding: 0; \n        overflow: hidden; \n        background-color: #333;\n      }\n      \n      li {\n        float: left;\n      }\n      \n      li div {\n        display: block;\n        color: white;\n        text-align: center;\n        padding: 14px 16px;\n        text-decoration: none;\n      }\n      \n      li div:hover:not(.active) {\n        background-color: #111;\n        cursor: pointer;\n      }\n      \n      .active {\n        background-color: #4CAF50;\n        cursor: pointer;\n      }\n      </style>\n    ',n.appendChild(e)})(r),i(r);document.getElementById("home").addEventListener("click",()=>{r.removeChild(r.lastElementChild),i(r)}),document.getElementById("menu").addEventListener("click",()=>{r.removeChild(r.lastElementChild),(n=>{const e=document.createElement("div");e.setAttribute("style","width: 80%; height: 100%; margin: 0 auto;"),e.innerHTML='\n    <div class="card">\n        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">\n        <div class="container">\n            <h4><b>Jane Doe</b></h4> \n            <p>Interior Designer</p> \n        </div>\n    </div>\n    <div class="card">\n        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">\n        <div class="container">\n            <h4><b>Jane Doe</b></h4> \n            <p>Interior Designer</p> \n        </div>\n    </div>\n        <div class="card">\n        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">\n        <div class="container">\n            <h4><b>Jane Doe</b></h4> \n            <p>Interior Designer</p> \n        </div>\n    </div>\n    <div class="card">\n        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">\n        <div class="container">\n            <h4><b>Jane Doe</b></h4> \n            <p>Interior Designer</p> \n        </div>\n    </div>\n        <div class="card">\n        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">\n        <div class="container">\n            <h4><b>Jane Doe</b></h4> \n            <p>Interior Designer</p> \n        </div>\n    </div>\n    <div class="card">\n        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">\n        <div class="container">\n            <h4><b>Jane Doe</b></h4> \n            <p>Interior Designer</p> \n        </div>\n    </div>\n        <div class="card">\n        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">\n        <div class="container">\n            <h4><b>Jane Doe</b></h4> \n            <p>Interior Designer</p> \n        </div>\n    </div>\n        <div class="card">\n        <img src="../src/img_avatar2.png" alt="Avatar" style="width:100%">\n        <div class="container">\n            <h4><b>Jane Doe</b></h4> \n            <p>Interior Designer</p> \n        </div>\n    </div>\n    <style>\n        .card {\n            display: inline-block;\n            margin: 55px;\n            position: relative;\n            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n            transition: 0.3s;\n            width: 15%;\n            border-radius: 5px;\n        }\n\n            .card:hover {\n            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n        }\n\n        img {\n            border-radius: 5px 5px 0 0;\n        }\n\n        .container {\n            padding: 2px 16px;\n        }\n    </style>\n    ',n.appendChild(e)})(r)}),document.getElementById("contact").addEventListener("click",()=>{r.removeChild(r.lastElementChild)}),document.getElementById("about").addEventListener("click",()=>{r.removeChild(r.lastElementChild)})}]);