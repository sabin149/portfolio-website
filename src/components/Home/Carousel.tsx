import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import myCV from "assets/1.pdf";
import { bannerImagesData } from "data/Data";

const Carousel = () => {
  return (
    <section>
      <Fade duration={3000}>
        {bannerImagesData.map((image) => {
          return (
            <div
              key={image.id}
              className="flex items-center justify-center bg-cover h-96"
              style={{
                backgroundImage: `url(${image.imageUrl})`,
              }}
            >
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <a
                  className="px-4 py-2 mt-80 text-lg font-bold text-white bg-blue-500 hover:bg-blue-600 rounded-full transition duration-300 ease-in-out"
                  href={myCV}
                  download
                >
                  Download CV &#8594;
                </a>
              </div>
            </div>
          );
        })}
      </Fade>
    </section>
  );
};

export default Carousel;
