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
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$util$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/util/api.js [app-client] (ecmascript)");
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
function Page() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
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
        }
    }["Page.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$user$2f$profile$2f$page$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page} ms-motion-slideDownIn`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `__container w-100`,
            "data-width": `medium`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Profile, {
                    addr: auth.wallet
                }, void 0, false, {
                    fileName: "[project]/app/user/profile/page.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$user$2f$profile$2f$page$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid} grid grid--fit gap-1 w-100`,
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
                                        children: "100"
                                    }, void 0, false, {
                                        fileName: "[project]/app/user/profile/page.jsx",
                                        lineNumber: 56,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/user/profile/page.jsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/user/profile/page.jsx",
                            lineNumber: 53,
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
                                        children: "100"
                                    }, void 0, false, {
                                        fileName: "[project]/app/user/profile/page.jsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/user/profile/page.jsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/user/profile/page.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/user/profile/page.jsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/user/profile/page.jsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/user/profile/page.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(Page, "SoUSh4Il9hv0fXZMZvBrL7eFpDc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
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
            lineNumber: 125,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/user/profile/page.jsx",
        lineNumber: 124,
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
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                        children: [
                            "@",
                            data.data.search_profiles[0].name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/user/profile/page.jsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/user/profile/page.jsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "@",
                    data.data.search_profiles[0].description
                ]
            }, void 0, true, {
                fileName: "[project]/app/user/profile/page.jsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/user/profile/page.jsx",
        lineNumber: 130,
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

//# sourceMappingURL=_0323f7cc._.js.map