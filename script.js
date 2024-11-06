console.log("connection is set!!!")

document.getElementById('hamburger-btn').addEventListener('click', showSelection);

function showSelection() {
    const menus = document.querySelectorAll('.options');
    menus.forEach(menu => {
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });
}
