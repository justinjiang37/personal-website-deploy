export default function Recognitions() {
    const recognitions = [
        {
            image: "/images/Recognitions/145672_Main-USC-Viterbi-Logo-480x160-1.png",
            size: "large"
        },
        {
            image: "/images/Recognitions/Formal_Marshall_CardOnWhite-768x269.jpg",
            size: "medium"
        },
        {
            image: "/images/Recognitions/TSSNameLogoFinal.png",
            size: "small"
        },
        {
            image: "/images/Recognitions/original.png",
            size: "medium"
        },
        {
            image: "/images/Recognitions/Screenshot-2023-10-24-at-7.55.37-AM-300x100.png",
            size: "small"
        },
        {
            image: "/images/Recognitions/10509.webp",
            size: "medium"
        },
        {
            image: "/images/Recognitions/9_2016_2UnitPromo_FacSci_Blue282RGB300.jpg",
            size: "medium"
        },
        {
            image: "/images/Recognitions/Wordmark-Bilingual-Colour.png",
            size: "medium"
        },
        {
            image: "/images/Recognitions/cemc_logo_blue_centred.png",
            size: "small"
        },
        {
            image: "/images/Recognitions/cropped-copa-logo small_2.png",
            size: "small"
        },
        {
            image: "/images/Recognitions/Deloitte.svg.png",
            size: "small"
        },
        {
            image: "/images/Recognitions/yale_dept_of_astronomy_logo_yale_blue_600px_5.png",
            size: "medium"
        },
        {
            image: "/images/Recognitions/lahacks_logo.jpeg",
            size: "small"
        },
        {
            image: "/images/Recognitions/RCACS_Crest.png",
            size: "small"
        },
        {
            image: "/images/Recognitions/swim-bc-logo-new.webp",
            size: "small"
        },
        {
            image: "/images/Recognitions/screenshot795.jpg",
            size: "small"
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Recognized By:</h2>
            <div className="gallery-section-wrapper">
                {recognitions.map((recognition, index) => (
                    <div 
                        key={index}
                        className={`gallery-item ${
                            recognition.size === 'large' ? 'gallery-item-large' :
                            recognition.size === 'medium' ? 'gallery-item-medium' :
                            'gallery-item-small'
                        }`}
                    >
                        <img
                            src={recognition.image}
                            alt="Recognition"
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}