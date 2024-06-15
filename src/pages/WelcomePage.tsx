import { buttonVariants } from '@/components/ui/button';
import { ModeToggle } from '@/theme/ModeToggle';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { IoLogoGithub } from 'react-icons/io';
import { Link } from 'react-router-dom';

const flyInContainer = {
  flyInFrom: {},
  flyInTo: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const flyInItem = {
  flyInFrom: { opacity: 0, y: 100 },
  flyInTo: { opacity: 1, y: 0 },
};

export default function WelcomePage() {
  return (
    <>
      <Helmet>
        <title>Tech CV Generator</title>
      </Helmet>
      <main className="relative flex min-h-screen items-center justify-center p-4 dark:bg-black md:p-8">
        <ModeToggle className="absolute left-4 top-4 md:left-8 md:top-8" />
        <motion.section
          className="flex max-h-[75ch] flex-col items-center gap-4 text-center"
          initial="flyInFrom"
          animate="flyInTo"
          variants={flyInContainer}
        >
          <motion.h1
            className="text-5xl font-bold dark:text-white"
            variants={flyInItem}
          >
            Build your tech CV/résumé today!
          </motion.h1>
          <motion.p
            className="max-w-[750px] text-lg text-slate-600 dark:text-slate-200"
            variants={flyInItem}
          >
            Craft a standout CV/résumé that highlights your tech skills with our
            app and guidance! Start building your future in the tech industry
            now!
          </motion.p>
          <motion.div className="flex gap-4" variants={flyInItem}>
            <Link
              to="/create"
              className={`${buttonVariants()} w-32 font-medium`}
            >
              Create Now
            </Link>
            <Link
              to="https://github.com/LyzanderAndrylie/odin-cv-application"
              className={`${buttonVariants({ variant: 'outline' })} w-32 font-medium dark:text-white`}
            >
              <IoLogoGithub size={20} className="mr-1" />
              GitHub
            </Link>
          </motion.div>
        </motion.section>
      </main>
    </>
  );
}
