//Class that is used to generate random number.
 class RandomValue{
     constructor(min,max){
         this.min = min;
         this.max = max;
         this.randomValue = 0;
     }
     findRandom(){
         this.randomValue = Math.floor(Math.random()*(this.max-this.min)+this.min)
         return this.randomValue
     }
 }

 //Class that define the 5 dices and their values generated using above class.
 class RollDices extends RandomValue{
     constructor(){
         super(1,6);
         this.dices=[]
     }
     rolledValues(){
        for(let i=0;i<5;i++){
            let value = this.findRandom();
            this.dices[i] = value;
        }
     }
     printDiceValues(){
         console.log("The value of dices are:");
         this.dices.map(num=>{
             console.log(num);
         })
     }
 }

 //Class that prints the sum of all the rolled dices
 class Summation extends RollDices{
     constructor(){
        super();
        this.sum=0;
     }
     findSum(){
         this.rolledValues();
         this.printDiceValues();
         let dices = this.dices;
        dices.map((num)=>{
            this.sum+=num;
        });
        console.log("the summation of rolled dices are: "+this.sum);
     }
 }

 //Object created for summation class
 let sum = new Summation()
 sum.findSum()





