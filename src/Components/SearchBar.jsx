import React from 'react'

// SearchBar component for filtering projects based on user input
export default function SearchBar({ query, onQueryChange }) {
    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Search Projects"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
        />
    )
}