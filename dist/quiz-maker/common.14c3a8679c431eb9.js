"use strict";(self.webpackChunkquiz_maker=self.webpackChunkquiz_maker||[]).push([[592],{78:(y,c,r)=>{r.d(c,{i:()=>f});var o=r(1135),n=r(262),p=r(8746),z=r(8505),Q=r(515),s=r(1902),h=r(4004),l=r(3144);let v=(()=>{class t{constructor(e){this.http=e}getCategories(){return this.http.get("https://opentdb.com/api_category.php").pipe((0,h.U)(e=>e.trivia_categories))}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(l.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),g=(()=>{class t{constructor(e){this.http=e}getQuestions(e,i){return this.http.get(`https://opentdb.com/api.php?amount=5&category=${e}&difficulty=${i}&type=multiple`).pipe((0,h.U)(a=>a.results))}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(l.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=r(774);let f=(()=>{class t{constructor(e,i,a){this.apiCategoryRepositoryService=e,this.apiQuestionRepositoryService=i,this.router=a,this.areQuizCategoriesLoading$=new o.X(!1),this.areQuizLinesLoading$=new o.X(!1),this.isQuizMakerKo$=new o.X(!1),this.quizLines$=new o.X([]),this.isQuizComplete$=new o.X(!1)}areQuizCategoriesLoading(){return this.areQuizCategoriesLoading$.asObservable()}areQuizLinesLoading(){return this.areQuizLinesLoading$.asObservable()}isQuizMakerKo(){return this.isQuizMakerKo$.asObservable()}getQuizCategories(){return this.areQuizCategoriesLoading$.next(!0),this.apiCategoryRepositoryService.getCategories().pipe((0,n.K)(e=>this.handleQuizError("Error retrieving categories",e)),(0,p.x)(()=>this.areQuizCategoriesLoading$.next(!1)))}getQuizDifficulties(){return[{label:"Easy",value:"easy"},{label:"Medium",value:"medium"},{label:"Hard",value:"hard"}]}getQuizLines(){return this.quizLines$.asObservable()}isQuizComplete(){return this.isQuizComplete$.asObservable()}reloadQuiz(){this.isQuizMakerKo$.next(!1),this.router.navigate([""])}createQuizLines(e){return this.areQuizLinesLoading$.next(!0),this.apiQuestionRepositoryService.getQuestions(e.category,e.difficulty).pipe((0,z.b)(i=>{this.quizLines$.next(i.map(a=>this.createQuizLineFromApiQuestion(a)))}),(0,n.K)(i=>this.handleQuizError("Error creating quiz lines",i)),(0,p.x)(()=>this.areQuizLinesLoading$.next(!1)))}pickAnswer(e){this.updateQuizState(e),this.updateIsQuizComplete()}goToQuizResults(){this.router.navigate(["results"])}createNewQuiz(){this.resetQuiz(),this.router.navigate(["quiz"])}handleQuizError(e,i){return this.isQuizMakerKo$.next(!0),console.error(e,i),Q.E}createQuizLineFromApiQuestion(e){return{question:e.question,answers:this.shuffleAnswers([...e.incorrect_answers,e.correct_answer]),correctAnswer:e.correct_answer,userAnswer:null}}shuffleAnswers(e){return e.map(i=>({value:i,sortValue:Math.random()})).sort((i,a)=>i.sortValue-a.sortValue).map(({value:i})=>i)}updateQuizState(e){this.quizLines$.next([...this.quizLines$.value].map(i=>(i.question===e.question&&(i.userAnswer=e.answer),i)))}updateIsQuizComplete(){this.isQuizComplete$.next(this.quizLines$.value.every(e=>!!e.userAnswer))}resetQuiz(){this.quizLines$.next([]),this.isQuizComplete$.next(!1)}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(v),s.LFG(g),s.LFG(d.F0))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);