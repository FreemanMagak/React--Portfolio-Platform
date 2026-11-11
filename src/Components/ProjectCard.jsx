import React from 'react';


export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="card card-row" style={{ maxWidth: "540px" }}>
                <img src={project.image} className="card-img-start" alt={project.title} />
                    <div className="card-body">
                        <h4 className="card-title">{project.title}</h4>
                        <p className="card-description">{project.description}</p>
                        <p className="card-text"><small className="fg-2">Last updated 3 mins ago</small></p>
                    </div>
            </div>
        </div>
    )
}