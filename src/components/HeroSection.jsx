import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
const HeroSection = () => {
    return (
        <div className="px-16" id="home">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className='text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                    <div className='flex justify-center md:block'>
                        <h1 className='text-transparent bg-clip-text bg-gradient-to-t from-violet-300 to-violet-600'>
                            Hello, I&apos;m
                        </h1>
                    </div>
                    <div>
                        <TypeAnimation className='flex justify-center md:block text-white font-orbitron font-extrabold'
                            sequence={[
                                'Ace Malto',
                                1000,
                                'Software Dev.',
                                1000,
                                'Full Stack Dev.',
                                1000,
                            ]}
                            wrapper='span'
                            speed={20}
                            repeat={Infinity}
                        />
                    </div>
                    <div className=' lg:w-2/5 text-base font-cutive-mono'>
                        <p className='text-justify text-[#ADB7BE]'>
                            I&apos;m passionate web and developer. I love Creating Codes❤️, and I&apos;m open for freelancing and working on open source projects
                            and also love making content and video Editing.
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >

            </motion.div>
        </div>
    )
}

export default HeroSection