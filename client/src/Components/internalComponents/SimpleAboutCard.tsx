import React from 'react'

interface Props{
    imgsrc: string;
}

const SimpleAboutCard:React.FC<Props> = ({imgsrc}) => {
  return (
    <div>
      <a href="#" className="block">
  <img
    alt="image"
    src={imgsrc}
    className="h-64 w-96 object-cover sm:h-80 lg:h-96"
  />
</a>
    </div>
  )
}

export default SimpleAboutCard
