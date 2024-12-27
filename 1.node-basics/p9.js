const cluster = require('cluster')

if (cluster.isWorker) {
    console.log(`new thread is running`)
} else {
    cluster.fork();
    cluster.fork();
    cluster.fork();
}