import {useState} from "react";
import ProjectCard from "./ProjectCard";
import SearchBar from "./SearchBar";

// ProjectList component to display a list of projects with search functionality
export default function ProjectList({ projects }) {
    const [query, setQuery] = useState('')

    const filtered = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  )

    return (
        <div className="project-list-section">
            <h2>Project List</h2>
            <SearchBar query={query} onQueryChange={setQuery} />
            <div className="project-list">
                {filtered.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
