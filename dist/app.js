'use strict';
const $=id=>document.getElementById(id);
function stats(text){const trimmed=text.trim();const words=trimmed?trimmed.split(/\s+/u).length:0;return {words,characters:Array.from(text).length,sentences:trimmed?(trimmed.match(/[^.!?]+(?:[.!?]+|$)/gu)||[]).filter(s=>s.trim()).length:0,paragraphs:trimmed?trimmed.split(/\n\s*\n/u).filter(s=>s.trim()).length:0,reading:words?Math.ceil(words/200):0};}
function updateHero(){const s=stats($('hero-text').value);$('hero-words').textContent=s.words;$('hero-chars').textContent=s.characters;$('hero-read').textContent=s.reading;}
if($('hero-text')){$('hero-text').addEventListener('input',updateHero);updateHero();}
let filter='All tools';
function filterTools(){const q=$('tool-search').value.trim().toLowerCase();let count=0;document.querySelectorAll('.directory .tool-card').forEach(c=>{const show=(filter==='All tools'||c.dataset.category===filter)&&c.dataset.search.includes(q);c.hidden=!show;if(show)count++;});$('empty-search').hidden=count>0;$('search-status').textContent=`${count} tools found`;}
if($('tool-search')){$('tool-search').addEventListener('input',filterTools);document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});filterTools();}));document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){e.preventDefault();$('tool-search').focus();}});}
const page=document.querySelector('[data-tool]');
let toastTimer;function toast(message){$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),2500);}
function textResult(text){$('result').textContent=text;}
function numeric(id,min=-Infinity,max=Infinity,integer=false){const el=$(id);if(!el.value.trim())throw Error('Please fill in '+(document.querySelector(`label[for="${id}"]`)?.textContent||id)+'.');const n=Number(el.value);if(!Number.isFinite(n)||n<min||n>max||(integer&&!Number.isSafeInteger(n)))throw Error(`Enter ${integer?'a whole number':'a number'} between ${Number.isFinite(min)?min:'−∞'} and ${Number.isFinite(max)?max:'∞'} for ${id}.`);return n;}
function result(value,explanation){if(!Number.isFinite(value))throw Error('This result is outside the supported numeric range.');$('result').replaceChildren();const s=document.createElement('strong');s.textContent=value.toLocaleString('en-US',{maximumFractionDigits:6});const p=document.createElement('small');p.textContent=explanation;$('result').append(s,p);}
let image=null,imageUrl=null,outputUrl=null,imageRevision=0;
function addRow(a='',b=''){const row=document.createElement('div');row.className='grade-row';const gpa=page.dataset.tool==='gpa-calculator';for(const [idx,value]of[a,b].entries()){const i=document.createElement('input');i.type='number';i.min='0';i.step='any';i.value=value;i.setAttribute('aria-label',gpa?(idx?'Grade points':'Credit hours'):(idx?'Weight percent':'Score percent'));row.append(i);}const remove=document.createElement('button');remove.type='button';remove.textContent='×';remove.setAttribute('aria-label','Remove row');remove.addEventListener('click',()=>row.remove());row.append(remove);$('grade-rows').append(row);}
function randomIndex(n){const arr=new Uint32Array(1),limit=Math.floor(4294967296/n)*n;do{crypto.getRandomValues(arr);}while(arr[0]>=limit);return arr[0]%n;}
function password(length,groups){let chars=groups.map(g=>g[randomIndex(g.length)]);const alphabet=groups.join('');while(chars.length<length)chars.push(alphabet[randomIndex(alphabet.length)]);for(let i=chars.length-1;i>0;i--){const j=randomIndex(i+1);[chars[i],chars[j]]=[chars[j],chars[i]];}return chars.join('');}
function formatJSON(source,minify=false){
 if(new TextEncoder().encode(source).length>2*1024*1024)throw Error('JSON input must be 2 MB or smaller.');
 JSON.parse(source); // Validation only. Never serialize this rounded representation.
 const tokens=source.match(/"(?:\\.|[^"\\])*"|true|false|null|-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?|[{}\[\],:]/g)||[];
 if(minify)return tokens.join('');
 let depth=0,out='',length=0;
 const append=text=>{length+=text.length;if(length>8*1024*1024)throw Error('Formatted output would exceed 8 MB. Try Minify instead.');out+=text;};
 const newline=()=>append('\n'+'  '.repeat(depth));
 for(let i=0;i<tokens.length;i++){
  const token=tokens[i],prev=tokens[i-1],next=tokens[i+1];
  if(token==='{'||token==='['){append(token);depth++;if(depth>100)throw Error('Formatting supports up to 100 nesting levels. Try Minify for deeper data.');if(next!=='}'&&next!==']')newline();}
  else if(token==='}'||token===']'){depth--;if(prev!=='{'&&prev!=='[')newline();append(token);}
  else if(token===','){append(',');newline();}
  else if(token===':')append(': ');
  else append(token);
 }
 return out;
}
if(page){const tool=page.dataset.tool;
if(tool==='word-counter'){const update=()=>{const s=stats($('input').value);$('text-stats').replaceChildren();for(const [name,value]of Object.entries({Words:s.words,Characters:s.characters,Sentences:s.sentences,Paragraphs:s.paragraphs,'Minutes to read':s.reading})){const d=document.createElement('div');d.className='stat';const strong=document.createElement('strong');strong.textContent=value;const label=document.createElement('span');label.textContent=name;d.append(strong,label);$('text-stats').append(d);}};$('input').addEventListener('input',update);update();}
document.querySelectorAll('textarea#output').forEach(el=>el.readOnly=true);
document.querySelectorAll('[data-target-kb]').forEach(el=>el.addEventListener('click',()=>{$('target-kb').value=el.dataset.targetKb;$('target-kb').focus();}));
if($('grade-rows')){if(tool==='gpa-calculator'){addRow(3,4);addRow(2,3);}else{addRow(80,40);addRow(90,60);}}
if($('image-file')){$('image-file').addEventListener('change',async()=>{const revision=++imageRevision;try{image=null;$('error').textContent='';$('image-preview').hidden=true;$('download-image').hidden=true;const f=$('image-file').files[0];if(!f)return;if(!['image/jpeg','image/png','image/webp'].includes(f.type))throw Error('Choose a JPEG, PNG or WebP file.');if(f.size>20*1024*1024)throw Error('Choose a file smaller than 20 MB.');if(imageUrl)URL.revokeObjectURL(imageUrl);imageUrl=URL.createObjectURL(f);const img=new Image();img.src=imageUrl;await img.decode();if(revision!==imageRevision)return;if(img.width*img.height>25000000)throw Error('Choose an image with no more than 25 million pixels.');image=img;$('image-preview').src=imageUrl;$('image-preview').hidden=false;$('file-info').textContent=`${f.name} · ${img.width} × ${img.height} · ${(f.size/1024).toFixed(1)} KB`;if($('width')){$('width').value=img.width;$('height').value=img.height;}textResult('Image loaded. Choose your settings and process the image.');}catch(e){$('error').textContent=e.message;}});if($('width'))for(const id of ['width','height'])$(id).addEventListener('input',()=>{if(!image||!$('lock-ratio').checked)return;const value=Number($(id).value);if(value>0)$(id==='width'?'height':'width').value=Math.max(1,Math.round(id==='width'?value*image.height/image.width:value*image.width/image.height));});}
document.querySelectorAll('[data-action]').forEach(b=>b.addEventListener('click',async()=>{const action=b.dataset.action;$('error').textContent='';try{
if(action==='copy'){const val=$('output').value;if(!val)throw Error('There is no result to copy yet.');await navigator.clipboard.writeText(val);toast('Copied to clipboard');}
else if(action==='clear'){if($('input'))$('input').value='';$('output').value='';if($('result'))textResult('Your result will appear here.');}
else if(['upper','lower','title','sentence'].includes(action)){const s=$('input').value;$('output').value=action==='upper'?s.toLocaleUpperCase():action==='lower'?s.toLocaleLowerCase():action==='title'?s.toLocaleLowerCase().replace(/(^|\s)(\p{L})/gu,(m,space,c)=>space+c.toLocaleUpperCase()):s.toLocaleLowerCase().replace(/(^\s*|[.!?]\s+)(\p{L})/gu,(m,p,c)=>p+c.toLocaleUpperCase());}
else if(action==='dedupe'){let lines=$('input').value.split(/\r?\n/u).map(s=>s.trim());const original=lines.length;if($('remove-blank').checked)lines=lines.filter(Boolean);lines=[...new Set(lines)];if($('sort-lines').checked)lines.sort((a,b)=>a.localeCompare(b));$('output').value=lines.join('\n');textResult(`${original} input lines → ${lines.length} output lines.`);}
else if(action==='format'||action==='minify'){try{$('output').value=formatJSON($('input').value,action==='minify');textResult('Valid JSON. Number tokens, string escapes, key order and duplicate keys preserved.');}catch(e){$('output').value='';textResult('No output. Review the message below.');throw Error(e.message);}}
else if(action==='download-json'){const value=$('output').value;if(!value)throw Error('Format or minify valid JSON first.');const blob=new Blob([value],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='toolnest-formatted.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
else if(action==='encode'||action==='decode'){try{$('output').value=action==='encode'?encodeURIComponent($('input').value):decodeURIComponent($('input').value);textResult(action==='encode'?'URL component encoded.':'URL component decoded.');}catch(e){$('output').value='';throw Error('Invalid percent-encoded text or unsupported Unicode sequence.');}}
else if(action==='password'){const length=numeric('length',8,128,true);const all={uppercase:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',lowercase:'abcdefghijklmnopqrstuvwxyz',numbers:'0123456789',symbols:'!@#$%^&*()-_=+[]{};:,.?'};const groups=Object.keys(all).filter(k=>$(k).checked).map(k=>all[k]);if(!groups.length)throw Error('Select at least one character group.');$('output').value=password(length,groups);textResult('Generated locally. Use a unique password for every account.');}
else if(action==='percentage'){const a=numeric('a'),bb=numeric('b'),mode=$('mode').value;if(mode==='of')result(a*bb/100,`${a}% of ${bb}`);else if(mode==='share'){if(bb===0)throw Error('The total B cannot be zero.');result(a/bb*100,'% of B represented by A');}else{if(a===0)throw Error('Percentage change is undefined when the original value A is zero.');result((bb-a)/a*100,'% change, calculated as (B − A) ÷ A × 100');}}
else if(action==='final-grade'){
const current=numeric('current-grade',0,100),target=numeric('target-grade',0,100),weight=numeric('final-weight',.01,100)/100;
const required=(target-current*(1-weight))/weight;
result(required,required>100?'% needed on the final. This target requires more than 100% under the entered weights.':required<=0?'% needed mathematically. Check minimum-exam and participation rules in your syllabus.':'% needed on the final, assuming it is the only ungraded component.');
const table=document.createElement('table'),caption=document.createElement('caption');caption.textContent='What-if exam scores';table.append(caption);
const head=document.createElement('thead'),hr=document.createElement('tr');for(const text of ['Final exam score','Overall course grade']){const th=document.createElement('th');th.scope='col';th.textContent=text;hr.append(th);}head.append(hr);table.append(head);
const body=document.createElement('tbody');for(const score of [0,50,60,70,80,90,100]){const tr=document.createElement('tr');for(const text of [score+'%',(current*(1-weight)+score*weight).toFixed(2)+'%']){const td=document.createElement('td');td.textContent=text;tr.append(td);}body.append(tr);}table.append(body);$('grade-scenarios').replaceChildren(table);
}
else if(action==='add-row'){if($('grade-rows').children.length>=50)throw Error('You can add up to 50 rows.');addRow();}
else if(action==='grades'){const gpa=tool==='gpa-calculator',scale=gpa?numeric('scale',1,10):100;let sum=0,weight=0;const rows=[...$('grade-rows').children];if(!rows.length)throw Error('Add at least one row.');for(const r of rows){const inputs=[...r.querySelectorAll('input')];if(inputs.some(i=>!i.value.trim()))throw Error('Complete each row or remove unused rows.');const [a,b]=inputs.map(i=>Number(i.value));if(!Number.isFinite(a)||!Number.isFinite(b))throw Error('Enter finite numeric values in every row.');if(gpa){if(a<=0||b<0||b>scale)throw Error(`Credits must be positive; grade points must be between 0 and ${scale}.`);sum+=a*b;weight+=a;}else{if(a<0||a>100||b<0||b>100)throw Error('Scores and weights must be between 0 and 100.');sum+=a*b;weight+=b;}}if(weight===0)throw Error('Total weight must be greater than zero.');result(sum/weight,gpa?`GPA on a ${scale}-point scale · ${weight} total credits`:`Normalized grade (%) · entered weight: ${weight}%. ${Math.abs(weight-100)<1e-8?'Full 100% weighting entered.':'Partial or nonstandard weighting; check course rules.'}`);}
else if(action==='ratio'){const w=numeric('width',1,1000000000,true),h=numeric('height',1,1000000000,true);let a=w,bb=h;while(bb)[a,bb]=[bb,a%bb];const n=$('new-width').value.trim()?numeric('new-width',1,1000000000,true):null;textResult(`${w/a}:${h/a}${n?' · At '+n+' px wide, proportional height is '+Math.round(n*h/w)+' px.':''}`);}
else if(action==='image-target'){
if(!image)throw Error('Choose an image first.');
$('download-image').hidden=true;
const maxBytes=numeric('target-kb',1,20480,true)*1024,maxQuality=numeric('quality',1,100)/100,type=$('format').value;
b.disabled=true;$('image-file').disabled=true;const oldText=b.textContent;b.textContent='Finding a smaller file…';
try{
let chosen=null;const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');
if(!ctx)throw Error('Canvas is unavailable in this browser.');
const encode=q=>new Promise(resolve=>canvas.toBlob(resolve,type,q));
const attempts=$('allow-shrink').checked?9:1;
for(let step=0;step<attempts&&!chosen;step++){
 const width=Math.max(1,Math.round(image.width*Math.pow(.8,step))),height=Math.max(1,Math.round(image.height*Math.pow(.8,step)));
 canvas.width=width;canvas.height=height;
 if(type==='image/jpeg'){ctx.fillStyle=$('background')?.value||'#fff';ctx.fillRect(0,0,width,height);}
 ctx.drawImage(image,0,0,width,height);
 let blob=await encode(maxQuality);if(!blob)throw Error('Image export failed. Try a smaller image.');
 if(blob.size<=maxBytes){chosen={blob,width,height,quality:maxQuality};break;}
 let low=Math.min(.1,maxQuality),high=maxQuality;blob=await encode(low);if(!blob)throw Error('Image export failed.');
 if(blob.size>maxBytes)continue;
 chosen={blob,width,height,quality:low};
 for(let n=0;n<8;n++){const q=(low+high)/2,candidate=await encode(q);if(candidate&&candidate.size<=maxBytes){chosen={blob:candidate,width,height,quality:q};low=q;}else high=q;}
}
canvas.width=canvas.height=0;
if(!chosen)throw Error($('allow-shrink').checked?'Could not reach this limit within the supported quality and size search. Try a larger limit or resize the original first.':'Could not meet the limit while keeping the original dimensions. If your upload rules allow it, enable smaller pixel dimensions.');
if(outputUrl)URL.revokeObjectURL(outputUrl);outputUrl=URL.createObjectURL(chosen.blob);
const ext=chosen.blob.type==='image/webp'?'webp':chosen.blob.type==='image/jpeg'?'jpg':'png';
$('download-image').href=outputUrl;$('download-image').download=`toolnest-under-${$('target-kb').value}kb.${ext}`;$('download-image').hidden=false;
textResult(`${(chosen.blob.size/1024).toFixed(2)} KB (${chosen.blob.size.toLocaleString()} bytes) · within the ${maxBytes.toLocaleString()}-byte limit · ${chosen.width} × ${chosen.height} · ${ext.toUpperCase()}. Inspect image quality and portal requirements before use.`);
}finally{b.disabled=false;$('image-file').disabled=false;b.textContent=oldText;}
}
else if(action==='image'){ $('download-image').hidden=true;if(!image)throw Error('Choose an image first.');b.disabled=true;$('image-file').disabled=true;try{const resize=tool==='image-resizer',width=resize?numeric('width',1,25000,true):image.width,height=resize?numeric('height',1,25000,true):image.height;if(width*height>25000000)throw Error('Output must not exceed 25 million pixels.');const type=$('format').value,quality=type==='image/png'?undefined:numeric('quality',1,100)/100;const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;const ctx=canvas.getContext('2d');if(!ctx)throw Error('Canvas is unavailable in this browser.');if(type==='image/jpeg'){ctx.fillStyle=$('background')?.value||'#fff';ctx.fillRect(0,0,width,height);}ctx.drawImage(image,0,0,width,height);const blob=await new Promise(resolve=>canvas.toBlob(resolve,type,quality));if(!blob)throw Error('Image export failed. Try smaller dimensions.');if(outputUrl)URL.revokeObjectURL(outputUrl);outputUrl=URL.createObjectURL(blob);const ext=blob.type==='image/webp'?'webp':blob.type==='image/jpeg'?'jpg':'png';$('download-image').href=outputUrl;$('download-image').download=`toolnest-${tool==='image-converter'?'converted':resize?'resized':'compressed'}.${ext}`;$('download-image').hidden=false;const original=$('image-file').files[0].size;const saved=(1-blob.size/original)*100;textResult(`${width} × ${height} · ${(blob.size/1024).toFixed(1)} KB · ${saved>=0?saved.toFixed(1)+'% smaller':Math.abs(saved).toFixed(1)+'% larger'} than the original. Output: ${ext.toUpperCase()}.`);canvas.width=canvas.height=0;}finally{b.disabled=false;$('image-file').disabled=false;}}
}catch(e){$('error').textContent=e.message||'Unable to complete this action.';}}));
}
