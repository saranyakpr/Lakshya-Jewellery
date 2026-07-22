function StarIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L10 1.5Z" />
    </svg>
  )
}

const testimonials = [
  {
    name: 'Alvira khan',
    city: 'Mumbai',
    quote:
      'I had taken Try at home service for earring which was very good and Priya Rajput is very nice and friendly.',
  },
  {
    name: 'Meenakshi',
    city: 'Chennai',
    quote:
      'It was a easy and great way of purchasing jewellery at home. I am so happy to get my ring exchanged in a day.',
  },
  {
    name: 'Swetha patil',
    city: 'Chennai',
    quote:
      'My Try at Home experience was amazing. Mr. Azam helped with the process and made it really enjoyable.',
  },
  {
    name: 'Pragya Khare',
    city: 'Delhi',
    quote:
      'I like the quality and convenience. The staff was extremely well behaved and showed me multiple options.',
  },
]

function TestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="text-center">
        <h2 className="text-2xl font-bold !text-[#4f3267] sm:text-3xl">
          1200+ Unforgettable Moments
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Try stunning designs at home, &amp; discover your perfect match!
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((item) => (
          <div className="!rounded-xl bg-white p-5 shadow-sm" key={item.name}>
            <div className="text-center">
              <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
              <p className="text-xs text-slate-400">{item.city}</p>
            </div>
            <p className="mt-4 text-sm text-slate-600">{item.quote}</p>
            <div className="mt-4 flex gap-1 text-[#f5a623]">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon className="size-4" key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
