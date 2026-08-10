import type { CaseSection } from './weatherIntegrationCase';

const media = (file: string) => `./notifications/${file}`;
const weather = (file: string) => `./weatherintegration/${file}`;

export const notificationsCase = {
  title: "Notifications now reach residents within 12 minutes down from 1.5–2 hours",
  titleLines: ["Notifications now reach residents", "within 12 minutes down from 1.5–2 hours"],
  subtitle: "An admin console that lets property managers send announcements, incident alerts, and short surveys straight to residents’ mobile app",
  introImages: [
    { src: media("accommodation-settings.jpg"), videoSrc: media("accommodation-settings.mp4"), alt: "Accommodation settings" }
  ],
  sections: [
    {
      title: "About product",
      paragraphs: ["Zhelezno is a leading real-estate developer, ranked among Russia’s Top 5 in housing quality and named Developer of the Year at Urban Awards 2024. Its flagship project ZNAK embodies the “15-minute city” concept. The company also drives digital transformation through Mykuca, an award-winning property management platform that lets residents pay utilities, book services, and manage smart-home features. For property managers, it automates workflows and tracks performance. Today, Mykuca supports over 40,000 residents and 540,000 m² of real estate, setting a benchmark for smart living in Russia."]
    },
    {
      title: "My role",
      paragraphs: ["As the product designer, I took the task through the full Double Diamond: talked with stakeholders, our PO and users, benchmarked competitors, and turned those insights into hypotheses, user flows, and wireframes. We validated a clickable prototype, shipped with engineering, and kept improving the experience in future."]
    },
    {
      title: "Business goals",
      orderedList: [
        "Notify residents faster about incidents and non-payment.",
        "Bring all communications into one owned, centralized channel.",
        "Reduce support load during outages by communicating proactively."
      ]
    },
    {
      stage: true,
      title: "Discovery stage",
      paragraphs: ["In the Discovery stage, I focused on understanding the problem space and uncovering the real needs behind the initial requests. This process helped me align the team around a shared understanding of the problem and ensure that the next steps were grounded in real insights and evidence."],
      images: [{ src: weather("11.png"), alt: "Discovery stage overview" }]
    },
    {
      title: "Managers' workflow analysis",
      orderedList: [
        "Every month, administrators had to call debtors about unpaid housing and utility bills. Since residents were spread across different buildings and cities, these calls often took 1.5–2 hours — and even then, many people couldn’t be reached.",
        "In emergencies like a burst pipe or electrical outage, the main supply often has to be shut off. If residents aren’t informed, they get frustrated and call the property management office. This creates extra load on the call center and lowers resident satisfaction, which can eventually harm the company’s reputation.",
        "Sometimes property management companies needed to run surveys or organize votes in a specific building or residential complex — for example, to elect the chairperson of the condominium council. Administrators had to print paper questionnaires, deliver them to residents, then collect and analyze the results manually. This process often took several full working days for the staff.",
        "Once a month, administrators had to call about 100 tenants to check the quality of services. The process took around 2 hours, and many people didn’t even answer, so admins had to move down the list. For residents, these repeated calls often felt annoying and intrusive.",
        "Sometimes it’s urgent to reach a tenant, but they don’t pick up the phone. For example, during snow removal a car might be left in the yard. In such cases, whole work crews could stand idle for hours."
      ]
    },
    {
      stage: true,
      title: "Definition stage",
      paragraphs: ["At this stage, I analyzed the insights gathered during discovery. My goal was to clearly define the core problem by identifying patterns, pain points, and opportunities. This helped me shape design hypotheses, align the team, and prepare for the ideation phase with a well-defined problem statement."],
      images: [{ src: weather("12.png"), alt: "Definition stage overview" }]
    },
    {
      title: "Survey creation interface",
      paragraphs: ["I assume that adding the custom survey creation interface to the admin panel, so surveys appear in the residents’ mobile app would:"],
      orderedList: [
        "Save 2–3 hours of work per month for property management administrators, as they would no longer need to call tenants to remind them about unpaid housing and utility bills. Instead, they could create one publication and send it to multiple residents' addresses. This publication would then appear in the residents’ mobile application.",
        "Save 2–3 hours of work per month for property management administrators, as they would no longer need to call tenants to ask about the quality of the management company’s services.",
        "Increase CSAT by 12% for residents, as they would no longer need to fill out paper surveys or answer calls about the management company’s performance. Instead, they could respond to questions in just a few clicks."
      ]
    },
    {
      title: "Distribute publications across different apartments, buildings, complexes, or cities",
      paragraphs: ["I assume that adding the option to send publications to residents’ mobile apps in different cities, residential complexes, buildings, and apartments, while being able to view all selected addresses on one screen, would:"],
      orderedList: [
        "Save 8 hours of work per survey for property management administrators, since there would be no need to create paper surveys, send them by mail, and then manually collect and analyze the results.",
        "Reduce call center workload by 14% and decrease tenant call-outs by 40% for property management administrators in emergency situations such as burst pipes or power outages. Instead of calling tenants individually, the administrator can create a single announcement about the incident, provide repair timelines, and select the affected residents’ addresses. The push notification and the announcement will then appear in the tenants’ mobile application.",
        "Speed up property management company operations by 5% in situations where a tenant needs to be urgently notified (for example, during yard cleaning when the car has not been moved) but does not answer phone calls. In this case, the administrator can create a publication and send it directly to the tenant. The push notification and the publication itself will then appear in the tenant’s mobile application.",
        "Increase CSAT by 30% for residents, since they will receive important updates promptly and in a timely manner."
      ]
    },
    {
      stage: true,
      title: "Development stage",
      paragraphs: ["In the Development stage, I transformed my concepts into interactive prototypes, tested them with users, and iterated based on their feedback. By collaborating closely with the team, I refined the solutions until they were ready for implementation."],
      images: [{ src: weather("13.png"), alt: "Development stage overview" }]
    },
    {
      title: "Designing the survey creation interface",
      paragraphs: ["To meet the needs of the property management company, we had to make the survey interface flexible. When residents answered a question, they needed different options:"],
      orderedList: [
        "Choose a single answer from the list.",
        "Choose several answers.",
        "Write their own answer in free text.",
        "Combine a single choice with a free-text answer.",
        "Combine multiple choices with a free-text answer."
      ]
    },
    {
      title: "Feedback from developers",
      paragraphs: ["The best reference I found for creating custom surveys with the needed functionality was Google Forms. Before moving on to design, I showed Google Forms and its features to the developers. After that, we aligned on the functionality using the wireframes I had created."],
      images: [{ src: media("polling.jpg"), videoSrc: media("polling.mp4"), alt: "Polling interface" }]
    },
    {
      title: "Publication scheduling",
      paragraphs: ["I also suggested adding the ability to:"],
      orderedList: [
        "Save a publication as a draft.",
        "Schedule the time when the publication would appear in the resident’s mobile app.",
        "Schedule the time when the publication would disappear from the app."
      ]
    },
    {
      title: "Designing the publication distribution",
      paragraphs: ["To address the needs of the property management company, we had to ensure the distribution process was highly flexible. Administrators needed the opportunity to send publications to:"],
      orderedList: [
        "All residents in all cities.",
        "Several residential complexes within one or several cities.",
        "Houses in different residential complexes and cities."
      ]
    },
    {
      title: "Feedback from stakeholders and developers",
      paragraphs: ["This task was challenging to design, but I understood that its implementation would be even more complex. The most important part was making the interface clear and intuitive for administrators. At this stage, I created wireframes and a simple clickable prototype, and tested it with three administrators. After making adjustments, I showed the result to the developers. They confirmed there would be no backend issues since the system had already been designed to be highly flexible. After that, I created the final design, wrote the specification, and handed the project over to development."]
    },
    {
      title: "Designing the publication distribution to accommodations",
      paragraphs: ["In order to meet the property management company’s needs, publications must be distributed to residents' accommodations in different buildings, complexes and cities."]
    },
    {
      title: "Feedback from stakeholders and developers",
      paragraphs: ["This task was the most difficult to design, but since the backend system was already highly flexible, I had some freedom in the process. I followed the same workflow: created wireframes and a simple clickable prototype, tested it with four administrators, and made adjustments. I also discussed with engineers and developers how apartments are grouped by entrances and risers in the database, since this is important for the interface. Then I shared the result with the developers, finalized the design, wrote the specification, and handed the project over to development."]
    },
    {
      title: "Interface features",
      orderedList: [
        "Accommodations are grouped by several categories: apartments, storerooms, parking stalls, and commercial premises, since accommodations in these categories can share the same number.",
        "It’s possible to select a building, and the accommodations will also be grouped by entrances and water risers. It’s also possible to select all apartments or storerooms. For example, during a power outage, only one entrance may need to be notified. If a pipe bursts, the notification should go to the apartments connected to that riser.",
        "After selecting a building, it’s possible to choose all apartments, an entrance, or the apartments linked to the water riser.",
        "All selected accommodations are displayed on a separate card, “Chosen”. This allows everything to be seen on one screen."
      ]
    },
    {
      title: "Accommodation settings",
      orderedList: [
        "To remove an accommodation from the Chosen list, the user can either click the cross next to the accommodation number in the Chosen list or click the selected accommodation number again in the main list under the address filter.",
        "The user can quickly open the house address from the Chosen list to view all apartments within it by simply clicking on the address.",
        "To clear all accommodations from the Chosen list, the user can click on “Clear all”."
      ],
      images: [{ src: media("accommodation-settings.jpg"), videoSrc: media("accommodation-settings.mp4"), alt: "Accommodation settings" }]
    },
    {
      stage: true,
      title: "Delivery stage",
      paragraphs: ["After launch, we began gathering user feedback and tracking key performance metrics to measure success. We received numerous positive reviews from the administrators of the property management company."],
      images: [{ src: weather("14.png"), alt: "Delivery stage overview" }]
    },
    {
      title: "Notification time: 2 hours → 12 minutes",
      paragraphs: ["The time it takes to notify residents about unpaid housing and utility bills was reduced from 1.5–2 hours to just 12 minutes within one month. Instead of manually calling each debtor, administrators can now send a single publication to specific residents, and they instantly receive a push notification reminding them about the debt."]
    },
    {
      title: "+26% CSAT for residents in 8 months",
      paragraphs: ["The ability to send notifications to residents grouped by entrances or water risers allows administrators to instantly inform them about power or water outages through the mobile app. Residents are immediately informed about the situation and know when the issue will be resolved, which makes them feel more at ease. The property management company, in turn, earns greater trust."]
    },
    {
      title: "8% fewer calls to the call center",
      paragraphs: ["The ability to quickly notify residents about an emergency reduced call center workload by 8% and decreased tenant call-outs by 15% within 8 months. Administrators can send a single publication using the new survey interface, and residents immediately receive a push notification."]
    },
    {
      title: "3 hours of work saved monthly",
      paragraphs: ["Administrators no longer need to spend hours calling residents to collect feedback about the quality. With the new publication system, they can send information through the mobile app in just a few clicks. As a result, about 3 hours of work are saved each month for every administrator. This not only reduces routine tasks but also lets staff focus on more important responsibilities."]
    },
    {
      title: "8 hours of work saved per survey",
      paragraphs: ["Previously, administrators had to print paper surveys, distribute them to residents, and then collect and analyze the results manually. With the new digital survey interface, the entire workflow is now automated in the mobile app and the admin panel. Residents can respond in just a few clicks."]
    },
    {
      title: "Outcome",
      paragraphs: ["Thanks to close collaboration with administrators and developers, we improved key business metrics, built intuitive interfaces for surveys and notifications, and reduced manual work for staff. Residents now get timely updates and quick access to information, while the management company earns more trust and higher satisfaction scores. The publication distribution interface also proved to be scalable, as this solution was applied across multiple sections of the admin panel."]
    },
    {
      title: "Takeaway №1",
      paragraphs: ["Collaborating early and regularly with developers and engineers helped align database structure with interface logic, avoid technical blockers, and make sure the final design could be implemented smoothly."]
    },
    {
      title: "Takeaway №2",
      paragraphs: ["This project showed me the importance of constant communication with the business to truly understand its goals. I learned how crucial it is to validate hypotheses early and test solutions quickly with users to make sure the design delivers real value."]
    }
  ] satisfies CaseSection[]
};
