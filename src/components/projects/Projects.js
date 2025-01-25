import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20  border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Salon Project"
          src={
            "https://content3.jdmagicbox.com/comp/surat/p5/0261px261.x261.210813154100.l7p5/catalogue/a-luxury-salon-adajan-road-surat-zp6wkbkmba.jpg?clr="
          }
        />
        <ProjectsCard
          title="Bus Booking Project"
          des=""
          src={
            "https://media.licdn.com/dms/image/D5612AQHlrhhIQdGYqg/article-cover_image-shrink_600_2000/0/1693380105954?e=2147483647&v=beta&t=A1j0tuqIJPWjIn_A3oyFmCWXq0ljYauKmlC5IGDrQA0"
          }
        />
        <ProjectsCard title="Food Delivery Application (Android & IOS)" des="" src={"./foodDelivery.jpg"}/>
      </div>
    </section>
  );
}

export default Projects