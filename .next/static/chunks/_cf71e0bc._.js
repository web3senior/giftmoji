(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/util/api.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Get local token
 * @returns string
 */ __turbopack_context__.s({
    "addEvent": (()=>addEvent),
    "addUp": (()=>addUp),
    "checkUser": (()=>checkUser),
    "forgotPassword": (()=>forgotPassword),
    "getAllProduct": (()=>getAllProduct),
    "getBanner": (()=>getBanner),
    "getCarousel": (()=>getCarousel),
    "getCategory": (()=>getCategory),
    "getChillwhale": (()=>getChillwhale),
    "getClaim": (()=>getClaim),
    "getComment": (()=>getComment),
    "getConfig": (()=>getConfig),
    "getCooking": (()=>getCooking),
    "getDashboard": (()=>getDashboard),
    "getEvent": (()=>getEvent),
    "getEventChart": (()=>getEventChart),
    "getInvoice": (()=>getInvoice),
    "getIsValidToken": (()=>getIsValidToken),
    "getLeaderboard": (()=>getLeaderboard),
    "getPages": (()=>getPages),
    "getPlayer": (()=>getPlayer),
    "getProduct": (()=>getProduct),
    "getProductDetail": (()=>getProductDetail),
    "getProductList": (()=>getProductList),
    "getProfile": (()=>getProfile),
    "getTicket": (()=>getTicket),
    "getTournamentList": (()=>getTournamentList),
    "getView": (()=>getView),
    "getViewChart": (()=>getViewChart),
    "invoiceUpdate": (()=>invoiceUpdate),
    "newComment": (()=>newComment),
    "newRecord": (()=>newRecord),
    "newTicket": (()=>newTicket),
    "paymentSMS": (()=>paymentSMS),
    "serverDate": (()=>serverDate),
    "signIn": (()=>signIn),
    "signUp": (()=>signUp),
    "updateProfile": (()=>updateProfile),
    "updateTelegramId": (()=>updateTelegramId),
    "updateTicket": (()=>updateTicket),
    "updateUser": (()=>updateUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("util/api.js")}`;
    }
};
const getLocalToken = ()=>{
    if (localStorage.getItem('token') === null) return;
    return localStorage.getItem('token').slice(1, localStorage.getItem('token').length - 1);
};
async function getCarousel() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}carousel`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getClaim() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}claim`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getChillwhale() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}chillwhale`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getCooking() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}cooking`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getAllProduct() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}allProduct`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getCategory() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}category`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getProduct() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}product`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getProductList(filter) {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const params = new URLSearchParams(filter).toString();
    console.log(params);
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}productList?${params}`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getProductDetail(id) {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}productDetail/${id}`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getComment(id) {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}comment/get/${id}`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function newComment(post, id) {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getLocalToken()}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(post),
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}comment/new/${id}`, requestOptions);
    if (!response.ok) {
        throw new Response('Failed to ', {
            status: 500
        });
    }
    return response.json();
}
async function invoiceUpdate(post, id) {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getLocalToken()}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(post),
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}invoiceUpdate/${id}`, requestOptions);
    if (!response.ok) {
        throw new Response('Failed to ', {
            status: 500
        });
    }
    return response.json();
}
async function paymentSMS(id) {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getLocalToken()}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify([]),
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}paymentSMS/${id}`, requestOptions);
    if (!response.ok) {
        throw new Response('Failed to ', {
            status: 500
        });
    }
    return response.json();
}
async function getPages() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}pages`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getBanner() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}banner`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function signIn(post) {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(post),
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}signIn`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function signUp(post) {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(post),
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}signUp`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function forgotPassword(post) {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(post),
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}forgotPassword`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getIsValidToken() {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getLocalToken()}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}isValidToken`, requestOptions);
    if (!response.ok) {
        throw new Response('Failed to ', {
            status: 500
        });
    }
    return response.json();
}
async function getDashboard() {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getLocalToken()}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}dashboard`, requestOptions);
    if (!response.ok) {
        throw new Response('Failed to ', {
            status: 500
        });
    }
    return response.json();
}
async function getProfile() {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getLocalToken()}`);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}profile/get`, requestOptions);
    if (!response.ok) {
        throw new Response('Failed to ', {
            status: 500
        });
    }
    return response.json();
}
async function getTicket() {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getLocalToken()}`);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}ticket/get`, requestOptions);
    if (!response.ok) {
        throw new Response('Failed to ', {
            status: 500
        });
    }
    return response.json();
}
async function newTicket(post) {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getLocalToken()}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(post),
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}ticket/new`, requestOptions);
    if (!response.ok) {
        throw new Response('Failed to ', {
            status: 500
        });
    }
    return response.json();
}
async function updateTicket(data, id) {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getLocalToken()}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}ticket/update/${id}`, requestOptions);
    if (!response.ok) {
        throw new Response('Failed to ', {
            status: 500
        });
    }
    return response.json();
}
async function updateProfile(post) {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getLocalToken()}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(post),
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}profile/update`, requestOptions);
    if (!response.ok) {
        throw new Response('Failed to ', {
            status: 500
        });
    }
    return response.json();
}
async function getInvoice() {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getLocalToken()}`);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost/lavenirestapi/v1/")}invoice`, requestOptions);
    if (!response.ok) {
        throw new Response('Failed to ', {
            status: 500
        });
    }
    return response.json();
}
async function newRecord(post) {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(post),
        redirect: 'follow'
    };
    const response = await fetch(`${__TURBOPACK__import$2e$meta__.env.VITE_API_URL}newRecord`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function serverDate() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${__TURBOPACK__import$2e$meta__.env.VITE_API_URL}serverDate/`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getTournamentList(filter = '') {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const params = new URLSearchParams({
        filter: filter
    }).toString();
    const response = await fetch(`${__TURBOPACK__import$2e$meta__.env.VITE_API_URL}tournamentList?${params}`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getLeaderboard(tournamentId) {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${__TURBOPACK__import$2e$meta__.env.VITE_API_URL}leaderboard/${tournamentId}`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getPlayer(tournamentId, walletAddr) {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${__TURBOPACK__import$2e$meta__.env.VITE_API_URL}player/${tournamentId}/${walletAddr}`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getEvent(wallet_addr) {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const params = new URLSearchParams({
        wallet_addr: wallet_addr
    }).toString();
    const response = await fetch(`${__TURBOPACK__import$2e$meta__.env.VITE_API_URL}event/get?${params}`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getEventChart(wallet_addr) {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const params = new URLSearchParams({
        wallet_addr: wallet_addr
    }).toString();
    const response = await fetch(`${__TURBOPACK__import$2e$meta__.env.VITE_API_URL}event/chart?${params}`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getView(wallet_addr) {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const params = new URLSearchParams({
        wallet_addr: wallet_addr
    }).toString();
    const response = await fetch(`${__TURBOPACK__import$2e$meta__.env.VITE_API_URL}view/get?${params}`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function addEvent(username, event, name) {
    let requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };
    const params = new URLSearchParams({
        username: username,
        event: event,
        name: name
    }).toString();
    const response = await fetch(`${__TURBOPACK__import$2e$meta__.env.VITE_API_URL}event/add?${params}`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getViewChart(wallet_addr) {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const params = new URLSearchParams({
        wallet_addr: wallet_addr
    }).toString();
    const response = await fetch(`${__TURBOPACK__import$2e$meta__.env.VITE_API_URL}view/chart?${params}`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function getConfig(username, addr = '') {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const params = new URLSearchParams({
        username: username,
        wallet_addr: addr
    }).toString();
    const response = await fetch(`${__TURBOPACK__import$2e$meta__.env.VITE_API_URL}config/get?${params}`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function addUp(post) {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(post),
        redirect: 'follow'
    };
    const response = await fetch(`${__TURBOPACK__import$2e$meta__.env.VITE_API_URL}up/add`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function checkUser(post, wallet_addr) {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(post),
        redirect: 'follow'
    };
    const params = new URLSearchParams({
        wallet_addr: wallet_addr
    }).toString();
    const response = await fetch(`${__TURBOPACK__import$2e$meta__.env.VITE_API_URL}user/check?${params}`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function updateUser(post, wallet_addr) {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(post),
        redirect: 'follow'
    };
    const params = new URLSearchParams({
        wallet_addr: wallet_addr
    }).toString();
    const response = await fetch(`${__TURBOPACK__import$2e$meta__.env.VITE_API_URL}user/update?${params}`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
async function updateTelegramId(post, wallet_addr) {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(post),
        redirect: 'follow'
    };
    const params = new URLSearchParams({
        wallet_addr: wallet_addr
    }).toString();
    const response = await fetch(`${__TURBOPACK__import$2e$meta__.env.VITE_API_URL}user/telegram?${params}`, requestOptions);
    if (!response.ok) throw new Response('Failed to get data', {
        status: 500
    });
    return response.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/abi/giftmoji.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_fee\",\"type\":\"uint8\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"EnforcedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpectedPause\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"emojiId\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"metadata\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"string\",\"name\":\"emoji\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"EmojiAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"emojiId\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"string\",\"name\":\"emoji\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"}],\"name\":\"EmojiUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"name\":\"FeeUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"emojiId\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"dt\",\"type\":\"uint256\"}],\"name\":\"Reacted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"_emojiCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"_reactionCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_metadata\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_emoji\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_price\",\"type\":\"uint256\"}],\"name\":\"addEmoji\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"lastEmojiId\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"emojiPool\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"emojiId\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"metadata\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"emoji\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fee\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getAllEmoji\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes32\",\"name\":\"emojiId\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"metadata\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"emoji\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"internalType\":\"struct EmojiGift.EmojiStruct[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"}],\"name\":\"getAllUserReaction\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"emojiId\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"message\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"dt\",\"type\":\"uint256\"}],\"internalType\":\"struct EmojiGift.ReactStruct[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_emojiId\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"_message\",\"type\":\"bytes\"}],\"name\":\"react\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"reactPool\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"emojiId\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"message\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"dt\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_emojiId\",\"type\":\"bytes32\"}],\"name\":\"totalOfEmojiReaction\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transferBalance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_emojiId\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"_metadata\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_emoji\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_price\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"updateEmoji\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"updatedId\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_fee\",\"type\":\"uint8\"}],\"name\":\"updateFee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]"));}}),
"[project]/util/communication.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAllEvents": (()=>getAllEvents),
    "getAllReacted": (()=>getAllReacted),
    "getEmoji": (()=>getEmoji),
    "getLastGift": (()=>getLastGift),
    "getReaction": (()=>getReaction),
    "getReactionCounter": (()=>getReactionCounter),
    "initContract": (()=>initContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web3$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/web3/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web3$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/web3/lib/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$abi$2f$giftmoji$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/abi/giftmoji.json (json)");
;
;
function initContract() {
    const rpcUrl = ("TURBOPACK compile-time value", "https://rpc.lukso.sigmacore.io");
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    // 1. Initialize Web3 with an HttpProvider for server-side connection
    const web3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web3$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web3$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].providers.HttpProvider(rpcUrl));
    // Create a Contract instance
    const contract = new web3.eth.Contract(__TURBOPACK__imported__module__$5b$project$5d2f$abi$2f$giftmoji$2e$json__$28$json$29$__["default"], ("TURBOPACK compile-time value", "0xb8Cb9C6bE4341C8061035C0839B1f5B538b11892"));
    return {
        web3,
        contract
    };
}
async function getEmoji() {
    const { web3, contract } = initContract();
    try {
        const result = await contract.methods.getAllEmoji().call();
        return result;
    } catch (error) {
        console.error("Error fetching contract data with Web3.js:", error);
        return {
            error
        };
    }
}
async function getReaction(address = `0x0D5C8B7cC12eD8486E1E0147CC0c3395739F138d`) {
    const { web3, contract } = initContract();
    try {
        const result = await contract.methods.getAllUserReaction(address).call();
        return result;
    } catch (error) {
        console.error("Error fetching contract data with Web3.js:", error);
        return {
            error
        };
    }
}
async function getReactionCounter() {
    const { web3, contract } = initContract();
    try {
        const result = await contract.methods._reactionCounter().call();
        return result;
    } catch (error) {
        console.error("Error fetching contract data with Web3.js:", error);
        return {
            error
        };
    }
}
async function getAllEvents() {
    const { web3, contract } = initContract();
    try {
        // Get the latest block number (optional, but good for defining a range)
        const latestBlock = await web3.eth.getBlockNumber();
        console.log(`Latest block: ${latestBlock}`);
        // Fetch all events from the contract
        const allEvents = await contract.getPastEvents('allEvents', {
            fromBlock: 0,
            toBlock: 'latest' // Go up to the latest block or a specific block number
        });
        console.log(`All historical events: count(${allEvents.length})`);
        allEvents.forEach((event)=>{
            console.log('---');
            console.log(`Event Name: ${event.event}`);
            console.log(`Block Number: ${event.blockNumber}`);
            console.log(`Transaction Hash: ${event.transactionHash}`);
            console.log('Return Values:', event.returnValues);
        });
        return allEvents;
    } catch (error) {
        console.error('Error fetching past events:', error);
    }
}
async function getAllReacted() {
    const { web3, contract } = initContract();
    try {
        // Get the latest block number (optional, but good for defining a range)
        const latestBlock = await web3.eth.getBlockNumber();
        // Fetch specific events (e.g., 'Transfer' events)
        const reactEvents = await contract.getPastEvents('Reacted', {
            fromBlock: 0,
            toBlock: 'latest'
        });
        // reactEvents.forEach(event => {
        //     console.log('---');
        //     console.log(`Block Number: ${event.blockNumber}`);
        //     console.log(`From: ${event.returnValues.from}`);
        //     console.log(`To: ${event.returnValues.to}`);
        //     console.log(`Value: ${event.returnValues.value}`);
        // });
        return reactEvents;
    } catch (error) {
        console.error('Error fetching past events:', error);
        return error;
    }
}
async function getLastGift() {
    const { web3, contract } = initContract();
    try {
        // Get the latest block number (optional, but good for defining a range)
        const latestBlock = await web3.eth.getBlockNumber();
        // Fetch specific events (e.g., 'Transfer' events)
        const reactEvents = await contract.getPastEvents('Reacted', {
            fromBlock: 0,
            toBlock: 'latest'
        });
        // reactEvents.forEach(event => {
        //     console.log('---');
        //     console.log(`Block Number: ${event.blockNumber}`);
        //     console.log(`From: ${event.returnValues.from}`);
        //     console.log(`To: ${event.returnValues.to}`);
        //     console.log(`Value: ${event.returnValues.value}`);
        // });
        return reactEvents;
    } catch (error) {
        console.error('Error fetching past events:', error);
        return error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/user/profile/page.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "logo": "page-module-scss-module__4yLm9a__logo",
  "page": "page-module-scss-module__4yLm9a__page",
  "pfp": "page-module-scss-module__4yLm9a__pfp",
  "primary": "page-module-scss-module__4yLm9a__primary",
});
}}),
"[project]/components/Toaster.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "toast": "Toaster-module-scss-module__vIJs-G__toast",
  "toaster": "Toaster-module-scss-module__vIJs-G__toaster",
});
}}),
"[project]/components/Toaster.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Toaster),
    "toast": (()=>toast)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toaster$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Toaster.module.scss.module.css [app-client] (css module)");
'use client';
;
;
const toast = (message, type)=>{
    console.log(message);
    const div = document.createElement(`div`);
    div.classList.add(`${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toaster$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toast}`, 'animate__animated', 'animate__bounceIn');
    switch(type){
        case `error`:
            div.classList.add(`${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toaster$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error}`);
            div.innerHTML = `<div class="d-f-c"><span class="text-danger">${message}</span></div>`;
            break;
        case `success`:
            div.classList.add(`${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toaster$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].success}`);
            div.innerHTML = `<div class="d-f-c"><span class="text-success">${message}</span></div>`;
            break;
        case `info`:
            div.classList.add(`${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toaster$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info}`);
            div.innerHTML = `<div class="d-f-c"><span class="text-info">${message}</span></div>`;
            break;
        case `light`:
            div.classList.add(`${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toaster$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].light}`);
            div.innerHTML = `<div class="d-f-c"><span class="text-light">${message}</span></div>`;
            break;
        case `primary`:
            div.classList.add(`${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toaster$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary}`);
            div.innerHTML = `<div class="d-f-c"><span class="text-primary">${message}</span></div>`;
            break;
        default:
            div.innerHTML = `<div class="d-f-c"><span>${message}</span></div>`;
            break;
    }
    document.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toaster$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toaster}`).appendChild(div);
    window.setTimeout(()=>{
        div.remove();
    }, 5000);
};
function Toaster() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toaster$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toaster} d-flex align-items-center flex-column text-center`
    }, void 0, false, {
        fileName: "[project]/components/Toaster.jsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/user/profile/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$MaterialIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helper/MaterialIcon.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$user$2f$nav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/user/nav.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$default$2d$pfp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$default$2d$pfp$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/default-pfp.svg.mjs { IMAGE => "[project]/public/default-pfp.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$UpProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/UpProvider.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$util$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/util/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$util$2f$communication$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/util/communication.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$user$2f$profile$2f$page$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/user/profile/page.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toaster$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toaster.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function Page() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$UpProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpProvider"])();
    const { web3, contract } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$util$2f$communication$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initContract"])();
    const handleForm = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.target);
        const fullname = formData.get('fullname');
        const phone = formData.get('phone');
        const address = formData.get('address');
        const wallet = formData.get('wallet');
        const errors = {};
        const post = {
            fullname: fullname,
            phone: phone,
            address: address,
            wallet: wallet
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$util$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProfile"])(post).then((res)=>{
            console.log(res);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toaster$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(`${res.message}`, 'success');
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            console.log(auth);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$util$2f$communication$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllReacted"])().then({
                "Page.useEffect": (res)=>{
                    console.log(res);
                    setData(res);
                }
            }["Page.useEffect"]);
        }
    }["Page.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$user$2f$profile$2f$page$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page} ms-motion-slideDownIn`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `__container w-100`,
            "data-width": `medium`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Profile, {
                    addr: auth.contextAccounts[0]
                }, void 0, false, {
                    fileName: "[project]/app/user/profile/page.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$user$2f$profile$2f$page$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid} grid grid--fit gap-1 w-100 mt-20`,
                    style: {
                        '--data-width': `110px`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `card`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `card__body d-flex justify-content-between`,
                                children: [
                                    "Emoji sent",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        className: `text-primary`,
                                        children: data && data.filter((item)=>item.returnValues.from.toLowerCase() === auth.contextAccounts[0].toLowerCase()).length
                                    }, void 0, false, {
                                        fileName: "[project]/app/user/profile/page.jsx",
                                        lineNumber: 61,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/user/profile/page.jsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/user/profile/page.jsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `card`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `card__body d-flex justify-content-between`,
                                children: [
                                    "Emoji received",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        className: `text-primary`,
                                        children: data && data.filter((item)=>item.returnValues.to.toLowerCase() === auth.contextAccounts[0].toLowerCase()).length
                                    }, void 0, false, {
                                        fileName: "[project]/app/user/profile/page.jsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/user/profile/page.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/user/profile/page.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/user/profile/page.jsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/user/profile/page.jsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/user/profile/page.jsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(Page, "MsNgwtRriZBzHFQ6zMxBufYrJGA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$UpProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpProvider"]
    ];
});
_c = Page;
/**
 * Profile
 * @param {String} addr
 * @returns
 */ const Profile = ({ addr })=>{
    _s1();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const getProfile = async (addr)=>{
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', `application/json`);
        myHeaders.append('Accept', `application/json`);
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                query: `query MyQuery {
  search_profiles(
    args: {search: "${addr}"}
    limit: 1
  ) {
    fullName
    name
    description
    id
    profileImages {
      src
    }
  }
}`
            })
        };
        const response = await fetch(`${("TURBOPACK compile-time value", "https://envio.lukso-mainnet.universal.tech/v1/graphql/")}`, requestOptions);
        if (!response.ok) {
            throw new Response('Failed to ', {
                status: 500
            });
        }
        const data = await response.json();
        setData(data);
        return data;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Profile.useEffect": ()=>{
            getProfile(addr).then(console.log);
        }
    }["Profile.useEffect"], []);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$user$2f$profile$2f$page$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pfp} d-f-c flex-column grid--gap-050`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            alt: `Default PFP`,
            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$default$2d$pfp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$default$2d$pfp$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src,
            className: `rounded`
        }, void 0, false, {
            fileName: "[project]/app/user/profile/page.jsx",
            lineNumber: 134,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/user/profile/page.jsx",
        lineNumber: 133,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-f-c  flex-column mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$user$2f$profile$2f$page$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pfp} d-f-c flex-column grid--gap-050`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        alt: data.data.search_profiles[0].fullName,
                        src: `${data.data.search_profiles[0].profileImages.length > 0 ? data.data.search_profiles[0].profileImages[0].src : 'https://ipfs.io/ipfs/bafkreiatl2iuudjiq354ic567bxd7jzhrixf5fh5e6x6uhdvl7xfrwxwzm'}`,
                        className: `rounded`
                    }, void 0, false, {
                        fileName: "[project]/app/user/profile/page.jsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                        children: [
                            "@",
                            data.data.search_profiles[0].name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/user/profile/page.jsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/user/profile/page.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "@",
                    data.data.search_profiles[0].description
                ]
            }, void 0, true, {
                fileName: "[project]/app/user/profile/page.jsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/user/profile/page.jsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
};
_s1(Profile, "WZ2PO9A64oHRexE1CE+yX3ebuoA=");
_c1 = Profile;
var _c, _c1;
__turbopack_context__.k.register(_c, "Page");
__turbopack_context__.k.register(_c1, "Profile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_cf71e0bc._.js.map