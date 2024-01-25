import { Skeleton } from '@mui/material';
import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const images = [
    '/portfolio/A bucket full of tears.jpg',
    '/portfolio/big tony.jpg',
    '/portfolio/bus.jpg',
    '/portfolio/Calendar.jpg',
    '/portfolio/carols.jpg',
    '/portfolio/cat.jpg',
    '/portfolio/chair.jpg',
    '/portfolio/field.jpg',
    '/portfolio/Galle Fort - Dutch Reformed Church.jpg',
    '/portfolio/granny.jpg',
    '/portfolio/img353.jpg',
    '/portfolio/jazz.jpg',
    '/portfolio/letter.jpg',
    '/portfolio/Milk.jpg',
    '/portfolio/Mr cover.jpg',
    '/portfolio/museum.jpg',
    '/portfolio/nurse.jpg',
    '/portfolio/ny.jpg',
    '/portfolio/Photo 19.01.2024, 20 19 06 (1).jpg',
    '/portfolio/Photo 19.01.2024, 20 19 06 (2).jpg',
    '/portfolio/Photo 19.01.2024, 20 19 06 (6).jpg',
    '/portfolio/Photo 19.01.2024, 20 19 06 (8).jpg',
    '/portfolio/Photo 19.01.2024, 20 19 06.jpg',
    '/portfolio/pigeon.jpg',
    '/portfolio/santa.jpg',
    '/portfolio/sewer.jpg',
    '/portfolio/Snow.jpg',
    '/portfolio/staircase_smaLL.jpg',
    '/portfolio/stockings2.jpg',
    '/portfolio/store.jpg',
    '/portfolio/tea.jpg',
    '/portfolio/train.jpg',
    '/portfolio/window.jpg',
  ];

  return (
    <div className="galleryContainer">
      <div className="galeriePoze">
        {images.map((image, index) => (
          <Image
            src={image}
            key={index}
          />
        ))}
      </div>
      <button>sus</button>
    </div>
  );
}

function Image(props) {
  const { src } = props;
  const [isLoading, setIsLoading] = useState(true);
  const handleOnLoad = () => {
    console.log('yey');
    setIsLoading(false);
  };
  return (
    <div className="image">
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width={200} // Set the desired width of your skeleton
          height={150} // Set the desired height of your skeleton
        />
      )}
      <img
        className="testing"
        src={src}
        alt=""
        onLoad={handleOnLoad}
      />
    </div>
  );
}
