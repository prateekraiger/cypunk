import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const V = () => {
  useGSAP(() => {
    gsap.set(".v", { marginTop: "-80vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".v",
          start: "top 90%",
          end: "10% center",
          scrub: 2,
        },
      })
      .to(".first-vd", { opacity: 0, duration: 1, ease: "power1.inOut" });

    gsap.to(
      ".v .img-box",
      {
        scrollTrigger: {
          trigger: ".v",
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
    <section className="v">
      <div className="max-w-lg v-content">
        <h1>V</h1>
        <h2>
          A mercenary outlaw going after a one-of-a-kind implant that is the key
          to immortality.
        </h2>
        <p>
          V is a customizable character, so you can choose their gender,
          appearance, and backstory. They are a mercenary who gets caught up in
          the underworld of Night City.
        </p>

        <div className="v-2">
          <img src="/images/v-2.webp" />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="v-1">
          <img src="/images/v-1.webp" />
        </div>
        <div className="v-3">
          <img src="/images/v-3.webp" />
        </div>
      </div>
    </section>
  );
};

export default V;
