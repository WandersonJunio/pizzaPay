const qs = (e) =>  document.querySelector(e);
const qsAll = (e) =>  document.querySelectorAll(e);

let modalQt = 1;

pizzaJson.map((item, key) => {
    const pizzaItem = qs('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', key);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        
        qs('.pizzaWindowArea').style.opacity = 0;
        qs('.pizzaWindowArea').style.display = 'flex';

        setTimeout(() => {
            qs('.pizzaWindowArea').style.opacity = 1;
        }, 100);
        
        qs('.pizzaBig img').src = pizzaJson[key].img;
        qs('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;;
        qs('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        qs('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        
        qs('.pizzaInfo--size.selected').classList.remove('selected');
        qsAll('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            if (sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });
        
        qs('.pizzaInfo--qt').innerHTML = modalQt;
    })
    
    qs('.pizza-area').append( pizzaItem );
})

function modalClose(className) {
    qs(`${className}`).addEventListener('click', (e) => {
        qs('.pizzaWindowArea').style.opacity = 0;
        
        setTimeout(() => {
            qs('.pizzaWindowArea').style.display = 'none';
        }, 500);
        
    })
    
}

modalClose('.pizzaInfo--cancelMobileButton');
modalClose('.pizzaInfo--cancelButton');

qs('.pizzaInfo--qtmais').addEventListener('click', (e) => {
    modalQt++;
    qs('.pizzaInfo--qt').innerHTML = modalQt;
})

qs('.pizzaInfo--qtmenos').addEventListener('click', (e) => {
    if (modalQt > 1) {
        modalQt--;
        qs('.pizzaInfo--qt').innerHTML = modalQt;
    }
})

function dimissButonSub(){
    qs('.pizzaInfo--qtmenos').style.display = 'none';
}
