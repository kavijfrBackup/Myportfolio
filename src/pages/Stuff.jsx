import Plasma from "../components/Plasma";
import Lanyard from "../components/Lanyard";

function Stuff() {
  return (
    <section className="stuff-page">
      <div className="stuff-plasma">
        <Plasma
          color="#B497CF"
          speed={0.4}
          direction="forward"
          scale={1.2}
          opacity={0.7}
          mouseInteractive={false}
          renderScale={1}
          maxDpr={1.5}
          targetFps={60}
          iterations={60}
        />
      </div>

      <p className="maintenance-text">
        Under maintenance — something cool is brewing.
      </p>

      <div className="stuff-lanyard">
        <Lanyard
          frontImage="/lanyard.gif"
          position={[0, 0, 30]}
          gravity={[0, -40, 0]}
          fov={20}
          transparent
        />
      </div>
    </section>
  );
}

export default Stuff;