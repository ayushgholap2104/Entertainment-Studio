const dns = require("dns");

dns.lookup("smtp.gmail.com", { family: 4 }, (err, address) => {
  console.log("IPv4:", err || address);
});

dns.lookup("smtp.gmail.com", { family: 6 }, (err, address) => {
  console.log("IPv6:", err || address);
});