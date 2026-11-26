import StarBorder from "../components/StarBorder";
import Dock from "../components/Dock";
import SpecularButton from "../components/SpecularButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Briefcase, Mail, GraduationCap } from "lucide-react";
import PixelBlast from "../components/PixelBlast";

const badges = [
  { label: "Co-Founder & CEO  at Arqeno", Icon: Briefcase },
  { label: "Undergraduate", Icon: GraduationCap }
];

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
    },
    {
      label: "Arqeno",
      icon: <img src="/arqeno-logo.png" alt="" width={20} height={20} />,
      onClick: () => window.open("https://arqeno.work", "_blank", "noopener,noreferrer")
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
        <img
          className="profile-picture"
          src="/profile.png"
          alt="Silhouette at a computer workstation"
          width={150}
          height={150}
        />

        <div className="profile-badges">
          {badges.map(({ label, Icon }) => (
            <SpecularButton
              key={label}
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
              className="profile-badge"
            >
              <span className="profile-badge-content">
                <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                {label}
              </span>
            </SpecularButton>
          ))}
        </div>

        <div className="hero-roles">
          <StarBorder
            as="div"
            color="#B497CF"
            speed="5s"
            thickness={1}
            className="role-star"
          >
            Aspiring Software Engineer
          </StarBorder>

          <StarBorder
            as="div"
            color="#B497CF"
            speed="5s"
            thickness={1}
            className="role-star"
          >
            Network &amp; Security Enthusiast
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
