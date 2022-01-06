export const productos = [
    {
        id: 1, 
        nombre: 'Vic-Firth 5A (Wood tip)', 
        imagen: 'https://i.ibb.co/nQY5357/Vic-firth.jpg', 
        precio: '$1200', 
        stock: 10,
        desc: 'Madera: Hickory | Punta: Madera | Longitud: 40.64cm | Diámetro: 1.44cm'
    },
    {
        id: 2, 
        nombre: 'Los Cabos 5A (Wood tip)', 
        imagen: 'https://i.ibb.co/fDGSjWT/Los-cabos.jpg', 
        precio: '$1250', 
        stock: 5,
        desc: 'Madera: Hickory | Punta: Madera | Longitud: 40.55cm | Diámetro: 1.42cm'
    },
    {
        id: 3, 
        nombre: 'Vater 5A (Wood tip)', 
        imagen: 'https://i.ibb.co/9VnbPDT/Vater.jpg', 
        precio: '$1150', 
        stock: 8,
        desc: 'Madera: Hickory | Punta: Madera | Longitud: 41.00cm | Diámetro: 1.43cm'
    },
    {
        id: 4, 
        nombre: 'Pro-Mark 5A (Wood tip)', 
        imagen: 'https://i.ibb.co/Lgxm91T/Pro-mark.jpg', 
        precio: '$1300', 
        stock: 3,
        desc: 'Madera: Hickory | Punta: Madera | Longitud: 40.84cm | Diámetro: 1.46cm'
    }
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