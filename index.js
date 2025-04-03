// alert("jlo")
let head=document.getElementById("Headerall");
window.addEventListener("scroll",()=>{
  
    if (window.scrollY > 10) {
      head.style.backgroundColor = '#ffffff';
      // head.style.boxShadow=" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
    } else {
      head.style.backgroundColor = '#B3D1FA'; 
    }
})

const scrollToTopBtn = document.getElementById('On-Top');

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    let homesec= document.getElementById("homesec");
    window.addEventListener("scroll",()=>{
      if ( window.scrollY < 700) {
        homesec.style.border = 'solid 1px #2F80ED';
        homesec.style.borderRadius = '25px';
      } else {
        homesec.style.border = 'none'; 
      }
    })
    let featuressec= document.getElementById("features");
    window.addEventListener("scroll",()=>{
      if (window.scrollY >700 && window.scrollY < 1500) {
        featuressec.style.border = 'solid 1px #2F80ED';
        featuressec.style.borderRadius = '25px';
      } else {
        featuressec.style.border = 'none'; 
      }
    })
    let abt= document.getElementById("abtsec");
    window.addEventListener("scroll",()=>{
      if (window.scrollY > 1500 && window.scrollY < 2100) {
        abt.style.border = 'solid 1px #2F80ED';
        abt.style.borderRadius = '25px';
      } else {
        abt.style.border = 'none'; 
      }
    })
    let port= document.getElementById("portfolioa");
    window.addEventListener("scroll",()=>{
      if (window.scrollY > 2100 && window.scrollY < 3200) {
        port.style.border = 'solid 1px #2F80ED';
        port.style.borderRadius = '25px';
      } else {
        port.style.border = 'none'; 
      }
    })
    let price= document.getElementById("pricesec");
    window.addEventListener("scroll",()=>{
      if (window.scrollY > 3200 && window.scrollY < 3800) {
        price.style.border = 'solid 1px #2F80ED';
        price.style.borderRadius = '25px';
      } else {
        price.style.border = 'none'; 
      }
    })
    let teamsec= document.getElementById("teamsec");
    window.addEventListener("scroll",()=>{
      if (window.scrollY > 3800 && window.scrollY < 4900) {
        teamsec.style.border = 'solid 1px #2F80ED';
        teamsec.style.borderRadius = '25px';
      } else {
        teamsec.style.border = 'none'; 
      }
    })
    let contsec= document.getElementById("contsec");
    window.addEventListener("scroll",()=>{
      if (window.scrollY > 4900 && window.scrollY < 5800) {
        contsec.style.border = 'solid 1px #2F80ED';
        contsec.style.borderRadius = '25px';
      } else {
        contsec.style.border = 'none'; 
      }
    })