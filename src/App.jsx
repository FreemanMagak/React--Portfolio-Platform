import { useState, useEffect } from 'react'
import Headers from './Components/Header'
import ProjectForm from './Components/ProjectForm'
import ProjectList from './Components/ProjectList'
import './App.css'


// Main App component
export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Fetch failed:', err))
  }, [])

  // Function to handle adding a new project
  const handleAddProject = (newProject) => {
  fetch('http://localhost:3000/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProject),
  })
    .then((res) => res.json())
    .then((savedProject) => setProjects((prev) => [...prev, savedProject]))
    .catch((err) => console.error('Add failed:', err))
}

  return (
    <>
      <Headers />
      <ProjectForm onAddProject={handleAddProject}/>
      <ProjectList projects={projects} />
    </>
  )
}

