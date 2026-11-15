interface Props {
  images: string[];
}

export default function TourGallery({
  images,
}: Props) {
  if (!images?.length) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto py-1">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div
          className="col-span-2 md:col-span-2 md:row-span-2
             md:h-[450px]
             overflow-hidden rounded-md cursor-pointer"
        >
          <img
            loading="lazy"
            src={images[0]}
            alt="Main tour"
            className="w-full h-full object-cover hover:scale-110 transition duration-500"
          />
        </div>

        {images.slice(1, 5).map((img, index) => (
          <div
            key={`${img}-${index}`}
            className="h-[150px] md:h-[220px] overflow-hidden rounded-md cursor-pointer"
          >
            <img
              loading="lazy"
              src={img}
              alt={`Tour ${index + 2}`}
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
