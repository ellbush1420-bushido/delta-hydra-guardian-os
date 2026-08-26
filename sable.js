const LINKS={core:"https://buy.stripe.com/test_9B6aEZ9XgbJ26gb8Rw5Ne00",bundle:"https://buy.stripe.com/test_9B6cN76L45kE7kfgjY5Ne01",academy:"https://buy.stripe.com/test_aFaeVf9XgfZicEz3xc5Ne02",audit:"https://buy.stripe.com/test_6oUaEZ6L46oIdID5Fk5Ne03"};
function reply(text){const q=text.toLowerCase();
if(/(hack|exploit|malware|ransomware|bypass)/.test(q))return "That request leaves the defensive line. Sable will not teach intrusion.";
if(/bundle|everything|full/.test(q))return "Operator Bundle is $1,497. Stripe: "+LINKS.bundle+" Whop: https://whop.com/checkout/plan_uYfIOknpOuHt8";
if(/core|doctrine|start/.test(q))return "Core Doctrine is $147. "+LINKS.core;
if(/academy|subscription|annual/.test(q))return "Skills Academy is $497 per year. "+LINKS.academy;
if(/audit|assess|walk/.test(q))return "Audit Lite is $1,500 and is not a pentest. "+LINKS.audit;
if(/paypal|whop|shopify|gumroad|stripe/.test(q))return "Stripe test links are on this page. Live PayPal+card+affiliate: https://whop.com/checkout/plan_uYfIOknpOuHt8. Shopify and Gumroad are not connected here.";
if(/copyright|license/.test(q))return "Copyright 2026 Hydra Fleet / Omega Hydra Operations. Internal-use license.";
return "Nine halls, factory, academy, Eyes, T3 school. Solo operator, team, or audit?";}
const log=document.getElementById("sable-log");const pane=document.getElementById("sable");
function add(cls,text){const el=document.createElement("div");el.className=cls;el.textContent=text;log.appendChild(el);}
document.getElementById("sable-open").onclick=()=>{pane.hidden=false;if(!log.childElementCount)add("bot","Sable at Hall 5.");};
document.getElementById("sable-close").onclick=()=>{pane.hidden=true;};
document.getElementById("sable-form").onsubmit=(e)=>{e.preventDefault();const input=document.getElementById("sable-input");const text=input.value.trim();if(!text)return;add("you",text);add("bot",reply(text));input.value="";};