function QuoteIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 44 36" {...props}>
      <path d="M12.4 36c-3.3 0-6-1.1-8.1-3.4C2.1 30.3 1 27.4 1 24c0-3.6 1.1-7.2 3.4-10.9C6.6 9.5 9.7 6 13.7 2.9L20 8c-2.9 2.3-5 4.4-6.4 6.4-1.3 1.9-2.2 3.7-2.5 5.4.6-.2 1.3-.3 2-.3 2.4 0 4.4.8 6 2.4 1.6 1.6 2.4 3.6 2.4 6 0 2.5-.9 4.6-2.6 6.3-1.7 1.8-3.9 2.8-6.5 2.8zm23 0c-3.3 0-6-1.1-8.1-3.4-2.2-2.3-3.3-5.2-3.3-8.6 0-3.6 1.1-7.2 3.4-10.9C29.6 9.5 32.7 6 36.7 2.9L43 8c-2.9 2.3-5 4.4-6.4 6.4-1.3 1.9-2.2 3.7-2.5 5.4.6-.2 1.3-.3 2-.3 2.4 0 4.4.8 6 2.4 1.6 1.6 2.4 3.6 2.4 6 0 2.5-.9 4.6-2.6 6.3-1.7 1.8-3.9 2.8-6.5 2.8z" />
    </svg>
  )
}

function StarIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 7.1-1.01L12 2z" />
    </svg>
  )
}

const reviews = [
  {
    text: `"Lakshya's video call purchasing was great. Felt like I was in a showroom with jewellery displays."`,
    author: 'Ankan Sen, Mumbai',
  },
  {
    text: `"Experienced seamless video call to see products from home. Lakshya consultant helped me choose the perfect design."`,
    author: 'Barnali Sinha, Bengaluru',
  },
  {
    text: `"Discovered a new shopping experience with video call. Got good discounts on my purchase."`,
    author: 'Ankita Bagga, New Delhi',
  },
]

function ReviewsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 className="text-center text-2xl font-bold !text-[#4f3267] sm:text-3xl">Reviews</h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {reviews.map(({ text, author }) => (
          <div className="rounded-xl bg-white p-8 shadow-sm" key={author}>
            <QuoteIcon className="h-9 w-11 text-purple-200" />
            <p className="mt-2 text-base text-gray-600">{text}</p>
            <div className="mt-8 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon className="size-4 text-amber-400" key={index} />
              ))}
            </div>
            <p className="mt-4 text-sm font-bold !text-[#494949]">{author}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          className="!rounded-lg bg-purple-500 px-10 py-2 !text-sm font-semibold text-white transition hover:bg-purple-600"
          type="button"
        >
          Schedule a Video Call
        </button>
      </div>
    </section>
  )
}

export default ReviewsSection
