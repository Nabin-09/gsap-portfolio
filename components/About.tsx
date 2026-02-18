import React from 'react'
import Button from './Button'

export default function About() {
  return <section>
    <div>
        {/* Wrapper */}
        <div className="">
            <h2 className=''>Abour Me</h2>
            <p>I am Nabin Sharma , a full stack developer and a competitive programmer,
            I build scalable , maintainable web applications. I also love to study Algorithms(it is not dead).
            </p>
            <p>
                I specialise in developing using the JavaScript Ecosystem , using NodeJs(as my runtime) , 
                ExpressJs and ReactJs as my primary frameworks , I have worked on SQL as well as 
                NoSQL Databases , I aim to create high quality and efficient softwares that could make
                our lives easier.
            </p>
            {/* Btn */}
            <Button label='View Projects' />
            {/* Status */}
            
        </div>
    </div>
  </section>
}
