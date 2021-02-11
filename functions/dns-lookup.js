!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const r=n(1);r.setServers(["8.8.8.8"]);const s=["A","AAAA","CNAME","NS","PTR","TXT"],o=["CAA","MX","NAPTR","SOA","SRV"],a=[...s,...o,"ANY"];class i{constructor(e,t){this.type=e,this.domainName=t}async createLookupResolve(){return new Promise((e,t)=>{r.resolve(this.domainName,this.type,(n,r)=>{n&&t(n),e(r)})})}async constructAPIResponse(e){const t={DNSData:{domainName:this.domainName,recordAmount:e.length,types:[],lookupDate:new Date,dnsRecords:[]}};if(s.includes(this.type)){for(let n=0;n<e.length;n++){const r=e[n];"TXT"===this.type?t.DNSData.dnsRecords.push({type:this.type,value:r[0]}):t.DNSData.dnsRecords.push({type:this.type,value:r}),t.DNSData.types.includes(this.type)||t.DNSData.types.push(this.type)}return t}if("ANY"===this.type){for(let n=0;n<e.length;n++){const r=e[n];t.DNSData.dnsRecords.push({value:r}),t.DNSData.types.includes(r.type)||t.DNSData.types.push(r.type)}return t}if(o.includes(this.type))return t.DNSData.dnsRecords.push({type:this.type,value:e}),t.DNSData.types.push(this.type),t}}t.handler=async function(e,t,n){const r=e.queryStringParameters;let s=r.type,o=r.domainName;if(s||(s="ANY"),!a.includes(s))return{statusCode:400,body:JSON.stringify({message:"Invalid type. You don't have to specify a type. If you want to specify a type please use a valid type like: "+a})};if(!o)return{statusCode:400,body:JSON.stringify({message:"Domain name is required."})};const u=new i(s,o),p=await u.createLookupResolve(),c=await u.constructAPIResponse(p);return{statusCode:200,body:JSON.stringify(c)}}},function(e,t){e.exports=require("dns")}]));