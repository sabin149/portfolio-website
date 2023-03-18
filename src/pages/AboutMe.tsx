import useCustomEffect from "hooks/useCustomEffect";

const AboutMe = () => {
  useCustomEffect();
  return (
    <section className="flex items-center justify-center bg-gray-100 px-16 sm:px-0">
      <div className="mx-auto grid max-w-6xl grid-cols-1 place-content-center gap-4 py-16  sm:px-4 md:gap-16 md:py-24 lg:grid-cols-2 ">
        {/* Left column */}
        <div className="order-2 lg:order-1">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">
            Hi, I'm Jane Doe
          </h1>
          <p className="mb-8 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima
            expedita tenetur reprehenderit non dolorum vitae eligendi asperiores
            laudantium at adipisci earum id harum ducimus similique
            necessitatibus sequi ea consectetur facilis, officiis nostrum, dolor
            beatae? Excepturi dolore officia natus hic tempore tenetur. Nihil
            error, eos ex laboriosam commodi vel in voluptatum quasi modi iure
            soluta illo. Debitis ipsum, necessitatibus incidunt quae quia
            suscipit non voluptatem nemo quibusdam tempore ratione voluptate
            iusto! Quod sapiente, reiciendis similique perferendis doloremque
            distinctio ipsa illum qui ipsum adipisci sunt incidunt quaerat
            deserunt officia! Fugit nulla sunt esse fuga quibusdam saepe non
            ducimus dolorem ad provident at omnis tempora, corporis
            necessitatibus obcaecati veritatis eos, ut veniam ullam illum sequi?
            Eaque, nostrum ea laborum corporis rem in vero magnam officia
            expedita deleniti odit porro enim. Quia aliquam velit exercitationem
            blanditiis commodi molestias earum facilis ex tempore cupiditate. Et
            dignissimos recusandae, placeat non eos iure pariatur eligendi
            voluptates ipsa quis harum architecto, commodi, nostrum explicabo
            nam similique nemo. Iure, facere. Temporibus non inventore
            blanditiis unde beatae molestias nostrum soluta rem quam nisi maxime
            ullam, doloremque aliquid magnam quia. Rem laborum doloremque modi
            numquam quos, quo provident assumenda, natus labore ex excepturi vel
            omnis enim non inventore nemo magnam.
          </p>
          <div className="mb-4 flex items-center text-lg text-gray-700">
            <span>Location:</span>
            <span className="ml-2">New York, NY</span>
          </div>
          <div className="mb-4 flex items-center text-lg text-gray-700">
            <span>Website:</span>
            <a
              href="https://www.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-600 hover:text-blue-800"
            >
              example.com
            </a>
          </div>
        </div>
        {/* Right column */}
        <div className="order-1 flex justify-center lg:order-2">
          <img
            src="https://randomwordgenerator.com/img/picture-generator/51e1d3444d5ab10ff3d8992cc12c30771037dbf852547941742673d59f49_640.jpg"
            alt="User avatar"
            className="h-full max-h-96 w-full object-cover object-center shadow-lg md:max-h-full md:w-4/5"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
