import React from "react";

export default function TeamGallery() {
  const photos = [
    { src: "/images/team-1.jpg", alt: "Professional accountants team in meeting" },
    { src: "/images/team-2.jpg", alt: "Accounting team collaborating in office" },
    { src: "/images/team-3.jpg", alt: "Business meeting with finance advisors" },
    { src: "/images/team-4.jpg", alt: "Professional accountant portrait" },
    { src: "/images/team-5.jpg", alt: "Bookkeeping and finance operations" },
    { src: "/images/team-6.jpg", alt: "Tax consulting session" }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {photos.map((p, i) => (
        <div key={i} className="overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={p.src}
            alt={p.alt}
            loading="lazy"
            className="h-40 w-full object-cover sm:h-48 md:h-56 transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>
      ))}
    </div>
  );
}
