export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  thumbnail: string;
  description: string;
  problem: string;
  solution: string;
  roles: string[];
  roleSummary: string;
  results: { label: string; value?: string }[];
  discoveryTitle: string;
  discoveryPoints: string[];
  developmentTitle: string;
  developmentPoints: string[];
  visualizations: string[];
  conclusion: string;
}

export const projects: Project[] = [
  {
    id: "weather-integration",
    title: "Weather integration concept for Yandex Maps",
    subtitle: "Since Yandex has both Weather and Maps apps, I explored if bringing Weather features into Maps could help improve its product metrics",
    category: "Product Design • Mobile",
    thumbnail: "./Weather_Final%20(1).png",
    description: "Yandex is one of the largest tech companies in Russia, with around 67–70% of the search market and an ecosystem of over 90 services. One of its most popular products is Yandex Maps, used by over 43 million people to navigate cities, plan routes, view traffic, and find local businesses.",
    problem: "Users switch between maps, browser search and weather apps before and during a trip. Drivers also need a clearer view of weather risks along a route, while pedestrians want useful forecast data without leaving Maps.",
    solution: "I designed weather layers, a compact forecast panel, weather hints during route selection and a route forecast that changes with departure time. The flow gives people the most useful information with the fewest taps.",
    roles: ["Product Designer"],
    roleSummary: "I guided the project through the full Double Diamond process: user interviews, competitor benchmarking, hypotheses, user flows, wireframes, a clickable prototype and usability testing with five participants.",
    results: [
      { label: "Increase user loyalty through a useful new product feature" },
      { label: "Provide alternatives that support key target actions" },
      { label: "Improve GDU, DAU, WAU, MAU and retention" }
    ],
    discoveryTitle: "UX research: maps & weather data",
    discoveryPoints: [
      "Interviewed users aged 25–44 about how they use maps and check weather at home, outdoors and while travelling.",
      "Compared Yandex Maps with 2GIS, Google Maps, Weather On The Way and CarPlay.",
      "Created driver and pedestrian personas, CJMs and 15 Job Stories to frame the most valuable scenarios."
    ],
    developmentTitle: "Weather data and route forecasts",
    developmentPoints: [
      "Merged weather layers and general weather data into one clear flow.",
      "Added weather conditions along a route based on the selected departure time.",
      "Refined alerts, information grouping and typography after usability testing."
    ],
    visualizations: ["./Weather_Final%20(1).png"],
    conclusion: "Weather information is most valuable when it is contextual, easy to scan and immediately actionable."
  },
  {
    id: "notifications",
    title: "Notifications now reach residents within 12 minutes, 2024",
    subtitle: "An admin console for announcements, incident alerts and short resident surveys",
    category: "Product Design • Platform",
    thumbnail: "./notifications.avif",
    description: "A communication tool for property management companies that helps administrators send announcements, emergency alerts and surveys to residents from one interface.",
    problem: "Administrators spent hours calling residents, could not reliably reach everyone during emergencies and had to print, deliver and collect surveys manually.",
    solution: "I designed a flexible notification builder with audience selection, scheduling and several answer formats, making routine and urgent communication much faster.",
    roles: ["Product Designer"],
    roleSummary: "I worked with stakeholders, the product owner and users, analysed the administrators' workflow, benchmarked alternatives and validated the solution with a clickable prototype before handoff.",
    results: [
      { label: "Resident notification time", value: "12 minutes instead of 1.5–2 hours" },
      { label: "Communication formats", value: "announcements, alerts and surveys" },
      { label: "Manual calls and paper surveys", value: "substantially reduced" }
    ],
    discoveryTitle: "Managers' workflow analysis",
    discoveryPoints: [
      "Monthly calls took hours and many residents still could not be reached.",
      "Emergency shutdowns required a fast and reliable way to warn an entire building.",
      "Surveys were printed, delivered and collected manually."
    ],
    developmentTitle: "Designing a flexible editor",
    developmentPoints: [
      "Supported single choice, multiple choice and free-text answers.",
      "Allowed answer types to be combined for different management tasks.",
      "Kept the creation flow short enough for urgent notifications."
    ],
    visualizations: ["./notifications.avif"],
    conclusion: "A focused workflow turned a slow manual process into communication that reaches residents in minutes."
  },
  {
    id: "wall-tablet",
    title: "Wall tablet for a smart home, 2024",
    subtitle: "The first version of the smart home management tablet",
    category: "Product Design • Smart Home",
    thumbnail: "./wall-tablet.avif",
    description: "A wall-mounted control centre that brings the most important smart-home functions into a single interface available to everyone in the household.",
    problem: "Smart-home controls were spread across screens and devices. A shared tablet needed to stay understandable at a glance and work well from a standing distance.",
    solution: "I created a modular dashboard with large controls, clear status feedback and quick access to rooms, climate, lighting, security and favourite actions.",
    roles: ["Product Designer", "UX/UI Designer"],
    roleSummary: "I defined the information architecture, prioritised shared household scenarios, designed the dashboard components and tested readability and interaction patterns for a wall-mounted device.",
    results: [
      { label: "Core smart-home controls", value: "unified in one dashboard" },
      { label: "Interaction model", value: "optimised for quick shared use" },
      { label: "Design foundation", value: "reusable widgets and states" }
    ],
    discoveryTitle: "Shared-device scenarios",
    discoveryPoints: [
      "Prioritised the actions people need most often when entering or leaving a room.",
      "Considered viewing distance, glanceability and different levels of technical confidence.",
      "Grouped controls by context instead of exposing the underlying device structure."
    ],
    developmentTitle: "A modular smart-home dashboard",
    developmentPoints: [
      "Designed reusable cards for climate, lighting, security and room status.",
      "Used clear visual states for active devices and important alerts.",
      "Balanced information density with large, comfortable touch targets."
    ],
    visualizations: ["./wall-tablet.avif"],
    conclusion: "A shared smart-home interface should feel calm, obvious and useful before it feels technically powerful."
  },
  {
    id: "smart-scenarios",
    title: "Smart scenarios, 2024",
    subtitle: "Part of a mobile app for controlling smart devices",
    category: "Product Design • Automation",
    thumbnail: "./smart-scenarios.avif",
    description: "A scenario builder in a mobile smart-home app that lets people automate devices using clear conditions and actions.",
    problem: "Traditional automation tools expose technical logic and make simple routines feel difficult. Users need to understand what will trigger a scenario and what the home will do next.",
    solution: "I translated automation into a guided When–Then flow with readable conditions, device states, schedules and a clear review step before saving.",
    roles: ["Product Designer", "UX/UI Designer"],
    roleSummary: "I mapped automation scenarios, simplified the underlying logic, created the end-to-end flow and designed mobile components for conditions, schedules and actions.",
    results: [
      { label: "Scenario logic", value: "translated into a guided mobile flow" },
      { label: "Conditions", value: "time, sensors and device states" },
      { label: "Editing", value: "clear review before saving" }
    ],
    discoveryTitle: "Making automation understandable",
    discoveryPoints: [
      "Mapped common routines and the conditions people naturally use to describe them.",
      "Identified where technical terminology created uncertainty.",
      "Separated scenario setup into small decisions with immediate feedback."
    ],
    developmentTitle: "The When–Then builder",
    developmentPoints: [
      "Created consistent selectors for time, sensor values and device events.",
      "Made the resulting action chain readable before a scenario is activated.",
      "Added validation and error states without interrupting the creation flow."
    ],
    visualizations: ["./smart-scenarios.avif"],
    conclusion: "Automation becomes approachable when the interface speaks in everyday causes and outcomes."
  }
];
