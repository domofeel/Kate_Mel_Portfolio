export type PortfolioVariant = 'product' | 'ux-ui';

type PortfolioContent = {
  homeTitle: [string, string];
  homeDescription: string;
  specialty: string;
  about: string[];
};

const portfolios: Record<PortfolioVariant, PortfolioContent> = {
  product: {
    homeTitle: ['Product', 'Designer'],
    homeDescription:
      'Product designer focused on B2B SaaS, complex admin tools and mobile products. I use research and usability testing to understand user needs, simplify workflows and guide product decisions, taking features from discovery through design and delivery.',
    specialty: 'Product Designer',
    about: [
      'I\u2019m a Product Designer based in Novi Sad, Serbia, with a residence permit and the right to work. I design B2B SaaS platforms, admin tools and mobile products across banking, marketplaces and smart-home services.',
      'My strength is making complex products easier to understand and use. I turn user needs and business goals into clear workflows, validate ideas through research and usability testing, and work closely with developers to bring designs into production.',
      'I take projects from discovery to delivery, connecting research, product decisions and interface design. My work includes user interviews, journey mapping, interactive prototypes and scalable design systems.',
    ],
  },
  'ux-ui': {
    homeTitle: ['UX/UI', 'Designer'],
    homeDescription:
      'UX/UI designer creating clear, intuitive interfaces for web and mobile products. I combine research, interaction design, prototyping and design systems to make complex interfaces easier to understand and use. I\u2019m currently developing a specialization in game UX/UI.',
    specialty: 'UX/UI Designer',
    about: [
      'I\u2019m a UX/UI Designer based in Novi Sad, Serbia, with a residence permit and the right to work. I design web and mobile interfaces for banking, marketplaces, smart-home services and complex admin tools.',
      'My strength is turning complex information and interactions into clear, intuitive interfaces. I combine user research, information architecture and interaction design with careful attention to visual hierarchy, layout and consistency.',
      'I work from user flows and wireframes to polished UI, interactive prototypes, usability testing and developer handoff. I also build and maintain design systems to keep interfaces consistent as products grow.',
      'I\u2019m currently developing a specialization in game UX/UI, building on my experience in web and mobile products.',
    ],
  },
};

const requestedVariant = import.meta.env.VITE_PORTFOLIO_VARIANT;

export const portfolioVariant: PortfolioVariant = requestedVariant === 'ux-ui' ? 'ux-ui' : 'product';
export const portfolioContent = portfolios[portfolioVariant];
