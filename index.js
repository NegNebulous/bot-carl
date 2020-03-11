console.log('starting...');
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('');
bot.on('ready', () => {
    console.log('Connected');
    //bot.user.setActivity('$help');
    bot.user.setPresence({ game: { name: '$help' }, status: 'online' })
});


var input;
/*
var averageMoves = 10;
var averageN = 1;
*/
var averageMoves = 7;
const audioFiles = [`C:/Users/Dingus Khan/Documents/discordbotexperimantal/audio/Skype-ringtone.mp3`];
//'C:/Users/Dingus Khan/Documents/discordbotexperimantal/audio/Skype-ringtone.mp3'

var jsonobject;
var fileContents;
const editJsonFile = require("edit-json-file");
let file = editJsonFile(`${__dirname}/currency.json`);
var lastSaveTime = 0;
//console.log(lastSaveTime);

var joinCost = 1;

var fs = require('fs');
var path = require('path');

var jsonobjectTemp = JSON.parse(bufferFile('\h.json'));;

function bufferFile(relPath) {
    return fs.readFileSync(path.join(__dirname, relPath));
}

var date = new Date();
function getFormattedDate() {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();;
}

function saveData() {
    file.set(jsonobject);
    file.save();
}

//Math.random()
//file.set(jsonobject);
//file.save();

jsonobject = JSON.parse(bufferFile('\currency.json'));

/*
setInterval({

}, );
*/

var sendFormatted = async function(channel, message){
    return new Promise(async function(resolve, reject){
        var richEmbed = new Discord.RichEmbed();
        //change to error if too long
        if(message.length >= 256){
            richEmbed.setTitle(`:x: One or more of the arguments was too long!`);
        }else{
            richEmbed.setTitle(message);
        }
        richEmbed.setColor([0, 0, 255]);
    
        var returnMessage = await channel.send(richEmbed);
        resolve(returnMessage);
    });
}

var leaveJoinI = 0;
var leaveJoin = async function(max, channel) {
    try {
        channel.join().then(connection => {
            channel.leave()
        }).then(connection => {
            leaveJoinI += 1;
            if (leaveJoinI <= max) {
                leaveJoin(max, channel)
            }
        })
    }
    catch(error) {
        console.error(error);
    }
}

//message.member.voiceChannel.parentID
var autoShadowi = 0;
var autoShadow = async function(i, channel) {
    autoShadowi = i;
    //console.log(autoShadowi);
    autoShadow2(channel);
}
var autoShadow2 = async function(channel) {
    if (autoShadowi > 0) {
        //console.log('Created thing');
        channel.guild.createChannel('Shadow Realm', 'voice').then(chnl => {
            chnl.setParent(channel.parentID);
        }).then(poop => {
            autoShadowi = autoShadowi - 1;
            autoShadow2(channel);
        })
    }
}
bot.on('channelCreate', (chnl) => {
    if (chnl.type == 'voice') {
        if (chnl.name == 'Shadow Realm') {
            chnl.delete()
        }
    }
});

function getIdFromMsg(message) {
    
    if (message.startsWith('<@!')) {
        //console.log(message.substr(3, 18));
        return message.substr(3, 18);
    }
    else if (message.startsWith('<!')) {
        //console.log(message);
        //console.log(message.substring(2, 18));
        return message.substr(2, 18);
    }
    else if (message.startsWith('<')) {
        //console.log(message);
        //console.log(message.substr(1, 18));
        return message.substr(1, 18);
    }
    else {
        //console.log(message);
        return message;
    }
}

bot.on('channelDelete', (chnl) => {
    try {
        if (chnl.type == 'voice') {
            if ( (chnl.name + '').toLowerCase() == 'gaming 1 requiem' ) {
                //console.log();
                //console.log('recreating g1r');
                chnl.guild.createChannel('Gaiming 1 Requiem', 'voice').then(channel => {
                    channel.setParent(chnl.parentID);
                    /*
                    setTimeout(() => {  
                        channel.join()
                            .then(connection => console.log('Connected!'))
                            .catch(console.error);
                    }, 2000);
                    */
                });
                //console.log(chnl.guild);
                //chnl.parentID
    
                //console.log(chnl);
            }
        }
    }
    catch(error) {console.error(error);}
});

