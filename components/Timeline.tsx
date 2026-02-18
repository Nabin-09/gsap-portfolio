import React from 'react'
import { timelineItems } from '@/data/data'
export default function Timeline() {
  return <section>
    <div className="container">
        {/* Title */}
        <div className="">
            <h2 className="Academic Journey"></h2>
            <p className="A timeline of my Roles , Projects and Growth"></p>
        </div>
        {/* Wrapper  */}
        <ul className="">
            {timelineItems.map(item =>(
                <li key={item.id}>
                    {/* content */}
                    <div className=""></div>
                    {/* Empty Div */}
                </li>
            ))}
        </ul>
    </div>
  </section>
}
