(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/NextToast.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "next-toast": "NextToast-module-scss-module__Kpsq9W__next-toast",
  "toast": "NextToast-module-scss-module__Kpsq9W__toast",
});
}}),
"[project]/components/NextToast.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NextToast),
    "toast": (()=>toast)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NextToast$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/NextToast.module.scss.module.css [app-client] (css module)");
'use client';
;
;
const toast = (message, type)=>{
    console.log(message);
    const div = document.createElement(`div`);
    div.classList.add(`${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NextToast$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['toast']}`, 'animate__animated', 'animate__bounceIn');
    switch(type){
        case `error`:
            div.classList.add(`${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NextToast$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error}`);
            div.innerHTML = `<div class="d-f-c"><span class="text-danger">${message}</span></div>`;
            break;
        case `success`:
            div.classList.add(`${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NextToast$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].success}`);
            div.innerHTML = `<div class="d-f-c"><span class="text-success">${message}</span></div>`;
            break;
        case `info`:
            div.classList.add(`${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NextToast$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info}`);
            div.innerHTML = `<div class="d-f-c"><span class="text-info">${message}</span></div>`;
            break;
        case `light`:
            div.classList.add(`${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NextToast$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].light}`);
            div.innerHTML = `<div class="d-f-c"><span class="text-light">${message}</span></div>`;
            break;
        case `primary`:
            div.classList.add(`${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NextToast$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary}`);
            div.innerHTML = `<div class="d-f-c"><span class="text-primary">${message}</span></div>`;
            break;
        default:
            div.innerHTML = `<div class="d-f-c"><span>${message}</span></div>`;
            break;
    }
    document.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NextToast$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['next-toast']}`).appendChild(div);
    window.setTimeout(()=>{
        div.remove();
    }, 5000);
};
function NextToast() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NextToast$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['next-toast']} d-flex align-items-center flex-column text-center`
    }, void 0, false, {
        fileName: "[project]/components/NextToast.jsx",
        lineNumber: 45,
        columnNumber: 10
    }, this);
}
_c = NextToast;
var _c;
__turbopack_context__.k.register(_c, "NextToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Loading.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "loading": "Loading-module-scss-module__6ia4QW__loading",
  "loading__container": "Loading-module-scss-module__6ia4QW__loading__container",
  "progress": "Loading-module-scss-module__6ia4QW__progress",
});
}}),
"[project]/components/Loading.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FullPageLoading": (()=>FullPageLoading),
    "MiniLoading": (()=>MiniLoading),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Loading.module.scss.module.css [app-client] (css module)");
;
;
;
;
;
const FullPageLoading = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['loading'],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['loading__container']} d-f-c flex-column`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/components/Loading.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Loading.jsx",
            lineNumber: 8,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Loading.jsx",
        lineNumber: 7,
        columnNumber: 3
    }, this);
_c = FullPageLoading;
const MiniLoading = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['loading'],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['loading__container']} d-f-c flex-column`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/components/Loading.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Loading.jsx",
            lineNumber: 16,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Loading.jsx",
        lineNumber: 15,
        columnNumber: 3
    }, this);
