module.exports = {

"[project]/.next-internal/server/app/inbox/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/error.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/error.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/inbox/loading.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/inbox/loading.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/util/api.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/components/PageTitle.module.scss.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "pageTitle": "PageTitle-module-scss-module__JsxADq__pageTitle",
});
}}),
"[project]/components/PageTitle.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageTitle$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/PageTitle.module.scss.module.css [app-rsc] (css module)");
;
;
;
const PageTitle = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mb-10 ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageTitle$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].pageTitle}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: props.title
        }, void 0, false, {
            fileName: "[project]/components/PageTitle.jsx",
            lineNumber: 6,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PageTitle.jsx",
        lineNumber: 5,
        columnNumber: 3
    }, this);
const __TURBOPACK__default__export__ = PageTitle;
}}),
"[project]/helper/Shimmer.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const Shimmer = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `shimmer`,
        style: props.style,
        children: props.children
    }, void 0, false, {
        fileName: "[project]/helper/Shimmer.jsx",
        lineNumber: 2,
        columnNumber: 3
    }, this);
const __TURBOPACK__default__export__ = Shimmer;
}}),
"[project]/app/inbox/_components/Profiles.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/inbox/_components/Profiles.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/inbox/_components/Profiles.jsx <module evaluation>", "default");
}}),
"[project]/app/inbox/_components/Profiles.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/inbox/_components/Profiles.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/inbox/_components/Profiles.jsx", "default");
}}),
"[project]/app/inbox/_components/Profiles.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/inbox/_components/Profiles.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/app/inbox/_components/Profiles.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[project]/app/inbox/page.module.scss.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "logo": "page-module-scss-module__nC1kZa__logo",
  "page": "page-module-scss-module__nC1kZa__page",
  "pfp": "page-module-scss-module__nC1kZa__pfp",
  "primary": "page-module-scss-module__nC1kZa__primary",
});
}}),
"[project]/app/inbox/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './../../../../abi/giftmoji.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$util$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/util/api.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageTitle$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PageTitle.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$Shimmer$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helper/Shimmer.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/inbox/_components/Profiles.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web3$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/web3/lib/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web3$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/web3/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$page$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/inbox/page.module.scss.module.css [app-rsc] (css module)");
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
;
async function Page({ params, searchParams }) {
    const web3Readonly = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web3$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"](`https://rpc.mainnet.lukso.network`);
    const _ = web3Readonly.utils;
    const contractReadonly = new web3Readonly.eth.Contract(ABI, ("TURBOPACK compile-time value", "0xb8Cb9C6bE4341C8061035C0839B1f5B538b11892"));
    const reactions = async ()=>await contractReadonly.methods.getAllUserReaction(`0x0D5C8B7cC12eD8486E1E0147CC0c3395739F138d`).call() //${auth.contextAccounts[0]}
    ;
    console.log(reactions);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/inbox/page.jsx",
            lineNumber: 21,
            columnNumber: 26
        }, void 0)
    }, void 0, false, {
        fileName: "[project]/app/inbox/page.jsx",
        lineNumber: 21,
        columnNumber: 6
    }, this);
}
}}),
"[project]/app/inbox/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/inbox/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e3f9f9c2._.js.map