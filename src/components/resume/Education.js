import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
const data=["The University of Delhi is a premier university of the country with a venerable legacy and international acclaim for highest academic standards, diverse educational programmes, distinguished faculty, illustrious alumni, varied co-curricular activities and modern infrastructure. Over the many years of its existence, the University has sustained the highest global standards and best practices in higher education"]
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
            title="Bachelor's degree, Computer Science"
            subTitle="University of Delhi (2009 - 2013)"
            result="A"
            des={data}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education