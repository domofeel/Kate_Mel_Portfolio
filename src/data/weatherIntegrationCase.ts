export type CaseMedia = {
  src: string;
  videoSrc?: string;
  alt: string;
};

export type CaseButton = {
  label: string;
  href: string;
};

export type CaseSection = {
  stage?: boolean;
  title: string;
  showTitle?: boolean;
  paragraphs?: string[];
  orderedList?: string[];
  buttons?: CaseButton[];
  images?: CaseMedia[];
  imageLayout?: "full" | "grid" | "phone-grid" | "text-stack" | "video-overlay";
};

const wi = (file: string) => `./weatherintegration/${file}`;
const figma = (nodeId: string) =>
  `https://www.figma.com/design/hxsInPYOxMKhFXqGh3JPAL/Yandex-%E2%80%A2-Maps-%E2%80%A2-English-version?node-id=${nodeId}&t=rot1XHgI83GDExm1-1`;

export const weatherIntegrationCase = {
  title: "Weather integration concept for Yandex Maps",
  titleLines: ["Weather integration concept", "for Yandex Maps"],
  subtitle:
    "Since Yandex has both Weather and Maps apps, I explored if bringing Weather features into Maps could help improve its product metrics",
  introImages: [
    { src: wi("screen-02.jpg"), videoSrc: wi("big-common-weather.mp4"), alt: "Weather integration mobile animation" },
    { src: wi("screen-03.jpg"), videoSrc: wi("big-route-map-timescroll.mp4"), alt: "Yandex Maps weather route animation" },
    { src: wi("screen-04.jpg"), videoSrc: wi("big-route-map-opened-timescroll.mp4"), alt: "Weather route opened animation" }
  ],
  sections: [
    {
      title: "About product",
      paragraphs: [
        "Yandex is one of the largest tech companies in Russia, often called the “Russian Google,” with around 67–70% of the search market and an ecosystem of over 90 services. It has expanded into search, e-commerce, media, cloud, education, and everyday services such as Yandex Market, Yandex Music, Kinopoisk, Yandex Plus, Yandex Food and Lavka, Yandex Cloud, and Yandex Practicum.",
        "One of its most popular products is Yandex Maps, used by over 43 million people to navigate cities, plan routes by car, public transport, bicycle, or on foot, view live traffic, street panoramas, satellite maps, and find local businesses, making it an essential everyday tool in Russia."
      ]
    },
    {
      title: "My role",
      paragraphs: [
        "As a product designer, I guided the project through the full Double Diamond process. I collaborated closely with users to collect insights, then benchmarked against competitors to identify opportunities. From there, I translated findings into hypotheses, mapped user flows, and created wireframes. After validating a clickable prototype, I continued iterating to refine the user experience."
      ]
    },
    {
      title: "Business goals",
      orderedList: [
        "Increasing user loyalty through a new product feature.",
        "Offsetting the number of target actions (such as building a route, visiting the website, or making a call) by providing alternatives.",
        "Improving key metrics: GDU, DAU, WAU, MAU, Retention."
      ]
    },
    {
      stage: true,
      title: "Discovery stage",
      paragraphs: [
        "In Discovery, my priority was to dig deeper into the problem space and reveal the core needs hidden behind requests. This allowed to align on a common perspective and move forward with decisions grounded in research rather than guesswork."
      ],
      images: [{ src: wi("11.png"), alt: "Discovery stage overview" }]
    },
    {
      title: "Competitor feature analysis",
      paragraphs: [
        "At the beginning of my work, I decided to analyze competitor functionality. I reviewed 2GIS, Google Maps, Weather On The Way, and CarPlay, and compared them with Yandex Maps. My goal was not only to explore the weather features that could be added to Yandex Maps, but also to identify broader advantages and growth opportunities for future improvements."
      ],
      buttons: [{ label: "View whole analysis", href: figma("2040-6320") }],
      images: [
        { src: wi("competitor-feature-analysis.png"), alt: "Competitor feature analysis" }
      ]
    },
    {
      title: "Key weather features of competitors",
      paragraphs: [
        "After analyzing 2GIS, Google Maps, Weather On The Way, and CarPlay, I focused on several key weather-related features. First of all, I really liked the capabilities of the Weather On The Way app.",
        "The feature shows an hourly forecast for each stop along the route, including precipitation, temperature, wind, and visibility. It visualizes weather changes on the map, highlights risky areas, and can suggest safer routes. Drivers also receive alerts about sudden weather changes and safety tips like ‘Avoid this road in the evening due to fog.’ It’s especially useful for long trips, helping drivers plan ahead and stay safe."
      ],
      images: [
        { src: wi("weather-along-the-route.png"), alt: "Weather along the route competitor analysis" }
      ]
    },
    {
      title: "Common weather info",
      paragraphs: [
        "I also found that Google Maps and 2GIS apps include basic weather information such as temperature, precipitation, and wind. A small icon shows the temperature and precipitation, and tapping it opens a panel with more detailed weather data."
      ],
      images: [
        { src: wi("common-weather-info.png"), alt: "Common weather info competitor analysis" }
      ]
    },
    {
      title: "UX research: maps & weather data",
      paragraphs: [
        "I interviewed four users aged 25–44 to understand how they use map apps and check weather information in different situations. The respondents live in Russia and Serbia, and all work in IT. I had a few specific goals for this research."
      ],
      orderedList: [
        "Understand how users check weather data while traveling, outdoors, and at home — what challenges they face, what is unclear, what is missing, and what they find useful.",
        "Identify what functionality users may lack and what could be added to the app to gain a competitive advantage.",
        "Discover the main difficulties users encounter when working with maps, and what causes the most frustration, in order to address these problems in Yandex Maps.",
        "Determine which features require improvements to increase user retention by solving key pain points in Yandex Maps."
      ]
    },
    {
      title: "User personas",
      paragraphs: [
        "I created two user personas based on the interviews I conducted to better understand people’s goals, needs, and frustrations. They helped me check design ideas against real user needs and served as a foundation for building Customer Journey Maps. One CJM was made for the driver persona and the other for the pedestrian persona, since their experiences are different."
      ],
      buttons: [{ label: "View User personas", href: figma("2040-6488") }],
      images: [{ src: wi("user-personas.png"), alt: "User personas" }]
    },
    {
      stage: true,
      title: "Definition stage",
      paragraphs: [
        "At this stage, insights from discovery are analyzed and organized. The goal is to define the core problem clearly by spotting patterns, pain points, and opportunities. This helps shape design hypotheses, align the team, and prepare for ideation with a well-framed problem statement."
      ],
      images: [{ src: wi("12.png"), alt: "Definition stage overview" }]
    },
    {
      title: "CJMs",
      paragraphs: [
        "I created two maps based on the user personas I had developed earlier. One CJM describes the driver’s experience and the other the pedestrian’s. They showed me where people get frustrated, what emotions they go through."
      ],
      buttons: [{ label: "View CJMs", href: figma("2040-6812") }],
      images: [{ src: wi("cjm.png"), alt: "Customer Journey Maps" }]
    },
    {
      title: "Job Stories",
      paragraphs: [
        "I developed 15 Job Stories to capture real user motivations and contexts. They helped me focus on the problem space, clarify user needs, prioritize the most valuable scenarios, and explore different solutions."
      ],
      buttons: [{ label: "View job stories", href: figma("2040-6813") }],
      images: [{ src: wi("job-stories.png"), alt: "Job stories" }]
    },
    {
      title: "Hypotheses",
      paragraphs: [
        "Because the main goal was to bring Yandex Weather capabilities into Yandex Maps, I focused on the problems and job stories most relevant to this task.",
        "Users want to see basic weather information (temperature, precipitation) in the Yandex Maps app, so they don’t have to search for it in a browser or a separate weather app. They also feel frustrated by having too many apps and shortcuts on their home screen, and want a single entry point for Yandex apps."
      ],
      images: [
        { src: wi("hypothesis-no1.png"), alt: "Hypothesis №1" },
        { src: wi("hypothesis-no2.png"), alt: "Hypothesis №2" },
        { src: wi("hypothesis-no3.png"), alt: "Hypothesis №3" }
      ],
      imageLayout: "text-stack"
    },
    {
      title: "Hypotheses for drivers",
      paragraphs: [
        "Truck drivers and long-distance motorists need more detailed weather information during their trips. In conditions of heavy rain or snow at night, driving on highways can become extremely difficult and unsafe."
      ],
      images: [
        { src: wi("hypothesis-no4.png"), alt: "Hypothesis №4" },
        { src: wi("hypothesis-no5.png"), alt: "Hypothesis №5" }
      ],
      imageLayout: "text-stack"
    },
    {
      title: "Impact / Effort Matrix",
      paragraphs: [
        "I discussed my hypotheses with the developers. Since our task was to bring existing Yandex Weather features into Yandex Maps and create new options, we didn’t reject any ideas. Instead, we decided to implement all of them in order of priority: first from the “Easy wins” category, then “Incremental,” and finally “Big bets”."
      ],
      images: [{ src: wi("effort-matrix.png"), alt: "Impact / Effort Matrix" }]
    },
    {
      stage: true,
      title: "Development stage",
      paragraphs: [
        "During the Development stage, I turned concepts into prototypes, tested them with users, and improved them based on feedback."
      ],
      images: [{ src: wi("13.png"), alt: "Development stage overview" }]
    },
    {
      title: "Weather data: user flow & wireframes",
      paragraphs: [
        "I had to design how the weather layers would look and how the general weather data would open when tapping the temperature icon. Instead of separating them, I decided to merge these features into one, since both were needed anyway. This way, I created a flow that gives users the most useful information with the fewest taps."
      ],
      buttons: [{ label: "Vew flow", href: figma("2040-8679") }],
      images: [{ src: wi("general-weather-data.png"), alt: "General weather data flow and wireframes" }]
    },
    {
      title: "Weather for drivers: user flow & wireframes",
      paragraphs: [
        "I designed a flow that shows weather conditions along the planned route depending on the departure time. I also added a weather hint at the moment of route selection, so users can immediately see potential risks. The same flow works for walking routes."
      ],
      buttons: [{ label: "Vew flow", href: figma("2040-8682") }],
      images: [{ src: wi("weather-data-for-drivers.png"), alt: "Weather data for drivers flow and wireframes" }]
    },
    {
      title: "Usability testing",
      paragraphs: [
        "I built clickable prototypes from the wireframes and ran usability testing with five participants. The sessions helped me uncover problems in the interface, understand how users approach these tasks, and see how quickly and effectively they could complete them. These insights gave clear directions for improving the design and making the product easier to use."
      ],
      images: [
        { src: wi("screen-05.jpg"), videoSrc: wi("testing-flow-1.mp4"), alt: "Usability testing prototype animation" },
        { src: wi("screen-06.jpg"), videoSrc: wi("testing-flow-2.mp4"), alt: "Usability testing prototype animation" }
      ],
      imageLayout: "phone-grid"
    },
    {
      title: "Improvements and final UI",
      paragraphs: [
        "After usability testing, I refined the design based on user feedback. I improved clarity, made alerts more visible, grouped weather data for easier scanning, and adjusted fonts for better readability. Finally, I polished the UI to look cleaner and more consistent."
      ],
      buttons: [{ label: "View improvements", href: figma("2073-24450") }],
      images: [{ src: wi("improvements.png"), alt: "Improvements and final UI" }]
    },
    {
      title: "New components and styles",
      paragraphs: [
        "I added new components and styles to support the weather integration. These additions kept the UI consistent while making the new features intuitive and easy to use."
      ],
      buttons: [{ label: "View components", href: figma("281-3788") }],
      images: [{ src: wi("ui-kit.png"), alt: "UI Kit" }]
    },
    {
      title: "Specification",
      paragraphs: [
        "I created detailed design specifications to document how the weather feature should work across different scenarios. This included behavior rules, spacing, and interactions."
      ],
      buttons: [{ label: "View specification", href: figma("333-9882") }],
      images: [{ src: wi("specification.png"), alt: "Weather integration specification" }]
    },
    {
      stage: true,
      title: "Final result",
      paragraphs: [
        "I went through 3 stages of the Double Diamond process — from research and defining the problem to developing and delivering final solutions. I analyzed user needs, created scenarios and wireframes, tested prototypes, and finalized the UI. Here’s the final version of the design."
      ]
    },
    {
      title: "Weather data",
      orderedList: [
        "In this scenario, the user taps the weather widget to see more details. A bottom sheet appears with hourly weather data, and a precipitation layer shows up on the map. When the user scrolls through the timeline and the weather data, the map updates to show the precipitation for that time.",
        "The user can also expand the weather panel to see more details. The data is time-linked and updates accordingly.",
        "In the top-right corner of the panel, there’s a “10-Day Forecast” link that opens a separate page with weather information for the next 10 days."
      ],
      images: [
        { src: wi("screen-07.jpg"), videoSrc: wi("final-weather-data-map.mp4"), alt: "Weather data final animation" },
        { src: wi("screen-08.jpg"), videoSrc: wi("final-weather-data-opened.mp4"), alt: "Expanded weather data final animation" },
        { src: wi("screen-09.jpg"), videoSrc: wi("final-10-day-forecast.mp4"), alt: "10-Day Forecast final animation" }
      ],
      imageLayout: "phone-grid"
    },
    {
      title: "Weather on the route",
      orderedList: [
        "When the user selects a route and bad weather is expected, an alert appears at the top of the screen. It shows when the bad weather will start and how long it will last. The route button also displays a weather icon. The user can open the panel to see the same information in more detail.",
        "While choosing a route, users can tap the weather widget to view weather points along the path. The ‘Let’s go’ button hides to make more space for weather details and hint that the panel can be scrolled. Users can also select a departure time to see how the weather changes if they leave later, or tap ‘Best option’ to instantly choose the nearest time with good weather.",
        "Users can also swipe the panel up to see a list of locations along the route, the estimated arrival time for each point, and the weather there. This information updates based on the selected departure time. The maximum number of locations displayed on the map and in the panel is eight."
      ],
      images: [
        { src: wi("screen-10.jpg"), videoSrc: wi("route-weather-alarm.mp4"), alt: "Weather on the route alert animation" },
        { src: wi("screen-11.jpg"), videoSrc: wi("route-weather-time-chips.mp4"), alt: "Route weather time chips animation" },
        { src: wi("screen-12.jpg"), videoSrc: wi("route-weather-on-the-route.mp4"), alt: "Route weather list animation" }
      ],
      imageLayout: "phone-grid"
    },
    {
      title: "Weather alerts while driving",
      orderedList: [
        "While driving with Yandex Navigator, it’s possible to add voice alerts about severe weather — similar to the existing ones like “Turn right in 200 meters.”",
        "If sound notifications are turned off, a weather alert appears on the navigation screen showing when bad weather will start and how long it will last. The alert stays visible until the driver swipes it away, ensuring the message is noticed and not missed."
      ],
      images: [
        { src: wi("screen-13.png"), alt: "Weather alert while driving screen" },
        { src: wi("route-2.png"), alt: "Route weather alert screen" }
      ],
      imageLayout: "phone-grid"
    },
    {
      title: "Feedback from developers",
      paragraphs: [
        "I shared the component specifications and prototype with the developers. They had a few questions, so I clarified the details and adjusted some parts to make sure they had a complete understanding of how everything should work. After final refinements, I delivered the final layouts to development."
      ]
    },
    {
      stage: true,
      title: "Delivery stage",
      paragraphs: [
        "After the launch, we started collecting user feedback and monitoring key performance metrics to evaluate the results."
      ],
      images: [{ src: wi("14.png"), alt: "Delivery stage overview" }]
    }
  ] satisfies CaseSection[]
};