_c1 = MiniLoading;
const __TURBOPACK__default__export__ = FullPageLoading;
var _c, _c1;
__turbopack_context__.k.register(_c, "FullPageLoading");
__turbopack_context__.k.register(_c1, "MiniLoading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/contexts/UpProvider.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @component UpProvider
 * @description Context provider that manages Universal Profile (UP) wallet connections and state
 * for LUKSO blockchain interactions on Grid. It handles wallet connection status, account management, and chain
 * information while providing real-time updates through event listeners.
 *
 * @provides {UpProviderContext} Context containing:
 * - provider: UP-specific wallet provider instance
 * - client: Viem wallet client for blockchain interactions
 * - chainId: Current blockchain network ID
 * - accounts: Array of connected wallet addresses
 * - contextAccounts: Array of Universal Profile accounts
 * - walletConnected: Boolean indicating active wallet connection
 * - selectedAddress: Currently selected address for transactions
 * - isSearching: Loading state indicator
 */ __turbopack_context__.s({
    "UpProvider": (()=>UpProvider),
    "useUpProvider": (()=>useUpProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lukso$2f$up$2d$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@lukso/up-provider/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/clients/createWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/clients/transports/custom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$lukso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/chains/definitions/lukso.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$luksoTestnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/chains/definitions/luksoTestnet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Loading.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const UpContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const provider = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lukso$2f$up$2d$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClientUPProvider"])() : ("TURBOPACK unreachable", undefined);
function useUpProvider() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(UpContext);
    if (!context) {
        throw new Error('useUpProvider must be used within a UpProvider');
    }
    return context;
}
_s(useUpProvider, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function UpProvider({ children }) {
    _s1();
    const [chainId, setChainId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [accounts, setAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [contextAccounts, setContextAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [walletConnected, setWalletConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAddress, setSelectedAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UpProvider.useMemo[client]": ()=>{
            if (provider && chainId) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletClient"])({
                    chain: chainId === 42 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$lukso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lukso"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$luksoTestnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["luksoTestnet"],
                    transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])(provider)
                });
            }
            return null;
        }
    }["UpProvider.useMemo[client]"], [
        chainId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UpProvider.useEffect": ()=>{
            let mounted = true;
            async function init() {
                try {
                    if (!client || !provider) return;
                    const _chainId = await provider.request('eth_chainId');
                    if (!mounted) return;
                    setChainId(_chainId);
                    const _accounts = await provider.request('eth_accounts', []);
                    if (!mounted) return;
                    setAccounts(_accounts);
                    const _contextAccounts = provider.contextAccounts;
                    if (!mounted) return;
                    setContextAccounts(_contextAccounts);
                    setWalletConnected(_accounts.length > 0 && _contextAccounts.length > 0);
                } catch (error) {
                    console.error(error);
                }
            }
            init();
            if (provider) {
                const accountsChanged = {
                    "UpProvider.useEffect.accountsChanged": (_accounts)=>{
                        setAccounts(_accounts);
                        setWalletConnected(_accounts.length > 0 && contextAccounts.length > 0);
                    }
                }["UpProvider.useEffect.accountsChanged"];
                const contextAccountsChanged = {
                    "UpProvider.useEffect.contextAccountsChanged": (_accounts)=>{
                        setContextAccounts(_accounts);
                        setWalletConnected(accounts.length > 0 && _accounts.length > 0);
                    }
                }["UpProvider.useEffect.contextAccountsChanged"];
                const chainChanged = {
                    "UpProvider.useEffect.chainChanged": (_chainId)=>{
                        setChainId(_chainId);
                    }
                }["UpProvider.useEffect.chainChanged"];
                provider.on('accountsChanged', accountsChanged);
                provider.on('chainChanged', chainChanged);
                provider.on('contextAccountsChanged', contextAccountsChanged);
                return ({
                    "UpProvider.useEffect": ()=>{
                        mounted = false;
                        provider.removeListener('accountsChanged', accountsChanged);
                        provider.removeListener('contextAccountsChanged', contextAccountsChanged);
                        provider.removeListener('chainChanged', chainChanged);
                    }
                })["UpProvider.useEffect"];
            }
        // If you want to be responsive to account changes
        // you also need to look at the first account rather
        // then the length or the whole array. Unfortunately react doesn't properly
        // look at array values like vue or knockout.
        }
    }["UpProvider.useEffect"], [
        client,
        accounts[0],
        contextAccounts[0]
    ]);
    // There has to be a useMemo to make sure the context object doesn't change on every
    // render.
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UpProvider.useMemo[data]": ()=>{
            return {
                provider,
                client,
                chainId,
                accounts,
                contextAccounts,
                walletConnected,
                selectedAddress,
                setSelectedAddress,
                isSearching,
                setIsSearching
            };
        }
    }["UpProvider.useMemo[data]"], [
        client,
        chainId,
        accounts,
        contextAccounts,
        walletConnected,
        selectedAddress,
        isSearching
    ]);
    // fill contextAccount
    if (contextAccounts.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FullPageLoading"], {}, void 0, false, {
        fileName: "[project]/contexts/UpProvider.jsx",
        lineNumber: 132,
        columnNumber: 44
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UpContext.Provider, {
        value: data,
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/UpProvider.jsx",
        lineNumber: 134,
        columnNumber: 10
    }, this);
}
_s1(UpProvider, "3s1Ne9ch5TBgQilZm4XRN+pcl+U=");
_c = UpProvider;
var _c;
__turbopack_context__.k.register(_c, "UpProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/helper/MaterialIcon.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Icon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `material-symbols-outlined${props.className ? ' ' + props.className : ''}`,
        style: props.style,
        children: props.name
    }, void 0, false, {
        fileName: "[project]/helper/MaterialIcon.jsx",
        lineNumber: 2,
        columnNumber: 3
    }, this);
