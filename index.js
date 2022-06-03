var FancierRunning = false
var FancyStyles = {
    Typewriter: "KN0QzlfM5YfzWgnEyYz6",
    Spaces: "ezBWlGjH2vm5XJETKgET"
};

function Wait(Int) {
    return new Promise(resolve => setTimeout(resolve, Int * 1000))
}

/**
 * 
 * @param {String} Message 
 * @param {Boolean} Delay 
 * @param {String} Type 
 */
async function PrettierLog(Message, Delay, Type = "KN0QzlfM5YfzWgnEyYz6") {
    var str = "";
    if(FancierRunning) {
        while(FancierRunning) {
            await Wait(0.25)
        }
    }
    if(Type == "KN0QzlfM5YfzWgnEyYz6") {
        for(let i = 0; i < Message.length; i++) {
            str += Message[i]
            console.clear()
            console.log(str)
            await Wait(0.10)
        }
    }
    if(Type == "ezBWlGjH2vm5XJETKgET") {
        for(let i = 0; i < Message.length; i++) {
            str += Message[i] + " "
            console.clear()
            console.log(str)
            await Wait(0.10)
        }
    }
    if(Delay) {
        await Wait(1)
    }
}

module.exports = {
    PrettierLog,
    FancyStyles
};