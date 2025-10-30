import React from "react";

const certs = [
  {
    title: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    img: "/images/aws-fundamental.png",
    link: "https://www.credly.com/badges/your-aws-cert-link",
  },
  {
    title: "Intro. to Linux",
    org: "The Linux Foundation",
    img: "/images/Linux-cert.png",
    link: "https://www.credly.com/badges/165a55fb-e569-446f-94ca-663700f8eb01/public_url",
  },
  {
    title: "AWS Educate Web Builder",
    org: "Amazon Web Services",
    img: "/images/web-builder.jpg",
    link: "https://www.credly.com/badges/098220af-93d1-46da-9647-ef2c6221d527/public_url",
  },
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    org: "Amazon Web Services",
    img: "/images/cloud-quest.png",
    link: "https://www.credly.com/badges/6ef94c53-bbe9-4f83-b5dd-7bba778302aa/public_url",
  },
  {
    title: "Cloud DevOps",
    org: "Intel",
    img: "/images/devops-badge.png",
    link: "https://www.credly.com/badges/97356829-1493-4917-a543-899ea174ccc9/public_url",
  },
];

export default function Certifications() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-2">
        Certifications & Badges
      </h2>
      <p className="text-gray-400 text-center mb-10">
        Verified certificates and achievements.
      </p>

      {/* Certification grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {certs.map((c) => (
          <div
            key={c.title}
            className="glass rounded-xl p-5 flex flex-col items-center text-center transition hover:scale-[1.02] hover:shadow-lg"
          >
            {/* Certificate Image */}
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-48 object-contain rounded-lg mb-4"
            />

            {/* Certificate Info */}
            <h3 className="font-semibold text-lg">{c.title}</h3>
            <p className="text-sm text-gray-400">{c.org}</p>

            {/* Short clickable link */}
            {c.link && (
              <p className="text-sm text-blue-400 mt-2">
                Verify:{" "}
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-300"
                >
                  Link
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
