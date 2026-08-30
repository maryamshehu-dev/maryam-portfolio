import type {Project} from "./project-data";

const systemCopy:Record<string,{title:string;note:string}>={
 hirewise:{title:"Evidence states, not decorative buttons",note:"The system is built around interview readiness, sealed notes and evidence scores."},
 mahli:{title:"A menu that behaves like the brand",note:"Ordering controls stay warm and tactile without hiding price or customisation."},
 sitecheck:{title:"Field controls that read at a glance",note:"Condition, evidence and repair states use square technical forms and plain labels."},
 nara:{title:"Numbers first. Explanations close by.",note:"Financial components show the answer, its source and a way to correct it."},
 roam:{title:"Ideas, votes and plans look different",note:"The system makes the status of a travel decision impossible to mistake."},
 gona:{title:"Made for sunlight, dust and weak signal",note:"Large field states, offline receipts and lot labels carry the working system."},
 nadi:{title:"Access is part of the interface",note:"Family, school and clinical views make privacy visible rather than hiding it in settings."},
 told:{title:"An archive should feel handled, not uploaded",note:"Recording, indexing and reading each have their own rhythm, while the consent state stays visible."}
};

function ProjectComponents({project}:{project:Project}){
 switch(project.slug){
  case "hirewise": return <div className="kit kit-hire"><div className="kit-stage"><small>INTERVIEW READINESS</small><b>Panel ready</b><span>3 of 3 briefs opened</span><i>READY</i></div><div className="kit-score"><small>EVIDENCE SCORE</small>{[1,2,3,4,5].map(n=><i className={n===4?"on":""} key={n}>{n}</i>)}</div><div className="kit-sealed"><b>◉ Sealed note</b><span>Visible after all panelists submit</span></div></div>;
  case "mahli": return <div className="kit kit-mahli"><div className="kit-item"><i>M</i><span>STRAWBERRY CREAM</span><b>₦5,500</b></div><div className="kit-pills"><small>YOUR MILK</small><button>Oat</button><button>Whole</button><button>Almond +₦500</button></div><div className="kit-bag"><span>2 GOOD THINGS</span><b>Bag · ₦11,800</b></div></div>;
  case "sitecheck": return <div className="kit kit-site"><div className="kit-condition"><span>03</span><b>PLUMBING<small>Kitchen / below sink</small></b><em>ISSUE</em></div><div className="kit-evidence"><small>EVIDENCE / SC–042</small><i>01</i><i>02</i><button>＋</button></div><div className="kit-stamp"><b>VERIFIED</b><span>31 / 08 / 26</span></div></div>;
  case "nara": return <div className="kit kit-nara"><div className="kit-number"><small>COMPLETE POSITION</small><b>₦3.64m</b><span>↑ 8.4% this month</span></div><div className="kit-transfer"><i>↔</i><b>Own-account transfer<small>Removed from spending</small></b><em>CHECKED</em></div><div className="kit-goal"><small>MONTHLY PLAN</small><span><i/></span><b>₦300k</b></div></div>;
  case "roam": return <div className="kit kit-roam"><div className="kit-place"><small>SAVED IDEA / FOOD</small><b>Uobei Shibuya</b><span>¥¥ · 4 interested</span></div><div className="kit-vote"><span>DECISION 03</span><b>4 / 6 voted</b><em>CLOSES 20:00</em></div><div className="kit-day"><strong>13</strong><b>Slow morning in Ginza<small>Voting open · no booking</small></b><i>→</i></div></div>;
  case "gona": return <div className="kit kit-gona"><div className="kit-field"><span>F08</span><b>VISIT DUE<small>Maize · week 11</small></b><em>TODAY</em></div><div className="kit-offline"><i>●</i><b>Saved on this device<small>3 records waiting to sync</small></b></div><div className="kit-lot"><small>LOT GM–06–2408</small><b>186 BAGS</b><span>GRADE A / READY</span></div></div>;
  case "nadi":return <div className="kit kit-nadi"><div className="kit-pass"><small>SCHOOL PASS</small><b>Current · 12 days left</b><span>2 approved information groups</span></div><div className="kit-person"><i>ZA</i><b>Zainab Abdullahi<small>Care passport current</small></b><em>FAMILY</em></div><div className="kit-access"><span>VISIBLE</span><b>Care contacts</b><i>✓</i></div></div>;
  default:return <div className="kit kit-told"><div className="kit-record"><i>●</i><b>18:42<small>Recording / Hausa</small></b><span>PAUSE</span></div><div className="kit-wave">{[18,35,52,28,61,44,70,32,48,22,58].map((n,i)=><i style={{height:`${n}%`}} key={i}/>)}</div><div className="kit-consent"><span>FAMILY ONLY</span><b>Aunty Rabi approved this story</b><i>✓</i></div></div>;
 }
}

