const fieldRows=[
 ["F08","Check crop stand","Aisha","TODAY"],
 ["F17","Confirm tractor slot","Bello","29 AUG"],
 ["LOT 06","Complete grade record","Maryam","30 AUG"]
];

export function GonaDistinct({kind}:{kind:string}){
 if(kind==="gona-field")return <div className="ui-canvas gx gx-field">
  <header><b>GONA</b><span>FIELD 08 / VISIT 04</span><i>NO SIGNAL · 12:42</i></header>
  <main>
   <div className="gx-field-title"><small>MAIZE / WEEK 11</small><h2>Record what is here.</h2><p>Everything saves on this device until the signal returns.</p></div>
   <div className="gx-field-photo"><span>＋ ADD FIELD PHOTO</span><b>08</b></div>
   <div className="gx-field-actions">{[["01","Crop stand","EVEN"],["02","Weed pressure","MODERATE"],["03","Water stress","NOT SEEN"]].map(x=><button key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><em>{x[2]}</em></button>)}</div>
   <footer><span>● 2 NOTES · 1 PHOTO SAVED LOCALLY</span><button>FINISH VISIT →</button></footer>
  </main>
 </div>;
 if(kind==="gona-lot")return <div className="ui-canvas gx gx-lot">
  <header><b>GONA / HARVEST LOT</b><span>GM–06–2408</span><button>SHARE WITH BUYER ↗</button></header>
  <main>
   <section className="gx-lot-title"><div><small>BUYER-READY OFFER</small><h2>Yellow maize <em>Grade A</em></h2></div><div className="gx-bag-total"><b>186</b><span>BAGS<br/>9,300 KG</span></div></section>
   <section className="gx-quality"><article><small>MOISTURE</small><b>13.2%</b><span>Recorded 08:20</span></article><article><small>CONTRIBUTING FARMS</small><b>12</b><span>All records complete</span></article><article><small>COLLECTION</small><b>31 AUG</b><span>06:00—11:00</span></article></section>
   <section className="gx-composition"><header><small>LOT COMPOSITION</small><span>186 BAGS / 12 FARMS</span></header><div>{[["F08","18 bags"],["F12","24 bags"],["F17","16 bags"],["+9","128 bags"]].map(x=><article key={x[0]}><b>{x[0]}</b><span>{x[1]}</span></article>)}</div></section>
   <footer><span>QUALITY RECORD · AISHA MOHAMMED</span><b>READY</b></footer>
  </main>
 </div>;
 if(kind==="gona-dispatch")return <div className="ui-canvas gx gx-dispatch">
  <header><b>GONA</b><span>DISPATCH / THURSDAY 31 AUGUST</span><button>PRINT YARD LIST</button></header>
  <main>
   <section className="gx-load-head"><div><small>LOAD 02 / GM–06–2408</small><h2>Buyer truck is on site.</h2></div><div className="gx-truck"><span>KN 43 A08</span><b>118 <i>/ 186</i></b><small>BAGS LOADED</small></div></section>
   <div className="gx-load-progress"><i/><span>63% COMPLETE</span></div>
   <section className="gx-load-grid">{[["01","Field 08","18 BAGS","DONE"],["02","Field 12","24 BAGS","DONE"],["03","Field 17","16 BAGS","LOADING"],["04","North cluster","42 BAGS","WAITING"]].map((x,i)=><article key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><strong>{x[2]}</strong><em className={`s${i}`}>{x[3]}</em></article>)}</section>
   <footer><span>LAST COUNT SAVED 10:18 · OFFLINE</span><button>RECORD COLLECTION PROOF →</button></footer>
  </main>
 </div>;
 return <div className="ui-canvas gx gx-desk">
  <header><b>GONA<small>WET SEASON / MAIZE</small></b><nav>FIELDS&nbsp;&nbsp; WORK&nbsp;&nbsp; EQUIPMENT&nbsp;&nbsp; LOTS</nav><i>MS</i></header>
  <main>
   <section className="gx-desk-top"><div><small>COOPERATIVE PICTURE</small><h2>41 fields. <em>6 need action.</em></h2></div><div className="gx-desk-stats"><span><b>03</b> VISITS DUE</span><span><b>02</b> MACHINE SLOTS</span><span><b>06</b> HARVEST LOTS</span></div></section>
   <section className="gx-atlas"><div className="gx-map"><i className="m1">08<small>VISIT</small></i><i className="m2">12<small>READY</small></i><i className="m3">17<small>WATCH</small></i><i className="m4">22<small>READY</small></i><footer>● VISIT DUE&nbsp;&nbsp; ● READY&nbsp;&nbsp; ● WATCH</footer></div><div className="gx-queue"><header><b>NEXT 72 HOURS</b><span>OWNER / DUE</span></header>{fieldRows.map(x=><article key={x[0]}><small>{x[0]}</small><b>{x[1]}</b><span>{x[2]}</span><em>{x[3]}</em></article>)}</div></section>
   <section className="gx-equipment"><b>SHARED EQUIPMENT / WEEK 35</b><span>TRACTOR 01</span><i>F12</i><i>F17</i><span>SHELLER</span><i>LOT 04</i><i>LOT 06</i></section>
  </main>
 </div>;
}