_c = Icon;
const __TURBOPACK__default__export__ = Icon;
var _c;
__turbopack_context__.k.register(_c, "Icon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/default-pfp.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/default-pfp.cd3f494b.svg");}}),
"[project]/public/default-pfp.svg.mjs { IMAGE => \"[project]/public/default-pfp.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$default$2d$pfp$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/default-pfp.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$default$2d$pfp$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ConnectWallet.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "block-desktop": "ConnectWallet-module-scss-module__xXpWAa__block-desktop",
  "block-hd": "ConnectWallet-module-scss-module__xXpWAa__block-hd",
  "block-tablet": "ConnectWallet-module-scss-module__xXpWAa__block-tablet",
  "connect": "ConnectWallet-module-scss-module__xXpWAa__connect",
  "inline-block-desktop": "ConnectWallet-module-scss-module__xXpWAa__inline-block-desktop",
  "inline-block-hd": "ConnectWallet-module-scss-module__xXpWAa__inline-block-hd",
  "inline-block-tablet": "ConnectWallet-module-scss-module__xXpWAa__inline-block-tablet",
  "inline-desktop": "ConnectWallet-module-scss-module__xXpWAa__inline-desktop",
  "inline-hd": "ConnectWallet-module-scss-module__xXpWAa__inline-hd",
  "inline-tablet": "ConnectWallet-module-scss-module__xXpWAa__inline-tablet",
  "no-col-desktop": "ConnectWallet-module-scss-module__xXpWAa__no-col-desktop",
  "no-col-hd": "ConnectWallet-module-scss-module__xXpWAa__no-col-hd",
  "no-col-tablet": "ConnectWallet-module-scss-module__xXpWAa__no-col-tablet",
  "no-float-desktop": "ConnectWallet-module-scss-module__xXpWAa__no-float-desktop",
  "no-float-hd": "ConnectWallet-module-scss-module__xXpWAa__no-float-hd",
  "no-float-tablet": "ConnectWallet-module-scss-module__xXpWAa__no-float-tablet",
  "no-margin-desktop": "ConnectWallet-module-scss-module__xXpWAa__no-margin-desktop",
  "no-margin-hd": "ConnectWallet-module-scss-module__xXpWAa__no-margin-hd",
  "no-margin-tablet": "ConnectWallet-module-scss-module__xXpWAa__no-margin-tablet",
  "no-padding-desktop": "ConnectWallet-module-scss-module__xXpWAa__no-padding-desktop",
  "no-padding-hd": "ConnectWallet-module-scss-module__xXpWAa__no-padding-hd",
  "no-padding-tablet": "ConnectWallet-module-scss-module__xXpWAa__no-padding-tablet",
  "no-pull-desktop": "ConnectWallet-module-scss-module__xXpWAa__no-pull-desktop",
  "no-pull-hd": "ConnectWallet-module-scss-module__xXpWAa__no-pull-hd",
  "no-pull-tablet": "ConnectWallet-module-scss-module__xXpWAa__no-pull-tablet",
  "no-push-desktop": "ConnectWallet-module-scss-module__xXpWAa__no-push-desktop",
  "no-push-hd": "ConnectWallet-module-scss-module__xXpWAa__no-push-hd",
  "no-push-tablet": "ConnectWallet-module-scss-module__xXpWAa__no-push-tablet",
  "none-desktop": "ConnectWallet-module-scss-module__xXpWAa__none-desktop",
  "none-hd": "ConnectWallet-module-scss-module__xXpWAa__none-hd",
  "none-tablet": "ConnectWallet-module-scss-module__xXpWAa__none-tablet",
  "pfp": "ConnectWallet-module-scss-module__xXpWAa__pfp",
  "text-center-desktop": "ConnectWallet-module-scss-module__xXpWAa__text-center-desktop",
  "text-center-hd": "ConnectWallet-module-scss-module__xXpWAa__text-center-hd",
  "text-center-tablet": "ConnectWallet-module-scss-module__xXpWAa__text-center-tablet",
  "text-justify-desktop": "ConnectWallet-module-scss-module__xXpWAa__text-justify-desktop",
  "text-justify-hd": "ConnectWallet-module-scss-module__xXpWAa__text-justify-hd",
  "text-justify-tablet": "ConnectWallet-module-scss-module__xXpWAa__text-justify-tablet",
  "text-left-desktop": "ConnectWallet-module-scss-module__xXpWAa__text-left-desktop",
  "text-left-hd": "ConnectWallet-module-scss-module__xXpWAa__text-left-hd",
  "text-left-tablet": "ConnectWallet-module-scss-module__xXpWAa__text-left-tablet",
  "text-right-desktop": "ConnectWallet-module-scss-module__xXpWAa__text-right-desktop",
  "text-right-hd": "ConnectWallet-module-scss-module__xXpWAa__text-right-hd",
  "text-right-tablet": "ConnectWallet-module-scss-module__xXpWAa__text-right-tablet",
  "wallet": "ConnectWallet-module-scss-module__xXpWAa__wallet",
});
}}),
"[project]/helper/Shimmer.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Shimmer = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `shimmer`,
        style: props.style,
        children: props.children
    }, void 0, false, {
        fileName: "[project]/helper/Shimmer.jsx",
        lineNumber: 2,
        columnNumber: 3
    }, this);
