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
    '/portfolio/img353.jpg',
    '/portfolio/jazz.jpg',
  ];

  return (
    <div style={{display: 'flex', alignContent: 'center', flexDirection: 'column'}}>
      <div className="galeriePoze">
        {images.map((image, index) => (
          <div
            className="image"
            key={index}
          >
            <img
              src={image}
              alt=""
            />
          </div>
        ))}
      </div>
      <button>sus</button>
    </div>
  );
}
