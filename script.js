let currentScore = 0;
let playing = false;
let shape1;
let shape2; 
const matchBttn = document.getElementById('match');

const shapes = [
    {color: '#E00543', width: 250, height: 160},
    {color: '#E00543', width: 270, height: 150},
    {color: '#F9D56A', width: 320, height: 170},
    {color: '#F9D56A', width: 310, height: 180},
    {color: '#0E2431', width: 190, height: 160},
    {color: '#0E2431', width: 200, height: 175},
    {color: '#00C3BF', width: 380, height: 185},
    {color: '#00C3BF', width: 400, height: 120},
    {color: '#BA7BA1', width: 370, height: 145},
    {color: '#BA7BA1', width: 140, height: 160},
]

const selectRandomShape = () => {
    const randomNum = Math.floor(Math.random()*shapes.length);
    
    const randomSelection = shapes[randomNum];
    return randomSelection;
}

const repeatRandomShape = () => {
    setInterval(() => {

        matchBttn.disabled = false;
        shape1 = selectRandomShape();
        shape2 = selectRandomShape();

        const shape1Syles = `width:${shape1.width+'px'};
                             background:${shape1.color};
                             height:${shape1.height+'px'};`

        const shape2Syles = `width:${shape2.width+'px'};
                             background:${shape2.color};
                             height:${shape2.height+'px'};`
        
        document.getElementById('shape1').style.cssText = shape1Syles;   
        document.getElementById('shape2').style.cssText = shape2Syles;  
                             
        }, 1000);
}

//  Starting the game
document.getElementById('play').onclick = () => {
    playing = true;

    // Disable play button when playing
    document.getElementById('play').disabled = true;
    repeatRandomShape();
}

// Comparing shapes
document.getElementById('match').onclick = () => {

    if(playing) {
        matchBttn.disabled = true;
        if(Object.is(shape1, shape2)) {
        currentScore++;
        document.getElementById('score').innerHTML = currentScore;
        } else {
            currentScore--;
            document.getElementById('score').innerHTML = currentScore;
        

        }
    }
}


