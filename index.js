const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeClassStreched();
        item.classList.add('streched');
    })
    removeClassStreched = () => {
        items.forEach(item => {
            item.classList.remove('streched');
        })
    }
})


const itemName = document.querySelector