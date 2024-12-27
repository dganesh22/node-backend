// cluster module

/* 
    single thread -> isMaster 
    multi thread ->  isWorker 
*/

const cluster = require('cluster')

if (cluster.isMaster) {
    console.log(`nodejs is running in single thread`)
}