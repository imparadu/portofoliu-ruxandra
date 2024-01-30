import { Skeleton } from '@mui/material';
import React, { useState } from 'react';
import BackToTopButton from './BackToTopButton';
import Navigation from './Navigation';

export default function Sketchbook() {
  const images = [
  '/sketchbook/IMG_0682.jpg',
  '/sketchbook/IMG_0683.jpg',
  '/sketchbook/IMG_0684.jpg',
  '/sketchbook/IMG_0685.jpg',
  '/sketchbook/IMG_0686.jpg',
  '/sketchbook/IMG_0687.jpg',
  '/sketchbook/IMG_0689.jpg',
  '/sketchbook/IMG_0690.jpg',
  '/sketchbook/IMG_0691.jpg',
  '/sketchbook/IMG_0693.jpg',
  '/sketchbook/IMG_0695.jpg',
  '/sketchbook/IMG_0698.jpg',
  '/sketchbook/IMG_0699.jpg',
  '/sketchbook/IMG_0700.jpg',
  '/sketchbook/IMG_0701.jpg',
  '/sketchbook/IMG_0702.jpg',
  '/sketchbook/IMG_0703.jpg',
  '/sketchbook/img137.jpg',
  '/sketchbook/img380.jpg',
  '/sketchbook/img413.jpg',
  '/sketchbook/img414.jpg',
  '/sketchbook/img415.jpg',
  '/sketchbook/img417.jpg',
  '/sketchbook/img418.jpg',
  '/sketchbook/img419.jpg',
  ];

  return (
    <div>
      <Navigation />
      <div className="galleryContainer">
        <div className="galeriePoze">
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
            />
          ))}
        </div>
        <BackToTopButton />
      </div>
    </div>
  );
}

function Image(props) {
  const { src } = props;
  const [isLoading, setIsLoading] = useState(true);
  const handleOnLoad = () => {
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
        className="portfolioSketchbookImages"
        src={src}
        alt=""
        onLoad={handleOnLoad}
      />
    </div>
  );
}
