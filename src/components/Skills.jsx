const skills = [
  { name: "JavaScript", icon: "/assets/skills/javascript.svg" },
  { name: "PHP", icon: "/assets/skills/php.svg" },
  { name: "Laravel", icon: "/assets/skills/laravel.svg" },
  { name: "Tailwind CSS", icon: "/assets/skills/tailwindcss.svg" },
  { name: "React", icon: "/assets/skills/react.svg" },
  { name: "Node.js", icon: "/assets/skills/nodejs.svg" },
  { name: "Vite", icon: "/assets/skills/vite.svg" },
  { name: "MySQL", icon: "/assets/skills/mysql.svg" },
  { name: "Figma", icon: "/assets/skills/figma.svg" },
  { name: "Github", icon: "/assets/skills/github.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h4 className="font-semibold text-primary text-lg mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">Skills</h4>
          <h2 className="font-bold text-slate-800 text-3xl mb-4 lg:text-5xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Kemampuan saya</h2>
          <p className="font-medium text-secondary md:text-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">Teknologi dan tools yang saya gunakan dalam membangun proyek.</p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <div key={skill.name} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100} data-aos-once="true">
              <div
                className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <img src={skill.icon} alt={skill.name} className="h-14 w-14" />
                <span className="font-semibold text-slate-800">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;