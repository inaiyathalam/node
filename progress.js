const ProgressBar = require("progress")

const bar = new ProgressBar("downloading[:bar] :rate/bps :percent :etas",{
    total:20,
})

const timer = setInterval (()=>{
    bar.tick();
    if (bar.complete){
        clearInterval(timer);
    }
}, 100)

const chalk = require("chalk")
console.log(chalk.blue("This is nodejs"))