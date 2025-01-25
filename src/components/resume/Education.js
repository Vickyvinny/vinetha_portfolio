import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
const data = [
  "The era of success of DRK Group of Educational Institutions has started way back in 2004 when it was established by Mr.D.B Chandra Sekhar Rao in the fond memory of his late father Sri Dasari Rama Kotaiah garu. Mr.D.B Chandra Shekar Rao is an eminent & successful entrepreneur, who has subsequently decided to focus on high quality education with the philanthropic motive, to act as a leader to promote economic & industrial growth of the country. DRKIST belongs to the DRK Educational Society. DRK Group has envisaged significant investment of capital and resources to give shape to the development of the institute, in terms of Infrastructure, academic resources and career development for its students. A vibrant effort has been made to consciously invest to improve the conceptual and technical skill of the students.",
];
const data1 = [
  "Ellenki College of Engineering and Technology, known as ECET was founded in the year 1999 and is located in Hyderabad, Telangana. The college is a Autonomous Institution affiliated to Jawaharlal Nehru Technological University, Hyderabad. The campus is located in the Hyderabad city suburbs near BHEL, Patancheru area",
];
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology"
            subTitle="Drk institute of science and technology (2016 - 2019)"
            result="6.1 CGPA"
            des={data}
          />
          <ResumeCard
            title="Diploma"
            subTitle="Ellenki College of Engineering and Technology (2013 - 2016)"
            result="6.5 CGPA"
            des={data1}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education