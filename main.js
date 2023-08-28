// Please copy and paste your GitHub Repo on line 2 (optional)
// <GitHub Repo>

// JavaScript Assessment Rubric: https://generation.instructure.com/courses/2342/assignments/143783

// Codecademy: https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-javascript-syntax-part-iii/modules/fecp-challenge-project-find-your-hat/projects/find-your-hat

// Please break down your thinking process step-by-step (mandatory)
// step 1 :



// JS Assessment: Find your hat //
const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');

//Set symbol 
const symbol_hat = '^';
const symbol_hole = 'O';
const symbol_field = '░';
const symbol_Character = '*';


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
            each_row.push(symbol_field)            
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

    


    //step sum  total method
    PlayGame(){
        this.StartGame()
        this.DefineFieldSize()
        this.CreateField_Column()
        this.CreateField_Row()
        this.PrintMap()
    }


}

let object1 = new Field()
object1.PlayGame()
console.log(object1)
