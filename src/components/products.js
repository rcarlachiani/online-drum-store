export const productos = [
    {id: 1, nombre: 'Vic-Firth 5A (Wood tip)', imagen: 'https://i.ibb.co/nQY5357/Vic-firth.jpg', precio: '$1200'},
    {id: 2, nombre: 'Los Cabos 5A (Wood tip)', imagen: 'https://i.ibb.co/fDGSjWT/Los-cabos.jpg', precio: '$1250'},
    {id: 3, nombre: 'Vater 5A (Wood tip)', imagen: 'https://i.ibb.co/9VnbPDT/Vater.jpg', precio: '$1150'},
    {id: 4, nombre: 'Pro-Mark 5A (Wood tip)', imagen: 'https://i.ibb.co/Lgxm91T/Pro-mark.jpg', precio: '$1300'}
]

export const renderProd = new Promise ((resolve, reject)=>{
    let condicion = true
    if (condicion){
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    }else{
        reject('Error')
    }
})