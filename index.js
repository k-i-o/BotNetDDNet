import ddnet from './ddnet/index.js';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

const numClients = args.numClients || 1;
const baseName = args.baseName || 'client';
const serverIp = args.ip;
const serverPort = args.port || 8303;

function createClient(index) {
    let client = new ddnet.Client(serverIp, serverPort, {
        identity: {
            name: `${baseName}${index}`,
            clan: "",
            country: 0,
            skin: "greyfox",
            use_custom_color: 1,
            color_body: "#965CFF",
            color_feet: "#965CFF",
        }
    });

    client.connect();

    client.on("connected", () => {
        console.log(`${baseName}${index} connected`);
    });

    client.on("disconnect", reason => {
        console.log(`${baseName}${index} disconnected: ${reason}`);
        client = null;
    });

    client.on("message", async (pkg) => {
        let author = pkg.author?.ClientInfo?.name;
        let message = pkg.message;
        if(message.includes("IP")) {
            console.log(`${author}: ${message}`);
        }
        
    });
}

for (let i = 0; i < numClients; i++) {
    createClient(i);
}