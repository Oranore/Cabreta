function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

const toggler = document.querySelector('#toggler');
toggler.addEventListener('change', switchTheme, false);

// Texte en gras au survol de la souris

let paraBold = document.querySelector('.para1');
let para2Bold = document.querySelector('.para2');

paraBold.addEventListener('mouseover', function () { this.style.fontWeight = 'bold' });
paraBold.addEventListener('mouseout', function () { this.style.fontWeight = 'normal'});

para2Bold.addEventListener('mouseover', function () { this.style.fontWeight = 'bold' });
para2Bold.addEventListener('mouseout', function () { this.style.fontWeight = 'normal'});

// Font size augmentée au passsage de la souris

paraBold.addEventListener('mouseover', function () { this.style.fontSize = '35px'});
paraBold.addEventListener('mouseout', function () { this.style.fontSize = '25px'});

para2Bold.addEventListener('mouseover', function () { this.style.fontSize = '35px'});
para2Bold.addEventListener('mouseout', function () { this.style.fontSize = '25px'});
