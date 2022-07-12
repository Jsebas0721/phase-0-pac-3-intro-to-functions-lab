function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

whisper("Hello!");

function logShout(string){
    console.log('Hello'.toUpperCase());

}

function logWhisper(string){
    console.log('Hello'.toLowerCase());
}

const string = "Hello!";

function sayHiToHeadphonedRoommate(string){

    if(string === string.toLowerCase()){
        return string = 'I can\'t hear you!';
    }else if(string === string.toUpperCase()){
        return string = 'YES INDEED!';
    }else if(string === 'Let\'s have dinner together!'){
        return string = 'I would love to!';
    }
}

//sayHiToHeadphonedRoommate('hello!');