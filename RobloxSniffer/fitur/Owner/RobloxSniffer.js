const cmd = `robloxsniffer`; 
const args = `help`;
const category = `Owner`;

async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func, editMessage, player, jobName, jobID, rpg, random, achivment} = sock;
    const {chat: id, body, arg, isOwner, nyarios} = m;
    const {Prefix,banner,Nama_Bot,apikey,baseURL} = config;
    const {isset} = func

    if(!isOwner || config.isJadibot) return nyarios("kamu tidak dapat menggunakan command ini!");

    const [$1, ..._] = arg.split(" ");

    if(!store.plugin.RobloxSniffer) store.plugin.RobloxSniffer = {};
    if(!Array.isArray(store.plugin.RobloxSniffer.target)) store.plugin.RobloxSniffer.target = [];
    if(!isset(store.plugin.RobloxSniffer.state)) store.plugin.RobloxSniffer.state = "stop";
    if(!isset(store.plugin.RobloxSniffer.delay)) store.plugin.RobloxSniffer.delay = 5;

    switch ($1) {
        case "start":
            store.plugin.RobloxSniffer.state = "start"
            store.save();
            return nyarios(`*[ ok ] RobloxSniffer Started !*`);
        case "stop":
            store.plugin.RobloxSniffer.state = "stop"
            store.save();
            return nyarios(`*[ ok ] RobloxSniffer Stopped !*`);

        case "delay": {
            const delay = Number(_.join(" ").trim());

            if(!isset(delay)) return nyarios(`Gunakan: ${Prefix}${cmd} delay 30`);
            if(!Number.isFinite(delay) || delay < 9) return nyarios(`Delay harus berupa angka lebih besar dari 10 !`);

            store.plugin.RobloxSniffer.delay = delay;

            store.save();
            return nyarios(`*[ ok ] Delay Updated !*\nDelay: ${delay} detik`);
        }

        case "push":
        case "add": {
            const username = _.join(" ");
            if(!isset(username)) return nyarios(`Gunakan: ${Prefix}${cmd} add username1`);

            const fromAPI = await dariAPI(username);
            if(!fromAPI?.info?.displayName) return nyarios(`User Not Found !`);

            if(store.plugin.RobloxSniffer.target.some(x => x.toLowerCase() === username.toLowerCase())) {
                return nyarios(`User sudah ada di target !`);
            }

            store.plugin.RobloxSniffer.target.push(fromAPI.info.username);
            store.plugin.RobloxSniffer.target = [...new Set(store.plugin.RobloxSniffer.target)];

            store.save();
            return nyarios(`*[ ok ] User Found ! [ ok ]*\nDisplay Name: ${fromAPI.info.displayName}\nUsername: ${fromAPI.info.username}`);
        }

        case "rm":
        case "del":
        case "delete": {
            const username = _.join(" ");
            if(!isset(username)) return nyarios(`Gunakan: ${Prefix}${cmd} delete username1`);

            const index = store.plugin.RobloxSniffer.target.findIndex(x => x.toLowerCase() === username.toLowerCase());
            if(index === -1) return nyarios(`User tidak ditemukan di target !`);

            const removed = store.plugin.RobloxSniffer.target.splice(index, 1)[0];

            store.save();
            return nyarios(`*[ ok ] User Removed ! [ ok ]*\nUsername: ${removed}`);
        }

        case "ls":
        case "list":
        case "target": {
            const target = store.plugin.RobloxSniffer.target;

            if(!target.length) return nyarios(`Tidak ada target !`);

            store.save();
            return nyarios(`*[ RobloxSniffer Target ]*\n\n${target.map((x,i) => `${i + 1}. ${x}`).join("\n")}`);
        }

        case "status":
        case "show":
        case "info":
        case "list":
            return nyarios(
                `*[ RobloxSniffer Status ]*\n\n` +
                `State: ${store.plugin.RobloxSniffer.state}\n` +
                `Delay: ${store.plugin.RobloxSniffer.delay} detik\n` +
                `Target: ${store.plugin.RobloxSniffer.target.length}`
            );

        default:
            return nyarios(
                `*[ RobloxSniffer ]*\n\n` +
                `${Prefix}${cmd} start\n` +
                `${Prefix}${cmd} stop\n` +
                `${Prefix}${cmd} delay (detik)\n` +
                `${Prefix}${cmd} add (username)\n` +
                `${Prefix}${cmd} delete (username)\n` +
                `${Prefix}${cmd} list\n` +
                `${Prefix}${cmd} status`
            );
    }

    async function dariAPI(username) {
        try {
            const { data } = await func.axios.post(`${baseURL}/api/tools/robloxstalk`, {apikey, username}, {headers: {nolog: true}});
            if(data.error) return data;
            return data.Barqah;
        } catch(err) {
            return null;
        }
    }
}

module.exports = {cmd,args,category,message};