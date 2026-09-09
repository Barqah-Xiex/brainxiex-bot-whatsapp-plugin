// [ ! ] YOU CAN EDIT IF YOU UNDERSTAND THE CODE BELOW [ ! ]
module.exports = function (sock) {
  const { sendMessage, config, resize, media2buffer, MyIP, func, store } = sock;
  const { Prefix, banner, Nama_Bot, apikey, baseURL, Nomor_Owner } = config;
  const {isset, sleep, axios} = func


  store.plugin.RobloxSniffer = store.plugin.RobloxSniffer || {
    state: "stop",
    target: [],
    delay: 30
  };
  

  sock.ev.on("script.start", () => {

    store.plugin.RobloxSniffer.target.forEach(detekRoblox);

    async function detekRoblox(username) {
      let last = "Offline";

      while (true) {
        if (store.plugin.RobloxSniffer.state == "stop") {
          await sleep(store.plugin.RobloxSniffer.delay * 1000);
          continue;
        }
        const res = await dariAPI(username);

        if(res.error) {
          console.error(`-------------------------------------------`)
          console.error(`===========================================`)
          console.error(`              ROBLOX SNIFFER               `)
          console.error(`                  ERROR               `)
          console.error(``)
          console.error(`${res.error}`)
          console.error(`===========================================`)
          console.error(`-------------------------------------------`)
          await sleep(store.plugin.RobloxSniffer.delay*1_000)
        }

        const info = res?.info;
        const presence = res?.userPresences;

        let ingame = presence?.lastLocation ?? "Online";

        if (ingame === "Website") ingame = "Online";
        if (presence?.status === "Offline") {
          ingame = "Offline";
          await sleep(store.plugin.RobloxSniffer.delay * 1000 * 3);
        }

        if (ingame === last) {
          continue;
        }

        last = ingame;
        const joinURL = presence?.GameURL;

        if (!joinURL) {
          await sleep(store.plugin.RobloxSniffer.delay * 1000);
          sock.sendMessage(`${Nomor_Owner}@s.whatsapp.net`, `< ${info?.displayName} ( @${info?.name} ) >\n*${ingame}*`);

          continue;
        }

        sock.sendMessage(`${Nomor_Owner}@s.whatsapp.net`, `< ${info?.displayName} ( @${info?.name} ) >\n*${ingame}*\n${joinURL}`);
        await sleep(store.plugin.RobloxSniffer.delay * 1000);
        
      }
    }

    async function dariAPI(username) {
      try {
        const { data } = await axios.post(`${baseURL}/api/tools/robloxstalk`, { apikey, username }, { headers: { nolog: true } });
        if(data.error) return data;
        return data.Barqah;
      } catch (err) {
        // console.error(err);
        return null;
      }
    }
  })
}