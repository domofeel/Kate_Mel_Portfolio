import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { portfolioContent } from '../config/portfolio';
import { projects } from '../data/projects';

export default function Home() {
  const imageClassName =
    "w-full h-full object-cover block transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.08]";

  return (
    <main data-typography="prose" className="mx-auto max-w-[2048px] bg-[#181818] px-[clamp(24px,6.25vw,128px)] pt-[clamp(120px,9vw,180px)]">
      <header className="mb-[clamp(88px,8vw,160px)]">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h1 className="text-[min(6rem,21vw)] md:text-[9rem] lg:text-[12rem] xl:text-[13rem] leading-[0.9] font-sans font-normal tracking-[-0.04em] text-white mb-[60px]">
            {portfolioContent.homeTitle[0]} <br />
            {portfolioContent.homeTitle[1]}
          </h1>
          <p className="max-w-[53rem] text-xl md:text-2xl text-[#a3a3a3] font-light leading-[1.5]">
            {portfolioContent.homeDescription}
          </p>
        </motion.div>
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
