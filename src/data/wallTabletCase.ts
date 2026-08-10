import type { CaseSection } from './weatherIntegrationCase';

const media = (file: string) => `./wall-tablet/${file}`;

export const wallTabletCase = {
  title: "Wall tablet for a smart home",
  titleLines: ["Wall tablet for a smart home"],
  subtitle: "The first version of the smart home management tablet",
  introImages: [
    {
      src: media("hero-poster.avif"),
      videoSrc: media("hero.mp4"),
      alt: "Wall tablet smart home interface overview"
    }
  ],
  sections: [
    {
      title: "About product",
      paragraphs: [
        "Mykuca is a product for property management companies and their clients. It includes an admin panel for employees, a mobile app for clients, and a new addition: the wall tablet.",
        "The admin panel helps to create polls, news, and promotions for clients, process customer requests, organize work, configure intercom and video surveillance, monitor meter readings in buildings, add new meters, and manage smart devices.",
        "Now the product includes a wall tablet for managing smart devices. Our construction company has built a smart building. Buyers will immediately have access to a set of smart devices that connect to specific apartments through a special device.",
        "In the mobile app, clients can submit requests to the management company, manage their smart devices, and stay connected with other residents in the building or complex. Additionally, they can view home cameras, open intercoms, read updates from the management company, and participate in surveys."
      ]
    },
    {
      stage: true,
      title: "The first iteration",
      paragraphs: [
        "The tablet is a new part of the product. The initial tablet version includes a set of functions that will expand over time. Presently, smart homeowners of Mykuca can manage a variety of devices, monitor cameras in real time, open intercoms, gates, and barriers, and check the weather.",
        "Currently, only engineers can add smart devices to apartments. They do this using a separate admin panel. Users can only view devices, configure them, and add them to their favorites on the home screen.",
        "The next version will include the ability for users to add smart devices, create scenarios for device management, view camera archives, and add car numbers for automatic gate opening."
      ]
    },
    {
      title: "Task",
      paragraphs: [
        "Design a user-friendly interface for managing smart devices on the tablet in 3 color themes. The interface should dynamically adjust based on the number of device characteristics. All of them should fit the tablet screen. Consider control elements for the devices and their operational logic within backend constraints."
      ]
    },
    {
      title: "Grid and device parameters",
      paragraphs: [
        "Each smart device includes a set of mandatory and optional parameters. The optional parameters are characteristics of the device work. The mandatory parameters are the indicators and controls of the device. Every device page may have 0 to 4 optional parameters and 1 to 4 mandatory parameters. All of them may or may not be present on the page."
      ],
      images: [
        { src: media("device-grid.avif"), alt: "Grid for mandatory and optional smart device parameters" }
      ]
    },
    {
      title: "Solution",
      paragraphs: [
        "I needed to design tablet screens in both horizontal and vertical orientations to fit all device parameters. I designed a grid where each parameter is a widget. The widgets adjust their size and position based on the number and type of parameters received from the backend."
      ],
      orderedList: [
        "I put the mandatory On/Off option near the device title, so only 3 mandatory widgets out of 4 are needed.",
        "I combined the Battery low power and Battery percentage parameters into one widget, so only 3 optional widgets out of 4 are needed as well."
      ],
      images: [
        { src: media("blinds-screen.avif"), alt: "Horizontal smart blinds device screen" },
        {
          src: media("blinds-poster.avif"),
          videoSrc: media("blinds-demo.mp4"),
          alt: "Horizontal smart device interface demonstration"
        }
      ]
    },
    {
      title: "Vertical tablet layout",
      paragraphs: [
        "For the vertical tablet layout, the grid has been slightly adjusted. All widgets maintain the same height in both vertical and horizontal orientations, with only the width varying."
      ],
      images: [
        { src: media("portrait-grid.avif"), alt: "Vertical tablet widget grid" },
        {
          src: media("portrait-poster.avif"),
          videoSrc: media("portrait-demo.mp4"),
          alt: "Vertical tablet interface demonstration"
        }
      ],
      imageLayout: "grid"
    },
    {
      stage: true,
      title: "The main screen grid",
      paragraphs: [
        "The same grid layout is used for smart device widgets on the 'Favorites' page. In the initial version, all cards are uniform in size, except for the weather card. Currently, resizing is not supported, but it is possible to swap the cards. Future updates will include larger cards with more functionality."
      ],
      images: [
        { src: media("favorites-grid.avif"), alt: "Favorites page main screen grid" }
      ]
    },
    {
      title: "Smart device widgets and their functionalities on the main screen",
      paragraphs: [
        "Smart device widgets on the main screen allow users to view cameras, monitor sensor readings, and quickly control devices. While the widgets offer limited functionality, all features are accessible on the device's page. To add a widget to the 'Favorites' page, it is necessary to open the device page and click the 'to Favorites' button in the top right corner."
      ],
      images: [
        { src: media("widget-options.avif"), alt: "Smart device widget options" },
        { src: media("widget-functions.avif"), alt: "Smart device widget functionality" },
        {
          src: media("favorites-poster.avif"),
          videoSrc: media("favorites-demo.mp4"),
          alt: "Favorites page widget interaction demonstration"
        }
      ],
      imageLayout: "video-overlay"
    },
    {
      stage: true,
      title: "Intercoms and cameras",
      paragraphs: [
        "In the first version, users can view cameras and access intercoms. These functionalities are separate, so they are placed on different pages in the main menu. However, since intercoms often have cameras, the pages are quite similar. Future versions will include the ability to view camera archives."
      ],
      images: [
        { src: media("intercoms.avif"), alt: "Intercoms page" },
        { src: media("cameras.avif"), alt: "Cameras page" }
      ]
    },
    {
      title: "Intercom options",
      paragraphs: [
        "The user can switch between intercom pages from the top and directly open the intercom by pressing the button with a lock. If a camera is available, the sound can be muted. Additionally, there is a standard feature to add the device to Favorites.",
        "The components are positioned on the page to align with the typical placement of camera information, which is usually found in the top left and bottom right corners. This includes details such as the date, type, and name of the camera."
      ],
      images: [
        { src: media("intercom-video.avif"), alt: "Intercom video and controls" }
      ]
    },
    {
      title: "Incoming video call",
      paragraphs: [
        "When the intercom has a camera and someone calls, the video from the intercom appears over any screen, offering three options: end the call, open the door, or answer. This page does not allow the user to change intercoms."
      ],
      images: [
        { src: media("video-call.avif"), alt: "Incoming intercom video call" }
      ]
    },
    {
      title: "Incoming audio call",
      paragraphs: [
        "If the intercom lacks a camera and someone calls, a popup will appear on any screen. The user will have the same options: open the door, cancel the call, or answer."
      ],
      images: [
        { src: media("audio-call.avif"), alt: "Incoming intercom audio call" }
      ]
    }
  ] satisfies CaseSection[]
};
