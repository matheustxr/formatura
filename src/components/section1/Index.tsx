import farinha from "../../assets/images/mozao.webp";

export default function Section1() {
  return (
    <section className="w-full min-h-screen pt-[20px] md:px-[5%] bg-gradient-to-b lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1ff5f0] via-[#0b5d5b] via-35% md:via-25% to-[#0d1321] to-55% md:to-70%">
      <div className="flex flex-col lg:flex-row md:justify-center md:items-center">
        <img
          src={farinha}
          alt=""
          className="w-full  md:max-w-lg xl:max-w-xl "
          data-aos="fade-right"
          data-aos-duration="1500"
        />
        <div
          className="w-full px-5 md:px-0 flex flex-col items-center md:w-[60%] max-w-[600px] md:justify-center"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div className="w-full flex flex-col">
            <h1 className="mb-5 text-[60px] md:text-[115px] leading-[75px] md:leading-[100px] font-bold text-white text-center lg:text-start">
              Formatura Eduarda
            </h1>
            <span className='w-full text-[20px] font-normal text-center  text-white border-[2px] rounded-xl'>A nutricionista do ano!!</span>
          </div>
          <h2 className="mt-4 font-semibold text-white text-center md:text-start mb-10 md:text-[20px]">
            Espero que estejam tão empolgados quanto eu para a minha festa de formatura! Para garantir que tudo seja perfeito, peço a gentileza de confirmarem a presença até 20/01.
          </h2>
        </div>
      </div>
    </section>
  );
}
