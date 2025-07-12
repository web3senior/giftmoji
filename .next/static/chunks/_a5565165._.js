(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/abi/giftmoji.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_fee\",\"type\":\"uint8\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"EnforcedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpectedPause\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"emojiId\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"metadata\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"string\",\"name\":\"emoji\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"EmojiAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"emojiId\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"string\",\"name\":\"emoji\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"}],\"name\":\"EmojiUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"name\":\"FeeUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"emojiId\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"dt\",\"type\":\"uint256\"}],\"name\":\"Reacted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"_emojiCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"_reactionCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_metadata\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_emoji\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_price\",\"type\":\"uint256\"}],\"name\":\"addEmoji\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"lastEmojiId\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"emojiPool\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"emojiId\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"metadata\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"emoji\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fee\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getAllEmoji\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes32\",\"name\":\"emojiId\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"metadata\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"emoji\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"internalType\":\"struct EmojiGift.EmojiStruct[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"}],\"name\":\"getAllUserReaction\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"emojiId\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"message\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"dt\",\"type\":\"uint256\"}],\"internalType\":\"struct EmojiGift.ReactStruct[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_emojiId\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"_message\",\"type\":\"bytes\"}],\"name\":\"react\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"reactPool\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"emojiId\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"message\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"dt\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_emojiId\",\"type\":\"bytes32\"}],\"name\":\"totalOfEmojiReaction\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transferBalance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_emojiId\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"_metadata\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_emoji\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_price\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"updateEmoji\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"updatedId\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_fee\",\"type\":\"uint8\"}],\"name\":\"updateFee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]"));}}),
"[project]/public/logo/lukso.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/lukso.358296a4.svg");}}),
"[project]/public/logo/lukso.svg.mjs { IMAGE => \"[project]/public/logo/lukso.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo$2f$lukso$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/logo/lukso.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo$2f$lukso$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 18,
    height: 18,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
