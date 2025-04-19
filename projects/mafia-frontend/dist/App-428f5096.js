import{M as Oe,c as un,d as rn,f as Mi,u as wn,v as mn,L as zn,U as Bn,O as Si,h as Li,W as Pi,B as Ei}from"./index3.js";import{d as Vn}from"./index.js";import"./bowser.js";var Rn={exports:{}};(function(qt,N){(function(pt,ct){qt.exports=ct()})(self,function(){return(()=>{var pt={192:(Ct,kt)=>{var Nt,Dt,ve=function(){var Ft=function(nt,et){var K=nt,U=Qt[et],O=null,X=0,J=null,ot=[],lt={},Ht=function(M,P){O=function(A){for(var k=new Array(A),D=0;D<A;D+=1){k[D]=new Array(A);for(var st=0;st<A;st+=1)k[D][st]=null}return k}(X=4*K+17),j(0,0),j(X-7,0),j(0,X-7),y(),p(),x(M,P),K>=7&&_(M),J==null&&(J=z(K,U,ot)),V(J,P)},j=function(M,P){for(var A=-1;A<=7;A+=1)if(!(M+A<=-1||X<=M+A))for(var k=-1;k<=7;k+=1)P+k<=-1||X<=P+k||(O[M+A][P+k]=0<=A&&A<=6&&(k==0||k==6)||0<=k&&k<=6&&(A==0||A==6)||2<=A&&A<=4&&2<=k&&k<=4)},p=function(){for(var M=8;M<X-8;M+=1)O[M][6]==null&&(O[M][6]=M%2==0);for(var P=8;P<X-8;P+=1)O[6][P]==null&&(O[6][P]=P%2==0)},y=function(){for(var M=Lt.getPatternPosition(K),P=0;P<M.length;P+=1)for(var A=0;A<M.length;A+=1){var k=M[P],D=M[A];if(O[k][D]==null)for(var st=-2;st<=2;st+=1)for(var ht=-2;ht<=2;ht+=1)O[k+st][D+ht]=st==-2||st==2||ht==-2||ht==2||st==0&&ht==0}},_=function(M){for(var P=Lt.getBCHTypeNumber(K),A=0;A<18;A+=1){var k=!M&&(P>>A&1)==1;O[Math.floor(A/3)][A%3+X-8-3]=k}for(A=0;A<18;A+=1)k=!M&&(P>>A&1)==1,O[A%3+X-8-3][Math.floor(A/3)]=k},x=function(M,P){for(var A=U<<3|P,k=Lt.getBCHTypeInfo(A),D=0;D<15;D+=1){var st=!M&&(k>>D&1)==1;D<6?O[D][8]=st:D<8?O[D+1][8]=st:O[X-15+D][8]=st}for(D=0;D<15;D+=1)st=!M&&(k>>D&1)==1,D<8?O[8][X-D-1]=st:D<9?O[8][15-D-1+1]=st:O[8][15-D-1]=st;O[X-8][8]=!M},V=function(M,P){for(var A=-1,k=X-1,D=7,st=0,ht=Lt.getMaskFunction(P),Y=X-1;Y>0;Y-=2)for(Y==6&&(Y-=1);;){for(var dt=0;dt<2;dt+=1)if(O[k][Y-dt]==null){var ft=!1;st<M.length&&(ft=(M[st]>>>D&1)==1),ht(k,Y-dt)&&(ft=!ft),O[k][Y-dt]=ft,(D-=1)==-1&&(st+=1,D=7)}if((k+=A)<0||X<=k){k-=A,A=-A;break}}},z=function(M,P,A){for(var k=We.getRSBlocks(M,P),D=Ae(),st=0;st<A.length;st+=1){var ht=A[st];D.put(ht.getMode(),4),D.put(ht.getLength(),Lt.getLengthInBits(ht.getMode(),M)),ht.write(D)}var Y=0;for(st=0;st<k.length;st+=1)Y+=k[st].dataCount;if(D.getLengthInBits()>8*Y)throw"code length overflow. ("+D.getLengthInBits()+">"+8*Y+")";for(D.getLengthInBits()+4<=8*Y&&D.put(0,4);D.getLengthInBits()%8!=0;)D.putBit(!1);for(;!(D.getLengthInBits()>=8*Y||(D.put(236,8),D.getLengthInBits()>=8*Y));)D.put(17,8);return function(dt,ft){for(var vt=0,Pt=0,ut=0,_t=new Array(ft.length),gt=new Array(ft.length),bt=0;bt<ft.length;bt+=1){var re=ft[bt].dataCount,Ot=ft[bt].totalCount-re;Pt=Math.max(Pt,re),ut=Math.max(ut,Ot),_t[bt]=new Array(re);for(var At=0;At<_t[bt].length;At+=1)_t[bt][At]=255&dt.getBuffer()[At+vt];vt+=re;var Vt=Lt.getErrorCorrectPolynomial(Ot),Et=ce(_t[bt],Vt.getLength()-1).mod(Vt);for(gt[bt]=new Array(Vt.getLength()-1),At=0;At<gt[bt].length;At+=1){var zt=At+Et.getLength()-gt[bt].length;gt[bt][At]=zt>=0?Et.getAt(zt):0}}var Ut=0;for(At=0;At<ft.length;At+=1)Ut+=ft[At].totalCount;var jt=new Array(Ut),It=0;for(At=0;At<Pt;At+=1)for(bt=0;bt<ft.length;bt+=1)At<_t[bt].length&&(jt[It]=_t[bt][At],It+=1);for(At=0;At<ut;At+=1)for(bt=0;bt<ft.length;bt+=1)At<gt[bt].length&&(jt[It]=gt[bt][At],It+=1);return jt}(D,k)};lt.addData=function(M,P){var A=null;switch(P=P||"Byte"){case"Numeric":A=Ge(M);break;case"Alphanumeric":A=Ue(M);break;case"Byte":A=we(M);break;case"Kanji":A=ye(M);break;default:throw"mode:"+P}ot.push(A),J=null},lt.isDark=function(M,P){if(M<0||X<=M||P<0||X<=P)throw M+","+P;return O[M][P]},lt.getModuleCount=function(){return X},lt.make=function(){if(K<1){for(var M=1;M<40;M++){for(var P=We.getRSBlocks(M,U),A=Ae(),k=0;k<ot.length;k++){var D=ot[k];A.put(D.getMode(),4),A.put(D.getLength(),Lt.getLengthInBits(D.getMode(),M)),D.write(A)}var st=0;for(k=0;k<P.length;k++)st+=P[k].dataCount;if(A.getLengthInBits()<=8*st)break}K=M}Ht(!1,function(){for(var ht=0,Y=0,dt=0;dt<8;dt+=1){Ht(!0,dt);var ft=Lt.getLostPoint(lt);(dt==0||ht>ft)&&(ht=ft,Y=dt)}return Y}())},lt.createTableTag=function(M,P){M=M||2;var A="";A+='<table style="',A+=" border-width: 0px; border-style: none;",A+=" border-collapse: collapse;",A+=" padding: 0px; margin: "+(P=P===void 0?4*M:P)+"px;",A+='">',A+="<tbody>";for(var k=0;k<lt.getModuleCount();k+=1){A+="<tr>";for(var D=0;D<lt.getModuleCount();D+=1)A+='<td style="',A+=" border-width: 0px; border-style: none;",A+=" border-collapse: collapse;",A+=" padding: 0px; margin: 0px;",A+=" width: "+M+"px;",A+=" height: "+M+"px;",A+=" background-color: ",A+=lt.isDark(k,D)?"#000000":"#ffffff",A+=";",A+='"/>';A+="</tr>"}return(A+="</tbody>")+"</table>"},lt.createSvgTag=function(M,P,A,k){var D={};typeof arguments[0]=="object"&&(M=(D=arguments[0]).cellSize,P=D.margin,A=D.alt,k=D.title),M=M||2,P=P===void 0?4*M:P,(A=typeof A=="string"?{text:A}:A||{}).text=A.text||null,A.id=A.text?A.id||"qrcode-description":null,(k=typeof k=="string"?{text:k}:k||{}).text=k.text||null,k.id=k.text?k.id||"qrcode-title":null;var st,ht,Y,dt,ft=lt.getModuleCount()*M+2*P,vt="";for(dt="l"+M+",0 0,"+M+" -"+M+",0 0,-"+M+"z ",vt+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',vt+=D.scalable?"":' width="'+ft+'px" height="'+ft+'px"',vt+=' viewBox="0 0 '+ft+" "+ft+'" ',vt+=' preserveAspectRatio="xMinYMin meet"',vt+=k.text||A.text?' role="img" aria-labelledby="'+H([k.id,A.id].join(" ").trim())+'"':"",vt+=">",vt+=k.text?'<title id="'+H(k.id)+'">'+H(k.text)+"</title>":"",vt+=A.text?'<description id="'+H(A.id)+'">'+H(A.text)+"</description>":"",vt+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',vt+='<path d="',ht=0;ht<lt.getModuleCount();ht+=1)for(Y=ht*M+P,st=0;st<lt.getModuleCount();st+=1)lt.isDark(ht,st)&&(vt+="M"+(st*M+P)+","+Y+dt);return(vt+='" stroke="transparent" fill="black"/>')+"</svg>"},lt.createDataURL=function(M,P){M=M||2,P=P===void 0?4*M:P;var A=lt.getModuleCount()*M+2*P,k=P,D=A-P;return qe(A,A,function(st,ht){if(k<=st&&st<D&&k<=ht&&ht<D){var Y=Math.floor((st-k)/M),dt=Math.floor((ht-k)/M);return lt.isDark(dt,Y)?0:1}return 1})},lt.createImgTag=function(M,P,A){M=M||2,P=P===void 0?4*M:P;var k=lt.getModuleCount()*M+2*P,D="";return D+="<img",D+=' src="',D+=lt.createDataURL(M,P),D+='"',D+=' width="',D+=k,D+='"',D+=' height="',D+=k,D+='"',A&&(D+=' alt="',D+=H(A),D+='"'),D+"/>"};var H=function(M){for(var P="",A=0;A<M.length;A+=1){var k=M.charAt(A);switch(k){case"<":P+="&lt;";break;case">":P+="&gt;";break;case"&":P+="&amp;";break;case'"':P+="&quot;";break;default:P+=k}}return P};return lt.createASCII=function(M,P){if((M=M||1)<2)return function(_t){_t=_t===void 0?2:_t;var gt,bt,re,Ot,At,Vt=1*lt.getModuleCount()+2*_t,Et=_t,zt=Vt-_t,Ut={"██":"█","█ ":"▀"," █":"▄","  ":" "},jt={"██":"▀","█ ":"▀"," █":" ","  ":" "},It="";for(gt=0;gt<Vt;gt+=2){for(re=Math.floor((gt-Et)/1),Ot=Math.floor((gt+1-Et)/1),bt=0;bt<Vt;bt+=1)At="█",Et<=bt&&bt<zt&&Et<=gt&&gt<zt&&lt.isDark(re,Math.floor((bt-Et)/1))&&(At=" "),Et<=bt&&bt<zt&&Et<=gt+1&&gt+1<zt&&lt.isDark(Ot,Math.floor((bt-Et)/1))?At+=" ":At+="█",It+=_t<1&&gt+1>=zt?jt[At]:Ut[At];It+=`
`}return Vt%2&&_t>0?It.substring(0,It.length-Vt-1)+Array(Vt+1).join("▀"):It.substring(0,It.length-1)}(P);M-=1,P=P===void 0?2*M:P;var A,k,D,st,ht=lt.getModuleCount()*M+2*P,Y=P,dt=ht-P,ft=Array(M+1).join("██"),vt=Array(M+1).join("  "),Pt="",ut="";for(A=0;A<ht;A+=1){for(D=Math.floor((A-Y)/M),ut="",k=0;k<ht;k+=1)st=1,Y<=k&&k<dt&&Y<=A&&A<dt&&lt.isDark(D,Math.floor((k-Y)/M))&&(st=0),ut+=st?ft:vt;for(D=0;D<M;D+=1)Pt+=ut+`
`}return Pt.substring(0,Pt.length-1)},lt.renderTo2dContext=function(M,P){P=P||2;for(var A=lt.getModuleCount(),k=0;k<A;k++)for(var D=0;D<A;D++)M.fillStyle=lt.isDark(k,D)?"black":"white",M.fillRect(k*P,D*P,P,P)},lt};Ft.stringToBytes=(Ft.stringToBytesFuncs={default:function(nt){for(var et=[],K=0;K<nt.length;K+=1){var U=nt.charCodeAt(K);et.push(255&U)}return et}}).default,Ft.createStringToBytes=function(nt,et){var K=function(){for(var O=Ee(nt),X=function(){var p=O.read();if(p==-1)throw"eof";return p},J=0,ot={};;){var lt=O.read();if(lt==-1)break;var Ht=X(),j=X()<<8|X();ot[String.fromCharCode(lt<<8|Ht)]=j,J+=1}if(J!=et)throw J+" != "+et;return ot}(),U=63;return function(O){for(var X=[],J=0;J<O.length;J+=1){var ot=O.charCodeAt(J);if(ot<128)X.push(ot);else{var lt=K[O.charAt(J)];typeof lt=="number"?(255&lt)==lt?X.push(lt):(X.push(lt>>>8),X.push(255&lt)):X.push(U)}}return X}};var ne,Gt,de,Tt,Rt,Qt={L:1,M:0,Q:3,H:2},Lt=(ne=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],Gt=1335,de=7973,Rt=function(nt){for(var et=0;nt!=0;)et+=1,nt>>>=1;return et},(Tt={}).getBCHTypeInfo=function(nt){for(var et=nt<<10;Rt(et)-Rt(Gt)>=0;)et^=Gt<<Rt(et)-Rt(Gt);return 21522^(nt<<10|et)},Tt.getBCHTypeNumber=function(nt){for(var et=nt<<12;Rt(et)-Rt(de)>=0;)et^=de<<Rt(et)-Rt(de);return nt<<12|et},Tt.getPatternPosition=function(nt){return ne[nt-1]},Tt.getMaskFunction=function(nt){switch(nt){case 0:return function(et,K){return(et+K)%2==0};case 1:return function(et,K){return et%2==0};case 2:return function(et,K){return K%3==0};case 3:return function(et,K){return(et+K)%3==0};case 4:return function(et,K){return(Math.floor(et/2)+Math.floor(K/3))%2==0};case 5:return function(et,K){return et*K%2+et*K%3==0};case 6:return function(et,K){return(et*K%2+et*K%3)%2==0};case 7:return function(et,K){return(et*K%3+(et+K)%2)%2==0};default:throw"bad maskPattern:"+nt}},Tt.getErrorCorrectPolynomial=function(nt){for(var et=ce([1],0),K=0;K<nt;K+=1)et=et.multiply(ce([1,ie.gexp(K)],0));return et},Tt.getLengthInBits=function(nt,et){if(1<=et&&et<10)switch(nt){case 1:return 10;case 2:return 9;case 4:case 8:return 8;default:throw"mode:"+nt}else if(et<27)switch(nt){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw"mode:"+nt}else{if(!(et<41))throw"type:"+et;switch(nt){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw"mode:"+nt}}},Tt.getLostPoint=function(nt){for(var et=nt.getModuleCount(),K=0,U=0;U<et;U+=1)for(var O=0;O<et;O+=1){for(var X=0,J=nt.isDark(U,O),ot=-1;ot<=1;ot+=1)if(!(U+ot<0||et<=U+ot))for(var lt=-1;lt<=1;lt+=1)O+lt<0||et<=O+lt||ot==0&&lt==0||J==nt.isDark(U+ot,O+lt)&&(X+=1);X>5&&(K+=3+X-5)}for(U=0;U<et-1;U+=1)for(O=0;O<et-1;O+=1){var Ht=0;nt.isDark(U,O)&&(Ht+=1),nt.isDark(U+1,O)&&(Ht+=1),nt.isDark(U,O+1)&&(Ht+=1),nt.isDark(U+1,O+1)&&(Ht+=1),Ht!=0&&Ht!=4||(K+=3)}for(U=0;U<et;U+=1)for(O=0;O<et-6;O+=1)nt.isDark(U,O)&&!nt.isDark(U,O+1)&&nt.isDark(U,O+2)&&nt.isDark(U,O+3)&&nt.isDark(U,O+4)&&!nt.isDark(U,O+5)&&nt.isDark(U,O+6)&&(K+=40);for(O=0;O<et;O+=1)for(U=0;U<et-6;U+=1)nt.isDark(U,O)&&!nt.isDark(U+1,O)&&nt.isDark(U+2,O)&&nt.isDark(U+3,O)&&nt.isDark(U+4,O)&&!nt.isDark(U+5,O)&&nt.isDark(U+6,O)&&(K+=40);var j=0;for(O=0;O<et;O+=1)for(U=0;U<et;U+=1)nt.isDark(U,O)&&(j+=1);return K+Math.abs(100*j/et/et-50)/5*10},Tt),ie=function(){for(var nt=new Array(256),et=new Array(256),K=0;K<8;K+=1)nt[K]=1<<K;for(K=8;K<256;K+=1)nt[K]=nt[K-4]^nt[K-5]^nt[K-6]^nt[K-8];for(K=0;K<255;K+=1)et[nt[K]]=K;return{glog:function(U){if(U<1)throw"glog("+U+")";return et[U]},gexp:function(U){for(;U<0;)U+=255;for(;U>=256;)U-=255;return nt[U]}}}();function ce(nt,et){if(nt.length===void 0)throw nt.length+"/"+et;var K=function(){for(var O=0;O<nt.length&&nt[O]==0;)O+=1;for(var X=new Array(nt.length-O+et),J=0;J<nt.length-O;J+=1)X[J]=nt[J+O];return X}(),U={getAt:function(O){return K[O]},getLength:function(){return K.length},multiply:function(O){for(var X=new Array(U.getLength()+O.getLength()-1),J=0;J<U.getLength();J+=1)for(var ot=0;ot<O.getLength();ot+=1)X[J+ot]^=ie.gexp(ie.glog(U.getAt(J))+ie.glog(O.getAt(ot)));return ce(X,0)},mod:function(O){if(U.getLength()-O.getLength()<0)return U;for(var X=ie.glog(U.getAt(0))-ie.glog(O.getAt(0)),J=new Array(U.getLength()),ot=0;ot<U.getLength();ot+=1)J[ot]=U.getAt(ot);for(ot=0;ot<O.getLength();ot+=1)J[ot]^=ie.gexp(ie.glog(O.getAt(ot))+X);return ce(J,0).mod(O)}};return U}var We=function(){var nt=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],et=function(U,O){var X={};return X.totalCount=U,X.dataCount=O,X},K={getRSBlocks:function(U,O){var X=function(_,x){switch(x){case Qt.L:return nt[4*(_-1)+0];case Qt.M:return nt[4*(_-1)+1];case Qt.Q:return nt[4*(_-1)+2];case Qt.H:return nt[4*(_-1)+3];default:return}}(U,O);if(X===void 0)throw"bad rs block @ typeNumber:"+U+"/errorCorrectionLevel:"+O;for(var J=X.length/3,ot=[],lt=0;lt<J;lt+=1)for(var Ht=X[3*lt+0],j=X[3*lt+1],p=X[3*lt+2],y=0;y<Ht;y+=1)ot.push(et(j,p));return ot}};return K}(),Ae=function(){var nt=[],et=0,K={getBuffer:function(){return nt},getAt:function(U){var O=Math.floor(U/8);return(nt[O]>>>7-U%8&1)==1},put:function(U,O){for(var X=0;X<O;X+=1)K.putBit((U>>>O-X-1&1)==1)},getLengthInBits:function(){return et},putBit:function(U){var O=Math.floor(et/8);nt.length<=O&&nt.push(0),U&&(nt[O]|=128>>>et%8),et+=1}};return K},Ge=function(nt){var et=nt,K={getMode:function(){return 1},getLength:function(X){return et.length},write:function(X){for(var J=et,ot=0;ot+2<J.length;)X.put(U(J.substring(ot,ot+3)),10),ot+=3;ot<J.length&&(J.length-ot==1?X.put(U(J.substring(ot,ot+1)),4):J.length-ot==2&&X.put(U(J.substring(ot,ot+2)),7))}},U=function(X){for(var J=0,ot=0;ot<X.length;ot+=1)J=10*J+O(X.charAt(ot));return J},O=function(X){if("0"<=X&&X<="9")return X.charCodeAt(0)-48;throw"illegal char :"+X};return K},Ue=function(nt){var et=nt,K={getMode:function(){return 2},getLength:function(O){return et.length},write:function(O){for(var X=et,J=0;J+1<X.length;)O.put(45*U(X.charAt(J))+U(X.charAt(J+1)),11),J+=2;J<X.length&&O.put(U(X.charAt(J)),6)}},U=function(O){if("0"<=O&&O<="9")return O.charCodeAt(0)-48;if("A"<=O&&O<="Z")return O.charCodeAt(0)-65+10;switch(O){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+O}};return K},we=function(nt){var et=Ft.stringToBytes(nt);return{getMode:function(){return 4},getLength:function(K){return et.length},write:function(K){for(var U=0;U<et.length;U+=1)K.put(et[U],8)}}},ye=function(nt){var et=Ft.stringToBytesFuncs.SJIS;if(!et)throw"sjis not supported.";(function(U,O){var X=et("友");if(X.length!=2||(X[0]<<8|X[1])!=38726)throw"sjis not supported."})();var K=et(nt);return{getMode:function(){return 8},getLength:function(U){return~~(K.length/2)},write:function(U){for(var O=K,X=0;X+1<O.length;){var J=(255&O[X])<<8|255&O[X+1];if(33088<=J&&J<=40956)J-=33088;else{if(!(57408<=J&&J<=60351))throw"illegal char at "+(X+1)+"/"+J;J-=49472}J=192*(J>>>8&255)+(255&J),U.put(J,13),X+=2}if(X<O.length)throw"illegal char at "+(X+1)}}},Kt=function(){var nt=[],et={writeByte:function(K){nt.push(255&K)},writeShort:function(K){et.writeByte(K),et.writeByte(K>>>8)},writeBytes:function(K,U,O){U=U||0,O=O||K.length;for(var X=0;X<O;X+=1)et.writeByte(K[X+U])},writeString:function(K){for(var U=0;U<K.length;U+=1)et.writeByte(K.charCodeAt(U))},toByteArray:function(){return nt},toString:function(){var K="";K+="[";for(var U=0;U<nt.length;U+=1)U>0&&(K+=","),K+=nt[U];return K+"]"}};return et},Ee=function(nt){var et=nt,K=0,U=0,O=0,X={read:function(){for(;O<8;){if(K>=et.length){if(O==0)return-1;throw"unexpected end of file./"+O}var ot=et.charAt(K);if(K+=1,ot=="=")return O=0,-1;ot.match(/^\s$/)||(U=U<<6|J(ot.charCodeAt(0)),O+=6)}var lt=U>>>O-8&255;return O-=8,lt}},J=function(ot){if(65<=ot&&ot<=90)return ot-65;if(97<=ot&&ot<=122)return ot-97+26;if(48<=ot&&ot<=57)return ot-48+52;if(ot==43)return 62;if(ot==47)return 63;throw"c:"+ot};return X},qe=function(nt,et,K){for(var U=function(j,p){var y=j,_=p,x=new Array(j*p),V={setPixel:function(M,P,A){x[P*y+M]=A},write:function(M){M.writeString("GIF87a"),M.writeShort(y),M.writeShort(_),M.writeByte(128),M.writeByte(0),M.writeByte(0),M.writeByte(0),M.writeByte(0),M.writeByte(0),M.writeByte(255),M.writeByte(255),M.writeByte(255),M.writeString(","),M.writeShort(0),M.writeShort(0),M.writeShort(y),M.writeShort(_),M.writeByte(0);var P=z(2);M.writeByte(2);for(var A=0;P.length-A>255;)M.writeByte(255),M.writeBytes(P,A,255),A+=255;M.writeByte(P.length-A),M.writeBytes(P,A,P.length-A),M.writeByte(0),M.writeString(";")}},z=function(M){for(var P=1<<M,A=1+(1<<M),k=M+1,D=H(),st=0;st<P;st+=1)D.add(String.fromCharCode(st));D.add(String.fromCharCode(P)),D.add(String.fromCharCode(A));var ht,Y,dt,ft=Kt(),vt=(ht=ft,Y=0,dt=0,{write:function(gt,bt){if(gt>>>bt)throw"length over";for(;Y+bt>=8;)ht.writeByte(255&(gt<<Y|dt)),bt-=8-Y,gt>>>=8-Y,dt=0,Y=0;dt|=gt<<Y,Y+=bt},flush:function(){Y>0&&ht.writeByte(dt)}});vt.write(P,k);var Pt=0,ut=String.fromCharCode(x[Pt]);for(Pt+=1;Pt<x.length;){var _t=String.fromCharCode(x[Pt]);Pt+=1,D.contains(ut+_t)?ut+=_t:(vt.write(D.indexOf(ut),k),D.size()<4095&&(D.size()==1<<k&&(k+=1),D.add(ut+_t)),ut=_t)}return vt.write(D.indexOf(ut),k),vt.write(A,k),vt.flush(),ft.toByteArray()},H=function(){var M={},P=0,A={add:function(k){if(A.contains(k))throw"dup key:"+k;M[k]=P,P+=1},size:function(){return P},indexOf:function(k){return M[k]},contains:function(k){return M[k]!==void 0}};return A};return V}(nt,et),O=0;O<et;O+=1)for(var X=0;X<nt;X+=1)U.setPixel(X,O,K(X,O));var J=Kt();U.write(J);for(var ot=function(){var j=0,p=0,y=0,_="",x={},V=function(H){_+=String.fromCharCode(z(63&H))},z=function(H){if(!(H<0)){if(H<26)return 65+H;if(H<52)return H-26+97;if(H<62)return H-52+48;if(H==62)return 43;if(H==63)return 47}throw"n:"+H};return x.writeByte=function(H){for(j=j<<8|255&H,p+=8,y+=1;p>=6;)V(j>>>p-6),p-=6},x.flush=function(){if(p>0&&(V(j<<6-p),j=0,p=0),y%3!=0)for(var H=3-y%3,M=0;M<H;M+=1)_+="="},x.toString=function(){return _},x}(),lt=J.toByteArray(),Ht=0;Ht<lt.length;Ht+=1)ot.writeByte(lt[Ht]);return ot.flush(),"data:image/gif;base64,"+ot};return Ft}();ve.stringToBytesFuncs["UTF-8"]=function(Ft){return function(ne){for(var Gt=[],de=0;de<ne.length;de++){var Tt=ne.charCodeAt(de);Tt<128?Gt.push(Tt):Tt<2048?Gt.push(192|Tt>>6,128|63&Tt):Tt<55296||Tt>=57344?Gt.push(224|Tt>>12,128|Tt>>6&63,128|63&Tt):(de++,Tt=65536+((1023&Tt)<<10|1023&ne.charCodeAt(de)),Gt.push(240|Tt>>18,128|Tt>>12&63,128|Tt>>6&63,128|63&Tt))}return Gt}(Ft)},(Dt=typeof(Nt=function(){return ve})=="function"?Nt.apply(kt,[]):Nt)===void 0||(Ct.exports=Dt)},676:(Ct,kt,Nt)=>{Nt.d(kt,{default:()=>Ht});var Dt=function(){return(Dt=Object.assign||function(j){for(var p,y=1,_=arguments.length;y<_;y++)for(var x in p=arguments[y])Object.prototype.hasOwnProperty.call(p,x)&&(j[x]=p[x]);return j}).apply(this,arguments)},ve=function(){for(var j=0,p=0,y=arguments.length;p<y;p++)j+=arguments[p].length;var _=Array(j),x=0;for(p=0;p<y;p++)for(var V=arguments[p],z=0,H=V.length;z<H;z++,x++)_[x]=V[z];return _},Ft=function(j){return!!j&&typeof j=="object"&&!Array.isArray(j)};function ne(j){for(var p=[],y=1;y<arguments.length;y++)p[y-1]=arguments[y];if(!p.length)return j;var _=p.shift();return _!==void 0&&Ft(j)&&Ft(_)?(j=Dt({},j),Object.keys(_).forEach(function(x){var V=j[x],z=_[x];Array.isArray(V)&&Array.isArray(z)?j[x]=z:Ft(V)&&Ft(z)?j[x]=ne(Object.assign({},V),z):j[x]=z}),ne.apply(void 0,ve([j],p))):j}function Gt(j,p){var y=document.createElement("a");y.download=p,y.href=j,document.body.appendChild(y),y.click(),document.body.removeChild(y)}function de(j){return p=this,y=void 0,x=function(){return function(V,z){var H,M,P,A,k={label:0,sent:function(){if(1&P[0])throw P[1];return P[1]},trys:[],ops:[]};return A={next:D(0),throw:D(1),return:D(2)},typeof Symbol=="function"&&(A[Symbol.iterator]=function(){return this}),A;function D(st){return function(ht){return function(Y){if(H)throw new TypeError("Generator is already executing.");for(;k;)try{if(H=1,M&&(P=2&Y[0]?M.return:Y[0]?M.throw||((P=M.return)&&P.call(M),0):M.next)&&!(P=P.call(M,Y[1])).done)return P;switch(M=0,P&&(Y=[2&Y[0],P.value]),Y[0]){case 0:case 1:P=Y;break;case 4:return k.label++,{value:Y[1],done:!1};case 5:k.label++,M=Y[1],Y=[0];continue;case 7:Y=k.ops.pop(),k.trys.pop();continue;default:if(!((P=(P=k.trys).length>0&&P[P.length-1])||Y[0]!==6&&Y[0]!==2)){k=0;continue}if(Y[0]===3&&(!P||Y[1]>P[0]&&Y[1]<P[3])){k.label=Y[1];break}if(Y[0]===6&&k.label<P[1]){k.label=P[1],P=Y;break}if(P&&k.label<P[2]){k.label=P[2],k.ops.push(Y);break}P[2]&&k.ops.pop(),k.trys.pop();continue}Y=z.call(V,k)}catch(dt){Y=[6,dt],M=0}finally{H=P=0}if(5&Y[0])throw Y[1];return{value:Y[0]?Y[1]:void 0,done:!0}}([st,ht])}}}(this,function(V){return[2,new Promise(function(z){var H=new XMLHttpRequest;H.onload=function(){var M=new FileReader;M.onloadend=function(){z(M.result)},M.readAsDataURL(H.response)},H.open("GET",j),H.responseType="blob",H.send()})]})},new((_=void 0)||(_=Promise))(function(V,z){function H(A){try{P(x.next(A))}catch(k){z(k)}}function M(A){try{P(x.throw(A))}catch(k){z(k)}}function P(A){var k;A.done?V(A.value):(k=A.value,k instanceof _?k:new _(function(D){D(k)})).then(H,M)}P((x=x.apply(p,y||[])).next())});var p,y,_,x}const Tt={L:.07,M:.15,Q:.25,H:.3};var Rt=function(){return(Rt=Object.assign||function(j){for(var p,y=1,_=arguments.length;y<_;y++)for(var x in p=arguments[y])Object.prototype.hasOwnProperty.call(p,x)&&(j[x]=p[x]);return j}).apply(this,arguments)};const Qt=function(){function j(p){var y=p.svg,_=p.type;this._svg=y,this._type=_}return j.prototype.draw=function(p,y,_,x){var V;switch(this._type){case"dots":V=this._drawDot;break;case"classy":V=this._drawClassy;break;case"classy-rounded":V=this._drawClassyRounded;break;case"rounded":V=this._drawRounded;break;case"extra-rounded":V=this._drawExtraRounded;break;case"square":default:V=this._drawSquare}V.call(this,{x:p,y,size:_,getNeighbor:x})},j.prototype._rotateFigure=function(p){var y,_=p.x,x=p.y,V=p.size,z=p.rotation,H=z===void 0?0:z,M=_+V/2,P=x+V/2;(0,p.draw)(),(y=this._element)===null||y===void 0||y.setAttribute("transform","rotate("+180*H/Math.PI+","+M+","+P+")")},j.prototype._basicDot=function(p){var y=this,_=p.size,x=p.x,V=p.y;this._rotateFigure(Rt(Rt({},p),{draw:function(){y._element=document.createElementNS("http://www.w3.org/2000/svg","circle"),y._element.setAttribute("cx",String(x+_/2)),y._element.setAttribute("cy",String(V+_/2)),y._element.setAttribute("r",String(_/2))}}))},j.prototype._basicSquare=function(p){var y=this,_=p.size,x=p.x,V=p.y;this._rotateFigure(Rt(Rt({},p),{draw:function(){y._element=document.createElementNS("http://www.w3.org/2000/svg","rect"),y._element.setAttribute("x",String(x)),y._element.setAttribute("y",String(V)),y._element.setAttribute("width",String(_)),y._element.setAttribute("height",String(_))}}))},j.prototype._basicSideRounded=function(p){var y=this,_=p.size,x=p.x,V=p.y;this._rotateFigure(Rt(Rt({},p),{draw:function(){y._element=document.createElementNS("http://www.w3.org/2000/svg","path"),y._element.setAttribute("d","M "+x+" "+V+"v "+_+"h "+_/2+"a "+_/2+" "+_/2+", 0, 0, 0, 0 "+-_)}}))},j.prototype._basicCornerRounded=function(p){var y=this,_=p.size,x=p.x,V=p.y;this._rotateFigure(Rt(Rt({},p),{draw:function(){y._element=document.createElementNS("http://www.w3.org/2000/svg","path"),y._element.setAttribute("d","M "+x+" "+V+"v "+_+"h "+_+"v "+-_/2+"a "+_/2+" "+_/2+", 0, 0, 0, "+-_/2+" "+-_/2)}}))},j.prototype._basicCornerExtraRounded=function(p){var y=this,_=p.size,x=p.x,V=p.y;this._rotateFigure(Rt(Rt({},p),{draw:function(){y._element=document.createElementNS("http://www.w3.org/2000/svg","path"),y._element.setAttribute("d","M "+x+" "+V+"v "+_+"h "+_+"a "+_+" "+_+", 0, 0, 0, "+-_+" "+-_)}}))},j.prototype._basicCornersRounded=function(p){var y=this,_=p.size,x=p.x,V=p.y;this._rotateFigure(Rt(Rt({},p),{draw:function(){y._element=document.createElementNS("http://www.w3.org/2000/svg","path"),y._element.setAttribute("d","M "+x+" "+V+"v "+_/2+"a "+_/2+" "+_/2+", 0, 0, 0, "+_/2+" "+_/2+"h "+_/2+"v "+-_/2+"a "+_/2+" "+_/2+", 0, 0, 0, "+-_/2+" "+-_/2)}}))},j.prototype._drawDot=function(p){var y=p.x,_=p.y,x=p.size;this._basicDot({x:y,y:_,size:x,rotation:0})},j.prototype._drawSquare=function(p){var y=p.x,_=p.y,x=p.size;this._basicSquare({x:y,y:_,size:x,rotation:0})},j.prototype._drawRounded=function(p){var y=p.x,_=p.y,x=p.size,V=p.getNeighbor,z=V?+V(-1,0):0,H=V?+V(1,0):0,M=V?+V(0,-1):0,P=V?+V(0,1):0,A=z+H+M+P;if(A!==0)if(A>2||z&&H||M&&P)this._basicSquare({x:y,y:_,size:x,rotation:0});else{if(A===2){var k=0;return z&&M?k=Math.PI/2:M&&H?k=Math.PI:H&&P&&(k=-Math.PI/2),void this._basicCornerRounded({x:y,y:_,size:x,rotation:k})}if(A===1)return k=0,M?k=Math.PI/2:H?k=Math.PI:P&&(k=-Math.PI/2),void this._basicSideRounded({x:y,y:_,size:x,rotation:k})}else this._basicDot({x:y,y:_,size:x,rotation:0})},j.prototype._drawExtraRounded=function(p){var y=p.x,_=p.y,x=p.size,V=p.getNeighbor,z=V?+V(-1,0):0,H=V?+V(1,0):0,M=V?+V(0,-1):0,P=V?+V(0,1):0,A=z+H+M+P;if(A!==0)if(A>2||z&&H||M&&P)this._basicSquare({x:y,y:_,size:x,rotation:0});else{if(A===2){var k=0;return z&&M?k=Math.PI/2:M&&H?k=Math.PI:H&&P&&(k=-Math.PI/2),void this._basicCornerExtraRounded({x:y,y:_,size:x,rotation:k})}if(A===1)return k=0,M?k=Math.PI/2:H?k=Math.PI:P&&(k=-Math.PI/2),void this._basicSideRounded({x:y,y:_,size:x,rotation:k})}else this._basicDot({x:y,y:_,size:x,rotation:0})},j.prototype._drawClassy=function(p){var y=p.x,_=p.y,x=p.size,V=p.getNeighbor,z=V?+V(-1,0):0,H=V?+V(1,0):0,M=V?+V(0,-1):0,P=V?+V(0,1):0;z+H+M+P!==0?z||M?H||P?this._basicSquare({x:y,y:_,size:x,rotation:0}):this._basicCornerRounded({x:y,y:_,size:x,rotation:Math.PI/2}):this._basicCornerRounded({x:y,y:_,size:x,rotation:-Math.PI/2}):this._basicCornersRounded({x:y,y:_,size:x,rotation:Math.PI/2})},j.prototype._drawClassyRounded=function(p){var y=p.x,_=p.y,x=p.size,V=p.getNeighbor,z=V?+V(-1,0):0,H=V?+V(1,0):0,M=V?+V(0,-1):0,P=V?+V(0,1):0;z+H+M+P!==0?z||M?H||P?this._basicSquare({x:y,y:_,size:x,rotation:0}):this._basicCornerExtraRounded({x:y,y:_,size:x,rotation:Math.PI/2}):this._basicCornerExtraRounded({x:y,y:_,size:x,rotation:-Math.PI/2}):this._basicCornersRounded({x:y,y:_,size:x,rotation:Math.PI/2})},j}();var Lt=function(){return(Lt=Object.assign||function(j){for(var p,y=1,_=arguments.length;y<_;y++)for(var x in p=arguments[y])Object.prototype.hasOwnProperty.call(p,x)&&(j[x]=p[x]);return j}).apply(this,arguments)};const ie=function(){function j(p){var y=p.svg,_=p.type;this._svg=y,this._type=_}return j.prototype.draw=function(p,y,_,x){var V;switch(this._type){case"square":V=this._drawSquare;break;case"extra-rounded":V=this._drawExtraRounded;break;case"dot":default:V=this._drawDot}V.call(this,{x:p,y,size:_,rotation:x})},j.prototype._rotateFigure=function(p){var y,_=p.x,x=p.y,V=p.size,z=p.rotation,H=z===void 0?0:z,M=_+V/2,P=x+V/2;(0,p.draw)(),(y=this._element)===null||y===void 0||y.setAttribute("transform","rotate("+180*H/Math.PI+","+M+","+P+")")},j.prototype._basicDot=function(p){var y=this,_=p.size,x=p.x,V=p.y,z=_/7;this._rotateFigure(Lt(Lt({},p),{draw:function(){y._element=document.createElementNS("http://www.w3.org/2000/svg","path"),y._element.setAttribute("clip-rule","evenodd"),y._element.setAttribute("d","M "+(x+_/2)+" "+V+"a "+_/2+" "+_/2+" 0 1 0 0.1 0zm 0 "+z+"a "+(_/2-z)+" "+(_/2-z)+" 0 1 1 -0.1 0Z")}}))},j.prototype._basicSquare=function(p){var y=this,_=p.size,x=p.x,V=p.y,z=_/7;this._rotateFigure(Lt(Lt({},p),{draw:function(){y._element=document.createElementNS("http://www.w3.org/2000/svg","path"),y._element.setAttribute("clip-rule","evenodd"),y._element.setAttribute("d","M "+x+" "+V+"v "+_+"h "+_+"v "+-_+"zM "+(x+z)+" "+(V+z)+"h "+(_-2*z)+"v "+(_-2*z)+"h "+(2*z-_)+"z")}}))},j.prototype._basicExtraRounded=function(p){var y=this,_=p.size,x=p.x,V=p.y,z=_/7;this._rotateFigure(Lt(Lt({},p),{draw:function(){y._element=document.createElementNS("http://www.w3.org/2000/svg","path"),y._element.setAttribute("clip-rule","evenodd"),y._element.setAttribute("d","M "+x+" "+(V+2.5*z)+"v "+2*z+"a "+2.5*z+" "+2.5*z+", 0, 0, 0, "+2.5*z+" "+2.5*z+"h "+2*z+"a "+2.5*z+" "+2.5*z+", 0, 0, 0, "+2.5*z+" "+2.5*-z+"v "+-2*z+"a "+2.5*z+" "+2.5*z+", 0, 0, 0, "+2.5*-z+" "+2.5*-z+"h "+-2*z+"a "+2.5*z+" "+2.5*z+", 0, 0, 0, "+2.5*-z+" "+2.5*z+"M "+(x+2.5*z)+" "+(V+z)+"h "+2*z+"a "+1.5*z+" "+1.5*z+", 0, 0, 1, "+1.5*z+" "+1.5*z+"v "+2*z+"a "+1.5*z+" "+1.5*z+", 0, 0, 1, "+1.5*-z+" "+1.5*z+"h "+-2*z+"a "+1.5*z+" "+1.5*z+", 0, 0, 1, "+1.5*-z+" "+1.5*-z+"v "+-2*z+"a "+1.5*z+" "+1.5*z+", 0, 0, 1, "+1.5*z+" "+1.5*-z)}}))},j.prototype._drawDot=function(p){var y=p.x,_=p.y,x=p.size,V=p.rotation;this._basicDot({x:y,y:_,size:x,rotation:V})},j.prototype._drawSquare=function(p){var y=p.x,_=p.y,x=p.size,V=p.rotation;this._basicSquare({x:y,y:_,size:x,rotation:V})},j.prototype._drawExtraRounded=function(p){var y=p.x,_=p.y,x=p.size,V=p.rotation;this._basicExtraRounded({x:y,y:_,size:x,rotation:V})},j}();var ce=function(){return(ce=Object.assign||function(j){for(var p,y=1,_=arguments.length;y<_;y++)for(var x in p=arguments[y])Object.prototype.hasOwnProperty.call(p,x)&&(j[x]=p[x]);return j}).apply(this,arguments)};const We=function(){function j(p){var y=p.svg,_=p.type;this._svg=y,this._type=_}return j.prototype.draw=function(p,y,_,x){var V;switch(this._type){case"square":V=this._drawSquare;break;case"dot":default:V=this._drawDot}V.call(this,{x:p,y,size:_,rotation:x})},j.prototype._rotateFigure=function(p){var y,_=p.x,x=p.y,V=p.size,z=p.rotation,H=z===void 0?0:z,M=_+V/2,P=x+V/2;(0,p.draw)(),(y=this._element)===null||y===void 0||y.setAttribute("transform","rotate("+180*H/Math.PI+","+M+","+P+")")},j.prototype._basicDot=function(p){var y=this,_=p.size,x=p.x,V=p.y;this._rotateFigure(ce(ce({},p),{draw:function(){y._element=document.createElementNS("http://www.w3.org/2000/svg","circle"),y._element.setAttribute("cx",String(x+_/2)),y._element.setAttribute("cy",String(V+_/2)),y._element.setAttribute("r",String(_/2))}}))},j.prototype._basicSquare=function(p){var y=this,_=p.size,x=p.x,V=p.y;this._rotateFigure(ce(ce({},p),{draw:function(){y._element=document.createElementNS("http://www.w3.org/2000/svg","rect"),y._element.setAttribute("x",String(x)),y._element.setAttribute("y",String(V)),y._element.setAttribute("width",String(_)),y._element.setAttribute("height",String(_))}}))},j.prototype._drawDot=function(p){var y=p.x,_=p.y,x=p.size,V=p.rotation;this._basicDot({x:y,y:_,size:x,rotation:V})},j.prototype._drawSquare=function(p){var y=p.x,_=p.y,x=p.size,V=p.rotation;this._basicSquare({x:y,y:_,size:x,rotation:V})},j}(),Ae="circle";var Ge=function(j,p,y,_){return new(y||(y=Promise))(function(x,V){function z(P){try{M(_.next(P))}catch(A){V(A)}}function H(P){try{M(_.throw(P))}catch(A){V(A)}}function M(P){var A;P.done?x(P.value):(A=P.value,A instanceof y?A:new y(function(k){k(A)})).then(z,H)}M((_=_.apply(j,[])).next())})},Ue=function(j,p){var y,_,x,V,z={label:0,sent:function(){if(1&x[0])throw x[1];return x[1]},trys:[],ops:[]};return V={next:H(0),throw:H(1),return:H(2)},typeof Symbol=="function"&&(V[Symbol.iterator]=function(){return this}),V;function H(M){return function(P){return function(A){if(y)throw new TypeError("Generator is already executing.");for(;z;)try{if(y=1,_&&(x=2&A[0]?_.return:A[0]?_.throw||((x=_.return)&&x.call(_),0):_.next)&&!(x=x.call(_,A[1])).done)return x;switch(_=0,x&&(A=[2&A[0],x.value]),A[0]){case 0:case 1:x=A;break;case 4:return z.label++,{value:A[1],done:!1};case 5:z.label++,_=A[1],A=[0];continue;case 7:A=z.ops.pop(),z.trys.pop();continue;default:if(!((x=(x=z.trys).length>0&&x[x.length-1])||A[0]!==6&&A[0]!==2)){z=0;continue}if(A[0]===3&&(!x||A[1]>x[0]&&A[1]<x[3])){z.label=A[1];break}if(A[0]===6&&z.label<x[1]){z.label=x[1],x=A;break}if(x&&z.label<x[2]){z.label=x[2],z.ops.push(A);break}x[2]&&z.ops.pop(),z.trys.pop();continue}A=p.call(j,z)}catch(k){A=[6,k],_=0}finally{y=x=0}if(5&A[0])throw A[1];return{value:A[0]?A[1]:void 0,done:!0}}([M,P])}}},we=[[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]],ye=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];const Kt=function(){function j(p){this._element=document.createElementNS("http://www.w3.org/2000/svg","svg"),this._element.setAttribute("width",String(p.width)),this._element.setAttribute("height",String(p.height)),this._defs=document.createElementNS("http://www.w3.org/2000/svg","defs"),this._element.appendChild(this._defs),this._options=p}return Object.defineProperty(j.prototype,"width",{get:function(){return this._options.width},enumerable:!1,configurable:!0}),Object.defineProperty(j.prototype,"height",{get:function(){return this._options.height},enumerable:!1,configurable:!0}),j.prototype.getElement=function(){return this._element},j.prototype.drawQR=function(p){return Ge(this,void 0,void 0,function(){var y,_,x,V,z,H,M,P,A,k,D=this;return Ue(this,function(st){switch(st.label){case 0:return y=p.getModuleCount(),_=Math.min(this._options.width,this._options.height)-2*this._options.margin,x=this._options.shape===Ae?_/Math.sqrt(2):_,V=Math.floor(x/y),z={hideXDots:0,hideYDots:0,width:0,height:0},this._qr=p,this._options.image?[4,this.loadImage()]:[3,2];case 1:if(st.sent(),!this._image)return[2];H=this._options,M=H.imageOptions,P=H.qrOptions,A=M.imageSize*Tt[P.errorCorrectionLevel],k=Math.floor(A*y*y),z=function(ht){var Y=ht.originalHeight,dt=ht.originalWidth,ft=ht.maxHiddenDots,vt=ht.maxHiddenAxisDots,Pt=ht.dotSize,ut={x:0,y:0},_t={x:0,y:0};if(Y<=0||dt<=0||ft<=0||Pt<=0)return{height:0,width:0,hideYDots:0,hideXDots:0};var gt=Y/dt;return ut.x=Math.floor(Math.sqrt(ft/gt)),ut.x<=0&&(ut.x=1),vt&&vt<ut.x&&(ut.x=vt),ut.x%2==0&&ut.x--,_t.x=ut.x*Pt,ut.y=1+2*Math.ceil((ut.x*gt-1)/2),_t.y=Math.round(_t.x*gt),(ut.y*ut.x>ft||vt&&vt<ut.y)&&(vt&&vt<ut.y?(ut.y=vt,ut.y%2==0&&ut.x--):ut.y-=2,_t.y=ut.y*Pt,ut.x=1+2*Math.ceil((ut.y/gt-1)/2),_t.x=Math.round(_t.y/gt)),{height:_t.y,width:_t.x,hideYDots:ut.y,hideXDots:ut.x}}({originalWidth:this._image.width,originalHeight:this._image.height,maxHiddenDots:k,maxHiddenAxisDots:y-14,dotSize:V}),st.label=2;case 2:return this.drawBackground(),this.drawDots(function(ht,Y){var dt,ft,vt,Pt,ut,_t;return!(D._options.imageOptions.hideBackgroundDots&&ht>=(y-z.hideXDots)/2&&ht<(y+z.hideXDots)/2&&Y>=(y-z.hideYDots)/2&&Y<(y+z.hideYDots)/2||!((dt=we[ht])===null||dt===void 0)&&dt[Y]||!((ft=we[ht-y+7])===null||ft===void 0)&&ft[Y]||!((vt=we[ht])===null||vt===void 0)&&vt[Y-y+7]||!((Pt=ye[ht])===null||Pt===void 0)&&Pt[Y]||!((ut=ye[ht-y+7])===null||ut===void 0)&&ut[Y]||!((_t=ye[ht])===null||_t===void 0)&&_t[Y-y+7])}),this.drawCorners(),this._options.image?[4,this.drawImage({width:z.width,height:z.height,count:y,dotSize:V})]:[3,4];case 3:st.sent(),st.label=4;case 4:return[2]}})})},j.prototype.drawBackground=function(){var p,y,_,x=this._element,V=this._options;if(x){var z=(p=V.backgroundOptions)===null||p===void 0?void 0:p.gradient,H=(y=V.backgroundOptions)===null||y===void 0?void 0:y.color;if((z||H)&&this._createColor({options:z,color:H,additionalRotation:0,x:0,y:0,height:V.height,width:V.width,name:"background-color"}),(_=V.backgroundOptions)===null||_===void 0?void 0:_.round){var M=Math.min(V.width,V.height),P=document.createElementNS("http://www.w3.org/2000/svg","rect");this._backgroundClipPath=document.createElementNS("http://www.w3.org/2000/svg","clipPath"),this._backgroundClipPath.setAttribute("id","clip-path-background-color"),this._defs.appendChild(this._backgroundClipPath),P.setAttribute("x",String((V.width-M)/2)),P.setAttribute("y",String((V.height-M)/2)),P.setAttribute("width",String(M)),P.setAttribute("height",String(M)),P.setAttribute("rx",String(M/2*V.backgroundOptions.round)),this._backgroundClipPath.appendChild(P)}}},j.prototype.drawDots=function(p){var y,_,x=this;if(!this._qr)throw"QR code is not defined";var V=this._options,z=this._qr.getModuleCount();if(z>V.width||z>V.height)throw"The canvas is too small.";var H=Math.min(V.width,V.height)-2*V.margin,M=V.shape===Ae?H/Math.sqrt(2):H,P=Math.floor(M/z),A=Math.floor((V.width-z*P)/2),k=Math.floor((V.height-z*P)/2),D=new Qt({svg:this._element,type:V.dotsOptions.type});this._dotsClipPath=document.createElementNS("http://www.w3.org/2000/svg","clipPath"),this._dotsClipPath.setAttribute("id","clip-path-dot-color"),this._defs.appendChild(this._dotsClipPath),this._createColor({options:(y=V.dotsOptions)===null||y===void 0?void 0:y.gradient,color:V.dotsOptions.color,additionalRotation:0,x:0,y:0,height:V.height,width:V.width,name:"dot-color"});for(var st=function(Ot){for(var At=function(Et){return p&&!p(Ot,Et)?"continue":!((_=ht._qr)===null||_===void 0)&&_.isDark(Ot,Et)?(D.draw(A+Ot*P,k+Et*P,P,function(zt,Ut){return!(Ot+zt<0||Et+Ut<0||Ot+zt>=z||Et+Ut>=z)&&!(p&&!p(Ot+zt,Et+Ut))&&!!x._qr&&x._qr.isDark(Ot+zt,Et+Ut)}),void(D._element&&ht._dotsClipPath&&ht._dotsClipPath.appendChild(D._element))):"continue"},Vt=0;Vt<z;Vt++)At(Vt)},ht=this,Y=0;Y<z;Y++)st(Y);if(V.shape===Ae){var dt=Math.floor((H/P-z)/2),ft=z+2*dt,vt=A-dt*P,Pt=k-dt*P,ut=[],_t=Math.floor(ft/2);for(Y=0;Y<ft;Y++){ut[Y]=[];for(var gt=0;gt<ft;gt++)Y>=dt-1&&Y<=ft-dt&&gt>=dt-1&&gt<=ft-dt||Math.sqrt((Y-_t)*(Y-_t)+(gt-_t)*(gt-_t))>_t?ut[Y][gt]=0:ut[Y][gt]=this._qr.isDark(gt-2*dt<0?gt:gt>=z?gt-2*dt:gt-dt,Y-2*dt<0?Y:Y>=z?Y-2*dt:Y-dt)?1:0}var bt=function(Ot){for(var At=function(Et){if(!ut[Ot][Et])return"continue";D.draw(vt+Ot*P,Pt+Et*P,P,function(zt,Ut){var jt;return!!(!((jt=ut[Ot+zt])===null||jt===void 0)&&jt[Et+Ut])}),D._element&&re._dotsClipPath&&re._dotsClipPath.appendChild(D._element)},Vt=0;Vt<ft;Vt++)At(Vt)},re=this;for(Y=0;Y<ft;Y++)bt(Y)}},j.prototype.drawCorners=function(){var p=this;if(!this._qr)throw"QR code is not defined";var y=this._element,_=this._options;if(!y)throw"Element code is not defined";var x=this._qr.getModuleCount(),V=Math.min(_.width,_.height)-2*_.margin,z=_.shape===Ae?V/Math.sqrt(2):V,H=Math.floor(z/x),M=7*H,P=3*H,A=Math.floor((_.width-x*H)/2),k=Math.floor((_.height-x*H)/2);[[0,0,0],[1,0,Math.PI/2],[0,1,-Math.PI/2]].forEach(function(D){var st,ht,Y,dt,ft,vt,Pt,ut,_t,gt,bt,re,Ot=D[0],At=D[1],Vt=D[2],Et=A+Ot*H*(x-7),zt=k+At*H*(x-7),Ut=p._dotsClipPath,jt=p._dotsClipPath;if((!((st=_.cornersSquareOptions)===null||st===void 0)&&st.gradient||!((ht=_.cornersSquareOptions)===null||ht===void 0)&&ht.color)&&((Ut=document.createElementNS("http://www.w3.org/2000/svg","clipPath")).setAttribute("id","clip-path-corners-square-color-"+Ot+"-"+At),p._defs.appendChild(Ut),p._cornersSquareClipPath=p._cornersDotClipPath=jt=Ut,p._createColor({options:(Y=_.cornersSquareOptions)===null||Y===void 0?void 0:Y.gradient,color:(dt=_.cornersSquareOptions)===null||dt===void 0?void 0:dt.color,additionalRotation:Vt,x:Et,y:zt,height:M,width:M,name:"corners-square-color-"+Ot+"-"+At})),(ft=_.cornersSquareOptions)===null||ft===void 0?void 0:ft.type){var It=new ie({svg:p._element,type:_.cornersSquareOptions.type});It.draw(Et,zt,M,Vt),It._element&&Ut&&Ut.appendChild(It._element)}else for(var Fe=new Qt({svg:p._element,type:_.dotsOptions.type}),Ke=function(se){for(var Je=function(Te){if(!(!((vt=we[se])===null||vt===void 0)&&vt[Te]))return"continue";Fe.draw(Et+se*H,zt+Te*H,H,function(Jt,Wt){var le;return!!(!((le=we[se+Jt])===null||le===void 0)&&le[Te+Wt])}),Fe._element&&Ut&&Ut.appendChild(Fe._element)},Se=0;Se<we[se].length;Se++)Je(Se)},Me=0;Me<we.length;Me++)Ke(Me);if((!((Pt=_.cornersDotOptions)===null||Pt===void 0)&&Pt.gradient||!((ut=_.cornersDotOptions)===null||ut===void 0)&&ut.color)&&((jt=document.createElementNS("http://www.w3.org/2000/svg","clipPath")).setAttribute("id","clip-path-corners-dot-color-"+Ot+"-"+At),p._defs.appendChild(jt),p._cornersDotClipPath=jt,p._createColor({options:(_t=_.cornersDotOptions)===null||_t===void 0?void 0:_t.gradient,color:(gt=_.cornersDotOptions)===null||gt===void 0?void 0:gt.color,additionalRotation:Vt,x:Et+2*H,y:zt+2*H,height:P,width:P,name:"corners-dot-color-"+Ot+"-"+At})),(bt=_.cornersDotOptions)===null||bt===void 0?void 0:bt.type){var _e=new We({svg:p._element,type:_.cornersDotOptions.type});_e.draw(Et+2*H,zt+2*H,P,Vt),_e._element&&jt&&jt.appendChild(_e._element)}else{Fe=new Qt({svg:p._element,type:_.dotsOptions.type});var ae=function(se){for(var Je=function(Te){if(!(!((re=ye[se])===null||re===void 0)&&re[Te]))return"continue";Fe.draw(Et+se*H,zt+Te*H,H,function(Jt,Wt){var le;return!!(!((le=ye[se+Jt])===null||le===void 0)&&le[Te+Wt])}),Fe._element&&jt&&jt.appendChild(Fe._element)},Se=0;Se<ye[se].length;Se++)Je(Se)};for(Me=0;Me<ye.length;Me++)ae(Me)}})},j.prototype.loadImage=function(){var p=this;return new Promise(function(y,_){var x=p._options,V=new Image;if(!x.image)return _("Image is not defined");typeof x.imageOptions.crossOrigin=="string"&&(V.crossOrigin=x.imageOptions.crossOrigin),p._image=V,V.onload=function(){y()},V.src=x.image})},j.prototype.drawImage=function(p){var y=p.width,_=p.height,x=p.count,V=p.dotSize;return Ge(this,void 0,void 0,function(){var z,H,M,P,A,k,D,st,ht;return Ue(this,function(Y){switch(Y.label){case 0:return z=this._options,H=Math.floor((z.width-x*V)/2),M=Math.floor((z.height-x*V)/2),P=H+z.imageOptions.margin+(x*V-y)/2,A=M+z.imageOptions.margin+(x*V-_)/2,k=y-2*z.imageOptions.margin,D=_-2*z.imageOptions.margin,(st=document.createElementNS("http://www.w3.org/2000/svg","image")).setAttribute("x",String(P)),st.setAttribute("y",String(A)),st.setAttribute("width",k+"px"),st.setAttribute("height",D+"px"),[4,de(z.image||"")];case 1:return ht=Y.sent(),st.setAttribute("href",ht||""),this._element.appendChild(st),[2]}})})},j.prototype._createColor=function(p){var y=p.options,_=p.color,x=p.additionalRotation,V=p.x,z=p.y,H=p.height,M=p.width,P=p.name,A=M>H?M:H,k=document.createElementNS("http://www.w3.org/2000/svg","rect");if(k.setAttribute("x",String(V)),k.setAttribute("y",String(z)),k.setAttribute("height",String(H)),k.setAttribute("width",String(M)),k.setAttribute("clip-path","url('#clip-path-"+P+"')"),y){var D;if(y.type==="radial")(D=document.createElementNS("http://www.w3.org/2000/svg","radialGradient")).setAttribute("id",P),D.setAttribute("gradientUnits","userSpaceOnUse"),D.setAttribute("fx",String(V+M/2)),D.setAttribute("fy",String(z+H/2)),D.setAttribute("cx",String(V+M/2)),D.setAttribute("cy",String(z+H/2)),D.setAttribute("r",String(A/2));else{var st=((y.rotation||0)+x)%(2*Math.PI),ht=(st+2*Math.PI)%(2*Math.PI),Y=V+M/2,dt=z+H/2,ft=V+M/2,vt=z+H/2;ht>=0&&ht<=.25*Math.PI||ht>1.75*Math.PI&&ht<=2*Math.PI?(Y-=M/2,dt-=H/2*Math.tan(st),ft+=M/2,vt+=H/2*Math.tan(st)):ht>.25*Math.PI&&ht<=.75*Math.PI?(dt-=H/2,Y-=M/2/Math.tan(st),vt+=H/2,ft+=M/2/Math.tan(st)):ht>.75*Math.PI&&ht<=1.25*Math.PI?(Y+=M/2,dt+=H/2*Math.tan(st),ft-=M/2,vt-=H/2*Math.tan(st)):ht>1.25*Math.PI&&ht<=1.75*Math.PI&&(dt+=H/2,Y+=M/2/Math.tan(st),vt-=H/2,ft-=M/2/Math.tan(st)),(D=document.createElementNS("http://www.w3.org/2000/svg","linearGradient")).setAttribute("id",P),D.setAttribute("gradientUnits","userSpaceOnUse"),D.setAttribute("x1",String(Math.round(Y))),D.setAttribute("y1",String(Math.round(dt))),D.setAttribute("x2",String(Math.round(ft))),D.setAttribute("y2",String(Math.round(vt)))}y.colorStops.forEach(function(Pt){var ut=Pt.offset,_t=Pt.color,gt=document.createElementNS("http://www.w3.org/2000/svg","stop");gt.setAttribute("offset",100*ut+"%"),gt.setAttribute("stop-color",_t),D.appendChild(gt)}),k.setAttribute("fill","url('#"+P+"')"),this._defs.appendChild(D)}else _&&k.setAttribute("fill",_);this._element.appendChild(k)},j}(),Ee="canvas";for(var qe={},nt=0;nt<=40;nt++)qe[nt]=nt;const et={type:Ee,shape:"square",width:300,height:300,data:"",margin:0,qrOptions:{typeNumber:qe[0],mode:void 0,errorCorrectionLevel:"Q"},imageOptions:{hideBackgroundDots:!0,imageSize:.4,crossOrigin:void 0,margin:0},dotsOptions:{type:"square",color:"#000"},backgroundOptions:{round:0,color:"#fff"}};var K=function(){return(K=Object.assign||function(j){for(var p,y=1,_=arguments.length;y<_;y++)for(var x in p=arguments[y])Object.prototype.hasOwnProperty.call(p,x)&&(j[x]=p[x]);return j}).apply(this,arguments)};function U(j){var p=K({},j);if(!p.colorStops||!p.colorStops.length)throw"Field 'colorStops' is required in gradient";return p.rotation?p.rotation=Number(p.rotation):p.rotation=0,p.colorStops=p.colorStops.map(function(y){return K(K({},y),{offset:Number(y.offset)})}),p}function O(j){var p=K({},j);return p.width=Number(p.width),p.height=Number(p.height),p.margin=Number(p.margin),p.imageOptions=K(K({},p.imageOptions),{hideBackgroundDots:!!p.imageOptions.hideBackgroundDots,imageSize:Number(p.imageOptions.imageSize),margin:Number(p.imageOptions.margin)}),p.margin>Math.min(p.width,p.height)&&(p.margin=Math.min(p.width,p.height)),p.dotsOptions=K({},p.dotsOptions),p.dotsOptions.gradient&&(p.dotsOptions.gradient=U(p.dotsOptions.gradient)),p.cornersSquareOptions&&(p.cornersSquareOptions=K({},p.cornersSquareOptions),p.cornersSquareOptions.gradient&&(p.cornersSquareOptions.gradient=U(p.cornersSquareOptions.gradient))),p.cornersDotOptions&&(p.cornersDotOptions=K({},p.cornersDotOptions),p.cornersDotOptions.gradient&&(p.cornersDotOptions.gradient=U(p.cornersDotOptions.gradient))),p.backgroundOptions&&(p.backgroundOptions=K({},p.backgroundOptions),p.backgroundOptions.gradient&&(p.backgroundOptions.gradient=U(p.backgroundOptions.gradient))),p}var X=Nt(192),J=Nt.n(X),ot=function(j,p,y,_){return new(y||(y=Promise))(function(x,V){function z(P){try{M(_.next(P))}catch(A){V(A)}}function H(P){try{M(_.throw(P))}catch(A){V(A)}}function M(P){var A;P.done?x(P.value):(A=P.value,A instanceof y?A:new y(function(k){k(A)})).then(z,H)}M((_=_.apply(j,[])).next())})},lt=function(j,p){var y,_,x,V,z={label:0,sent:function(){if(1&x[0])throw x[1];return x[1]},trys:[],ops:[]};return V={next:H(0),throw:H(1),return:H(2)},typeof Symbol=="function"&&(V[Symbol.iterator]=function(){return this}),V;function H(M){return function(P){return function(A){if(y)throw new TypeError("Generator is already executing.");for(;z;)try{if(y=1,_&&(x=2&A[0]?_.return:A[0]?_.throw||((x=_.return)&&x.call(_),0):_.next)&&!(x=x.call(_,A[1])).done)return x;switch(_=0,x&&(A=[2&A[0],x.value]),A[0]){case 0:case 1:x=A;break;case 4:return z.label++,{value:A[1],done:!1};case 5:z.label++,_=A[1],A=[0];continue;case 7:A=z.ops.pop(),z.trys.pop();continue;default:if(!((x=(x=z.trys).length>0&&x[x.length-1])||A[0]!==6&&A[0]!==2)){z=0;continue}if(A[0]===3&&(!x||A[1]>x[0]&&A[1]<x[3])){z.label=A[1];break}if(A[0]===6&&z.label<x[1]){z.label=x[1],x=A;break}if(x&&z.label<x[2]){z.label=x[2],z.ops.push(A);break}x[2]&&z.ops.pop(),z.trys.pop();continue}A=p.call(j,z)}catch(k){A=[6,k],_=0}finally{y=x=0}if(5&A[0])throw A[1];return{value:A[0]?A[1]:void 0,done:!0}}([M,P])}}};const Ht=function(){function j(p){this._options=p?O(ne(et,p)):et,this.update()}return j._clearContainer=function(p){p&&(p.innerHTML="")},j.prototype._setupSvg=function(){var p=this;if(this._qr){var y=new Kt(this._options);this._svg=y.getElement(),this._svgDrawingPromise=y.drawQR(this._qr).then(function(){var _;p._svg&&((_=p._extension)===null||_===void 0||_.call(p,y.getElement(),p._options))})}},j.prototype._setupCanvas=function(){var p,y=this;this._qr&&(this._canvas=document.createElement("canvas"),this._canvas.width=this._options.width,this._canvas.height=this._options.height,this._setupSvg(),this._canvasDrawingPromise=(p=this._svgDrawingPromise)===null||p===void 0?void 0:p.then(function(){if(y._svg){var _=y._svg,x=new XMLSerializer().serializeToString(_),V="data:image/svg+xml;base64,"+btoa(x),z=new Image;return new Promise(function(H){z.onload=function(){var M,P;(P=(M=y._canvas)===null||M===void 0?void 0:M.getContext("2d"))===null||P===void 0||P.drawImage(z,0,0),H()},z.src=V})}}))},j.prototype._getElement=function(p){return p===void 0&&(p="png"),ot(this,void 0,void 0,function(){return lt(this,function(y){switch(y.label){case 0:if(!this._qr)throw"QR code is empty";return p.toLowerCase()!=="svg"?[3,2]:(this._svg&&this._svgDrawingPromise||this._setupSvg(),[4,this._svgDrawingPromise]);case 1:return y.sent(),[2,this._svg];case 2:return this._canvas&&this._canvasDrawingPromise||this._setupCanvas(),[4,this._canvasDrawingPromise];case 3:return y.sent(),[2,this._canvas]}})})},j.prototype.update=function(p){j._clearContainer(this._container),this._options=p?O(ne(this._options,p)):this._options,this._options.data&&(this._qr=J()(this._options.qrOptions.typeNumber,this._options.qrOptions.errorCorrectionLevel),this._qr.addData(this._options.data,this._options.qrOptions.mode||function(y){switch(!0){case/^[0-9]*$/.test(y):return"Numeric";case/^[0-9A-Z $%*+\-./:]*$/.test(y):return"Alphanumeric";default:return"Byte"}}(this._options.data)),this._qr.make(),this._options.type===Ee?this._setupCanvas():this._setupSvg(),this.append(this._container))},j.prototype.append=function(p){if(p){if(typeof p.appendChild!="function")throw"Container should be a single DOM node";this._options.type===Ee?this._canvas&&p.appendChild(this._canvas):this._svg&&p.appendChild(this._svg),this._container=p}},j.prototype.applyExtension=function(p){if(!p)throw"Extension function should be defined.";this._extension=p,this.update()},j.prototype.deleteExtension=function(){this._extension=void 0,this.update()},j.prototype.getRawData=function(p){return p===void 0&&(p="png"),ot(this,void 0,void 0,function(){var y,_,x;return lt(this,function(V){switch(V.label){case 0:if(!this._qr)throw"QR code is empty";return[4,this._getElement(p)];case 1:return(y=V.sent())?p.toLowerCase()==="svg"?(_=new XMLSerializer,x=_.serializeToString(y),[2,new Blob([`<?xml version="1.0" standalone="no"?>\r
`+x],{type:"image/svg+xml"})]):[2,new Promise(function(z){return y.toBlob(z,"image/"+p,1)})]:[2,null]}})})},j.prototype.download=function(p){return ot(this,void 0,void 0,function(){var y,_,x,V,z;return lt(this,function(H){switch(H.label){case 0:if(!this._qr)throw"QR code is empty";return y="png",_="qr",typeof p=="string"?(y=p,console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")):typeof p=="object"&&p!==null&&(p.name&&(_=p.name),p.extension&&(y=p.extension)),[4,this._getElement(y)];case 1:return(x=H.sent())?(y.toLowerCase()==="svg"?(V=new XMLSerializer,z=`<?xml version="1.0" standalone="no"?>\r
`+(z=V.serializeToString(x)),Gt("data:image/svg+xml;charset=utf-8,"+encodeURIComponent(z),_+".svg")):Gt(x.toDataURL("image/"+y),_+"."+y),[2]):[2]}})})},j}()}},ct={};function xt(Ct){if(ct[Ct])return ct[Ct].exports;var kt=ct[Ct]={exports:{}};return pt[Ct](kt,kt.exports,xt),kt.exports}return xt.n=Ct=>{var kt=Ct&&Ct.__esModule?()=>Ct.default:()=>Ct;return xt.d(kt,{a:kt}),kt},xt.d=(Ct,kt)=>{for(var Nt in kt)xt.o(kt,Nt)&&!xt.o(Ct,Nt)&&Object.defineProperty(Ct,Nt,{enumerable:!0,get:kt[Nt]})},xt.o=(Ct,kt)=>Object.prototype.hasOwnProperty.call(Ct,kt),xt(676)})().default})})(Rn);var Fi=Rn.exports;const On=Vn(Fi);var qn={exports:{}};(function(qt){typeof navigator<"u"&&function(N,pt){qt.exports?qt.exports=pt(N):(N.lottie=pt(N),N.bodymovin=N.lottie)}(window||{},function(N){var pt="http://www.w3.org/2000/svg",ct="",xt=-999999,Ct=!1,kt=!0,Nt="",Dt,ve=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),Ft=Math.pow,ne=Math.sqrt,Gt=Math.floor,de=Math.min,Tt={};(function(){var t=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],e,n=t.length;for(e=0;e<n;e+=1)Tt[t[e]]=Math[t[e]]})();function Rt(){return{}}Tt.random=Math.random,Tt.abs=function(t){var e=typeof t;if(e==="object"&&t.length){var n=X(t.length),i,s=t.length;for(i=0;i<s;i+=1)n[i]=Math.abs(t[i]);return n}return Math.abs(t)};var Qt=150,Lt=Math.PI/180,ie=.5519;function ce(t,e,n,i){this.type=t,this.currentTime=e,this.totalTime=n,this.direction=i<0?-1:1}function We(t,e){this.type=t,this.direction=e<0?-1:1}function Ae(t,e,n,i){this.type=t,this.currentLoop=n,this.totalLoops=e,this.direction=i<0?-1:1}function Ge(t,e,n){this.type=t,this.firstFrame=e,this.totalFrames=n}function Ue(t,e){this.type=t,this.target=e}function we(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function ye(t){this.type="configError",this.nativeError=t}var Kt=function(){var t=0;return function(){return t+=1,Nt+"__lottie_element_"+t}}();function Ee(t,e,n){var i,s,r,m,E,w,B,T;switch(m=Math.floor(t*6),E=t*6-m,w=n*(1-e),B=n*(1-E*e),T=n*(1-(1-E)*e),m%6){case 0:i=n,s=T,r=w;break;case 1:i=B,s=n,r=w;break;case 2:i=w,s=n,r=T;break;case 3:i=w,s=B,r=n;break;case 4:i=T,s=w,r=n;break;case 5:i=n,s=w,r=B;break}return[i,s,r]}function qe(t,e,n){var i=Math.max(t,e,n),s=Math.min(t,e,n),r=i-s,m,E=i===0?0:r/i,w=i/255;switch(i){case s:m=0;break;case t:m=e-n+r*(e<n?6:0),m/=6*r;break;case e:m=n-t+r*2,m/=6*r;break;case n:m=t-e+r*4,m/=6*r;break}return[m,E,w]}function nt(t,e){var n=qe(t[0]*255,t[1]*255,t[2]*255);return n[1]+=e,n[1]>1?n[1]=1:n[1]<=0&&(n[1]=0),Ee(n[0],n[1],n[2])}function et(t,e){var n=qe(t[0]*255,t[1]*255,t[2]*255);return n[2]+=e,n[2]>1?n[2]=1:n[2]<0&&(n[2]=0),Ee(n[0],n[1],n[2])}function K(t,e){var n=qe(t[0]*255,t[1]*255,t[2]*255);return n[0]+=e/360,n[0]>1?n[0]-=1:n[0]<0&&(n[0]+=1),Ee(n[0],n[1],n[2])}(function(){var t=[],e,n;for(e=0;e<256;e+=1)n=e.toString(16),t[e]=n.length===1?"0"+n:n;return function(i,s,r){return i<0&&(i=0),s<0&&(s=0),r<0&&(r=0),"#"+t[i]+t[s]+t[r]}})();function U(){}U.prototype={triggerEvent:function(t,e){if(this._cbs[t])for(var n=this._cbs[t],i=0;i<n.length;i+=1)n[i](e)},addEventListener:function(t,e){return this._cbs[t]||(this._cbs[t]=[]),this._cbs[t].push(e),(function(){this.removeEventListener(t,e)}).bind(this)},removeEventListener:function(t,e){if(!e)this._cbs[t]=null;else if(this._cbs[t]){for(var n=0,i=this._cbs[t].length;n<i;)this._cbs[t][n]===e&&(this._cbs[t].splice(n,1),n-=1,i-=1),n+=1;this._cbs[t].length||(this._cbs[t]=null)}}};var O=function(){function t(n,i){var s=0,r=[],m;switch(n){case"int16":case"uint8c":m=1;break;default:m=1.1;break}for(s=0;s<i;s+=1)r.push(m);return r}function e(n,i){return n==="float32"?new Float32Array(i):n==="int16"?new Int16Array(i):n==="uint8c"?new Uint8ClampedArray(i):t(n,i)}return typeof Uint8ClampedArray=="function"&&typeof Float32Array=="function"?e:t}();function X(t){return Array.apply(null,{length:t})}function J(t){return document.createElementNS(pt,t)}function ot(t){return document.createElement(t)}function lt(){}lt.prototype={addDynamicProperty:function(t){this.dynamicProperties.indexOf(t)===-1&&(this.dynamicProperties.push(t),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var t,e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(t){this.container=t,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var Ht=function(){var t={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"};return function(e){return t[e]||""}}(),j={1:"butt",2:"round",3:"square"},p={1:"miter",2:"round",3:"bevel"};/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */var y=function(){var t=Math.cos,e=Math.sin,n=Math.tan,i=Math.round;function s(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function r(d){if(d===0)return this;var v=t(d),q=e(d);return this._t(v,-q,0,0,q,v,0,0,0,0,1,0,0,0,0,1)}function m(d){if(d===0)return this;var v=t(d),q=e(d);return this._t(1,0,0,0,0,v,-q,0,0,q,v,0,0,0,0,1)}function E(d){if(d===0)return this;var v=t(d),q=e(d);return this._t(v,0,q,0,0,1,0,0,-q,0,v,0,0,0,0,1)}function w(d){if(d===0)return this;var v=t(d),q=e(d);return this._t(v,-q,0,0,q,v,0,0,0,0,1,0,0,0,0,1)}function B(d,v){return this._t(1,v,d,1,0,0)}function T(d,v){return this.shear(n(d),n(v))}function S(d,v){var q=t(v),Q=e(v);return this._t(q,Q,0,0,-Q,q,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,n(d),1,0,0,0,0,1,0,0,0,0,1)._t(q,-Q,0,0,Q,q,0,0,0,0,1,0,0,0,0,1)}function b(d,v,q){return!q&&q!==0&&(q=1),d===1&&v===1&&q===1?this:this._t(d,0,0,0,0,v,0,0,0,0,q,0,0,0,0,1)}function F(d,v,q,Q,G,wt,St,Mt,Xt,ee,he,ue,me,oe,Yt,pe){return this.props[0]=d,this.props[1]=v,this.props[2]=q,this.props[3]=Q,this.props[4]=G,this.props[5]=wt,this.props[6]=St,this.props[7]=Mt,this.props[8]=Xt,this.props[9]=ee,this.props[10]=he,this.props[11]=ue,this.props[12]=me,this.props[13]=oe,this.props[14]=Yt,this.props[15]=pe,this}function R(d,v,q){return q=q||0,d!==0||v!==0||q!==0?this._t(1,0,0,0,0,1,0,0,0,0,1,0,d,v,q,1):this}function I(d,v,q,Q,G,wt,St,Mt,Xt,ee,he,ue,me,oe,Yt,pe){var mt=this.props;if(d===1&&v===0&&q===0&&Q===0&&G===0&&wt===1&&St===0&&Mt===0&&Xt===0&&ee===0&&he===1&&ue===0)return mt[12]=mt[12]*d+mt[15]*me,mt[13]=mt[13]*wt+mt[15]*oe,mt[14]=mt[14]*he+mt[15]*Yt,mt[15]*=pe,this._identityCalculated=!1,this;var Zt=mt[0],ze=mt[1],He=mt[2],Be=mt[3],Le=mt[4],Ve=mt[5],Re=mt[6],ge=mt[7],Ze=mt[8],Ne=mt[9],xe=mt[10],je=mt[11],Ce=mt[12],Qe=mt[13],ln=mt[14],hn=mt[15];return mt[0]=Zt*d+ze*G+He*Xt+Be*me,mt[1]=Zt*v+ze*wt+He*ee+Be*oe,mt[2]=Zt*q+ze*St+He*he+Be*Yt,mt[3]=Zt*Q+ze*Mt+He*ue+Be*pe,mt[4]=Le*d+Ve*G+Re*Xt+ge*me,mt[5]=Le*v+Ve*wt+Re*ee+ge*oe,mt[6]=Le*q+Ve*St+Re*he+ge*Yt,mt[7]=Le*Q+Ve*Mt+Re*ue+ge*pe,mt[8]=Ze*d+Ne*G+xe*Xt+je*me,mt[9]=Ze*v+Ne*wt+xe*ee+je*oe,mt[10]=Ze*q+Ne*St+xe*he+je*Yt,mt[11]=Ze*Q+Ne*Mt+xe*ue+je*pe,mt[12]=Ce*d+Qe*G+ln*Xt+hn*me,mt[13]=Ce*v+Qe*wt+ln*ee+hn*oe,mt[14]=Ce*q+Qe*St+ln*he+hn*Yt,mt[15]=Ce*Q+Qe*Mt+ln*ue+hn*pe,this._identityCalculated=!1,this}function L(){return this._identityCalculated||(this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1),this._identityCalculated=!0),this._identity}function c(d){for(var v=0;v<16;){if(d.props[v]!==this.props[v])return!1;v+=1}return!0}function l(d){var v;for(v=0;v<16;v+=1)d.props[v]=this.props[v];return d}function o(d){var v;for(v=0;v<16;v+=1)this.props[v]=d[v]}function a(d,v,q){return{x:d*this.props[0]+v*this.props[4]+q*this.props[8]+this.props[12],y:d*this.props[1]+v*this.props[5]+q*this.props[9]+this.props[13],z:d*this.props[2]+v*this.props[6]+q*this.props[10]+this.props[14]}}function h(d,v,q){return d*this.props[0]+v*this.props[4]+q*this.props[8]+this.props[12]}function u(d,v,q){return d*this.props[1]+v*this.props[5]+q*this.props[9]+this.props[13]}function f(d,v,q){return d*this.props[2]+v*this.props[6]+q*this.props[10]+this.props[14]}function C(){var d=this.props[0]*this.props[5]-this.props[1]*this.props[4],v=this.props[5]/d,q=-this.props[1]/d,Q=-this.props[4]/d,G=this.props[0]/d,wt=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/d,St=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/d,Mt=new y;return Mt.props[0]=v,Mt.props[1]=q,Mt.props[4]=Q,Mt.props[5]=G,Mt.props[12]=wt,Mt.props[13]=St,Mt}function $(d){var v=this.getInverseMatrix();return v.applyToPointArray(d[0],d[1],d[2]||0)}function rt(d){var v,q=d.length,Q=[];for(v=0;v<q;v+=1)Q[v]=$(d[v]);return Q}function at(d,v,q){var Q=O("float32",6);if(this.isIdentity())Q[0]=d[0],Q[1]=d[1],Q[2]=v[0],Q[3]=v[1],Q[4]=q[0],Q[5]=q[1];else{var G=this.props[0],wt=this.props[1],St=this.props[4],Mt=this.props[5],Xt=this.props[12],ee=this.props[13];Q[0]=d[0]*G+d[1]*St+Xt,Q[1]=d[0]*wt+d[1]*Mt+ee,Q[2]=v[0]*G+v[1]*St+Xt,Q[3]=v[0]*wt+v[1]*Mt+ee,Q[4]=q[0]*G+q[1]*St+Xt,Q[5]=q[0]*wt+q[1]*Mt+ee}return Q}function it(d,v,q){var Q;return this.isIdentity()?Q=[d,v,q]:Q=[d*this.props[0]+v*this.props[4]+q*this.props[8]+this.props[12],d*this.props[1]+v*this.props[5]+q*this.props[9]+this.props[13],d*this.props[2]+v*this.props[6]+q*this.props[10]+this.props[14]],Q}function Z(d,v){if(this.isIdentity())return d+","+v;var q=this.props;return Math.round((d*q[0]+v*q[4]+q[12])*100)/100+","+Math.round((d*q[1]+v*q[5]+q[13])*100)/100}function tt(){for(var d=0,v=this.props,q="matrix3d(",Q=1e4;d<16;)q+=i(v[d]*Q)/Q,q+=d===15?")":",",d+=1;return q}function W(d){var v=1e4;return d<1e-6&&d>0||d>-1e-6&&d<0?i(d*v)/v:d}function g(){var d=this.props,v=W(d[0]),q=W(d[1]),Q=W(d[4]),G=W(d[5]),wt=W(d[12]),St=W(d[13]);return"matrix("+v+","+q+","+Q+","+G+","+wt+","+St+")"}return function(){this.reset=s,this.rotate=r,this.rotateX=m,this.rotateY=E,this.rotateZ=w,this.skew=T,this.skewFromAxis=S,this.shear=B,this.scale=b,this.setTransform=F,this.translate=R,this.transform=I,this.applyToPoint=a,this.applyToX=h,this.applyToY=u,this.applyToZ=f,this.applyToPointArray=it,this.applyToTriplePoints=at,this.applyToPointStringified=Z,this.toCSS=tt,this.to2dCSS=g,this.clone=l,this.cloneFromProps=o,this.equals=c,this.inversePoints=rt,this.inversePoint=$,this.getInverseMatrix=C,this._t=this.transform,this.isIdentity=L,this._identity=!0,this._identityCalculated=!1,this.props=O("float32",16),this.reset()}}();(function(t,e){var n=this,i=256,s=6,r=52,m="random",E=e.pow(i,s),w=e.pow(2,r),B=w*2,T=i-1,S;function b(o,a,h){var u=[];a=a===!0?{entropy:!0}:a||{};var f=L(I(a.entropy?[o,l(t)]:o===null?c():o,3),u),C=new F(u),$=function(){for(var rt=C.g(s),at=E,it=0;rt<w;)rt=(rt+it)*i,at*=i,it=C.g(1);for(;rt>=B;)rt/=2,at/=2,it>>>=1;return(rt+it)/at};return $.int32=function(){return C.g(4)|0},$.quick=function(){return C.g(4)/4294967296},$.double=$,L(l(C.S),t),(a.pass||h||function(rt,at,it,Z){return Z&&(Z.S&&R(Z,C),rt.state=function(){return R(C,{})}),it?(e[m]=rt,at):rt})($,f,"global"in a?a.global:this==e,a.state)}e["seed"+m]=b;function F(o){var a,h=o.length,u=this,f=0,C=u.i=u.j=0,$=u.S=[];for(h||(o=[h++]);f<i;)$[f]=f++;for(f=0;f<i;f++)$[f]=$[C=T&C+o[f%h]+(a=$[f])],$[C]=a;u.g=function(rt){for(var at,it=0,Z=u.i,tt=u.j,W=u.S;rt--;)at=W[Z=T&Z+1],it=it*i+W[T&(W[Z]=W[tt=T&tt+at])+(W[tt]=at)];return u.i=Z,u.j=tt,it}}function R(o,a){return a.i=o.i,a.j=o.j,a.S=o.S.slice(),a}function I(o,a){var h=[],u=typeof o,f;if(a&&u=="object")for(f in o)try{h.push(I(o[f],a-1))}catch{}return h.length?h:u=="string"?o:o+"\0"}function L(o,a){for(var h=o+"",u,f=0;f<h.length;)a[T&f]=T&(u^=a[T&f]*19)+h.charCodeAt(f++);return l(a)}function c(){try{var o=new Uint8Array(i);return(n.crypto||n.msCrypto).getRandomValues(o),l(o)}catch{var a=n.navigator,h=a&&a.plugins;return[+new Date,n,h,n.screen,l(t)]}}function l(o){return String.fromCharCode.apply(0,o)}L(e.random(),t)})([],Tt);var _=function(){var t={};t.getBezierEasing=n;var e={};function n(l,o,a,h,u){var f=u||("bez_"+l+"_"+o+"_"+a+"_"+h).replace(/\./g,"p");if(e[f])return e[f];var C=new c([l,o,a,h]);return e[f]=C,C}var i=4,s=.001,r=1e-7,m=10,E=11,w=1/(E-1),B=typeof Float32Array=="function";function T(l,o){return 1-3*o+3*l}function S(l,o){return 3*o-6*l}function b(l){return 3*l}function F(l,o,a){return((T(o,a)*l+S(o,a))*l+b(o))*l}function R(l,o,a){return 3*T(o,a)*l*l+2*S(o,a)*l+b(o)}function I(l,o,a,h,u){var f,C,$=0;do C=o+(a-o)/2,f=F(C,h,u)-l,f>0?a=C:o=C;while(Math.abs(f)>r&&++$<m);return C}function L(l,o,a,h){for(var u=0;u<i;++u){var f=R(o,a,h);if(f===0)return o;var C=F(o,a,h)-l;o-=C/f}return o}function c(l){this._p=l,this._mSampleValues=B?new Float32Array(E):new Array(E),this._precomputed=!1,this.get=this.get.bind(this)}return c.prototype={get:function(l){var o=this._p[0],a=this._p[1],h=this._p[2],u=this._p[3];return this._precomputed||this._precompute(),o===a&&h===u?l:l===0?0:l===1?1:F(this._getTForX(l),a,u)},_precompute:function(){var l=this._p[0],o=this._p[1],a=this._p[2],h=this._p[3];this._precomputed=!0,(l!==o||a!==h)&&this._calcSampleValues()},_calcSampleValues:function(){for(var l=this._p[0],o=this._p[2],a=0;a<E;++a)this._mSampleValues[a]=F(a*w,l,o)},_getTForX:function(l){for(var o=this._p[0],a=this._p[2],h=this._mSampleValues,u=0,f=1,C=E-1;f!==C&&h[f]<=l;++f)u+=w;--f;var $=(l-h[f])/(h[f+1]-h[f]),rt=u+$*w,at=R(rt,o,a);return at>=s?L(l,rt,o,a):at===0?rt:I(l,u,u+w,o,a)}},t}();(function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!N.requestAnimationFrame;++n)N.requestAnimationFrame=N[e[n]+"RequestAnimationFrame"],N.cancelAnimationFrame=N[e[n]+"CancelAnimationFrame"]||N[e[n]+"CancelRequestAnimationFrame"];N.requestAnimationFrame||(N.requestAnimationFrame=function(i){var s=new Date().getTime(),r=Math.max(0,16-(s-t)),m=setTimeout(function(){i(s+r)},r);return t=s+r,m}),N.cancelAnimationFrame||(N.cancelAnimationFrame=function(i){clearTimeout(i)})})();function x(t,e){var n,i=t.length,s;for(n=0;n<i;n+=1){s=t[n].prototype;for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e.prototype[r]=s[r])}}function V(t){function e(){}return e.prototype=t,e}function z(){var t=Math;function e(b,F,R,I,L,c){var l=b*I+F*L+R*c-L*I-c*b-R*F;return l>-.001&&l<.001}function n(b,F,R,I,L,c,l,o,a){if(R===0&&c===0&&a===0)return e(b,F,I,L,l,o);var h=t.sqrt(t.pow(I-b,2)+t.pow(L-F,2)+t.pow(c-R,2)),u=t.sqrt(t.pow(l-b,2)+t.pow(o-F,2)+t.pow(a-R,2)),f=t.sqrt(t.pow(l-I,2)+t.pow(o-L,2)+t.pow(a-c,2)),C;return h>u?h>f?C=h-u-f:C=f-u-h:f>u?C=f-u-h:C=u-h-f,C>-1e-4&&C<1e-4}var i=function(){return function(b,F,R,I){var L=Qt,c,l,o,a,h,u=0,f,C=[],$=[],rt=Se.newElement();for(o=R.length,c=0;c<L;c+=1){for(h=c/(L-1),f=0,l=0;l<o;l+=1)a=Ft(1-h,3)*b[l]+3*Ft(1-h,2)*h*R[l]+3*(1-h)*Ft(h,2)*I[l]+Ft(h,3)*F[l],C[l]=a,$[l]!==null&&(f+=Ft(C[l]-$[l],2)),$[l]=C[l];f&&(f=ne(f),u+=f),rt.percents[c]=h,rt.lengths[c]=u}return rt.addedLength=u,rt}}();function s(b){var F=Je.newElement(),R=b.c,I=b.v,L=b.o,c=b.i,l,o=b._length,a=F.lengths,h=0;for(l=0;l<o-1;l+=1)a[l]=i(I[l],I[l+1],L[l],c[l+1]),h+=a[l].addedLength;return R&&o&&(a[l]=i(I[l],I[0],L[l],c[0]),h+=a[l].addedLength),F.totalLength=h,F}function r(b){this.segmentLength=0,this.points=new Array(b)}function m(b,F){this.partialLength=b,this.point=F}var E=function(){var b={};return function(F,R,I,L){var c=(F[0]+"_"+F[1]+"_"+R[0]+"_"+R[1]+"_"+I[0]+"_"+I[1]+"_"+L[0]+"_"+L[1]).replace(/\./g,"p");if(!b[c]){var l=Qt,o,a,h,u,f,C=0,$,rt,at=null;F.length===2&&(F[0]!==R[0]||F[1]!==R[1])&&e(F[0],F[1],R[0],R[1],F[0]+I[0],F[1]+I[1])&&e(F[0],F[1],R[0],R[1],R[0]+L[0],R[1]+L[1])&&(l=2);var it=new r(l);for(h=I.length,o=0;o<l;o+=1){for(rt=X(h),f=o/(l-1),$=0,a=0;a<h;a+=1)u=Ft(1-f,3)*F[a]+3*Ft(1-f,2)*f*(F[a]+I[a])+3*(1-f)*Ft(f,2)*(R[a]+L[a])+Ft(f,3)*R[a],rt[a]=u,at!==null&&($+=Ft(rt[a]-at[a],2));$=ne($),C+=$,it.points[o]=new m($,rt),at=rt}it.segmentLength=C,b[c]=it}return b[c]}}();function w(b,F){var R=F.percents,I=F.lengths,L=R.length,c=Gt((L-1)*b),l=b*F.addedLength,o=0;if(c===L-1||c===0||l===I[c])return R[c];for(var a=I[c]>l?-1:1,h=!0;h;)if(I[c]<=l&&I[c+1]>l?(o=(l-I[c])/(I[c+1]-I[c]),h=!1):c+=a,c<0||c>=L-1){if(c===L-1)return R[c];h=!1}return R[c]+(R[c+1]-R[c])*o}function B(b,F,R,I,L,c){var l=w(L,c),o=1-l,a=t.round((o*o*o*b[0]+(l*o*o+o*l*o+o*o*l)*R[0]+(l*l*o+o*l*l+l*o*l)*I[0]+l*l*l*F[0])*1e3)/1e3,h=t.round((o*o*o*b[1]+(l*o*o+o*l*o+o*o*l)*R[1]+(l*l*o+o*l*l+l*o*l)*I[1]+l*l*l*F[1])*1e3)/1e3;return[a,h]}var T=O("float32",8);function S(b,F,R,I,L,c,l){L<0?L=0:L>1&&(L=1);var o=w(L,l);c=c>1?1:c;var a=w(c,l),h,u=b.length,f=1-o,C=1-a,$=f*f*f,rt=o*f*f*3,at=o*o*f*3,it=o*o*o,Z=f*f*C,tt=o*f*C+f*o*C+f*f*a,W=o*o*C+f*o*a+o*f*a,g=o*o*a,d=f*C*C,v=o*C*C+f*a*C+f*C*a,q=o*a*C+f*a*a+o*C*a,Q=o*a*a,G=C*C*C,wt=a*C*C+C*a*C+C*C*a,St=a*a*C+C*a*a+a*C*a,Mt=a*a*a;for(h=0;h<u;h+=1)T[h*4]=t.round(($*b[h]+rt*R[h]+at*I[h]+it*F[h])*1e3)/1e3,T[h*4+1]=t.round((Z*b[h]+tt*R[h]+W*I[h]+g*F[h])*1e3)/1e3,T[h*4+2]=t.round((d*b[h]+v*R[h]+q*I[h]+Q*F[h])*1e3)/1e3,T[h*4+3]=t.round((G*b[h]+wt*R[h]+St*I[h]+Mt*F[h])*1e3)/1e3;return T}return{getSegmentsLength:s,getNewSegment:S,getPointInSegment:B,buildBezierData:E,pointOnLine2D:e,pointOnLine3D:n}}var H=z(),M=function(){var t=1,e=[],n,i,s={onmessage:function(){},postMessage:function(b){n({data:b})}},r={postMessage:function(b){s.onmessage({data:b})}};function m(b){if(N.Worker&&N.Blob&&Ct){var F=new Blob(["var _workerSelf = self; self.onmessage = ",b.toString()],{type:"text/javascript"}),R=URL.createObjectURL(F);return new Worker(R)}return n=b,s}function E(){i||(i=m(function(F){function R(){function L(Z,tt){var W,g,d=Z.length,v,q,Q,G;for(g=0;g<d;g+=1)if(W=Z[g],"ks"in W&&!W.completed){if(W.completed=!0,W.tt&&(Z[g-1].td=W.tt),W.hasMask){var wt=W.masksProperties;for(q=wt.length,v=0;v<q;v+=1)if(wt[v].pt.k.i)o(wt[v].pt.k);else for(G=wt[v].pt.k.length,Q=0;Q<G;Q+=1)wt[v].pt.k[Q].s&&o(wt[v].pt.k[Q].s[0]),wt[v].pt.k[Q].e&&o(wt[v].pt.k[Q].e[0])}W.ty===0?(W.layers=c(W.refId,tt),L(W.layers,tt)):W.ty===4?l(W.shapes):W.ty===5&&at(W)}}function c(Z,tt){for(var W=0,g=tt.length;W<g;){if(tt[W].id===Z)return tt[W].layers.__used?JSON.parse(JSON.stringify(tt[W].layers)):(tt[W].layers.__used=!0,tt[W].layers);W+=1}return null}function l(Z){var tt,W=Z.length,g,d;for(tt=W-1;tt>=0;tt-=1)if(Z[tt].ty==="sh")if(Z[tt].ks.k.i)o(Z[tt].ks.k);else for(d=Z[tt].ks.k.length,g=0;g<d;g+=1)Z[tt].ks.k[g].s&&o(Z[tt].ks.k[g].s[0]),Z[tt].ks.k[g].e&&o(Z[tt].ks.k[g].e[0]);else Z[tt].ty==="gr"&&l(Z[tt].it)}function o(Z){var tt,W=Z.i.length;for(tt=0;tt<W;tt+=1)Z.i[tt][0]+=Z.v[tt][0],Z.i[tt][1]+=Z.v[tt][1],Z.o[tt][0]+=Z.v[tt][0],Z.o[tt][1]+=Z.v[tt][1]}function a(Z,tt){var W=tt?tt.split("."):[100,100,100];return Z[0]>W[0]?!0:W[0]>Z[0]?!1:Z[1]>W[1]?!0:W[1]>Z[1]?!1:Z[2]>W[2]?!0:W[2]>Z[2]?!1:null}var h=function(){var Z=[4,4,14];function tt(g){var d=g.t.d;g.t.d={k:[{s:d,t:0}]}}function W(g){var d,v=g.length;for(d=0;d<v;d+=1)g[d].ty===5&&tt(g[d])}return function(g){if(a(Z,g.v)&&(W(g.layers),g.assets)){var d,v=g.assets.length;for(d=0;d<v;d+=1)g.assets[d].layers&&W(g.assets[d].layers)}}}(),u=function(){var Z=[4,7,99];return function(tt){if(tt.chars&&!a(Z,tt.v)){var W,g=tt.chars.length,d,v,q,Q;for(W=0;W<g;W+=1)if(tt.chars[W].data&&tt.chars[W].data.shapes)for(Q=tt.chars[W].data.shapes[0].it,v=Q.length,d=0;d<v;d+=1)q=Q[d].ks.k,q.__converted||(o(Q[d].ks.k),q.__converted=!0)}}}(),f=function(){var Z=[5,7,15];function tt(g){var d=g.t.p;typeof d.a=="number"&&(d.a={a:0,k:d.a}),typeof d.p=="number"&&(d.p={a:0,k:d.p}),typeof d.r=="number"&&(d.r={a:0,k:d.r})}function W(g){var d,v=g.length;for(d=0;d<v;d+=1)g[d].ty===5&&tt(g[d])}return function(g){if(a(Z,g.v)&&(W(g.layers),g.assets)){var d,v=g.assets.length;for(d=0;d<v;d+=1)g.assets[d].layers&&W(g.assets[d].layers)}}}(),C=function(){var Z=[4,1,9];function tt(g){var d,v=g.length,q,Q;for(d=0;d<v;d+=1)if(g[d].ty==="gr")tt(g[d].it);else if(g[d].ty==="fl"||g[d].ty==="st")if(g[d].c.k&&g[d].c.k[0].i)for(Q=g[d].c.k.length,q=0;q<Q;q+=1)g[d].c.k[q].s&&(g[d].c.k[q].s[0]/=255,g[d].c.k[q].s[1]/=255,g[d].c.k[q].s[2]/=255,g[d].c.k[q].s[3]/=255),g[d].c.k[q].e&&(g[d].c.k[q].e[0]/=255,g[d].c.k[q].e[1]/=255,g[d].c.k[q].e[2]/=255,g[d].c.k[q].e[3]/=255);else g[d].c.k[0]/=255,g[d].c.k[1]/=255,g[d].c.k[2]/=255,g[d].c.k[3]/=255}function W(g){var d,v=g.length;for(d=0;d<v;d+=1)g[d].ty===4&&tt(g[d].shapes)}return function(g){if(a(Z,g.v)&&(W(g.layers),g.assets)){var d,v=g.assets.length;for(d=0;d<v;d+=1)g.assets[d].layers&&W(g.assets[d].layers)}}}(),$=function(){var Z=[4,4,18];function tt(g){var d,v=g.length,q,Q;for(d=v-1;d>=0;d-=1)if(g[d].ty==="sh")if(g[d].ks.k.i)g[d].ks.k.c=g[d].closed;else for(Q=g[d].ks.k.length,q=0;q<Q;q+=1)g[d].ks.k[q].s&&(g[d].ks.k[q].s[0].c=g[d].closed),g[d].ks.k[q].e&&(g[d].ks.k[q].e[0].c=g[d].closed);else g[d].ty==="gr"&&tt(g[d].it)}function W(g){var d,v,q=g.length,Q,G,wt,St;for(v=0;v<q;v+=1){if(d=g[v],d.hasMask){var Mt=d.masksProperties;for(G=Mt.length,Q=0;Q<G;Q+=1)if(Mt[Q].pt.k.i)Mt[Q].pt.k.c=Mt[Q].cl;else for(St=Mt[Q].pt.k.length,wt=0;wt<St;wt+=1)Mt[Q].pt.k[wt].s&&(Mt[Q].pt.k[wt].s[0].c=Mt[Q].cl),Mt[Q].pt.k[wt].e&&(Mt[Q].pt.k[wt].e[0].c=Mt[Q].cl)}d.ty===4&&tt(d.shapes)}}return function(g){if(a(Z,g.v)&&(W(g.layers),g.assets)){var d,v=g.assets.length;for(d=0;d<v;d+=1)g.assets[d].layers&&W(g.assets[d].layers)}}}();function rt(Z){Z.__complete||(C(Z),h(Z),u(Z),f(Z),$(Z),L(Z.layers,Z.assets),Z.__complete=!0)}function at(Z){Z.t.a.length===0&&!("m"in Z.t.p)&&(Z.singleShape=!0)}var it={};return it.completeData=rt,it.checkColors=C,it.checkChars=u,it.checkPathProperties=f,it.checkShapes=$,it.completeLayers=L,it}if(r.dataManager||(r.dataManager=R()),r.assetLoader||(r.assetLoader=function(){function L(l){var o=l.getResponseHeader("content-type");return o&&l.responseType==="json"&&o.indexOf("json")!==-1||l.response&&typeof l.response=="object"?l.response:l.response&&typeof l.response=="string"?JSON.parse(l.response):l.responseText?JSON.parse(l.responseText):null}function c(l,o,a,h){var u,f=new XMLHttpRequest;try{f.responseType="json"}catch{}f.onreadystatechange=function(){if(f.readyState===4)if(f.status===200)u=L(f),a(u);else try{u=L(f),a(u)}catch(C){h&&h(C)}};try{f.open("GET",l,!0)}catch{f.open("GET",o+"/"+l,!0)}f.send()}return{load:c}}()),F.data.type==="loadAnimation")r.assetLoader.load(F.data.path,F.data.fullPath,function(L){r.dataManager.completeData(L),r.postMessage({id:F.data.id,payload:L,status:"success"})},function(){r.postMessage({id:F.data.id,status:"error"})});else if(F.data.type==="complete"){var I=F.data.animation;r.dataManager.completeData(I),r.postMessage({id:F.data.id,payload:I,status:"success"})}else F.data.type==="loadData"&&r.assetLoader.load(F.data.path,F.data.fullPath,function(L){r.postMessage({id:F.data.id,payload:L,status:"success"})},function(){r.postMessage({id:F.data.id,status:"error"})})}),i.onmessage=function(b){var F=b.data,R=F.id,I=e[R];e[R]=null,F.status==="success"?I.onComplete(F.payload):I.onError&&I.onError()})}function w(b,F){t+=1;var R="processId_"+t;return e[R]={onComplete:b,onError:F},R}function B(b,F,R){E();var I=w(F,R);i.postMessage({type:"loadAnimation",path:b,fullPath:N.location.origin+N.location.pathname,id:I})}function T(b,F,R){E();var I=w(F,R);i.postMessage({type:"loadData",path:b,fullPath:N.location.origin+N.location.pathname,id:I})}function S(b,F,R){E();var I=w(F,R);i.postMessage({type:"complete",animation:b,id:I})}return{loadAnimation:B,loadData:T,completeAnimation:S}}();function P(t){for(var e=t.fStyle?t.fStyle.split(" "):[],n="normal",i="normal",s=e.length,r,m=0;m<s;m+=1)switch(r=e[m].toLowerCase(),r){case"italic":i="italic";break;case"bold":n="700";break;case"black":n="900";break;case"medium":n="500";break;case"regular":case"normal":n="400";break;case"light":case"thin":n="200";break}return{style:i,weight:t.fWeight||n}}var A=function(){var t=5e3,e={w:0,size:0,shapes:[]},n=[];n=n.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var i=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"],s=[65039,8205];function r(a){var h=a.split(","),u,f=h.length,C=[];for(u=0;u<f;u+=1)h[u]!=="sans-serif"&&h[u]!=="monospace"&&C.push(h[u]);return C.join(",")}function m(a,h){var u=ot("span");u.setAttribute("aria-hidden",!0),u.style.fontFamily=h;var f=ot("span");f.innerText="giItT1WQy@!-/#",u.style.position="absolute",u.style.left="-10000px",u.style.top="-10000px",u.style.fontSize="300px",u.style.fontVariant="normal",u.style.fontStyle="normal",u.style.fontWeight="normal",u.style.letterSpacing="0",u.appendChild(f),document.body.appendChild(u);var C=f.offsetWidth;return f.style.fontFamily=r(a)+", "+h,{node:f,w:C,parent:u}}function E(){var a,h=this.fonts.length,u,f,C=h;for(a=0;a<h;a+=1)this.fonts[a].loaded?C-=1:this.fonts[a].fOrigin==="n"||this.fonts[a].origin===0?this.fonts[a].loaded=!0:(u=this.fonts[a].monoCase.node,f=this.fonts[a].monoCase.w,u.offsetWidth!==f?(C-=1,this.fonts[a].loaded=!0):(u=this.fonts[a].sansCase.node,f=this.fonts[a].sansCase.w,u.offsetWidth!==f&&(C-=1,this.fonts[a].loaded=!0)),this.fonts[a].loaded&&(this.fonts[a].sansCase.parent.parentNode.removeChild(this.fonts[a].sansCase.parent),this.fonts[a].monoCase.parent.parentNode.removeChild(this.fonts[a].monoCase.parent)));C!==0&&Date.now()-this.initTime<t?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)}function w(a,h){var u=J("text");u.style.fontSize="100px";var f=P(h);u.setAttribute("font-family",h.fFamily),u.setAttribute("font-style",f.style),u.setAttribute("font-weight",f.weight),u.textContent="1",h.fClass?(u.style.fontFamily="inherit",u.setAttribute("class",h.fClass)):u.style.fontFamily=h.fFamily,a.appendChild(u);var C=ot("canvas").getContext("2d");return C.font=h.fWeight+" "+h.fStyle+" 100px "+h.fFamily,u}function B(a,h){if(!a){this.isLoaded=!0;return}if(this.chars){this.isLoaded=!0,this.fonts=a.list;return}var u=a.list,f,C=u.length,$=C;for(f=0;f<C;f+=1){var rt=!0,at,it;if(u[f].loaded=!1,u[f].monoCase=m(u[f].fFamily,"monospace"),u[f].sansCase=m(u[f].fFamily,"sans-serif"),!u[f].fPath)u[f].loaded=!0,$-=1;else if(u[f].fOrigin==="p"||u[f].origin===3){if(at=document.querySelectorAll('style[f-forigin="p"][f-family="'+u[f].fFamily+'"], style[f-origin="3"][f-family="'+u[f].fFamily+'"]'),at.length>0&&(rt=!1),rt){var Z=ot("style");Z.setAttribute("f-forigin",u[f].fOrigin),Z.setAttribute("f-origin",u[f].origin),Z.setAttribute("f-family",u[f].fFamily),Z.type="text/css",Z.innerText="@font-face {font-family: "+u[f].fFamily+"; font-style: normal; src: url('"+u[f].fPath+"');}",h.appendChild(Z)}}else if(u[f].fOrigin==="g"||u[f].origin===1){for(at=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),it=0;it<at.length;it+=1)at[it].href.indexOf(u[f].fPath)!==-1&&(rt=!1);if(rt){var tt=ot("link");tt.setAttribute("f-forigin",u[f].fOrigin),tt.setAttribute("f-origin",u[f].origin),tt.type="text/css",tt.rel="stylesheet",tt.href=u[f].fPath,document.body.appendChild(tt)}}else if(u[f].fOrigin==="t"||u[f].origin===2){for(at=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),it=0;it<at.length;it+=1)u[f].fPath===at[it].src&&(rt=!1);if(rt){var W=ot("link");W.setAttribute("f-forigin",u[f].fOrigin),W.setAttribute("f-origin",u[f].origin),W.setAttribute("rel","stylesheet"),W.setAttribute("href",u[f].fPath),h.appendChild(W)}}u[f].helper=w(h,u[f]),u[f].cache={},this.fonts.push(u[f])}$===0?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}function T(a){if(a){this.chars||(this.chars=[]);var h,u=a.length,f,C=this.chars.length,$;for(h=0;h<u;h+=1){for(f=0,$=!1;f<C;)this.chars[f].style===a[h].style&&this.chars[f].fFamily===a[h].fFamily&&this.chars[f].ch===a[h].ch&&($=!0),f+=1;$||(this.chars.push(a[h]),C+=1)}}}function S(a,h,u){for(var f=0,C=this.chars.length;f<C;){if(this.chars[f].ch===a&&this.chars[f].style===h&&this.chars[f].fFamily===u)return this.chars[f];f+=1}return(typeof a=="string"&&a.charCodeAt(0)!==13||!a)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",a,h,u)),e}function b(a,h,u){var f=this.getFontByName(h),C=a.charCodeAt(0);if(!f.cache[C+1]){var $=f.helper;if(a===" "){$.textContent="|"+a+"|";var rt=$.getComputedTextLength();$.textContent="||";var at=$.getComputedTextLength();f.cache[C+1]=(rt-at)/100}else $.textContent=a,f.cache[C+1]=$.getComputedTextLength()/100}return f.cache[C+1]*u}function F(a){for(var h=0,u=this.fonts.length;h<u;){if(this.fonts[h].fName===a)return this.fonts[h];h+=1}return this.fonts[0]}function R(a,h){var u=a.toString(16)+h.toString(16);return i.indexOf(u)!==-1}function I(a,h){return h?a===s[0]&&h===s[1]:a===s[1]}function L(a){return n.indexOf(a)!==-1}function c(){this.isLoaded=!0}var l=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};l.isModifier=R,l.isZeroWidthJoiner=I,l.isCombinedCharacter=L;var o={addChars:T,addFonts:B,getCharData:S,getFontByName:F,measureText:b,checkLoadedFonts:E,setIsLoaded:c};return l.prototype=o,l}(),k=function(){var t=xt,e=Math.abs;function n(L,c){var l=this.offsetTime,o;this.propType==="multidimensional"&&(o=O("float32",this.pv.length));for(var a=c.lastIndex,h=a,u=this.keyframes.length-1,f=!0,C,$,rt;f;){if(C=this.keyframes[h],$=this.keyframes[h+1],h===u-1&&L>=$.t-l){C.h&&(C=$),a=0;break}if($.t-l>L){a=h;break}h<u-1?h+=1:(a=0,f=!1)}rt=this.keyframesMetadata[h]||{};var at,it,Z,tt,W,g,d=$.t-l,v=C.t-l,q;if(C.to){rt.bezierData||(rt.bezierData=H.buildBezierData(C.s,$.s||C.e,C.to,C.ti));var Q=rt.bezierData;if(L>=d||L<v){var G=L>=d?Q.points.length-1:0;for(it=Q.points[G].point.length,at=0;at<it;at+=1)o[at]=Q.points[G].point[at]}else{rt.__fnct?g=rt.__fnct:(g=_.getBezierEasing(C.o.x,C.o.y,C.i.x,C.i.y,C.n).get,rt.__fnct=g),Z=g((L-v)/(d-v));var wt=Q.segmentLength*Z,St,Mt=c.lastFrame<L&&c._lastKeyframeIndex===h?c._lastAddedLength:0;for(W=c.lastFrame<L&&c._lastKeyframeIndex===h?c._lastPoint:0,f=!0,tt=Q.points.length;f;){if(Mt+=Q.points[W].partialLength,wt===0||Z===0||W===Q.points.length-1){for(it=Q.points[W].point.length,at=0;at<it;at+=1)o[at]=Q.points[W].point[at];break}else if(wt>=Mt&&wt<Mt+Q.points[W+1].partialLength){for(St=(wt-Mt)/Q.points[W+1].partialLength,it=Q.points[W].point.length,at=0;at<it;at+=1)o[at]=Q.points[W].point[at]+(Q.points[W+1].point[at]-Q.points[W].point[at])*St;break}W<tt-1?W+=1:f=!1}c._lastPoint=W,c._lastAddedLength=Mt-Q.points[W].partialLength,c._lastKeyframeIndex=h}}else{var Xt,ee,he,ue,me;if(u=C.s.length,q=$.s||C.e,this.sh&&C.h!==1)if(L>=d)o[0]=q[0],o[1]=q[1],o[2]=q[2];else if(L<=v)o[0]=C.s[0],o[1]=C.s[1],o[2]=C.s[2];else{var oe=r(C.s),Yt=r(q),pe=(L-v)/(d-v);s(o,i(oe,Yt,pe))}else for(h=0;h<u;h+=1)C.h!==1&&(L>=d?Z=1:L<v?Z=0:(C.o.x.constructor===Array?(rt.__fnct||(rt.__fnct=[]),rt.__fnct[h]?g=rt.__fnct[h]:(Xt=C.o.x[h]===void 0?C.o.x[0]:C.o.x[h],ee=C.o.y[h]===void 0?C.o.y[0]:C.o.y[h],he=C.i.x[h]===void 0?C.i.x[0]:C.i.x[h],ue=C.i.y[h]===void 0?C.i.y[0]:C.i.y[h],g=_.getBezierEasing(Xt,ee,he,ue).get,rt.__fnct[h]=g)):rt.__fnct?g=rt.__fnct:(Xt=C.o.x,ee=C.o.y,he=C.i.x,ue=C.i.y,g=_.getBezierEasing(Xt,ee,he,ue).get,C.keyframeMetadata=g),Z=g((L-v)/(d-v)))),q=$.s||C.e,me=C.h===1?C.s[h]:C.s[h]+(q[h]-C.s[h])*Z,this.propType==="multidimensional"?o[h]=me:o=me}return c.lastIndex=a,o}function i(L,c,l){var o=[],a=L[0],h=L[1],u=L[2],f=L[3],C=c[0],$=c[1],rt=c[2],at=c[3],it,Z,tt,W,g;return Z=a*C+h*$+u*rt+f*at,Z<0&&(Z=-Z,C=-C,$=-$,rt=-rt,at=-at),1-Z>1e-6?(it=Math.acos(Z),tt=Math.sin(it),W=Math.sin((1-l)*it)/tt,g=Math.sin(l*it)/tt):(W=1-l,g=l),o[0]=W*a+g*C,o[1]=W*h+g*$,o[2]=W*u+g*rt,o[3]=W*f+g*at,o}function s(L,c){var l=c[0],o=c[1],a=c[2],h=c[3],u=Math.atan2(2*o*h-2*l*a,1-2*o*o-2*a*a),f=Math.asin(2*l*o+2*a*h),C=Math.atan2(2*l*h-2*o*a,1-2*l*l-2*a*a);L[0]=u/Lt,L[1]=f/Lt,L[2]=C/Lt}function r(L){var c=L[0]*Lt,l=L[1]*Lt,o=L[2]*Lt,a=Math.cos(c/2),h=Math.cos(l/2),u=Math.cos(o/2),f=Math.sin(c/2),C=Math.sin(l/2),$=Math.sin(o/2),rt=a*h*u-f*C*$,at=f*C*u+a*h*$,it=f*h*u+a*C*$,Z=a*C*u-f*h*$;return[at,it,Z,rt]}function m(){var L=this.comp.renderedFrame-this.offsetTime,c=this.keyframes[0].t-this.offsetTime,l=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(L===this._caching.lastFrame||this._caching.lastFrame!==t&&(this._caching.lastFrame>=l&&L>=l||this._caching.lastFrame<c&&L<c))){this._caching.lastFrame>=L&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var o=this.interpolateValue(L,this._caching);this.pv=o}return this._caching.lastFrame=L,this.pv}function E(L){var c;if(this.propType==="unidimensional")c=L*this.mult,e(this.v-c)>1e-5&&(this.v=c,this._mdf=!0);else for(var l=0,o=this.v.length;l<o;)c=L[l]*this.mult,e(this.v[l]-c)>1e-5&&(this.v[l]=c,this._mdf=!0),l+=1}function w(){if(!(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)){if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=this._isFirstFrame;var L,c=this.effectsSequence.length,l=this.kf?this.pv:this.data.k;for(L=0;L<c;L+=1)l=this.effectsSequence[L](l);this.setVValue(l),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function B(L){this.effectsSequence.push(L),this.container.addDynamicProperty(this)}function T(L,c,l,o){this.propType="unidimensional",this.mult=l||1,this.data=c,this.v=l?c.k*l:c.k,this.pv=c.k,this._mdf=!1,this.elem=L,this.container=o,this.comp=L.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=w,this.setVValue=E,this.addEffect=B}function S(L,c,l,o){this.propType="multidimensional",this.mult=l||1,this.data=c,this._mdf=!1,this.elem=L,this.container=o,this.comp=L.comp,this.k=!1,this.kf=!1,this.frameId=-1;var a,h=c.k.length;for(this.v=O("float32",h),this.pv=O("float32",h),this.vel=O("float32",h),a=0;a<h;a+=1)this.v[a]=c.k[a]*this.mult,this.pv[a]=c.k[a];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=w,this.setVValue=E,this.addEffect=B}function b(L,c,l,o){this.propType="unidimensional",this.keyframes=c.k,this.keyframesMetadata=[],this.offsetTime=L.data.st,this.frameId=-1,this._caching={lastFrame:t,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=c,this.mult=l||1,this.elem=L,this.container=o,this.comp=L.comp,this.v=t,this.pv=t,this._isFirstFrame=!0,this.getValue=w,this.setVValue=E,this.interpolateValue=n,this.effectsSequence=[m.bind(this)],this.addEffect=B}function F(L,c,l,o){this.propType="multidimensional";var a,h=c.k.length,u,f,C,$;for(a=0;a<h-1;a+=1)c.k[a].to&&c.k[a].s&&c.k[a+1]&&c.k[a+1].s&&(u=c.k[a].s,f=c.k[a+1].s,C=c.k[a].to,$=c.k[a].ti,(u.length===2&&!(u[0]===f[0]&&u[1]===f[1])&&H.pointOnLine2D(u[0],u[1],f[0],f[1],u[0]+C[0],u[1]+C[1])&&H.pointOnLine2D(u[0],u[1],f[0],f[1],f[0]+$[0],f[1]+$[1])||u.length===3&&!(u[0]===f[0]&&u[1]===f[1]&&u[2]===f[2])&&H.pointOnLine3D(u[0],u[1],u[2],f[0],f[1],f[2],u[0]+C[0],u[1]+C[1],u[2]+C[2])&&H.pointOnLine3D(u[0],u[1],u[2],f[0],f[1],f[2],f[0]+$[0],f[1]+$[1],f[2]+$[2]))&&(c.k[a].to=null,c.k[a].ti=null),u[0]===f[0]&&u[1]===f[1]&&C[0]===0&&C[1]===0&&$[0]===0&&$[1]===0&&(u.length===2||u[2]===f[2]&&C[2]===0&&$[2]===0)&&(c.k[a].to=null,c.k[a].ti=null));this.effectsSequence=[m.bind(this)],this.data=c,this.keyframes=c.k,this.keyframesMetadata=[],this.offsetTime=L.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=l||1,this.elem=L,this.container=o,this.comp=L.comp,this.getValue=w,this.setVValue=E,this.interpolateValue=n,this.frameId=-1;var rt=c.k[0].s.length;for(this.v=O("float32",rt),this.pv=O("float32",rt),a=0;a<rt;a+=1)this.v[a]=t,this.pv[a]=t;this._caching={lastFrame:t,lastIndex:0,value:O("float32",rt)},this.addEffect=B}function R(L,c,l,o,a){var h;if(!c.k.length)h=new T(L,c,o,a);else if(typeof c.k[0]=="number")h=new S(L,c,o,a);else switch(l){case 0:h=new b(L,c,o,a);break;case 1:h=new F(L,c,o,a);break}return h.effectsSequence.length&&a.addDynamicProperty(h),h}var I={getProp:R};return I}(),D=function(){var t=[0,0];function e(w){var B=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||B,this.a&&w.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&w.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&w.skewFromAxis(-this.sk.v,this.sa.v),this.r?w.rotate(-this.r.v):w.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?w.translate(this.px.v,this.py.v,-this.pz.v):w.translate(this.px.v,this.py.v,0):w.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function n(w){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||w){var B;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var T,S;if(B=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(T=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/B,0),S=this.p.getValueAtTime(this.p.keyframes[0].t/B,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(T=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/B,0),S=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/B,0)):(T=this.p.pv,S=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/B,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){T=[],S=[];var b=this.px,F=this.py;b._caching.lastFrame+b.offsetTime<=b.keyframes[0].t?(T[0]=b.getValueAtTime((b.keyframes[0].t+.01)/B,0),T[1]=F.getValueAtTime((F.keyframes[0].t+.01)/B,0),S[0]=b.getValueAtTime(b.keyframes[0].t/B,0),S[1]=F.getValueAtTime(F.keyframes[0].t/B,0)):b._caching.lastFrame+b.offsetTime>=b.keyframes[b.keyframes.length-1].t?(T[0]=b.getValueAtTime(b.keyframes[b.keyframes.length-1].t/B,0),T[1]=F.getValueAtTime(F.keyframes[F.keyframes.length-1].t/B,0),S[0]=b.getValueAtTime((b.keyframes[b.keyframes.length-1].t-.01)/B,0),S[1]=F.getValueAtTime((F.keyframes[F.keyframes.length-1].t-.01)/B,0)):(T=[b.pv,F.pv],S[0]=b.getValueAtTime((b._caching.lastFrame+b.offsetTime-.01)/B,b.offsetTime),S[1]=F.getValueAtTime((F._caching.lastFrame+F.offsetTime-.01)/B,F.offsetTime))}else S=t,T=S;this.v.rotate(-Math.atan2(T[1]-S[1],T[0]-S[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function i(){if(!this.a.k)this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1;else return;if(!this.s.effectsSequence.length)this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2;else return;if(this.sk)if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length)this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3;else return;this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length&&(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}function s(){}function r(w){this._addDynamicProperty(w),this.elem.addDynamicProperty(w),this._isDirty=!0}function m(w,B,T){if(this.elem=w,this.frameId=-1,this.propType="transform",this.data=B,this.v=new y,this.pre=new y,this.appliedTransformations=0,this.initDynamicPropertyContainer(T||w),B.p&&B.p.s?(this.px=k.getProp(w,B.p.x,0,0,this),this.py=k.getProp(w,B.p.y,0,0,this),B.p.z&&(this.pz=k.getProp(w,B.p.z,0,0,this))):this.p=k.getProp(w,B.p||{k:[0,0,0]},1,0,this),B.rx){if(this.rx=k.getProp(w,B.rx,0,Lt,this),this.ry=k.getProp(w,B.ry,0,Lt,this),this.rz=k.getProp(w,B.rz,0,Lt,this),B.or.k[0].ti){var S,b=B.or.k.length;for(S=0;S<b;S+=1)B.or.k[S].to=null,B.or.k[S].ti=null}this.or=k.getProp(w,B.or,1,Lt,this),this.or.sh=!0}else this.r=k.getProp(w,B.r||{k:0},0,Lt,this);B.sk&&(this.sk=k.getProp(w,B.sk,0,Lt,this),this.sa=k.getProp(w,B.sa,0,Lt,this)),this.a=k.getProp(w,B.a||{k:[0,0,0]},1,0,this),this.s=k.getProp(w,B.s||{k:[100,100,100]},1,.01,this),B.o?this.o=k.getProp(w,B.o,0,.01,w):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}m.prototype={applyToMatrix:e,getValue:n,precalculateMatrix:i,autoOrient:s},x([lt],m),m.prototype.addDynamicProperty=r,m.prototype._addDynamicProperty=lt.prototype.addDynamicProperty;function E(w,B,T){return new m(w,B,T)}return{getTransformProperty:E}}();function st(){this.c=!1,this._length=0,this._maxLength=8,this.v=X(this._maxLength),this.o=X(this._maxLength),this.i=X(this._maxLength)}st.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var n=0;n<e;)this.v[n]=_e.newElement(),this.o[n]=_e.newElement(),this.i[n]=_e.newElement(),n+=1},st.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},st.prototype.doubleArrayLength=function(){this.v=this.v.concat(X(this._maxLength)),this.i=this.i.concat(X(this._maxLength)),this.o=this.o.concat(X(this._maxLength)),this._maxLength*=2},st.prototype.setXYAt=function(t,e,n,i,s){var r;switch(this._length=Math.max(this._length,i+1),this._length>=this._maxLength&&this.doubleArrayLength(),n){case"v":r=this.v;break;case"i":r=this.i;break;case"o":r=this.o;break;default:r=[];break}(!r[i]||r[i]&&!s)&&(r[i]=_e.newElement()),r[i][0]=t,r[i][1]=e},st.prototype.setTripleAt=function(t,e,n,i,s,r,m,E){this.setXYAt(t,e,"v",m,E),this.setXYAt(n,i,"o",m,E),this.setXYAt(s,r,"i",m,E)},st.prototype.reverse=function(){var t=new st;t.setPathData(this.c,this._length);var e=this.v,n=this.o,i=this.i,s=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],i[0][0],i[0][1],n[0][0],n[0][1],0,!1),s=1);var r=this._length-1,m=this._length,E;for(E=s;E<m;E+=1)t.setTripleAt(e[r][0],e[r][1],i[r][0],i[r][1],n[r][0],n[r][1],E,!1),r-=1;return t};var ht=function(){var t=-999999;function e(c,l,o){var a=o.lastIndex,h,u,f,C,$,rt,at,it,Z,tt=this.keyframes;if(c<tt[0].t-this.offsetTime)h=tt[0].s[0],f=!0,a=0;else if(c>=tt[tt.length-1].t-this.offsetTime)h=tt[tt.length-1].s?tt[tt.length-1].s[0]:tt[tt.length-2].e[0],f=!0;else{for(var W=a,g=tt.length-1,d=!0,v,q,Q;d&&(v=tt[W],q=tt[W+1],!(q.t-this.offsetTime>c));)W<g-1?W+=1:d=!1;if(Q=this.keyframesMetadata[W]||{},f=v.h===1,a=W,!f){if(c>=q.t-this.offsetTime)it=1;else if(c<v.t-this.offsetTime)it=0;else{var G;Q.__fnct?G=Q.__fnct:(G=_.getBezierEasing(v.o.x,v.o.y,v.i.x,v.i.y).get,Q.__fnct=G),it=G((c-(v.t-this.offsetTime))/(q.t-this.offsetTime-(v.t-this.offsetTime)))}u=q.s?q.s[0]:v.e[0]}h=v.s[0]}for(rt=l._length,at=h.i[0].length,o.lastIndex=a,C=0;C<rt;C+=1)for($=0;$<at;$+=1)Z=f?h.i[C][$]:h.i[C][$]+(u.i[C][$]-h.i[C][$])*it,l.i[C][$]=Z,Z=f?h.o[C][$]:h.o[C][$]+(u.o[C][$]-h.o[C][$])*it,l.o[C][$]=Z,Z=f?h.v[C][$]:h.v[C][$]+(u.v[C][$]-h.v[C][$])*it,l.v[C][$]=Z}function n(){var c=this.comp.renderedFrame-this.offsetTime,l=this.keyframes[0].t-this.offsetTime,o=this.keyframes[this.keyframes.length-1].t-this.offsetTime,a=this._caching.lastFrame;return a!==t&&(a<l&&c<l||a>o&&c>o)||(this._caching.lastIndex=a<c?this._caching.lastIndex:0,this.interpolateShape(c,this.pv,this._caching)),this._caching.lastFrame=c,this.pv}function i(){this.paths=this.localShapeCollection}function s(c,l){if(c._length!==l._length||c.c!==l.c)return!1;var o,a=c._length;for(o=0;o<a;o+=1)if(c.v[o][0]!==l.v[o][0]||c.v[o][1]!==l.v[o][1]||c.o[o][0]!==l.o[o][0]||c.o[o][1]!==l.o[o][1]||c.i[o][0]!==l.i[o][0]||c.i[o][1]!==l.i[o][1])return!1;return!0}function r(c){s(this.v,c)||(this.v=ae.clone(c),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function m(){if(this.elem.globalData.frameId!==this.frameId){if(!this.effectsSequence.length){this._mdf=!1;return}if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=!1;var c;this.kf?c=this.pv:this.data.ks?c=this.data.ks.k:c=this.data.pt.k;var l,o=this.effectsSequence.length;for(l=0;l<o;l+=1)c=this.effectsSequence[l](c);this.setVValue(c),this.lock=!1,this.frameId=this.elem.globalData.frameId}}function E(c,l,o){this.propType="shape",this.comp=c.comp,this.container=c,this.elem=c,this.data=l,this.k=!1,this.kf=!1,this._mdf=!1;var a=o===3?l.pt.k:l.ks.k;this.v=ae.clone(a),this.pv=ae.clone(this.v),this.localShapeCollection=se.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=i,this.effectsSequence=[]}function w(c){this.effectsSequence.push(c),this.container.addDynamicProperty(this)}E.prototype.interpolateShape=e,E.prototype.getValue=m,E.prototype.setVValue=r,E.prototype.addEffect=w;function B(c,l,o){this.propType="shape",this.comp=c.comp,this.elem=c,this.container=c,this.offsetTime=c.data.st,this.keyframes=o===3?l.pt.k:l.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var a=this.keyframes[0].s[0].i.length;this.v=ae.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,a),this.pv=ae.clone(this.v),this.localShapeCollection=se.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=t,this.reset=i,this._caching={lastFrame:t,lastIndex:0},this.effectsSequence=[n.bind(this)]}B.prototype.getValue=m,B.prototype.interpolateShape=e,B.prototype.setVValue=r,B.prototype.addEffect=w;var T=function(){var c=ie;function l(o,a){this.v=ae.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=se.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=a.d,this.elem=o,this.comp=o.comp,this.frameId=-1,this.initDynamicPropertyContainer(o),this.p=k.getProp(o,a.p,1,0,this),this.s=k.getProp(o,a.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return l.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var o=this.p.v[0],a=this.p.v[1],h=this.s.v[0]/2,u=this.s.v[1]/2,f=this.d!==3,C=this.v;C.v[0][0]=o,C.v[0][1]=a-u,C.v[1][0]=f?o+h:o-h,C.v[1][1]=a,C.v[2][0]=o,C.v[2][1]=a+u,C.v[3][0]=f?o-h:o+h,C.v[3][1]=a,C.i[0][0]=f?o-h*c:o+h*c,C.i[0][1]=a-u,C.i[1][0]=f?o+h:o-h,C.i[1][1]=a-u*c,C.i[2][0]=f?o+h*c:o-h*c,C.i[2][1]=a+u,C.i[3][0]=f?o-h:o+h,C.i[3][1]=a+u*c,C.o[0][0]=f?o+h*c:o-h*c,C.o[0][1]=a-u,C.o[1][0]=f?o+h:o-h,C.o[1][1]=a+u*c,C.o[2][0]=f?o-h*c:o+h*c,C.o[2][1]=a+u,C.o[3][0]=f?o-h:o+h,C.o[3][1]=a-u*c}},x([lt],l),l}(),S=function(){function c(l,o){this.v=ae.newElement(),this.v.setPathData(!0,0),this.elem=l,this.comp=l.comp,this.data=o,this.frameId=-1,this.d=o.d,this.initDynamicPropertyContainer(l),o.sy===1?(this.ir=k.getProp(l,o.ir,0,0,this),this.is=k.getProp(l,o.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=k.getProp(l,o.pt,0,0,this),this.p=k.getProp(l,o.p,1,0,this),this.r=k.getProp(l,o.r,0,Lt,this),this.or=k.getProp(l,o.or,0,0,this),this.os=k.getProp(l,o.os,0,.01,this),this.localShapeCollection=se.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return c.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var l=Math.floor(this.pt.v)*2,o=Math.PI*2/l,a=!0,h=this.or.v,u=this.ir.v,f=this.os.v,C=this.is.v,$=2*Math.PI*h/(l*2),rt=2*Math.PI*u/(l*2),at,it,Z,tt,W=-Math.PI/2;W+=this.r.v;var g=this.data.d===3?-1:1;for(this.v._length=0,at=0;at<l;at+=1){it=a?h:u,Z=a?f:C,tt=a?$:rt;var d=it*Math.cos(W),v=it*Math.sin(W),q=d===0&&v===0?0:v/Math.sqrt(d*d+v*v),Q=d===0&&v===0?0:-d/Math.sqrt(d*d+v*v);d+=+this.p.v[0],v+=+this.p.v[1],this.v.setTripleAt(d,v,d-q*tt*Z*g,v-Q*tt*Z*g,d+q*tt*Z*g,v+Q*tt*Z*g,at,!0),a=!a,W+=o*g}},convertPolygonToPath:function(){var l=Math.floor(this.pt.v),o=Math.PI*2/l,a=this.or.v,h=this.os.v,u=2*Math.PI*a/(l*4),f,C=-Math.PI*.5,$=this.data.d===3?-1:1;for(C+=this.r.v,this.v._length=0,f=0;f<l;f+=1){var rt=a*Math.cos(C),at=a*Math.sin(C),it=rt===0&&at===0?0:at/Math.sqrt(rt*rt+at*at),Z=rt===0&&at===0?0:-rt/Math.sqrt(rt*rt+at*at);rt+=+this.p.v[0],at+=+this.p.v[1],this.v.setTripleAt(rt,at,rt-it*u*h*$,at-Z*u*h*$,rt+it*u*h*$,at+Z*u*h*$,f,!0),C+=o*$}this.paths.length=0,this.paths[0]=this.v}},x([lt],c),c}(),b=function(){function c(l,o){this.v=ae.newElement(),this.v.c=!0,this.localShapeCollection=se.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=l,this.comp=l.comp,this.frameId=-1,this.d=o.d,this.initDynamicPropertyContainer(l),this.p=k.getProp(l,o.p,1,0,this),this.s=k.getProp(l,o.s,1,0,this),this.r=k.getProp(l,o.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return c.prototype={convertRectToPath:function(){var l=this.p.v[0],o=this.p.v[1],a=this.s.v[0]/2,h=this.s.v[1]/2,u=de(a,h,this.r.v),f=u*(1-ie);this.v._length=0,this.d===2||this.d===1?(this.v.setTripleAt(l+a,o-h+u,l+a,o-h+u,l+a,o-h+f,0,!0),this.v.setTripleAt(l+a,o+h-u,l+a,o+h-f,l+a,o+h-u,1,!0),u!==0?(this.v.setTripleAt(l+a-u,o+h,l+a-u,o+h,l+a-f,o+h,2,!0),this.v.setTripleAt(l-a+u,o+h,l-a+f,o+h,l-a+u,o+h,3,!0),this.v.setTripleAt(l-a,o+h-u,l-a,o+h-u,l-a,o+h-f,4,!0),this.v.setTripleAt(l-a,o-h+u,l-a,o-h+f,l-a,o-h+u,5,!0),this.v.setTripleAt(l-a+u,o-h,l-a+u,o-h,l-a+f,o-h,6,!0),this.v.setTripleAt(l+a-u,o-h,l+a-f,o-h,l+a-u,o-h,7,!0)):(this.v.setTripleAt(l-a,o+h,l-a+f,o+h,l-a,o+h,2),this.v.setTripleAt(l-a,o-h,l-a,o-h+f,l-a,o-h,3))):(this.v.setTripleAt(l+a,o-h+u,l+a,o-h+f,l+a,o-h+u,0,!0),u!==0?(this.v.setTripleAt(l+a-u,o-h,l+a-u,o-h,l+a-f,o-h,1,!0),this.v.setTripleAt(l-a+u,o-h,l-a+f,o-h,l-a+u,o-h,2,!0),this.v.setTripleAt(l-a,o-h+u,l-a,o-h+u,l-a,o-h+f,3,!0),this.v.setTripleAt(l-a,o+h-u,l-a,o+h-f,l-a,o+h-u,4,!0),this.v.setTripleAt(l-a+u,o+h,l-a+u,o+h,l-a+f,o+h,5,!0),this.v.setTripleAt(l+a-u,o+h,l+a-f,o+h,l+a-u,o+h,6,!0),this.v.setTripleAt(l+a,o+h-u,l+a,o+h-u,l+a,o+h-f,7,!0)):(this.v.setTripleAt(l-a,o-h,l-a+f,o-h,l-a,o-h,1,!0),this.v.setTripleAt(l-a,o+h,l-a,o+h-f,l-a,o+h,2,!0),this.v.setTripleAt(l+a,o+h,l+a-f,o+h,l+a,o+h,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:i},x([lt],c),c}();function F(c,l,o){var a;if(o===3||o===4){var h=o===3?l.pt:l.ks,u=h.k;u.length?a=new B(c,l,o):a=new E(c,l,o)}else o===5?a=new b(c,l):o===6?a=new T(c,l):o===7&&(a=new S(c,l));return a.k&&c.addDynamicProperty(a),a}function R(){return E}function I(){return B}var L={};return L.getShapeProp=F,L.getConstructorFunction=R,L.getKeyframedConstructorFunction=I,L}(),Y=function(){var t={},e={};t.registerModifier=n,t.getModifier=i;function n(s,r){e[s]||(e[s]=r)}function i(s,r,m){return new e[s](r,m)}return t}();function dt(){}dt.prototype.initModifierProperties=function(){},dt.prototype.addShapeToModifier=function(){},dt.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:se.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},dt.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=xt,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},dt.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},x([lt],dt);function ft(){}x([dt],ft),ft.prototype.initModifierProperties=function(t,e){this.s=k.getProp(t,e.s,0,.01,this),this.e=k.getProp(t,e.e,0,.01,this),this.o=k.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},ft.prototype.addShapeToModifier=function(t){t.pathsData=[]},ft.prototype.calculateShapeEdges=function(t,e,n,i,s){var r=[];e<=1?r.push({s:t,e}):t>=1?r.push({s:t-1,e:e-1}):(r.push({s:t,e:1}),r.push({s:0,e:e-1}));var m=[],E,w=r.length,B;for(E=0;E<w;E+=1)if(B=r[E],!(B.e*s<i||B.s*s>i+n)){var T,S;B.s*s<=i?T=0:T=(B.s*s-i)/n,B.e*s>=i+n?S=1:S=(B.e*s-i)/n,m.push([T,S])}return m.length||m.push([0,0]),m},ft.prototype.releasePathsData=function(t){var e,n=t.length;for(e=0;e<n;e+=1)Je.release(t[e]);return t.length=0,t},ft.prototype.processShapes=function(t){var e,n;if(this._mdf||t){var i=this.o.v%360/360;if(i<0&&(i+=1),this.s.v>1?e=1+i:this.s.v<0?e=0+i:e=this.s.v+i,this.e.v>1?n=1+i:this.e.v<0?n=0+i:n=this.e.v+i,e>n){var s=e;e=n,n=s}e=Math.round(e*1e4)*1e-4,n=Math.round(n*1e4)*1e-4,this.sValue=e,this.eValue=n}else e=this.sValue,n=this.eValue;var r,m,E=this.shapes.length,w,B,T,S,b,F=0;if(n===e)for(m=0;m<E;m+=1)this.shapes[m].localShapeCollection.releaseShapes(),this.shapes[m].shape._mdf=!0,this.shapes[m].shape.paths=this.shapes[m].localShapeCollection,this._mdf&&(this.shapes[m].pathsData.length=0);else if(n===1&&e===0||n===0&&e===1){if(this._mdf)for(m=0;m<E;m+=1)this.shapes[m].pathsData.length=0,this.shapes[m].shape._mdf=!0}else{var R=[],I,L;for(m=0;m<E;m+=1)if(I=this.shapes[m],!I.shape._mdf&&!this._mdf&&!t&&this.m!==2)I.shape.paths=I.localShapeCollection;else{if(r=I.shape.paths,B=r._length,b=0,!I.shape._mdf&&I.pathsData.length)b=I.totalShapeLength;else{for(T=this.releasePathsData(I.pathsData),w=0;w<B;w+=1)S=H.getSegmentsLength(r.shapes[w]),T.push(S),b+=S.totalLength;I.totalShapeLength=b,I.pathsData=T}F+=b,I.shape._mdf=!0}var c=e,l=n,o=0,a;for(m=E-1;m>=0;m-=1)if(I=this.shapes[m],I.shape._mdf){for(L=I.localShapeCollection,L.releaseShapes(),this.m===2&&E>1?(a=this.calculateShapeEdges(e,n,I.totalShapeLength,o,F),o+=I.totalShapeLength):a=[[c,l]],B=a.length,w=0;w<B;w+=1){c=a[w][0],l=a[w][1],R.length=0,l<=1?R.push({s:I.totalShapeLength*c,e:I.totalShapeLength*l}):c>=1?R.push({s:I.totalShapeLength*(c-1),e:I.totalShapeLength*(l-1)}):(R.push({s:I.totalShapeLength*c,e:I.totalShapeLength}),R.push({s:0,e:I.totalShapeLength*(l-1)}));var h=this.addShapes(I,R[0]);if(R[0].s!==R[0].e){if(R.length>1){var u=I.shape.paths.shapes[I.shape.paths._length-1];if(u.c){var f=h.pop();this.addPaths(h,L),h=this.addShapes(I,R[1],f)}else this.addPaths(h,L),h=this.addShapes(I,R[1])}this.addPaths(h,L)}}I.shape.paths=L}}},ft.prototype.addPaths=function(t,e){var n,i=t.length;for(n=0;n<i;n+=1)e.addShape(t[n])},ft.prototype.addSegment=function(t,e,n,i,s,r,m){s.setXYAt(e[0],e[1],"o",r),s.setXYAt(n[0],n[1],"i",r+1),m&&s.setXYAt(t[0],t[1],"v",r),s.setXYAt(i[0],i[1],"v",r+1)},ft.prototype.addSegmentFromArray=function(t,e,n,i){e.setXYAt(t[1],t[5],"o",n),e.setXYAt(t[2],t[6],"i",n+1),i&&e.setXYAt(t[0],t[4],"v",n),e.setXYAt(t[3],t[7],"v",n+1)},ft.prototype.addShapes=function(t,e,n){var i=t.pathsData,s=t.shape.paths.shapes,r,m=t.shape.paths._length,E,w,B=0,T,S,b,F,R=[],I,L=!0;for(n?(S=n._length,I=n._length):(n=ae.newElement(),S=0,I=0),R.push(n),r=0;r<m;r+=1){for(b=i[r].lengths,n.c=s[r].c,w=s[r].c?b.length:b.length+1,E=1;E<w;E+=1)if(T=b[E-1],B+T.addedLength<e.s)B+=T.addedLength,n.c=!1;else if(B>e.e){n.c=!1;break}else e.s<=B&&e.e>=B+T.addedLength?(this.addSegment(s[r].v[E-1],s[r].o[E-1],s[r].i[E],s[r].v[E],n,S,L),L=!1):(F=H.getNewSegment(s[r].v[E-1],s[r].v[E],s[r].o[E-1],s[r].i[E],(e.s-B)/T.addedLength,(e.e-B)/T.addedLength,b[E-1]),this.addSegmentFromArray(F,n,S,L),L=!1,n.c=!1),B+=T.addedLength,S+=1;if(s[r].c&&b.length){if(T=b[E-1],B<=e.e){var c=b[E-1].addedLength;e.s<=B&&e.e>=B+c?(this.addSegment(s[r].v[E-1],s[r].o[E-1],s[r].i[0],s[r].v[0],n,S,L),L=!1):(F=H.getNewSegment(s[r].v[E-1],s[r].v[0],s[r].o[E-1],s[r].i[0],(e.s-B)/c,(e.e-B)/c,b[E-1]),this.addSegmentFromArray(F,n,S,L),L=!1,n.c=!1)}else n.c=!1;B+=T.addedLength,S+=1}if(n._length&&(n.setXYAt(n.v[I][0],n.v[I][1],"i",I),n.setXYAt(n.v[n._length-1][0],n.v[n._length-1][1],"o",n._length-1)),B>e.e)break;r<m-1&&(n=ae.newElement(),L=!0,R.push(n),S=0)}return R},Y.registerModifier("tm",ft);function vt(){}x([dt],vt),vt.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=k.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},vt.prototype.processPath=function(t,e){var n=ae.newElement();n.c=t.c;var i,s=t._length,r,m,E,w,B,T,S=0,b,F,R,I,L,c;for(i=0;i<s;i+=1)r=t.v[i],E=t.o[i],m=t.i[i],r[0]===E[0]&&r[1]===E[1]&&r[0]===m[0]&&r[1]===m[1]?(i===0||i===s-1)&&!t.c?(n.setTripleAt(r[0],r[1],E[0],E[1],m[0],m[1],S),S+=1):(i===0?w=t.v[s-1]:w=t.v[i-1],B=Math.sqrt(Math.pow(r[0]-w[0],2)+Math.pow(r[1]-w[1],2)),T=B?Math.min(B/2,e)/B:0,L=r[0]+(w[0]-r[0])*T,b=L,c=r[1]-(r[1]-w[1])*T,F=c,R=b-(b-r[0])*ie,I=F-(F-r[1])*ie,n.setTripleAt(b,F,R,I,L,c,S),S+=1,i===s-1?w=t.v[0]:w=t.v[i+1],B=Math.sqrt(Math.pow(r[0]-w[0],2)+Math.pow(r[1]-w[1],2)),T=B?Math.min(B/2,e)/B:0,R=r[0]+(w[0]-r[0])*T,b=R,I=r[1]+(w[1]-r[1])*T,F=I,L=b-(b-r[0])*ie,c=F-(F-r[1])*ie,n.setTripleAt(b,F,R,I,L,c,S),S+=1):(n.setTripleAt(t.v[i][0],t.v[i][1],t.o[i][0],t.o[i][1],t.i[i][0],t.i[i][1],S),S+=1);return n},vt.prototype.processShapes=function(t){var e,n,i=this.shapes.length,s,r,m=this.rd.v;if(m!==0){var E,w;for(n=0;n<i;n+=1){if(E=this.shapes[n],w=E.localShapeCollection,!(!E.shape._mdf&&!this._mdf&&!t))for(w.releaseShapes(),E.shape._mdf=!0,e=E.shape.paths.shapes,r=E.shape.paths._length,s=0;s<r;s+=1)w.addShape(this.processPath(e[s],m));E.shape.paths=E.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)},Y.registerModifier("rd",vt);function Pt(){}x([dt],Pt),Pt.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=k.getProp(t,e.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},Pt.prototype.processPath=function(t,e){var n=e/100,i=[0,0],s=t._length,r=0;for(r=0;r<s;r+=1)i[0]+=t.v[r][0],i[1]+=t.v[r][1];i[0]/=s,i[1]/=s;var m=ae.newElement();m.c=t.c;var E,w,B,T,S,b;for(r=0;r<s;r+=1)E=t.v[r][0]+(i[0]-t.v[r][0])*n,w=t.v[r][1]+(i[1]-t.v[r][1])*n,B=t.o[r][0]+(i[0]-t.o[r][0])*-n,T=t.o[r][1]+(i[1]-t.o[r][1])*-n,S=t.i[r][0]+(i[0]-t.i[r][0])*-n,b=t.i[r][1]+(i[1]-t.i[r][1])*-n,m.setTripleAt(E,w,B,T,S,b,r);return m},Pt.prototype.processShapes=function(t){var e,n,i=this.shapes.length,s,r,m=this.amount.v;if(m!==0){var E,w;for(n=0;n<i;n+=1){if(E=this.shapes[n],w=E.localShapeCollection,!(!E.shape._mdf&&!this._mdf&&!t))for(w.releaseShapes(),E.shape._mdf=!0,e=E.shape.paths.shapes,r=E.shape.paths._length,s=0;s<r;s+=1)w.addShape(this.processPath(e[s],m));E.shape.paths=E.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)},Y.registerModifier("pb",Pt);function ut(){}x([dt],ut),ut.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=k.getProp(t,e.c,0,null,this),this.o=k.getProp(t,e.o,0,null,this),this.tr=D.getTransformProperty(t,e.tr,this),this.so=k.getProp(t,e.tr.so,0,.01,this),this.eo=k.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new y,this.rMatrix=new y,this.sMatrix=new y,this.tMatrix=new y,this.matrix=new y},ut.prototype.applyTransforms=function(t,e,n,i,s,r){var m=r?-1:1,E=i.s.v[0]+(1-i.s.v[0])*(1-s),w=i.s.v[1]+(1-i.s.v[1])*(1-s);t.translate(i.p.v[0]*m*s,i.p.v[1]*m*s,i.p.v[2]),e.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),e.rotate(-i.r.v*m*s),e.translate(i.a.v[0],i.a.v[1],i.a.v[2]),n.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),n.scale(r?1/E:E,r?1/w:w),n.translate(i.a.v[0],i.a.v[1],i.a.v[2])},ut.prototype.init=function(t,e,n,i){for(this.elem=t,this.arr=e,this.pos=n,this.elemsData=i,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[n]);n>0;)n-=1,this._elements.unshift(e[n]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ut.prototype.resetElements=function(t){var e,n=t.length;for(e=0;e<n;e+=1)t[e]._processed=!1,t[e].ty==="gr"&&this.resetElements(t[e].it)},ut.prototype.cloneElements=function(t){var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},ut.prototype.changeGroupRender=function(t,e){var n,i=t.length;for(n=0;n<i;n+=1)t[n]._render=e,t[n].ty==="gr"&&this.changeGroupRender(t[n].it,e)},ut.prototype.processShapes=function(t){var e,n,i,s,r,m=!1;if(this._mdf||t){var E=Math.ceil(this.c.v);if(this._groups.length<E){for(;this._groups.length<E;){var w={it:this.cloneElements(this._elements),ty:"gr"};w.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,w),this._groups.splice(0,0,w),this._currentCopies+=1}this.elem.reloadShapes(),m=!0}r=0;var B;for(i=0;i<=this._groups.length-1;i+=1){if(B=r<E,this._groups[i]._render=B,this.changeGroupRender(this._groups[i].it,B),!B){var T=this.elemsData[i].it,S=T[T.length-1];S.transform.op.v!==0?(S.transform.op._mdf=!0,S.transform.op.v=0):S.transform.op._mdf=!1}r+=1}this._currentCopies=E;var b=this.o.v,F=b%1,R=b>0?Math.floor(b):Math.ceil(b),I=this.pMatrix.props,L=this.rMatrix.props,c=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var l=0;if(b>0){for(;l<R;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),l+=1;F&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,F,!1),l+=F)}else if(b<0){for(;l>R;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),l-=1;F&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-F,!0),l-=F)}i=this.data.m===1?0:this._currentCopies-1,s=this.data.m===1?1:-1,r=this._currentCopies;for(var o,a;r;){if(e=this.elemsData[i].it,n=e[e.length-1].transform.mProps.v.props,a=n.length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=this._currentCopies===1?this.so.v:this.so.v+(this.eo.v-this.so.v)*(i/(this._currentCopies-1)),l!==0){for((i!==0&&s===1||i!==this._currentCopies-1&&s===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(L[0],L[1],L[2],L[3],L[4],L[5],L[6],L[7],L[8],L[9],L[10],L[11],L[12],L[13],L[14],L[15]),this.matrix.transform(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15]),this.matrix.transform(I[0],I[1],I[2],I[3],I[4],I[5],I[6],I[7],I[8],I[9],I[10],I[11],I[12],I[13],I[14],I[15]),o=0;o<a;o+=1)n[o]=this.matrix.props[o];this.matrix.reset()}else for(this.matrix.reset(),o=0;o<a;o+=1)n[o]=this.matrix.props[o];l+=1,r-=1,i+=s}}else for(r=this._currentCopies,i=0,s=1;r;)e=this.elemsData[i].it,n=e[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,r-=1,i+=s;return m},ut.prototype.addShape=function(){},Y.registerModifier("rp",ut);function _t(){this._length=0,this._maxLength=4,this.shapes=X(this._maxLength)}_t.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(X(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},_t.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)ae.release(this.shapes[t]);this._length=0};function gt(t,e,n,i){this.elem=t,this.frameId=-1,this.dataProps=X(e.length),this.renderer=n,this.k=!1,this.dashStr="",this.dashArray=O("float32",e.length?e.length-1:0),this.dashoffset=O("float32",1),this.initDynamicPropertyContainer(i);var s,r=e.length||0,m;for(s=0;s<r;s+=1)m=k.getProp(t,e[s].v,0,0,this),this.k=m.k||this.k,this.dataProps[s]={n:e[s].n,p:m};this.k||this.getValue(!0),this._isAnimated=this.k}gt.prototype.getValue=function(t){if(!(this.elem.globalData.frameId===this.frameId&&!t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,n=this.dataProps.length;for(this.renderer==="svg"&&(this.dashStr=""),e=0;e<n;e+=1)this.dataProps[e].n!=="o"?this.renderer==="svg"?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},x([lt],gt);function bt(t,e,n){this.data=e,this.c=O("uint8c",e.p*4);var i=e.k.k[0].s?e.k.k[0].s.length-e.p*4:e.k.k.length-e.p*4;this.o=O("float32",i),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=i,this.initDynamicPropertyContainer(n),this.prop=k.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}bt.prototype.comparePoints=function(t,e){for(var n=0,i=this.o.length/2,s;n<i;){if(s=Math.abs(t[n*4]-t[e*4+n*2]),s>.01)return!1;n+=1}return!0},bt.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},bt.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,n=this.data.p*4,i,s;for(e=0;e<n;e+=1)i=e%4===0?100:255,s=Math.round(this.prop.v[e]*i),this.c[e]!==s&&(this.c[e]=s,this._cmdf=!t);if(this.o.length)for(n=this.prop.v.length,e=this.data.p*4;e<n;e+=1)i=e%2===0?100:1,s=e%2===0?Math.round(this.prop.v[e]*100):this.prop.v[e],this.o[e-this.data.p*4]!==s&&(this.o[e-this.data.p*4]=s,this._omdf=!t);this._mdf=!t}},x([lt],bt);var re=function(t,e,n,i){if(e===0)return"";var s=t.o,r=t.i,m=t.v,E,w=" M"+i.applyToPointStringified(m[0][0],m[0][1]);for(E=1;E<e;E+=1)w+=" C"+i.applyToPointStringified(s[E-1][0],s[E-1][1])+" "+i.applyToPointStringified(r[E][0],r[E][1])+" "+i.applyToPointStringified(m[E][0],m[E][1]);return n&&e&&(w+=" C"+i.applyToPointStringified(s[E-1][0],s[E-1][1])+" "+i.applyToPointStringified(r[0][0],r[0][1])+" "+i.applyToPointStringified(m[0][0],m[0][1]),w+="z"),w},Ot=function(){function t(e){this.audios=[],this.audioFactory=e,this._volume=1,this._isMuted=!1}return t.prototype={addAudio:function(e){this.audios.push(e)},pause:function(){var e,n=this.audios.length;for(e=0;e<n;e+=1)this.audios[e].pause()},resume:function(){var e,n=this.audios.length;for(e=0;e<n;e+=1)this.audios[e].resume()},setRate:function(e){var n,i=this.audios.length;for(n=0;n<i;n+=1)this.audios[n].setRate(e)},createAudio:function(e){return this.audioFactory?this.audioFactory(e):Howl?new Howl({src:[e]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(e){this.audioFactory=e},setVolume:function(e){this._volume=e,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var e,n=this.audios.length;for(e=0;e<n;e+=1)this.audios[e].volume(this._volume*(this._isMuted?0:1))}},function(){return new t}}(),At=function(){var t=function(){var c=ot("canvas");c.width=1,c.height=1;var l=c.getContext("2d");return l.fillStyle="rgba(0,0,0,0)",l.fillRect(0,0,1,1),c}();function e(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function n(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function i(c,l,o){var a="";if(c.e)a=c.p;else if(l){var h=c.p;h.indexOf("images/")!==-1&&(h=h.split("/")[1]),a=l+h}else a=o,a+=c.u?c.u:"",a+=c.p;return a}function s(c){var l=0,o=setInterval((function(){var a=c.getBBox();(a.width||l>500)&&(this._imageLoaded(),clearInterval(o)),l+=1}).bind(this),50)}function r(c){var l=i(c,this.assetsPath,this.path),o=J("image");ve?this.testImageLoaded(o):o.addEventListener("load",this._imageLoaded,!1),o.addEventListener("error",(function(){a.img=t,this._imageLoaded()}).bind(this),!1),o.setAttributeNS("http://www.w3.org/1999/xlink","href",l),this._elementHelper.append?this._elementHelper.append(o):this._elementHelper.appendChild(o);var a={img:o,assetData:c};return a}function m(c){var l=i(c,this.assetsPath,this.path),o=ot("img");o.crossOrigin="anonymous",o.addEventListener("load",this._imageLoaded,!1),o.addEventListener("error",(function(){a.img=t,this._imageLoaded()}).bind(this),!1),o.src=l;var a={img:o,assetData:c};return a}function E(c){var l={assetData:c},o=i(c,this.assetsPath,this.path);return M.loadData(o,(function(a){l.img=a,this._footageLoaded()}).bind(this),(function(){l.img={},this._footageLoaded()}).bind(this)),l}function w(c,l){this.imagesLoadedCb=l;var o,a=c.length;for(o=0;o<a;o+=1)c[o].layers||(!c[o].t||c[o].t==="seq"?(this.totalImages+=1,this.images.push(this._createImageData(c[o]))):c[o].t===3&&(this.totalFootages+=1,this.images.push(this.createFootageData(c[o]))))}function B(c){this.path=c||""}function T(c){this.assetsPath=c||""}function S(c){for(var l=0,o=this.images.length;l<o;){if(this.images[l].assetData===c)return this.images[l].img;l+=1}return null}function b(){this.imagesLoadedCb=null,this.images.length=0}function F(){return this.totalImages===this.loadedAssets}function R(){return this.totalFootages===this.loadedFootagesCount}function I(c,l){c==="svg"?(this._elementHelper=l,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}function L(){this._imageLoaded=e.bind(this),this._footageLoaded=n.bind(this),this.testImageLoaded=s.bind(this),this.createFootageData=E.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return L.prototype={loadAssets:w,setAssetsPath:T,setPath:B,loadedImages:F,loadedFootages:R,destroy:b,getAsset:S,createImgData:m,createImageData:r,imageLoaded:e,footageLoaded:n,setCacheType:I},L}(),Vt=function(){var t={maskType:!0};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),t}(),Et=function(){var t={};t.createFilter=e,t.createAlphaToLuminanceFilter=n;function e(i,s){var r=J("filter");return r.setAttribute("id",i),s!==!0&&(r.setAttribute("filterUnits","objectBoundingBox"),r.setAttribute("x","0%"),r.setAttribute("y","0%"),r.setAttribute("width","100%"),r.setAttribute("height","100%")),r}function n(){var i=J("feColorMatrix");return i.setAttribute("type","matrix"),i.setAttribute("color-interpolation-filters","sRGB"),i.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),i}return t}();function zt(t,e,n){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=n,this._animatorsData=X(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(n)}zt.prototype.searchProperties=function(){var t,e=this._textData.a.length,n,i=k.getProp;for(t=0;t<e;t+=1)n=this._textData.a[t],this._animatorsData[t]=new Ut(this._elem,n,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:i(this._elem,this._textData.p.a,0,0,this),f:i(this._elem,this._textData.p.f,0,0,this),l:i(this._elem,this._textData.p.l,0,0,this),r:i(this._elem,this._textData.p.r,0,0,this),p:i(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=i(this._elem,this._textData.m.a,1,0,this)},zt.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,!(!this._mdf&&!this._isFirstFrame&&!e&&(!this._hasMaskedPath||!this._pathData.m._mdf))){this._isFirstFrame=!1;var n=this._moreOptions.alignment.v,i=this._animatorsData,s=this._textData,r=this.mHelper,m=this._renderType,E=this.renderedLetters.length,w,B,T,S,b=t.l,F,R,I,L,c,l,o,a,h,u,f,C,$,rt,at;if(this._hasMaskedPath){if(at=this._pathData.m,!this._pathData.n||this._pathData._mdf){var it=at.v;this._pathData.r.v&&(it=it.reverse()),F={tLength:0,segments:[]},S=it._length-1;var Z;for(C=0,T=0;T<S;T+=1)Z=H.buildBezierData(it.v[T],it.v[T+1],[it.o[T][0]-it.v[T][0],it.o[T][1]-it.v[T][1]],[it.i[T+1][0]-it.v[T+1][0],it.i[T+1][1]-it.v[T+1][1]]),F.tLength+=Z.segmentLength,F.segments.push(Z),C+=Z.segmentLength;T=S,at.v.c&&(Z=H.buildBezierData(it.v[T],it.v[0],[it.o[T][0]-it.v[T][0],it.o[T][1]-it.v[T][1]],[it.i[0][0]-it.v[0][0],it.i[0][1]-it.v[0][1]]),F.tLength+=Z.segmentLength,F.segments.push(Z),C+=Z.segmentLength),this._pathData.pi=F}if(F=this._pathData.pi,R=this._pathData.f.v,o=0,l=1,L=0,c=!0,u=F.segments,R<0&&at.v.c)for(F.tLength<Math.abs(R)&&(R=-Math.abs(R)%F.tLength),o=u.length-1,h=u[o].points,l=h.length-1;R<0;)R+=h[l].partialLength,l-=1,l<0&&(o-=1,h=u[o].points,l=h.length-1);h=u[o].points,a=h[l-1],I=h[l],f=I.partialLength}S=b.length,w=0,B=0;var tt=t.finalSize*1.2*.714,W=!0,g,d,v,q,Q;q=i.length;var G,wt=-1,St,Mt,Xt,ee=R,he=o,ue=l,me=-1,oe,Yt,pe,mt,Zt,ze,He,Be,Le="",Ve=this.defaultPropsArray,Re;if(t.j===2||t.j===1){var ge=0,Ze=0,Ne=t.j===2?-.5:-1,xe=0,je=!0;for(T=0;T<S;T+=1)if(b[T].n){for(ge&&(ge+=Ze);xe<T;)b[xe].animatorJustifyOffset=ge,xe+=1;ge=0,je=!0}else{for(v=0;v<q;v+=1)g=i[v].a,g.t.propType&&(je&&t.j===2&&(Ze+=g.t.v*Ne),d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),G.length?ge+=g.t.v*G[0]*Ne:ge+=g.t.v*G*Ne);je=!1}for(ge&&(ge+=Ze);xe<T;)b[xe].animatorJustifyOffset=ge,xe+=1}for(T=0;T<S;T+=1){if(r.reset(),oe=1,b[T].n)w=0,B+=t.yOffset,B+=W?1:0,R=ee,W=!1,this._hasMaskedPath&&(o=he,l=ue,h=u[o].points,a=h[l-1],I=h[l],f=I.partialLength,L=0),Le="",Be="",ze="",Re="",Ve=this.defaultPropsArray;else{if(this._hasMaskedPath){if(me!==b[T].line){switch(t.j){case 1:R+=C-t.lineWidths[b[T].line];break;case 2:R+=(C-t.lineWidths[b[T].line])/2;break}me=b[T].line}wt!==b[T].ind&&(b[wt]&&(R+=b[wt].extra),R+=b[T].an/2,wt=b[T].ind),R+=n[0]*b[T].an*.005;var Ce=0;for(v=0;v<q;v+=1)g=i[v].a,g.p.propType&&(d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),G.length?Ce+=g.p.v[0]*G[0]:Ce+=g.p.v[0]*G),g.a.propType&&(d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),G.length?Ce+=g.a.v[0]*G[0]:Ce+=g.a.v[0]*G);for(c=!0,this._pathData.a.v&&(R=b[0].an*.5+(C-this._pathData.f.v-b[0].an*.5-b[b.length-1].an*.5)*wt/(S-1),R+=this._pathData.f.v);c;)L+f>=R+Ce||!h?($=(R+Ce-L)/I.partialLength,Mt=a.point[0]+(I.point[0]-a.point[0])*$,Xt=a.point[1]+(I.point[1]-a.point[1])*$,r.translate(-n[0]*b[T].an*.005,-(n[1]*tt)*.01),c=!1):h&&(L+=I.partialLength,l+=1,l>=h.length&&(l=0,o+=1,u[o]?h=u[o].points:at.v.c?(l=0,o=0,h=u[o].points):(L-=I.partialLength,h=null)),h&&(a=I,I=h[l],f=I.partialLength));St=b[T].an/2-b[T].add,r.translate(-St,0,0)}else St=b[T].an/2-b[T].add,r.translate(-St,0,0),r.translate(-n[0]*b[T].an*.005,-n[1]*tt*.01,0);for(v=0;v<q;v+=1)g=i[v].a,g.t.propType&&(d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),(w!==0||t.j!==0)&&(this._hasMaskedPath?G.length?R+=g.t.v*G[0]:R+=g.t.v*G:G.length?w+=g.t.v*G[0]:w+=g.t.v*G));for(t.strokeWidthAnim&&(pe=t.sw||0),t.strokeColorAnim&&(t.sc?Yt=[t.sc[0],t.sc[1],t.sc[2]]:Yt=[0,0,0]),t.fillColorAnim&&t.fc&&(mt=[t.fc[0],t.fc[1],t.fc[2]]),v=0;v<q;v+=1)g=i[v].a,g.a.propType&&(d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),G.length?r.translate(-g.a.v[0]*G[0],-g.a.v[1]*G[1],g.a.v[2]*G[2]):r.translate(-g.a.v[0]*G,-g.a.v[1]*G,g.a.v[2]*G));for(v=0;v<q;v+=1)g=i[v].a,g.s.propType&&(d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),G.length?r.scale(1+(g.s.v[0]-1)*G[0],1+(g.s.v[1]-1)*G[1],1):r.scale(1+(g.s.v[0]-1)*G,1+(g.s.v[1]-1)*G,1));for(v=0;v<q;v+=1){if(g=i[v].a,d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),g.sk.propType&&(G.length?r.skewFromAxis(-g.sk.v*G[0],g.sa.v*G[1]):r.skewFromAxis(-g.sk.v*G,g.sa.v*G)),g.r.propType&&(G.length?r.rotateZ(-g.r.v*G[2]):r.rotateZ(-g.r.v*G)),g.ry.propType&&(G.length?r.rotateY(g.ry.v*G[1]):r.rotateY(g.ry.v*G)),g.rx.propType&&(G.length?r.rotateX(g.rx.v*G[0]):r.rotateX(g.rx.v*G)),g.o.propType&&(G.length?oe+=(g.o.v*G[0]-oe)*G[0]:oe+=(g.o.v*G-oe)*G),t.strokeWidthAnim&&g.sw.propType&&(G.length?pe+=g.sw.v*G[0]:pe+=g.sw.v*G),t.strokeColorAnim&&g.sc.propType)for(Zt=0;Zt<3;Zt+=1)G.length?Yt[Zt]+=(g.sc.v[Zt]-Yt[Zt])*G[0]:Yt[Zt]+=(g.sc.v[Zt]-Yt[Zt])*G;if(t.fillColorAnim&&t.fc){if(g.fc.propType)for(Zt=0;Zt<3;Zt+=1)G.length?mt[Zt]+=(g.fc.v[Zt]-mt[Zt])*G[0]:mt[Zt]+=(g.fc.v[Zt]-mt[Zt])*G;g.fh.propType&&(G.length?mt=K(mt,g.fh.v*G[0]):mt=K(mt,g.fh.v*G)),g.fs.propType&&(G.length?mt=nt(mt,g.fs.v*G[0]):mt=nt(mt,g.fs.v*G)),g.fb.propType&&(G.length?mt=et(mt,g.fb.v*G[0]):mt=et(mt,g.fb.v*G))}}for(v=0;v<q;v+=1)g=i[v].a,g.p.propType&&(d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),this._hasMaskedPath?G.length?r.translate(0,g.p.v[1]*G[0],-g.p.v[2]*G[1]):r.translate(0,g.p.v[1]*G,-g.p.v[2]*G):G.length?r.translate(g.p.v[0]*G[0],g.p.v[1]*G[1],-g.p.v[2]*G[2]):r.translate(g.p.v[0]*G,g.p.v[1]*G,-g.p.v[2]*G));if(t.strokeWidthAnim&&(ze=pe<0?0:pe),t.strokeColorAnim&&(He="rgb("+Math.round(Yt[0]*255)+","+Math.round(Yt[1]*255)+","+Math.round(Yt[2]*255)+")"),t.fillColorAnim&&t.fc&&(Be="rgb("+Math.round(mt[0]*255)+","+Math.round(mt[1]*255)+","+Math.round(mt[2]*255)+")"),this._hasMaskedPath){if(r.translate(0,-t.ls),r.translate(0,n[1]*tt*.01+B,0),this._pathData.p.v){rt=(I.point[1]-a.point[1])/(I.point[0]-a.point[0]);var Qe=Math.atan(rt)*180/Math.PI;I.point[0]<a.point[0]&&(Qe+=180),r.rotate(-Qe*Math.PI/180)}r.translate(Mt,Xt,0),R-=n[0]*b[T].an*.005,b[T+1]&&wt!==b[T+1].ind&&(R+=b[T].an/2,R+=t.tr*.001*t.finalSize)}else{switch(r.translate(w,B,0),t.ps&&r.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:r.translate(b[T].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[b[T].line]),0,0);break;case 2:r.translate(b[T].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[b[T].line])/2,0,0);break}r.translate(0,-t.ls),r.translate(St,0,0),r.translate(n[0]*b[T].an*.005,n[1]*tt*.01,0),w+=b[T].l+t.tr*.001*t.finalSize}m==="html"?Le=r.toCSS():m==="svg"?Le=r.to2dCSS():Ve=[r.props[0],r.props[1],r.props[2],r.props[3],r.props[4],r.props[5],r.props[6],r.props[7],r.props[8],r.props[9],r.props[10],r.props[11],r.props[12],r.props[13],r.props[14],r.props[15]],Re=oe}E<=T?(Q=new jt(Re,ze,He,Be,Le,Ve),this.renderedLetters.push(Q),E+=1,this.lettersChangedFlag=!0):(Q=this.renderedLetters[T],this.lettersChangedFlag=Q.update(Re,ze,He,Be,Le,Ve)||this.lettersChangedFlag)}}},zt.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},zt.prototype.mHelper=new y,zt.prototype.defaultPropsArray=[],x([lt],zt);function Ut(t,e,n){var i={propType:!1},s=k.getProp,r=e.a;this.a={r:r.r?s(t,r.r,0,Lt,n):i,rx:r.rx?s(t,r.rx,0,Lt,n):i,ry:r.ry?s(t,r.ry,0,Lt,n):i,sk:r.sk?s(t,r.sk,0,Lt,n):i,sa:r.sa?s(t,r.sa,0,Lt,n):i,s:r.s?s(t,r.s,1,.01,n):i,a:r.a?s(t,r.a,1,0,n):i,o:r.o?s(t,r.o,0,.01,n):i,p:r.p?s(t,r.p,1,0,n):i,sw:r.sw?s(t,r.sw,0,0,n):i,sc:r.sc?s(t,r.sc,1,0,n):i,fc:r.fc?s(t,r.fc,1,0,n):i,fh:r.fh?s(t,r.fh,0,0,n):i,fs:r.fs?s(t,r.fs,0,.01,n):i,fb:r.fb?s(t,r.fb,0,.01,n):i,t:r.t?s(t,r.t,0,0,n):i},this.s=Fe.getTextSelectorProp(t,e.s,n),this.s.t=e.s.t}function jt(t,e,n,i,s,r){this.o=t,this.sw=e,this.sc=n,this.fc=i,this.m=s,this.p=r,this._mdf={o:!0,sw:!!e,sc:!!n,fc:!!i,m:!0,p:!0}}jt.prototype.update=function(t,e,n,i,s,r){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var m=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,m=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,m=!0),this.sc!==n&&(this.sc=n,this._mdf.sc=!0,m=!0),this.fc!==i&&(this.fc=i,this._mdf.fc=!0,m=!0),this.m!==s&&(this.m=s,this._mdf.m=!0,m=!0),r.length&&(this.p[0]!==r[0]||this.p[1]!==r[1]||this.p[4]!==r[4]||this.p[5]!==r[5]||this.p[12]!==r[12]||this.p[13]!==r[13])&&(this.p=r,this._mdf.p=!0,m=!0),m};function It(t,e){this._frameId=xt,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}It.prototype.defaultBoxWidth=[0,0],It.prototype.copyData=function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},It.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},It.prototype.searchProperty=function(){return this.searchKeyframes()},It.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},It.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},It.prototype.getValue=function(t){if(!((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!t)){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,n=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return}this.lock=!0,this._mdf=!1;var i,s=this.effectsSequence.length,r=t||this.data.d.k[this.keysIndex].s;for(i=0;i<s;i+=1)n!==this.keysIndex?r=this.effectsSequence[i](r,r.t):r=this.effectsSequence[i](this.currentData,r.t);e!==r&&this.setCurrentData(r),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}},It.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,n=0,i=t.length;n<=i-1&&!(n===i-1||t[n+1].t>e);)n+=1;return this.keysIndex!==n&&(this.keysIndex=n),this.data.d.k[this.keysIndex].s},It.prototype.buildFinalText=function(t){for(var e=[],n=0,i=t.length,s,r,m=!1;n<i;)s=t.charCodeAt(n),A.isCombinedCharacter(s)?e[e.length-1]+=t.charAt(n):s>=55296&&s<=56319?(r=t.charCodeAt(n+1),r>=56320&&r<=57343?(m||A.isModifier(s,r)?(e[e.length-1]+=t.substr(n,2),m=!1):e.push(t.substr(n,2)),n+=1):e.push(t.charAt(n))):s>56319?(r=t.charCodeAt(n+1),A.isZeroWidthJoiner(s,r)?(m=!0,e[e.length-1]+=t.substr(n,2),n+=1):e.push(t.charAt(n))):A.isZeroWidthJoiner(s)?(e[e.length-1]+=t.charAt(n),m=!0):e.push(t.charAt(n)),n+=1;return e},It.prototype.completeTextData=function(t){t.__complete=!0;var e=this.elem.globalData.fontManager,n=this.data,i=[],s,r,m,E=0,w,B=n.m.g,T=0,S=0,b=0,F=[],R=0,I=0,L,c,l=e.getFontByName(t.f),o,a=0,h=P(l);t.fWeight=h.weight,t.fStyle=h.style,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),r=t.finalText.length,t.finalLineHeight=t.lh;var u=t.tr/1e3*t.finalSize,f;if(t.sz)for(var C=!0,$=t.sz[0],rt=t.sz[1],at,it;C;){it=this.buildFinalText(t.t),at=0,R=0,r=it.length,u=t.tr/1e3*t.finalSize;var Z=-1;for(s=0;s<r;s+=1)f=it[s].charCodeAt(0),m=!1,it[s]===" "?Z=s:(f===13||f===3)&&(R=0,m=!0,at+=t.finalLineHeight||t.finalSize*1.2),e.chars?(o=e.getCharData(it[s],l.fStyle,l.fFamily),a=m?0:o.w*t.finalSize/100):a=e.measureText(it[s],t.f,t.finalSize),R+a>$&&it[s]!==" "?(Z===-1?r+=1:s=Z,at+=t.finalLineHeight||t.finalSize*1.2,it.splice(s,Z===s?1:0,"\r"),Z=-1,R=0):(R+=a,R+=u);at+=l.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&rt<at?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=it,r=t.finalText.length,C=!1)}R=-u,a=0;var tt=0,W;for(s=0;s<r;s+=1)if(m=!1,W=t.finalText[s],f=W.charCodeAt(0),f===13||f===3?(tt=0,F.push(R),I=R>I?R:I,R=-2*u,w="",m=!0,b+=1):w=W,e.chars?(o=e.getCharData(W,l.fStyle,e.getFontByName(t.f).fFamily),a=m?0:o.w*t.finalSize/100):a=e.measureText(w,t.f,t.finalSize),W===" "?tt+=a+u:(R+=a+u+tt,tt=0),i.push({l:a,an:a,add:T,n:m,anIndexes:[],val:w,line:b,animatorJustifyOffset:0}),B==2){if(T+=a,w===""||w===" "||s===r-1){for((w===""||w===" ")&&(T-=a);S<=s;)i[S].an=T,i[S].ind=E,i[S].extra=a,S+=1;E+=1,T=0}}else if(B==3){if(T+=a,w===""||s===r-1){for(w===""&&(T-=a);S<=s;)i[S].an=T,i[S].ind=E,i[S].extra=a,S+=1;T=0,E+=1}}else i[E].ind=E,i[E].extra=0,E+=1;if(t.l=i,I=R>I?R:I,F.push(R),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=I,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=F;var g=n.a,d,v;c=g.length;var q,Q,G=[];for(L=0;L<c;L+=1){for(d=g[L],d.a.sc&&(t.strokeColorAnim=!0),d.a.sw&&(t.strokeWidthAnim=!0),(d.a.fc||d.a.fh||d.a.fs||d.a.fb)&&(t.fillColorAnim=!0),Q=0,q=d.s.b,s=0;s<r;s+=1)v=i[s],v.anIndexes[L]=Q,(q==1&&v.val!==""||q==2&&v.val!==""&&v.val!==" "||q==3&&(v.n||v.val==" "||s==r-1)||q==4&&(v.n||s==r-1))&&(d.s.rn===1&&G.push(Q),Q+=1);n.a[L].s.totalChars=Q;var wt=-1,St;if(d.s.rn===1)for(s=0;s<r;s+=1)v=i[s],wt!=v.anIndexes[L]&&(wt=v.anIndexes[L],St=G.splice(Math.floor(Math.random()*G.length),1)[0]),v.anIndexes[L]=St}t.yOffset=t.finalLineHeight||t.finalSize*1.2,t.ls=t.ls||0,t.ascent=l.ascent*t.finalSize/100},It.prototype.updateDocumentData=function(t,e){e=e===void 0?this.keysIndex:e;var n=this.copyData({},this.data.d.k[e].s);n=this.copyData(n,t),this.data.d.k[e].s=n,this.recalculate(e),this.elem.addDynamicProperty(this)},It.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},It.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},It.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var Fe=function(){var t=Math.max,e=Math.min,n=Math.floor;function i(r,m){this._currentTextLength=-1,this.k=!1,this.data=m,this.elem=r,this.comp=r.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(r),this.s=k.getProp(r,m.s||{k:0},0,0,this),"e"in m?this.e=k.getProp(r,m.e,0,0,this):this.e={v:100},this.o=k.getProp(r,m.o||{k:0},0,0,this),this.xe=k.getProp(r,m.xe||{k:0},0,0,this),this.ne=k.getProp(r,m.ne||{k:0},0,0,this),this.sm=k.getProp(r,m.sm||{k:100},0,0,this),this.a=k.getProp(r,m.a,0,.01,this),this.dynamicProperties.length||this.getValue()}i.prototype={getMult:function(r){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var m=0,E=0,w=1,B=1;this.ne.v>0?m=this.ne.v/100:E=-this.ne.v/100,this.xe.v>0?w=1-this.xe.v/100:B=1+this.xe.v/100;var T=_.getBezierEasing(m,E,w,B).get,S=0,b=this.finalS,F=this.finalE,R=this.data.sh;if(R===2)F===b?S=r>=F?1:0:S=t(0,e(.5/(F-b)+(r-b)/(F-b),1)),S=T(S);else if(R===3)F===b?S=r>=F?0:1:S=1-t(0,e(.5/(F-b)+(r-b)/(F-b),1)),S=T(S);else if(R===4)F===b?S=0:(S=t(0,e(.5/(F-b)+(r-b)/(F-b),1)),S<.5?S*=2:S=1-2*(S-.5)),S=T(S);else if(R===5){if(F===b)S=0;else{var I=F-b;r=e(t(0,r+.5-b),F-b);var L=-I/2+r,c=I/2;S=Math.sqrt(1-L*L/(c*c))}S=T(S)}else R===6?(F===b?S=0:(r=e(t(0,r+.5-b),F-b),S=(1+Math.cos(Math.PI+Math.PI*2*r/(F-b)))/2),S=T(S)):(r>=n(b)&&(r-b<0?S=t(0,e(e(F,1)-(b-r),1)):S=t(0,e(F-r,1))),S=T(S));if(this.sm.v!==100){var l=this.sm.v*.01;l===0&&(l=1e-8);var o=.5-l*.5;S<o?S=0:(S=(S-o)/l,S>1&&(S=1))}return S*this.a.v},getValue:function(r){this.iterateDynamicProperties(),this._mdf=r||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,r&&this.data.r===2&&(this.e.v=this._currentTextLength);var m=this.data.r===2?1:100/this.data.totalChars,E=this.o.v/m,w=this.s.v/m+E,B=this.e.v/m+E;if(w>B){var T=w;w=B,B=T}this.finalS=w,this.finalE=B}},x([lt],i);function s(r,m,E){return new i(r,m)}return{getTextSelectorProp:s}}(),Ke=function(){return function(t,e,n){var i=0,s=t,r=X(s),m={newElement:E,release:w};function E(){var B;return i?(i-=1,B=r[i]):B=e(),B}function w(B){i===s&&(r=Me.double(r),s*=2),n&&n(B),r[i]=B,i+=1}return m}}(),Me=function(){function t(e){return e.concat(X(e.length))}return{double:t}}(),_e=function(){function t(){return O("float32",2)}return Ke(8,t)}(),ae=function(){function t(){return new st}function e(s){var r=s._length,m;for(m=0;m<r;m+=1)_e.release(s.v[m]),_e.release(s.i[m]),_e.release(s.o[m]),s.v[m]=null,s.i[m]=null,s.o[m]=null;s._length=0,s.c=!1}function n(s){var r=i.newElement(),m,E=s._length===void 0?s.v.length:s._length;for(r.setLength(E),r.c=s.c,m=0;m<E;m+=1)r.setTripleAt(s.v[m][0],s.v[m][1],s.o[m][0],s.o[m][1],s.i[m][0],s.i[m][1],m);return r}var i=Ke(4,t,e);return i.clone=n,i}(),se=function(){var t={newShapeCollection:s,release:r},e=0,n=4,i=X(n);function s(){var m;return e?(e-=1,m=i[e]):m=new _t,m}function r(m){var E,w=m._length;for(E=0;E<w;E+=1)ae.release(m.shapes[E]);m._length=0,e===n&&(i=Me.double(i),n*=2),i[e]=m,e+=1}return t}(),Je=function(){function t(){return{lengths:[],totalLength:0}}function e(n){var i,s=n.lengths.length;for(i=0;i<s;i+=1)Se.release(n.lengths[i]);n.lengths.length=0}return Ke(8,t,e)}(),Se=function(){function t(){return{addedLength:0,percents:O("float32",Qt),lengths:O("float32",Qt)}}return Ke(8,t)}(),Te=function(){function t(e){for(var n=e.split(`\r
`),i={},s,r=0,m=0;m<n.length;m+=1)s=n[m].split(":"),s.length===2&&(i[s[0]]=s[1].trim(),r+=1);if(r===0)throw new Error;return i}return function(e){for(var n=[],i=0;i<e.length;i+=1){var s=e[i],r={time:s.tm,duration:s.dr};try{r.payload=JSON.parse(e[i].cm)}catch{try{r.payload=t(e[i].cm)}catch{r.payload={name:e[i]}}}n.push(r)}return n}}();function Jt(){}Jt.prototype.checkLayers=function(t){var e,n=this.layers.length,i;for(this.completeLayers=!0,e=n-1;e>=0;e-=1)this.elements[e]||(i=this.layers[e],i.ip-i.st<=t-this.layers[e].st&&i.op-i.st>t-this.layers[e].st&&this.buildItem(e)),this.completeLayers=this.elements[e]?this.completeLayers:!1;this.checkPendingElements()},Jt.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 6:return this.createAudio(t);case 13:return this.createCamera(t);case 15:return this.createFootage(t);default:return this.createNull(t)}},Jt.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},Jt.prototype.createAudio=function(t){return new fe(t,this.globalData,this)},Jt.prototype.createFootage=function(t){return new FootageElement(t,this.globalData,this)},Jt.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},Jt.prototype.includeLayers=function(t){this.completeLayers=!1;var e,n=t.length,i,s=this.layers.length;for(e=0;e<n;e+=1)for(i=0;i<s;){if(this.layers[i].id===t[e].id){this.layers[i]=t[e];break}i+=1}},Jt.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},Jt.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},Jt.prototype.buildElementParenting=function(t,e,n){for(var i=this.elements,s=this.layers,r=0,m=s.length;r<m;)s[r].ind==e&&(!i[r]||i[r]===!0?(this.buildItem(r),this.addPendingElement(t)):(n.push(i[r]),i[r].setAsParent(),s[r].parent!==void 0?this.buildElementParenting(t,s[r].parent,n):t.setHierarchy(n))),r+=1},Jt.prototype.addPendingElement=function(t){this.pendingElements.push(t)},Jt.prototype.searchExtraCompositions=function(t){var e,n=t.length;for(e=0;e<n;e+=1)if(t[e].xt){var i=this.createComp(t[e]);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},Jt.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new A,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}};function Wt(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=J("svg");var n="";if(e&&e.title){var i=J("title"),s=Kt();i.setAttribute("id",s),i.textContent=e.title,this.svgElement.appendChild(i),n+=s}if(e&&e.description){var r=J("desc"),m=Kt();r.setAttribute("id",m),r.textContent=e.description,this.svgElement.appendChild(r),n+=" "+m}n&&this.svgElement.setAttribute("aria-labelledby",n);var E=J("defs");this.svgElement.appendChild(E);var w=J("g");this.svgElement.appendChild(w),this.layerElement=w,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!(e&&e.hideOnTransparent===!1),viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"}},this.globalData={_mdf:!1,frameNum:-1,defs:E,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}x([Jt],Wt),Wt.prototype.createNull=function(t){return new De(t,this.globalData,this)},Wt.prototype.createShape=function(t){return new $t(t,this.globalData,this)},Wt.prototype.createText=function(t){return new Ye(t,this.globalData,this)},Wt.prototype.createImage=function(t){return new on(t,this.globalData,this)},Wt.prototype.createComp=function(t){return new Ln(t,this.globalData,this)},Wt.prototype.createSolid=function(t){return new vn(t,this.globalData,this)},Wt.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),this.renderConfig.focusable!==void 0&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var n=J("clipPath"),i=J("rect");i.setAttribute("width",t.w),i.setAttribute("height",t.h),i.setAttribute("x",0),i.setAttribute("y",0);var s=Kt();n.setAttribute("id",s),n.appendChild(i),this.layerElement.setAttribute("clip-path","url("+ct+"#"+s+")"),e.appendChild(n),this.layers=t.layers,this.elements=X(t.layers.length)},Wt.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},Wt.prototype.updateContainerSize=function(){},Wt.prototype.buildItem=function(t){var e=this.elements;if(!(e[t]||this.layers[t].ty===99)){e[t]=!0;var n=this.createItem(this.layers[t]);e[t]=n,Dt&&(this.layers[t].ty===0&&this.globalData.projectInterface.registerComposition(n),n.initExpressions()),this.appendElementInPos(n,t),this.layers[t].tt&&(!this.elements[t-1]||this.elements[t-1]===!0?(this.buildItem(t-1),this.addPendingElement(n)):n.setMatte(e[t-1].layerId))}},Wt.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,n=this.elements.length;e<n;){if(this.elements[e]===t){t.setMatte(this.elements[e-1].layerId);break}e+=1}}},Wt.prototype.renderFrame=function(t){if(!(this.renderedFrame===t||this.destroyed)){t===null?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var e,n=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=n-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<n;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},Wt.prototype.appendElementInPos=function(t,e){var n=t.getBaseElement();if(n){for(var i=0,s;i<e;)this.elements[i]&&this.elements[i]!==!0&&this.elements[i].getBaseElement()&&(s=this.elements[i].getBaseElement()),i+=1;s?this.layerElement.insertBefore(n,s):this.layerElement.appendChild(n)}},Wt.prototype.hide=function(){this.layerElement.style.display="none"},Wt.prototype.show=function(){this.layerElement.style.display="block"};function le(t,e,n){this.data=t,this.element=e,this.globalData=n,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var i=this.globalData.defs,s,r=this.masksProperties?this.masksProperties.length:0;this.viewData=X(r),this.solidPath="";var m,E=this.masksProperties,w=0,B=[],T,S,b=Kt(),F,R,I,L,c="clipPath",l="clip-path";for(s=0;s<r;s+=1)if((E[s].mode!=="a"&&E[s].mode!=="n"||E[s].inv||E[s].o.k!==100||E[s].o.x)&&(c="mask",l="mask"),(E[s].mode==="s"||E[s].mode==="i")&&w===0?(F=J("rect"),F.setAttribute("fill","#ffffff"),F.setAttribute("width",this.element.comp.data.w||0),F.setAttribute("height",this.element.comp.data.h||0),B.push(F)):F=null,m=J("path"),E[s].mode==="n")this.viewData[s]={op:k.getProp(this.element,E[s].o,0,.01,this.element),prop:ht.getShapeProp(this.element,E[s],3),elem:m,lastPath:""},i.appendChild(m);else{w+=1,m.setAttribute("fill",E[s].mode==="s"?"#000000":"#ffffff"),m.setAttribute("clip-rule","nonzero");var o;if(E[s].x.k!==0?(c="mask",l="mask",L=k.getProp(this.element,E[s].x,0,null,this.element),o=Kt(),R=J("filter"),R.setAttribute("id",o),I=J("feMorphology"),I.setAttribute("operator","erode"),I.setAttribute("in","SourceGraphic"),I.setAttribute("radius","0"),R.appendChild(I),i.appendChild(R),m.setAttribute("stroke",E[s].mode==="s"?"#000000":"#ffffff")):(I=null,L=null),this.storedData[s]={elem:m,x:L,expan:I,lastPath:"",lastOperator:"",filterId:o,lastRadius:0},E[s].mode==="i"){S=B.length;var a=J("g");for(T=0;T<S;T+=1)a.appendChild(B[T]);var h=J("mask");h.setAttribute("mask-type","alpha"),h.setAttribute("id",b+"_"+w),h.appendChild(m),i.appendChild(h),a.setAttribute("mask","url("+ct+"#"+b+"_"+w+")"),B.length=0,B.push(a)}else B.push(m);E[s].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[s]={elem:m,lastPath:"",op:k.getProp(this.element,E[s].o,0,.01,this.element),prop:ht.getShapeProp(this.element,E[s],3),invRect:F},this.viewData[s].prop.k||this.drawPath(E[s],this.viewData[s].prop.v,this.viewData[s])}for(this.maskElement=J(c),r=B.length,s=0;s<r;s+=1)this.maskElement.appendChild(B[s]);w>0&&(this.maskElement.setAttribute("id",b),this.element.maskedElement.setAttribute(l,"url("+ct+"#"+b+")"),i.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}le.prototype.getMaskProperty=function(t){return this.viewData[t].prop},le.prototype.renderFrame=function(t){var e=this.element.finalTransform.mat,n,i=this.masksProperties.length;for(n=0;n<i;n+=1)if((this.viewData[n].prop._mdf||t)&&this.drawPath(this.masksProperties[n],this.viewData[n].prop.v,this.viewData[n]),(this.viewData[n].op._mdf||t)&&this.viewData[n].elem.setAttribute("fill-opacity",this.viewData[n].op.v),this.masksProperties[n].mode!=="n"&&(this.viewData[n].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[n].invRect.setAttribute("transform",e.getInverseMatrix().to2dCSS()),this.storedData[n].x&&(this.storedData[n].x._mdf||t))){var s=this.storedData[n].expan;this.storedData[n].x.v<0?(this.storedData[n].lastOperator!=="erode"&&(this.storedData[n].lastOperator="erode",this.storedData[n].elem.setAttribute("filter","url("+ct+"#"+this.storedData[n].filterId+")")),s.setAttribute("radius",-this.storedData[n].x.v)):(this.storedData[n].lastOperator!=="dilate"&&(this.storedData[n].lastOperator="dilate",this.storedData[n].elem.setAttribute("filter",null)),this.storedData[n].elem.setAttribute("stroke-width",this.storedData[n].x.v*2))}},le.prototype.getMaskelement=function(){return this.maskElement},le.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" ",t},le.prototype.drawPath=function(t,e,n){var i=" M"+e.v[0][0]+","+e.v[0][1],s,r;for(r=e._length,s=1;s<r;s+=1)i+=" C"+e.o[s-1][0]+","+e.o[s-1][1]+" "+e.i[s][0]+","+e.i[s][1]+" "+e.v[s][0]+","+e.v[s][1];if(e.c&&r>1&&(i+=" C"+e.o[s-1][0]+","+e.o[s-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),n.lastPath!==i){var m="";n.elem&&(e.c&&(m=t.inv?this.solidPath+i:i),n.elem.setAttribute("d",m)),n.lastPath=i}},le.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};function tn(){}tn.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(t){this.hierarchy=t},setAsParent:function(){this._isParent=!0},checkParenting:function(){this.data.parent!==void 0&&this.comp.buildElementParenting(this,this.data.parent,[])}};function $e(){}$e.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(t,e){var n,i=this.dynamicProperties.length;for(n=0;n<i;n+=1)(e||this._isParent&&this.dynamicProperties[n].propType==="transform")&&(this.dynamicProperties[n].getValue(),this.dynamicProperties[n]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(t){this.dynamicProperties.indexOf(t)===-1&&this.dynamicProperties.push(t)}};function en(){}en.prototype={initTransform:function(){this.finalTransform={mProp:this.data.ks?D.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_opMdf:!1,mat:new y},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var t,e=this.finalTransform.mat,n=0,i=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;n<i;){if(this.hierarchy[n].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}n+=1}if(this.finalTransform._matMdf)for(t=this.finalTransform.mProp.v.props,e.cloneFromProps(t),n=0;n<i;n+=1)t=this.hierarchy[n].finalTransform.mProp.v.props,e.transform(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}},globalToLocal:function(t){var e=[];e.push(this.finalTransform);for(var n=!0,i=this.comp;n;)i.finalTransform?(i.data.hasMask&&e.splice(0,0,i.finalTransform),i=i.comp):n=!1;var s,r=e.length,m;for(s=0;s<r;s+=1)m=e[s].mat.applyToPointArray(0,0,0),t=[t[0]-m[0],t[1]-m[1],0];return t},mHelper:new y};function gn(){}gn.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(t){this.renderableComponents.indexOf(t)===-1&&this.renderableComponents.push(t)},removeRenderableComponent:function(t){this.renderableComponents.indexOf(t)!==-1&&this.renderableComponents.splice(this.renderableComponents.indexOf(t),1)},prepareRenderableFrame:function(t){this.checkLayerLimits(t)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(t){this.data.ip-this.data.st<=t&&this.data.op-this.data.st>t?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var t,e=this.renderableComponents.length;for(t=0;t<e;t+=1)this.renderableComponents[t].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return this.data.ty===5?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};function an(){}(function(){var t={initElement:function(e,n,i){this.initFrame(),this.initBaseData(e,n,i),this.initTransform(e,n,i),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var e=this.baseElement||this.layerElement;e.style.display="none",this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var e=this.baseElement||this.layerElement;e.style.display="block"}this.hidden=!1,this._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(e){this._mdf=!1,this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}};x([gn,V(t)],an)})();function oi(t,e){this.elem=t,this.pos=e}function xn(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=t.hd===!0,this.pElem=J("path"),this.msElem=null}xn.prototype.reset=function(){this.d="",this._mdf=!1};function Cn(t,e,n){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=n,this.lvl=e,this._isAnimated=!!n.k;for(var i=0,s=t.length;i<s;){if(t[i].mProps.dynamicProperties.length){this._isAnimated=!0;break}i+=1}}Cn.prototype.setAsAnimated=function(){this._isAnimated=!0};function li(t,e,n){this.transform={mProps:t,op:e,container:n},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}function kn(t,e,n){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=k.getProp(t,e.o,0,.01,this),this.w=k.getProp(t,e.w,0,null,this),this.d=new gt(t,e.d||{},"svg",this),this.c=k.getProp(t,e.c,1,255,this),this.style=n,this._isAnimated=!!this._isAnimated}x([lt],kn);function An(t,e,n){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=k.getProp(t,e.o,0,.01,this),this.c=k.getProp(t,e.c,1,255,this),this.style=n}x([lt],An);function nn(t,e,n){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,n)}nn.prototype.initGradientData=function(t,e,n){this.o=k.getProp(t,e.o,0,.01,this),this.s=k.getProp(t,e.s,1,null,this),this.e=k.getProp(t,e.e,1,null,this),this.h=k.getProp(t,e.h||{k:0},0,.01,this),this.a=k.getProp(t,e.a||{k:0},0,Lt,this),this.g=new bt(t,e.g,this),this.style=n,this.stops=[],this.setGradientData(n.pElem,e),this.setGradientOpacity(e,n),this._isAnimated=!!this._isAnimated},nn.prototype.setGradientData=function(t,e){var n=Kt(),i=J(e.t===1?"linearGradient":"radialGradient");i.setAttribute("id",n),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse");var s=[],r,m,E;for(E=e.g.p*4,m=0;m<E;m+=4)r=J("stop"),i.appendChild(r),s.push(r);t.setAttribute(e.ty==="gf"?"fill":"stroke","url("+ct+"#"+n+")"),this.gf=i,this.cst=s},nn.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var n,i,s,r=J("mask"),m=J("path");r.appendChild(m);var E=Kt(),w=Kt();r.setAttribute("id",w);var B=J(t.t===1?"linearGradient":"radialGradient");B.setAttribute("id",E),B.setAttribute("spreadMethod","pad"),B.setAttribute("gradientUnits","userSpaceOnUse"),s=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var T=this.stops;for(i=t.g.p*4;i<s;i+=2)n=J("stop"),n.setAttribute("stop-color","rgb(255,255,255)"),B.appendChild(n),T.push(n);m.setAttribute(t.ty==="gf"?"fill":"stroke","url("+ct+"#"+E+")"),t.ty==="gs"&&(m.setAttribute("stroke-linecap",j[t.lc||2]),m.setAttribute("stroke-linejoin",p[t.lj||2]),t.lj===1&&m.setAttribute("stroke-miterlimit",t.ml)),this.of=B,this.ms=r,this.ost=T,this.maskId=w,e.msElem=m}},x([lt],nn);function Mn(t,e,n){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=k.getProp(t,e.w,0,null,this),this.d=new gt(t,e.d||{},"svg",this),this.initGradientData(t,e,n),this._isAnimated=!!this._isAnimated}x([nn,lt],Mn);function hi(){this.it=[],this.prevViewData=[],this.gr=J("g")}var pi=function(){var t=new y,e=new y,n={createRenderFunction:i};function i(T){switch(T.ty){case"fl":return m;case"gf":return w;case"gs":return E;case"st":return B;case"sh":case"el":case"rc":case"sr":return r;case"tr":return s;default:return null}}function s(T,S,b){(b||S.transform.op._mdf)&&S.transform.container.setAttribute("opacity",S.transform.op.v),(b||S.transform.mProps._mdf)&&S.transform.container.setAttribute("transform",S.transform.mProps.v.to2dCSS())}function r(T,S,b){var F,R,I,L,c,l,o=S.styles.length,a=S.lvl,h,u,f,C,$;for(l=0;l<o;l+=1){if(L=S.sh._mdf||b,S.styles[l].lvl<a){for(u=e.reset(),C=a-S.styles[l].lvl,$=S.transformers.length-1;!L&&C>0;)L=S.transformers[$].mProps._mdf||L,C-=1,$-=1;if(L)for(C=a-S.styles[l].lvl,$=S.transformers.length-1;C>0;)f=S.transformers[$].mProps.v.props,u.transform(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9],f[10],f[11],f[12],f[13],f[14],f[15]),C-=1,$-=1}else u=t;if(h=S.sh.paths,R=h._length,L){for(I="",F=0;F<R;F+=1)c=h.shapes[F],c&&c._length&&(I+=re(c,c._length,c.c,u));S.caches[l]=I}else I=S.caches[l];S.styles[l].d+=T.hd===!0?"":I,S.styles[l]._mdf=L||S.styles[l]._mdf}}function m(T,S,b){var F=S.style;(S.c._mdf||b)&&F.pElem.setAttribute("fill","rgb("+Gt(S.c.v[0])+","+Gt(S.c.v[1])+","+Gt(S.c.v[2])+")"),(S.o._mdf||b)&&F.pElem.setAttribute("fill-opacity",S.o.v)}function E(T,S,b){w(T,S,b),B(T,S,b)}function w(T,S,b){var F=S.gf,R=S.g._hasOpacity,I=S.s.v,L=S.e.v;if(S.o._mdf||b){var c=T.ty==="gf"?"fill-opacity":"stroke-opacity";S.style.pElem.setAttribute(c,S.o.v)}if(S.s._mdf||b){var l=T.t===1?"x1":"cx",o=l==="x1"?"y1":"cy";F.setAttribute(l,I[0]),F.setAttribute(o,I[1]),R&&!S.g._collapsable&&(S.of.setAttribute(l,I[0]),S.of.setAttribute(o,I[1]))}var a,h,u,f;if(S.g._cmdf||b){a=S.cst;var C=S.g.c;for(u=a.length,h=0;h<u;h+=1)f=a[h],f.setAttribute("offset",C[h*4]+"%"),f.setAttribute("stop-color","rgb("+C[h*4+1]+","+C[h*4+2]+","+C[h*4+3]+")")}if(R&&(S.g._omdf||b)){var $=S.g.o;for(S.g._collapsable?a=S.cst:a=S.ost,u=a.length,h=0;h<u;h+=1)f=a[h],S.g._collapsable||f.setAttribute("offset",$[h*2]+"%"),f.setAttribute("stop-opacity",$[h*2+1])}if(T.t===1)(S.e._mdf||b)&&(F.setAttribute("x2",L[0]),F.setAttribute("y2",L[1]),R&&!S.g._collapsable&&(S.of.setAttribute("x2",L[0]),S.of.setAttribute("y2",L[1])));else{var rt;if((S.s._mdf||S.e._mdf||b)&&(rt=Math.sqrt(Math.pow(I[0]-L[0],2)+Math.pow(I[1]-L[1],2)),F.setAttribute("r",rt),R&&!S.g._collapsable&&S.of.setAttribute("r",rt)),S.e._mdf||S.h._mdf||S.a._mdf||b){rt||(rt=Math.sqrt(Math.pow(I[0]-L[0],2)+Math.pow(I[1]-L[1],2)));var at=Math.atan2(L[1]-I[1],L[0]-I[0]),it=S.h.v;it>=1?it=.99:it<=-1&&(it=-.99);var Z=rt*it,tt=Math.cos(at+S.a.v)*Z+I[0],W=Math.sin(at+S.a.v)*Z+I[1];F.setAttribute("fx",tt),F.setAttribute("fy",W),R&&!S.g._collapsable&&(S.of.setAttribute("fx",tt),S.of.setAttribute("fy",W))}}}function B(T,S,b){var F=S.style,R=S.d;R&&(R._mdf||b)&&R.dashStr&&(F.pElem.setAttribute("stroke-dasharray",R.dashStr),F.pElem.setAttribute("stroke-dashoffset",R.dashoffset[0])),S.c&&(S.c._mdf||b)&&F.pElem.setAttribute("stroke","rgb("+Gt(S.c.v[0])+","+Gt(S.c.v[1])+","+Gt(S.c.v[2])+")"),(S.o._mdf||b)&&F.pElem.setAttribute("stroke-opacity",S.o.v),(S.w._mdf||b)&&(F.pElem.setAttribute("stroke-width",S.w.v),F.msElem&&F.msElem.setAttribute("stroke-width",S.w.v))}return n}();function Xe(){}Xe.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var t=0,e=this.data.masksProperties.length;t<e;){if(this.data.masksProperties[t].mode!=="n"&&this.data.masksProperties[t].cl!==!1)return!0;t+=1}return!1},initExpressions:function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var t=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(t),this.data.ty===0||this.data.xt?this.compInterface=CompExpressionInterface(this):this.data.ty===4?(this.layerInterface.shapeInterface=ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):this.data.ty===5&&(this.layerInterface.textInterface=TextExpressionInterface(this),this.layerInterface.text=this.layerInterface.textInterface)},setBlendMode:function(){var t=Ht(this.data.bm),e=this.baseElement||this.layerElement;e.style["mix-blend-mode"]=t},initBaseData:function(t,e,n){this.globalData=e,this.comp=n,this.data=t,this.layerId=Kt(),this.data.sr||(this.data.sr=1),this.effectsManager=new ci(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}};function De(t,e,n){this.initFrame(),this.initBaseData(t,e,n),this.initFrame(),this.initTransform(t,e,n),this.initHierarchy()}De.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},De.prototype.renderFrame=function(){},De.prototype.getBaseElement=function(){return null},De.prototype.destroy=function(){},De.prototype.sourceRectAtTime=function(){},De.prototype.hide=function(){},x([Xe,en,tn,$e],De);function sn(){}sn.prototype={initRendererElement:function(){this.layerElement=J("g")},createContainerElements:function(){this.matteElement=J("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var t=null,e,n,i;if(this.data.td){if(this.data.td==3||this.data.td==1){var s=J("mask");s.setAttribute("id",this.layerId),s.setAttribute("mask-type",this.data.td==3?"luminance":"alpha"),s.appendChild(this.layerElement),t=s,this.globalData.defs.appendChild(s),!Vt.maskType&&this.data.td==1&&(s.setAttribute("mask-type","luminance"),e=Kt(),n=Et.createFilter(e),this.globalData.defs.appendChild(n),n.appendChild(Et.createAlphaToLuminanceFilter()),i=J("g"),i.appendChild(this.layerElement),t=i,s.appendChild(i),i.setAttribute("filter","url("+ct+"#"+e+")"))}else if(this.data.td==2){var r=J("mask");r.setAttribute("id",this.layerId),r.setAttribute("mask-type","alpha");var m=J("g");r.appendChild(m),e=Kt(),n=Et.createFilter(e);var E=J("feComponentTransfer");E.setAttribute("in","SourceGraphic"),n.appendChild(E);var w=J("feFuncA");w.setAttribute("type","table"),w.setAttribute("tableValues","1.0 0.0"),E.appendChild(w),this.globalData.defs.appendChild(n);var B=J("rect");B.setAttribute("width",this.comp.data.w),B.setAttribute("height",this.comp.data.h),B.setAttribute("x","0"),B.setAttribute("y","0"),B.setAttribute("fill","#ffffff"),B.setAttribute("opacity","0"),m.setAttribute("filter","url("+ct+"#"+e+")"),m.appendChild(B),m.appendChild(this.layerElement),t=m,Vt.maskType||(r.setAttribute("mask-type","luminance"),n.appendChild(Et.createAlphaToLuminanceFilter()),i=J("g"),m.appendChild(B),i.appendChild(this.layerElement),t=i,m.appendChild(i)),this.globalData.defs.appendChild(r)}}else this.data.tt?(this.matteElement.appendChild(this.layerElement),t=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.ty===0&&!this.data.hd){var T=J("clipPath"),S=J("path");S.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var b=Kt();if(T.setAttribute("id",b),T.appendChild(S),this.globalData.defs.appendChild(T),this.checkMasks()){var F=J("g");F.setAttribute("clip-path","url("+ct+"#"+b+")"),F.appendChild(this.layerElement),this.transformedElement=F,t?t.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+ct+"#"+b+")")}this.data.bm!==0&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.mat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.mProp.o.v)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new le(this.data,this,this.globalData),this.renderableEffectsManager=new di},setMatte:function(t){this.matteElement&&this.matteElement.setAttribute("mask","url("+ct+"#"+t+")")}};function Sn(){}Sn.prototype={addShapeToModifiers:function(t){var e,n=this.shapeModifiers.length;for(e=0;e<n;e+=1)this.shapeModifiers[e].addShape(t)},isShapeInAnimatedModifiers:function(t){for(var e=0,n=this.shapeModifiers.length;e<n;)if(this.shapeModifiers[e].isAnimatedWithShape(t))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var t,e=this.shapes.length;for(t=0;t<e;t+=1)this.shapes[t].sh.reset();e=this.shapeModifiers.length;var n;for(t=e-1;t>=0&&(n=this.shapeModifiers[t].processShapes(this._isFirstFrame),!n);t-=1);}},searchProcessedElement:function(t){for(var e=this.processedElements,n=0,i=e.length;n<i;){if(e[n].elem===t)return e[n].pos;n+=1}return 0},addProcessedElement:function(t,e){for(var n=this.processedElements,i=n.length;i;)if(i-=1,n[i].elem===t){n[i].pos=e;return}n.push(new oi(t,e))},prepareFrame:function(t){this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)}};function be(){}be.prototype.initElement=function(t,e,n){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,n),this.textProperty=new It(this,t.t,this.dynamicProperties),this.textAnimator=new zt(t.t,this.renderType,this),this.initTransform(t,e,n),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},be.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)},be.prototype.createPathShape=function(t,e){var n,i=e.length,s,r="";for(n=0;n<i;n+=1)s=e[n].ks.k,r+=re(s,s.i.length,!0,t);return r},be.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},be.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},be.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},be.prototype.applyTextPropertiesToMatrix=function(t,e,n,i,s){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[n]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[n])/2,0,0);break}e.translate(i,s,0)},be.prototype.buildColor=function(t){return"rgb("+Math.round(t[0]*255)+","+Math.round(t[1]*255)+","+Math.round(t[2]*255)+")"},be.prototype.emptyProp=new jt,be.prototype.destroy=function(){};function Ie(){}x([Xe,en,tn,$e,an],Ie),Ie.prototype.initElement=function(t,e,n){this.initFrame(),this.initBaseData(t,e,n),this.initTransform(t,e,n),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),(this.data.xt||!e.progressiveLoad)&&this.buildAllItems(),this.hide()},Ie.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),!(!this.isInRange&&!this.data.xt)){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var n,i=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),n=i-1;n>=0;n-=1)(this.completeLayers||this.elements[n])&&(this.elements[n].prepareFrame(this.renderedFrame-this.layers[n].st),this.elements[n]._mdf&&(this._mdf=!0))}},Ie.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},Ie.prototype.setElements=function(t){this.elements=t},Ie.prototype.getElements=function(){return this.elements},Ie.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},Ie.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()};function on(t,e,n){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,n),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}x([Xe,en,sn,tn,$e,an],on),on.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=J("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},on.prototype.sourceRectAtTime=function(){return this.sourceRect};function vn(t,e,n){this.initElement(t,e,n)}x([on],vn),vn.prototype.createContent=function(){var t=J("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)};function fe(t,e,n){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.initBaseData(t,e,n),this._isPlaying=!1,this._canPlay=!1;var i=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(i),this._currentTime=0,this.globalData.audioController.addAudio(this),this.tm=t.tm?k.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}fe.prototype.prepareFrame=function(t){if(this.prepareRenderableFrame(t,!0),this.prepareProperties(t,!0),this.tm._placeholder)this._currentTime=t/this.data.sr;else{var e=this.tm.v;this._currentTime=e}},x([gn,Xe,$e],fe),fe.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},fe.prototype.show=function(){},fe.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},fe.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},fe.prototype.resume=function(){this._canPlay=!0},fe.prototype.setRate=function(t){this.audio.rate(t)},fe.prototype.volume=function(t){this.audio.volume(t)},fe.prototype.getBaseElement=function(){return null},fe.prototype.destroy=function(){},fe.prototype.sourceRectAtTime=function(){},fe.prototype.initExpressions=function(){};function Ln(t,e,n){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?X(this.layers.length):[],this.initElement(t,e,n),this.tm=t.tm?k.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}x([Wt,Ie,sn],Ln);function Ye(t,e,n){this.textSpans=[],this.renderType="svg",this.initElement(t,e,n)}x([Xe,en,sn,tn,$e,an,be],Ye),Ye.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=J("text"))},Ye.prototype.buildTextContents=function(t){for(var e=0,n=t.length,i=[],s="";e<n;)t[e]==="\r"||t[e]===""?(i.push(s),s=""):s+=t[e],e+=1;return i.push(s),i},Ye.prototype.buildNewText=function(){var t,e,n=this.textProperty.currentData;this.renderedLetters=X(n?n.l.length:0),n.fc?this.layerElement.setAttribute("fill",this.buildColor(n.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),n.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(n.sc)),this.layerElement.setAttribute("stroke-width",n.sw)),this.layerElement.setAttribute("font-size",n.finalSize);var i=this.globalData.fontManager.getFontByName(n.f);if(i.fClass)this.layerElement.setAttribute("class",i.fClass);else{this.layerElement.setAttribute("font-family",i.fFamily);var s=n.fWeight,r=n.fStyle;this.layerElement.setAttribute("font-style",r),this.layerElement.setAttribute("font-weight",s)}this.layerElement.setAttribute("aria-label",n.t);var m=n.l||[],E=!!this.globalData.fontManager.chars;e=m.length;var w,B=this.mHelper,T,S="",b=this.data.singleShape,F=0,R=0,I=!0,L=n.tr*.001*n.finalSize;if(b&&!E&&!n.sz){var c=this.textContainer,l="start";switch(n.j){case 1:l="end";break;case 2:l="middle";break;default:l="start";break}c.setAttribute("text-anchor",l),c.setAttribute("letter-spacing",L);var o=this.buildTextContents(n.finalText);for(e=o.length,R=n.ps?n.ps[1]+n.ascent:0,t=0;t<e;t+=1)w=this.textSpans[t]||J("tspan"),w.textContent=o[t],w.setAttribute("x",0),w.setAttribute("y",R),w.style.display="inherit",c.appendChild(w),this.textSpans[t]=w,R+=n.finalLineHeight;this.layerElement.appendChild(c)}else{var a=this.textSpans.length,h,u;for(t=0;t<e;t+=1)(!E||!b||t===0)&&(w=a>t?this.textSpans[t]:J(E?"path":"text"),a<=t&&(w.setAttribute("stroke-linecap","butt"),w.setAttribute("stroke-linejoin","round"),w.setAttribute("stroke-miterlimit","4"),this.textSpans[t]=w,this.layerElement.appendChild(w)),w.style.display="inherit"),B.reset(),B.scale(n.finalSize/100,n.finalSize/100),b&&(m[t].n&&(F=-L,R+=n.yOffset,R+=I?1:0,I=!1),this.applyTextPropertiesToMatrix(n,B,m[t].line,F,R),F+=m[t].l||0,F+=L),E?(u=this.globalData.fontManager.getCharData(n.finalText[t],i.fStyle,this.globalData.fontManager.getFontByName(n.f).fFamily),h=u&&u.data||{},T=h.shapes?h.shapes[0].it:[],b?S+=this.createPathShape(B,T):w.setAttribute("d",this.createPathShape(B,T))):(b&&w.setAttribute("transform","translate("+B.props[12]+","+B.props[13]+")"),w.textContent=m[t].val,w.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"));b&&w&&w.setAttribute("d",S)}for(;t<this.textSpans.length;)this.textSpans[t].style.display="none",t+=1;this._sizeChanged=!0},Ye.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var t=this.layerElement.getBBox();this.bbox={top:t.y,left:t.x,width:t.width,height:t.height}}return this.bbox},Ye.prototype.renderInnerContent=function(){if(!this.data.singleShape&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var t,e,n=this.textAnimator.renderedLetters,i=this.textProperty.currentData.l;e=i.length;var s,r;for(t=0;t<e;t+=1)i[t].n||(s=n[t],r=this.textSpans[t],s._mdf.m&&r.setAttribute("transform",s.m),s._mdf.o&&r.setAttribute("opacity",s.o),s._mdf.sw&&r.setAttribute("stroke-width",s.sw),s._mdf.sc&&r.setAttribute("stroke",s.sc),s._mdf.fc&&r.setAttribute("fill",s.fc))}};function $t(t,e,n){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,n),this.prevViewData=[]}x([Xe,en,sn,Sn,tn,$e,an],$t),$t.prototype.initSecondaryElement=function(){},$t.prototype.identityMatrix=new y,$t.prototype.buildExpressionInterface=function(){},$t.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},$t.prototype.filterUniqueShapes=function(){var t,e=this.shapes.length,n,i,s=this.stylesList.length,r,m=[],E=!1;for(i=0;i<s;i+=1){for(r=this.stylesList[i],E=!1,m.length=0,t=0;t<e;t+=1)n=this.shapes[t],n.styles.indexOf(r)!==-1&&(m.push(n),E=n._isAnimated||E);m.length>1&&E&&this.setShapesAsAnimated(m)}},$t.prototype.setShapesAsAnimated=function(t){var e,n=t.length;for(e=0;e<n;e+=1)t[e].setAsAnimated()},$t.prototype.createStyleElement=function(t,e){var n,i=new xn(t,e),s=i.pElem;if(t.ty==="st")n=new kn(this,t,i);else if(t.ty==="fl")n=new An(this,t,i);else if(t.ty==="gf"||t.ty==="gs"){var r=t.ty==="gf"?nn:Mn;n=new r(this,t,i),this.globalData.defs.appendChild(n.gf),n.maskId&&(this.globalData.defs.appendChild(n.ms),this.globalData.defs.appendChild(n.of),s.setAttribute("mask","url("+ct+"#"+n.maskId+")"))}return(t.ty==="st"||t.ty==="gs")&&(s.setAttribute("stroke-linecap",j[t.lc||2]),s.setAttribute("stroke-linejoin",p[t.lj||2]),s.setAttribute("fill-opacity","0"),t.lj===1&&s.setAttribute("stroke-miterlimit",t.ml)),t.r===2&&s.setAttribute("fill-rule","evenodd"),t.ln&&s.setAttribute("id",t.ln),t.cl&&s.setAttribute("class",t.cl),t.bm&&(s.style["mix-blend-mode"]=Ht(t.bm)),this.stylesList.push(i),this.addToAnimatedContents(t,n),n},$t.prototype.createGroupElement=function(t){var e=new hi;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=Ht(t.bm)),e},$t.prototype.createTransformElement=function(t,e){var n=D.getTransformProperty(this,t,this),i=new li(n,n.o,e);return this.addToAnimatedContents(t,i),i},$t.prototype.createShapeElement=function(t,e,n){var i=4;t.ty==="rc"?i=5:t.ty==="el"?i=6:t.ty==="sr"&&(i=7);var s=ht.getShapeProp(this,t,i,this),r=new Cn(e,n,s);return this.shapes.push(r),this.addShapeToModifiers(r),this.addToAnimatedContents(t,r),r},$t.prototype.addToAnimatedContents=function(t,e){for(var n=0,i=this.animatedContents.length;n<i;){if(this.animatedContents[n].element===e)return;n+=1}this.animatedContents.push({fn:pi.createRenderFunction(t),element:e,data:t})},$t.prototype.setElementStyles=function(t){var e=t.styles,n,i=this.stylesList.length;for(n=0;n<i;n+=1)this.stylesList[n].closed||e.push(this.stylesList[n])},$t.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},$t.prototype.searchShapes=function(t,e,n,i,s,r,m){var E=[].concat(r),w,B=t.length-1,T,S,b=[],F=[],R,I,L;for(w=B;w>=0;w-=1){if(L=this.searchProcessedElement(t[w]),L?e[w]=n[L-1]:t[w]._render=m,t[w].ty==="fl"||t[w].ty==="st"||t[w].ty==="gf"||t[w].ty==="gs")L?e[w].style.closed=!1:e[w]=this.createStyleElement(t[w],s),t[w]._render&&e[w].style.pElem.parentNode!==i&&i.appendChild(e[w].style.pElem),b.push(e[w].style);else if(t[w].ty==="gr"){if(!L)e[w]=this.createGroupElement(t[w]);else for(S=e[w].it.length,T=0;T<S;T+=1)e[w].prevViewData[T]=e[w].it[T];this.searchShapes(t[w].it,e[w].it,e[w].prevViewData,e[w].gr,s+1,E,m),t[w]._render&&e[w].gr.parentNode!==i&&i.appendChild(e[w].gr)}else t[w].ty==="tr"?(L||(e[w]=this.createTransformElement(t[w],i)),R=e[w].transform,E.push(R)):t[w].ty==="sh"||t[w].ty==="rc"||t[w].ty==="el"||t[w].ty==="sr"?(L||(e[w]=this.createShapeElement(t[w],E,s)),this.setElementStyles(e[w])):t[w].ty==="tm"||t[w].ty==="rd"||t[w].ty==="ms"||t[w].ty==="pb"?(L?(I=e[w],I.closed=!1):(I=Y.getModifier(t[w].ty),I.init(this,t[w]),e[w]=I,this.shapeModifiers.push(I)),F.push(I)):t[w].ty==="rp"&&(L?(I=e[w],I.closed=!0):(I=Y.getModifier(t[w].ty),e[w]=I,I.init(this,t,w,e),this.shapeModifiers.push(I),m=!1),F.push(I));this.addProcessedElement(t[w],w+1)}for(B=b.length,w=0;w<B;w+=1)b[w].closed=!0;for(B=F.length,w=0;w<B;w+=1)F[w].closed=!0},$t.prototype.renderInnerContent=function(){this.renderModifiers();var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},$t.prototype.renderShape=function(){var t,e=this.animatedContents.length,n;for(t=0;t<e;t+=1)n=this.animatedContents[t],(this._isFirstFrame||n.element._isAnimated)&&n.data!==!0&&n.fn(n.data,n.element,this._isFirstFrame)},$t.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null};function di(){}var te=function(){var t={},e=[],n=0,i=0,s=0,r=!0,m=!1;function E(g){for(var d=0,v=g.target;d<i;)e[d].animation===v&&(e.splice(d,1),d-=1,i-=1,v.isPaused||S()),d+=1}function w(g,d){if(!g)return null;for(var v=0;v<i;){if(e[v].elem===g&&e[v].elem!==null)return e[v].animation;v+=1}var q=new yt;return b(q,g),q.setData(g,d),q}function B(){var g,d=e.length,v=[];for(g=0;g<d;g+=1)v.push(e[g].animation);return v}function T(){s+=1,rt()}function S(){s-=1}function b(g,d){g.addEventListener("destroy",E),g.addEventListener("_active",T),g.addEventListener("_idle",S),e.push({elem:d,animation:g}),i+=1}function F(g){var d=new yt;return b(d,null),d.setParams(g),d}function R(g,d){var v;for(v=0;v<i;v+=1)e[v].animation.setSpeed(g,d)}function I(g,d){var v;for(v=0;v<i;v+=1)e[v].animation.setDirection(g,d)}function L(g){var d;for(d=0;d<i;d+=1)e[d].animation.play(g)}function c(g){var d=g-n,v;for(v=0;v<i;v+=1)e[v].animation.advanceTime(d);n=g,s&&!m?N.requestAnimationFrame(c):r=!0}function l(g){n=g,N.requestAnimationFrame(c)}function o(g){var d;for(d=0;d<i;d+=1)e[d].animation.pause(g)}function a(g,d,v){var q;for(q=0;q<i;q+=1)e[q].animation.goToAndStop(g,d,v)}function h(g){var d;for(d=0;d<i;d+=1)e[d].animation.stop(g)}function u(g){var d;for(d=0;d<i;d+=1)e[d].animation.togglePause(g)}function f(g){var d;for(d=i-1;d>=0;d-=1)e[d].animation.destroy(g)}function C(g,d,v){var q=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),Q,G=q.length;for(Q=0;Q<G;Q+=1)v&&q[Q].setAttribute("data-bm-type",v),w(q[Q],g);if(d&&G===0){v||(v="svg");var wt=document.getElementsByTagName("body")[0];wt.innerText="";var St=ot("div");St.style.width="100%",St.style.height="100%",St.setAttribute("data-bm-type",v),wt.appendChild(St),w(St,g)}}function $(){var g;for(g=0;g<i;g+=1)e[g].animation.resize()}function rt(){!m&&s&&r&&(N.requestAnimationFrame(l),r=!1)}function at(){m=!0}function it(){m=!1,rt()}function Z(g,d){var v;for(v=0;v<i;v+=1)e[v].animation.setVolume(g,d)}function tt(g){var d;for(d=0;d<i;d+=1)e[d].animation.mute(g)}function W(g){var d;for(d=0;d<i;d+=1)e[d].animation.unmute(g)}return t.registerAnimation=w,t.loadAnimation=F,t.setSpeed=R,t.setDirection=I,t.play=L,t.pause=o,t.stop=h,t.togglePause=u,t.searchAnimations=C,t.resize=$,t.goToAndStop=a,t.destroy=f,t.freeze=at,t.unfreeze=it,t.setVolume=Z,t.mute=tt,t.unmute=W,t.getRegisteredAnimations=B,t}(),yt=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=Kt(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=kt,this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=Rt(),this.imagePreloader=new At,this.audioController=Ot(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this)};x([U],yt),yt.prototype.setParams=function(t){(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e="svg";switch(t.animType?e=t.animType:t.renderer&&(e=t.renderer),e){case"canvas":this.renderer=new CanvasRenderer(this,t.rendererSettings);break;case"svg":this.renderer=new Wt(this,t.rendererSettings);break;default:this.renderer=new HybridRenderer(this,t.rendererSettings);break}this.imagePreloader.setCacheType(e,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=e,t.loop===""||t.loop===null||t.loop===void 0||t.loop===!0?this.loop=!0:t.loop===!1?this.loop=!1:this.loop=parseInt(t.loop,10),this.autoplay="autoplay"in t?t.autoplay:!0,this.name=t.name?t.name:"",this.autoloadSegments=Object.prototype.hasOwnProperty.call(t,"autoloadSegments")?t.autoloadSegments:!0,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.audioFactory&&this.audioController.setAudioFactory(t.audioFactory),t.animationData?this.setupAnimation(t.animationData):t.path&&(t.path.lastIndexOf("\\")!==-1?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),M.loadAnimation(t.path,this.configAnimation,this.onSetupError))},yt.prototype.onSetupError=function(){this.trigger("data_failed")},yt.prototype.setupAnimation=function(t){M.completeAnimation(t,this.configAnimation)},yt.prototype.setData=function(t,e){e&&typeof e!="object"&&(e=JSON.parse(e));var n={wrapper:t,animationData:e},i=t.attributes;n.path=i.getNamedItem("data-animation-path")?i.getNamedItem("data-animation-path").value:i.getNamedItem("data-bm-path")?i.getNamedItem("data-bm-path").value:i.getNamedItem("bm-path")?i.getNamedItem("bm-path").value:"",n.animType=i.getNamedItem("data-anim-type")?i.getNamedItem("data-anim-type").value:i.getNamedItem("data-bm-type")?i.getNamedItem("data-bm-type").value:i.getNamedItem("bm-type")?i.getNamedItem("bm-type").value:i.getNamedItem("data-bm-renderer")?i.getNamedItem("data-bm-renderer").value:i.getNamedItem("bm-renderer")?i.getNamedItem("bm-renderer").value:"canvas";var s=i.getNamedItem("data-anim-loop")?i.getNamedItem("data-anim-loop").value:i.getNamedItem("data-bm-loop")?i.getNamedItem("data-bm-loop").value:i.getNamedItem("bm-loop")?i.getNamedItem("bm-loop").value:"";s==="false"?n.loop=!1:s==="true"?n.loop=!0:s!==""&&(n.loop=parseInt(s,10));var r=i.getNamedItem("data-anim-autoplay")?i.getNamedItem("data-anim-autoplay").value:i.getNamedItem("data-bm-autoplay")?i.getNamedItem("data-bm-autoplay").value:i.getNamedItem("bm-autoplay")?i.getNamedItem("bm-autoplay").value:!0;n.autoplay=r!=="false",n.name=i.getNamedItem("data-name")?i.getNamedItem("data-name").value:i.getNamedItem("data-bm-name")?i.getNamedItem("data-bm-name").value:i.getNamedItem("bm-name")?i.getNamedItem("bm-name").value:"";var m=i.getNamedItem("data-anim-prerender")?i.getNamedItem("data-anim-prerender").value:i.getNamedItem("data-bm-prerender")?i.getNamedItem("data-bm-prerender").value:i.getNamedItem("bm-prerender")?i.getNamedItem("bm-prerender").value:"";m==="false"&&(n.prerender=!1),this.setParams(n)},yt.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e=this.animationData.layers,n,i=e.length,s=t.layers,r,m=s.length;for(r=0;r<m;r+=1)for(n=0;n<i;){if(e[n].id===s[r].id){e[n]=s[r];break}n+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(i=t.assets.length,n=0;n<i;n+=1)this.animationData.assets.push(t.assets[n]);this.animationData.__complete=!1,M.completeAnimation(this.animationData,this.onSegmentComplete)},yt.prototype.onSegmentComplete=function(t){this.animationData=t,Dt&&Dt.initExpressions(this),this.loadNextSegment()},yt.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||t.length===0||!this.autoloadSegments){this.trigger("data_ready"),this.timeCompleted=this.totalFrames;return}var e=t.shift();this.timeCompleted=e.time*this.frameRate;var n=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,M.loadData(n,this.includeLayers.bind(this),(function(){this.trigger("data_failed")}).bind(this))},yt.prototype.loadSegments=function(){var t=this.animationData.segments;t||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},yt.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},yt.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},yt.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.markers=Te(t.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(e){this.triggerConfigError(e)}},yt.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},yt.prototype.checkLoaded=function(){!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||this.renderer.rendererType!=="canvas")&&this.imagePreloader.loadedFootages()&&(this.isLoaded=!0,Dt&&Dt.initExpressions(this),this.renderer.initItems(),setTimeout((function(){this.trigger("DOMLoaded")}).bind(this),0),this.gotoFrame(),this.autoplay&&this.play())},yt.prototype.resize=function(){this.renderer.updateContainerSize()},yt.prototype.setSubframe=function(t){this.isSubframeEnabled=!!t},yt.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},yt.prototype.renderFrame=function(){if(!(this.isLoaded===!1||!this.renderer))try{this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},yt.prototype.play=function(t){t&&this.name!==t||this.isPaused===!0&&(this.isPaused=!1,this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},yt.prototype.pause=function(t){t&&this.name!==t||this.isPaused===!1&&(this.isPaused=!0,this._idle=!0,this.trigger("_idle"),this.audioController.pause())},yt.prototype.togglePause=function(t){t&&this.name!==t||(this.isPaused===!0?this.play():this.pause())},yt.prototype.stop=function(t){t&&this.name!==t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},yt.prototype.getMarkerData=function(t){for(var e,n=0;n<this.markers.length;n+=1)if(e=this.markers[n],e.payload&&e.payload.name===t)return e;return null},yt.prototype.goToAndStop=function(t,e,n){if(!(n&&this.name!==n)){var i=Number(t);if(isNaN(i)){var s=this.getMarkerData(t);s&&this.goToAndStop(s.time,!0)}else e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier);this.pause()}},yt.prototype.goToAndPlay=function(t,e,n){if(!(n&&this.name!==n)){var i=Number(t);if(isNaN(i)){var s=this.getMarkerData(t);s&&(s.duration?this.playSegments([s.time,s.time+s.duration],!0):this.goToAndStop(s.time,!0))}else this.goToAndStop(i,e,n);this.play()}},yt.prototype.advanceTime=function(t){if(!(this.isPaused===!0||this.isLoaded===!1)){var e=this.currentRawFrame+t*this.frameModifier,n=!1;e>=this.totalFrames-1&&this.frameModifier>0?!this.loop||this.playCount===this.loop?this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(n=!0,e=this.totalFrames-1):e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):e<0?this.checkSegments(e%this.totalFrames)||(this.loop&&!(this.playCount--<=0&&this.loop!==!0)?(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0):(n=!0,e=0)):this.setCurrentRawFrameValue(e),n&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},yt.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.timeCompleted=this.totalFrames,this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.timeCompleted=this.totalFrames,this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},yt.prototype.setSegment=function(t,e){var n=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?n=t:this.currentRawFrame+this.firstFrame>e&&(n=e-t)),this.firstFrame=t,this.totalFrames=e-t,this.timeCompleted=this.totalFrames,n!==-1&&this.goToAndStop(n,!0)},yt.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),typeof t[0]=="object"){var n,i=t.length;for(n=0;n<i;n+=1)this.segments.push(t[n])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},yt.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},yt.prototype.checkSegments=function(t){return this.segments.length?(this.adjustSegment(this.segments.shift(),t),!0):!1},yt.prototype.destroy=function(t){t&&this.name!==t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.renderer=null,this.imagePreloader=null,this.projectInterface=null)},yt.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},yt.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},yt.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},yt.prototype.setVolume=function(t,e){e&&this.name!==e||this.audioController.setVolume(t)},yt.prototype.getVolume=function(){return this.audioController.getVolume()},yt.prototype.mute=function(t){t&&this.name!==t||this.audioController.mute()},yt.prototype.unmute=function(t){t&&this.name!==t||this.audioController.unmute()},yt.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},yt.prototype.getPath=function(){return this.path},yt.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var n=t.p;n.indexOf("images/")!==-1&&(n=n.split("/")[1]),e=this.assetsPath+n}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},yt.prototype.getAssetData=function(t){for(var e=0,n=this.assets.length;e<n;){if(t===this.assets[e].id)return this.assets[e];e+=1}return null},yt.prototype.hide=function(){this.renderer.hide()},yt.prototype.show=function(){this.renderer.show()},yt.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},yt.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":case"drawnFrame":this.triggerEvent(t,new ce(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"loopComplete":this.triggerEvent(t,new Ae(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new We(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new Ge(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new Ue(t,this));break;default:this.triggerEvent(t)}t==="enterFrame"&&this.onEnterFrame&&this.onEnterFrame.call(this,new ce(t,this.currentFrame,this.totalFrames,this.frameMult)),t==="loopComplete"&&this.onLoopComplete&&this.onLoopComplete.call(this,new Ae(t,this.loop,this.playCount,this.frameMult)),t==="complete"&&this.onComplete&&this.onComplete.call(this,new We(t,this.frameMult)),t==="segmentStart"&&this.onSegmentStart&&this.onSegmentStart.call(this,new Ge(t,this.firstFrame,this.totalFrames)),t==="destroy"&&this.onDestroy&&this.onDestroy.call(this,new Ue(t,this))},yt.prototype.triggerRenderFrameError=function(t){var e=new we(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},yt.prototype.triggerConfigError=function(t){var e=new ye(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};function ci(){this.effectElements=[]}var Bt={};function fi(t){ct=t}function Pn(){te.searchAnimations()}function ui(t){kt=t}function mi(t){Nt=t}function gi(t){return te.loadAnimation(t)}function vi(t){if(typeof t=="string")switch(t){case"high":Qt=200;break;default:case"medium":Qt=50;break;case"low":Qt=10;break}else!isNaN(t)&&t>1&&(Qt=t)}function wi(){return typeof navigator<"u"}function yi(t,e){t==="expressions"&&(Dt=e)}function _i(t){switch(t){case"propertyFactory":return k;case"shapePropertyFactory":return ht;case"matrix":return y;default:return null}}Bt.play=te.play,Bt.pause=te.pause,Bt.setLocationHref=fi,Bt.togglePause=te.togglePause,Bt.setSpeed=te.setSpeed,Bt.setDirection=te.setDirection,Bt.stop=te.stop,Bt.searchAnimations=Pn,Bt.registerAnimation=te.registerAnimation,Bt.loadAnimation=gi,Bt.setSubframeRendering=ui,Bt.resize=te.resize,Bt.goToAndStop=te.goToAndStop,Bt.destroy=te.destroy,Bt.setQuality=vi,Bt.inBrowser=wi,Bt.installPlugin=yi,Bt.freeze=te.freeze,Bt.unfreeze=te.unfreeze,Bt.setVolume=te.setVolume,Bt.mute=te.mute,Bt.unmute=te.unmute,Bt.getRegisteredAnimations=te.getRegisteredAnimations,Bt.useWebWorker=function(t){Ct=t},Bt.setIDPrefix=mi,Bt.__getFactory=_i,Bt.version="5.8.1";function bi(){document.readyState==="complete"&&(clearInterval(Ai),Pn())}function xi(t){for(var e=En.split("&"),n=0;n<e.length;n+=1){var i=e[n].split("=");if(decodeURIComponent(i[0])==t)return decodeURIComponent(i[1])}return null}var En;{var Fn=document.getElementsByTagName("script"),Ci=Fn.length-1,ki=Fn[Ci]||{src:""};En=ki.src.replace(/^[^\?]+\??/,""),xi("renderer")}var Ai=setInterval(bi,100);return Bt})})(qn);var Ti=qn.exports;const Dn=Vn(Ti);function ke(qt,N){N===void 0&&(N={});var pt=N.insertAt;if(qt&&typeof document<"u"){var ct=document.head||document.getElementsByTagName("head")[0],xt=document.createElement("style");xt.type="text/css",pt==="top"&&ct.firstChild?ct.insertBefore(xt,ct.firstChild):ct.appendChild(xt),xt.styleSheet?xt.styleSheet.cssText=qt:xt.appendChild(document.createTextNode(qt))}}var Hn=`.pera-wallet-modal-header {
  position: absolute;
  top: -44px;
  right: 0px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pera-wallet-modal-header--mobile {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: static;
}
.pera-wallet-modal-header--mobile .pera-wallet-modal-header__close-button {
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: unset;
  box-shadow: unset;
}

.pera-wallet-modal-header__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.1px;
  color: #ffffff;
}

.pera-wallet-modal-header__brand-text {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pera-wallet-modal-header__version-number {
  color: #9d9dae;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal-header__close-button {
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
  background: rgba(44, 53, 89, 0.1);
  border-radius: 8px;
}

.pera-wallet-modal-header__close-button__close-icon {
  width: 20px;
  height: 20px;
}`;ke(Hn);const Zn=document.createElement("template"),Ii=Oe()?"pera-wallet-modal-header pera-wallet-modal-header--mobile":"pera-wallet-modal-header pera-wallet-modal-header--desktop";Zn.innerHTML=`
  <div class="${Ii}">
      ${Oe()?"":`<div class="pera-wallet-modal-header__brand">
              <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='24' height='24' rx='4.8' fill='%23FFEE55'/%3e%3cpath d='M13.0408 5.92462C13.413 7.46693 13.2872 8.8236 12.7597 8.95482C12.2322 9.08605 11.5028 7.94214 11.1306 6.39983C10.7583 4.85752 10.8842 3.50085 11.4117 3.36963C11.9391 3.2384 12.6685 4.38231 13.0408 5.92462Z' fill='black'/%3e%3cpath d='M19.1876 7.25063C18.3632 6.37689 16.7231 6.61371 15.5243 7.77959C14.3254 8.94547 14.0219 10.5989 14.8463 11.4727C15.6707 12.3464 17.3108 12.1096 18.5097 10.9437C19.7085 9.77781 20.012 8.12438 19.1876 7.25063Z' fill='black'/%3e%3cpath d='M12.6308 20.6297C13.1583 20.4985 13.2656 19.0651 12.8705 17.4281C12.4754 15.7911 11.7275 14.5705 11.2 14.7017C10.6725 14.8329 10.5652 16.2663 10.9603 17.9033C11.3554 19.5403 12.1033 20.7609 12.6308 20.6297Z' fill='black'/%3e%3cpath d='M7.25371 8.05056C8.77551 8.49933 9.8875 9.28664 9.73741 9.80906C9.58731 10.3315 8.23197 10.3912 6.71016 9.94242C5.18836 9.49364 4.07637 8.70633 4.22646 8.18391C4.37656 7.66149 5.7319 7.60178 7.25371 8.05056Z' fill='black'/%3e%3cpath d='M17.1309 13.9497C18.7461 14.4261 19.9338 15.2357 19.7837 15.7581C19.6336 16.2806 18.2025 16.3179 16.5873 15.8416C14.9721 15.3653 13.7844 14.5556 13.9345 14.0332C14.0846 13.5108 15.5157 13.4734 17.1309 13.9497Z' fill='black'/%3e%3cpath d='M8.96609 12.8536C8.5887 12.4624 7.35088 13.0318 6.20133 14.1253C5.05177 15.2188 4.42581 16.4225 4.80319 16.8137C5.18058 17.2048 6.4184 16.6355 7.56796 15.542C8.71751 14.4484 9.34347 13.2448 8.96609 12.8536Z' fill='black'/%3e%3c/svg%3e" />

              <div class="pera-wallet-modal-header__brand-text">
                <span>Pera Connect</span>

                <span class="pera-wallet-modal-header__version-number">v1.4.2</span>
              </div>
            </div>
            `} 

      <button
        id="pera-wallet-modal-header-close-button"
        class="pera-wallet-button pera-wallet-modal-header__close-button">
        <img
          class="pera-wallet-modal-header__close-button__close-icon"
          src="${Oe()?"data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6' stroke='%232C3559' stroke-width='2'/%3e%3c/svg%3e":"data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6' stroke='white' stroke-width='2'/%3e%3c/svg%3e"}"
        />
      </button>
    </div>
`;class zi extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const N=document.createElement("style");N.textContent=Hn,this.shadowRoot.append(Zn.content.cloneNode(!0),N),this.onClose()}}onClose(){var N;const pt=(N=this.shadowRoot)===null||N===void 0?void 0:N.getElementById("pera-wallet-modal-header-close-button"),ct=this.getAttribute("modal-id");pt&&ct===un&&pt.addEventListener("click",()=>{mn(un)})}}var Nn="data:image/svg+xml,%3csvg fill='none' height='80' width='80' xmlns='http://www.w3.org/2000/svg'%3e%3cpath clip-rule='evenodd' d='M39.9 80V68.99h-9.8V80h-.2V68.99h-3.5a6.503 6.503 0 0 1-6.247-4.7 6.514 6.514 0 0 1-4.445-4.444 6.503 6.503 0 0 1-4.695-6.246v-3.5H0v-.2h11.013v-9.8H0v-.2h11.013v-9.8H0v-.2h11.013v-3.5a6.503 6.503 0 0 1 4.694-6.246 6.513 6.513 0 0 1 4.447-4.447 6.503 6.503 0 0 1 6.246-4.696h3.5V0h.2v11.011h9.8V0h.2v11.011h9.8V0h.2v11.011h3.5a6.503 6.503 0 0 1 6.247 4.697 6.514 6.514 0 0 1 4.443 4.444 6.503 6.503 0 0 1 4.701 6.248v3.5H80v.2H68.991v9.8H80v.2H68.991v9.8H80v.2H68.991v3.5a6.503 6.503 0 0 1-4.701 6.248 6.514 6.514 0 0 1-4.443 4.442 6.503 6.503 0 0 1-6.247 4.7h-3.5V80h-.2V68.99h-9.8V80zm28.89-40.1a28.728 28.728 0 0 0-1.746-9.8h-2.5v9.8h4.247zm-4.246.2h4.247a28.729 28.729 0 0 1-1.747 9.8h-2.5zm-.2-.2v-9.8H60.1v9.8zm-4.244.2h4.244v9.8H60.1zm-.2-.2a19.807 19.807 0 0 0-2.633-9.8H50.1v9.8zm-9.8.2h9.8a19.807 19.807 0 0 1-2.633 9.8H50.1zm-.2-.2v-9.8h-9.8v9.8zm-9.8.2h9.8v9.8h-9.8zm-.2-.2v-9.8h-9.8v9.8zm-9.8.2h9.8v9.8h-9.8zm-.2-.2v-9.8h-7.167a19.807 19.807 0 0 0-2.633 9.8zm-9.8.2h9.8v9.8h-7.167a19.807 19.807 0 0 1-2.633-9.8zm-.2-.2v-9.8h-4.245v9.8zm-4.245.2H19.9v9.8h-4.245zm-.2-.2v-9.8H12.96a28.726 28.726 0 0 0-1.748 9.8h4.242zm-4.242.2h4.242v9.8H12.96a28.726 28.726 0 0 1-1.748-9.8zm0 13.5v-3.5h1.608a28.876 28.876 0 0 0 2.634 5.327v2.617c0 .543.066 1.07.192 1.575a6.303 6.303 0 0 1-4.434-6.019zm4.242 1.449a28.674 28.674 0 0 1-2.42-4.949h2.42zm.2.32V50.1H19.9v9.8h-.702a28.915 28.915 0 0 1-3.543-4.53zM20.1 59.9v-9.8h2.518a20.2 20.2 0 0 0 7.282 7.282V59.9zm0-10h2.403a19.966 19.966 0 0 1-2.403-7.053zm9.8 7.25a20 20 0 0 1-7.05-7.05h7.05zm.2.117V50.1h9.8v9.8a19.807 19.807 0 0 1-9.8-2.633zm10 2.633v-9.8h9.8v7.167a19.807 19.807 0 0 1-9.8 2.633zm10-2.75V50.1h7.05a20 20 0 0 1-7.05 7.05zm0 .232a20.2 20.2 0 0 0 7.282-7.282H59.9v9.8h-9.8zm7.397-7.482H59.9v-7.053a19.966 19.966 0 0 1-2.403 7.053zm2.603 10v-9.8h4.244v5.28a28.91 28.91 0 0 1-3.538 4.52zm4.444-4.841V50.1h2.426a28.67 28.67 0 0 1-2.426 4.959zm0 .378a28.881 28.881 0 0 0 2.64-5.337h1.607v3.5a6.303 6.303 0 0 1-4.44 6.021 6.514 6.514 0 0 0 .193-1.577zm2.713-5.537h1.534v-6.477a28.817 28.817 0 0 1-1.534 6.477zm-56.044 0h1.535a28.807 28.807 0 0 1-1.535-6.477zm57.578-20v-3.5a6.303 6.303 0 0 0-4.44-6.02c.126.504.193 1.031.193 1.575v2.608a28.877 28.877 0 0 1 2.639 5.337zm-1.534.2h1.534v6.477a28.815 28.815 0 0 0-1.534-6.477zm-.288-.2a28.673 28.673 0 0 0-2.425-4.958V29.9zm-2.625 0v-5.279a28.911 28.911 0 0 0-3.538-4.521H60.1v9.8zm-4.444 0v-9.8h-9.8v2.518a20.2 20.2 0 0 1 7.282 7.282zm-2.403.2H59.9v7.053a19.966 19.966 0 0 0-2.403-7.053zm-.347-.2a20 20 0 0 0-7.05-7.05v7.05zm-7.25 0v-7.167a19.807 19.807 0 0 0-9.8-2.633v9.8zm-10 0v-9.8a19.807 19.807 0 0 0-9.8 2.633V29.9zm-10 0v-7.05a20 20 0 0 0-7.05 7.05zm-7.282 0a20.2 20.2 0 0 1 7.282-7.282V20.1h-9.8v9.8zm-2.518.2h2.403a19.966 19.966 0 0 0-2.403 7.053zm-.2-.2v-9.8h-.701a28.915 28.915 0 0 0-3.544 4.53v5.27zm-4.445 0v-4.948a28.665 28.665 0 0 0-2.42 4.948zm-2.634 0a28.874 28.874 0 0 1 2.634-5.327v-2.618c0-.543.066-1.07.191-1.574a6.303 6.303 0 0 0-4.433 6.019v3.5zm-1.608.2h1.535a28.81 28.81 0 0 0-1.535 6.477zM36.58 68.79H30.1v-1.536c2.06.749 4.23 1.27 6.479 1.535zm3.321-.001a28.726 28.726 0 0 1-9.8-1.748v-2.497h9.8zm-10-1.822v-2.423h-4.953a28.678 28.678 0 0 0 4.953 2.423zm10-2.623h-9.8V60.1h9.8zm-10 0V60.1h-9.8v.702a28.915 28.915 0 0 0 4.526 3.542H29.9zm7.254-4.444H30.1v-2.403a19.966 19.966 0 0 0 7.053 2.403zm0-39.8a19.966 19.966 0 0 0-7.054 2.403V20.1h7.053zm2.746-.2h-9.8v-4.245h9.8zm-10 0v-4.245h-5.27a28.907 28.907 0 0 0-4.53 3.544v.701zm10-4.445h-9.8V12.96a28.729 28.729 0 0 1 9.8-1.749zm-10 0v-2.421a28.668 28.668 0 0 0-4.95 2.42h4.95zm6.679-4.244a28.81 28.81 0 0 0-6.479 1.536V11.21h6.479zm-6.679 1.61v-1.61h-3.5a6.303 6.303 0 0 0-6.02 4.436 6.514 6.514 0 0 1 1.575-.192h2.617A28.877 28.877 0 0 1 29.9 12.82zm0 55.968V67.18a28.878 28.878 0 0 1-5.331-2.636h-2.614c-.543 0-1.07-.067-1.575-.192a6.303 6.303 0 0 0 6.02 4.437zm20.2 0h3.5a6.303 6.303 0 0 0 6.02-4.438 6.513 6.513 0 0 1-1.576.193h-2.608a28.879 28.879 0 0 1-5.336 2.638zm-.2-1.534v1.534h-6.475a28.808 28.808 0 0 0 6.475-1.534zm.2-.287a28.671 28.671 0 0 0 4.957-2.424H50.1v2.424zm-.2-2.424v2.499a28.728 28.728 0 0 1-9.8 1.746v-4.245zm.2-.2h5.278a28.914 28.914 0 0 0 4.522-3.538V60.1h-9.8zm-.2-4.244v4.244h-9.8V60.1zm0-2.603V59.9h-7.053a19.966 19.966 0 0 0 7.053-2.403zm0-37.397v2.403a19.966 19.966 0 0 0-7.053-2.403H49.9zm.2-.2h9.8v-.705a28.911 28.911 0 0 0-4.526-3.54H50.1V19.9zm-.2-4.245V19.9h-9.8v-4.245h9.8zm.2-.2h4.954a28.676 28.676 0 0 0-4.954-2.423zm-.2-2.497v2.497h-9.8V11.21a28.75 28.75 0 0 1 9.8 1.747zm.2-.14a28.877 28.877 0 0 1 5.332 2.637h2.612c.543 0 1.071.066 1.576.192a6.303 6.303 0 0 0-6.02-4.436h-3.5zm-.2-1.607v1.534a28.812 28.812 0 0 0-6.475-1.534H49.9zm-34.245 44.53v2.303c0 .567.075 1.117.215 1.64a6.309 6.309 0 0 0 1.643.216h1.41a29.118 29.118 0 0 1-3.268-4.16zm3.458 4.359h-1.6a6.513 6.513 0 0 1-1.578-.193 6.315 6.315 0 0 0 4.157 4.157 6.517 6.517 0 0 1-.192-1.575v-1.602a29.35 29.35 0 0 1-.787-.787zm.787.509a29.029 29.029 0 0 1-.508-.509h.508zm.2.469v1.411c0 .567.075 1.117.215 1.64.523.14 1.073.215 1.64.215h2.3a29.118 29.118 0 0 1-4.155-3.266zm35.649 3.266h2.295c.567 0 1.117-.075 1.64-.216a6.286 6.286 0 0 0 .216-1.639v-1.407a29.116 29.116 0 0 1-4.151 3.262zm4.35-3.454v1.598a6.53 6.53 0 0 1-.192 1.574 6.314 6.314 0 0 0 4.155-4.154 6.509 6.509 0 0 1-1.572.191h-1.6a29.08 29.08 0 0 1-.791.791zm.982-.991h1.41c.565 0 1.114-.075 1.636-.215a6.31 6.31 0 0 0 .216-1.641V55.75a29.113 29.113 0 0 1-3.262 4.15zm3.262-35.65v-2.295c0-.568-.075-1.117-.216-1.64a6.307 6.307 0 0 0-1.637-.215h-1.41a29.112 29.112 0 0 1 3.263 4.15zM60.89 19.9h1.6c.542 0 1.069.066 1.573.192a6.314 6.314 0 0 0-4.156-4.157 6.51 6.51 0 0 1 .192 1.576v1.598c.269.259.532.522.79.791zm-.991-.981V17.51a6.31 6.31 0 0 0-.216-1.64 6.308 6.308 0 0 0-1.64-.216h-2.299a29.108 29.108 0 0 1 4.155 3.264zm-35.641-3.264h-2.304a6.31 6.31 0 0 0-1.639.215 6.306 6.306 0 0 0-.216 1.641v1.412a29.115 29.115 0 0 1 4.159-3.268zM19.9 19.113v-1.602c0-.543.067-1.072.193-1.577a6.315 6.315 0 0 0-4.159 4.16 6.518 6.518 0 0 1 1.58-.194h1.6c.257-.267.519-.53.786-.787zm-.508.787h.508v-.508c-.171.167-.34.337-.508.508zm-.47.2h-1.409a6.31 6.31 0 0 0-1.643.216 6.308 6.308 0 0 0-.215 1.639v2.305a29.107 29.107 0 0 1 3.268-4.16zm41.178-.712c.173.168.344.34.512.512H60.1zm.513 40.712c-.169.173-.34.344-.513.513V60.1z' fill='%2394a3b8' fill-rule='evenodd'/%3e%3crect fill='black' height='80' rx='16' width='80'/%3e%3cpath d='M43.47 19.752c1.24 5.14.821 9.663-.937 10.1-1.758.438-4.19-3.375-5.43-8.517-1.241-5.14-.822-9.663.936-10.1 1.759-.438 4.19 3.376 5.43 8.517zm20.49 4.42c-2.749-2.913-8.216-2.123-12.212 1.763s-5.008 9.398-2.26 12.31 8.215 2.123 12.211-1.763 5.008-9.398 2.26-12.31zM42.102 68.769c1.758-.438 2.116-5.216.8-10.673-1.318-5.456-3.81-9.525-5.57-9.088-1.757.438-2.115 5.216-.798 10.672 1.317 5.457 3.81 9.526 5.568 9.089zM24.18 26.838c5.073 1.496 8.78 4.12 8.28 5.862-.5 1.741-5.019 1.94-10.091.444-5.073-1.496-8.78-4.12-8.28-5.861.501-1.742 5.019-1.941 10.092-.445zm32.924 19.664c5.384 1.588 9.343 4.286 8.843 6.028-.5 1.741-5.27 1.866-10.654.278-5.385-1.588-9.343-4.286-8.843-6.028.5-1.741 5.27-1.866 10.654-.278zm-27.216-3.654c-1.258-1.304-5.384.594-9.215 4.24-3.832 3.644-5.919 7.656-4.66 8.96 1.257 1.304 5.383-.594 9.215-4.239s5.918-7.657 4.66-8.96z' fill='%23fe5'/%3e%3c/svg%3e",jn=`.pera-wallet-download-qr-code-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 26px auto 0;
  padding: 10px;
  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);
  border-radius: 24px;
}

@media (max-width: 767px) {
  .pera-wallet-download-qr-code-wrapper {
    margin-top: 51px;
  }
}`;ke(jn);const Wn=document.createElement("template");Wn.innerHTML=`
  <div id="pera-wallet-download-qr-code-wrapper" class="pera-wallet-download-qr-code-wrapper"></div>  
`;class Bi extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const N=document.createElement("style");N.textContent=jn,this.shadowRoot.append(Wn.content.cloneNode(!0),N)}}connectedCallback(){var N;const pt=new On({width:205,height:205,type:"svg",data:Pi,image:Nn,dotsOptions:{color:"#000",type:"extra-rounded"},imageOptions:{crossOrigin:"anonymous",margin:10},cornersSquareOptions:{type:"extra-rounded"},cornersDotOptions:{type:"dot"}}),ct=(N=this.shadowRoot)===null||N===void 0?void 0:N.getElementById("pera-wallet-download-qr-code-wrapper");ct&&pt.append(ct)}}var Tn="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.5 19L15.5 12L8.5 5' stroke='%233C3C49' stroke-width='2'/%3e%3c/svg%3e",Gn=`.pera-wallet-connect-modal-desktop-mode {
  display: grid;
  grid-template-columns: 205px auto;
  gap: 70px;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view {
  display: block;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {
  height: 364px;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item--web-wallet {
  display: none;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item .pera-wallet-accordion-toggle {
  padding: 26px 24px 12px;
  border-radius: 24px 24px 0 0;
  transition: all ease-in 0.2s;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item .pera-wallet-accordion-item__content {
  height: 434px;
  border-radius: 0 0 24px 24px;
  transition: height ease-in 0.2s;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item .pera-wallet-accordion-icon {
  transform: rotate(90deg);
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-connect-modal-desktop-mode__download-pera-description {
  margin-top: 50px;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__download-view {
  display: none;
}
.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__default-view {
  display: none;
}
.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__download-view {
  display: block;
}
.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__download-view .pera-wallet-connect-modal-download-pera-view__footer a {
  display: flex;
  cursor: pointer;
}
.pera-wallet-connect-modal-desktop-mode--compact {
  grid-template-columns: unset;
  gap: unset;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet {
  padding: 28px 40px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet .pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper {
  box-shadow: unset;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet .pera-wallet-connect-modal-desktop-mode__web-wallet__description {
  margin-bottom: 16px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet .pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button {
  width: 172px;
  height: 40px;
  margin: 0 auto;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {
  height: 100%;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view {
  overflow: hidden;
  border-radius: 24px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item {
  margin-bottom: 0;
  border-radius: 0;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item:not(:last-child) {
  border-bottom: 1px solid #e6e8ee;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item #pera-wallet-iframe {
  height: 100%;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle {
  padding: 20px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle__text, .pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle__content-with-label__text {
  color: #626268;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.09px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle__bold-color {
  font-weight: 600;
  color: #1a1a1a;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {
  height: 265px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-container {
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 20px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-description,
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-button {
  margin: 0;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-button {
  font-weight: 500;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-qr-code-wrapper {
  margin: 4px auto 0;
  padding: 0;
  box-shadow: unset;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-qr-code-wrapper svg {
  padding: 8px;
  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);
  border-radius: 12px;
}
.pera-wallet-connect-modal-desktop-mode--select-account {
  width: 100%;
  height: 100%;
}
.pera-wallet-connect-modal-desktop-mode--select-account.pera-wallet-connect-modal-desktop-mode--default {
  overflow: hidden;
}
.pera-wallet-connect-modal-desktop-mode--select-account .pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {
  position: unset;
}
.pera-wallet-connect-modal-desktop-mode--select-account .pera-wallet-accordion {
  overflow: hidden;
}
.pera-wallet-connect-modal-desktop-mode--select-account #pera-wallet-iframe {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  border-radius: 16px;
}

.pera-wallet-connect-modal-desktop-mode__accordion__description,
.pera-wallet-connect-modal-desktop-mode__connect-button-wrapper {
  padding: 0 40px 20px 64px;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 88px);
  padding: 48px 52px 40px;
  margin: 0 auto;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.1), 0px 10px 16px rgba(20, 37, 63, 0.06);
}

.pera-wallet-connect-modal-desktop-mode__web-wallet__description {
  margin: 0 auto 32px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.1px;
  text-align: center;
  color: #6a6a81;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 0;
  color: #ffffff;
  background-color: #6b46fe;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1;
  border: none;
  outline: none;
  cursor: pointer;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {
  position: relative;
  width: fit-content;
  margin: 0 auto;
}

.pera-wallet-connect-modal-desktop-mode__connect-button {
  display: block;
  width: 100%;
  height: 48px;
  border: unset;
  border-radius: 6px;
  background-color: #333333;
  color: white;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 13px;
}

.pera-wallet-connect-qr-code-wrapper {
  width: fit-content;
  margin: 24px auto 0;
  padding: 10px;
  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);
  border-radius: 24px;
}

.pera-wallet-connect-modal-desktop-mode__download-pera-description {
  color: #838aa6;
  text-align: center;
  margin: 32px 0 12px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.04px;
}

.pera-wallet-connect-modal-desktop-mode__download-pera-button {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  padding: 0;
  color: #6b46fe;
  background-color: transparent;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.01px;
  cursor: pointer;
}

.pera-wallet-connect-modal-download-pera-view__back-button {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 14px;
  padding: 12px 24px;
  color: #3c3c49;
  background-color: #ffffff;
  outline: none;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border: unset;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.1px;
  cursor: pointer;
}

.pera-wallet-connect-modal-download-pera-view {
  padding: 32px 37px 28px;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 24px;
}

.pera-wallet-connect-modal-download-pera-view__title {
  margin-bottom: 8px;
  color: #3c3c49;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.13px;
}

.pera-wallet-connect-modal-download-pera-view__footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 53px;
}

.pera-wallet-connect-modal-download-pera-view__footer__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  color: #6a6a81;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
  font-size: 13px;
  line-height: 200%;
  letter-spacing: -0.04px;
  cursor: pointer;
}

#pera-wallet-iframe {
  width: 285px;
  height: 376px;
  margin: 0 auto;
  border: none;
}

@media (max-width: 767px) {
  .pera-wallet-connect-modal-desktop-mode {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .pera-wallet-connect-qr-code-wrapper {
    margin-top: 16px;
  }
  .pera-wallet-connect-modal-download-pera-view {
    padding: 24px;
  }
  .pera-wallet-download-qr-code-wrapper {
    margin-top: 32px;
  }
  .pera-wallet-connect-modal-download-pera-view__footer {
    margin-top: 40px;
  }
}`;ke(Gn);var Un=`.pera-wallet-accordion-item {
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.02), 0px 4px 12px rgba(0, 0, 0, 0.03);
}
.pera-wallet-accordion-item:not(:last-of-type) {
  margin-bottom: 20px;
}
.pera-wallet-accordion-item:not(:last-of-type) .pera-wallet-accordion-panel {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pera-wallet-accordion-item .pera-wallet-accordion-item__content {
  height: 0;
  overflow: hidden;
  color: #69708d;
  background-color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.04px;
  transition: height ease-in 0.2s;
}
.pera-wallet-accordion-item--active .pera-wallet-accordion-toggle {
  padding: 26px 24px 12px;
  border-radius: 24px 24px 0 0;
  transition: all ease-in 0.2s;
}
.pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {
  border-radius: 0 0 24px 24px;
  transition: height ease-in 0.2s;
}
.pera-wallet-accordion-item--active .pera-wallet-accordion-icon {
  transform: rotate(90deg);
}

.pera-wallet-accordion-toggle {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 24px;
  color: #2c3559;
  background-color: #ffffff;
  border: none;
  border-radius: 24px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.1px;
  font-weight: 600;
  transition: all ease-in 0.2s;
}
.pera-wallet-accordion-toggle__text, .pera-wallet-accordion-toggle__content-with-label__text {
  color: #626268;
}

.pera-wallet-accordion-icon {
  transition: all ease-in 0.2s;
}

.pera-wallet-accordion-toggle__bold-color {
  color: #1A1A1A;
  font-weight: 600;
}

.pera-wallet-accordion-toggle__content-with-label {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pera-wallet-accordion-toggle__label {
  padding: 4px 9px;
  color: #1C786C;
  background: #E0FAEE;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.01px;
}

.pera-wallet-accordion-toggle__button {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: transparent;
  box-shadow: none;
  outline: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 767px) {
  .pera-wallet-accordion-toggle {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.1px;
  }
}`;ke(Un);const $n=document.createElement("template"),Xn=document.createElement("style"),Yn=document.createElement("style");Xn.textContent=Gn,Yn.textContent=Un;$n.innerHTML=`
  <div id="pera-wallet-connect-modal-desktop-mode" class="pera-wallet-connect-modal-desktop-mode pera-wallet-connect-modal-desktop-mode--default">
      <pera-wallet-connect-modal-information-section></pera-wallet-connect-modal-information-section>

      <div class="pera-wallet-connect-modal-desktop-mode__default-view"></div>
       

      <div class="pera-wallet-connect-modal-desktop-mode__download-view">
        <button
          id="pera-wallet-connect-modal-download-pera-view-back-button"
          class="pera-wallet-connect-modal-download-pera-view__back-button">
          <img
            src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.7071 6.29387C11.0976 6.68439 11.0976 7.31756 10.7071 7.70808L7.41421 11.001L19 11.001C19.5523 11.001 20 11.4487 20 12.001C20 12.5533 19.5523 13.001 19 13.001L7.41421 13.001L10.7071 16.2939C11.0976 16.6844 11.0976 17.3176 10.7071 17.7081C10.3166 18.0986 9.68342 18.0986 9.29289 17.7081L4.29289 12.7081C4.10536 12.5205 4 12.2662 4 12.001C4 11.7358 4.10536 11.4814 4.29289 11.2939L9.29289 6.29387C9.68342 5.90335 10.3166 5.90335 10.7071 6.29387Z' fill='%233C3C49'/%3e%3c/svg%3e"
            alt="Back Arrow"
          />

          Back
        </button>

        <div class="pera-wallet-connect-modal-download-pera-view">
          <h1 class="pera-wallet-connect-modal-download-pera-view__title">
            Download Pera Wallet
          </h1>

          <pera-wallet-download-qr-code></pera-wallet-download-qr-code>

          <div class="pera-wallet-connect-modal-download-pera-view__footer">
            <a
              href="https://apps.apple.com/us/app/algorand-wallet/id1459898525"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='40' height='40' rx='12' fill='black'/%3e%3cpath d='M25.6308 20.3011C25.6416 19.4664 25.8633 18.6481 26.2753 17.9221C26.6873 17.1962 27.2763 16.5863 27.9873 16.1491C27.5356 15.5039 26.9397 14.973 26.2469 14.5984C25.554 14.2239 24.7834 14.016 23.9963 13.9914C22.317 13.8151 20.6891 14.9962 19.8333 14.9962C18.9611 14.9962 17.6436 14.0089 16.2249 14.0381C15.3072 14.0677 14.4128 14.3346 13.6289 14.8126C12.8451 15.2906 12.1984 15.9636 11.7519 16.7659C9.81789 20.1144 11.2605 25.0354 13.1132 27.742C14.0401 29.0674 15.1233 30.5478 16.5408 30.4953C17.9278 30.4378 18.4458 29.6108 20.1202 29.6108C21.779 29.6108 22.265 30.4953 23.7112 30.4619C25.1995 30.4378 26.1372 29.1307 27.0316 27.7928C27.6976 26.8484 28.2101 25.8047 28.55 24.7003C27.6853 24.3345 26.9474 23.7224 26.4283 22.9401C25.9092 22.1578 25.6318 21.2399 25.6308 20.3011ZM22.8993 12.2113C23.7108 11.2371 24.1106 9.98492 24.0138 8.7207C22.7739 8.85092 21.6287 9.44347 20.8062 10.3803C20.404 10.838 20.096 11.3704 19.8998 11.9472C19.7035 12.5239 19.6229 13.1337 19.6625 13.7417C20.2826 13.7481 20.8961 13.6137 21.4568 13.3486C22.0175 13.0835 22.5107 12.6946 22.8993 12.2113Z' fill='white'/%3e%3c/svg%3e" alt="App Store icon" />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.algorand.android"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='40' height='40' rx='12' fill='black'/%3e%3cpath d='M12.41 9.7719C12.1334 10.0219 11.9683 10.4388 11.9683 10.9922V10.8671V29.1294V29.0091C11.9683 29.5202 12.1099 29.9149 12.3497 30.169L12.4109 30.2277V30.228C12.6051 30.4035 12.854 30.4966 13.1393 30.4963C13.418 30.4963 13.7316 30.4073 14.0626 30.2194L26.0264 23.4107L30.1359 21.0717C30.6578 20.7748 30.9508 20.3917 30.9998 20.0014V19.9998C30.9508 19.6087 30.6578 19.2259 30.1359 18.9289L26.0261 16.5902L14.0627 9.78154C13.731 9.59325 13.4171 9.50391 13.1376 9.50391C12.8527 9.50391 12.6041 9.59677 12.41 9.7719H12.41Z' fill='%2300C1FF'/%3e%3cpath d='M12.411 30.2285L12.3497 30.1698C12.1099 29.9157 11.9683 29.5209 11.9683 29.0098V29.1301V10.8724V10.993C11.9683 10.4396 12.1334 10.0226 12.41 9.77268L22.622 20.0009L12.411 30.2285Z' fill='url(%23paint0_linear_173_14441)'/%3e%3cpath d='M26.0256 23.4102L22.6211 19.9996L26.0253 16.5896L30.1351 18.9283C30.657 19.2253 30.95 19.6081 30.9989 19.9993V20.0008C30.95 20.3911 30.657 20.7742 30.1351 21.0712L26.0256 23.4101' fill='url(%23paint1_linear_173_14441)'/%3e%3cpath d='M13.1374 30.4961C12.8522 30.4964 12.6033 30.4032 12.4092 30.2277V30.2275L22.6202 19.9999L26.0246 23.4104L14.0608 30.2191C13.7298 30.4071 13.4162 30.4961 13.1374 30.4961Z' fill='url(%23paint2_linear_173_14441)'/%3e%3cpath d='M22.6212 20.002L12.4092 9.7737C12.6033 9.59858 12.8519 9.50571 13.1368 9.50571C13.4163 9.50571 13.7302 9.59501 14.0618 9.78335L26.0253 16.592L22.6212 20.002' fill='url(%23paint3_linear_173_14441)'/%3e%3cpath d='M13.1394 30.6172C12.8542 30.6172 12.6049 30.524 12.4108 30.3486L12.4105 30.3489C12.4097 30.3481 12.4088 30.3473 12.4079 30.3466L12.3548 30.2947C12.3531 30.2931 12.3516 30.2912 12.3496 30.2893L12.4108 30.2279C12.6049 30.4034 12.8538 30.4966 13.1392 30.4962C13.4179 30.4962 13.7315 30.4073 14.0625 30.2193L26.0263 23.4106L26.1029 23.4874L26.0253 23.5316L14.0625 30.3398C13.7608 30.5111 13.4739 30.6004 13.2147 30.6153C13.1896 30.6165 13.1645 30.6171 13.1394 30.6172' fill='url(%23paint4_linear_173_14441)'/%3e%3cpath d='M12.3497 30.2891C12.1099 30.0349 11.9683 29.6406 11.9683 29.1292V29.0089C11.9683 29.52 12.1099 29.9146 12.3497 30.1688L12.4109 30.2275L12.3497 30.2891Z' fill='url(%23paint5_linear_173_14441)'/%3e%3cpath d='M26.1025 23.4882L26.0259 23.4114L30.1349 21.0727C30.6568 20.7758 30.9498 20.3927 30.9987 20.0025C30.9987 20.1457 30.9668 20.2889 30.9035 20.4282C30.7756 20.7091 30.5194 20.9744 30.135 21.1934L26.1025 23.4883' fill='url(%23paint6_linear_173_14441)'/%3e%3cpath d='M30.9991 20C30.9501 19.6089 30.6571 19.2261 30.1353 18.9291L26.0259 16.5907L26.1025 16.5139H26.1029L30.1353 18.8088C30.7106 19.1365 30.9987 19.5682 30.9991 20Z' fill='url(%23paint7_linear_173_14441)'/%3e%3cpath d='M11.9683 10.9922V10.8661C11.9683 10.8206 11.9695 10.7761 11.9718 10.7329V10.7309C11.9718 10.7303 11.9718 10.7297 11.972 10.729V10.7242C11.9969 10.284 12.1334 9.94066 12.3497 9.71139L12.4099 9.77198C12.1334 10.0219 11.9683 10.4388 11.9683 10.9922Z' fill='url(%23paint8_linear_173_14441)'/%3e%3cpath d='M26.026 16.5898L14.0625 9.78115C13.7308 9.59285 13.417 9.50355 13.1375 9.50355C12.8525 9.50355 12.6039 9.59642 12.4099 9.77154L12.3496 9.71091C12.3684 9.69096 12.388 9.67172 12.4082 9.65322C12.4089 9.65255 12.4099 9.65188 12.4105 9.65125C12.6031 9.47747 12.849 9.3846 13.1314 9.38293H13.1375C13.417 9.38293 13.7308 9.47227 14.0625 9.66064L26.1029 16.5128L26.1026 16.513L26.026 16.5898Z' fill='url(%23paint9_linear_173_14441)'/%3e%3cdefs%3e%3clinearGradient id='paint0_linear_173_14441' x1='18.4943' y1='10.6794' x2='9.69389' y2='19.494' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2300A0FF'/%3e%3cstop offset='0.00657' stop-color='%2300A1FF'/%3e%3cstop offset='0.2601' stop-color='%2300BEFF'/%3e%3cstop offset='0.5122' stop-color='%2300D2FF'/%3e%3cstop offset='0.7604' stop-color='%2300DFFF'/%3e%3cstop offset='1' stop-color='%2300E3FF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_173_14441' x1='31.6348' y1='19.9407' x2='11.691' y2='19.9407' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE000'/%3e%3cstop offset='0.4087' stop-color='%23FFBD00'/%3e%3cstop offset='0.7754' stop-color='orange'/%3e%3cstop offset='1' stop-color='%23FF9C00'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_173_14441' x1='24.2172' y1='23.2425' x2='9.30414' y2='38.0705' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FF3A44'/%3e%3cstop offset='1' stop-color='%23C31162'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear_173_14441' x1='9.77725' y1='8.25731' x2='16.4237' y2='14.876' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2332A071'/%3e%3cstop offset='0.0685' stop-color='%232DA771'/%3e%3cstop offset='0.4762' stop-color='%2315CF74'/%3e%3cstop offset='0.8009' stop-color='%2306E775'/%3e%3cstop offset='1' stop-color='%2300F076'/%3e%3c/linearGradient%3e%3clinearGradient id='paint4_linear_173_14441' x1='24.2114' y1='25.6084' x2='12.2683' y2='37.5709' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23CC2E36'/%3e%3cstop offset='1' stop-color='%239C0E4E'/%3e%3c/linearGradient%3e%3clinearGradient id='paint5_linear_173_14441' x1='13.3285' y1='10.6804' x2='5.57625' y2='18.4453' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23008DE0'/%3e%3cstop offset='0.00657' stop-color='%23008DE0'/%3e%3cstop offset='0.2601' stop-color='%2300A7E0'/%3e%3cstop offset='0.5122' stop-color='%2300B8E0'/%3e%3cstop offset='0.7604' stop-color='%2300C4E0'/%3e%3cstop offset='1' stop-color='%2300C7E0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint6_linear_173_14441' x1='31.6346' y1='20.0018' x2='11.6929' y2='20.0018' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23E0C500'/%3e%3cstop offset='0.4087' stop-color='%23E0A600'/%3e%3cstop offset='0.7754' stop-color='%23E09100'/%3e%3cstop offset='1' stop-color='%23E08900'/%3e%3c/linearGradient%3e%3clinearGradient id='paint7_linear_173_14441' x1='31.6349' y1='20.0008' x2='11.6933' y2='20.0008' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE840'/%3e%3cstop offset='0.4087' stop-color='%23FFCE40'/%3e%3cstop offset='0.7754' stop-color='%23FFBC40'/%3e%3cstop offset='1' stop-color='%23FFB540'/%3e%3c/linearGradient%3e%3clinearGradient id='paint8_linear_173_14441' x1='13.3201' y1='10.6927' x2='5.8533' y2='17.8475' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2340B8FF'/%3e%3cstop offset='0.00657' stop-color='%2340B9FF'/%3e%3cstop offset='0.2601' stop-color='%2340CEFF'/%3e%3cstop offset='0.5122' stop-color='%2340DDFF'/%3e%3cstop offset='0.7604' stop-color='%2340E7FF'/%3e%3cstop offset='1' stop-color='%2340EAFF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint9_linear_173_14441' x1='9.76302' y1='10.4182' x2='15.0961' y2='15.76' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2365B895'/%3e%3cstop offset='0.0685' stop-color='%2362BD95'/%3e%3cstop offset='0.4762' stop-color='%2350DB97'/%3e%3cstop offset='0.8009' stop-color='%2344ED98'/%3e%3cstop offset='1' stop-color='%2340F498'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="Play Store icon" />
            </a>

            <a
              class="pera-wallet-connect-modal-download-pera-view__footer__button"
              href="https://perawallet.s3-eu-west-3.amazonaws.com/android-releases/app-pera-prod-release-bitrise-signed.apk"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 14V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V14' stroke='%232C3559' stroke-width='1.5'/%3e%3cpath d='M11.9998 16V3M11.9998 16L7.47803 11.4783M11.9998 16L16.5215 11.4783' stroke='%232C3559' stroke-width='1.5'/%3e%3c/svg%3e" alt="Download icon" />

              Download APK File
            </a>
          </div>
        </div>
      </div>
    </div>
  `;class Vi extends HTMLElement{constructor(){var N;if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){if(this.shadowRoot.append($n.content.cloneNode(!0),Xn,Yn),this.shadowRoot.addEventListener("click",kt=>{this.handleAccordion(kt)}),this.getAttribute("compact-mode")==="true"){const kt=this.shadowRoot.getElementById("pera-wallet-connect-modal-desktop-mode");kt==null||kt.classList.add("pera-wallet-connect-modal-desktop-mode--compact")}const pt=(N=this.shadowRoot)===null||N===void 0?void 0:N.querySelector(".pera-wallet-connect-modal-desktop-mode__default-view"),ct=this.getAttribute("promote-mobile")==="true",{webWalletOption:xt,mobileWalletOption:Ct}=function(kt){const Nt=`
  <div id="web-wallet-option" class="pera-wallet-accordion-item ${kt?"":"pera-wallet-accordion-item--active"}  pera-wallet-accordion-item--web-wallet">
            <a class="pera-wallet-accordion-toggle">
              <button class="pera-wallet-accordion-toggle__button"></button>
  
              <img src="${Tn}" class="pera-wallet-accordion-icon" />
  
              <div class="pera-wallet-accordion-toggle__content-with-label">
                <div class="pera-wallet-accordion-toggle__content-with-label__text">
                  Connect With
  
                  <span class="pera-wallet-accordion-toggle__bold-color">
                    Pera Web
                  </span>
                </div>
  
                <span id="pera-web-new-label" class="pera-wallet-accordion-toggle__label">NEW</span>
              </div>
            </a>
  
            <div class="pera-wallet-accordion-item__content">
              <div class="pera-wallet-connect-modal-desktop-mode__web-wallet"><div>
              
              <div
                class="pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper">
                <img src="data:image/svg+xml,%3csvg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='3.5' y='7.5' width='36' height='26' rx='5.5' stroke='%236B46FE' stroke-width='3'/%3e%3cpath d='M22.4973 14.5237C22.8556 16.041 22.7344 17.3757 22.2267 17.5048C21.719 17.6339 21.0169 16.5085 20.6586 14.9912C20.3003 13.4739 20.4214 12.1392 20.9292 12.0101C21.4369 11.881 22.1389 13.0064 22.4973 14.5237Z' fill='%236B46FE'/%3e%3cpath d='M28.4139 15.8282C27.6204 14.9686 26.0417 15.2016 24.8877 16.3486C23.7338 17.4956 23.4417 19.1222 24.2352 19.9818C25.0287 20.8414 26.6074 20.6084 27.7613 19.4614C28.9153 18.3144 29.2074 16.6878 28.4139 15.8282Z' fill='%236B46FE'/%3e%3cpath d='M22.1027 28.9905C22.6104 28.8614 22.7137 27.4512 22.3334 25.8407C21.9531 24.2303 21.2332 23.0294 20.7254 23.1585C20.2177 23.2876 20.1144 24.6978 20.4947 26.3083C20.875 27.9187 21.5949 29.1196 22.1027 28.9905Z' fill='%236B46FE'/%3e%3cpath d='M16.9269 16.6152C18.3917 17.0567 19.4621 17.8312 19.3176 18.3452C19.1731 18.8591 17.8686 18.9179 16.4037 18.4764C14.9389 18.0349 13.8686 17.2603 14.0131 16.7464C14.1575 16.2324 15.4621 16.1737 16.9269 16.6152Z' fill='%236B46FE'/%3e%3cpath d='M26.4342 22.4188C27.9889 22.8874 29.1322 23.6839 28.9877 24.1979C28.8432 24.7118 27.4657 24.7486 25.911 24.28C24.3563 23.8114 23.213 23.0148 23.3575 22.5009C23.502 21.9869 24.8795 21.9502 26.4342 22.4188Z' fill='%236B46FE'/%3e%3cpath d='M18.5752 21.3404C18.2119 20.9555 17.0205 21.5157 15.914 22.5915C14.8075 23.6673 14.2049 24.8514 14.5682 25.2363C14.9314 25.6211 16.1229 25.061 17.2294 23.9852C18.3359 22.9094 18.9384 21.7253 18.5752 21.3404Z' fill='%236B46FE'/%3e%3cpath d='M16 39C21 39.0001 23.5 39.0001 28 39' stroke='%236B46FE' stroke-width='3' stroke-linecap='round'/%3e%3c/svg%3e" />
              </div>
  
              <p
                class="pera-wallet-connect-modal-desktop-mode__web-wallet__description">
                Connect with Pera Web to continue
              </p>
            </div>
  
            <button
              id="pera-wallet-connect-web-wallet-launch-button"
              class="pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button">
              Launch Pera Web
  
              <img src="data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.0892 9.41009C13.4147 9.73553 13.4147 10.2632 13.0892 10.5886L8.08924 15.5886C7.7638 15.914 7.23616 15.914 6.91072 15.5886C6.58529 15.2632 6.58529 14.7355 6.91072 14.4101L11.3215 9.99935L6.91073 5.5886C6.58529 5.26317 6.58529 4.73553 6.91073 4.41009C7.23616 4.08466 7.7638 4.08466 8.08924 4.41009L13.0892 9.41009Z' fill='white'/%3e%3c/svg%3e" />
            </button>
          </div>`,Dt=`
  <div id="mobile-wallet-option" class="pera-wallet-accordion-item ${kt?"pera-wallet-accordion-item--active":""}">
            <a class="pera-wallet-accordion-toggle">
            <button class="pera-wallet-accordion-toggle__button"></button>
  
              <img src="${Tn}" class="pera-wallet-accordion-icon" />
  
              <div class="pera-wallet-accordion-toggle__text">
                Connect with
  
                <span class="pera-wallet-accordion-toggle__bold-color">
                  Pera Mobile
                </span>
              </div>
            </a>
  
            <div class="pera-wallet-accordion-item__content">
              <div id="pera-wallet-connect-modal-connect-qr-code" class="pera-wallet-connect-qr-code-wrapper"></div>
  
              <div class="pera-wallet-connect-modal-desktop-mode__download-pera-container">
                <p
                  class="pera-wallet-connect-modal-desktop-mode__download-pera-description">
                    Don’t have Pera Wallet app?
                </p>
  
                <button
                  id="pera-wallet-connect-modal-desktop-mode-download-pera-button"
                  class="pera-wallet-connect-modal-desktop-mode__download-pera-button">
                  <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='2' y='2' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3crect x='2' y='9.33203' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3crect x='9.33325' y='2' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3cpath d='M8.70581 9.5293H10.9411' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M13.1765 12.668L14.6667 12.668' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M13.1765 14L14.6667 14' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M11.686 14L13.1762 14' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M12.4314 9.5293H14.6667' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M8.70581 10.2754H12.4313' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 11.7656H11.6862' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 12.5117H11.6862' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M8.70581 13.2539H10.196' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M8.70581 14H10.196' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 11.0195H12.4313' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3c/svg%3e" alt="QR Icon" />
  
                  Download Pera Wallet
                </button>
              </div>
            </div>
          </div>`;return{mobileWalletOption:document.createRange().createContextualFragment(Dt),webWalletOption:document.createRange().createContextualFragment(Nt)}}(ct);ct?(pt==null||pt.appendChild(Ct),pt==null||pt.appendChild(xt)):(pt==null||pt.appendChild(xt),pt==null||pt.appendChild(Ct))}}connectedCallback(){var N;const pt=this.getAttribute("should-display-new-badge"),ct=(N=this.shadowRoot)===null||N===void 0?void 0:N.getElementById("pera-web-new-label");pt==="false"&&(ct==null||ct.setAttribute("style","display:none")),this.handleChangeView()}handleChangeView(){var N,pt,ct;const xt=(N=this.shadowRoot)===null||N===void 0?void 0:N.getElementById("pera-wallet-connect-modal-desktop-mode-download-pera-button"),Ct=(pt=this.shadowRoot)===null||pt===void 0?void 0:pt.getElementById("pera-wallet-connect-modal-download-pera-view-back-button"),kt=(ct=this.shadowRoot)===null||ct===void 0?void 0:ct.getElementById("pera-wallet-connect-web-wallet-launch-button");xt&&xt.addEventListener("click",()=>{this.onClickDownload()}),Ct&&Ct.addEventListener("click",()=>{this.onClickBack()}),kt&&kt.addEventListener("click",()=>{this.webWalletConnect()}),this.renderQRCode(),this.checkWebWalletAvaliability()}webWalletConnect(){this.getAttribute("is-web-wallet-avaliable")==="true"&&window.onWebWalletConnect()}handleAccordion(N){var pt,ct;if(N.target instanceof Element){if(!N.target.classList.contains("pera-wallet-accordion-toggle__button"))return;if(this.shadowRoot&&(!((pt=N.target.parentElement)===null||pt===void 0)&&pt.parentElement)){const xt=(ct=N.target.parentElement)===null||ct===void 0?void 0:ct.parentElement;if(!xt||xt.classList.contains("pera-wallet-accordion-item--active"))return;const Ct=this.shadowRoot.querySelectorAll(".pera-wallet-accordion-item.pera-wallet-accordion-item--active");for(let kt=0;kt<Ct.length;kt++)Ct[kt].classList.remove("pera-wallet-accordion-item--active");xt.classList.toggle("pera-wallet-accordion-item--active")}}}renderQRCode(){var N;const pt=this.getAttribute("is-web-wallet-avaliable"),ct=this.getAttribute("compact-mode")==="true",xt=this.getAttribute("single-account")==="true";let Ct=this.getAttribute("uri");xt&&(Ct=`${Ct}&singleAccount=true`);let kt=pt==="false"?250:205;if(ct&&(kt=190),Ct){const Nt=new On({width:kt,height:kt,type:"svg",data:Ct,image:Nn,dotsOptions:{color:"#000",type:"extra-rounded"},imageOptions:{crossOrigin:"anonymous",margin:8},cornersSquareOptions:{type:"extra-rounded"},cornersDotOptions:{type:"dot"}}),Dt=(N=this.shadowRoot)===null||N===void 0?void 0:N.getElementById("pera-wallet-connect-modal-connect-qr-code");Dt&&Nt.append(Dt)}}onClickDownload(){if(this.shadowRoot){const N=this.shadowRoot.getElementById("pera-wallet-connect-modal-desktop-mode");N&&(N.classList.remove("pera-wallet-connect-modal-desktop-mode--default"),N.classList.add("pera-wallet-connect-modal-desktop-mode--download"))}}onClickBack(){if(this.shadowRoot){const N=this.shadowRoot.getElementById("pera-wallet-connect-modal-desktop-mode");N&&(N.classList.add("pera-wallet-connect-modal-desktop-mode--default"),N.classList.remove("pera-wallet-connect-modal-desktop-mode--download"))}}checkWebWalletAvaliability(){var N;if(this.getAttribute("is-web-wallet-avaliable")==="false"){const pt=(N=this.shadowRoot)===null||N===void 0?void 0:N.querySelector(".pera-wallet-connect-modal-desktop-mode__default-view");pt==null||pt.classList.add("pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable")}}}function yn(qt=!0){let N=Ei;const pt=Bn();return qt&&pt&&(N=`${N}?browser=${encodeURIComponent(pt)}`),N}var _n=`.pera-wallet-connect-modal-touch-screen-mode {
  display: grid;
  grid-template-columns: 1fr;
  gap: 46px;
  padding: 4px;
}

.pera-wallet-connect-modal-touch-screen-mode--pending-message-view {
  gap: 56px;
  grid-template-rows: auto 48px;
  height: 100%;
  padding-bottom: 70px;
}

.pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button,
.pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button {
  display: block;
  padding: 14px;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
}

.pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button {
  margin-bottom: 32px;
  background-color: #6b46fe;
  color: #ffffff;
}

.pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button {
  margin-bottom: 20px;
  color: #6a6a81;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
}

.pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box {
  position: relative;
  margin-bottom: 32px;
  border-top: 1px solid #e6e8ee;
}

.pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box__text {
  position: absolute;
  top: -25px;
  right: calc(50% - 56px);
  width: 116px;
  color: #69708d;
  background-color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.04px;
  text-align: center;
}`;ke(_n);const pn=document.createElement("template");class Ri extends HTMLElement{constructor(){var N;if(super(),this.attachShadow({mode:"open"}),pn.innerHTML=`
  <div class="pera-wallet-connect-modal-touch-screen-mode">
    <pera-wallet-connect-modal-information-section></pera-wallet-connect-modal-information-section>

    <div>
      <a
        id="pera-wallet-connect-modal-touch-screen-mode-launch-pera-wallet-button"
        class="pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button"
        rel="noopener noreferrer"
        target="_blank">
        Launch Pera Wallet
      </a>

      <div
        class="pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box">
        <p
          class="pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box__text"
          >
          New to Pera?
        </p>
      </div>

      <a
        href="https://perawallet.app/download/"
        class="pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button"
        rel="noopener noreferrer"
        target="_blank">
        Install Pera Wallet
      </a>
    </div>
  </div>
`,this.shadowRoot){const pt=document.createElement("style");pt.textContent=_n,this.shadowRoot.append(pn.content.cloneNode(!0),pt);const ct=(N=this.shadowRoot)===null||N===void 0?void 0:N.getElementById("pera-wallet-connect-modal-touch-screen-mode-launch-pera-wallet-button"),xt=this.getAttribute("uri"),Ct=this.getAttribute("single-account")==="true",kt=this.getAttribute("selected-account")||void 0;ct&&xt&&(ct.setAttribute("href",function(Nt,Dt){let ve=yn(!1);zn()&&!ve.includes("-wc")&&(ve=ve.replace("://","-wc://"));let Ft=`${ve}wc?uri=${encodeURIComponent(Nt)}`;const ne=Bn();return Si()&&(Ft=Nt),ne&&(Ft=`${Ft}&browser=${encodeURIComponent(ne)}`),Dt!=null&&Dt.singleAccount&&(Ft=`${Ft}&singleAccount=true`),Dt!=null&&Dt.selectedAccount&&(Ft=`${Ft}&selectedAccount=${Dt.selectedAccount}`),Ft}(xt,{singleAccount:Ct,selectedAccount:kt})),ct.addEventListener("click",()=>{this.onClickLaunch()}))}}onClickLaunch(){if(pn.innerHTML=`
    <div class="pera-wallet-connect-modal-touch-screen-mode pera-wallet-connect-modal-touch-screen-mode--pending-message-view">
      <pera-wallet-connect-modal-pending-message-section should-use-sound="${this.getAttribute("should-use-sound")}"></pera-wallet-connect-modal-pending-message-section>
    </div>
  `,this.shadowRoot){const N=document.createElement("style");N.textContent=_n,this.shadowRoot.innerHTML="",this.shadowRoot.append(pn.content.cloneNode(!0),N)}}}var Qn=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  top: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: calc(100 * var(--pera-wallet-vh));
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    top: 30%;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}`;ke(Qn);const dn=document.createElement("template");let cn=Oe()?`${rn} ${rn}--mobile`:`${rn} ${rn}--desktop`;class Oi extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const N=document.createElement("style");N.textContent=Qn,this.getAttribute("compact-mode")==="true"&&(cn=`${cn} ${rn}--compact`);const pt=this.getAttribute("single-account")==="true",ct=this.getAttribute("selected-account");Oe()?(dn.innerHTML=`
        <div class="${cn}">
          <div class="pera-wallet-modal__body" part="body">
            <pera-wallet-modal-header modal-id="${wn}"></pera-wallet-modal-header/>
      
            <pera-wallet-modal-touch-screen-mode uri="${this.getAttribute("uri")}" should-use-sound="${this.getAttribute("should-use-sound")}" single-account="${pt}" selected-account="${ct}"></pera-wallet-modal-touch-screen-mode>
          </div>
        </div>
      `,this.shadowRoot.append(dn.content.cloneNode(!0),N)):(dn.innerHTML=`
          <div class="${cn}">
            <div class="pera-wallet-modal__body">
              <pera-wallet-modal-header modal-id="${wn}"></pera-wallet-modal-header/>
        
              <pera-wallet-modal-desktop-mode id="pera-wallet-modal-desktop-mode" uri="${this.getAttribute("uri")}" is-web-wallet-avaliable="${this.getAttribute("is-web-wallet-avaliable")}" should-display-new-badge="${this.getAttribute("should-display-new-badge")}" compact-mode="${this.getAttribute("compact-mode")}" promote-mobile="${this.getAttribute("promote-mobile")}" single-account="${pt}"
        ></pera-wallet-modal-desktop-mode>
            </div>
          </div>
        `,this.shadowRoot.append(dn.content.cloneNode(!0),N))}}}var Kn=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  top: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: calc(100 * var(--pera-wallet-vh));
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    top: 30%;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}
.pera-wallet-redirect-modal {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  grid-template-rows: auto 48px;
  height: 100%;
  padding: 4px;
  padding-bottom: 70px;
}

.pera-wallet-redirect-modal__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.pera-wallet-redirect-modal__content__title {
  margin: 20px 0 8px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.26px;
}

.pera-wallet-redirect-modal__content__description,
.pera-wallet-redirect-modal__content__install-pera-text {
  color: #3c3c49;
  max-width: 271px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.09px;
  text-align: center;
}

.pera-wallet-redirect-modal__content__description {
  margin-bottom: 24px;
}

.pera-wallet-redirect-modal__content__install-pera-text__link {
  color: #6b46fe;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.09px;
  text-align: center;
}

.pera-wallet-redirect-modal__launch-pera-wallet-button {
  display: block;
  padding: 14px;
  color: #ffffff;
  background-color: #6b46fe;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
}`;ke(Kn);const Jn=document.createElement("template");Jn.innerHTML=`
  <div class="pera-wallet-modal pera-wallet-modal--mobile">
    <div class="pera-wallet-modal__body">
      <pera-wallet-modal-header modal-id="${un}"></pera-wallet-modal-header/>

      <div class="pera-wallet-redirect-modal">
        <div class="pera-wallet-redirect-modal__content">
          <img src="data:image/svg+xml,%3csvg width='120' height='38' viewBox='0 0 120 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_38844_290434)'%3e%3cpath d='M103.739 28.6746H109.565' stroke='%236B46FE' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M112.25 37H100.75C97.5731 37 95 34.2336 95 30.8182V9.18182C95 5.76636 97.5731 3 100.75 3H112.25C115.427 3 118 5.76636 118 9.18182V30.8182C118 34.2336 115.427 37 112.25 37Z' fill='%236B46FE' fill-opacity='0.1' stroke='%236B46FE' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3crect y='1' width='36' height='36' rx='7.76829' fill='%236B46FE' fill-opacity='0.1'/%3e%3cpath d='M19.6057 9.47351C20.1851 11.8819 19.9967 14.0022 19.1848 14.2093C18.373 14.4164 17.2452 12.6319 16.6658 10.2235C16.0864 7.81514 16.2748 5.69486 17.0867 5.48775C17.8985 5.28063 19.0263 7.06512 19.6057 9.47351Z' fill='%236B46FE'/%3e%3cpath d='M29.0775 11.5213C27.8045 10.1593 25.2795 10.5358 23.4378 12.3621C21.5961 14.1885 21.1352 16.7732 22.4083 18.1352C23.6814 19.4972 26.2064 19.1207 28.048 17.2943C29.8897 15.4679 30.3506 12.8832 29.0775 11.5213Z' fill='%236B46FE'/%3e%3cpath d='M19.0324 32.4518C19.8443 32.2446 20.0039 30.0045 19.3889 27.4483C18.774 24.8921 17.6173 22.9877 16.8055 23.1948C15.9937 23.402 15.834 25.6421 16.449 28.1983C17.064 30.7545 18.2206 32.6589 19.0324 32.4518Z' fill='%236B46FE'/%3e%3cpath d='M10.7016 12.818C13.0471 13.5132 14.7627 14.739 14.5336 15.5559C14.3045 16.3728 12.2175 16.4714 9.87199 15.7762C7.52653 15.0809 5.81087 13.8551 6.03996 13.0383C6.26906 12.2214 8.35615 12.1228 10.7016 12.818Z' fill='%236B46FE'/%3e%3cpath d='M25.9365 21.9967C28.4259 22.7346 30.2583 23.995 30.0292 24.8119C29.8001 25.6287 27.5963 25.6927 25.1069 24.9548C22.6174 24.2169 20.7851 22.9565 21.0141 22.1397C21.2432 21.3228 23.447 21.2588 25.9365 21.9967Z' fill='%236B46FE'/%3e%3cpath d='M13.3578 20.316C12.775 19.7063 10.8709 20.6007 9.10487 22.3139C7.33879 24.0271 6.37952 25.9102 6.96226 26.5199C7.54501 27.1297 9.4491 26.2352 11.2152 24.522C12.9813 22.8089 13.9405 20.9258 13.3578 20.316Z' fill='%236B46FE'/%3e%3cpath d='M70.2098 10L75.3049 15.0945L52 15.0945' stroke='%23D0CAE7' stroke-width='3'/%3e%3cpath d='M60.7902 29.5945L55.6951 24.5L79 24.5' stroke='%23D0CAE7' stroke-width='3'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_38844_290434'%3e%3crect width='120' height='38' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" />

          <h1 class="pera-wallet-redirect-modal__content__title">
            Can't Launch Pera
          </h1>

          <p class="pera-wallet-redirect-modal__content__description">
            We couldn't redirect you to Pera Wallet automatically. Please try again.
          </p>

          <p class="pera-wallet-redirect-modal__content__install-pera-text">
            Don't have Pera Wallet installed yet?
            <br />
            
            <a
              id="pera-wallet-redirect-modal-download-pera-link"
              class="pera-wallet-redirect-modal__content__install-pera-text__link"
              href="https://perawallet.app/download/"
              rel="noopener noreferrer"
              target="_blank">
              Tap here to install.
            </a>
          </p>
        </div>

        <a
          id="pera-wallet-redirect-modal-launch-pera-link"
          class="pera-wallet-redirect-modal__launch-pera-wallet-button"
          rel="noopener noreferrer"
          target="_blank">
          Launch Pera Wallet
        </a>
      </div>
    </div>
  </div>
`;class qi extends HTMLElement{constructor(){var N,pt;if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const ct=document.createElement("style");ct.textContent=Kn,this.shadowRoot.append(Jn.content.cloneNode(!0),ct);const xt=(N=this.shadowRoot)===null||N===void 0?void 0:N.getElementById("pera-wallet-redirect-modal-download-pera-link");xt==null||xt.addEventListener("click",()=>{this.onClose()});const Ct=(pt=this.shadowRoot)===null||pt===void 0?void 0:pt.getElementById("pera-wallet-redirect-modal-launch-pera-link");Ct==null||Ct.addEventListener("click",()=>{this.onClose(),window.open(yn(),"_blank")})}}connectedCallback(){const N=window.open(yn(),"_blank");N&&!N.closed&&this.onClose()}onClose(){mn(un)}}var ti="data:image/svg+xml,%3csvg width='32' height='35' viewBox='0 0 32 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.2837 5.09271C19.0234 8.12325 18.7827 10.7913 17.7463 11.0519C16.7098 11.3126 15.27 9.06712 14.5304 6.03657C13.7908 3.00603 14.0315 0.337996 15.0679 0.0773547C16.1044 -0.183287 17.5441 2.06216 18.2837 5.09271Z' fill='%233C3C49'/%3e%3cpath d='M30.376 7.66915C28.7507 5.95537 25.5271 6.42918 23.1759 8.72745C20.8247 11.0257 20.2361 14.2781 21.8614 15.9919C23.4866 17.7057 26.7102 17.2319 29.0614 14.9336C31.4127 12.6354 32.0012 9.38294 30.376 7.66915Z' fill='%233C3C49'/%3e%3cpath d='M17.5511 34.0071C18.5876 33.7465 18.7914 30.9276 18.0064 27.711C17.2214 24.4945 15.7448 22.0982 14.7084 22.3589C13.6719 22.6195 13.4681 25.4383 14.2531 28.6549C15.0381 31.8715 16.5147 34.2677 17.5511 34.0071Z' fill='%233C3C49'/%3e%3cpath d='M6.91617 9.3015C9.9105 10.1763 12.1008 11.7187 11.8083 12.7466C11.5158 13.7745 8.85126 13.8986 5.85693 13.0239C2.8626 12.1491 0.672334 10.6067 0.964835 9.57881C1.25734 8.5509 3.92184 8.42674 6.91617 9.3015Z' fill='%233C3C49'/%3e%3cpath d='M26.3656 20.8508C29.5437 21.7793 31.883 23.3652 31.5905 24.3932C31.298 25.4211 28.4845 25.5017 25.3063 24.5732C22.1282 23.6448 19.7889 22.0588 20.0814 21.0309C20.3739 20.003 23.1874 19.9224 26.3656 20.8508Z' fill='%233C3C49'/%3e%3cpath d='M10.3069 18.7365C9.56299 17.9692 7.13209 19.0948 4.87736 21.2506C2.62264 23.4064 1.39791 25.776 2.14185 26.5432C2.8858 27.3105 5.3167 26.1849 7.57143 24.0291C9.82615 21.8733 11.0509 19.5037 10.3069 18.7365Z' fill='%233C3C49'/%3e%3c/svg%3e",ei=`.pera-wallet-connect-modal-information-section {
  padding: 12px;
  padding-right: 0;
}
.pera-wallet-connect-modal-information-section--mobile {
  padding: 0;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__pera-icon {
  margin-bottom: 16px;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__connect-pera-title {
  margin-bottom: 8px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.2px;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__title {
  margin-bottom: 24px;
  color: #3c3c49;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.09px;
  font-weight: 400;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__features-item__icon-wrapper {
  background-color: #f2f3f8;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__features-item__description {
  color: #6a6a81;
}
.pera-wallet-connect-modal-information-section * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pera-wallet-connect-modal-information-section__pera-icon {
  margin-bottom: 32px;
}

.pera-wallet-connect-modal-information-section__title {
  margin-bottom: 148px;
  color: #3c3c49;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.5px;
}

.pera-wallet-connect-modal-information-section__secondary-title {
  margin-bottom: 20px;
  color: #9d9dae;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.06px;
  text-transform: uppercase;
}

.pera-wallet-connect-modal-information-section__features-item {
  display: grid;
  align-items: center;
  grid-template-columns: 36px auto;
  gap: 16px;
}
.pera-wallet-connect-modal-information-section__features-item:not(:last-of-type) {
  margin-bottom: 24px;
}

.pera-wallet-connect-modal-information-section__features-item__icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #ffffff;
  border-radius: 50%;
}

.pera-wallet-connect-modal-information-section__features-item__description {
  color: #6a6a81;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.01px;
}

@media (max-width: 767px) {
  .pera-wallet-connect-modal-information-section--desktop {
    padding: 0;
  }
  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__pera-icon {
    margin-bottom: 12px;
  }
  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__title {
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.26px;
  }
  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__features-item {
    display: none;
  }
  .pera-wallet-connect-modal-information-section__secondary-title {
    display: none;
  }
}`;ke(ei);const ni=document.createElement("template"),Di=Oe()?"pera-wallet-connect-modal-information-section pera-wallet-connect-modal-information-section--mobile":"pera-wallet-connect-modal-information-section pera-wallet-connect-modal-information-section--desktop";ni.innerHTML=`
  <section class="${Di}">
    <img
      id="pera-wallet-connect-modal-information-section-pera-icon"
      src="${ti}"
      class="pera-wallet-connect-modal-information-section__pera-icon"
      alt="Pera Wallet Logo"
    />

    <h1 id="pera-wallet-connect-modal-information-section-connect-pera-mobile" class="pera-wallet-connect-modal-information-section__connect-pera-title">
        Connect to Pera Wallet
    </h1>

    <h1 class="pera-wallet-connect-modal-information-section__title">
      Simply the best Algorand wallet.
    </h1>

    <h2 id="pera-wallet-connect-modal-information-section-secondary-title" class="pera-wallet-connect-modal-information-section__secondary-title">
      Features
    </h2>

    <ul>
      <li class="pera-wallet-connect-modal-information-section__features-item">
        <div class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">
          <img src="data:image/svg+xml,%3csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.5 10.1378C2.5 10.8378 3.025 11.6461 3.66667 11.9294L9.325 14.4461C9.75833 14.6378 10.25 14.6378 10.675 14.4461L16.3333 11.9294C16.975 11.6461 17.5 10.8378 17.5 10.1378M2.5 14.3044C2.5 15.0794 2.95833 15.7794 3.66667 16.0961L9.325 18.6128C9.75833 18.8044 10.25 18.8044 10.675 18.6128L16.3333 16.0961C17.0417 15.7794 17.5 15.0794 17.5 14.3044M10.8417 3.4043L15.7583 5.58763C17.175 6.21263 17.175 7.24596 15.7583 7.87096L10.8417 10.0543C10.2833 10.3043 9.36668 10.3043 8.80835 10.0543L3.89168 7.87096C2.47502 7.24596 2.47502 6.21263 3.89168 5.58763L8.80835 3.4043C9.36668 3.1543 10.2833 3.1543 10.8417 3.4043Z' stroke='%239D9DAE' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e" alt="Layer Icon" />
        </div>
        
        <p
          class="pera-wallet-connect-modal-information-section__features-item__description">
          Connect to any Algorand dApp securely
        </p>
      </li>

      <li class="pera-wallet-connect-modal-information-section__features-item">
        <div
          class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">
          <img src="data:image/svg+xml,%3csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.58033 12.3109C9.28744 12.018 8.81257 12.018 8.51967 12.3109C8.22678 12.6038 8.22678 13.0787 8.51967 13.3716L9.58033 12.3109ZM10.66 14.4512L10.1297 14.9816C10.4226 15.2745 10.8974 15.2745 11.1903 14.9816L10.66 14.4512ZM15.4903 10.6816C15.7832 10.3887 15.7832 9.91381 15.4903 9.62092C15.1974 9.32803 14.7226 9.32803 14.4297 9.62092L15.4903 10.6816ZM19.84 8.09125C19.84 8.50546 20.1758 8.84125 20.59 8.84125C21.0042 8.84125 21.34 8.50546 21.34 8.09125H19.84ZM18.5 5.07125L18.2368 5.77355L18.2373 5.77375L18.5 5.07125ZM13.51 3.20125L13.7732 2.49894L13.7724 2.49866L13.51 3.20125ZM10.49 3.20125L10.2276 2.49865L10.2256 2.49941L10.49 3.20125ZM5.5 5.08125L5.76268 5.78375L5.76442 5.78309L5.5 5.08125ZM5.14 18.9612L4.69102 19.562L4.69135 19.5623L5.14 18.9612ZM9.44 22.1713L9.89069 21.5718L9.88866 21.5702L9.44 22.1713ZM14.58 22.1713L14.1313 21.5702L14.1293 21.5718L14.58 22.1713ZM18.88 18.9612L19.3287 19.5623L19.329 19.562L18.88 18.9612ZM21.36 8.09125C21.36 7.67704 21.0242 7.34125 20.61 7.34125C20.1958 7.34125 19.86 7.67704 19.86 8.09125H21.36ZM8.51967 13.3716L10.1297 14.9816L11.1903 13.9209L9.58033 12.3109L8.51967 13.3716ZM11.1903 14.9816L15.4903 10.6816L14.4297 9.62092L10.1297 13.9209L11.1903 14.9816ZM21.34 8.09125C21.34 7.29392 21.0398 6.50041 20.5931 5.85456C20.1463 5.20881 19.5097 4.64807 18.7627 4.36875L18.2373 5.77375C18.6403 5.92443 19.0487 6.25869 19.3595 6.70794C19.6702 7.15709 19.84 7.65858 19.84 8.09125H21.34ZM18.7632 4.36895L13.7732 2.49895L13.2468 3.90355L18.2368 5.77355L18.7632 4.36895ZM13.7724 2.49866C13.2479 2.30277 12.6051 2.21875 12 2.21875C11.3949 2.21875 10.7521 2.30277 10.2276 2.49866L10.7524 3.90384C11.0579 3.78973 11.5101 3.71875 12 3.71875C12.4899 3.71875 12.9421 3.78973 13.2476 3.90384L13.7724 2.49866ZM10.2256 2.49941L5.23558 4.37941L5.76442 5.78309L10.7544 3.90309L10.2256 2.49941ZM5.23733 4.37875C4.49043 4.65803 3.85398 5.2186 3.40741 5.86265C2.96095 6.50656 2.66 7.2978 2.66 8.09125H4.16C4.16 7.6647 4.32906 7.16594 4.64009 6.71735C4.95103 6.2689 5.35957 5.93447 5.76268 5.78375L5.23733 4.37875ZM2.66 8.09125V15.5212H4.16V8.09125H2.66ZM2.66 15.5212C2.66 16.2602 2.8989 17.059 3.24874 17.7545C3.59871 18.4503 4.09802 19.1188 4.69102 19.562L5.58899 18.3605C5.23198 18.0937 4.86629 17.6322 4.58877 17.0805C4.31111 16.5285 4.16 15.9623 4.16 15.5212H2.66ZM4.69135 19.5623L8.99135 22.7723L9.88866 21.5702L5.58866 18.3602L4.69135 19.5623ZM8.98932 22.7707C9.84721 23.4157 10.9462 23.7163 12.01 23.7163C13.0738 23.7163 14.1728 23.4157 15.0307 22.7707L14.1293 21.5718C13.5772 21.9868 12.8112 22.2163 12.01 22.2163C11.2088 22.2163 10.4428 21.9868 9.89068 21.5718L8.98932 22.7707ZM15.0287 22.7723L19.3287 19.5623L18.4313 18.3602L14.1313 21.5702L15.0287 22.7723ZM19.329 19.562C19.922 19.1188 20.4213 18.4503 20.7713 17.7545C21.1211 17.059 21.36 16.2602 21.36 15.5212H19.86C19.86 15.9623 19.7089 16.5285 19.4312 17.0805C19.1537 17.6322 18.788 18.0937 18.431 18.3605L19.329 19.562ZM21.36 15.5212V8.09125H19.86V15.5212H21.36Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Tick Icon" />
        </div>

        <p
          class="pera-wallet-connect-modal-information-section__features-item__description">
          Your private keys are safely stored locally
        </p>
      </li>

      <li class="pera-wallet-connect-modal-information-section__features-item">
        <div
          class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">
          <img src="data:image/svg+xml,%3csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.05 9.67014L17.3198 9.49894L18.05 9.67014ZM17.2333 13.1535L16.5031 12.9823L16.5029 12.9835L17.2333 13.1535ZM12.55 17.1285L12.6218 16.3818L12.6098 16.3809L12.55 17.1285ZM11.2 16.9035L11.376 16.1744L11.3737 16.1739L11.2 16.9035ZM9.8 16.5701L9.97372 15.8405L9.97324 15.8404L9.8 16.5701ZM6.06667 10.5451L6.79687 10.7163L6.79696 10.7159L6.06667 10.5451ZM6.88334 7.05347L6.15327 6.88169L6.15304 6.88267L6.88334 7.05347ZM7.5 5.22014L8.17303 5.55114L8.17523 5.54659L7.5 5.22014ZM12.9167 3.32014L12.744 4.05L12.7461 4.05049L12.9167 3.32014ZM14.3083 3.64514L14.4791 2.91485L14.4789 2.91479L14.3083 3.64514ZM10.5917 18.0285L10.359 17.3155L10.3572 17.3161L10.5917 18.0285ZM9.27501 18.4618L9.50516 19.1756L9.50947 19.1742L9.27501 18.4618ZM3.15001 15.3285L2.43654 15.5597L2.43672 15.5603L3.15001 15.3285ZM2.08334 12.0368L1.36953 12.267L1.36987 12.268L2.08334 12.0368ZM5.20834 5.91182L5.43849 6.62565L5.44281 6.62423L5.20834 5.91182ZM6.52501 5.47848L6.29831 4.76352L6.29055 4.76608L6.52501 5.47848ZM10.7177 7.35149C10.3162 7.24967 9.90818 7.49261 9.80635 7.89411C9.70453 8.29561 9.94746 8.70364 10.349 8.80546L10.7177 7.35149ZM14.3906 9.83046C14.7921 9.93229 15.2002 9.68935 15.302 9.28785C15.4038 8.88635 15.1609 8.47832 14.7594 8.37649L14.3906 9.83046ZM9.90211 10.5768C9.50076 10.4743 9.09238 10.7167 8.98996 11.118C8.88755 11.5194 9.12988 11.9278 9.53124 12.0302L9.90211 10.5768ZM11.9479 12.6469C12.3493 12.7493 12.7576 12.5069 12.8601 12.1056C12.9625 11.7042 12.7201 11.2958 12.3188 11.1934L11.9479 12.6469ZM17.3198 9.49894L16.5031 12.9823L17.9635 13.3247L18.7802 9.84133L17.3198 9.49894ZM16.5029 12.9835C16.168 14.4224 15.6979 15.2955 15.1165 15.793C14.5605 16.2688 13.7912 16.4944 12.6218 16.3819L12.4782 17.875C13.9088 18.0126 15.1312 17.7548 16.0918 16.9327C17.0271 16.1323 17.5986 14.8928 17.9638 13.3234L16.5029 12.9835ZM12.6098 16.3809C12.2388 16.3512 11.8281 16.2835 11.376 16.1744L11.024 17.6325C11.5386 17.7567 12.0279 17.8391 12.4902 17.8761L12.6098 16.3809ZM11.3737 16.1739L9.97372 15.8405L9.62629 17.2997L11.0263 17.6331L11.3737 16.1739ZM9.97324 15.8404C8.30732 15.4449 7.40652 14.876 6.96107 14.1588C6.51616 13.4425 6.40566 12.385 6.79687 10.7163L5.33647 10.3739C4.91101 12.1887 4.92968 13.7311 5.68685 14.9502C6.44349 16.1685 7.81769 16.8704 9.62676 17.2999L9.97324 15.8404ZM6.79696 10.7159L7.61363 7.22428L6.15304 6.88267L5.33638 10.3743L6.79696 10.7159ZM7.6134 7.22525C7.77277 6.54795 7.95691 5.99053 8.17301 5.55113L6.82699 4.88915C6.54309 5.46641 6.32724 6.14234 6.15327 6.88169L7.6134 7.22525ZM8.17523 5.54659C8.59604 4.67619 9.11898 4.20234 9.77488 3.97598C10.4657 3.73759 11.4133 3.73525 12.744 4.05L13.0893 2.59028C11.6367 2.2467 10.3635 2.18603 9.28554 2.55805C8.17269 2.94211 7.37896 3.74743 6.82478 4.89369L8.17523 5.54659ZM12.7461 4.05049L14.1378 4.37549L14.4789 2.91479L13.0872 2.58979L12.7461 4.05049ZM14.1375 4.37543C15.8111 4.76687 16.7126 5.33603 17.1575 6.05304C17.6023 6.77006 17.7112 7.82942 17.3198 9.49894L18.7802 9.84133C19.2054 8.02753 19.1893 6.48272 18.4321 5.26224C17.6749 4.04175 16.2972 3.34008 14.4791 2.91485L14.1375 4.37543ZM12.1294 16.5075C11.6911 16.8045 11.1123 17.0697 10.359 17.3155L10.8243 18.7415C11.6544 18.4706 12.3756 18.1525 12.9706 17.7494L12.1294 16.5075ZM10.3572 17.3161L9.04055 17.7494L9.50947 19.1742L10.8261 18.7409L10.3572 17.3161ZM9.04486 17.748C7.46037 18.2589 6.43607 18.2362 5.71663 17.8681C4.99693 17.4999 4.37829 16.6816 3.8633 15.0967L2.43672 15.5603C2.99673 17.2837 3.78642 18.5654 5.03339 19.2035C6.28062 19.8416 7.78131 19.7314 9.50516 19.1756L9.04486 17.748ZM3.86348 15.0973L2.79682 11.8056L1.36987 12.268L2.43654 15.5597L3.86348 15.0973ZM2.79716 11.8067C2.28607 10.2215 2.3068 9.19457 2.67362 8.4739C3.03983 7.75443 3.85506 7.13616 5.43849 6.62563L4.9782 5.198C3.25329 5.75414 1.97269 6.54421 1.33682 7.79348C0.701551 9.04157 0.813948 10.5438 1.36953 12.267L2.79716 11.8067ZM5.44281 6.62423L6.75947 6.19089L6.29055 4.76608L4.97388 5.19941L5.44281 6.62423ZM6.75169 6.19341C7.08205 6.08866 7.37424 6.00724 7.63942 5.95707L7.36058 4.48321C7.00909 4.54971 6.6513 4.65164 6.29833 4.76356L6.75169 6.19341ZM10.349 8.80546L14.3906 9.83046L14.7594 8.37649L10.7177 7.35149L10.349 8.80546ZM9.53124 12.0302L11.9479 12.6469L12.3188 11.1934L9.90211 10.5768L9.53124 12.0302Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Note Icon" />
        </div>

        <p
          class="pera-wallet-connect-modal-information-section__features-item__description">
          View NFTs, buy and swap crypto and more
        </p>
      </li>
    </ul>
  </section>
`;class Hi extends HTMLElement{constructor(){var N,pt,ct,xt;super(),this.attachShadow({mode:"open"});const Ct=((N=document.querySelector("pera-wallet-connect-modal"))===null||N===void 0?void 0:N.getAttribute("compact-mode"))==="true";if(this.shadowRoot&&(!Ct&&!Oe()||Oe())){const kt=document.createElement("style");kt.textContent=ei,this.shadowRoot.append(ni.content.cloneNode(!0),kt),Oe()?(pt=this.shadowRoot.getElementById("pera-wallet-connect-modal-information-section-title"))===null||pt===void 0||pt.setAttribute("style","display: none;"):((ct=this.shadowRoot.getElementById("pera-wallet-connect-modal-information-section-pera-icon"))===null||ct===void 0||ct.setAttribute("src","data:image/svg+xml,%3csvg width='84' height='38' viewBox='0 0 84 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M19.806 8.62773C20.4416 11.2609 20.2268 13.5772 19.3262 13.8012C18.4256 14.0253 17.1803 12.0723 16.5448 9.43906C15.9092 6.80585 16.1241 4.48959 17.0246 4.26555C17.9252 4.04151 19.1705 5.99452 19.806 8.62773Z' fill='%233C3C49'/%3e%3cpath d='M30.3007 10.8917C28.8932 9.3999 26.0929 9.80424 24.0461 11.7948C21.9994 13.7853 21.4812 16.6082 22.8887 18.1C24.2962 19.5917 27.0964 19.1874 29.1432 17.1969C31.1899 15.2064 31.7082 12.3834 30.3007 10.8917Z' fill='%233C3C49'/%3e%3cpath d='M19.1061 33.734C20.0067 33.5099 20.1899 31.0627 19.5153 28.2678C18.8408 25.473 17.5639 23.3889 16.6633 23.613C15.7627 23.837 15.5795 26.2843 16.2541 29.0791C16.9286 31.874 18.2056 33.958 19.1061 33.734Z' fill='%233C3C49'/%3e%3cpath d='M9.92571 12.2574C12.5239 13.0236 14.4224 14.3678 14.1662 15.2597C13.9099 16.1517 11.5959 16.2536 8.99771 15.4874C6.3995 14.7212 4.50098 13.377 4.75724 12.4851C5.0135 11.5931 7.3275 11.4912 9.92571 12.2574Z' fill='%233C3C49'/%3e%3cpath d='M26.7892 22.3292C29.5469 23.1424 31.5747 24.5247 31.3184 25.4167C31.0621 26.3086 28.6189 26.3724 25.8612 25.5592C23.1035 24.7459 21.0757 23.3636 21.3319 22.4717C21.5882 21.5797 24.0315 21.5159 26.7892 22.3292Z' fill='%233C3C49'/%3e%3cpath d='M12.8493 20.4577C12.205 19.7898 10.0916 20.7619 8.12896 22.6289C6.16631 24.4959 5.09759 26.5509 5.7419 27.2188C6.38622 27.8867 8.49958 26.9146 10.4622 25.0476C12.4249 23.1806 13.4936 21.1256 12.8493 20.4577Z' fill='%233C3C49'/%3e%3cpath d='M41.691 12.5347V11.9635H39.3366V27.1957H41.691V23.0915C41.691 22.6472 41.691 22.2876 41.6482 21.801H41.691C42.5471 23.1973 44.0026 23.9377 45.7148 23.9377C48.6043 23.9377 51.1299 21.7587 51.1299 17.7179C51.1299 13.7617 48.6043 11.625 45.7148 11.625C44.0668 11.625 42.6113 12.3443 41.691 13.7617H41.6482C41.691 13.2963 41.691 12.9578 41.691 12.5347ZM45.1155 21.9279C42.9324 21.9068 41.6696 20.0662 41.6696 17.6967C41.6696 15.4542 42.9324 13.656 45.1155 13.6348C47.2559 13.6137 48.6685 15.2638 48.6685 17.7179C48.6685 20.2354 47.2559 21.9491 45.1155 21.9279Z' fill='%233C3C49'/%3e%3cpath d='M63.4932 16.7236C63.4932 13.8041 61.1388 11.625 57.9283 11.625C54.5037 11.625 52.1279 13.931 52.1279 17.7814C52.1279 21.4836 54.4609 23.9377 57.9283 23.9377C60.7749 23.9377 62.8939 22.2876 63.3862 20.0239H60.8177C60.4111 21.1663 59.2981 21.9279 57.9283 21.9279C56.1732 21.9279 54.889 20.6797 54.6107 18.6064H63.4932V16.7236ZM57.9283 13.6348C59.662 13.6348 60.8606 14.8195 61.1174 16.5332H54.6321C54.9318 14.883 56.1518 13.6348 57.9283 13.6348Z' fill='%233C3C49'/%3e%3cpath d='M65.224 23.5992H67.5784V17.0409C67.5784 14.7984 68.8198 13.6348 70.7462 13.6348H72.009V11.625H71.003C69.2693 11.625 68.1991 12.7674 67.5784 13.7617H67.5356V11.9635H65.224V23.5992Z' fill='%233C3C49'/%3e%3cpath d='M83.0154 21.5683C82.6944 21.5683 82.5445 21.3779 82.5445 20.9971V15.8773C82.5445 13.4233 81.3459 11.625 77.8144 11.625C74.3898 11.625 72.8273 13.3175 72.6561 15.7292H75.0105C75.1603 14.4176 76.2091 13.6348 77.8144 13.6348C79.1842 13.6348 80.1259 14.2272 80.1259 15.158C80.1259 15.9196 79.5909 16.3851 77.8358 16.3851H76.894C74.0901 16.3851 72.2066 17.5063 72.2066 20.0662C72.2066 22.753 74.1972 23.98 76.5301 23.98C78.2638 23.98 79.7407 23.2184 80.3186 21.5894C80.3828 22.7742 81.1747 23.5992 82.673 23.5992H84V21.5683H83.0154ZM80.1902 18.1833C80.1902 20.8067 78.7561 21.9491 76.9154 21.9491C75.3101 21.9491 74.668 21.0182 74.668 20.0662C74.668 19.1565 75.2245 18.416 76.9368 18.416H77.2793C78.9273 18.416 79.9547 17.8448 80.1688 16.8505H80.1902V18.1833Z' fill='%233C3C49'/%3e%3c/svg%3e"),(xt=this.shadowRoot.getElementById("pera-wallet-connect-modal-information-section-connect-pera-mobile"))===null||xt===void 0||xt.setAttribute("style","display: none;"))}}}var bn=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  top: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: calc(100 * var(--pera-wallet-vh));
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    top: 30%;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}
.pera-wallet-connect-modal-pending-message-section {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 48px;
  gap: 56px;
  height: 100%;
  padding: 4px;
  padding-bottom: 70px;
}

.pera-wallet-connect-modal-pending-message {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.pera-wallet-connect-modal-pending-message--try-again-view {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  margin-top: 10px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__title {
  margin: 16px 0 12px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.26px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__description {
  color: #6a6a81;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.01px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__button {
  display: block;
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
  color: #ffffff;
  background-color: #6b46fe;
  border: none;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 12px;
  text-decoration: none;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__image {
  width: 24px;
  height: 24px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
  color: #3c3c49;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__description {
  /* stylelint-disable value-no-vendor-prefix */
  /* stylelint-disable  property-no-vendor-prefix */
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* stylelint-enable value-no-vendor-prefix */
  /* stylelint-enable property-no-vendor-prefix */
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01px;
  color: #9d9dae;
}

.pera-wallet-connect-modal-pending-message__animation-wrapper {
  width: 56px;
  height: 56px;
  background-color: #6b46fe;
  border-radius: 50%;
}

.pera-wallet-connect-modal-pending-message__text {
  max-width: 271px;
  margin-top: 24px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.26px;
}

.pera-wallet-connect-modal-pending-message__cancel-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px;
  color: #6a6a81;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
  border: none;
}`;ke(bn);const fn=document.createElement("template");fn.innerHTML=`
  <div class="pera-wallet-connect-modal-pending-message-section">
    <div class="pera-wallet-connect-modal-pending-message">
      <div id="pera-wallet-connect-modal-pending-message-animation-wrapper" class="pera-wallet-connect-modal-pending-message__animation-wrapper"></div>

      <div class="pera-wallet-connect-modal-pending-message__text">
        Please wait while we connect you to Pera Wallet
      </div>
    </div>

    <button
      id="pera-wallet-connect-modal-pending-message-cancel-button"
      class="pera-wallet-button pera-wallet-connect-modal-pending-message__cancel-button">
        Cancel
    </button>
  </div>

  <div id="pera-wallet-connect-modal-pending-message-audio-wrapper"></div>
`;const Zi=`
  <div class="pera-wallet-connect-modal-pending-message--try-again-view">
    <div>
      <img src="${ti}" alt="Pera Wallet Logo" />

      <h1 class="pera-wallet-connect-modal-pending-message--try-again-view__title">
        Couldn’t establish connection
      </h1>

      <p class="pera-wallet-connect-modal-pending-message--try-again-view__description">
        Having issues? Before trying again, make sure to read the support article below and apply the possible solutions.
      </p>
    </div>

    <div>
      <a
        href="https://support.perawallet.app/en/article/resolving-walletconnect-issues-1tolptm/"
        target="_blank"
        rel="noopener noreferrer"
        class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor">
        <img
          class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__image"
          src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 22.3199C7.72 22.3199 7.42998 22.2499 7.16998 22.1099C6.59998 21.8099 6.25 21.2099 6.25 20.5699V19.15C3.23 18.84 1.25 16.6199 1.25 13.4399V7.43994C1.25 3.99994 3.56 1.68994 7 1.68994H17C20.44 1.68994 22.75 3.99994 22.75 7.43994V13.4399C22.75 16.8799 20.44 19.1899 17 19.1899H13.23L8.96997 22.03C8.67997 22.22 8.34 22.3199 8 22.3199ZM7 3.17993C4.42 3.17993 2.75 4.84993 2.75 7.42993V13.43C2.75 16.01 4.42 17.68 7 17.68C7.41 17.68 7.75 18.02 7.75 18.43V20.56C7.75 20.69 7.83 20.75 7.88 20.78C7.93001 20.81 8.03001 20.84 8.14001 20.77L12.59 17.81C12.71 17.73 12.86 17.68 13.01 17.68H17.01C19.59 17.68 21.26 16.01 21.26 13.43V7.42993C21.26 4.84993 19.59 3.17993 17.01 3.17993H7ZM11.9998 12.11C11.5898 12.11 11.2498 11.77 11.2498 11.36V11.15C11.2498 10.0038 12.0798 9.4336 12.4082 9.20798L12.4198 9.20001C12.7898 8.95001 12.9098 8.78002 12.9098 8.52002C12.9098 8.02002 12.4998 7.60999 11.9998 7.60999C11.4998 7.60999 11.0898 8.02002 11.0898 8.52002C11.0898 8.93002 10.7498 9.27002 10.3398 9.27002C9.92984 9.27002 9.58984 8.93002 9.58984 8.52002C9.58984 7.19002 10.6698 6.10999 11.9998 6.10999C13.3298 6.10999 14.4098 7.19002 14.4098 8.52002C14.4098 9.66002 13.5698 10.23 13.2598 10.44C12.8698 10.7 12.7498 10.87 12.7498 11.15V11.36C12.7498 11.78 12.4098 12.11 11.9998 12.11ZM11.25 13.85C11.25 14.26 11.58 14.6 12 14.6C12.42 14.6 12.75 14.26 12.75 13.85C12.75 13.44 12.41 13.1 12 13.1C11.59 13.1 11.25 13.44 11.25 13.85Z' fill='%236B46FE'/%3e%3c/svg%3e"
          alt="Help Icon"
        />

        <div>
          <div
            class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title-wrapper">
            <h1
              class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title">
                Resolving WalletConnect issues
            </h1>

            <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.3287 10.0983C10.9574 10.0983 10.6564 9.79734 10.6564 9.42604L10.6564 6.29525L5.14866 11.803C4.88611 12.0655 4.46044 12.0655 4.19789 11.803C3.93534 11.5404 3.93534 11.1147 4.19789 10.8522L9.70561 5.34447L6.57482 5.34447C6.20352 5.34447 5.90252 5.04347 5.90252 4.67218C5.90252 4.30088 6.20352 3.99988 6.57482 3.99988L11.3287 3.99988C11.507 3.99988 11.678 4.07071 11.8041 4.19679C11.9301 4.32287 12.001 4.49387 12.001 4.67218L12.001 9.42604C12.001 9.79734 11.7 10.0983 11.3287 10.0983Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Send Icon"/>
          </div>

          <p
            class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__description">
            Unfortunately there are several known issues related to WalletConnect that our team is working on. Some of these issues are related to the WalletConnect JavaScript implementation on the dApp ...
          </p>
        </div>
      </a>

      <button id="pera-wallet-connect-modal-pending-message-try-again-button" class="pera-wallet-connect-button pera-wallet-connect-modal-pending-message--try-again-view__button">
        Close & Try Again
      </button>
    </div>
  </div>
  `;class Ni extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const N=document.createElement("style");N.textContent=bn,this.shadowRoot.append(fn.content.cloneNode(!0),N)}}connectedCallback(){var N;const pt=(N=this.shadowRoot)===null||N===void 0?void 0:N.getElementById("pera-wallet-connect-modal-pending-message-cancel-button");pt==null||pt.addEventListener("click",()=>{this.onClose()}),this.addAudioForConnection(),this.renderLottieAnimation(),setTimeout(()=>{var ct;if(fn.innerHTML=Zi,this.shadowRoot){const xt=document.createElement("style");xt.textContent=bn,this.shadowRoot.innerHTML="",this.shadowRoot.append(fn.content.cloneNode(!0),xt);const Ct=(ct=this.shadowRoot)===null||ct===void 0?void 0:ct.getElementById("pera-wallet-connect-modal-pending-message-try-again-button");Ct==null||Ct.addEventListener("click",()=>{this.onClose()})}},3e4)}onClose(){mn(wn)}addAudioForConnection(){var N;if(this.getAttribute("should-use-sound")==="true"&&zn()){const pt=(N=this.shadowRoot)===null||N===void 0?void 0:N.getElementById("pera-wallet-connect-modal-pending-message-audio-wrapper"),ct=document.createElement("audio");ct.src="https://s3.amazonaws.com/wc.perawallet.app/audio.mp3",ct.autoplay=!0,ct.loop=!0,pt==null||pt.appendChild(ct)}}renderLottieAnimation(){var N;const pt=(N=this.shadowRoot)===null||N===void 0?void 0:N.getElementById("pera-wallet-connect-modal-pending-message-animation-wrapper");pt&&Dn.loadAnimation({container:pt,renderer:"svg",loop:!0,autoplay:!0,path:"https://s3.amazonaws.com/wc.perawallet.app/static/pera-loader-animation.json"})}}var ii=`.pera-wallet-sign-txn-toast {
  --pera-wallet-sign-txn-toast-width: 422px;
  --pera-wallet-sign-txn-toast-height: 134px;
  --pera-wallet-sign-txn-toast-font-family: "Inter", sans-serif;
  position: fixed;
  bottom: 28px;
  right: 35px;
  z-index: 11;
  overflow: hidden;
  width: var(--pera-wallet-sign-txn-toast-width);
  height: var(--pera-wallet-sign-txn-toast-height);
  background: #edeffb;
  border-radius: 8px;
  animation: 0.2s PeraWalletSignTxnToastSlideIn ease-out;
}
.pera-wallet-sign-txn-toast * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-sign-txn-toast-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-sign-txn-toast ul,
.pera-wallet-sign-txn-toast ol,
.pera-wallet-sign-txn-toast li {
  list-style-type: none;
}

.pera-wallet-sign-txn-toast__header__close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

.pera-wallet-sign-txn-toast__content__lottie-animation {
  position: absolute;
  top: -75px;
  left: -100px;
  width: 368px;
  height: 368px;
}

.pera-wallet-sign-txn-toast__content__description {
  position: absolute;
  top: 40px;
  right: 48px;
  max-width: 197px;
  color: #3c3c49;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.1px;
}

@media (max-width: 767px) {
  .pera-wallet-sign-txn-toast {
    display: none;
  }
}
@keyframes PeraWalletSignTxnToastSlideIn {
  0% {
    bottom: 12px;
    opacity: 0;
  }
  100% {
    bottom: 26px;
    opacity: 1;
  }
}`;ke(ii);const ri=document.createElement("template");ri.innerHTML=`
  <div class="pera-wallet-sign-txn-toast">
    <div class="pera-wallet-sign-txn-toast__header">
      <button
        id="pera-wallet-sign-txn-toast-close-button"
        class="pera-wallet-sign-txn-toast__header__close-button">
        <img src="data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14.4107 4.41074L9.41074 9.41074L10.5893 10.5893L15.5893 5.58926L14.4107 4.41074ZM9.41074 9.41074L4.41074 14.4107L5.58926 15.5893L10.5893 10.5893L9.41074 9.41074ZM15.5893 14.4107L10.5893 9.41074L9.41074 10.5893L14.4107 15.5893L15.5893 14.4107ZM10.5893 9.41074L5.58926 4.41074L4.41074 5.58926L9.41074 10.5893L10.5893 9.41074Z' fill='%239099BD'/%3e%3c/svg%3e" />
      </button>
    </div>
    <div class="pera-wallet-sign-txn-toast__content">
      <div id="pera-wallet-sign-txn-toast-lottie-animation" style="width:368;height:368" class="pera-wallet-sign-txn-toast__content__lottie-animation"></div>
      <p class="pera-wallet-sign-txn-toast__content__description">
        Please launch <b>Pera Wallet</b> on your iOS or Android device to sign this transaction.
      </p>
    </div>
  </div>
`;class ji extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const N=document.createElement("style");N.textContent=ii,this.shadowRoot.append(ri.content.cloneNode(!0),N);const pt=this.shadowRoot.getElementById("pera-wallet-sign-txn-toast-close-button");pt==null||pt.addEventListener("click",()=>{mn(Li)}),this.renderLottieAnimation()}}renderLottieAnimation(){var N;const pt=(N=this.shadowRoot)===null||N===void 0?void 0:N.getElementById("pera-wallet-sign-txn-toast-lottie-animation");pt&&Dn.loadAnimation({container:pt,renderer:"svg",loop:!0,autoplay:!0,path:"https://s3.amazonaws.com/wc.perawallet.app/static/sign-toast-animation.json"})}}var ai=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  top: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: calc(100 * var(--pera-wallet-vh));
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    top: 30%;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}
.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
  background-image: unset;
  padding: 0;
}
.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body .pera-wallet-sign-txn-modal__body__content {
  width: 100%;
  height: 100%;
}
.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body #pera-wallet-iframe {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  margin: 0 auto;
  border: none;
}

.pera-wallet-sign-txn-modal--compact.pera-wallet-modal .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
}`;ke(ai);const si=document.createElement("template");si.innerHTML=`
  <div id="pera-wallet-sign-txn-modal" class="${rn} pera-wallet-sign-txn-modal">
    <div class="pera-wallet-modal__body">
      <pera-wallet-modal-header modal-id="${Mi}"></pera-wallet-modal-header/>

      <div class="pera-wallet-sign-txn-modal__body__content" />
    </div>
  </div>
`;class Wi extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const N=document.createElement("style");if(N.textContent=ai,this.shadowRoot.append(si.content.cloneNode(!0),N),this.getAttribute("compact-mode")==="true"){const pt=this.shadowRoot.getElementById("pera-wallet-sign-txn-modal");pt==null||pt.classList.add("pera-wallet-sign-txn-modal--compact")}}}}function In(){document.documentElement.style.setProperty("--pera-wallet-vh",.01*window.innerHeight+"px")}function Pe(qt,N){window.customElements.get(qt)||window.customElements.define(qt,N)}window.addEventListener("DOMContentLoaded",()=>{In()}),window.addEventListener("resize",()=>{In()}),Pe("pera-wallet-connect-modal",Oi),Pe("pera-wallet-modal-desktop-mode",Vi),Pe("pera-wallet-modal-header",zi),Pe("pera-wallet-modal-touch-screen-mode",Ri),Pe("pera-wallet-redirect-modal",qi),Pe("pera-wallet-connect-modal-information-section",Hi),Pe("pera-wallet-connect-modal-pending-message-section",Ni),Pe("pera-wallet-sign-txn-toast",ji),Pe("pera-wallet-sign-txn-modal",Wi),Pe("pera-wallet-download-qr-code",Bi);
