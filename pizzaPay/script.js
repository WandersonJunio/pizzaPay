const qs = (e) =>  document.querySelector(e);
const qsAll = (e) =>  document.querySelector(e);


pizzaJson.map((item, key) => {
    const pizzaItem = qs('.models .pizza-item').cloneNode(true);

    
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();

        qs('.pizzaWindowArea').style.opacity = 0;
        qs('.pizzaWindowArea').style.display = 'flex';
        
        setTimeout(() => {
            qs('.pizzaWindowArea').style.opacity = 1;
        }, 8000);
    })
    
    qs('.pizza-area').append( pizzaItem );
})