import { motion } from 'motion/react';

const experience = [
  { period: '2022 — 2023', company: 'Zhelezno', role: 'Product designer', focus: 'Product design • Testings • Custdev' },
  { period: '2021 — 2021', company: 'ServiceHub', role: 'UX/UI designer', focus: 'UX/UI • Graphic design' },
  { period: '2020 — 2021', company: 'Apple Concierge', role: 'UX/UI designer', focus: 'Product design • Testings • Custdev' },
  { period: '2020 — 2020', company: 'CTC Media', role: 'Web designer', focus: 'Product design • Testings • Custdev' },
  { period: '2019 — 2020', company: 'Tradesoft company', role: 'Web designer', focus: 'Product design • Testings • Custdev' },
];

export default function About() {
  return (
    <main className="w-full bg-[#181818]">
      <div className="mx-auto w-full max-w-[1280px] px-[clamp(24px,6.25vw,80px)] pb-[clamp(104px,11vw,144px)] pt-[clamp(150px,15vw,192px)]">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="grid grid-cols-1 items-start gap-12 border-t border-white/35 pt-[42px] lg:grid-cols-[minmax(320px,412px)_minmax(0,1fr)] lg:gap-[clamp(48px,5vw,72px)]"
      >
        <div>
          <h1 className="text-[36px] font-normal leading-[1.15] tracking-[-0.035em] text-white">Kate Mel</h1>
          <p className="mt-1 text-[20px] font-light italic leading-[1.35] text-white/65">Product and UX designer</p>

          <div className="mt-5 space-y-6 text-[20px] font-light leading-[1.55] text-white/80">
            <p>
              Product designer with over 5 years of experience. I specialize in creating complex interfaces.
              Worked with banking services, marketplace systems and complex products for management companies.
            </p>
            <p>
              I&apos;m aiming to balance user convenience with development constraints. My experience includes
              creating interfaces for dispatching systems, smart device scenarios, camera archive viewing and ex.
              I apply usability testing, storyboarding, customer journey maps (CJMs), service blueprints, and other
              techniques to make interfaces clear and simple.
            </p>
          </div>
        </div>

        <div className="overflow-hidden bg-[#6f9a80]">
          <img src="./kate-mel.avif" alt="Kate Mel" className="block aspect-[3/4] h-auto w-full object-cover" />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mt-[clamp(104px,14vw,176px)]"
      >
        <h2 className="text-[36px] font-normal leading-[1.15] tracking-[-0.035em] text-white">Experience</h2>

        <div className="mt-12 border-t border-white/25">
          {experience.map((item) => (
            <div
              key={`${item.company}-${item.period}`}
              className="grid grid-cols-1 gap-2 border-b border-white/15 py-7 text-[16px] font-light leading-[1.4] text-white/80 sm:grid-cols-2 lg:grid-cols-[0.8fr_0.95fr_0.95fr_1.2fr] lg:gap-8"
            >
              <p className="text-white/55">{item.period}</p>
              <p className="text-white">{item.company}</p>
              <p>{item.role}</p>
              <p className="text-white/55">{item.focus}</p>
            </div>
          ))}
        </div>
      </motion.section>
      </div>
    </main>
  );
}
