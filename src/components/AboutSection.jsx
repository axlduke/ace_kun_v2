import { useState, useTransition } from 'react'
import wall from '../../public/about.png'
import TabButton from './TabButton'

const tab_data = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc grid grid-cols-2 pl-2">
                <li>Node.js</li>
                <li>PHP</li>
                <li>Express</li>
                <li>Oracle Sql</li>
                <li>Firebase</li>
                <li>C#</li>
                <li>ASP.NET</li>
                <li>Python</li>
                <li>MySql</li>
                <li>Sequelize</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Software Developer</li>
                <li>BS Computer Science</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>AWS Cloud Practitioner</li>
                <li>Machine Learning Engineer</li>
                <li>Data Science</li>
                <li>Full Stack Developer</li>
                <li>HTML & CSS</li>
                <li>PYTHON 101</li>
            </ul>
        ),
    },
]

const AboutSection = () => {

    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition()
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className="h-screen pt-20" id="about">
            <h1 className="text-center text-4xl font-orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-violet-300 to-violet-600">About me</h1>
            <div className="grid items-center grid-cols-1 lg:grid-cols-2 mt-5 space-y-5 lg:space-y-0">
                <div className='flex justify-center'>
                    <img src={wall} alt="background_wall" className='w-72'/>
                </div>
                <div>
                    <p className="text-justify lg:text-lg font-source-code-pro text-white">
                        I am a <strong className='text-transparent bg-clip-text bg-gradient-to-t from-violet-300 to-violet-600'>Software Engineer/full stack web developer</strong> with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, Redux, Node.js, Php, Express, PostgreSQL,
                        SQL, MySql, HTML, CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.
                    </p>
                    <div className='flex flex-row justify-start space-x-5 mt-5'>
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                        {" "}
                        Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                        Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                        Certifications
                        </TabButton>
                    </div>
                    <div className='text-white'>
                        {tab_data.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection