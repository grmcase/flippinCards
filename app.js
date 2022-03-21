new Vue({
    el: "#flashcards-app",
    data: {
        cards:[
            {
                question:"What year was IUPUI founded?",
                answer:"1969",
                category:"history",
                flipped:false
            },
            {
                question:"What is 2+2?",
                answer:"fish, a fish, a fishy Oh",
                category:"math",
                flipped:false
            },{
                question:"Is mayonnaise an instrument?",
                answer:"No",
                category:"science",
                flipped:false
            }
        ],

        form:{
            question:"",
            answer:"",
            category:"",
            flipped:false
        }
    },
    methods:{
        flipCard: function(card){
            card.flipped=!card.flipped;
        },
        submit:function (){
            if (!this.form.question
                || !this.form.answer
                || !this.form.category) {
                alert('No dice!');
                return false;
            }
            this.cards.push(this.form);
            this.form={
                question:"",
                answer:"",
                category:"",
                flipped:false
            }

        }


    }
})