import React from 'react'

const Hero = () => {
  return (
    <div className='mt-8 md:mt-14 flex flex-col lg:flex-row gap-4 max-w-xl lg:max-w-full'>
      <section className="w-full">
        <div className="max-w-xl md:max-w-3xl md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Authentic Indian & Nepali Flavors at Himalayan Restaurant
            </h1>
            <p className="max-w-[700px] mt-2 text-muted-foreground md:text-xl">
              Experience the rich, authentic tastes of India and Nepal in a warm, family-friendly atmosphere. Serving Chicagoland since 2003.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
