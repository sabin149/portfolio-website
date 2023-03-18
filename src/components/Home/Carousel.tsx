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
              className="flex h-96 items-center justify-center bg-cover"
              style={{
                backgroundImage: `url(${image.imageUrl})`,
              }}
            >
              <div className="relative z-10 flex h-full flex-col items-center justify-center">
                <a
                  className="mt-80 rounded-full bg-indigo-500 px-4 py-2 text-lg font-bold text-gray-50 transition duration-300 ease-in-out hover:bg-indigo-600"
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