export function VisualSystem({project}:{project:Project}){
 const copy=systemCopy[project.slug];
 return <section className={`visual-system shell system-${project.theme}`}><p className="section-label">04 / VISUAL SYSTEM</p><div className="system-heading"><h2>{copy.title}</h2><p>{copy.note}</p></div><div className="system-layout"><div className="system-basics"><div className="palette"><small>COLOUR</small><div>{project.colors.map(color=><article key={color.hex} style={{background:color.hex}}><span>{color.hex}</span><b>{color.name}</b></article>)}</div></div><div className="project-type"><small>TYPE</small>{project.typefaces.map((face,i)=><article key={face.name} className={i===1?"expressive":""}><span>{face.sample}</span><div><b>{face.name}</b><small>{face.use}</small></div></article>)}</div></div><div className="component-library"><small>PROJECT-SPECIFIC COMPONENTS</small><ProjectComponents project={project}/></div></div></section>;
}

const wireLabels:Record<string,string[]>={hirewise:["Interview brief","Live room + evidence","Panel decision"],mahli:["Mood-led menu","One-page customise","Delivery handoff"],sitecheck:["Area register","Field capture","Condition report"],nara:["Full position","Reconciled cash flow","Goal scenario"],roam:["Idea board","Timed vote","Map itinerary"],gona:["Season map","Offline visit","Buyer lot"],nadi:["Family passport","Limited school pass","Clinical handoff"],told:["Guided recording","Archive index","Story reader"]};

function WireCanvas({slug,index}:{slug:string;index:number}){
 if(slug==="hirewise"){
  if(index===0)return <div className="wf wf-h-brief"><aside><i/><i/><i/><i/></aside><main><b/><span/><div><i/><i/></div><footer/></main></div>;
  if(index===1)return <div className="wf wf-h-live"><main><i/><i/><i/></main><aside><b/><span/><span/><div/><footer/></aside></div>;
  return <div className="wf wf-h-decision"><header/><div className="matrix"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><footer><span/><b/></footer></div>;
 }
 if(slug==="mahli"){
  if(index===0)return <div className="wf wf-m-menu"><header/><main><div className="hero"/><div className="tiles"><i/><i/><i/></div></main><footer/></div>;
  if(index===1)return <div className="wf wf-m-custom"><div className="product"/><aside><b/><i/><div><span/><span/><span/></div><footer/></aside></div>;
  return <div className="wf wf-m-delivery"><header/><div className="route"><i/><i/><i/><i/></div><aside><span/><span/><span/><b/></aside></div>;
 }
 if(slug==="sitecheck"){
  if(index===0)return <div className="wf wf-s-register"><aside/><main><header/><div className="table">{[1,2,3,4,5].map(n=><i key={n}/>)}</div></main></div>;
  if(index===1)return <div className="wf wf-s-capture"><header/><main><div className="camera"/><div className="checks"><i/><i/><i/><i/></div></main><footer/></div>;
  return <div className="wf wf-s-report"><aside><i/><b/></aside><main><header/><h4/><div className="stats"><i/><i/><i/></div><section/><footer/></main></div>;
 }
 if(slug==="nara"){
  if(index===0)return <div className="wf wf-n-position"><header/><b/><span/><div className="bars">{[1,2,3,4,5,6].map(n=><i key={n}/>)}</div><footer><i/><i/></footer></div>;
  if(index===1)return <div className="wf wf-n-flow"><aside><b/><span/><i/></aside><main><header/><div className="waterfall"><i/><i/><i/><i/><i/></div><footer/></main></div>;
  return <div className="wf wf-n-goal"><main><b/><i/><span/></main><aside><header/><div className="slider"/><strong/><footer/></aside></div>;
 }
 if(slug==="roam"){
  if(index===0)return <div className="wf wf-r-ideas"><main><div className="photo"/><b/><span/></main><aside><i/><i/></aside></div>;
  if(index===1)return <div className="wf wf-r-vote"><aside><b/><span/></aside><main><i/><i/><footer/></main></div>;
  return <div className="wf wf-r-map"><aside><header/>{[1,2,3].map(n=><i key={n}/>)}</aside><main><span/><span/><span/><b/></main></div>;
 }
 if(slug==="gona"){
  if(index===0)return <div className="wf wf-g-map"><aside><b/><span/></aside><main>{[1,2,3,4,5].map(n=><i key={n}/>)}</main><footer/></div>;
  if(index===1)return <div className="wf wf-g-field"><aside><b/><span/></aside><main><header/><div className="capture"/><div className="records"><i/><i/><i/></div><footer/></main></div>;
  return <div className="wf wf-g-lot"><header/><main><aside><b/><span/></aside><section><div className="checks"><i/><i/><i/></div><div className="farms"><i/><i/><i/><i/></div><footer/></section></main></div>;
 }
 if(slug==="nadi"){
  if(index===0)return <div className="wf wf-d-passport"><main><b/><div/><footer/></main><aside><i/><i/><i/></aside></div>;
  if(index===1)return <div className="wf wf-d-school"><aside><i/><i/><i/><i/></aside><main><header/>{[1,2,3,4].map(n=><span key={n}/>)}</main></div>;
  return <div className="wf wf-d-clinic"><aside><div/><nav><i/><i/><i/></nav></aside><main><header/><section><i/><i/><b/></section><footer/></main></div>;
 }
 if(index===0)return <div className="wf wf-t-record"><header/><main><b/><div className="wave">{[1,2,3,4,5,6,7,8,9].map(n=><i key={n}/>)}</div><span/></main><aside><i/><i/><footer/></aside></div>;
 if(index===1)return <div className="wf wf-t-archive"><header/><main><i className="lead"/><i/><i/><i/><i/><i/></main><aside/></div>;
 return <div className="wf wf-t-reader"><aside><i/><b/><span/></aside><main><header/><article/><div className="audio"/><footer/></main></div>;
}

