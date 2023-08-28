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
        let input_row = prompt('please specifie count of row: ');
        let input_column = prompt('please specifie count of column: ');
        this.field_row = input_row;
        this.field_column = input_column;
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
        clear()
        for (let i = 0; i < this.fieldgame.length; i++) {
            console.log(this.fieldgame[i].join(''))            
        }
    }

    //step 7 set default position
    SetPositionPlayer(){
        this.fieldgame[this.player.position_y][this.player.position_x] = icon_Character
    }

    //step 8 random hat
    Random_Hat(){
        let position_x =  Math.floor(Math.random() * (this.field_column));
        let position_y =  Math.floor(Math.random() * (this.field_row));
        while(position_x !== this.player.position_x && position_y !== this.player.position_y){           
            console.log(`position_random x: ${position_x}`);
            console.log(`position_random y: ${position_y}`);
            break
        }
        
        this.fieldgame[position_y][position_x] = icon_hat;
    }

    //step 9 random trap
    Random_Trap(){
        let position_x =  Math.floor(Math.random() * (this.field_column));
        let position_y =  Math.floor(Math.random() * (this.field_row));
        while(this.fieldgame[position_y][position_x] === icon_field ){
            this.fieldgame[position_y][position_x] = icon_hole
        }
    }

    //step 10 play game
    Play(){
        while(this.is_playing){            
            
            console.log('\nmove: a/s/w/d');
            console.log('help: h');
            let input_direction = prompt('Please specifie your direction: ')
            switch (input_direction) {
                case 'w':   this.player.position_y--         
                            this.SetPositionPlayer()  
                            this.PrintMap()                                                                
                break;
                case 's':   this.player.position_y++  
                            this.SetPositionPlayer()       
                            this.PrintMap()                                                                
                break;
                case 'a':   this.player.position_x--  
                            this.SetPositionPlayer()       
                            this.PrintMap()                                                                
                break;
                case 'd':   this.player.position_x++  
                            this.SetPositionPlayer()       
                            this.PrintMap()                                                                
                break;
                
                case 'h':   this.OptionalHelp()                                                              
                break;            

            
                default:
                    break;
            }
        }
    }

    //step 11 help 
    OptionalHelp(){
        console.log('\nHelp')
        console.log(`   current your posiotion: [${this.player.position_x} , ${this.player.position_y}]`)
        console.log(`   Character: ${icon_Character}`)
        console.log(`   field: ${icon_field}`)
        console.log(`   hat: ${icon_hat}`)
        console.log(`   hole: ${icon_hole}`)        
    }



    //step sum  total method
    GameController(){
        this.StartGame()
        if(this.is_playing){
            this.DefineFieldSize()
            this.CreateField_Column()
            this.CreateField_Row()
            this.PrintMap()
            this.SetPositionPlayer()
            this.Random_Hat()
            this.Random_Trap()
            this.PrintMap()
            this.Play()
        }
    }


}

let object1 = new Field()
object1.GameController()
console.log(object1)
// object1.Random_Hat()
// object1.PrintMap()
