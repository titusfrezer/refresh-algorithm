export default function bs_list(haystack: number[], needle: number): boolean {

    let low = 0;
    let high = haystack.length;

    do {
        let middleIndex = Math.floor(low+(high-low)/2);
        let middleValue = haystack[middleIndex];

        if(middleValue === needle){
            return true;
        }
        else if(middleValue>needle){
            high = middleIndex;
        }else{
            low = middleIndex+1;
        }
    } while (low<high);

    return false;
}