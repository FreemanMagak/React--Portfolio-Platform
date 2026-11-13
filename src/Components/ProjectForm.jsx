import { useState } from 'react'

// ProjectForm component for adding new projects
export default function ProjectForm({ onAddProject }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        onAddProject({
            title: title.trim(),
            description: description.trim()
        })

        setTitle('')
        setDescription('')
    }

    return (

        <div className="project-form">
            <h1>Add Project </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="projectName">Title:</label>
                <input type="text" id="projectName" name="projectName" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

                <button type="submit">Add Project</button>
            </form>
        </div>
    )
}