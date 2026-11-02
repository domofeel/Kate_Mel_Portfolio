import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { portfolioContent, portfolioVariant } from '../config/portfolio';
import { projects } from '../data/projects';

export default function Home() {
  const imageClassName =
    "w-full h-full object-cover block transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.08]";

  return (
    <main data-typography="prose" className="mx-auto max-w-[2048px] bg-[#181818] px-[clamp(24px,6.25vw,128px)] pt-[clamp(120px,9vw,180px)]">
      <header className={portfolioVariant === 'ux-ui' ? 'mb-[clamp(104px,10vw,160px)]' : 'mb-[clamp(88px,8vw,160px)]'}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h1 className="text-[min(6rem,21vw)] md:text-[9rem] lg:text-[12rem] xl:text-[13rem] leading-[1em] font-sans font-normal tracking-[-0.04em] text-white mb-[60px]">
            {portfolioContent.homeTitle[0]} <br />
            {portfolioContent.homeTitle[1]}
          </h1>
          <p className="max-w-[53rem] text-xl md:text-2xl text-[#a3a3a3] font-light leading-[1.5]">
            {portfolioContent.homeDescription}
          </p>
        </motion.div>

      {portfolioVariant === 'ux-ui' && (
        <aside aria-labelledby="personal-project-title" className="mt-[clamp(32px,3vw,48px)]">
          <a
            href="https://www.figma.com/design/N3g9FCQeOvLmDESm2wxlmh/Wargaming_Melnikova_Ekaterina?node-id=64-828"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-7 border border-white/15 bg-white/[0.03] p-6 transition-colors hover:border-[#A3E635]/50 hover:bg-white/[0.05] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A3E635] md:flex-row md:items-center md:justify-between md:gap-12 md:p-10"
          >
            <div className="max-w-[48rem]">
              <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.12em] text-[#A3E635]">Personal project · Game UX/UI</p>
              <h2 id="personal-project-title" className="mb-3 text-[26px] font-normal leading-[1.3] tracking-[-0.02em] text-white md:text-[32px]">World of Warships — UX/UI concept</h2>
              <p className="text-[18px] font-light leading-[1.5] text-[#a3a3a3]">Ship comparison and player tooltip concept: benchmarking, user flows, wireframes and high-fidelity UI for a data-rich game interface.</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-3 self-start border-b border-white/35 pb-2 text-[16px] text-white transition-colors group-hover:border-[#A3E635] group-hover:text-[#A3E635] md:self-center">
              View in Figma
              <ArrowUpRight size={20} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
          </a>
        </aside>
      )}
      </header>

      <section className="flex flex-col gap-[clamp(92px,7vw,148px)] mb-40">
        {/* Project 1 - Full Width */}
        {projects[0] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link to={`/case/${projects[0].id}`} className="group block">
              <div className="overflow-hidden border border-white/5 mb-6 bg-neutral-900 rounded-[1px] w-full">
                <img 
                  src={projects[0].thumbnail} 
                  alt={projects[0].title}
                  className="w-full h-auto block transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.08]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-[26px] leading-[1.4] font-normal text-white mb-[6px]">{projects[0].title}</h3>
              <p className="text-[#a1a1a1] font-light text-[20px] leading-[1.4]">{projects[0].subtitle}</p>
            </Link>
          </motion.div>
        )}

        {/* Row for Projects 2 and 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[clamp(92px,7vw,148px)] gap-x-[clamp(32px,2.6vw,56px)] items-start">
          {projects[1] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Link to={`/case/${projects[1].id}`} className="group block">
                <div className="overflow-hidden border border-white/5 mb-6 bg-neutral-900 rounded-3xl aspect-[4/3]">
                  <img 
                    src={projects[1].thumbnail} 
                    alt={projects[1].title}
                    className={imageClassName}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-[26px] leading-[1.4] font-normal text-white mb-[6px]">{projects[1].title}</h3>
                <p className="text-[#a1a1a1] font-light text-[20px] leading-[1.4]">{projects[1].subtitle}</p>
              </Link>
            </motion.div>
          )}

          {projects[2] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link to={`/case/${projects[2].id}`} className="group block">
                <div className="overflow-hidden border border-white/5 mb-6 bg-neutral-900 rounded-3xl aspect-[4/5]">
                  <img 
                    src={projects[2].thumbnail} 
                    alt={projects[2].title}
                    className={imageClassName}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-[26px] leading-[1.4] font-normal text-white mb-[6px]">{projects[2].title}</h3>
                <p className="text-[#a1a1a1] font-light text-[20px] leading-[1.4]">{projects[2].subtitle}</p>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Project 4 - Full Width */}
        {projects[3] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link to={`/case/${projects[3].id}`} className="group block">
              <div className="overflow-hidden border border-white/5 mb-6 bg-neutral-900 rounded-3xl aspect-[21/9]">
                <img 
                  src={projects[3].thumbnail} 
                  alt={projects[3].title}
                  className={imageClassName}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-[26px] leading-[1.4] font-normal text-white mb-[6px]">{projects[3].title}</h3>
              <p className="text-[#a1a1a1] font-light text-[20px] leading-[1.4]">{projects[3].subtitle}</p>
            </Link>
          </motion.div>
        )}
      </section>

    </main>
  );
}
