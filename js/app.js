const P=[
 {id:1,n:'Create Tee',c:'Tees',p:790},
 {id:2,n:'Elevate Tee',c:'Tees',p:790},
 {id:3,n:'Wall Tag Tee',c:'Tees',p:850},
 {id:4,n:'Start Small Tee',c:'Tees',p:750},
 {id:5,n:'Block Hoodie',c:'Hoodies',p:1890},
 {id:6,n:'Night Hoodie',c:'Hoodies',p:1990},
 {id:7,n:'Dream Cap',c:'Caps',p:550},
 {id:8,n:'Studio Tote',c:'Totes',p:420}];
const peso=n=>'₱'+n.toLocaleString();
let cart={};try{cart=JSON.parse(localStorage.getItem('ce_cart')||'{}')}catch(e){}
function save(){try{localStorage.setItem('ce_cart',JSON.stringify(cart))}catch(e){}}
function openCart(){try{bootstrap.Offcanvas.getOrCreateInstance('#panel').show()}catch(e){}}
function add(id){cart[id]=(cart[id]||0)+1;save();render();openCart()}
function chg(id,d){cart[id]=(cart[id]||0)+d;if(cart[id]<=0)delete cart[id];save();render()}
function list(){
 const q=document.getElementById('q').value.toLowerCase(),c=document.getElementById('cat').value,s=document.getElementById('sort').value;
 let r=P.filter(p=>(!c||p.c===c)&&p.n.toLowerCase().includes(q));
 if(s==='lo')r.sort((a,b)=>a.p-b.p);
 if(s==='hi')r.sort((a,b)=>b.p-a.p);
 if(s==='az')r.sort((a,b)=>a.n.localeCompare(b.n));
 return r}
function render(){
 const r=list();
 document.getElementById('grid').innerHTML=r.length?r.map(p=>`<div class="card"><div class="art r1"><img src="images/product-${p.id}.jpg" alt="${p.n}" loading="lazy" onerror="this.onerror=null;this.src='images/product-${p.id}.svg'"></div><div class="body"><span class="badge">${p.c}</span><h3>${p.n}</h3><span class="price">${peso(p.p)}</span><button class="btn btn-p" onclick="add(${p.id})">Add to cart</button></div></div>`).join(''):'<p>No products match your search.</p>';
 let n=0,t=0;
 const h=Object.keys(cart).map(id=>{const p=P.find(x=>x.id==id);if(!p)return'';const q=cart[id];n+=q;t+=q*p.p;
  return `<div class="line"><b>${p.n}</b><button onclick="chg(${id},-1)">−</button>${q}<button onclick="chg(${id},1)">+</button><span>${peso(p.p*q)}</span></div>`}).join('');
 document.getElementById('items').innerHTML=h||'<p>Your cart is empty.</p>';
 document.getElementById('count').textContent=n;
 document.getElementById('total').textContent=peso(t)}
['q','cat','sort'].forEach(i=>document.getElementById(i).addEventListener('input',render));
document.getElementById('join').addEventListener('click',()=>{
 const e=document.getElementById('email'),m=document.getElementById('nmsg');
 if(!/^\S+@\S+\.\S+$/.test(e.value)){m.textContent='Please enter a valid email.';return}
 try{const l=JSON.parse(localStorage.getItem('ce_list')||'[]');l.push(e.value);localStorage.setItem('ce_list',JSON.stringify(l))}catch(x){}
 m.textContent='Thanks for joining the street list!';e.value=''});
render();
