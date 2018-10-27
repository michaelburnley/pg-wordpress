// Brand View

// Element Variables
const blocks = document.getElementsByClassName('brand-block');
const brands_block = document.getElementById('brand_tile_wrapper');
const brand_large = document.getElementById('brand-large-image');
const close_button = document.getElementById('close');


// Click Handlers
const openBrandView = (e) => {
    brand_large.children[0].src = e.target.dataset.gallery;
    brands_block.style.opacity = '0';
    brands_block.style.visibility = 'hidden';
    brand_large.style.visibility = 'visible';
    brand_large.style.opacity = '1';
}

const closeBrandView = () => {
    brands_block.style.visibility = 'visible';
    brand_large.style.visibility = 'hidden';
    brand_large.style.opacity = '0';
    brands_block.style.opacity = '1';
    brand_large.children[0].src = "";
}

// Adding event listeners
for (var block of blocks) {
    console.log("test");
    console.log(block);
    block.addEventListener('click', openBrandView);
}

close_button.addEventListener('click', closeBrandView);