function changeName() {
    const nameBlock = document.getElementById('name-block');
    if (nameBlock.innerText === 'RAJA MUTHAIAH C') {
        nameBlock.innerText = 'ச. ராஜா முத்தையா';
    } else {
        nameBlock.innerText = 'RAJA MUTHAIAH C';
    }
}

document.getElementById('theme').addEventListener('change', function() {
    const theme = this.value;
    document.body.className = theme;
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

function toggleSkillsView() {
    const cube = document.querySelector('.cube-container');
    const skillsList = document.getElementById('skills-list');
    if (cube.style.display === 'none') {
        cube.style.display = 'flex';
        skillsList.style.display = 'none';
    } else {
        cube.style.display = 'none';
        skillsList.style.display = 'block';
    }
}
