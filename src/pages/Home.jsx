import StarBorder from "../components/StarBorder";
import Dock from "../components/Dock";
import SpecularButton from "../components/SpecularButton";
import FoldText from "../components/FoldText";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, GraduationCap } from "lucide-react";
import PixelBlast from "../components/PixelBlast";

function Home() {

  const dockItems = [
    {
      label: "GitHub",
      icon: <FaGithub size={20} />,
      onClick: () => window.open("https://github.com/kaviigfr", "_blank")
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      onClick: () =>
        window.open("https://www.linkedin.com/in/kavijageethika", "_blank")
    },
    {
      label: "Mail",
      icon: <Mail size={20} />,
      onClick: () => {
        window.location.href = "mailto:kavijageethika2006@gmail.com";
      }
    }
  ];

  return (
    <section className="home-page">

      <div className="pixel-background">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#B497CF"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      <div className="home-content">
        <SpecularButton
          size="sm"
          radius={999}
          tint="#ffffff"
          tintOpacity={0.02}
          blur={10}
          textColor="#b9b9b9"
          lineColor="#ffffff"
          baseColor="#343434"
          intensity={1.2}
          shineSize={12}
          shineFade={45}
          thickness={1}
          speed={0.35}
          followMouse
          proximity={220}
          autoAnimate
          disabled
          className="undergraduate-specular"
        >
          <span className="undergrad-content">
            <GraduationCap size={17} strokeWidth={1.8} />
            Undergraduate
          </span>
        </SpecularButton>

        <div className="hero-title">
          <FoldText
            text="KAVIJFR"
            splitBy="char"
            hinge="top"
            duration={0.7}
            stagger={0.07}
            ease="power3.out"
            perspective={800}
            creaseShading={0.55}
            trigger="mount"
            fontSize="clamp(3.2rem, 8vw, 7rem)"
            fontWeight={800}
            color="#f5f5f5"
          />
        </div>

        <div className="hero-roles">
          <StarBorder
            as="div"
            color="#B497CF"
            speed="5s"
            thickness={1}
            className="role-star"
          >
            Software Developer
          </StarBorder>

          <StarBorder
            as="div"
            color="#B497CF"
            speed="5s"
            thickness={1}
            className="role-star"
          >
            Cinematographer
          </StarBorder>
        </div>

        <div className="hero-dock">
          <Dock
            items={dockItems}
            panelHeight={58}
            baseItemSize={42}
            magnification={58}
            distance={140}
            dockHeight={160}
          />
        </div>
      </div>

    </section>
  );
}

export default Home;