export function NadiDistinct({kind}:{kind:string}){
 if(kind==="nadi-school")return <div className="ui-canvas nx nx-school">
  <header><b>nadi</b><span>ZAINAB’S SCHOOL PASS</span><button>Save and close</button></header>
  <main>
   <nav><i className="done">01 School</i><i className="on">02 Information</i><i>03 Expiry</i><i>04 Review</i></nav>
   <section className="nx-school-title"><small>CHOOSE WHAT THE SCHOOL CAN SEE</small><h2>A useful window. <em>Not the whole record.</em></h2></section>
   <section className="nx-permission-grid">{[["Care contacts","Parent and clinic numbers",true],["Everyday guidance","Approved school care note",true],["Visit timeline","Dates and clinical notes",false],["Uploaded documents","Letters and lab documents",false]].map(x=><article key={String(x[0])}><i className={x[2]?"on":""}>{x[2]?"✓":""}</i><b>{x[0]}<small>{x[1]}</small></b><span>{x[2]?"SHARED":"PRIVATE"}</span></article>)}</section>
   <footer><span>PASS EXPIRES · 10 SEPTEMBER 2026</span><button>Review school pass →</button></footer>
  </main>
 </div>;
 if(kind==="nadi-visit")return <div className="ui-canvas nx nx-visit">
  <header><b>nadi</b><span>VISIT PREPARATION / 03 SEPTEMBER</span><button>Save for later</button></header>
  <main>
   <section className="nx-visit-intro"><div><small>BEFORE THE APPOINTMENT</small><h2>Bring the week into the room.</h2><p>A short record for the care team—not a diagnosis.</p></div><div className="nx-week">{["M","T","W","T","F","S","S"].map((x,i)=><i className={i===2||i===5?"marked":""} key={`${x}${i}`}>{x}<span>{i===2||i===5?"●":""}</span></i>)}</div></section>
   <section className="nx-event-row"><article><span>26 AUG · FAMILY NOTE</span><b>School called about tiredness after sports.</b><em>INCLUDED ✓</em></article><article><span>29 AUG · DOCUMENT</span><b>Clinic letter uploaded.</b><em>INCLUDED ✓</em></article></section>
   <section className="nx-question"><div><small>QUESTION FOR THE CARE TEAM</small><p>What should the school know before sports day next month?</p></div><button>＋ Add another question</button></section>
   <footer><span>2 EVENTS · 1 QUESTION PREPARED</span><button>Share with clinic →</button></footer>
  </main>
 </div>;
 if(kind==="nadi-clinical")return <div className="ui-canvas nx nx-clinical">
  <header><b>nadi / CLINICAL</b><span>PATIENT HANDOFF</span><i>DR</i></header>
  <main>
   <section className="nx-patient"><i>ZA</i><b>Zainab Abdullahi<small>Age 11 · Passport current</small></b><span>NEXT REVIEW · TODAY 14:30</span><button>Open full record ↗</button></section>
   <section className="nx-clinical-title"><small>SINCE LAST REVIEW / 24 AUGUST</small><h2>Two events.<br/><em>One open question.</em></h2></section>
   <section className="nx-handoff-row"><article className="coral"><span>FAMILY NOTE · 26 AUG</span><b>Tiredness reported after school sports.</b><small>No clinical label added</small></article><article><span>DOCUMENT · 29 AUG</span><b>Referral letter uploaded by family.</b><small>PDF · 2 pages</small></article><article className="question"><span>FAMILY QUESTION</span><b>What should the school know before sports day?</b></article></section>
   <footer><span>✓ PASSPORT ACCESS CONFIRMED WITH PARENT</span><button>Begin review →</button></footer>
  </main>
 </div>;
 return <div className="ui-canvas nx nx-passport">
  <header><b>nadi</b><span>ZAINAB’S PASSPORT</span><button>Access & privacy</button></header>
  <main>
   <section className="nx-welcome"><div><small>GOOD AFTERNOON</small><h2>Everything current,<br/><em>in one calm place.</em></h2></div><article><span>NEXT CARE REVIEW</span><b>03 September · 2:30 PM</b><small>Paediatric Haematology Unit</small><button>Prepare for visit →</button></article></section>
   <section className="nx-pass-card"><header><small>CARE PASSPORT</small><span>● CURRENT</span></header><div><h3>Zainab Abdullahi</h3><p>Last reviewed with Dr. Ibrahim · 24 August 2026</p></div><footer><article><small>CARE TEAM</small><b>3 contacts</b></article><article><small>ACTIVE PASSES</small><b>1 school</b></article><button>Open passport →</button></footer></section>
   <section className="nx-recent"><small>RECENT</small><p><i>29</i><b>Clinic letter added<span>By you · 10:14</span></b></p><p><i>26</i><b>School note recorded<span>Visible to care team</span></b></p></section>
  </main>
 </div>;
}

