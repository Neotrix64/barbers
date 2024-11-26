import { useState, useEffect } from "react";

function NavBar() {
  const [hidden, setHidden] = useState(false); // Estado booleano que indica si el nav inferior debe ocultarse
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    // Si el scroll va hacia abajo, oculta el nav inferior
    if (window.scrollY > lastScrollY) {
      setHidden(true);
    } else {
      setHidden(false); // Si el scroll va hacia arriba, muestra el nav inferior
    }
    setLastScrollY(window.scrollY); // Actualiza la posición del scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpiar el evento al desmontar el componente
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`grid text-white font-space text-lg tracking-wider w-screen fixed bg-black duration-300 z-10 ${
          hidden ? "-pb-5" : "pb-7"
        }`}
      >
        <div className="upperSection flex justify-between m-7 bg-black">
          <p className="">LOGO</p>
          <details className="relative">
            <summary className="list-none">
            <p>SERVICES</p>
            </summary>
            <ul className="absolute list-none bg-gray-900 w-max rounded-xl flex right-2">
                <div className="li px-1 py-3">
                <li>Hair Washing</li>
                <li>Hair Washing</li>
                </div>
                
            </ul>
          </details>
          
          <button className="bg-[#CBA140] w-24 rounded-2xl h-8 tracking-widest">
            AUTH
          </button>
        </div>

        {/* Nav inferior que se mueve hacia arriba o se oculta */}
        <div
          className={`lowSection flex justify-around duration-300 z-0  ${
            hidden ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex gap-10">
            <a href="#">Our Plans</a>
            <a href="#">Hair Products</a>
            <a href="#">Our Plans</a>
            <a href="#">Contacts</a>
            <a href="#">Location</a>
          </div>
          <div className="socalMedia flex gap-3">
            <p>Fb</p>
            <p>ig</p>
            <p>x</p>
            <p>Y</p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
