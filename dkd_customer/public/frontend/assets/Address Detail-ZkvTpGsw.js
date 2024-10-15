var k=(p,l,u)=>new Promise((e,b)=>{var v=n=>{try{r(u.next(n))}catch(a){b(a)}},c=n=>{try{r(u.throw(n))}catch(a){b(a)}},r=n=>n.done?e(n.value):Promise.resolve(n.value).then(v,c);r((u=u.apply(p,l)).next())});import{L as O}from"./LeftSidebar-Bv_zMSK0.js";import{_ as P,b as R,r as t,c as j,q,o as G,e as U,f as i,g as o,n as A,t as J,x as M,v as w,u as H,y as K,h as g,i as z}from"./index-59s5irdc.js";import{_ as Q}from"./Breadcrumbs.vue_vue_type_script_setup_true_lang-C_ouJCLj.js";import{a as W}from"./FormControl.vue_vue_type_script_setup_true_lang-DN1lN8V8.js";import"./Avatar.vue_vue_type_script_setup_true_lang-Dt0vLd5E.js";import"./index-CFFX3Mdj.js";const X={components:{LeftSidebar:O,Breadcrumbs:Q,Button:R,FormControl:W},setup(){const p=H(),l=K(),u=t(!1),e=t(!1),b=t(""),v=t(""),c=t(""),r=t(""),n=t(""),a=t(""),s=t(""),y=t(""),_=t(""),f=t(""),V=t(""),E=t(""),C=t(""),x=t(""),L=j({url:"dkd_customer.dkd_customer.api.api.get_address",method:"get"}),h=t([{label:"Addresses",route:{name:"addresses"}},{label:"New",route:{}}]),T=[{label:"Billing",value:"Billing"},{label:"Shipping",value:"Shipping"}],S=()=>k(this,null,function*(){try{const m=l.params.id,d=(yield L.fetch()).find(I=>I.name===m);d&&(n.value=d.name,b.value=d.address_title,v.value=d.address_type,c.value=d.address_line1,r.value=d.address_line2,a.value=d.city,s.value=d.state,y.value=d.pincode,_.value=d.country,f.value=d.email_id,V.value=d.phone,E.value=d.gstin,C.value=d.links_doctype,x.value=d.link_name)}catch(m){console.error("Error fetching address details:",m)}}),D=()=>{e.value=!0},N=()=>{e.value=!1,S()},F=()=>k(this,null,function*(){const m=l.params.id;if(!m)return;const B={address_title:b.value,address_type:v.value,address_line1:c.value,address_line2:r.value,city:a.value,state:s.value,pincode:y.value,country:_.value,email_id:f.value,phone:V.value,gstin:E.value,links_doctype:C.value,link_name:x.value};try{if(!(yield fetch(`/api/resource/Address/${m}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(B)})).ok)throw new Error("Error updating address");e.value=!1,p.push({name:"addresses"})}catch(d){console.error("Error updating address:",d)}});return q(n,m=>{h.value[1].label=m}),G(()=>{S()}),{isSidebarCollapsed:u,isEditing:e,address_title:b,address_type:v,address_line1:c,address_line2:r,city:a,state:s,pincode:y,country:_,email_id:f,phone:V,gstin:E,links_doctype:C,link_name:x,breadcrumbsList:h,statusOptions:T,startEditing:D,cancelEditing:N,submitChanges:F}}},Y={class:"head-content"},Z={class:"border-b bg-white px-5 py-6.5 pb-[2.625rem] sm:px-5 mb-12"},$={class:"main-content"},ee={class:"bg-white border rounded-lg p-6 space-y-6 pb-[2.625rem] ml-[126px] mr-[120px]"},le={class:"float-left mb-1 text-9xl font-bold text-gray-800 -mt-2",style:{"font-size":"1.85rem"}},se={class:"text-9xl font-bold text-gray-600",style:{"font-size":"1rem"}},ae={class:"float-right mb-1"},de={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},te={key:0,class:"float-right flex gap-4"};function ie(p,l,u,e,b,v){const c=g("Breadcrumbs"),r=g("LeftSidebar"),n=g("Button"),a=g("FormControl");return z(),U("div",null,[i("div",{class:A(["head-layout",{collapsed:e.isSidebarCollapsed}])},[i("div",Y,[i("header",Z,[o(c,{items:e.breadcrumbsList,class:"float-left"},null,8,["items"])])])],2),i("div",{class:A(["layout",{collapsed:e.isSidebarCollapsed}])},[o(r,{isCollapsed:e.isSidebarCollapsed,onToggle:p.toggleSidebar},null,8,["isCollapsed","onToggle"]),i("div",$,[i("div",ee,[i("div",le,[l[11]||(l[11]=i("p",null,"Address",-1)),i("p",se,J(p.subject),1)]),i("div",ae,[e.isEditing?w("",!0):(z(),M(n,{key:0,variant:"solid",theme:"gray",size:"md",label:"Edit",disabled:!1,onClick:e.startEditing},null,8,["onClick"]))]),l[12]||(l[12]=i("div",{class:"border-b pb-7 pt-10"},null,-1)),i("div",de,[i("div",null,[o(a,{type:"text",size:"md",variant:"subtle",label:"Address Title",disabled:!e.isEditing,modelValue:e.address_title,"onUpdate:modelValue":l[0]||(l[0]=s=>e.address_title=s),class:"mb-5"},null,8,["disabled","modelValue"]),o(a,{type:"select",size:"md",options:e.statusOptions,disabled:!e.isEditing,variant:"subtle",label:"Address Type",modelValue:e.address_type,"onUpdate:modelValue":l[1]||(l[1]=s=>e.address_type=s),class:"mb-5"},null,8,["options","disabled","modelValue"]),o(a,{type:"text",size:"md",variant:"subtle",label:"Address Line 1",disabled:!e.isEditing,modelValue:e.address_line1,"onUpdate:modelValue":l[2]||(l[2]=s=>e.address_line1=s),class:"mb-5"},null,8,["disabled","modelValue"]),o(a,{type:"text",size:"md",variant:"subtle",label:"Address Line 2",disabled:!e.isEditing,modelValue:e.address_line2,"onUpdate:modelValue":l[3]||(l[3]=s=>e.address_line2=s),class:"mb-5"},null,8,["disabled","modelValue"]),o(a,{type:"text",size:"md",variant:"subtle",label:"City",disabled:!e.isEditing,modelValue:e.city,"onUpdate:modelValue":l[4]||(l[4]=s=>e.city=s),class:"mb-5"},null,8,["disabled","modelValue"]),o(a,{type:"text",size:"md",variant:"subtle",label:"State",disabled:!e.isEditing,modelValue:e.state,"onUpdate:modelValue":l[5]||(l[5]=s=>e.state=s),class:"mb-5"},null,8,["disabled","modelValue"])]),i("div",null,[o(a,{type:"text",size:"md",variant:"subtle",disabled:!e.isEditing,label:"Country",modelValue:e.country,"onUpdate:modelValue":l[6]||(l[6]=s=>e.country=s),class:"mb-5"},null,8,["disabled","modelValue"]),o(a,{type:"number",size:"md",variant:"subtle",disabled:!e.isEditing,label:"Postal Code",modelValue:e.pincode,"onUpdate:modelValue":l[7]||(l[7]=s=>e.pincode=s),class:"mb-5"},null,8,["disabled","modelValue"]),o(a,{type:"email",size:"md",variant:"subtle",label:"Email",disabled:!e.isEditing,modelValue:e.email_id,"onUpdate:modelValue":l[8]||(l[8]=s=>e.email_id=s),class:"mb-5"},null,8,["disabled","modelValue"]),o(a,{type:"number",size:"md",variant:"subtle",disabled:!e.isEditing,label:"Phone",modelValue:e.phone,"onUpdate:modelValue":l[9]||(l[9]=s=>e.phone=s),class:"mb-5"},null,8,["disabled","modelValue"]),o(a,{type:"text",size:"md",disabled:!e.isEditing,variant:"subtle",label:"GSTIN",modelValue:e.gstin,"onUpdate:modelValue":l[10]||(l[10]=s=>e.gstin=s),class:"mb-5"},null,8,["disabled","modelValue"])])]),l[13]||(l[13]=i("div",{class:"border-b pb-7 pt-5"},null,-1)),i("div",null,[e.isEditing?(z(),U("div",te,[o(n,{variant:"subtle",theme:"gray",size:"md",label:"Discard",disabled:!1,onClick:e.cancelEditing},null,8,["onClick"]),o(n,{variant:"solid",theme:"gray",size:"md",label:"Submit",disabled:!1,onClick:e.submitChanges},null,8,["onClick"])])):w("",!0)])])])],2)])}const pe=P(X,[["render",ie],["__scopeId","data-v-52e79711"]]);export{pe as default};