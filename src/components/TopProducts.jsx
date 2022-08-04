import React from 'react'
import productOne from '../assets/product-two.png'
function TopProducts() {
    const products = [
        { id: 1, title: "Women’s Placement Thinstrap", infoOne: "Muscleback Swimsuit Blue/Black", infoTwo: 'Συνδεθείτε για να δείτε την τιμή', imgURL: productOne },

        { id: 2, title: "Women’s Placement Thinstrap", infoOne: "Muscleback Swimsuit Blue/Black", infoTwo: 'Συνδεθείτε για να δείτε την τιμή', imgURL: productOne },

        { id: 3, title: "Women’s Placement Thinstrap", infoOne: "Muscleback Swimsuit Blue/Black", infoTwo: 'Συνδεθείτε για να δείτε την τιμή', imgURL: productOne },

        { id: 4, title: "Women’s Placement Thinstrap", infoOne: "Muscleback Swimsuit Blue/Black", infoTwo: 'Συνδεθείτε για να δείτε την τιμή', imgURL: productOne },

        { id: 5, title: "Women’s Placement Thinstrap", infoOne: "Muscleback Swimsuit Blue/Black", infoTwo: 'Συνδεθείτε για να δείτε την τιμή', imgURL: productOne },

        { id: 6, title: "Women’s Placement Thinstrap", infoOne: "Muscleback Swimsuit Blue/Black", infoTwo: 'Συνδεθείτε για να δείτε την τιμή', imgURL: productOne },

        { id: 7, title: "Women’s Placement Thinstrap", infoOne: "Muscleback Swimsuit Blue/Black", infoTwo: 'Συνδεθείτε για να δείτε την τιμή', imgURL: productOne },

        { id: 8, title: "Women’s Placement Thinstrap", marker: true, infoOne: "Muscleback Swimsuit Blue/Black", infoTwo: 'Συνδεθείτε για να δείτε την τιμή', imgURL: productOne },

        { id: 9, title: "Women’s Placement Thinstrap", infoOne: "Muscleback Swimsuit Blue/Black", infoTwo: 'Συνδεθείτε για να δείτε την τιμή', imgURL: productOne },

        { id: 10, title: "Women’s Placement Thinstrap", infoOne: "Muscleback Swimsuit Blue/Black", infoTwo: 'Συνδεθείτε για να δείτε την τιμή', imgURL: productOne }
    ];
    return (
        <div className='grid grid-cols-2 gap-[5px] md:gap-[10px] my-[20px] lg:gap-[15px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {
                products.map(product => {
                    return <ProductCard product={product} key={product.id} />
                })
            }
        </div>
    )
}

export default TopProducts


const ProductCard = ({ product }) => {
    const { imgURL, title, infoOne, infoTwo } = product;
    return (
        <div className='shadow-md rounded-md md:p-4 p-2 hover:bg-[#f6f6f6] transition-all cursor-pointer'>
            <div className='flex justify-center'>
                <img src={imgURL} className=' hover:scale-[1.03] rounded-[12px]  transition-all bg-[#f6f6f6] max-w-full h-[130px] md:h-[152px] mb-3' />
            </div>
            <hr className='shaodow-[#00000036] h-[3px] bg-[#00000036] mb-3' />
            <h1 className='text-[16px] text-[#212121]'>{title}</h1>
            <p className='mb-3 text-[14px] text-[#5A5A5A]'>{infoOne}</p>
            <p className={`mb-3 text-[14px]  ${product.marker ? "text-[#DD1B1E]" : "text-[#5A5A5A]"}`}>{infoTwo}</p>
        </div>
    )
}