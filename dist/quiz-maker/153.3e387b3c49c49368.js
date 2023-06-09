"use strict";(self.webpackChunkquiz_maker=self.webpackChunkquiz_maker||[]).push([[153],{2153:(L,i,c)=>{c.r(i),c.d(i,{ResultsModule:()=>R});var s=c(4755),u=c(774),e=c(1902),a=c(78);let m=(()=>{class n{transform(t,o){return t===o.correctAnswer?"correct":t===o.userAnswer&&o.correctAnswer!==o.userAnswer?"incorrect":""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"qzmAnswerColor",type:n,pure:!0}),n})();function p(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"button",5),e.ALo(2,"qzmAnswerColor"),e._UZ(3,"span",2),e.qZA(),e.BQk()),2&n){const t=r.$implicit,o=e.oxw().$implicit;e.xp6(1),e.Q6J("ngClass",e.xi3(2,2,t,o)),e.xp6(2),e.Q6J("innerHTML",t,e.oJD)}}function g(n,r){if(1&n&&(e.TgZ(0,"div",1),e._UZ(1,"div",2),e.TgZ(2,"div",3),e.YNc(3,p,4,5,"ng-container",4),e.qZA()()),2&n){const t=r.$implicit;e.xp6(1),e.Q6J("innerHTML",t.question,e.oJD),e.xp6(2),e.Q6J("ngForOf",t.answers)}}let f=(()=>{class n{constructor(){this.quizLines=[]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["qzm-results-lines"]],inputs:{quizLines:"quizLines"},decls:1,vars:1,consts:[["class","quiz-line",4,"ngFor","ngForOf"],[1,"quiz-line"],[3,"innerHTML"],[1,"quiz-answers"],[4,"ngFor","ngForOf"],[3,"ngClass"]],template:function(t,o){1&t&&e.YNc(0,g,4,2,"div",0),2&t&&e.Q6J("ngForOf",o.quizLines)},dependencies:[s.mk,s.sg,m],styles:[".quiz-line[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;margin:1rem}.quiz-line[_ngcontent-%COMP%]   .quiz-answers[_ngcontent-%COMP%]{display:flex;gap:1rem}.quiz-line[_ngcontent-%COMP%]   .quiz-answers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{pointer-events:none;min-height:2rem;font-size:1.1rem;background-color:transparent;color:green;border:1px solid green;border-radius:.25rem}.quiz-line[_ngcontent-%COMP%]   .quiz-answers[_ngcontent-%COMP%]   button.correct[_ngcontent-%COMP%]{background-color:green;color:#fff}.quiz-line[_ngcontent-%COMP%]   .quiz-answers[_ngcontent-%COMP%]   button.incorrect[_ngcontent-%COMP%]{background-color:red;color:#fff}"],changeDetection:0}),n})();class l{constructor(){}static getCorrectAnswersNumberFromQuizLines(r){return r.filter(t=>t.userAnswer===t.correctAnswer).length}}let C=(()=>{class n{transform(t){const o=l.getCorrectAnswersNumberFromQuizLines(t);return 0===o||1===o?"incorrect":2===o||3===o?"neutral":"correct"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"qzmScoreColor",type:n,pure:!0}),n})(),d=(()=>{class n{transform(t){return`You scored ${l.getCorrectAnswersNumberFromQuizLines(t)} out of ${t.length}`}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"qzmScoreFormat",type:n,pure:!0}),n})();function z(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",1),e.ALo(2,"qzmScoreColor"),e._uU(3),e.ALo(4,"qzmScoreFormat"),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngClass",e.lcZ(2,2,t.quizLines)),e.xp6(2),e.hij(" ",e.lcZ(4,4,t.quizLines)," ")}}let _=(()=>{class n{constructor(){this.quizLines=[]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["qzm-results-score"]],inputs:{quizLines:"quizLines"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"score",3,"ngClass"]],template:function(t,o){1&t&&e.YNc(0,z,5,6,"ng-container",0),2&t&&e.Q6J("ngIf",null==o.quizLines?null:o.quizLines.length)},dependencies:[s.mk,s.O5,C,d],styles:[".score[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:0 3rem}.score.correct[_ngcontent-%COMP%]{background-color:green;color:#fff}.score.neutral[_ngcontent-%COMP%]{background-color:#ff0;color:#000}.score.incorrect[_ngcontent-%COMP%]{background-color:red;color:#fff}"],changeDetection:0}),n})(),q=(()=>{class n{constructor(){this.createNew=new e.vpe}createNewQuiz(){this.createNew.emit()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["qzm-results-create"]],outputs:{createNew:"createNew"},decls:2,vars:0,consts:[[3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.createNewQuiz()}),e._uU(1,"Create a new quiz"),e.qZA())},styles:["[_nghost-%COMP%]{display:flex;justify-content:center;width:100%}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;height:2rem;font-size:1.1rem;background-color:#a9a9a9;color:#fff;border:none;border-radius:.25rem;width:50%}[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:gray}"],changeDetection:0}),n})();function w(n,r){if(1&n&&(e.ynx(0),e._UZ(1,"qzm-results-lines",2)(2,"qzm-results-score",2),e.BQk()),2&n){const t=r.ngIf;e.xp6(1),e.Q6J("quizLines",t),e.xp6(1),e.Q6J("quizLines",t)}}const M=[{path:"",component:(()=>{class n{constructor(t){this.quizMakerService=t,this.quizLines$=this.quizMakerService.getQuizLines()}createNewQuiz(){this.quizMakerService.createNewQuiz()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.i))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:5,vars:3,consts:[[4,"ngIf"],[3,"createNew"],[3,"quizLines"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"RESULTS"),e.qZA(),e.YNc(2,w,3,2,"ng-container",0),e.ALo(3,"async"),e.TgZ(4,"qzm-results-create",1),e.NdJ("createNew",function(){return o.createNewQuiz()}),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,1,o.quizLines$)))},dependencies:[s.O5,f,_,q,s.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem;padding:2rem}"],changeDetection:0}),n})()}];let y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(M),u.Bz]}),n})(),R=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.ez,y]}),n})()}}]);