(self.webpackChunkplanout=self.webpackChunkplanout||[]).push([[508],{80834:function(n,r,t){"use strict";t.r(r),t.d(r,{getED25519Key:function(){return u}});var a=t(93433),e=t(80889),f=t.n(e),o=t(53085).lW,c=f().lowlevel;function u(n){var r;r="string"===typeof n?o.from(n,"hex"):n;var t=new Uint8Array(64),e=[c.gf(),c.gf(),c.gf(),c.gf()],f=new Uint8Array([].concat((0,a.Z)(new Uint8Array(r)),(0,a.Z)(new Uint8Array(32)))),u=new Uint8Array(32);c.crypto_hash(t,f,32),t[0]&=248,t[31]&=127,t[31]|=64,c.scalarbase(e,t),c.pack(u,e);for(var i=0;i<32;i+=1)f[i+32]=u[i];return{sk:o.from(f),pk:o.from(u)}}},78848:function(){}}]);