function solution(angle) {
    let answer = 0;
    angle = parseInt(angle);
    
    if (0 < angle && angle < 90){
        answer = 1;
    } else if (angle === 90){
        answer = 2;
    } else if (90 < angle && angle < 180){
        answer = 3;
    } else {
        answer = 4;
    } 
    
    console.log(answer);
    return answer;
}

