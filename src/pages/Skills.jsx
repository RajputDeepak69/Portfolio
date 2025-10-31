import React from "react";

const groups = {
  Cloud: [
    { name: "AWS", value: 90 },
    { name: "Azure", value: 50 },
    { name: "GCP", value: 50 },
  ],
  "DevOps Tools": [
    { name: "Docker", value: 90 },
    { name: "Kubernetes", value: 65 },
    { name: "Jenkins", value: 50 },
    { name: "GitHub Actions", value: 80 },
    { name: "Terraform", value: 90 },
    { name: "Ansible", value: 50 },
  ],
  Languages: [
    { name: "Python", value: 75 },
    { name: "Bash", value: 75 },
    { name: "YAML", value: 80 },
  ],
  OS: [
    { name: "Linux", value: 80 },
    { name: "Ubuntu", value: 90 },
  ],
};

function Progress({ label, value }) {
  return (
    <div className="mt-2">
      <div className="flex justify-between text-xs text-gray-300">
        <div>{label}</div>
        <div>{value}%</div>
      </div>
      <div className="w-full bg-white/6 h-2 rounded mt-1">
        <div
          className="h-2 rounded"
          style={{
            width: value + "%",
            background:
              "linear-gradient(90deg, var(--primary), var(--accent))",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold">Skills</h2>
      <p className="text-gray-400 mt-2">
        Categorized skills with proficiency indicators.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {Object.entries(groups).map(([category, skills]) => (
          <div key={category} className="glass rounded-xl p-5">
            <h3 className="font-semibold">{category}</h3>
            <div className="mt-3 space-y-2">
              {skills.map((skill) => (
                <Progress
                  key={skill.name}
                  label={skill.name}
                  value={skill.value}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
