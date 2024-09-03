import React from 'react'

interface Props {
    imgsrc: string;
    title :string;
    description : string;
    defaultText:string;
}

const AboutCards:React.FC<Props> = ({imgsrc,title,description,defaultText}) => {
    
  return (
            <div className='font-monserrat '>
            <a href="#" className="group relative block bg-black">
        <img
            alt=""
            src={imgsrc}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">{defaultText}</p>

            <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
            <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
            >
                <p className="text-sm text-white text-center">
                {description}
                </p>
            </div>
            </div>
        </div>
        </a>
            </div>
  )
}

export default AboutCards
