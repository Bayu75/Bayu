const Hero = () => {
  return (
      <section id="home" className="py-40"> 
        <div className="container mx-auto">
          <div className="flex flex-wrap" >
            <div className="w-full self-center px-4 lg:w-1/2 animate__animated animate__fadeInUp">
              <h1 className="text-base font-semibold text-primary md:text-xl">Halo semuanya, saya <span className="block text-4xl text-slate-800 font-bold lg:text-5xl">Kadek Bayu Dwi Pradnya</span></h1>
              <h2 className="text-lg text-slate-800 font-medium mb-4 pt-1 lg:text-xl">Mahasiswa Informatika</h2>
              <p className="font-medium text-slate-500 mb-8 leading-relaxed"> Dengan informatika mari kembangkan teknologi demi dunia yang lebih baik.</p>
              <div className="flex flex-wrap gap-3 ">
                <a href="/assets/cv/CV-Bayu.pdf" target="_blank" className="flex gap-2 text-base font-semibold bg-primary px-8 py-3 rounded-full text-white hover:shadow-lg hover:opacity-70 transition duration-100 ease-in-out">Unduh CV <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.877a2 2 0 0 0 1.94-1.515L22 17" /></svg></a>
                <a href="#contact" className="text-base font-semibold bg-primary px-8 py-3 rounded-full text-white hover:shadow-lg hover:opacity-70 transition duration-100 ease-in-out">Hubungi saya</a>
              </div>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-0 lg:right-0 animate__animated animate__fadeInUp animate__delay-1s">
                <img width="400" height="400" src="/assets/me.png" alt="Foto Bayu" className="max-w-full mx-auto " />
                <span className="absolute bottom-10 -z-1 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="oklch(62.3% 0.214 259.815)" d="M55.3,-30C64.4,-16.1,59.6,7.7,48,27.3C36.5,46.8,18.2,62,0.5,61.7C-17.3,61.5,-34.7,45.7,-44.4,27.2C-54.2,8.7,-56.4,-12.6,-47.7,-26.1C-39.1,-39.7,-19.5,-45.6,1.8,-46.6C23.1,-47.6,46.2,-43.8,55.3,-30Z" transform="translate(100 100) scale(1.5)" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero;