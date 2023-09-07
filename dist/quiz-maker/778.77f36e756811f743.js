"use strict";(self.webpackChunkquiz_maker=self.webpackChunkquiz_maker||[]).push([[778],{5778:(W,S,u)=>{u.d(S,{i:()=>J});var a=u(1135),h=u(4004),f=u(8505),Q=u(262),y=u(8746),I=u(9841),$=u(9646),m=u(515),F=u(5577),q=u(4482),C=u(5403),E=u(4671),R=u(9751),M=u(727);class X extends M.w0{constructor(i,e){super()}schedule(i,e=0){return this}}const p={setInterval(s,i,...e){const{delegate:t}=p;return t?.setInterval?t.setInterval(s,i,...e):setInterval(s,i,...e)},clearInterval(s){const{delegate:i}=p;return(i?.clearInterval||clearInterval)(s)},delegate:void 0};var N=u(8737);const w={now:()=>(w.delegate||Date).now(),delegate:void 0};class g{constructor(i,e=g.now){this.schedulerActionCtor=i,this.now=e}schedule(i,e=0,t){return new this.schedulerActionCtor(this,i).schedule(t,e)}}g.now=w.now;const U=new class D extends g{constructor(i,e=g.now){super(i,e),this.actions=[],this._active=!1}flush(i){const{actions:e}=this;if(this._active)return void e.push(i);let t;this._active=!0;do{if(t=i.execute(i.state,i.delay))break}while(i=e.shift());if(this._active=!1,t){for(;i=e.shift();)i.unsubscribe();throw t}}}(class K extends X{constructor(i,e){super(i,e),this.scheduler=i,this.work=e,this.pending=!1}schedule(i,e=0){var t;if(this.closed)return this;this.state=i;const r=this.id,n=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(n,r,e)),this.pending=!0,this.delay=e,this.id=null!==(t=this.id)&&void 0!==t?t:this.requestAsyncId(n,this.id,e),this}requestAsyncId(i,e,t=0){return p.setInterval(i.flush.bind(i,this),t)}recycleAsyncId(i,e,t=0){if(null!=t&&this.delay===t&&!1===this.pending)return e;null!=e&&p.clearInterval(e)}execute(i,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const t=this._execute(i,e);if(t)return t;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,e){let r,t=!1;try{this.work(i)}catch(n){t=!0,r=n||new Error("Scheduled action threw falsy error")}if(t)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:i,scheduler:e}=this,{actions:t}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,N.P)(t,this),null!=i&&(this.id=this.recycleAsyncId(e,i,null)),this.delay=null,super.unsubscribe()}}});var B=u(3532);var O=u(8421),Y=u(2843),l=u(1902),L=u(3144);let j=(()=>{class s{constructor(e){this.http=e}getCategories(){return this.http.get("https://opentdb.com/api_category.php").pipe((0,h.U)(e=>e.trivia_categories))}}return s.\u0275fac=function(e){return new(e||s)(l.LFG(L.eN))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),k=(()=>{class s{constructor(e){this.http=e}getQuestions(e,t){return this.http.get(`https://opentdb.com/api.php?amount=5&category=${e}&difficulty=${t}&type=multiple`).pipe((0,h.U)(r=>r.results))}}return s.\u0275fac=function(e){return new(e||s)(l.LFG(L.eN))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var H=u(1663);let J=(()=>{class s{constructor(e,t,r){this.apiCategoryRepositoryService=e,this.apiQuestionRepositoryService=t,this.router=r,this.areQuizCategoriesLoading$=new a.X(!1),this.areQuizLinesLoading$=new a.X(!1),this.isQuizMakerKo$=new a.X(!1),this.quizCategories$=new a.X(null),this.selectedQuizCategory$=new a.X(null),this.quizLines$=new a.X([]),this.isQuizComplete$=new a.X(!1),this.quizConfig$=new a.X(null),this.canQuestionBeChanged$=new a.X(!0)}areQuizCategoriesLoading(){return this.areQuizCategoriesLoading$.asObservable()}areQuizLinesLoading(){return this.areQuizLinesLoading$.asObservable()}isQuizMakerKo(){return this.isQuizMakerKo$.asObservable()}canQuestionBeChanged(){return this.canQuestionBeChanged$.asObservable()}getFormattedQuizCategories(){const e=": ";return this.apiCategoryRepositoryService.getCategories().pipe((0,h.U)(t=>t.map(r=>r.name.includes(e)?{id:r.id,name:r.name.split(e)[0],subcategory:r.name.split(e)[1]}:{id:r.id,name:r.name,subcategory:null})))}initializeQuizCategories(){return this.areQuizCategoriesLoading$.next(!0),this.getFormattedQuizCategories().pipe((0,f.b)(e=>this.quizCategories$.next(e)),(0,Q.K)(e=>this.handleQuizError("Error retrieving categories",e)),(0,y.x)(()=>this.areQuizCategoriesLoading$.next(!1)))}getQuizCategories(){return this.quizCategories$.asObservable().pipe((0,h.U)(e=>e?.map(t=>t.name)),(0,h.U)(e=>[...new Set(e)]))}getQuizSubcategories(){return(0,I.a)([this.quizCategories$,this.selectedQuizCategory$]).pipe((0,h.U)(([e,t])=>{if(!e)return null;const r=e.filter(n=>n.subcategory&&n.name===t).map(n=>n.subcategory);return[...new Set(r)]}))}getQuizDifficulties(){return[{label:"Easy",value:"easy"},{label:"Medium",value:"medium"},{label:"Hard",value:"hard"}]}getQuizLines(){return this.quizLines$.asObservable()}isQuizComplete(){return this.isQuizComplete$.asObservable()}reloadQuiz(){this.isQuizMakerKo$.next(!1),this.router.navigate([""])}selectCategory(e){this.selectedQuizCategory$.next(e)}createQuizLines(e){if(this.areQuizLinesLoading$.next(!0),!e)return this.areQuizLinesLoading$.next(!1),(0,$.of)([]);const t=this.getQuizCategory(e);return this.quizConfig$.next(e),this.apiQuestionRepositoryService.getQuestions(t.id,e.difficulty).pipe((0,f.b)(r=>{this.quizLines$.next(r.map(n=>this.createQuizLineFromApiQuestion(n)))}),(0,Q.K)(r=>this.handleQuizError("Error creating quiz lines",r)),(0,y.x)(()=>this.areQuizLinesLoading$.next(!1)))}pickAnswer(e){this.updateQuizState(e),this.updateIsQuizComplete()}changeQuizLine(e){const t=this.quizConfig$.value?.category,r=this.quizConfig$.value?.difficulty;if(!t||!r||!this.quizCategories$.value)return m.E;const o=this.getQuizCategory(this.quizConfig$.value);return this.apiQuestionRepositoryService.getQuestions(o.id,r).pipe((0,f.b)(console.log),(0,F.z)(c=>this.selectNewApiQuestion(c)),(0,f.b)(c=>this.replaceQuizLine(e,c)),(0,f.b)(()=>this.isQuizComplete$.next(!1)),function P(s=1/0){let i;i=s&&"object"==typeof s?s:{count:s};const{count:e=1/0,delay:t,resetOnSuccess:r=!1}=i;return e<=0?E.y:(0,q.e)((n,o)=>{let d,c=0;const v=()=>{let b=!1;d=n.subscribe((0,C.x)(o,z=>{r&&(c=0),o.next(z)},void 0,z=>{if(c++<e){const x=()=>{d?(d.unsubscribe(),d=null,v()):b=!0};if(null!=t){const T="number"==typeof t?function V(s=0,i,e=U){let t=-1;return null!=i&&((0,B.K)(i)?e=i:t=i),new R.y(r=>{let n=function G(s){return s instanceof Date&&!isNaN(s)}(s)?+s-e.now():s;n<0&&(n=0);let o=0;return e.schedule(function(){r.closed||(r.next(o++),0<=t?this.schedule(void 0,t):r.complete())},n)})}(t):(0,O.Xf)(t(z,c)),A=(0,C.x)(o,()=>{A.unsubscribe(),x()},()=>{o.complete()});T.subscribe(A)}else x()}else o.error(z)})),b&&(d.unsubscribe(),d=null,v())};v()})}())}goToQuizResults(){this.router.navigate(["results"])}createNewQuiz(){this.resetQuiz(),this.router.navigate(["quiz"])}handleQuizError(e,t){return this.isQuizMakerKo$.next(!0),console.error(e,t),m.E}createQuizLineFromApiQuestion(e){return{question:e.question,answers:this.shuffleAnswers([...e.incorrect_answers,e.correct_answer]),correctAnswer:e.correct_answer,userAnswer:null}}shuffleAnswers(e){return e.map(t=>({value:t,sortValue:Math.random()})).sort((t,r)=>t.sortValue-r.sortValue).map(({value:t})=>t)}updateQuizState(e){this.quizLines$.next([...this.quizLines$.value].map(t=>(t.question===e.question&&(t.userAnswer=e.answer),t)))}updateIsQuizComplete(){this.isQuizComplete$.next(this.quizLines$.value.every(e=>!!e.userAnswer))}resetQuiz(){this.quizLines$.next([]),this.isQuizComplete$.next(!1),this.quizConfig$.next(null),this.selectedQuizCategory$.next(null),this.canQuestionBeChanged$.next(!0)}getQuizCategory(e){if(!e||!this.quizCategories$.value)throw new Error("No quiz config or quiz categories defined");const t=this.quizCategories$.value.find(r=>r.name===e.category);if(!t)throw new Error(`Quiz category ${t} doesn't exist`);return t}selectNewApiQuestion(e){const t=this.quizLines$.value.map(n=>n.question),r=e.filter(n=>!t.includes(n.question));return 0===r.length?(0,Y._)(()=>"No new question found"):(0,$.of)(r[0])}replaceQuizLine(e,t){const r=this.createQuizLineFromApiQuestion(t),n=[...this.quizLines$.value].map(o=>o.question===e.question?r:o);this.quizLines$.next(n),this.canQuestionBeChanged$.next(!1)}}return s.\u0275fac=function(e){return new(e||s)(l.LFG(j),l.LFG(k),l.LFG(H.F0))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);