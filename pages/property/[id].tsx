import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

interface Property {
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

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/properties/${id}/`
        );
        setProperty(response.data);
      } catch (err) {
        console.error("Error fetching property:", err);
        setError("Failed to load property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading property...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!property)
    return (
      <p className="text-center text-gray-500 py-10">Property not found</p>
    );

  // Example placeholder reviews for now
  const sampleReviews = [
    {
      name: "Kerry",
      avatar: "/assets/users/u1.jpg",
      rating: 5,
      comment:
        "I simply don’t have the words to describe how incredibly beautiful the villa and its surroundings are. A wonderful remote spot that is breathtaking.",
      date: "March 2024",
    },
    {
      name: "Cindy & Ben",
      avatar: "/assets/users/u3.jpg",
      rating: 5,
      comment:
        "Such a serene, peaceful environment. The villa exceeded our expectations in every way. Highly recommended!",
      date: "August 2023",
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-12 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT: Property Detail + Reviews */}
        <div className="lg:col-span-2 space-y-10">
          <PropertyDetail property={property} />
          <ReviewSection reviews={sampleReviews} />
        </div>

        {/* RIGHT: Booking Section */}
        <div className="lg:col-span-1">
          <BookingSection price={property.pricepernight} />
        </div>
      </div>
    </div>
  );
}


// pages/property/[id].tsx
// import { useRouter } from "next/router";
// import { PROPERTYLISTINGSAMPLE } from "@/constants";
// import PropertyDetail from "@/components/property/PropertyDetail";
// import BookingSection from "@/components/property/BookingSection";
// import ReviewSection from "@/components/property/ReviewSection";

// export default function PropertyPage() {
//   const router = useRouter();
//   const { id } = router.query;

//   const property = PROPERTYLISTINGSAMPLE[Number(id)];

//   if (!property) {
//     return (
//       <div className="container mx-auto px-4 py-10">
//         <p className="text-center text-lg text-red-500">Property not found</p>
//       </div>
//     );
//   }

//   // Mock reviews for demo
//   const sampleReviews = [
//     {
//       name: "Kerry",
//       avatar: "/assets/users/u1.jpg",
//       rating: 5,
//       comment:
//         "I simply don’t have the words to describe how incredibly beautiful the villa and its surroundings are. A wonderful remote spot that is breathtaking.",
//       date: "March 2024",
//     },
//     {
//       name: "Pooja",
//       avatar: "/assets/users/u2.jpg",
//       rating: 4,
//       comment:
//         "We stayed here for a family vacation of 7 adults (3 couples + 1 baby). The house was BEAUTIFUL and honestly better than shown in pictures.",
//       date: "March 2024",
//     },
//     {
//       name: "Cindy & Ben",
//       avatar: "/assets/users/u3.jpg",
//       rating: 5,
//       comment:
//         "Such a serene, peaceful environment. The villa exceeded our expectations in every way. Highly recommended!",
//       date: "August 2023",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 lg:px-12 py-8">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* LEFT SECTION: Details + Reviews */}
//         <div className="lg:col-span-2 space-y-10">
//           <PropertyDetail property={property} />

//           {/* Reviews */}
//           <ReviewSection reviews={sampleReviews} />
//         </div>

//         {/* RIGHT SECTION: Booking */}
//         <div className="lg:col-span-1">
//           <BookingSection price={property.price} />
//         </div>
//       </div>
//     </div>
//   );
// }
