export default function two_crystal_balls(breaks: boolean[]): number {
// worst way of doing it is using linear search
    // for(let i=0;i<breaks.length;i++){
    //     if(breaks[i]){
    //         return i;
    //     }
    // }
    // return -1;
// best way of doing navigating with sqrt(breaks.length) 


    let jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i=jumpAmount;
    for(;i<breaks.length;i+=jumpAmount){
        if(breaks[i]){
            break;
        }
    }

    i -= jumpAmount;

    // we used j<=jumpAmount if the value of the first breaking point is the best breaking point(in another words there is no breaking point below this point)
    for(let j=0;j<=jumpAmount&&i<breaks.length;i++,j++){

        if(breaks[i]){
            return i;
        }
    }

    return -1;
}