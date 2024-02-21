var rpc = require("discord-rpc")
const client = new rpc.Client({ 
	transport: 'ipc' 
})
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "🌹 AustralisHosting 🌹",
state: "🌴 Hébergeur Européen 🌴",
assets : {
large_image : "logo",
large_text : "🌹 Australis-Hosting.com 🌹"
},
buttons : [{label : "Site web" , url : "https://australis-hosting.com"},{label : "Liens utiles", url : "https://solo.to/australishosting"}]
}
})
})
client.login({ 
	clientId : "583383813497815080" 
}).catch(console.error);
