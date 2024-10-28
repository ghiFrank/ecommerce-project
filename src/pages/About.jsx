import React from "react";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 p-5 md:p-10">
      {/* Image Section */}
      <div className="flex-1">
        <img
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          src="images/about.webp"
          alt="About MyBrand"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 flex flex-col gap-5 justify-center">
        <h1 className="text-4xl font-bold text-black">About MyBrand</h1>

        <p className="text-lg text-gray-700">
          Welcome to MyBrand, a dynamic e-commerce platform born from a passion
          for web development and a desire to create digital solutions that
          reflect both creativity and technical proficiency. This platform is
          more than just a demonstration of coding skills—it is a complete study
          project that mirrors the real challenges and opportunities in today’s
          rapidly evolving e-commerce landscape.
        </p>

        <p className="text-lg text-gray-700">
          At MyBrand, we aim to provide an adaptable and scalable foundation for
          online businesses, showcasing our ability to craft intuitive user
          interfaces, smooth navigation, and high-performance web applications.
          Through the use of modern front-end technologies such as React and
          Tailwind CSS, we've built a platform that’s not only visually
          appealing but also highly functional. From handling user interactions
          to managing complex states, MyBrand demonstrates what a fully
          responsive and user-friendly e-commerce site can look like.
        </p>

        <p className="text-lg text-gray-700">
          Although MyBrand is a study project created to display our learning
          journey, it has been designed with the flexibility to evolve into a
          fully-fledged commercial solution. Whether you're a small business
          looking for an online presence or an established brand in need of a
          modern refresh, the technologies and structure behind MyBrand can
          easily be adapted to meet real-world demands. We believe this project
          is a testament to the power of front-end technologies and the
          potential they hold for the future of online shopping.
        </p>

        <p className="text-lg text-gray-700">
          MyBrand is the result of the collaborative efforts of{" "}
          <strong>Amine Atyq</strong> and <strong>Ayoub Abouchadi</strong>, two
          aspiring software engineers committed to pushing the boundaries of
          what’s possible with web development. With a strong focus on front-end
          technologies, our goal is to not only meet industry standards but
          exceed them by delivering innovative solutions that provide real
          value. We look forward to seeing how MyBrand evolves and how it can be
          applied to future real-world e-commerce projects.
        </p>
      </div>
    </div>
  );
};

export default About;