"[project]/app/inbox/_components/Profiles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "item": "Profiles-module-scss-module__dccWMa__item",
  "page": "Profiles-module-scss-module__dccWMa__page",
  "pfp": "Profiles-module-scss-module__dccWMa__pfp",
  "priceIcon": "Profiles-module-scss-module__dccWMa__priceIcon",
  "shimmer": "Profiles-module-scss-module__dccWMa__shimmer",
});
}}),
"[project]/app/inbox/_components/Profiles.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Profiles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abi$2f$giftmoji$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/abi/giftmoji.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo$2f$lukso$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$logo$2f$lukso$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/logo/lukso.svg.mjs { IMAGE => "[project]/public/logo/lukso.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Loading.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$UpProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/UpProvider.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web3$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/web3/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$util$2f$communication$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/util/communication.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2d$timezone$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment-timezone/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$default$2d$pfp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$default$2d$pfp$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/default-pfp.svg.mjs { IMAGE => "[project]/public/default-pfp.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$Shimmer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helper/Shimmer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/inbox/_components/Profiles.module.scss.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
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
;
;
;
;
;
function Profiles() {
    _s();
    const [emoji, setEmoji] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [reaction, setReaction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [LYX, setLYX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$UpProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpProvider"])();
    const { web3, contract } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$util$2f$communication$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initContract"])();
    const fetchData = async (dataURL)=>{
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const response = await fetch(`${dataURL}`, requestOptions);
        if (!response.ok) throw new Response('Failed to get data', {
            status: 500
        });
        return response.json();
    };
    // function numberToBytes32(number) {
    //   const hex = web3.utils.toHex(number);
    //   return web3.utils.padLeft(hex, 64);
    // }
    const getChillwhaleData = async (addresses)=>{
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', `application/json`);
        myHeaders.append('Accept', `application/json`);
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                query: `query MyQuery {
  Asset(
    limit: 30
    where: {isLSP7: {_eq: false}, id: {_eq: "0x86e817172b5c07f7036bf8aa46e2db9063743a83"}}
  ) {
    id
    isLSP7
    lsp4TokenName
    lsp4TokenSymbol
    lsp4TokenType
    name
    totalSupply
    owner_id
    tokens(where: {formattedTokenId: {_in: ${JSON.stringify(addresses)}}}) {
      id
      formattedTokenId
      name
      images(limit: 1) {
        src
      }
      holders {
        profile_id
        profile {
          fullName
          profileImages(limit: 1) {
            src
          }
        }
      }
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
        return data;
    };
    const getProfiles = async (addresses)=>{
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', `application/json`);
        myHeaders.append('Accept', `application/json`);
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                query: `query MyQuery {
  Profile(where: {id: {_in: ${JSON.stringify(addresses)}}}) {
    name
    tags
    description
    fullName
    id
    isEOA
    isContract
    src
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
        return data;
    };
    const getLSP7Price = async (token)=>{
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const response = await fetch(`https://api.geckoterminal.com/api/v2/networks/lukso/tokens/${token}`, requestOptions);
        if (!response.ok) throw new Response('Failed to get data', {
            status: 500
        });
        return response.json();
    };
    const getLYXPrice = async ()=>{
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const response = await fetch(`https://api.diadata.org/v1/assetQuotation/Lukso/0x0000000000000000000000000000000000000000`, requestOptions);
        if (!response.ok) throw new Response('Failed to get data', {
            status: 500
        });
        return response.json();
    };
    const toUsDollar = (price)=>{
        console.log(web3.utils.toNumber(price));
        if (!LYX) return;
        const amount = LYX * web3.utils.fromWei(web3.utils.toNumber(price), `ether`);
        return amount.toPrecision(4);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Profiles.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$util$2f$communication$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEmoji"])().then({
                "Profiles.useEffect": (res)=>{
                    console.log(res);
                    if (res.length < 1) return;
                    setEmoji(res);
                }
            }["Profiles.useEffect"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$util$2f$communication$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReaction"])(auth.contextAccount).then({
                "Profiles.useEffect": async (reactionData)=>{
                    console.log(reactionData);
                    if (reactionData.length < 1) return;
                    setReaction(reactionData);
                    let senders = [];
                    reactionData.forEach({
                        "Profiles.useEffect": (item)=>senders.push(item.sender.toLowerCase())
                    }["Profiles.useEffect"]);
                    console.log(senders);
                    getProfiles(senders).then({
                        "Profiles.useEffect": (res)=>{
                            console.log(res);
                            let users = [];
                            reactionData.forEach({
                                "Profiles.useEffect": (react)=>{
                                    users.push(Object.assign(react, res.data.Profile.filter({
                                        "Profiles.useEffect": (profile)=>profile.id.toLowerCase() === react.sender.toLowerCase()
                                    }["Profiles.useEffect"])[0]));
                                }
                            }["Profiles.useEffect"]);
                            setUser(users);
                        }
                    }["Profiles.useEffect"]);
                    getLYXPrice().then({
                        "Profiles.useEffect": (res)=>{
                            console.log(parseFloat(res.Price));
                            setLYX(parseFloat(res.Price));
                        }
                    }["Profiles.useEffect"]);
                // let responses_with_profile = []
                // await Promise.all(
                //   res.map(async (response, i) => {
                //     return getProfile(response.sender).then((profile) => {
                //       responses_with_profile.push(Object.assign(profile, response))
                //     })
                //   })
                // )
                }
            }["Profiles.useEffect"]);
        }
    }["Profiles.useEffect"], []);
    // {reaction && reaction.sort((a, b) => web3.utils.toNumber(b.dt) - web3.utils.toNumber(a.dt)).map((item, i) => {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page} ms-motion-slideDownIn`,
        children: [
            user.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `d-flex flex-column align-items-center justify-content-between w-100`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `shimmer ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shimmer}`
                    }, void 0, false, {
                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `shimmer ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shimmer}`
                    }, void 0, false, {
                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `shimmer ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shimmer}`
                    }, void 0, false, {
                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `shimmer ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shimmer}`
                    }, void 0, false, {
                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `shimmer ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shimmer}`
                    }, void 0, false, {
                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `shimmer ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shimmer}`
                    }, void 0, false, {
                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `shimmer ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shimmer}`
                    }, void 0, false, {
                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `shimmer ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shimmer}`
                    }, void 0, false, {
                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `shimmer ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shimmer}`
                    }, void 0, false, {
                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/inbox/_components/Profiles.jsx",
                lineNumber: 202,
                columnNumber: 9
            }, this),
            user.length > 0 && user.sort((a, b)=>web3.utils.toNumber(b.dt) - web3.utils.toNumber(a.dt)).map((item, i)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `d-flex flex-row align-items-center justify-content-between`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `d-flex flex-row align-items-center justify-content-between`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    target: `_blank`,
                                    href: `https://universaleverything.io/${item.sender}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pfp} d-flex flex-row align-items-center justify-content-between grid--gap-1`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        alt: item.fullname,
                                                        title: item.id,
                                                        src: item.profileImages[0].src,
                                                        className: `rounded`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                                        lineNumber: 223,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        alt: `♥`,
                                                        src: `./emoji/${emoji.filter((filterItem)=>filterItem.emojiId === item.emojiId)[0].emoji}.svg`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                                        lineNumber: 224,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                                lineNumber: 222,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `d-flex flex-column align-items-start justify-content-between grid--gap-025`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                                        lineNumber: 227,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        className: `text-secondary`,
                                                        children: web3.utils.toUtf8(item.message)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                                        lineNumber: 228,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                                lineNumber: 226,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                        lineNumber: 221,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                    lineNumber: 220,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                lineNumber: 219,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `d-flex flex-column align-items-center justify-content-between grid--gap-025`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: `text-secondary rounded`,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2d$timezone$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].unix(web3.utils.toNumber(item.dt)).utc().fromNow()
                                    }, void 0, false, {
                                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `d-flex flex-row align-items-center justify-content-between grid--gap-025`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price} rounded`,
                                                title: new Intl.NumberFormat('en-US', {
                                                    style: 'currency',
                                                    currency: 'USD',
                                                    currencyDisplay: 'narrowSymbol'
                                                }).format(toUsDollar(item.price)),
                                                children: web3.utils.fromWei(item.price, `ether`)
                                            }, void 0, false, {
                                                fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                                lineNumber: 237,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$_components$2f$Profiles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceIcon} d-flex align-items-center rounded`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        alt: `L`,
                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo$2f$lukso$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$logo$2f$lukso$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                                        lineNumber: 242,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: "LYX"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                        lineNumber: 236,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/inbox/_components/Profiles.jsx",
                                lineNumber: 233,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/inbox/_components/Profiles.jsx",
                        lineNumber: 218,
                        columnNumber: 13
                    }, this)
                }, i, false, {
                    fileName: "[project]/app/inbox/_components/Profiles.jsx",
                    lineNumber: 217,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/app/inbox/_components/Profiles.jsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_s(Profiles, "IJ7mk6W5flPUVq0XEAFhAtnZVfk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$UpProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpProvider"]
    ];
});
_c = Profiles;
var _c;
__turbopack_context__.k.register(_c, "Profiles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_a5565165._.js.map