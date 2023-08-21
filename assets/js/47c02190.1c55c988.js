"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[582644],{137642:(e,t,a)=>{a.d(t,{n:()=>r});var n=a(386010),o=a(667294);const i="bannerSection_EqIc",r=({children:e,className:t,greyBackground:a=!1,diagonalBorder:r=!1,diagonalBottomBorder:c=!1,greenGradientBackground:l=!1,greenBottomGradientBackground:s=!1,greenCallToActionGradientBackground:d=!1})=>o.createElement("section",{className:(0,n.Z)(i,t,{greyBackground:a,diagonalBorder:r,diagonalBottomBorder:c,greenGradientBackground:l,greenBottomGradientBackground:s,greenCallToActionGradientBackground:d})},o.createElement("div",{className:"container padding-horiz--lg padding-vert--xl"},e))},201340:(e,t,a)=>{a.d(t,{E:()=>c});var n=a(386010),o=a(667294);const i="sectionGridContainer__rT4",r="gridContainer_uAL8",c=({header:e,children:t,className:a})=>o.createElement("div",{className:(0,n.Z)(i,a)},e&&o.createElement("div",{className:"gridHeader"},e),o.createElement("div",{className:r},Array.isArray(t)?t.map(((e,t)=>o.cloneElement(e,{key:t,className:(0,n.Z)(e.props.className)}))):t))},448501:(e,t,a)=>{a.d(t,{b:()=>c});var n=a(931984),o=a(386010),i=a(667294);const r="contentBlock_rJQu",c=({children:e,title:t,className:a,topImgSrc:c,hasBulletLine:l,actionButtons:s})=>i.createElement("div",{className:(0,o.Z)(a,r)},c&&i.createElement("img",{src:c,alt:c}),i.createElement("div",{className:"contentBlockTitle"},l&&i.createElement("div",{className:"bulletLine"}),t&&i.isValidElement(t)?t:i.createElement("h2",null,t)),e&&i.isValidElement(e)?e:i.createElement("p",null,e),s&&i.createElement("div",{className:"actionButtons"},s.map((({link:e,label:t},a)=>i.createElement(n.Z,{key:a,className:"button button--primary button--lg",to:e},t)))))},848044:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(931984),o=a(208241),i=a(137642),r=a(201340),c=a(448501),l=a(533737),s=a(386010),d=a(667294);const m="communityPage_E3hS",u="banner_Gp8W",g=()=>{const{siteConfig:e}=(0,o.Z)(),t=[{title:"See us in action",content:d.createElement(d.Fragment,null,d.createElement("p",null,"Watch the videos below to get an introduction to Backstage and to see how we use different plugins to customize"," ",d.createElement(n.Z,{to:"https://engineering.atspotify.com/2020/04/21/how-we-use-backstage-at-spotify/"},"our internal version of Backstage at Spotify")),d.createElement("p",null,"To see how other companies have already started using Backstage, watch these presentations from"," ",d.createElement(n.Z,{to:"https://youtu.be/rRphwXeq33Q?t=1508"},"Expedia"),","," ",d.createElement(n.Z,{to:"https://youtu.be/6sg5uMCLxTA?t=153"},"Zalando"),", and"," ",d.createElement(n.Z,{to:"https://youtu.be/UZTVjv-AvZA?t=188"},"TELUS"),". For more, join our"," ",d.createElement(n.Z,{to:"https://github.com/backstage/community"},"Community Sessions")),d.createElement("p",null,"To explore the UI and basic features of Backstage firsthand, go to:"," ",d.createElement(n.Z,{to:"https://demo.backstage.io"},"demo.backstage.io"),". (Tip:"," ","click \u201cAll\u201d to view all the example components in the software catalog.)")),media:{type:"image",link:`${e.baseUrl}img/demo-screen.png`}},{title:"Introduction to Backstage",content:"Backstage is an open source platform for building developer portals. We\u2019ve been using our homegrown version at Spotify for years \u2014 so it\u2019s already packed with features. (We have over 120 internal plugins, built by 60 different teams.) In this live demo recording, Stefan \xc5lund, product manager for Backstage, tells the origin story of Backstage and gives you a tour of how we use it here at Spotify.",actionItemLink:"https://www.youtube.com/watch?v=1XtJ5FAOjPk",media:{type:"video",link:"https://www.youtube.com/embed/1XtJ5FAOjPk"}},{title:"Control cloud costs",content:d.createElement(d.Fragment,null,d.createElement("p",null,"How do you control cloud costs while maintaining the speed and independence of your development teams? With the"," ",d.createElement(n.Z,{to:"https://backstage.io/plugins"},"Cost Insights plugin")," ","for Backstage, managing cloud costs becomes just another part of an engineer\u2019s daily development process. They get a clear view of their spending \u2014 and can decide for themselves how they want to optimize it. Learn more about the"," ",d.createElement(n.Z,{to:"https://backstage.io/blog/2020/10/22/cost-insights-plugin"},"Cost Insights plugin"))),actionItemLink:"https://youtu.be/YLAd5hdXR_Q",media:{type:"video",link:"https://www.youtube.com/embed/YLAd5hdXR_Q"}},{title:"Make documentation easy",content:d.createElement(d.Fragment,null,d.createElement("p",null,"Documentation! Everyone needs it, no one wants to create it, and no one can ever find it. Backstage follows a \u201cdocs like code\u201d approach: you write documentation in Markdown files right alongside your code. This makes documentation easier to create, maintain, find \u2014 and, you know, actually use. This demo video showcases Spotify\u2019s internal version of TechDocs. Learn more about"," ",d.createElement(n.Z,{to:"https://backstage.io/blog/2020/09/08/announcing-tech-docs"},"TechDocs"),".")),actionItemLink:"https://youtu.be/mOLCgdPw1iA",media:{type:"video",link:"https://www.youtube.com/embed/mOLCgdPw1iA"}},{title:"Manage your tech health",content:"Instead of manually updating a spreadsheet, what if you had a beautiful dashboard that could give you an instant, interactive picture of your entire org\u2019s tech stack? That\u2019s how we do it at Spotify. With our Tech Insights plugin for Backstage, anyone at Spotify can see which version of which software anyone else at Spotify is using \u2014 and a whole a lot more. From managing migrations to fighting tech entropy, Backstage makes managing our tech health actually kind of pleasant.",actionItemLink:"https://www.youtube.com/watch?v=K3xz6VAbgH8&list=PLf1KFlSkDLIBtMGwRDfaVlKMqTMrjD2yO&index=6",media:{type:"video",link:"https://www.youtube.com/embed/K3xz6VAbgH8"}},{title:"Create a microservice",content:"You\u2019re a Spotify engineer about to build a new microservice (or any component) using Spring Boot. Where do you start? Search for a quick start guide online? Create an empty repo on GitHub? Copy and paste an old project? Nope. Just go to Backstage, and you\u2019ll be up and running in two minutes \u2014 with a \u201cHello World\u201d app, CI, and documentation all automatically set up and configured in a standardized way.",actionItemLink:"https://www.youtube.com/watch?v=U1iwe3L5pzc",media:{type:"video",link:"https://www.youtube.com/embed/U1iwe3L5pzc"}},{title:"Search all your services",content:"All of Spotify\u2019s services are automatically indexed in Backstage. So our engineers can stop playing detective \u2014 no more spamming Slack channels asking if anyone knows who owns a particular service and where you can find its API, only to discover that the owner went on sabbatical three months ago and you have to hunt them down on a mountain in Tibet where they\u2019re on a 12-day silent meditation retreat. At Spotify, anyone can always find anyone else\u2019s service, inspect its APIs, and contact its current owner \u2014 all with one search.",actionItemLink:"https://www.youtube.com/watch?v=vcDL9tOv7Eo",media:{type:"video",link:"https://www.youtube.com/embed/vcDL9tOv7Eo"}},{title:"Manage data pipelines",content:"We manage a lot of data pipelines (also known as workflows) here at Spotify. So, of course, we made a great workflows plugin for our version of Backstage. All our workflow tools \u2014 including a scheduler, log inspector, data lineage graph, and configurable alerts \u2014 are integrated into one simple interface.",actionItemLink:"https://www.youtube.com/watch?v=rH46MLNZIPM",media:{type:"video",link:"https://www.youtube.com/embed/rH46MLNZIPM"}}];return d.createElement(l.Z,null,d.createElement("div",{className:(0,s.W)(m)},t.map(((e,a)=>d.createElement(i.n,{key:a,diagonalBottomBorder:0===a,diagonalBorder:a>0&&a<t.length-1,greyBackground:a%2==0,className:u},d.createElement(r.E,null,d.createElement(c.b,{title:d.createElement("h1",null,e.title),actionButtons:[{link:e.actionItemLink,label:"WATCH NOW"}]},e.content),d.createElement("div",{className:(0,s.W)()},"image"===e.media.type?d.createElement("img",{src:e.media.link,alt:e.title}):d.createElement("iframe",{src:e.media.link,title:e.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}))))))))}}}]);