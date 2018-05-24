import {Status} from '../Components/Common';

const badMessages = {
    smoke:'Uh oh! You may have trouble getting fresh and beautiful air today. We\'d recommend you rather stay home.',
    humidity:'Did you grab your napkins? It\'s going to be all sweaty-sweaty today.',
    temperature:'We don\'t want to upset you, but it\'s really hot out there today. Take care!',
    rain:'It\'s raining... We\'d recommend you to keep an umbrella with you, or raincoats?',
    ldr:'Lighting conditions are not asthetic. You might want to adjust lights?',
}

const goodMessages = {
    smoke:'Air is fresh outside! Leave your phone for a moment, and take a walk.',
    humidity:'Humidity is not your problem for now.',
    temperature:'Neither too hot, neither too cool, anyways it\'s cool right?',
    rain:'Not raining right now.',
    ldr:'Perfect lighting conditions indeed have a positive psychological effect',
}

export default (name, status) =>{
    if(status == Status.NORMAL){
        return goodMessages[name];
    }else{
        return badMessages[name];
    }
}