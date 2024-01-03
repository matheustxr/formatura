import { Formulario } from "../formulario/Index";


export default function Section2() {
  return (
    <section className="pb-10 w-full lg:min-h-screen bg-[#0d1321] flex flex-col  items-center max-w-screen text-white">
      

      {/* FORM */}
      <div className="lg:mb-32 w-full md:px-5 flex items-center justify-center gap-28">
        <div className="w-full flex justify-center" data-aos="fade-right" data-aos-duration="1800">
          <Formulario />
        </div>
        {/*
        <img
          src={}
          alt="ilustração de um dalmata"
          className="w-[400px] h-[253px] hidden xl:block"
          data-aos="fade-left"
          data-aos-duration="1500"
        />
        */}
      </div>

    
    </section>
  );
}
