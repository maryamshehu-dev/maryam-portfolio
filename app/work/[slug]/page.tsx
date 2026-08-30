import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {getProject,projects} from "../../project-data";
import {ProductMock} from "../../ui-mockups";
import {DeviceContext,VisualSystem,Wireframes} from "../../case-extras";
import {MorrowLanding,ToldDeepDive,ToldLandingBreakdown} from "../../special-projects";
import {isFullLandingKind,ProjectLanding} from "../../full-landings";

export function generateStaticParams(){return projects.map(({slug})=>({slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params; const project=getProject(slug);
 return project?{title:`${project.name} — Case Study | Maryam Shehu Muhammad`,description:project.summary}:{};
}

export default async function CaseStudy({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const project=getProject(slug); if(!project)notFound();
 if(project.slug==="morrow") return <MorrowLanding/>;
 const index=projects.findIndex(p=>p.slug===slug); const next=projects[(index+1)%projects.length];
 return <main className={`case-page ${project.theme}`}>
  <header className="case-nav shell"><Link className="wordmark" href="/">MS<span>.</span></Link><Link href="/#work">← All projects</Link><span>{project.number} / 09</span></header>
  <section className="case-hero shell"><div className="case-kicker"><span>{project.category}</span><span>{project.year}</span></div><h1>{project.name}</h1><p>{project.tagline}</p><div className="case-hero-meta"><div><small>ROLE</small><b>{project.role}</b></div><div><small>TIMELINE</small><b>{project.timeline}</b></div><div><small>PLATFORM</small><b>{project.platform}</b></div><div><small>PROJECT STATUS</small><b>{project.status}</b></div></div><div className="case-hero-art"><ProductMock project={project}/><span className="art-note">Product concept by Maryam Shehu Muhammad</span></div></section>
  <section className="case-statement shell"><p className="section-label">01 / THE PROBLEM</p><h2>{project.problemTitle}</h2><div className="statement-grid"><p>{project.problem}</p><p>{project.context}</p></div><div className="audience-line"><small>DESIGNED FOR</small>{project.audience.map(x=><span key={x}>{x}</span>)}</div></section>
  {project.slug==="told"&&<ToldDeepDive/>}
  <section className="pain-section"><div className="shell"><div className="section-heading light"><p>What kept going wrong</p><span>One workflow · three failure points</span></div><div className="pain-grid">{project.painPoints.map((point,i)=><article key={point.title}><span>0{i+1} / {point.label}</span><h3>{point.title}</h3><p>{point.body}</p></article>)}</div><blockquote>“{project.principle}”<small>THE RULE I DESIGNED AROUND</small></blockquote></div></section>
  <section className="solution shell"><p className="section-label">02 / PRODUCT STRATEGY</p><div className="solution-intro"><h2>{project.solutionTitle}</h2><p>{project.solution}</p></div><div className="flow"><small>CORE EXPERIENCE</small><div>{project.flow.map((step,i)=><span key={step}><b>{String(i+1).padStart(2,"0")}</b>{step}{i<project.flow.length-1&&<i>→</i>}</span>)}</div></div></section>
  <Wireframes project={project}/>
  <section className="screen-story"><div className="shell"><div className="section-heading"><p>The product</p><span>{project.screens.length} connected moments</span></div>{project.screens.map((screen,i)=>{const landing=isFullLandingKind(screen.kind);return <article className={`screen-row screen-${i+1}${landing?" landing-row":""}`} key={screen.kind}><div className="screen-copy"><span>{screen.eyebrow}</span><h3>{screen.title}</h3><p>{screen.body}</p></div><div className={`screen-art${landing?" landing-art":""}`}>{landing?<ProjectLanding slug={project.slug}/>:<ProductMock project={project} kind={screen.kind}/>}</div></article>})}</div></section>
  {project.slug==="told"&&<ToldLandingBreakdown/>}
  <VisualSystem project={project}/>
  <DeviceContext project={project}/>
  <section className="decision-section"><div className="shell"><p className="section-label">06 / KEY DECISIONS</p><div className="decision-grid">{project.decisions.map(d=><article key={d.number}><span>{d.number}</span><h3>{d.title}</h3><p>{d.body}</p></article>)}</div></div></section>
  <section className="outcome shell"><div><p className="section-label">07 / DESIGNED OUTCOME</p><h2>{project.outcomeTitle}</h2></div><div><ul>{project.outcomes.map(x=><li key={x}>{x}</li>)}</ul><aside><small>WHAT I WOULD TEST NEXT</small><p>{project.reflection}</p></aside></div></section>
  <section className="honesty shell"><span>ABOUT THIS WORK</span><p>I designed this as an independent concept project. The workflow problem is real, but the product has not been launched, so I have not included made-up user numbers or performance results.</p></section>
  <Link className={`next-project ${next.theme}`} href={`/work/${next.slug}`}><div className="shell"><small>NEXT PROJECT · {next.number}</small><h2>{next.name}</h2><p>{next.tagline}</p><span>Explore case study ↗</span></div></Link>
 </main>
}
