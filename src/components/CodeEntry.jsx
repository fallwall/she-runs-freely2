import React from 'react';
import { Link } from 'react-router-dom';

export default function CodeEntry({ children }) {
  return (
    <div className="code-entry">
      <Link to={`/codesthis/${parseInt(children.id)}`}><h1 className="code-entry-title">{children.title} ({children.year})</h1></Link>
      <div className="code-entry-medium">{children.medium.map(i => <div key={i} className="medium-stack">{i}</div>)}</div>
      <p className="code-entry-tagline">{children.tagline}</p>
    </div>
  )
}