bot.on('channelUpdate', (chnl) => {
    try {
        if (chnl.type == 'voice') {
            /*
            if ( chnl.name == 'Shadow Realm' ) {
                chnl.setName('Gaming 1 Requiem');
            }
            else */if ( (chnl.name + '').toLowerCase() == 'gaming 1 requiem' ) {
                chnl.setName('Gaming 1 Requiem');
                //chnl.setBitRate(64);
            }
        }
    }
    catch(error) {
        console.error(error);
    }
});

bot.on('message', (message) => {    
    date = new Date();

    if (message.content.toLowerCase().startsWith('where')) {
        if (Math.random()*10 <= 1) {
            if (message.guild.id != '376779724615319552') {
                message.channel.send('Up your butt and around the corner');
            }
        }
    }

    if (message.author.bot != true) {
        //console.log((date.getTime() - lastSaveTime)/1000);
        /*
        if ( (date.getTime() - lastSaveTime)/1000 > 15 ) {
            lastSaveTime = date.getTime();
            file.set(jsonobject);
            file.save();
            //console.log('Auto saved.');
        }
        */

        //ping
        if (message.isMentioned(bot.user)) {
            message.channel.send('You\'ll die for your crimes.');
        }

        //6 hour general  664540012032950324
        if ((message.channel.id == '657004794048675870') || (message.channel.id == '664540012032950324')) {
            if (!jsonobject.value[message.author.id]) {
                jsonobject.value[message.author.id] = new Object();
                jsonobject.value[message.author.id].name = message.author.username;
                jsonobject.value[message.author.id].turd = 1;
                jsonobject.value[message.author.id].number = 22;
                jsonobject.value[message.author.id].attempts = 0;
                jsonobject.value[message.author.id].requestTo = null;
                jsonobject.value[message.author.id].requestAmount = 0;
                saveData()
            }
            if (!jsonobject.value[message.author.id].sentTime) {
                    jsonobject.value[message.author.id].sentTime = 1;
                    saveData()
            }

            if ((date.getTime() - jsonobject.value[message.author.id].sentTime)/1000 >= 21600) {
                jsonobject.value[message.author.id].sentTime = date.getTime();
                saveData()
            }
            else {
                if (message.deletable) {
                    message.delete();
                    console.log(message.author.username + ': ' + message.content);
                }
            }
        }
    
        //comands
        if (message.content.startsWith('$')) {
            if (!jsonobject.value[message.author.id]) {
                jsonobject.value[message.author.id] = new Object();
                jsonobject.value[message.author.id].name = message.author.username;
                jsonobject.value[message.author.id].turd = 1;
                jsonobject.value[message.author.id].number = 22;
                jsonobject.value[message.author.id].attempts = 0;
                jsonobject.value[message.author.id].requestTo = null;
                jsonobject.value[message.author.id].requestAmount = 0;
                saveData()
            }

            console.log('');
            console.log(getFormattedDate());

            var msg = message;
            var msgPS = msg.content.substr(1, msg.content.length);
            input = msgPS.split(' ');

            //turd, check # of turds
            if ((input[0] == 'turd') || (input[0] == 'turds')) {
                if (input[1]) {
                    try {
                        msg.channel.send(jsonobject.value[getIdFromMsg(input[1])].name + ' has ' + jsonobject.value[getIdFromMsg(input[1])].turd + ' turds.');
                    }
                    catch{}
                }
                else {
                    //console.log(msg.author.username + ' has ' + jsonobject.value[msg.author.id].turd + ' turds');
                    msg.channel.send(msg.author.username + ' has ' + jsonobject.value[msg.author.id].turd + ' turds');
                    if ((jsonobject.value[msg.author.id].turd + '').length >= 2) {
                        //console.log('1, ' + (jsonobject.value[msg.author.id].turd + '').substring(0, 2));
                        if ( (jsonobject.value[msg.author.id].turd + '').substring(0, 2) == '69' ) {
                            msg.channel.send('Nice.');
                        }
                    }
                    if ((jsonobject.value[msg.author.id].turd + '').length >= 4) {
                        //console.log('2, ' + (jsonobject.value[msg.author.id].turd + '').substring(((jsonobject.value[msg.author.id].turd + '').length - 2), (jsonobject.value[msg.author.id].turd + '')) );
                        if ( (jsonobject.value[msg.author.id].turd + '').substring(((jsonobject.value[msg.author.id].turd + '').length - 2), (jsonobject.value[msg.author.id].turd + '')) == '69' ) {
                            msg.channel.send('Nice.');
                        }
                    }
                }
            }
            //number guessing
            //var temp = msg.substr(0, 1);
            else if (input[0] == 'gn') {
                if ((input[1] < 100) && (input[1] > 0)) {
                    //jsonobject.value[msg.author.id].attempts
                    //jsonobject.value[msg.author.id].number
                    if (input[1] == jsonobject.value[msg.author.id].number) {
                        if ( averageMoves - jsonobject.value[msg.author.id].attempts >= 0 ) {
                            msg.channel.send('Nice, you got the number. You took ' + jsonobject.value[msg.author.id].attempts + ' turns and will gain ' + (averageMoves - jsonobject.value[msg.author.id].attempts) + ' turds.');
                        }
                        else {
                            msg.channel.send('Nice, you got the number. You took ' + jsonobject.value[msg.author.id].attempts + ' turns and will lose ' + (averageMoves - jsonobject.value[msg.author.id].attempts) + ' turds.');
                        }
                        jsonobject.value[msg.author.id].turd += averageMoves - jsonobject.value[msg.author.id].attempts;
                        jsonobject.value[msg.author.id].attempts = 0;
                        jsonobject.value[msg.author.id].number = Math.round(Math.random()*98 + 1);
                        saveData()
                    }
                    else {
                        if (input[1] > jsonobject.value[msg.author.id].number) {
                            msg.channel.send('Lower.');
                        }
                        else {
                            msg.channel.send('Higher.');
                        }
                        jsonobject.value[msg.author.id].attempts++;
                    }
                }
                else {
                    msg.channel.send('Guess a number between 1 and 99.');
                }
            }
            else if (input[0] == 'help') {
                objtemp = JSON.parse(bufferFile('\command.json'));
                if (!input[1]) {
                    var msgsend = '';
                    msgsend = msgsend + 'commands: ';
                    for (var i = 0; i < Object.keys(objtemp.command).length; i++) {
                        msgsend = msgsend + '\n    ' + objtemp.command[Object.keys(objtemp.command)[i]].name + ': ' + objtemp.command[Object.keys(objtemp.command)[i]].description;
                    }
                    msg.channel.send('```' + msgsend + '```');
                }
                else {
                    for (var i = 0; i < Object.keys(objtemp.command).length; i++) {
                        if (objtemp.command[Object.keys(objtemp.command)[i]].name == input[1]) {
                            //var msgsend = (objtemp.command[Object.keys(objtemp.command)[i]].name  + ':\n    Syntax: ' + '`' + objtemp.command[Object.keys(objtemp.command)[i]].syntax + '`' + '\n    Example: ' + '`' + objtemp.command[Object.keys(objtemp.command)[i]].example + '`');
                            var msgsend = (objtemp.command[Object.keys(objtemp.command)[i]].name  + ':\n    Syntax: ' + objtemp.command[Object.keys(objtemp.command)[i]].syntax + '\n    Example: ' + objtemp.command[Object.keys(objtemp.command)[i]].example);
                            msg.channel.send('```' + msgsend + '```');
                        }
                    }
                }
            }
            else if (input[0] == 'bet') {
                try {
                    if (input[1] == 'accept') {
                        if (input[2]) {
                            if ( jsonobject.value[getIdFromMsg(input[2])].requestTo == msg.author.id ) {
                                jsonobject.value[getIdFromMsg(input[2])].requestTo = null;
                                if ( Math.round(Math.random()) == 1 ) {
                                    jsonobject.value[getIdFromMsg(input[2])].turd += jsonobject.value[getIdFromMsg(input[2])].requestAmount;
                                    jsonobject.value[msg.author.id].turd -= jsonobject.value[getIdFromMsg(input[2])].requestAmount;
                                    msg.channel.send( jsonobject.value[getIdFromMsg(input[2])].name + '(' + (jsonobject.value[getIdFromMsg(input[2])].turd - jsonobject.value[getIdFromMsg(input[2])].requestAmount) + ' + ' + jsonobject.value[getIdFromMsg(input[2])].requestAmount + ') ' + ' won ' + jsonobject.value[getIdFromMsg(input[2])].requestAmount + ' turds from ' + msg.author.username + '(' + (jsonobject.value[msg.author.id].turd + jsonobject.value[getIdFromMsg(input[2])].requestAmount) + ' - ' + jsonobject.value[getIdFromMsg(input[2])].requestAmount + ').');
                                    jsonobject.value[getIdFromMsg(input[2])].requestAmount = 0;
                                }
                                else {
                                    jsonobject.value[getIdFromMsg(input[2])].turd -= jsonobject.value[getIdFromMsg(input[2])].requestAmount;
                                    jsonobject.value[msg.author.id].turd += jsonobject.value[getIdFromMsg(input[2])].requestAmount;
                                    msg.channel.send( msg.author.username + '(' + (jsonobject.value[msg.author.id].turd - jsonobject.value[getIdFromMsg(input[2])].requestAmount) + ' + ' + jsonobject.value[getIdFromMsg(input[2])].requestAmount + ') ' + ' won ' + jsonobject.value[getIdFromMsg(input[2])].requestAmount + ' turds from ' + jsonobject.value[getIdFromMsg(input[2])].name + '(' + (jsonobject.value[getIdFromMsg(input[2])].turd + jsonobject.value[getIdFromMsg(input[2])].requestAmount) + ' - ' + jsonobject.value[getIdFromMsg(input[2])].requestAmount + ').');
                                    jsonobject.value[getIdFromMsg(input[2])].requestAmount = 0;
    
                                }
                            }
                            else {
                                msg.channel.send('That user has not requested a bet with you.');
                            }
                        }
                    }
                    else if ((input[1]) && (input[2])) {
                        //jsonobject.value[input[2].substr(2, 18)].name
                        //getIdFromMsg
                        try {
                            jsonobject.value[msg.author.id].requestAmount = parseInt(input[2]);
                            if (jsonobject.value[msg.author.id].requestAmount <= 0) {
                                jsonobject.value[msg.author.id].requestAmount = 0;
                                ajsbdabsdbasbndj
                            }
                            if ( ((jsonobject.value[msg.author.id].turd - jsonobject.value[msg.author.id].requestAmount) >= 0) && ((jsonobject.value[getIdFromMsg(input[1])].turd - jsonobject.value[msg.author.id].requestAmount) >= 0) ) {
                                msg.channel.send('Request pending...');
                                jsonobject.value[msg.author.id].requestTo = getIdFromMsg(input[1]);
                            }
                            else {
                                msg.channel.send('1 or more users do not have enough turds');
                                jsonobject.value[msg.author.id].requestAmount = null;
                            }
                        }
                        catch(error) {
                            msg.channel.send('Invalid amount');
                        }
                    }
                    else {
                        msg.channel.send('Incorrent syntax.');
                    }
                    saveData()
                }
                catch(error) {
                    msg.channel.send('Something went wrong');
                }
            }
            else if (input[0] == 'join') {
                //let tempChannel = client.channels.find('name', 'Gaming 1 Requiem');
                //tempChannel.join();
                if (jsonobject.value[msg.author.id].turd - joinCost >= 0) {
                    /*
                    msg.member.voiceChannel.join()
                    jsonobject.value[msg.author.id].turd = jsonobject.value[msg.author.id].turd - joinCost;
                    msg.channel.send('Joining');
                    let tempSDFSDFSDF = msg.member.voiceChannel;
                    setTimeout(() => {  
                        try {
                            tempSDFSDFSDF.leave()
                            saveData()
                        }
                        catch {}
                    }, 1800000);
                    */
                    try {
                        var joinCount = parseInt(input[1]);
                        if (joinCount >= 0) {
                            if ((jsonobject.value[msg.author.id].turd - (joinCost*joinCount)) >= 0) {
                                jsonobject.value[msg.author.id].turd = jsonobject.value[msg.author.id].turd - (joinCost*joinCount);
                                leaveJoinI = 0;
                                leaveJoin(joinCount, msg.member.voiceChannel)
                            }
                            else {
                                msg.channel.send('Insufficient funds.');
                            }
                        }
                    }
                    catch(error) {console.error(error);}
                }
                else {
                    msg.channel.send('Insufficient funds. ' + joinCost + ' turds required.');
                }
            }
            else if (input[0] == 'leave') {
                //let tempChannel = client.channels.find('name', 'Gaming 1 Requiem');
                //tempChannel.join();
                if (jsonobject.value[msg.author.id].turd - joinCost*5 >= 0) {
                    msg.member.voiceChannel.leave()
                    jsonobject.value[msg.author.id].turd = jsonobject.value[msg.author.id].turd - joinCost*2;
                    saveData()
                }
                else {
                    msg.channel.send('Insufficient funds. ' + joinCost*2 + ' turds required.');
                }
            }
            else if (input[0] == 't') {
                if (!jsonobjectTemp.value[getIdFromMsg(msg.author.id)]) {
                    jsonobjectTemp.value[getIdFromMsg(msg.author.id)] = new Object();
                    jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB = [':zero:', ':one:', ':two:', ':three:', ':four:', ':five:', ':six:', ':seven:', ':eight:'];
                }

                if (input[1]) {
                    var tempInt;
                    try{
                        tempInt = parseInt(input[1]);
                    }
                    catch{
                        tempInt = (Math.round(Math.random()*8));
                    }

                    if (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[tempInt] != ':o:') {
                        jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[tempInt] = ':x:';
                    }

                    tempInt = (Math.round(Math.random()*8));
                    var tempInt2 = 0;
                    var tempBool = true;
                    while((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[tempInt] == ':x:') || (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[tempInt] == ':o:')) {
                        tempInt = (Math.round(Math.random()*8));
                        tempInt2++;
                        if (tempInt2 >= 100) {
                            jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB = [':zero:', ':one:', ':two:', ':three:', ':four:', ':five:', ':six:', ':seven:', ':eight:'];
                            msg.channel.send('Tie. No change ');
                            tempBool = false;
                            break;
                        }
                    }
                    if (tempBool) {
                        tempBool = false;
                        jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[tempInt] = ':o:';

                        var temp = ':x:';
                        var tttGain = 1;
                        if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[0] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[1] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[2] == temp)) {
                            msg.channel.send(temp + ' wins. You gained ' + tttGain + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd + tttGain;
                        }
                        else if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[3] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[4] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[5] == temp)) {
                            msg.channel.send(temp + ' wins. You gained ' + tttGain + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd + tttGain;
                        }
                        else if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[6] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[7] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[8] == temp)) {
                            msg.channel.send(temp + ' wins. You gained ' + tttGain + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd + tttGain;
                        }
                        else if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[0] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[3] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[6] == temp)) {
                            msg.channel.send(temp + ' wins. You gained ' + tttGain + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd + tttGain;
                        }
                        else if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[1] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[4] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[7] == temp)) {
                            msg.channel.send(temp + ' wins. You gained ' + tttGain + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd + tttGain;
                        }
                        else if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[2] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[5] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[8] == temp)) {
                            msg.channel.send(temp + ' wins. You gained ' + tttGain + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd + tttGain;
                        }
                        else if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[0] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[4] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[8] == temp)) {
                            msg.channel.send(temp + ' wins. You gained ' + tttGain + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd + tttGain;
                        }
                        else if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[2] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[4] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[6] == temp)) {
                            msg.channel.send(temp + ' wins. You gained ' + tttGain + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd + tttGain;
                        }

                        var temp = ':o:';
                        if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[0] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[1] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[2] == temp)) {
                            msg.channel.send(temp + ' wins. You lose ' + tttGain*50 + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd - tttGain*50;
                        }
                        else if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[3] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[4] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[5] == temp)) {
                            msg.channel.send(temp + ' wins. You lose ' + tttGain*50 + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd - tttGain*50;
                        }
                        else if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[6] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[7] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[8] == temp)) {
                            msg.channel.send(temp + ' wins. You lose ' + tttGai*50n + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd - tttGain*50;
                        }
                        else if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[0] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[3] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[6] == temp)) {
                            msg.channel.send(temp + ' wins. You lose ' + tttGain*50 + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd - tttGain*50;
                        }
                        else if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[1] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[4] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[7] == temp)) {
                            msg.channel.send(temp + ' wins. You lose ' + tttGain*50 + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd - tttGain*50;
                        }
                        else if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[2] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[5] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[8] == temp)) {
                            msg.channel.send(temp + ' wins. You lose ' + tttGain*50 + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd - tttGain*50;
                        }
                        else if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[0] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[4] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[8] == temp)) {
                            msg.channel.send(temp + ' wins. You lose ' + tttGain*50 + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd - tttGain*50;
                        }
                        else if (((jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[2] == temp) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[4] == temp)) && (jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB[6] == temp)) {
                            msg.channel.send(temp + ' wins. You lose ' + tttGain*50 + ' turds.');
                            tempBool = true;
                            jsonobject.value[getIdFromMsg(msg.author.id)].turd = jsonobject.value[getIdFromMsg(msg.author.id)].turd - tttGain*50;
                        }
                        saveData()
                    }
                }

                //msg.channel.send(jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB);
                var temp = jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB;
                var temp2 = '\n--------------\n';
                //msg.channel.send('|' + ' ' + '|');
                msg.channel.send('|' + temp[0] + '|' + temp[1] + '|' + temp[2] + '|' + temp2 + '|' + temp[3] + '|' + temp[4] + '|' + temp[5] + '|' + temp2 + '|' + temp[6] + '|' + temp[7] + '|' + temp[8] + '|');
                //msg.channel.send(jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB.substr(0, 3) + '\n' + jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB.substr(3, 3) + '\n' + jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB.substr(6, 3));
                if (tempBool) {
                    jsonobjectTemp.value[getIdFromMsg(msg.author.id)].tttB = [':zero:', ':one:', ':two:', ':three:', ':four:', ':five:', ':six:', ':seven:', ':eight:'];
                }
            }
            else if (input[0] == 'hlep') {
                try {
                    msg.channel.guild.createChannel('hhhhhh', 'voice').then(chnl => {
                        console.log(chnl.id);
                        var h = chnl.id;
                    });
                }
                catch(error) {console.error(error);}
            }
            else if (msg.author.id == 203206356402962432) {
                if (input[0] == 'save') {
                    saveData()
                    msg.channel.send('Saved.');
                }
                else if (input[0] == 'say') {
                    if (msg.deletable) {
                        msg.delete();
                    }
                    msg.channel.send(msg.content.substring(5, msg.content.length));
                }
                else if (input[0] == 'gtime') {
                    console.log(lastSaveTime);
                    msg.channel.send('15s');
                    lastSaveTime = date.getTime();
                    console.log(lastSaveTime);
                }
                else if (input[0] == 'load') {
                    jsonobject = JSON.parse(bufferFile('\currency.json'));
                    msg.channel.send('Loaded from file.');
                }
                else if (input[0] == 'set') {
                    if (input[1] == 'turd') {
                        //console.log(input[2]);
                        if (input[3]) {
                            //getIdFromMsg
                            console.log('Set ' + jsonobject.value[getIdFromMsg(input[2])].name + '\'s turds to ' + parseInt(input[3]));
                            msg.channel.send('Set ' + jsonobject.value[getIdFromMsg(input[2])].name + '\'s turds to ' + parseInt(input[3]));
                            jsonobject.value[getIdFromMsg(input[2])].turd = parseInt(input[3]);
                        }
                    }
                    else if (input[1] == 'num') {
                        if (input[3]) {
                            //getIdFromMsg
                            console.log('Set ' + jsonobject.value[getIdFromMsg(input[2])].name + '\'s number to ' + parseInt(input[3]));
                            msg.channel.send('Set ' + jsonobject.value[getIdFromMsg(input[2])].name + '\'s number to ' + parseInt(input[3]));
                            jsonobject.value[getIdFromMsg(input[2])].number = parseInt(input[3]);
                        }
                    }
                    saveData()
                }
                else if (input[0] == 'add') {
                    if (input[1] == 'turd') {
                        //console.log(input[2]);
                        if (input[3]) {
                            //getIdFromMsg
                            console.log('Added ' + parseInt(input[3]) + ' to '  + jsonobject.value[getIdFromMsg(input[2])].name + '\'s turds');
                            msg.channel.send('Added ' + parseInt(input[3]) + ' to '  + jsonobject.value[getIdFromMsg(input[2])].name + '\'s turds');
                            jsonobject.value[input[2]].turd += parseInt(input[3]);
                        }
                    }
                    saveData()
                }
                else if (input[0] == 'sub') {
                    if (input[1] == 'turd') {
                        //console.log(input[2]);
                        if (input[3]) {
                            //getIdFromMsg
                            console.log('Subtracted ' + parseInt(input[3]) + ' turds from '  + jsonobject.value[getIdFromMsg(input[2])].name);
                            msg.channel.send('Subtracted ' + parseInt(input[3]) + ' turds from '  + jsonobject.value[getIdFromMsg(input[2])].name);
                            jsonobject.value[input[2]].turd -= parseInt(input[3]);
                        }
                    }
                    saveData()
                }
                else if (input[0] == 'sayy') {
                    sendFormatted(msg.channel, msg.content.substr(6, msg.content.length))
                    msg.delete();
                }
                else if (input[0] == 'restart') {
                    msg.channel.send('no');
                }
                else if (input[0] == 'rt') {
                    jsonobject.value[message.author.id].sentTime = 1;
                }
                else if (input[0] == 'jjoin') {
                    if (input[1]) {
                        leaveJoinI = 0;
                        leaveJoin(parseInt(input[1]), msg.member.voiceChannel)
                        /*
                        for (var i = 0; i < parseInt(input[1]); i++) {
                            msg.member.voiceChannel.join().then(connection => {
                                msg.member.voiceChannel.leave()
                            })
                        */
                    }
                    else {
                        //let tempChannel = client.channels.find('name', 'Gaming 1 Requiem');
                        //tempChannel.join();
                        msg.member.voiceChannel.join().then(connection =>{
                            
                            const dispatcher = connection.playFile('C:/Users/Dingus Khan/Documents/discordbotexperimantal/audio/Skype-ringtone.mp3');
                            dispatcher.on("end", end => {msg.member.voiceChannel.leave()});
                        })
                        //playFile(audioFiles[0]);
                    }
                }
                else if (input[0] == 'lleave') {
                    //let tempChannel = client.channels.find('name', 'Gaming 1 Requiem');
                    //tempChannel.join();
                    msg.member.voiceChannel.leave()
                }
                else if (input[0] == 'shadow') {
                    //console.log('Ran thing');
                    autoShadow(parseInt(input[1]), msg.member.voiceChannel);
                }
                else if (input[0] == 'hhelp') {
                    //console.log('funny poo');
                    objtemp = JSON.parse(bufferFile('\command.json'));

                    /*
                    for (var i = 0; i < Object.keys(objtemp.adminCommand).length; i++) {
                        //var msgsend = (objtemp.command[Object.keys(objtemp.command)[i]].name  + ':\n    Syntax: ' + '`' + objtemp.command[Object.keys(objtemp.command)[i]].syntax + '`' + '\n    Example: ' + '`' + objtemp.command[Object.keys(objtemp.command)[i]].example + '`');
                        var msgsend = (objtemp.adminCommand[Object.keys(objtemp.adminCommand)[i]].name  + ':\n    Syntax: ' + objtemp.adminCommand[Object.keys(objtemp.adminCommand)[i]].syntax);
                        msg.channel.send('```' + msgsend + '```');
                        //console.log('funny poo');
                    }*/

                    var msgsend = '';
                    msgsend = msgsend + 'Admin Commands: ';
                    for (var i = 0; i < Object.keys(objtemp.adminCommand).length; i++) {
                        msgsend = msgsend + '\n    ' + objtemp.adminCommand[Object.keys(objtemp.adminCommand)[i]].name + ': ' + objtemp.adminCommand[Object.keys(objtemp.adminCommand)[i]].syntax;
                    }
                    msg.channel.send('```' + msgsend + '```');
                }
                /*
                else {
                    if (input[0].length > 32) {
                        msg.channel.send('no such command:\n    ' + '`' + input[0].substr(0, 8) + '`');
                    }
                    else {
                        msg.channel.send('no such command:\n    ' + '`' + input[0] + '`');
                    }
                }
                */
            }
            /*
            else {
                if (input[0].length > 32) {
                    msg.channel.send('no such command:\n    ' + '`' + input[0].substr(0, 8) + '`');
                }
                else {
                    msg.channel.send('no such command:\n    ' + '`' + input[0] + '`');
                }
            }
            */

            //console.log(msg.author.username + ' ran \'' + input[0] + '\', userId: ' + msg.author.id);
            console.log(msg.content);
            console.log(jsonobject.value[msg.author.id]);
        }
    }
    else {
        if (getIdFromMsg(message.author.id) == '544581480144175104') {
            if (message.content.endsWith('I\'m Bad Byte Games Bot!')) {
                message.channel.send('^');
            }
        }
    }
});

/*
    if (rng4 == 420) {
        var channels = bot.channels.array();
        for (var i = 0;i < channels.length; i++){
            if(channels[i].name == 'general'){
                channels[i].send("Hey, hey, guess what the secret number is?")
            }
        }

    }
*/