const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.disabled=!0;let l=null;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1;return l=setInterval((()=>document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`),1e3),l})),e.addEventListener("click",(()=>{t.disabled=!1,e.disabled=!0,clearInterval(l)})),t.style.position="absolute",t.style.top="50%",t.style.left="41%",t.style.width="100px",t.style.height="50px",t.style.backgroundColor="lightblue",e.style.position="absolute",e.style.top="50%",e.style.left="51%",e.style.width="100px",e.style.height="50px",e.style.backgroundColor="lightblue";
//# sourceMappingURL=01-color-switcher.00f78fdc.js.map
