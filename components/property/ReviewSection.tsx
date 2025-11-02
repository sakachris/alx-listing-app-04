import React from "react";

interface Review {
  avatar: string;
  name: string;
  years: string;
  date: string;
  tripType: string;
  rating: number;
  comment: string;
}

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="mt-12">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-6">
        <h3 className="text-2xl font-semibold">Reviews</h3>
        <span className="text-gray-500 text-sm">
          ({reviews.length} reviews)
        </span>
      </div>

      {/* Reviews */}
      <div className="grid md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-6">
            <div className="flex items-center mb-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-sm text-gray-500">
                  {review.years} • {review.tripType} • {review.date}
                </p>
                <div className="flex text-yellow-500 text-sm mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;

// import React from "react";

// interface Review {
//   name: string;
//   avatar: string;
//   rating: number;
//   comment: string;
// }

// const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
//   return (
//     <div className="mt-8">
//       <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
//       {reviews.map((review, index) => (
//         <div key={index} className="border-b pb-4 mb-4">
//           <div className="flex items-center">
//             <img
//               src={review.avatar}
//               alt={review.name}
//               className="w-12 h-12 rounded-full mr-4 object-cover"
//             />
//             <div>
//               <p className="font-bold">{review.name}</p>
//               {/* Stars */}
//               <p className="text-yellow-500">
//                 {"★".repeat(review.rating)}{" "}
//                 <span className="text-gray-500 text-sm">
//                   ({review.rating} / 5)
//                 </span>
//               </p>
//             </div>
//           </div>
//           <p className="mt-2 text-gray-700">{review.comment}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewSection;
