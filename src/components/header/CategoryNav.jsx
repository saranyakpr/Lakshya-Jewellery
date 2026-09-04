import { Link } from 'react-router-dom'

function CategoryNav({ items }) {
  return (
    <nav className="flex gap-4 overflow-x-auto bg-[#4f3267] px-4 py-3 sm:gap-6 lg:px-6 [&::-webkit-scrollbar]:hidden">
      {items.map((item) => (
        <Link
          className="shrink-0 whitespace-nowrap text-sm text-white transition hover:text-white/80 sm:text-base"
          key={item.label}
          style={{ textDecoration: 'none' }}
          to={`/category/${item.slug}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default CategoryNav




// import { Link } from 'react-router-dom'
// import defaultCategoryImage from '../../assets/img/logo.png'

// function CategoryNav({ items }) {
//   return (
//     <nav className="flex gap-4 overflow-x-auto bg-[#4f3267] px-4 py-3 sm:gap-6 lg:px-6 [&::-webkit-scrollbar]:hidden">
//       {items.map((item) => (
//         <Link
//           className="flex shrink-0 flex-col items-center gap-1.5 text-center text-white transition hover:text-white/80"
//           key={item.label}
//           style={{ textDecoration: 'none' }}
//           to={`/category/${item.slug}`}
//         >
//           <span className="flex size-12 items-center justify-center rounded-full border-2 border-[#f2c9dc] bg-[#fbeef4] p-1.5 sm:size-14">
//             <img
//               alt=""
//               className="size-full rounded-full object-cover"
//               src={item.image || defaultCategoryImage}
//             />
//           </span>
//           <span className="w-16 text-xs leading-tight sm:w-20 sm:text-sm">{item.label}</span>
//         </Link>
//       ))}
//     </nav>
//   )
// }

// export default CategoryNav
