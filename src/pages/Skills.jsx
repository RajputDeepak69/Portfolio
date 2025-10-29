import React from 'react'

const groups = {
  'Cloud': ['AWS','Azure','GCP'],
  'DevOps Tools': ['Docker','Kubernetes','Jenkins','GitHub Actions','Terraform','Ansible'],
  'Languages': ['Python','Bash','YAML'],
  'OS': ['Linux','Ubuntu']
}

function Progress({label, value}){
  return (
    <div className="mt-2">
      <div className="flex justify-between text-xs text-gray-300"><div>{label}</div><div>{value}%</div></div>
      <div className="w-full bg-white/6 h-2 rounded mt-1">
        <div className="h-2 rounded" style={{width: value + '%', background:'linear-gradient(90deg, var(--primary), var(--accent))'}}/>
      </div>
    </div>
  )
}

export default function Skills(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold">Skills</h2>
      <p className="text-gray-400 mt-2">Categorized skills with proficiency indicators.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {Object.entries(groups).map(([k,v])=>(
          <div key={k} className="glass rounded-xl p-5">
            <h3 className="font-semibold">{k}</h3>
            <div className="mt-3 space-y-2">
              {v.map((s,i)=> <Progress key={s} label={s} value={80 - i*8} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
