export function Product(item, array) {
    const dialog = document.querySelector('dialog')
    const exit = dialog.querySelector('.exit')
    const inp = dialog.querySelector('.change_input')
    const save = dialog.querySelector('.save')

    const product = document.createElement('div')
    const first = document.createElement('div')
    const second = document.createElement('div')
    const name_prod = document.createElement('h2')
    const time_prod = document.createElement('h3')
    const delete_btn = document.createElement('button')
    const change_btn = document.createElement('button')
    const img_delete = document.createElement('img')
    const img_change = document.createElement('img')


    product.classList.add('product')
    name_prod.classList.add('name_prod')
    time_prod.classList.add('time_prod')
    delete_btn.classList.add('delete_btn')
    change_btn.classList.add('change_btn')
    second.classList.add('second')

    img_delete.src = './svg/delete.svg'
    img_change.src = './svg/change.svg'

    name_prod.innerHTML = item.title
    time_prod.innerHTML = new Date().toLocaleTimeString()


    product.append(first, second)
    first.append(name_prod, time_prod)
    second.append(delete_btn, change_btn)
    delete_btn.append(img_delete)
    change_btn.append(img_change)

    if (item.isDone) {
        name_prod.classList.add(time_prod_isDone)
    }

    delete_btn.onclick = () => {
        let idx = array.indexOf(item)
        array.splice(idx, 1)
        product.remove()
    }



    change_btn.onclick = () => {
        inp.value = name_prod.innerHTML;
        dialog.showModal();

        save.onclick = (e) => {
            e.preventDefault();
            name_prod.innerHTML = inp.value;
            dialog.close();
        };
    };


    exit.onclick = () => {
        dialog.close()
    }
   
    name_prod.onclick = () => {
        item.isDone = !item.isDone
        name_prod.classList.toggle(`time_prod_isDone`, item.isDone)
        console.log();
    }

    return product
}
