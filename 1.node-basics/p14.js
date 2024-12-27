// os module

const os = require('os')

console.log(`user info = `, os.userInfo())
console.log(`uptime = `, os.uptime())


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    arch: os.arch(),
    cpu: os.cpus(),
    avgLoad: os.loadavg()
}

console.log(`current os =`, currentOs)