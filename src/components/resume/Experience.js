import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";
const experiencePointsOne = [
  "Involved in various stages of software development life cycle (SDLC), analysis, design, development, and maintenance.",
  "Developed the classes using C#, which incorporate N-tier architecture and database connectivity.",
  "Implemented ASP.NET MVC strongly typed views, partial views, and attribute routing.",
  "Designed and developed new features for the application using C# and Microservices for the business components using .NET framework.",
  "Migrated applications from HTTP to secure HTTPS platform which involved migration from .NET Core 1.0 to .NET Core 4.0.",
  "Developed Microservices using .NET Core 3.0. and .NET Core 4.0.",
  "Led the migration of various projects from .NET Framework 4.7 to .NET Core 5, and subsequently to .NET Core 6 by using Microservices enhancing performance and scalability.",
  "Designed and developed WebAPI’s for Microservices using ASP.NET Core 6.0 and RESTful APIs for the application using .NET Core.",
  "Developed REST APIs in .NET Core 3.1 & .NET Core 6.0.",
  "Implemented the Rest API’s by using ASP.NET Web API 2.0.",
  "Developed RESTful APIs and message-based communication protocols to facilitate seamless interaction between Microservices, ensuring loose coupling and scalability.",
  "Developed web pages using ASP.NET MVC 5, Entity Framework 6, C#, HTML5, Bootstrap, CSS3, JavaScript, jQuery, Angular 14/13, SQL Server 2019, LINQ, XML and SSRS.",
  "Implemented the data access layer using Entity Framework Code First Approach.",
  "Utilized Entity Framework ORM and LINQ for streamlined database interactions, enhancing application performance through efficient data querying.",
  "Enhanced event logging of public facing pages built in Angular 14 using event handlers with JavaScript, TypeScript, and Entity Framework and SQL Server databases.",
  "Used AJAX, and JSON to post data from the client side to the database.",
  "Used ASP.NET Web API and worked with different Http verbs such as GET, POST, PUT and DELETE and returned JSON format.",
  "Leveraged the power of .NET CORE Web APIs to create seamless communication between the front-end and back-end.",
  "Developed services by using Http Client Module in Angular 14 for making the API calls and inject data into the required components.",
  "Implemented services and dependency injection in Angular 14 to connect the web application to backend APIs and sharing the code between the components.",
];
const experiencePointsTwo = [
  "Collaborated with cross-functional teams to define project scopes and objectives, aligning with business goals, and delivering within timelines.",
  "Used Microservices architecture in .NET CoreWebAPI to break down the existing application into modular, independently deployable services.",
  "Successfully developed a web application using ASP.NET MVC 5, WEB API with Angular 12.",
  "Performed validations on Web Forms using .Net Validation Controls and Client-Side Validation using Angular 12.",
  "Implementing scalable, maintainable, secure REST API Services using .NET Core, C#, and ASP.NET WebAPI 2.0.",
  "Requirement gathering and Designing of upcoming modules using UML.",
  "Created Typescript reusable components and services to consume REST API's using Component-based architecture provided by Angular 12.",
  "Designed and developed enterprise-based applications using .NET, C#, ASP.NET, Entity Framework, LINQ, and Web Services.",
  "Leveraged Angular 12 for application development, including making rest calls using the Http Client module and processing JSON and XML data with jQuery for components that required it.",
  "Implemented authentication and authorization using JSON Web Tokens (JWT), ensuring secure and authenticated access to applications and APIs.",
  "Developed a serverless solution using Azure Functions for real-time data processing and analysis.",
  "Worked extensively on various Azure services like Key Vault for storing connection strings in secrets, Function apps, Stream Analytics jobs, Data Factories, Container instances, Container Registries, Azure Active Directory, App registrations, Service bus, Resource Groups, Subscriptions, Storage Accounts, Application Insights, and App Services.",
  "Experienced in Angular 12 Templates, directives, Routing and navigation, Components, Services, and Data binding concepts.",
  "Migrated SQL Server database to Azure SQL Database for better scalability, availability, and maintenance.",
  "Developed .NET code for publishing and consuming messages using RabbitMQ.",
  "Implemented comprehensive monitoring solutions for RabbitMQ, providing real-time insights.",
  "Strong experience in unit testing tools of JavaScript framework like Karma, Jasmine and Protractor for Angular.",
  "Working with configuration, customizations, and integrations with Microsoft Dynamics 365 CRM - Customer Insights.",
  "Hands-on experience with Microsoft Dynamics CRM customization, Power BI report generation, and working with container-based deployments using Docker and Kubernetes.",
  "Played a pivotal role in the adoption of CI/CD pipelines using Azure DevOps, streamlining the development process, and automating deployments.",
  "Successfully implemented a complete Azure DevOps integration, automating and streamlining workflows.",
  "Used Team Foundation Server (TFS) for the version control for check-in, branch merging and creating build definitions.",
];
const experiencePointsThree = [
  "Designed Presentation layer using ASP.NET, AngularJS, Bootstrap, HTML 5, CSS3, JavaScript, jQuery and AJAX using TDD and Agile methodology.",
  "Developed Angular 7/8 custom directives and pipes and developed core functionality with the ASP.NET MVC Framework (C#.NET).",
  "Developed Razor views with strongly typed view models and helpers and partial views using ASP.NET Core MVC5, HTML5, CSS3, and Angular, C # and Telerik controls.",
  "Leveraged the introduction of Web API Controllers (Web API 2) in ASP.NET MVC 5 to build, maintain.",
  "Worked with Http protocols by using Angular 7/8 components to build Restful services.",
  "Implemented CRUD functionality with Entity framework in ASP.NET MVC and implemented sorting, filtering, and paging with Entity framework in MVC.",
  "Extensive experience in designing and developing UI of web applications using HTML 4/5/6, CSS3, DOM, JavaScript, jQuery, Angular 7/8, Bootstrap 3, AJAX, JSON, and XML.",
  "Successfully implemented OAuth 2.0 mechanisms, ensuring secure user authentication and authorization.",
  "Utilized ASP.NET input validation controls and JavaScript to perform client-side validation.",
  "Migrated existing applications from older web technologies to single page application architecture (SPA) using modern client-side tools like React, Angular 7/8, Typescript and Web pack.",
  "Experienced in Angular 7/8 Templates, directives, Routing and navigation, Components, Services and Data binding concepts.",
  "Developed class libraries using VB.NET to implement the business logic and for the reusability purpose.",
  "Experience in using ASP.NET Core4.0, AJAX framework for quickly creating efficient and interactive Web applications that work across all popular browsers.",
  "Architected robust backend data storage and retrieval through integration of MongoDB with ASP.NET Core applications and Web Services.",
  "Developed Email Notification System using MSMQ asynchronous model using WCF Service and .net MSMQ binding.",
  "Conducted functional, regression, and end-to-end testing using Selenium and API testing using REST on JUnit framework.",
  "Monitoring existing code and doing performance tuning if necessary.",
  "Created CI/CD Pipeline using TFS and Azure DevOps.",
  "Experience in using Source Code Control Systems like GIT.",
];
const jobDescription = [
  "Used fast paced Agile Methodology, involving in task completion, iteration passing through a full development cycle using N-Tier architecture.",
  "Employed Redux Thunks to handle asynchronous data fetching and API calls to achieve efficient state management.",
  "Played a key role in migrating legacy codebase from AngularJS, jQuery, and Bootstrap to a modern MERN stack, with a focus on ReactJS for dynamic and user-friendly interfaces.",
  "Worked on using ReactJS components, Forms, Events, and Router.",
  "Experience on working with React Router for developing Single Page Applications (SPAs).",
  "Prioritized mobile responsiveness and improved the overall user interface using ReactJS, applying modern design principles to create engaging and visually appealing applications.",
  "Integrated React with .NET backend services, enabling seamless data flow and real-time updates between the front-end and back-end components of the application.",
  "Conducted performance analysis and optimizations on the ReactJS components to ensure efficient rendering and a smooth user experience, particularly in scenarios with high user interaction.",
  "Conducted thorough unit testing of React.js components using tools like Jest and Enzyme.",
];
const jobDescription1 = [
  "Working in an agile environment to deliver higher-quality software far more rapidly.",
  "Design, Developed and deployed a web application using ASP.NET that incorporates both N-Tier Architecture, and Database Connectivity.",
  "Worked on different aspects of .NET framework like ASP.NET 5.0 and on middleware ADO.NET.",
  "Worked on VB.Net Security features such as Forms-based Authentication and Role-based Authorization.",
  "Used ASP.Net Web Form controls like Textbox, Button and Dropdown list controls for creating an easily accessible user interface.",
  "Used Windows Communication Foundation (WCF) web services for creating Service end points and Service contracts for the Application and consumed the web services.",
  "Worked on migration of VB6 to VB.NET.",
  "Used AJAX to trade data with a Web Server without reloading the page.",
  "Developed Stored Procedures &Triggers on SQL Server 2012 databases which are hosted on Windows sever 2012.",
  "Used XML to send a message through MSMQ service.",
  "Conducted comprehensive unit tests, optimized code, and maintained web applications for optimal performance.",
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
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div
          className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 w-full overflow-auto"
          style={{ scrollbarColor: "#ff014f #000000", scrollbarWidth: "5px" }}
        >
          <ResumeCard
            title="Full Stack .NET Developer"
            subTitle="CVS Health, Woonsocket, RI	 - (2022 - Present)"
            result="USA"
            des={experiencePointsOne}
          />
          <ResumeCard
            title="Full Stack .NET Developer"
            subTitle="Fannie Mae, Reston, VA - (2020 - 2022)"
            result="USA"
            des={experiencePointsTwo}
          />
          <ResumeCard
            title=".NET/ Angular Developer	"
            subTitle="experiencePointsTwo - (2018 - 2020)"
            result="USA"
            des={experiencePointsThree}
          />
          <ResumeCard
            title=".NET / UI Developer"
            subTitle="Verizon, Irving, TX - (2016 - 2018)"
            result="USA"
            des={jobDescription}
          />
          <ResumeCard
            title=".NET Developer"
            subTitle="HDFC Bank,Hyderabad - (2013 - 2015)"
            result="USA"
            des={jobDescription1}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
