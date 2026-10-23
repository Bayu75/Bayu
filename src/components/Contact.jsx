const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-primary text-lg mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">Kontak</h4>
            <h2 className="font-bold text-slate-800 text-3xl mb-4 lg:text-5xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Hubungi Saya</h2>
            <p className="font-medium text-md text-secondary md:text-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">Silahkan untuk menghubungi saya dengan mengisi form di bawah ini.</p>
          </div>
        </div>

        <form action="https://formsubmit.co/kadekbayu322@gmail.com" method="POST">
          <div className="w-full lg:w-2/3 lg:mx-auto" >
            <div className="w-full px-4 mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
              <label htmlFor="name" className="text-base font-bold text-primary">Nama</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                className="w-full bg-slate-200 text-slate-800 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>

            <div className="w-full px-4 mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
              <label htmlFor="email" className="text-base font-bold text-primary">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className="w-full bg-slate-200 text-slate-800 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>

            <div className="w-full px-4 mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" data-aos-once="true">
              <label htmlFor="message" className="text-base font-bold text-primary">Pesan</label>
              <textarea 
                id="message"
                name="message"
                required
                className="w-full bg-slate-200 text-slate-800 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
              ></textarea>
            </div>

            <div className="w-full px-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" data-aos-once="true">
              <button 
                type="submit"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-300"
              >
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;