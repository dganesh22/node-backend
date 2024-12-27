// dns = domain name system (server)

const dns = require('dns')

// dns.lookup(url,callback)
dns.lookup("www.facebook.com", function (err, address, family) {
    if (err) throw err;
    console.log(`address = `, address)
    console.log(`family = `, family)


    // lookupservice(address,port,callback)
    dns.lookupService(address, 22, function (err, host, service) {
        if (err) throw err
        console.log(`host = `, host)
        console.log(`service = `, service)
    });
});

/* 
www.facebook.com
address =  157.240.192.35
family =  4
host =  edge-star-mini-shv-02-bom2.facebook.com
service =  ssh (secured service hosting)

*/