import React from 'react'

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