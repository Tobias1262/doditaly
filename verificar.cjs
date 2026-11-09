const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
class El {
 constructor(){this.children=[];this.dataset={};this.handlers={};this.attrs={};this.hidden=false;this.value='';this.classes=new Set();this.classList={toggle:(c,on)=>on?this.classes.add(c):this.classes.delete(c)};}
 appendChild(e){this.children.push(e);return e;} append(...es){this.children.push(...es);} replaceChildren(){this.children=[];} set innerHTML(v){this.html=v;if(v==='')this.children=[];} get innerHTML(){return this.html;}
 setAttribute(k,v){this.attrs[k]=v;} addEventListener(k,f){this.handlers[k]=f;} scrollIntoView(){} remove(){}
 querySelectorAll(q){if(q==='[data-categoria]')return this.children;if(q==='.seccion-menu')return this.children;if(q==='.producto')return this.children.flatMap(e=>e.className==='producto'?[e]:e.querySelectorAll(q));return [];}
}
const ids={};for(const id of ['menu','categorias','buscar','sin-resultados','arriba','frase-portada','titulo-idioma','titulo-busqueda','titulo-aviso','texto-aviso','texto-gluten','titulo-novedades','resena-google','lista-novedades'])ids[id]=new El();
const buttons=['ca','es','it','en','fr','de','ru','pt'].map(lang=>{let e=new El();e.dataset.lang=lang;return e;});
let ready,scrolled;const win={scrollY:0,handlers:{},addEventListener(k,f){this.handlers[k]=f;},matchMedia(){return {matches:true}},scrollTo(v){scrolled=v;}};
const ctx={console,window:win,localStorage:{getItem(){throw Error('blocked')},setItem(){throw Error('blocked')}},document:{addEventListener(k,f){ready=f},getElementById:k=>ids[k],createElement:()=>new El(),documentElement:{},querySelectorAll:()=>buttons}};
vm.createContext(ctx);vm.runInContext(fs.readFileSync('script.js','utf8'),ctx);ready();
for(const b of buttons){b.handlers.click();assert.equal(ctx.document.documentElement.lang,b.dataset.lang);assert.equal(ids.menu.children.length,11);assert.equal(ids['lista-novedades'].children.length,1);}
ids.buscar.value='zzzz-no-product';ids.buscar.handlers.input();assert.equal(ids['sin-resultados'].hidden,false);
ids.buscar.value='';ids.buscar.handlers.input();assert.equal(ids['sin-resultados'].hidden,true);
win.scrollY=600;win.handlers.scroll();assert(ids.arriba.classes.has('visible'));ids.arriba.handlers.click();assert.equal(scrolled.top,0);assert.equal(scrolled.behavior,'auto');
const data=vm.runInContext('carta',ctx);let count=0;for(const c of data){if(c.imagen)assert(fs.existsSync(c.imagen));for(const p of c.productos){count++;for(const v of Object.values(p))if(Array.isArray(v))assert.equal(v.length,8);}}
console.log('PASS: ocho cambios de idioma, almacenamiento bloqueado, 11 categorías, '+count+' productos, búsqueda, noticias, volver arriba y recursos. Prueba con DOM simulado; no sustituye navegador.');
