export default function Hobbies() {
    const hobbies = [
        {
            image: "/images/Hobbies/IMG_2846.jpg",
            size: "small"
        },
        {
            image: "/images/Hobbies/DSC03333.jpg",
            size: "small"
        },
        {
            image: "/images/Hobbies/IMG_6223.png",
            size: "small"
        },
        {
            image: "/images/Hobbies/IMG_6257.png",
            size: "small"
        },
        {
            image: "/images/Hobbies/IMG_6258.png",
            size: "small"
        },
        {
            image: "/images/Hobbies/IMG_2784.jpg",
            size: "small"
        },
        {
            image: "/images/Hobbies/IMG_2655.jpg",
            size: "small"
        },
        {
            image: "/images/Hobbies/DSC_0286_Original.jpg",
            size: "small"
        },
        {
            image: "/images/Hobbies/8b81efed172430e54e25bf45b74479cb.jpg",
            size: "small"
        },
        {
            image: "/images/Hobbies/9b5b8a5e80fd0a968cabcdb9a1294a17.jpg",
            size: "small"
        },
        {
            image: "/images/Hobbies/a69a9ee251f58e6c7acb4b957ec65316.jpg",
            size: "small"
        },
        {
            image: "/images/Hobbies/a0717f8f3a56693dc8271fcae16b9aa3.jpg",
            size: "small"
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Hobbies</h2>
          
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {hobbies.map((hobby, index) => (
              <img
                key={index}
                src={hobby.image}
                alt="Hobby"
                className="w-full h-auto break-inside-avoid"
              />
            ))}
          </div>
        </div>
      );      
}