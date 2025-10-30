import React from "react";

const certs = [
  {
    title: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    img: "/images/aws-fundamental.png",
  },
  {
    title: "Intro. to Linux",
    org: "The Linux Foundation",
    img: "/images/Linux-cert.png",
    link: "https://www.credly.com/badges/165a55fb-e569-446f-94ca-663700f8eb01/public_url",
  },
  {
    title: "AWS Educate web builder",
    org: "Amazon Web Services",
    img: "/images/web-builder.png",
    link: "https://www.credly.com/badges/098220af-93d1-46da-9647-ef2c6221d527/public_url",
  },
  {
    title: "AWS Cloud Quest: Cloud-Practitioner",
    org: "Amazon Web Services",
    img: "/images/cloud-quest.png",
    link: "https://www.credly.com/badges/6ef94c53-bbe9-4f83-b5dd-7bba778302aa/public_url",
  },
  {
    title: "Cloud Devops",
    org: "Intel",
    img: "/images/devops-badge.png",
    link: "hhttps://www.credly.com/badges/97356829-1493-4917-a543-899ea174ccc9/public_url",
  },
];

export default function Certifications() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-2">Certifications & Badges</h2>
      <p className="text-gray-400 text-center mb-10">
        Verified certificates and badges.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {certs.map((c) => (
          <a
            key={c.title}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-xl p-5 flex flex-col items-center text-center transition hover:scale-105 hover:shadow-lg"
          >
            <div className="w-24 h-24 mb-3 overflow-hidden rounded-full bg-white/10 flex items-center justify-center">
              <img
                src={c.img}
                alt={c.title}
                className="object-contain w-full h-full group-hover:scale-110 transition"
              />
            </div>
            <h3 className="font-semibold text-lg">{c.title}</h3>
            <p className="text-sm text-gray-400">{c.org}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
