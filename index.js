var rpc = require("discord-rpc")
const client = new rpc.Client({ 
	transport: 'ipc' 
})
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "🌹 AustralisHosting 🌹",
state: "🌴Europe Game Servers Hosting🌴",
assets : {
large_image : "logo",
large_text : "🌹 Australis-Hosting.com 🌹"
},
buttons : [{label : "Australis-Hosting WebSite" , url : "https://australis-hosting.com"},{label : "My links", url : "https://links.bunny-hop.net/seenkid"}]
}
})
})
client.login({ 
	clientId : "583383813497815080" 
}).catch(console.error);
