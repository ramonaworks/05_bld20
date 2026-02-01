const data = {
  1:{t:"UX-led mobile optimization beyond framework defaults",b:[
    "Mobile responsiveness was treated as a baseline, not a solution.",
    "Critical flows were intentionally designed beyond Bootstrap defaults.",
    "This reduced hidden friction and silent revenue loss."
  ]},
  2:{t:"Revenue-critical quote-to-purchase alignment",b:[
    "Designed around decision-making, not form completion.",
    "Mapped UX changes directly to purchase intent.",
    "Aligned design outcomes with revenue realization."
  ]},
  3:{t:"Commercial pattern reuse",b:[
    "Reused high-performing commercial vehicle patterns.",
    "Reduced experimentation risk.",
    "Improved predictability of outcomes."
  ]},
  4:{t:"State preservation and editability",b:[
    "Users could freely navigate steps.",
    "Progress was preserved.",
    "Reduced fear-driven abandonment."
  ]},
  5:{t:"Step-level drop-off visibility",b:[
    "Each step measurable.",
    "Friction isolated precisely.",
    "Enabled continuous optimization."
  ]},
  6:{t:"Accessibility-first tuning",b:[
    "Optimized for real-world mobile usage.",
    "Exceeded baseline accessibility.",
    "Reduced legal and reputational risk."
  ]},
  7:{t:"Trust-based CTA strategy",b:[
    "CTA colors chosen intentionally.",
    "Personal and commercial differentiated.",
    "Reinforced confidence at commitment."
  ]},
  8:{t:"Persistent human support",b:[
    "Click-to-call always visible.",
    "Balanced automation with reassurance.",
    "Increased completion confidence."
  ]},
  9:{t:"Research-informed navigation",b:[
    "Navigation driven by UX research.",
    "Patterns validated against studies.",
    "Delivered outsized gains."
  ]},
  10:{t:"Competitive benchmarking",b:[
    "Benchmarked against major insurers.",
    "Measured effectiveness over brand.",
    "Ensured parity and differentiation."
  ]},
  11:{t:"Analytics-aware UX",b:[
    "Design changes logged as first-class events.",
    "Created traceability.",
    "Clarified performance impact."
  ]},
  12:{t:"Mobile vs desktop differentiation",b:[
    "Mobile treated as distinct.",
    "Context-aware decisions.",
    "Prevented desktop bias."
  ]},
  13:{t:"Time-to-completion tuning",b:[
    "Completion time treated as signal.",
    "Reduced cognitive load.",
    "Improved confidence."
  ]},
  14:{t:"Recovery mechanisms",b:[
    "Assumed interruption.",
    "Protected user effort.",
    "Preserved intent."
  ]},
  15:{t:"Interruption-aware design",b:[
    "Designed for real-world distractions.",
    "Acknowledged reality.",
    "Protected revenue."
  ]}
};

const card = document.getElementById("cs-card");
const pills = document.querySelectorAll(".cs-pill");

function render(id){
  card.innerHTML =
    `<h4>${data[id].t}</h4>
     <ul>${data[id].b.map(x=>`<li>${x}</li>`).join("")}</ul>`;
}

pills.forEach(p=>{
  p.addEventListener("click",()=>{
    pills.forEach(x=>x.classList.remove("is-active"));
    p.classList.add("is-active");
    render(p.dataset.id);
  });
});

render(1);
