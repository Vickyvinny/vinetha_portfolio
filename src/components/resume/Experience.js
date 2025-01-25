import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";
const experiencePointsOne = [
  `Description:`,
`This project involved developing an admin role within a Salon Management System, focusing on
overseeing multiple saloon locations and managing various aspects such as user accounts,
service categories, and performance reporting. The admin role was responsible for maintaining
accurate data across different screens, enabling effective decision-making through
comprehensive reporting and analytics.
`,
  "Roles and Responsibilities:",
  `Worked on the admin role UI and seamlessly integrated APIs to ensure smooth data flow
and functionality. Developed reusable tables using React components to efficiently
showcase detailed information about shops,Categories and Users, enhancing user
interface consistency and ease of maintenance.
`,
  `
Implemented dynamic charts using libraries like recharts to visualize shop incomes and
losses over time, providing stakeholders with insightful data analysis tools.Update and
maintain information for each saloon location.Ensure accurate representation of
operational details across all locations.Generate insightful reports for business analysis
based on collected data.Present data in a meaningful way to stakeholders to facilitate
decision-making
`,
  `
Implemented responsive design principles to ensure the application is accessible and
functional across various devices and screen sizes.
`,
  `
Utilized robust error handling and implemented notification models to effectively
communicate success and failure messages to users, improving overall system reliability
and user satisfaction.
`,
  `

Continuously collaborated with backend developers, designers, and stakeholders to
iterate on UI/UX improvements and ensure alignment with project goals and user
requirements`,
];
const experiencePointsTwo = [
  `
  Description:`,
  `In this application, the admin plays a crucial role with additional user roles such as owner, driver
and customer. The admin is responsible for adding buses with specific types and seat capacities,
creating bus schedules based on routes, and assigning drivers to each bus. Moreover, the admin
has the authority to edit bus details as needed.`,
  `Roles and Responsibilities:
`,
  `Enhanced user experience by implementing interactive features such as real-time updates
on Bus status and location using geolocation APIs.
`,
  `Optimized performance by implementing lazy loading and pagination for large datasets in
the tables, ensuring faster loading times and smoother user interactions.
`,
  `Implemented responsive design principles to ensure the application is accessible and
functional across various devices and screen sizes.
`,
  `Conducted usability testing and gathered feedback to iterate and improve the UI/UX
design, focusing on intuitive navigation and clear presentation of information.
`,
];

const experiencePointsThree = [
  `
  Description:`,
  `This food delivery app provides a seamless experience for both customers and sellers. Sellers can manage product listings, promotions, and special offers, while customers enjoy easy browsing, cart management, and real-time order tracking. The app uses React Native Geolocation API to help customers find nearby restaurants, and employs FlatList for efficient data rendering, enhancing performance. With React Native Responsive Dimensions, the app adapts to various screen sizes, ensuring a consistent experience across devices. Collaborative efforts with the UI/UX team ensured the interface was user-friendly and optimized for satisfaction.`,
  `Roles and Responsibilities:
`,
  `Developed a dual-role app (Customer and Seller) to manage product listings, promotions, and order tracking,
delivering a seamless experience for both sellers and customers.
`,
  `Implemented comprehensive seller features, including product management, promotion creation, and special
offers (e.g., "Today's Specials" and "Best Choices"). 
`,
  `Designed customer-centric features for easy browsing, cart management, and real-time order tracking,
ensuring a smooth post-purchase experience. 
`,
  `Integrated React Native Geolocation API to enable location-based product discovery, allowing customers to
find nearby restaurants. 
`,
  `Enhanced app performance using FlatList for efficient rendering of large data sets, improving browsing speed
and checkout processes. 
`,
  `Applied React Native Responsive Dimensions to deliver an adaptive layout that ensures responsiveness across
various screen sizes and device resolutions. 
`,
  `Collaborated closely with the UI/UX team to conduct usability testing, gather feedback, and refine the app
interface for optimal user satisfaction. 
`,
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold underline">Job Experience:</h2>
          <h3 className="text-2xl font-bold">
            <i>
              Software Engineer at<strong> Extended Web AppTech</strong>,
              Hyderabad - (October 2023 – January 2025)
            </i>
          </h3>
        </div>
        <div
          className="mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 w-full overflow-auto"
          style={{ scrollbarColor: "#ff014f #000000", scrollbarWidth: "0px" }}
        >
          <ResumeCard
            title="Software Developer at Extended Web App Tech	 - "
            subTitle="Bus Booking"
            result="INDIA"
            des={experiencePointsTwo}
          />
          <ResumeCard
            title="Software Developer at Extended Web App Tech	 - "
            subTitle="Salon Admin"
            result="INDIA"
            des={experiencePointsOne}
          />
          <ResumeCard
            title="Software Developer at Extended Web App Tech	 - "
            subTitle="Food Delivery Application (Android & IOS)"
            result="INDIA"
            des={experiencePointsThree}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
