import type { CaseSection } from './weatherIntegrationCase';

const smart = (file: string) => `./smart-scenarios/${file}`;

export const smartScenariosCase: {
  title: string;
  titleLines?: string[];
  subtitle: string;
  introImages: Array<{ src: string; videoSrc: string; alt: string }>;
  sections: CaseSection[];
} = {
  title: "Smart scenarios",
  subtitle: "Already, 2,000 Mykuca clients are actively using this section",
  introImages: [
    {
      src: smart("poster-01.avif"),
      videoSrc: smart("intro-01.mp4"),
      alt: "Smart scenario icon selection flow",
    },
    {
      src: smart("poster-02.avif"),
      videoSrc: smart("intro-02.mp4"),
      alt: "Smart scenario condition setting flow",
    },
    {
      src: smart("poster-03.avif"),
      videoSrc: smart("intro-03.mp4"),
      alt: "Smart scenario action setting flow",
    },
  ],
  sections: [
    {
      title: "About product",
      paragraphs: [
        "Mykuca includes a mobile application for cliens of a management company. In mobile app users can submit requests to the management company, manage their smart devices, and stay connected with other residents in the building or complex. Additionally, they can view home cameras, open intercoms, read news from the management company, and participate in surveys.",
      ],
    },
    {
      title: "Task",
      paragraphs: [
        "Design a section in a mobile app where users can set up scenarios for smart devices. These scenarios should trigger based on conditions set by the user. The app will work with a specific set of devices. Also, I needed to design a similar section in the admin panel for engineers.",
      ],
    },
    {
      title: "Competitive analysis",
      paragraphs: [
        "I reviewed the functionality of several smart scenario creation apps. I selected features that fit our technical limitations and analyzed the user experience.",
      ],
      images: [
        { src: smart("competitive-analysis.png"), alt: "Competitive analysis" },
      ],
    },
    {
      title: "User flow chart",
      paragraphs: [
        "After analyzing the functionality of other apps, I started developing the main logic for the section.",
      ],
      images: [
        { src: smart("user-flow-01.png"), alt: "Smart scenarios user flow chart" },
        { src: smart("user-flow-02.png"), alt: "Smart scenarios user flow details" },
      ],
      imageLayout: "full",
    },
    {
      title: "Prototype",
      paragraphs: [
        "Once the logic was finalized, I designed the main screens as wireframes. Afterward, we reviewed and approved them with the developers",
      ],
      images: [{ src: smart("prototype.png"), alt: "Smart scenarios prototype" }],
    },
    {
      title: "The beginning of the smart scnenario creation",
      paragraphs: [
        "First, the user clicks on the '+' button, then gives the scenario a name and selects an necessary icon.",
      ],
      images: [
        { src: smart("begin-01.png"), alt: "Smart scenarios list" },
        { src: smart("begin-02.png"), alt: "Start screen" },
        { src: smart("begin-03.png"), alt: "Choosing an icon" },
      ],
      imageLayout: "phone-grid",
    },
    {
      title: "Condition seting",
      paragraphs: [
        "In this section, user configures the conditions under which the scenario will start. It's possible to select the time and/or device. If the specified parameter is triggered on the device, the scenario's action will begin. For example, if the temperature reaches 30°C. Additionally, user can set the conditions to determine if the scenario should start when all conditions are met or if at least one condition is fulfilled.",
      ],
      images: [
        { src: smart("condition-01.png"), alt: "Condition setting" },
        { src: smart("condition-02.png"), alt: "Condition type" },
        { src: smart("condition-03.png"), alt: "Time condition" },
        { src: smart("condition-04.png"), alt: "Condition list" },
        { src: smart("condition-05.png"), alt: "Air sensor selection" },
        { src: smart("condition-06.png"), alt: "Temperature condition" },
      ],
      imageLayout: "phone-grid",
    },
    {
      title: "Action seting",
      paragraphs: [
        "In this section, the user configures a single action or a sequence of actions to be triggered based on specified conditions. The action is a device parameter, such as turning on the air conditioner. The user also has the option to delay an action or insert a pause between actions. Additionally, the scenario can be set to either stop or continue after a device error.",
      ],
      images: [
        { src: smart("action-01.png"), alt: "Action settings" },
        { src: smart("action-02.png"), alt: "Action selection" },
        { src: smart("action-03.png"), alt: "Postpone action" },
        { src: smart("action-04.png"), alt: "Action list" },
        { src: smart("action-05.png"), alt: "Chandelier action" },
        { src: smart("action-06.png"), alt: "Chandelier setting" },
      ],
      imageLayout: "phone-grid",
    },
    {
      title: "The final scenario screen",
      paragraphs: [
        "At the end, all conditions and actions are added to the scenario screen. Depending on the settings, 'And' or 'Or' will appear in the conditions section. The setting 'All conditions are completed' implies 'And.' If 'At least one condition is completed' is chosen, it will be 'Or.'",
      ],
      images: [
        { src: smart("final-01.png"), alt: "At least one condition is completed" },
        { src: smart("final-02.png"), alt: "All conditions are completed" },
      ],
      imageLayout: "phone-grid",
    },
    {
      title: "Devices llist",
      paragraphs: [
        "The list of devices that could be used in the scenarios was known in advance. The developers and I discussed the functions of each device and planned which ones would be used as conditions and which ones as actions.",
      ],
      images: [{ src: smart("device-list.png"), alt: "Condition and action device list" }],
    },
    {
      title: "Logic of 'Conditions' and 'Actions' Operation",
      paragraphs: [
        "Once the main functionality was defined, we developed the logic for conditions and actions. After extensive discussions, we agreed that in the first iteration, the condition would trigger only if it is less than or greater than (not equal to) the specified number. The action, of course, would output the specified number (e.g., temperature = 24°C).",
      ],
      images: [
        { src: smart("condition-action-logic.png"), alt: "Conditions and actions operation logic" },
      ],
    },
    {
      title: "Sensors",
      paragraphs: [
        "Sensors are predominantly used as conditions. Examples include a door sensor, an air sensor, etc.",
      ],
      images: [
        { src: smart("sensors-01.png"), alt: "Air sensor" },
        { src: smart("sensors-02.png"), alt: "Carbon dioxide sensor" },
        { src: smart("sensors-03.png"), alt: "Humidifier" },
        { src: smart("sensors-04.png"), alt: "Leakage sensor" },
        { src: smart("sensors-05.png"), alt: "Leakage sensor condition" },
      ],
      imageLayout: "phone-grid",
    },
    {
      title: "Action devices",
      paragraphs: [
        "Devices such as heaters, locks, and blinds are used as conditions.",
      ],
      images: [
        { src: smart("action-devices-01.png"), alt: "Heater device" },
        { src: smart("action-devices-02.png"), alt: "Heater setting" },
        { src: smart("action-devices-03.png"), alt: "Heater action" },
        { src: smart("action-devices-04.png"), alt: "Chandelier device" },
        { src: smart("action-devices-05.png"), alt: "Chandelier action setting" },
        { src: smart("action-devices-06.png"), alt: "Chandelier parameter setting" },
      ],
      imageLayout: "phone-grid",
    },
    {
      title: "Admin panel for engineers",
      paragraphs: [
        "The interface was also replicated in the admin panel for the chief engineer, allowing him to create scenarios and demonstrate them to prospective apartment buyers.",
      ],
      images: [{ src: smart("admin-list.png"), alt: "Admin panel scenario list" }],
    },
    {
      title: "Admin panel details",
      showTitle: false,
      paragraphs: [
        "Through the admin panel, the engineer can create a scenario for any apartment registered in the system. This scenario will later be displayed in the user's application, where it can be modified by the user. Similarly, conditions and actions can be set, device parameters can be configured, and operation times can be selected. The functionality fully mirrors that of the client’s mobile application.",
      ],
      images: [{ src: smart("admin-new.png"), alt: "Create a new scenario in the admin panel" }],
    },
  ],
};
