import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Judy = () => {
  useGSAP(() => {
    gsap.set(".lucia-life", { marginTop: "-80vh" });

    

    gsap.to(
      ".lucia-life .img-box",
      {
        scrollTrigger: {
          trigger: ".lucia-life",
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -300,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );
  });

  return (
    <section className="judy-life">
      <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-10 mt-96">
        <div className="judy-1">
          <img src="/images/Judy-1.webp" />
        </div>
        <div className="judy-3">
          <img src="/images/Judy-3.webp" />
        </div>
      </div>

      <div className="lg:w-1/2 lucia-life-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1>Judy Alvarez</h1>
          <h2>A skilled braindance technician with a strong moral compass.</h2>
          <p>
            Born in Laguna Bend, Judy is a deeply empathetic and independent individual. She uses her technical skills to help others, rejecting corporate offers. A member of the Mox gang, she fights for the marginalized in Night City.
          </p>
        </div>

        <div className="lucia-2">
          <img src="/images/Judy-2.webp" />
        </div>

        <p className="max-w-xl lg:ps-32 ps-10">
          Judy's anarchist spirit and inability to tolerate injustice often lead her into trouble, but these traits are also her greatest virtues. She is driven by a desire to improve the lives of Night City's residents.
          </p>
      </div>
    </section>
  );
};

export default Judy;