export function Wireframes({project}:{project:Project}){
 const labels=wireLabels[project.slug];
 return <section className={`wireframe-section wire-${project.theme}`}><div className="shell"><div className="section-heading"><p>Structure before styling</p><span>Early layout studies</span></div><div className="wire-intro"><h2>Three moments I needed to understand before adding colour.</h2><p>Each study focuses on the information, controls and decisions needed at that point in the flow.</p></div><div className="wire-grid">{labels.map((label,i)=><article className={`wire-card w${i+1}`} key={label}><header><span>0{i+1}</span><b>{label}</b></header><WireCanvas slug={project.slug} index={i}/></article>)}</div></div></section>;
}

function ContextArt({project}:{project:Project}){
 if(project.slug==="told")return <div className="context-told"><div className="told-cassette"><small>STORY 031 / HOME</small><b>The blue house<br/>in Kano</b><span>Aunty Rabi · 18:42</span><div>{[22,45,31,58,37,69,29,54,35,62,26,48].map((h,i)=><i key={i} style={{height:h}}/>)}</div></div><div className="told-permission"><span>WHO CAN CARRY THIS STORY?</span><b>Family circle</b><small>12 people can listen<br/>2 people can download</small><em>APPROVED BY SPEAKER ✓</em></div></div>;
 if(project.slug==="gona")return <div className="context-gona"><div className="rugged"><small>OFFLINE / FIELD 08</small><b>Visit saved</b><span>2 notes · 1 photo</span><i>SYNC LATER</i></div><div className="desk-sheet"><span>LOT GM–06–2408</span><b>186 bags</b><small>12 farms · Grade A</small></div></div>;
 if(project.slug==="nadi")return <div className="context-nadi"><div className="wallet-pass"><small>NADI CARE PASS</small><b>Zainab A.</b><span>School access · current</span><i>PASS 02</i></div><div className="clinic-strip"><b>Since last review</b><span>2 events</span><span>1 question</span><em>Ready for handoff</em></div></div>;
 if(project.slug==="mahli")return <div className="context-mahli"><div className="mahli-phone"><small>YOUR USUAL?</small><b>Strawberry<br/>cream matcha</b><span>Oat · 50% · ₦5,500</span><i>ORDER AGAIN</i></div><div className="mahli-ticket"><b>MAHLI ●</b><span>MH–184</span><small>2 good things<br/>Wuse 2 · 25–35 min</small></div></div>;
 if(project.slug==="sitecheck")return <div className="context-site"><div className="field-device"><span>SC–042 / KITCHEN</span><b>PLUMBING</b><em>ISSUE</em><small>2 photos saved</small></div><div className="report-sheet"><small>PROPERTY CONDITION REPORT</small><b>GOOD</b><span>4 issues / 2 actions</span></div></div>;
 if(project.slug==="nara")return <div className="context-nara"><div className="nara-widget"><small>YOUR POSITION</small><b>₦3.64m</b><span>4 accounts · read only</span></div><div className="nara-phone"><i>✦</i><b>You kept more<br/>this month.</b><span>See the working →</span></div></div>;
 if(project.slug==="roam")return <div className="context-roam"><div className="trip-pass"><small>OUR TOKYO</small><b>12—21<br/>OCTOBER</b><span>4 friends · 9 nights</span></div><div className="day-card"><strong>13</strong><b>GINZA<small>4 places · voting open</small></b><i>→</i></div></div>;
 return <div className="context-hire"><div className="candidate-phone"><small>TODAY / 10:30</small><b>Meet your<br/>interview day.</b><span>45 min · 3 panelists</span><i>READY</i></div><div className="panel-dock"><b>Panel kit</b><span>Brief opened</span><span>Questions assigned</span><em>3 / 3 READY</em></div></div>;
}

export function DeviceContext({project}:{project:Project}){
 return <section className={`device-context context-${project.theme}`}><div className="shell"><div className="context-copy"><p className="section-label">05 / IN CONTEXT</p><h2>The interface had to hold up outside a presentation frame.</h2><p>This view shows a separate moment from the main screen story, adapted to the device or handoff where it would actually be used.</p></div><div className="context-stage"><ContextArt project={project}/></div></div></section>;
}
