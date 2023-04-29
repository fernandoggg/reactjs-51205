const products = [
    {
        id: '1',
        name: 'Samsung S21',
        price: 750,
        category: 'celulares',
        img:'https://samsungar.vtexassets.com/arquivos/ids/184303-800-auto',
        stock: 25,
        description:'Procesador: Samsung Exynos 2000, Display: Dynamic AMOLED 2X, Memoria Ram: 8gb ddr4'
    },
    {   
        id: '2',
        name: 'Samsung S22',
        price: 800,
        category: 'celulares',
        img:'https://samsungar.vtexassets.com/arquivos/ids/184278-800-auto',
        stock: 15,
        description:'Procesador: Samsung Exynos 2200, Display: Dynamic AMOLED 2X, Memoria Ram: 8gb ddr4'
    },
        { 
        id: '3',
        name: 'Samsung S23',
        price: 890,
        category: 'celulares',
        img:'https://samsungar.vtexassets.com/arquivos/ids/186515-800-auto',
        stock: 20,
        description:'Procesador: Samsung Exynos 2800, Display: Dynamic AMOLED 2X, Memoria Ram: 8gb ddr5'
    },
        { 
        id: '4',
        name: 'Funda Samsung S21',
        price: 50,
        category: 'accesorios',
        img:'https://samsungar.vtexassets.com/arquivos/ids/165309-800-auto',
        stock: 22,
        description:'TPU silicona flexible y resistente, Funda Kvadrat para el Galaxy S21'
    },
        { 
        id: '5',
        name: 'Funda Samsung S22',
        price: 100,
        category: 'accesorios',
        img:'https://samsungar.vtexassets.com/arquivos/ids/180156-1200-auto',
        stock: 14,
        description:'Cover Galaxy S22 Smart LED View Cover Negro'
    },
    { 
        id: '6',
        name: 'Funda Samsung S23',
        price: 80,
        category: 'accesorios',
        img:'https://samsungar.vtexassets.com/arquivos/ids/187065-1200-auto',
        stock: 27,
        description:'Clear Gadget Cover S23 Transparency'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}