import { useState } from "react";

interface PropertyProps {
  property_id: string;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: string;
  category: string[];
  pricepernight: string;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string | null;
}

const tabs = ["Description", "What we offer", "About host"];

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="w-full">
      {/* Title + Location + Rating */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center flex-wrap gap-3 mt-2 text-gray-600">
          <span className="flex items-center text-yellow-500 font-medium">
            ⭐ {property.rating}
          </span>
          <span>
            {property.address.city}, {property.address.state},{" "}
            {property.address.country}
          </span>
          <span className="text-gray-500">• {property.offers.occupants} guests</span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 gap-2 mt-6">
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 row-span-2 w-full h-[420px] object-cover rounded-lg"
        />
        <img
          src={property.image}
          alt="extra"
          className="w-full h-[200px] object-cover rounded-lg"
        />
        <img
          src={property.image}
          alt="extra"
          className="w-full h-[200px] object-cover rounded-lg"
        />
        <img
          src={property.image}
          alt="extra"
          className="w-full h-[200px] object-cover rounded-lg"
        />
        <img
          src={property.image}
          alt="extra"
          className="w-full h-[200px] object-cover rounded-lg"
        />
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <div className="flex space-x-6 border-b pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 ${
                activeTab === tab
                  ? "border-b-2 border-green-600 text-green-600 font-medium"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "Description" && (
            <div className="text-gray-700 leading-relaxed">
              <p>
                Welcome to {property.name}! A cozy stay located in{" "}
                {property.address.city}, perfect for {property.offers.occupants}{" "}
                guests. It includes {property.offers.bed} bed(s) and{" "}
                {property.offers.shower} bathroom(s). Relax and enjoy your stay
                with the comfort of our modern amenities.
              </p>
            </div>
          )}

          {activeTab === "What we offer" && (
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {property.category.map((amenity, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <span>✔</span>
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          )}

          {activeTab === "About host" && (
            <p className="text-gray-600">
              Your host will provide all details you need for a smooth and
              enjoyable stay.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;


// import { PropertyProps } from "@/interfaces";
// import { useState } from "react";

// const tabs = ["Description", "What we offer", "Reviews", "About host"];

// const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
//   property,
// }) => {
//   const [activeTab, setActiveTab] = useState("Description");

//   return (
//     <div className="w-full">
//       {/* Title + Location + Rating */}
//       <div>
//         <h1 className="text-3xl md:text-4xl font-bold">{property.name}</h1>
//         <div className="flex items-center flex-wrap gap-3 mt-2 text-gray-600">
//           <span className="flex items-center text-yellow-500 font-medium">
//             ⭐ {property.rating}
//           </span>
//           <span>
//             {property.address.city}, {property.address.state},{" "}
//             {property.address.country}
//           </span>
//           <span className="text-gray-500">• Mainstream</span>
//         </div>
//       </div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-4 gap-2 mt-6">
//         {/* Main image */}
//         <img
//           src={property.image}
//           alt={property.name}
//           className="col-span-2 row-span-2 w-full h-[420px] object-cover rounded-lg"
//         />
//         {/* Side images */}
//         <img
//           src={property.image}
//           alt="extra"
//           className="w-full h-[200px] object-cover rounded-lg"
//         />
//         <img
//           src={property.image}
//           alt="extra"
//           className="w-full h-[200px] object-cover rounded-lg"
//         />
//         <img
//           src={property.image}
//           alt="extra"
//           className="w-full h-[200px] object-cover rounded-lg"
//         />
//         <img
//           src={property.image}
//           alt="extra"
//           className="w-full h-[200px] object-cover rounded-lg"
//         />
//       </div>

//       {/* Tabs */}
//       <div className="mt-8">
//         <div className="flex space-x-6 border-b pb-2">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={`pb-2 ${
//                 activeTab === tab
//                   ? "border-b-2 border-green-600 text-green-600 font-medium"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Tab Content */}
//         <div className="mt-4">
//           {activeTab === "Description" && (
//             <div className="text-gray-700 leading-relaxed">
//               <p>
//                 Feel like exploring the Dominican? Start the day with a hike on
//                 one of Playa Moron’s many trails. Weave your way around the
//                 gated community to find secluded sandy coves for swimming and
//                 paddleboarding. When you’re ready to chill with friends, the
//                 beach house pool awaits. Spend the night entertaining in the
//                 outdoor lounge, sipping drinks in the hot tub, and gazing out
//                 over incredible ocean views.
//               </p>
//               <h4 className="mt-6 font-semibold">The space</h4>
//               <ul className="list-disc list-inside text-gray-600 mt-2">
//                 <li>Primary: King size bed</li>
//                 <li>Ensuite bathroom with rain shower</li>
//                 <li>Dual vanity + Walk-in closet</li>
//                 <li>Balcony with ocean view</li>
//               </ul>
//             </div>
//           )}

//           {activeTab === "What we offer" && (
//             <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
//               {property.category.map((amenity, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center space-x-2 text-gray-700"
//                 >
//                   <span>✔</span>
//                   <span>{amenity}</span>
//                 </li>
//               ))}
//             </ul>
//           )}

//           {activeTab === "Reviews" && (
//             <p className="text-gray-600">Reviews are shown below 👇</p>
//           )}

//           {activeTab === "About host" && (
//             <div className="text-gray-600">
//               <p>
//                 Your host will provide all the details you need for a smooth and
//                 enjoyable stay.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetail;
