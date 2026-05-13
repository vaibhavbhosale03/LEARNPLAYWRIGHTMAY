console.log(score); //ReferenceError: Cannot access 'score' before initialization

let score = 100;

//Temporal Dead Zone 
{
    // TDZ for "score" starts here
    //console.log(score); //ReferenceError
    //score =50; //Reference error
    //typeof score; //ReferenceError
    //TDZ for score ends here
    let score = 100;
    console.log(score); //100(safe to access now)
}