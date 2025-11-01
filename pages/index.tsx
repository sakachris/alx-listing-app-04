import Image from "next/image";
import { useState } from "react";
import { PROPERTYLISTINGSAMPLE, HERO_BG, FILTERS } from "@/constants";
import Pill from "@/components/common/Pill";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("");

  // If a filter is selected, show properties whose category array includes it
  const filteredProps = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((p) =>
        p.category.some((c) => c.toLowerCase() === activeFilter.toLowerCase())
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-white text-center">
        <Image
          src={HERO_BG}
          alt="Hero background"
          fill
          className="object-cover -z-10"
          priority
        />
        <h1 className="text-4xl md:text-6xl font-bold">
          Find your favorite place here!
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap gap-3 justify-center my-8">
        {FILTERS.map((f) => (
          <Pill
            key={f}
            label={f}
            onClick={() => setActiveFilter((prev) => (prev === f ? "" : f))}
            className={
              activeFilter === f
                ? "bg-pink-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }
          />
        ))}
      </section>

      {/* Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-12">
        {filteredProps.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No properties match "{activeFilter}"
          </p>
        )}
        {filteredProps.map((prop) => (
          <div
            key={prop.name}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* <img
              src={prop.image}
              alt={prop.name}
              className="h-56 w-full object-cover"
            /> */}
            <Image
              src={prop.image}
              alt={prop.name}
              width={400}
              height={224}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{prop.name}</h3>
              <p className="text-sm text-gray-500">
                {prop.address.city}, {prop.address.country}
              </p>
              <p className="mt-2 text-pink-600 font-bold">
                ${prop.price} / night
              </p>
              <p className="text-yellow-500 text-sm">⭐ {prop.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

// import Image from "next/image";
// import { PROPERTYLISTINGSAMPLE, HERO_BG, FILTERS } from "@/constants";
// import Pill from "@/components/common/Pill";

// export default function Home() {
//   return (
//     <div>
//       {/* Hero */}
//       <section className="relative h-[60vh] flex flex-col justify-center items-center text-white text-center">
//         <Image
//           src={HERO_BG}
//           alt="Hero background"
//           fill
//           className="object-cover -z-10"
//           priority
//         />
//         <h1 className="text-4xl md:text-6xl font-bold">
//           Find your favorite place here!
//         </h1>
//         <p className="mt-4 text-lg md:text-2xl">
//           The best prices for over 2 million properties worldwide.
//         </p>
//       </section>

//       {/* Filters */}
//       <section className="flex flex-wrap gap-3 justify-center my-8">
//         {FILTERS.map((f) => (
//           <Pill key={f} label={f} />
//         ))}
//       </section>

//       {/* Listings */}
//       <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-12">
//         {PROPERTYLISTINGSAMPLE.map((prop) => (
//           <div
//             key={prop.name}
//             className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
//           >
//             <img
//               src={prop.image}
//               alt={prop.name}
//               className="h-56 w-full object-cover"
//             />
//             <div className="p-4">
//               <h3 className="font-semibold text-lg">{prop.name}</h3>
//               <p className="text-sm text-gray-500">
//                 {prop.address.city}, {prop.address.country}
//               </p>
//               <p className="mt-2 text-pink-600 font-bold">
//                 ${prop.price} / night
//               </p>
//               <p className="text-yellow-500 text-sm">⭐ {prop.rating}</p>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }
