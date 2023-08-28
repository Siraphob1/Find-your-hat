// Please copy and paste your GitHub Repo on line 2 (optional)
// <GitHub Repo>

// JavaScript Assessment Rubric: https://generation.instructure.com/courses/2342/assignments/143783

// Codecademy: https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-javascript-syntax-part-iii/modules/fecp-challenge-project-find-your-hat/projects/find-your-hat

// Please break down your thinking process step-by-step (mandatory)
// step 1 :



// JS Assessment: Find your hat //
const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');

//Set icon 
const icon_hat = '🥽';
const icon_hole = '🚧';
const icon_field = '🟦';
const icon_Character = '😀';


//Step1 Create class Field
class Field{
    constructor(){
        this.fieldgame = []
        this.field_row = 3
        this.field_column = 3
        this.player ={
            position_x: 0,
            position_y: 0
        }
        this.is_playing = false
        this.is_win = false
    }

    //step 2 Start game
    StartGame(){
        clear()
        console.log('\nWelcome to Find-Your-Hat Game 🧢');

        let input_player = prompt('Press p for play game: ');
        if(input_player === 'p' || input_player === 'P') this.is_playing = true;     
        }        
         
    //step 3 player define row & column
    DefineFieldSize(){
        let isformat_row = false;
        let isformat_column = false;
        

        while(isformat_row === false){
          let input_row = prompt('please input count of row: ')
          let number = parseInt(input_row)
        
          if(isNaN(number+0) != true){
            this.field_row = number
            isformat_row = true
          }
        }


        while(isformat_column === false){
            let input_column = prompt('please input count of column: ')
            let number = parseInt(input_column)
          
            if(isNaN(number+0) != true){
                this.field_column = number
              isformat_column = true
             
            }
          }                  



    }

    //step 4 create field each column
    CreateField_Column(){
        let each_row = []
        for (let i = 0; i < this.field_column; i++) {
            each_row.push(icon_field)            
        }
        return each_row
    }

    //step 5 create field each row
    CreateField_Row(){
        for (let i = 0; i < this.field_row; i++) {         
            this.fieldgame.push(this.CreateField_Column())
        }
    }

    //step 6 Display Map
    PrintMap(){        
        for (let i = 0; i < this.fieldgame.length; i++) {
            console.log(this.fieldgame[i].join(''))            
        }
    }

    //step 7 set default position
    SetPositionPlayer(){
        if(this.is_playing){
            this.fieldgame[this.player.position_y][this.player.position_x] = icon_Character
        }
    }

    //step 7.1 random player
    Random_Player(){
        let position_x = Math.floor(Math.random() * (this.field_column));
        let position_y = Math.floor(Math.random() * (this.field_row));
        this.player.position_x = position_x;
        this.player.position_y = position_y;
        this.SetPositionPlayer()
    }

    //step 8 random hat
    Random_Hat(){
        let position_x = 0;
        let position_y = 0;
        let random_finish = false;        

        while(!random_finish){  

            position_x =  Math.floor(Math.random() * (this.field_column));  
            position_y =  Math.floor(Math.random() * (this.field_row));        
          
            if(position_x !== this.player.position_x && position_y !== this.player.position_y){
                random_finish =true                
            }             
        }

        this.fieldgame[position_y][position_x] = icon_hat;
    }

    //step 9 random trap
    Random_Trap(){
        
        let position_x = 0;
        let position_y = 0;
        let random_finish = false;        

        while(!random_finish){  
        
            position_x =  Math.floor(Math.random() * (this.field_column));  
            position_y =  Math.floor(Math.random() * (this.field_row));        
          
            if(position_x !== this.player.position_x && position_y !== this.player.position_y){                
                this.fieldgame[position_y][position_x] = icon_hole   
                random_finish =true             
            }            
            
            
        }

    }

    //step 10 play game
    Play(){
        while(this.is_playing){            
            
            console.log('\nmove: a/s/w/d');
            console.log('help: h');
            let input_direction = prompt('Please specifie your direction: ')
            switch (input_direction) {
                case 'w':   this.ResetPrevPosition()
                            this.PlayerMove(0,-1)         
                            this.SetPositionPlayer()  
                            this.PrintMap()                                                                
                break;
                case 's':   this.ResetPrevPosition()
                            this.PlayerMove(0,1)  
                            this.SetPositionPlayer()                                  
                            this.PrintMap()                                                                
                break;
                case 'a':   this.ResetPrevPosition()
                            this.PlayerMove(-1,0)
                            this.SetPositionPlayer()
                            this.PrintMap()                                                                
                break;
                case 'd':   this.ResetPrevPosition()
                            this.PlayerMove(1,0)  
                            this.SetPositionPlayer()  
                            this.PrintMap()                                                                
                break;
                
                case 'h':   clear()
                            this.PrintMap()
                            this.OptionalHelp()                                                              
                break;            

            
                default:
                    break;
            }
        }
    }

    //step 11 help 
    OptionalHelp(){
        console.log('\nHelp')
        console.log(`   current your posiotion: [${this.player.position_y} , ${this.player.position_x}]`)
        console.log(`   Character: ${icon_Character}`)
        console.log(`   field: ${icon_field}`)
        console.log(`   hat: ${icon_hat}`)
        console.log(`   hole: ${icon_hole}`)        
    }

    //step 12 Playermove
    PlayerMove(x_value , y_value){

        let new_posx = this.player.position_x + x_value;
        let new_posy = this.player.position_y + y_value;

        this.CheckDetect(new_posx , new_posy)   

        this.player.position_x = new_posx;
        this.player.position_y = new_posy;
    }

    //step 12 check detect target
    CheckDetect(new_posx , new_posy){
        clear()
        if(new_posx < 0 || new_posx >this.fieldgame[0].length-1){
            console.log(`You lose 💀💀💀`)
            console.log(`You crash wall`)
            this.is_playing =false
            return
        }
        if(new_posy < 0 || new_posy >this.fieldgame.length-1){
            console.log(`You lose 💀💀💀`)
            console.log(`You crash wall`)
            this.is_playing =false
            return
        }

        if(this.fieldgame[new_posy][new_posx] === icon_hole){
            console.log(`You lose 💀💀💀`)
            console.log(`You fall in hole`)
            this.is_playing =false
            return
        }
        else if(this.fieldgame[new_posy][new_posx] === icon_hat){            
            console.log(`You win 🎉🎉🎉`)
            console.log(`Congratulation: You find your hat`)  
            this.is_playing =false
            return
        }
        else if(this.fieldgame[new_posy][new_posx] === icon_field){
            return
        }
        

      
    }

    //step 13 reset prev position
    ResetPrevPosition(){
        this.fieldgame[this.player.position_y][this.player.position_x] = icon_field
    }

    //step sum  total method
    GameController(){
        this.StartGame()
        if(this.is_playing){
            this.DefineFieldSize()
            this.CreateField_Column()
            this.CreateField_Row()
            this.Random_Player()            
            this.Random_Hat()
            this.Random_Trap()
            clear()
            this.PrintMap()
            this.Play()
        }
    }


}

let object1 = new Field()
object1.GameController()