_c = Shimmer;
const __TURBOPACK__default__export__ = Shimmer;
var _c;
__turbopack_context__.k.register(_c, "Shimmer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ConnectWallet.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ConnectWallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web3$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/web3/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$MaterialIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helper/MaterialIcon.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$default$2d$pfp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$default$2d$pfp$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/default-pfp.svg.mjs { IMAGE => "[project]/public/default-pfp.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$UpProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/UpProvider.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConnectWallet$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ConnectWallet.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$Shimmer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helper/Shimmer.jsx [app-client] (ecmascript)");
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
function ConnectWallet() {
    _s();
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$UpProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpProvider"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConnectWallet$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].connect} d-flex align-items-center justify-content-end`,
        children: [
            auth.status === `loading` && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$Shimmer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    width: `32px`,
                    height: `32px`
                }
            }, void 0, false, {
                fileName: "[project]/components/ConnectWallet.jsx",
                lineNumber: 18,
                columnNumber: 37
            }, this),
            !auth.walletConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false),
            auth.walletConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/user/dashboard`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Profile, {
                    addr: auth.accounts[0]
                }, void 0, false, {
                    fileName: "[project]/components/ConnectWallet.jsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ConnectWallet.jsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ConnectWallet.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(ConnectWallet, "TOSIh5/imugRXmIGIVsF0Puveik=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$UpProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpProvider"]
    ];
});
_c = ConnectWallet;
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
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_ENDPOINT}`, requestOptions);
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
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConnectWallet$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pfp} d-f-c flex-column grid--gap-050`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            alt: `Default PFP`,
            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$default$2d$pfp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$default$2d$pfp$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src,
            className: `rounded`
        }, void 0, false, {
            fileName: "[project]/components/ConnectWallet.jsx",
            lineNumber: 103,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ConnectWallet.jsx",
        lineNumber: 102,
        columnNumber: 10
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `__container`,
        "data-width": `small`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConnectWallet$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pfp} d-f-c flex-column grid--gap-050`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                alt: data.data.search_profiles[0].fullName,
                src: `${data.data.search_profiles[0].profileImages.length > 0 ? data.data.search_profiles[0].profileImages[0].src : 'https://ipfs.io/ipfs/bafkreiatl2iuudjiq354ic567bxd7jzhrixf5fh5e6x6uhdvl7xfrwxwzm'}`,
                className: `rounded`
            }, void 0, false, {
                fileName: "[project]/components/ConnectWallet.jsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ConnectWallet.jsx",
            lineNumber: 109,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ConnectWallet.jsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
};
_s1(Profile, "WZ2PO9A64oHRexE1CE+yX3ebuoA=");
_c1 = Profile;
var _c, _c1;
__turbopack_context__.k.register(_c, "ConnectWallet");
__turbopack_context__.k.register(_c1, "Profile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/CartButton.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "cart": "CartButton-module-scss-module__sRsyGW__cart",
  "cart__item": "CartButton-module-scss-module__sRsyGW__cart__item",
  "page": "CartButton-module-scss-module__sRsyGW__page",
});
}}),
"[project]/components/CartButton.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CartButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web3$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/web3/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$MaterialIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helper/MaterialIcon.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$default$2d$pfp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$default$2d$pfp$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/default-pfp.svg.mjs { IMAGE => "[project]/public/default-pfp.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$Shimmer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helper/Shimmer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CartButton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/CartButton.module.scss.module.css [app-client] (css module)");
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
function CartButton() {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [visibleSearch, setVisibleSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userSignedIn, setUserSignedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('/sign-in');
    /**
   * Get cart from Localstorage
   * @returns
   */ const getCart = async ()=>await JSON.parse(localStorage.getItem(`cart`));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartButton.useEffect": ()=>{
            getCart().then({
                "CartButton.useEffect": (res)=>{
                    if (res !== null) setCart(res.length);
                }
            }["CartButton.useEffect"]);
            if (localStorage.getItem('token') !== null) {
                getIsValidToken().then({
                    "CartButton.useEffect": (result)=>{
                        if (result) setUserSignedIn('/user/dashboard');
                    }
                }["CartButton.useEffect"]);
            }
        }
    }["CartButton.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CartButton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cart} d-flex align-items-center justify-content-end`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                id: `cartCount`,
                children: cart
            }, void 0, false, {
                fileName: "[project]/components/CartButton.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/cart.svg",
                alt: `Cart Icon`,
                width: 18,
                height: 18,
                priority: true
            }, void 0, false, {
                fileName: "[project]/components/CartButton.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CartButton.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(CartButton, "dG+Dl3CnqK7gXyQx7W8oDNPuQOI=");
_c = CartButton;
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
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_ENDPOINT}`, requestOptions);
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
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CartButton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pfp} d-f-c flex-column grid--gap-050`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: `Default PFP`,
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$default$2d$pfp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$default$2d$pfp$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    className: `rounded`
                }, void 0, false, {
                    fileName: "[project]/components/CartButton.jsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                    children: "@username"
                }, void 0, false, {
                    fileName: "[project]/components/CartButton.jsx",
                    lineNumber: 96,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CartButton.jsx",
            lineNumber: 94,
            columnNumber: 9
        }, this)
    }, void 0, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `__container`,
        "data-width": `small`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CartButton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pfp} d-f-c flex-column grid--gap-050`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                alt: data.data.search_profiles[0].fullName,
                src: `${data.data.search_profiles[0].profileImages.length > 0 ? data.data.search_profiles[0].profileImages[0].src : 'https://ipfs.io/ipfs/bafkreiatl2iuudjiq354ic567bxd7jzhrixf5fh5e6x6uhdvl7xfrwxwzm'}`,
                className: `rounded`
            }, void 0, false, {
                fileName: "[project]/components/CartButton.jsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/CartButton.jsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CartButton.jsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
};
_s1(Profile, "WZ2PO9A64oHRexE1CE+yX3ebuoA=");
_c1 = Profile;
var _c, _c1;
__turbopack_context__.k.register(_c, "CartButton");
__turbopack_context__.k.register(_c1, "Profile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Footer.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "block-desktop": "Footer-module-scss-module__-TkEBW__block-desktop",
  "block-hd": "Footer-module-scss-module__-TkEBW__block-hd",
  "block-tablet": "Footer-module-scss-module__-TkEBW__block-tablet",
  "footer": "Footer-module-scss-module__-TkEBW__footer",
  "inline-block-desktop": "Footer-module-scss-module__-TkEBW__inline-block-desktop",
  "inline-block-hd": "Footer-module-scss-module__-TkEBW__inline-block-hd",
  "inline-block-tablet": "Footer-module-scss-module__-TkEBW__inline-block-tablet",
  "inline-desktop": "Footer-module-scss-module__-TkEBW__inline-desktop",
  "inline-hd": "Footer-module-scss-module__-TkEBW__inline-hd",
  "inline-tablet": "Footer-module-scss-module__-TkEBW__inline-tablet",
  "no-col-desktop": "Footer-module-scss-module__-TkEBW__no-col-desktop",
  "no-col-hd": "Footer-module-scss-module__-TkEBW__no-col-hd",
  "no-col-tablet": "Footer-module-scss-module__-TkEBW__no-col-tablet",
  "no-float-desktop": "Footer-module-scss-module__-TkEBW__no-float-desktop",
  "no-float-hd": "Footer-module-scss-module__-TkEBW__no-float-hd",
  "no-float-tablet": "Footer-module-scss-module__-TkEBW__no-float-tablet",
  "no-margin-desktop": "Footer-module-scss-module__-TkEBW__no-margin-desktop",
  "no-margin-hd": "Footer-module-scss-module__-TkEBW__no-margin-hd",
  "no-margin-tablet": "Footer-module-scss-module__-TkEBW__no-margin-tablet",
  "no-padding-desktop": "Footer-module-scss-module__-TkEBW__no-padding-desktop",
  "no-padding-hd": "Footer-module-scss-module__-TkEBW__no-padding-hd",
  "no-padding-tablet": "Footer-module-scss-module__-TkEBW__no-padding-tablet",
  "no-pull-desktop": "Footer-module-scss-module__-TkEBW__no-pull-desktop",
  "no-pull-hd": "Footer-module-scss-module__-TkEBW__no-pull-hd",
  "no-pull-tablet": "Footer-module-scss-module__-TkEBW__no-pull-tablet",
  "no-push-desktop": "Footer-module-scss-module__-TkEBW__no-push-desktop",
  "no-push-hd": "Footer-module-scss-module__-TkEBW__no-push-hd",
  "no-push-tablet": "Footer-module-scss-module__-TkEBW__no-push-tablet",
  "none-desktop": "Footer-module-scss-module__-TkEBW__none-desktop",
  "none-hd": "Footer-module-scss-module__-TkEBW__none-hd",
  "none-tablet": "Footer-module-scss-module__-TkEBW__none-tablet",
  "text-center-desktop": "Footer-module-scss-module__-TkEBW__text-center-desktop",
  "text-center-hd": "Footer-module-scss-module__-TkEBW__text-center-hd",
  "text-center-tablet": "Footer-module-scss-module__-TkEBW__text-center-tablet",
  "text-justify-desktop": "Footer-module-scss-module__-TkEBW__text-justify-desktop",
  "text-justify-hd": "Footer-module-scss-module__-TkEBW__text-justify-hd",
  "text-justify-tablet": "Footer-module-scss-module__-TkEBW__text-justify-tablet",
  "text-left-desktop": "Footer-module-scss-module__-TkEBW__text-left-desktop",
  "text-left-hd": "Footer-module-scss-module__-TkEBW__text-left-hd",
  "text-left-tablet": "Footer-module-scss-module__-TkEBW__text-left-tablet",
  "text-right-desktop": "Footer-module-scss-module__-TkEBW__text-right-desktop",
  "text-right-hd": "Footer-module-scss-module__-TkEBW__text-right-hd",
  "text-right-tablet": "Footer-module-scss-module__-TkEBW__text-right-tablet",
});
}}),
"[project]/components/Footer.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Footer.module.scss.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const pages = [
    {
        name: `Emojis`,
        path: '',
        icon: `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 14.1294V16.0331C2 16.1101 2.03208 16.1806 2.09625 16.2446C2.16025 16.3088 2.23075 16.3409 2.30775 16.3409H17.6923C17.7693 16.3409 17.8398 16.3088 17.9038 16.2446C17.9679 16.1806 18 16.1101 18 16.0331V14.1294H2ZM2.30775 3.86011H5.075C4.99167 3.71011 4.9295 3.55177 4.8885 3.38511C4.8475 3.21844 4.827 3.04344 4.827 2.86011C4.827 2.16144 5.069 1.57011 5.553 1.08611C6.037 0.602107 6.62833 0.360107 7.327 0.360107C7.74617 0.360107 8.13392 0.469024 8.49025 0.686858C8.84658 0.904691 9.1575 1.17527 9.423 1.49861L9.98075 2.24486L10.5385 1.49861C10.7937 1.16277 11.1025 0.889024 11.465 0.677357C11.8277 0.465857 12.2182 0.360107 12.6367 0.360107C13.3341 0.360107 13.9247 0.602107 14.4085 1.08611C14.8925 1.57011 15.1345 2.16144 15.1345 2.86011C15.1345 3.04344 15.1156 3.21844 15.0778 3.38511C15.0399 3.55177 14.9762 3.71011 14.8865 3.86011H17.6923C18.1974 3.86011 18.625 4.03511 18.975 4.38511C19.325 4.73511 19.5 5.16269 19.5 5.66786V16.0331C19.5 16.5383 19.325 16.9659 18.975 17.3159C18.625 17.6659 18.1974 17.8409 17.6923 17.8409H2.30775C1.80258 17.8409 1.375 17.6659 1.025 17.3159C0.675 16.9659 0.5 16.5383 0.5 16.0331V5.66786C0.5 5.16269 0.675 4.73511 1.025 4.38511C1.375 4.03511 1.80258 3.86011 2.30775 3.86011ZM2 11.5524H18V5.66786C18 5.59086 17.9679 5.52036 17.9038 5.45636C17.8398 5.39219 17.7693 5.36011 17.6923 5.36011H12.2268L14.2693 8.15236L13.073 9.01386L9.98075 4.81786L6.8885 9.01386L5.69225 8.15236L7.704 5.36011H2.30775C2.23075 5.36011 2.16025 5.39219 2.09625 5.45636C2.03208 5.52036 2 5.59086 2 5.66786V11.5524ZM7.327 3.86011C7.61033 3.86011 7.84783 3.76427 8.0395 3.57261C8.23117 3.38094 8.327 3.14344 8.327 2.86011C8.327 2.57677 8.23117 2.33927 8.0395 2.14761C7.84783 1.95594 7.61033 1.86011 7.327 1.86011C7.04367 1.86011 6.80617 1.95594 6.6145 2.14761C6.42283 2.33927 6.327 2.57677 6.327 2.86011C6.327 3.14344 6.42283 3.38094 6.6145 3.57261C6.80617 3.76427 7.04367 3.86011 7.327 3.86011ZM12.6345 3.86011C12.9178 3.86011 13.1553 3.76427 13.347 3.57261C13.5387 3.38094 13.6345 3.14344 13.6345 2.86011C13.6345 2.57677 13.5387 2.33927 13.347 2.14761C13.1553 1.95594 12.9178 1.86011 12.6345 1.86011C12.3512 1.86011 12.1137 1.95594 11.922 2.14761C11.7303 2.33927 11.6345 2.57677 11.6345 2.86011C11.6345 3.14344 11.7303 3.38094 11.922 3.57261C12.1137 3.76427 12.3512 3.86011 12.6345 3.86011Z"/></svg>`,
        disabled: false
    },
    {
        name: `Inbox`,
        path: 'inbox',
        icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.30775 17.5C1.80258 17.5 1.375 17.325 1.025 16.975C0.675 16.625 0.5 16.1974 0.5 15.6923V2.30775C0.5 1.80258 0.675 1.375 1.025 1.025C1.375 0.675 1.80258 0.5 2.30775 0.5H15.6923C16.1974 0.5 16.625 0.675 16.975 1.025C17.325 1.375 17.5 1.80258 17.5 2.30775V15.6923C17.5 16.1974 17.325 16.625 16.975 16.975C16.625 17.325 16.1974 17.5 15.6923 17.5H2.30775ZM9 13.3078C9.63333 13.3078 10.2083 13.1244 10.725 12.7578C11.2417 12.3911 11.6 11.9078 11.8 11.3078H16V2.30775C16 2.21792 15.9712 2.14417 15.9135 2.0865C15.8558 2.02883 15.7821 2 15.6923 2H2.30775C2.21792 2 2.14417 2.02883 2.0865 2.0865C2.02883 2.14417 2 2.21792 2 2.30775V11.3078H6.2C6.4 11.9078 6.75833 12.3911 7.275 12.7578C7.79167 13.1244 8.36667 13.3078 9 13.3078ZM4.25 9.077H13.75V7.577H4.25V9.077ZM4.25 5.7885H13.75V4.2885H4.25V5.7885Z"/></svg>`,
        disabled: false
    },
    {
        name: `Leaderboard`,
        path: 'leaderboard',
        icon: `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.88475 17.8408V6.84082H5.7115V17.8408H0.88475ZM7.4905 17.8408V0.84082H12.5095V17.8408H7.4905ZM14.2885 17.8408V8.84082H19.1152V17.8408H14.2885Z"/></svg>`,
        disabled: true
    },
    {
        name: `Profile`,
        path: 'user/profile',
        icon: `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.375 8.65894C7.275 8.65894 6.33333 8.26727 5.55 7.48394C4.76667 6.7006 4.375 5.75894 4.375 4.65894C4.375 3.55894 4.76667 2.61727 5.55 1.83394C6.33333 1.0506 7.275 0.658936 8.375 0.658936C9.475 0.658936 10.4167 1.0506 11.2 1.83394C11.9833 2.61727 12.375 3.55894 12.375 4.65894C12.375 5.75894 11.9833 6.7006 11.2 7.48394C10.4167 8.26727 9.475 8.65894 8.375 8.65894ZM0.375 16.6589V13.8589C0.375 13.2923 0.520833 12.7714 0.8125 12.2964C1.10417 11.8214 1.49167 11.4589 1.975 11.2089C3.00833 10.6923 4.05833 10.3048 5.125 10.0464C6.19167 9.7881 7.275 9.65894 8.375 9.65894C9.475 9.65894 10.5583 9.7881 11.625 10.0464C12.6917 10.3048 13.7417 10.6923 14.775 11.2089C15.2583 11.4589 15.6458 11.8214 15.9375 12.2964C16.2292 12.7714 16.375 13.2923 16.375 13.8589V16.6589H0.375Z"/></svg>`,
        disabled: false
    }
];
function Footer() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    /**
   * Get the last visited page
   * @returns string
   */ const getLastVisitedPage = async ()=>await JSON.parse(localStorage.getItem(`lastVisitedPage`));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer} rounded`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: `d-flex flex-row aling-items-center justify-content-between`,
            children: pages && pages.filter((filterItem)=>!filterItem.disabled).map((link, i)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${link.path}`,
                        "data-active": pathname === `/${link.path}` ? true : false,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `d-f-c`,
                                dangerouslySetInnerHTML: {
                                    __html: link.icon
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.jsx",
                                lineNumber: 50,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: link.name
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.jsx",
                                lineNumber: 51,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.jsx",
                        lineNumber: 49,
                        columnNumber: 15
                    }, this)
                }, i, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 48,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(Footer, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_39dd0b26._.js.map