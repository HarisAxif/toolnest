from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse
import json
import xml.etree.ElementTree as ET
root=Path('dist')
class Page(HTMLParser):
 def __init__(self):super().__init__();self.h1=0;self.links=[];self.title='';self.in_title=False;self.ids=[];self.description=None;self.canonical=None;self.json=[];self.script=None
 def handle_starttag(self,t,a):
  a=dict(a)
  if t=='h1':self.h1+=1
  if t=='title':self.in_title=True
  if a.get('id'):self.ids.append(a['id'])
  if t in ['a','script','link']:
   u=a.get('href',a.get('src',''))
   if u.startswith('/'):self.links.append(u.split('#')[0])
  if t=='meta' and a.get('name')=='description':self.description=a.get('content')
  if t=='link' and a.get('rel')=='canonical':self.canonical=a.get('href')
  if t=='script' and a.get('type')=='application/ld+json':self.script=''
 def handle_data(self,d):
  if self.in_title:self.title+=d
  if self.script is not None:self.script+=d
 def handle_endtag(self,t):
  if t=='title':self.in_title=False
  if t=='script' and self.script is not None:self.json.append(self.script);self.script=None
pages=[]
for p in sorted(root.rglob('index.html')):
 c=Page();c.feed(p.read_text());assert c.h1==1,(p,c.h1);assert len(c.ids)==len(set(c.ids)),p
 assert c.description and c.title and c.canonical,p
 assert urlparse(c.canonical).scheme=='https',p
 for link in c.links:
  path=root/link.lstrip('/')
  if link.endswith('/') or link in ('','/'):path=path/'index.html'
  assert path.exists(),(p,link)
 for item in c.json:json.loads(item)
 pages.append(c)
for field in ('title','description','canonical'):
 vals=[getattr(p,field) for p in pages];assert len(vals)==len(set(vals)),f'Duplicate {field}'
ET.parse(root/'sitemap.xml')
assert 'noindex' in (root/'404.html').read_text()
assert len(list(root.glob('tools/*/index.html')))==19 # 15 actual tools + 4 category hubs
assert '@import' not in (root/'style.css').read_text()
print(f'PASS: {len(pages)} HTML pages; unique titles, descriptions and canonicals; one H1; valid JSON-LD/sitemap; local links/assets; expected tool/hub counts.')
