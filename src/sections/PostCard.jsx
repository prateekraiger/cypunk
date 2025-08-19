import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

const PostCard = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".post-card",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      // Removed currentTime animation to prevent lag
    };
  });

  return (
    <section className="post-card">
      <div className="animated-gradient-bg" />

      <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700">
        <div className="video-border-wrapper">
          <video
            ref={videoRef}
            muted
            playsInline
            autoPlay
            preload="auto"
            src="/videos/postcard-vd.mp4"
          />
        </div>

        <button
          className="group-hover:bg-yellow transation duration-700"
          onClick={handlePlayPause}
        >
          {isPlaying ? "Pause Video" : "Play Video"}
        </button>
      </div>
    </section>
  );
};

export default PostCard;
