import React from "react";
import Image from "next/image";
import { ACCOM_TYPES, APP_NAME } from "@/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top row */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3 relative">
        {/* Logo (left) */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo2.png"
            alt="AirbnbClone logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold text-gray-800">{APP_NAME}</span>
        </div>

        {/* Search Bar (centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block w-full max-w-md">
          <input
            type="text"
            placeholder="Search destinations"
            className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Auth Buttons (right) */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 text-sm hover:text-pink-500">
            Sign In
          </button>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm">
            Sign Up
          </button>
        </div>
      </div>

      {/* Bottom navigation row */}
      <nav className="border-t border-gray-100 flex justify-center gap-6 px-4 md:px-8 py-2 overflow-x-auto">
        {ACCOM_TYPES.map((type) => (
          <button
            key={type}
            className="text-gray-700 hover:text-pink-500 whitespace-nowrap text-sm md:text-base transition"
          >
            {type}
          </button>
        ))}
      </nav>
    </header>
  );
}

// import React from "react";

// export default function Header() {
//   return (
//     <header
//       className="
//         sticky top-0 z-50   /* stick to top and stay above other elements */
//         flex justify-between items-center
//         px-4 md:px-6 py-3 md:py-4
//         bg-white shadow-md
//       "
//     >
//       {/* Logo */}
//       <div className="text-xl md:text-2xl font-bold">AirbnbClone</div>

//       {/* Right side: search + actions */}
//       <div className="flex items-center gap-2 md:gap-4">
//         {/* Search input: hidden on very small screens */}
//         <input
//           type="text"
//           placeholder="Search..."
//           className="
//             hidden sm:block           /* hide on <640px */
//             border rounded-full px-3 md:px-4 py-1.5 md:py-2
//             w-32 sm:w-48 md:w-60
//             focus:outline-none focus:ring-2 focus:ring-pink-400
//           "
//         />

//         <button className="text-sm font-medium">Sign In</button>
//         <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm">
//           Sign Up
//         </button>
//       </div>
//     </header>
//   );
// }