export function ToldDistinct({kind}:{kind:string}){
 if(kind==="told-record")return <div className="ui-canvas tx tx-record">
  <header><b>TOLD / RECORDING ROOM</b><span>AUNTY RABI · HAUSA</span><i>FAMILY ONLY</i></header>
  <main><section className="tx-prompt"><small>CURRENT PROMPT</small><h2>What did home feel like when you were ten?</h2><button>Next prompt →</button></section><section className="tx-session"><span>● RECORDING</span><b>18:42</b><small>Tap the flag when a moment needs context.</small></section><div className="tx-wave">{[24,51,34,72,43,65,29,81,55,38,69,45,77,31,59,88,42,68].map((n,i)=><i style={{height:`${n}%`}} key={i}/>)}</div><footer><button>⚑ Mark moment</button><button className="pause">Ⅱ</button><button>Finish recording</button></footer></main>
 </div>;
 if(kind==="told-archive")return <div className="ui-canvas tx tx-archive">
  <header><b>TOLD</b><nav>PEOPLE&nbsp;&nbsp; CHAPTERS&nbsp;&nbsp; PLACES</nav><button>＋ Record a story</button></header>
  <main><section className="tx-archive-title"><small>THE MUHAMMAD FAMILY ARCHIVE</small><h2>67 stories, still speaking.</h2><div><span>All</span><span>Childhood</span><span>Home</span><span>Firsts</span></div></section><section className="tx-story-grid"><article className="lead"><i>AR</i><small>AUNTY RABI · 18 MIN</small><h3>The blue house in Kano</h3><p>“We knew everybody on the street…”</p><b>LISTEN →</b></article><article><i>YU</i><small>YA USMAN · 09 MIN</small><h3>The first journey south</h3></article><article><i>HA</i><small>HAJARA · 22 MIN</small><h3>Three wedding songs</h3></article></section></main>
 </div>;
 if(kind==="told-reader")return <div className="ui-canvas tx tx-reader">
  <header><b>TOLD</b><span>STORY 031 / FAMILY ONLY</span><button>•••</button></header>
  <main><section className="tx-reader-meta"><i>AR</i><div><small>TOLD BY</small><b>Aunty Rabi</b><span>Recorded in Abuja · 27 August 2026</span></div><em>CHAPTER / HOME</em></section><h2>The blue house<br/>in Kano</h2><article><p>We knew everybody on the street. Not just their names—what time they opened the gate, who made the best kunu, who would send you home if the sun had gone down.</p><p>There was a blue house opposite ours. I cannot remember the number now, but I remember the sound of the metal door.</p></article><div className="tx-player"><button>▶</button><span><i/></span><b>06:18 / 18:42</b></div><footer><span>TRANSCRIPT REVIEWED BY SPEAKER</span><em>ACCESS · 12 FAMILY MEMBERS</em></footer></main>
 </div>;
 return <div className="ui-canvas tx tx-setup">
  <header><b>TOLD</b><span>CONVERSATION WITH AUNTY RABI</span><button>Save and leave</button></header>
  <main><nav><i className="done">01 PERSON</i><i className="on">02 PROMPTS</i><i>03 ACCESS</i><i>04 READY</i></nav><section className="tx-setup-title"><small>THREE PROMPTS ARE ENOUGH</small><h2>Give the conversation somewhere to begin.</h2></section><section className="tx-prompts">{[["01","What did home feel like when you were ten?"],["02","Who made you laugh the most growing up?"],["03","What do you wish we had asked your mother?"]].map(x=><article key={x[0]}><span>{x[0]}</span><p>{x[1]}</p><button>×</button></article>)}</section><footer><button>＋ Add a prompt</button><button>Continue to access →</button></footer></main>
 </div>;
}
