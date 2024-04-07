// Receives a string and returns it in all caps
function shout(string){
   return string.toUpperCase(); 
}

// Receives a string and returns it in all lowercase
function whisper(string){
    return string.toLowerCase();
}

// Takes a string and logs it in all caps
function logShout(string){
    console.log(string.toUpperCase());
}

// Takes a string and logs it in all lowercase
function logWhisper(string){
    console.log(string.toLowerCase());
}

// 
function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
        return ("I can't hear you!")
    }
    else if (string === string.toUpperCase()){
        return ("YES INDEED!")
    }
    else if (string === "Let's have dinner together!"){
        return ("I would love to!")
    }
}