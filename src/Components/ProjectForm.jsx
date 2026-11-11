import React from 'react'

export default function ProjectForm() {
    return (

        <div className="project-form">
            <h1>Add Project </h1>
            <form>
                <label htmlFor="projectName">Title:</label>
                <input type="text" id="projectName" name="projectName" required />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" required></textarea>

                <button type="submit">Add Project</button>
            </form>
        </div>
    )
}