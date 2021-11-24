
//pad2 determines whether it has to add a 0 before a given number or take it as it is
//if the number passed is less than 10 then it adds a "0" infront of the number
const pad2=(number)=>{
    return number<10? `0${number}` : number;
}


//format time devides the amount of time to 60 then the result turns to be taken as minutes and the reminder % is concidered as seconds
//if the time passed is less than 60 then it will be concidered only as seconds
export const formatTime=(time)=>{

    const minutes= pad2(Math.floor(time /60));
    const seconds= pad2(Math.floor(time % 60));
    return `${minutes}:${seconds}`

}