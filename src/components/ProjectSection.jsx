import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import ProjectTag from './ProjectTag'
import ProjectCard from './ProjectCard'
const projectsData = [
    {
        id: 1,
        title: "Test",
        description: "Test",
        image: "",
        tag: ['All',''],
        gitUrl: '/',
        previewUrl: '/',
    }
]

const ProjectSection = () => {
    const [tag, setTag] = useState('All')
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectData.filter((project) =>
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial: { y: 50, opacity: 0},
        animate: { y: 50, opacity: 1},
    }
    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div
                className="text-white flex flex-row justify-center items-center gap-2 py-6"
            >
                <ProjectTag
                    
                />
            </div>
        </section>
    )
}

export default ProjectSection