// Create a smooth gradient background
document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
document.body.style.minHeight = '100vh';
document.body.style.margin = '0';
document.body.style.padding = '0';

onload = () => {
    const p = document.querySelector('.body');
    p.style.border = '5px solid black';
    p.style.margin = '50px';
    p.style.padding = '1px';
}