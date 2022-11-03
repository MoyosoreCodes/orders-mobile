import{a as n,Q as i,u,b as d,c as r}from"./use-quasar.1ca94313.js";import{_ as m,y as p,z as g,G as c,F as o,D as t,B as h,H as y,Q as l}from"./index.09c00735.js";const f=p({name:"IndexPage",components:{},data(){return{email:"",username:"",password:""}},setup(){return{quasar:u()}},methods:{register(){const a={email:this.email,password:this.password,username:this.username};n.post("auth/register",JSON.stringify(a),{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}).then(({data:s})=>{s.statusCode!==201?this.quasar.notify({message:s.message,color:"negative"}):(this.quasar.notify({message:s.message,color:"secondary"}),this.$router.push({path:"/login"}))}).catch(s=>{console.log(s),this.quasar.notify({message:"network error, please contact support",color:"negative"})})},goToLogin(){this.$router.push({path:"/login"})}}}),w={class:"column items-center col-auto",style:{margin:"80px 0"}},b={class:"col 6",style:{"min-width":"400px"}},V=o("div",{class:"text-h5 text-center text-weight-bold",style:{margin:"20px 0"}},"Sign Up",-1),x={style:{margin:"3px"},class:"align-self:center"};function q(a,s,v,Q,C,S){return g(),c("div",w,[o("div",b,[t(i,{style:{padding:"5px"},onSubmit:y(a.register,["prevent"])},{default:h(()=>[V,t(d),t(r,{filled:"",modelValue:a.email,"onUpdate:modelValue":s[0]||(s[0]=e=>a.email=e),label:"Email","lazy-rules":"",rules:[e=>e&&e.length>0||"email is required"]},null,8,["modelValue","rules"]),t(r,{filled:"",modelValue:a.username,"onUpdate:modelValue":s[1]||(s[1]=e=>a.username=e),label:"Username","lazy-rules":"",rules:[e=>e&&e.length>0||"username is required"]},null,8,["modelValue","rules"]),t(r,{filled:"",modelValue:a.password,"onUpdate:modelValue":s[2]||(s[2]=e=>a.password=e),type:"Password",label:"Password","lazy-rules":"",rules:[e=>e&&e.length>0||"password is required"]},null,8,["modelValue","rules"]),o("div",x,[t(l,{label:"Register",type:"submit",color:"primary"}),t(l,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})]),o("div",{style:{margin:"15px",cursor:"pointer"},class:"text-p text-center text-weight-light p-by-xl",onClick:s[3]||(s[3]=(...e)=>a.goToLogin&&a.goToLogin(...e))},"Already have an account?, Sign in")]),_:1},8,["onSubmit"])])])}var U=m(f,[["render",q]]);export{U as default};
