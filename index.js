// Brand View

// Element Variables
const blocks = document.getElementsByClassName('brand-block');
const brands_block = document.getElementsByClassName('brands')[0];
const close_button = document.getElementById('close');


// Click Handlers
const openBrandView = () => {
    brands_block.style.display = 'none';
}

const closeBrandView = () => {
    
}

// Adding event listeners
for (let block of blocks) {
    block.addEventListener('click', openBrandView);
}

close_button.addEventListener('click', closeBrandView);