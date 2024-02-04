import React from 'react'

export default function card({name}) {
    // console.log("props",props);
  return (
    
    <section className="px-2 py-10 md:px-0">
  <div className="max-w-4xl mx-auto">
    <div className="md:flex md:items-center md:justify-center md:space-x-14">
      <div className="relative flex-shrink-0 w-48 h-48">
        <img
          className="relative object-cover w-48 h-48 rounded-full"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt=""
        />
      </div>
      <div className="mt-10 md:mt-0">
        <blockquote>
          <p className="text-xl text-black">
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquam repellat laborum minima tempore deserunt explicabo placeat!
            Fugit, molestias nesciunt.”
          </p>
        </blockquote>
        <p className="text-lg font-semibold text-black mt-7">{name}</p>
        <p className="mt-1 text-base text-gray-600">Frontend Developer at DevUI</p>
      </div>
    </div>
  </div>
</section>
  )
}
