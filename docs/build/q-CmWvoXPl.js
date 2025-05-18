import{_ as t}from"./q-uemlvruI.js";import{c as a,q as s}from"./q-DF_DLGXC.js";const r="/assets/Bzt8d0v6-coins.png",o="/assets/LpFp3lLj-rewards.png",n="/assets/DXqRHTc4-water.png",m="/assets/PIpB0kZX-quests.png",i="/assets/DEIQCoMo-calendar.png",c="/assets/YRHHOag4-power.png",f=[{text:"Money",imageUrl:r},{text:"Rewards",imageUrl:o},{text:"Water",imageUrl:n},{text:"Quests",imageUrl:m},{text:"Calendar",imageUrl:i},{text:"Power",imageUrl:c}],p=a(s(()=>t(()=>import("./q-B-S1CUXc.js"),[]),"s_uK0g0ktJ16Q")),u=a(s(()=>t(()=>import("./q-Aihn5riC.js"),[]),"s_RtDsHzoufHM")),g=`
  @keyframes gameFadeIn {
    from { background-color: rgba(0, 0, 0, 0); }
    to { background-color: rgba(0, 0, 0, 0.5); }
  }
  @keyframes gameFadeOut {
    from { background-color: rgba(0, 0, 0, 0.5); }
    to { background-color: rgba(0, 0, 0, 0); }
  }
  @keyframes gamePopIn {
    0% { transform: translate(-50%, -50%) scale(0.5); filter: brightness(0.8); }
    60% { transform: translate(-50%, -50%) scale(1.05); filter: brightness(1.1); }
    100% { transform: translate(-50%, -50%) scale(1); filter: brightness(1); }
  }
  @keyframes gamePopOut {
    0% { transform: translate(-50%, -50%) scale(1); filter: brightness(1); }
    40% { transform: translate(-50%, -50%) scale(1.05); filter: brightness(1.1); }
    100% { transform: translate(-50%, -50%) scale(0.5); filter: brightness(0.8); }
  }
  .animate-gameFadeIn {
    animation: gameFadeIn 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
  }
  .animate-gameFadeOut {
    animation: gameFadeOut 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
  }
  .animate-gamePopIn {
    animation: gamePopIn 0.20s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
  .animate-gamePopOut {
    animation: gamePopOut 0.20s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
`;if(typeof document<"u"){const e=document.createElement("style");e.textContent=g,document.head.appendChild(e)}export{p as B,u as a,f as i};
