const IndividualNonLinkProduct = ({ details }) => {
  const images =
    Array.isArray(details.productImages) && details.productImages.length > 0
      ? details.productImages
      : [{ url: "/product-images/nails.png", public_id: "default" }];

  const uniqueId = details._id;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-[var(--darksage)] hover:shadow-lg transition duration-300">
      {/* Carousel */}
      <div className="carousel w-full h-60 relative bg-[var(--sage)]">
        {images.map((image, index) => (
          <div
            key={image.public_id || index}
            id={`slide-${uniqueId}-${index}`}
            className="carousel-item relative w-full"
          >
            <img
              src={image.url}
              alt={`product-${index}`}
              className="w-full h-60 object-contain rounded-t-2xl"
            />
            {images.length > 1 && (
              <div
                className="absolute left-4 right-4 top-1/2 flex justify-between transform -translate-y-1/2"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={`#slide-${uniqueId}-${
                    (index - 1 + images.length) % images.length
                  }`}
                  className="btn btn-xs btn-circle bg-white text-[var(--sage)] border-none shadow"
                >
                  ❮
                </a>
                <a
                  href={`#slide-${uniqueId}-${(index + 1) % images.length}`}
                  className="btn btn-xs btn-circle bg-white text-[var(--sage)] border-none shadow"
                >
                  ❯
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[var(--darkgreen)] mb-2">
          {details.name}
        </h3>
        <p className="text-sm text-gray-500 mb-1">
          <span className="font-medium text-gray-700">Category:</span>{" "}
          {details.category}
        </p>
        <p className="text-lg font-bold text-gray-800 mb-1">
          Rs. {details.price}
        </p>
        <p className="text-sm text-gray-500 mb-1">
          <span className="font-medium">Condition:</span> {details.condition}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-medium">Negotiable:</span>{" "}
          {details.negotiable ? "Yes" : "No"}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-medium">Status:</span>{" "}
          <span
            className={`${details.status === "rejected" ? "text-red-700" : ""}`}
          >
            {details.status}
          </span>
        </p>
      </div>
    </div>
  );
};

export default IndividualNonLinkProduct;
