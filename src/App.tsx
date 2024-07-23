import AOS from 'aos';
import { Formulario } from "./components/formulario/Index";

import 'aos/dist/aos.css';

import Footer from "./components/footer/Index"
import mozao from "./assets/images/mozao.webp"

function App() {
  AOS.init();

  return (
    <>
      <main>
        <section className="w-full min-h-screen pt-[20px] md:px-[5%] bg-gradient-to-b lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1ff5f0] via-[#0b5d5b] via-35% md:via-25% to-[#0d1321] to-55% md:to-70%">
          <div className="flex flex-col lg:flex-row md:justify-center md:items-center">
            <img
              src={mozao}
              alt=""
              className="w-full  md:max-w-lg xl:max-w-xl "
              data-aos="fade-right"
              data-aos-duration="1500"
            />
            <div
              className="w-full xl:max-w-[700px] px-5 md:px-0 flex flex-col items-center lg:items-start gap-4 md:justify-center "
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <h1 className="my-5 text-[60px] leading-[60px] md:text-[115px] md:leading-[100px] xl:text-[115px] lg:leading-[100px] font-bold text-white text-center lg:text-start">
                Formatura <br /> Eduarda
              </h1>
            
              <p className="md:w-[80%] lg:w-full  font-semibold text-white text-center md:text-start  md:text-[20px]">
                Espero que estejam tão empolgados quanto eu para a minha festa de formatura! Para garantir que tudo seja perfeito, peço a gentileza de confirmarem a presença até 20/01.
              </p>
            </div>
          </div>
        </section>
        

        <section className="pb-10 w-full bg-[#0d1321] flex flex-col  items-center max-w-screen text-white">
          {/* FORM */}
          <div className="py-10 w-full md:px-5 flex items-center justify-center gap-28" data-aos="fade-right" data-aos-duration="1800">
            <Formulario />
          </div>
        </section>
      </main>

      <Footer />

    </>
  )
}

export default App
