import Plasma from "../components/Plasma";
import Lanyard from "../components/Lanyard";

function Stuff() {
  return (
    <section className="stuff-page">
      <div className="stuff-plasma">
        <Plasma
          color="#B497CF"
          speed={0.35}
          direction="forward"
          scale={1.2}
          opacity={0.65}
          mouseInteractive={false}
          renderScale={0.65}
          maxDpr={1.5}
          targetFps={30}
          iterations={40}
        />
      </div>

  
    </section>
  );
}

export default Stuff;