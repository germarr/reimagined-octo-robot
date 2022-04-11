var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:D:\aremixtests\remix-demo\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:D:\aremixtests\remix-demo\app\routes\tiktok.tsx
var tiktok_exports = {};
__export(tiktok_exports, {
  default: () => Index,
  links: () => links,
  loader: () => loader,
  meta: () => meta2
});
var import_react3 = require("@remix-run/react");

// app/api/getArticle.ts
var url_path = "http://52.188.204.100:1337";
async function getPosts() {
  const response = await fetch(`${url_path}/posts`);
  const articleList = await response.json();
  return articleList;
}
async function simplefetch() {
  const respo_tiktok = await fetch(`${url_path}/tiktoks/`);
  const simple_url = `${url_path}/tiktoks/`;
  return [respo_tiktok, simple_url];
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-KHZKRSS3.css";

// route:D:\aremixtests\remix-demo\app\routes\tiktok.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwind_default
    }
  ];
};
var meta2 = () => {
  return {
    title: `Analyzing my TikTok data.`,
    description: `This article explores my tikoto usage.`,
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1"
  };
};
var loader = async () => {
  const articleList = await simplefetch();
  const datapublish = await articleList[0].json();
  return datapublish;
};
function Index() {
  let datamix = (0, import_react3.useLoaderData)();
  let titleList = datamix.map((m, i) => ({
    title: m.base_post_en[0].title,
    slug: m.slug
  }));
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-12 gap-x-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-10 md:col-span-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row space-x-2 md:flex-col md:space-y-2"
  }, titleList.map((m) => /* @__PURE__ */ React.createElement("div", {
    key: m.slug
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    prefetch: "intent",
    to: `./${m.slug}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-slate-800/40 hover:bg-slate-800/30 p-3 shadow-md shadow-slate-200 rounded-md"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-white font-semibold text-xs md:text-base"
  }, m.title))))))), /* @__PURE__ */ React.createElement("div", {
    className: "md:col-span-7 md:overflow-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-screen px-10 md:px-0"
  }, /* @__PURE__ */ React.createElement(import_react3.Outlet, null))));
}

// route:D:\aremixtests\remix-demo\app\routes\tiktok\$part.tsx
var part_exports = {};

// route:D:\aremixtests\remix-demo\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  links: () => links2,
  loader: () => loader2,
  meta: () => meta3
});
var import_react4 = require("@remix-run/react");
var links2 = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwind_default
    }
  ];
};
var meta3 = () => {
  return {
    title: `Analyzing my TikTok data.`,
    description: `This article explores`,
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1"
  };
};
var loader2 = async () => {
  const articleList = await getPosts();
  let articleName = articleList.map((n) => n.Title);
  let articleId = articleList.map((n) => n.slug);
  return [articleName, articleId];
};
function Index2() {
  let dataTitle = (0, import_react4.useLoaderData)()[0];
  let dataids = (0, import_react4.useLoaderData)()[1];
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", null, dataTitle.map((title, i) => /* @__PURE__ */ React.createElement("div", {
    key: `name_${title}`
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: `./post/${dataids[i]}`,
    prefetch: "intent"
  }, title)))));
}

// route:D:\aremixtests\remix-demo\app\routes\post.tsx
var post_exports = {};
__export(post_exports, {
  default: () => Post
});
var import_react5 = require("@remix-run/react");
function Post() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react5.Outlet, null));
}

// route:D:\aremixtests\remix-demo\app\routes\post\$articleName.tsx
var articleName_exports = {};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "db908377", "entry": { "module": "/build/entry.client-WNABTP3P.js", "imports": ["/build/_shared/chunk-OQQGRYEL.js", "/build/_shared/chunk-OGYP3M3B.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-U655COJH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UXD7FMRY.js", "imports": ["/build/_shared/chunk-RZK5GIGZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/post": { "id": "routes/post", "parentId": "root", "path": "post", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/post-7F2FXDU2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/post/$articleName": { "id": "routes/post/$articleName", "parentId": "routes/post", "path": ":articleName", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/post/$articleName-NADSYQX4.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tiktok": { "id": "routes/tiktok", "parentId": "root", "path": "tiktok", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/tiktok-6C4INQWT.js", "imports": ["/build/_shared/chunk-RZK5GIGZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tiktok/$part": { "id": "routes/tiktok/$part", "parentId": "routes/tiktok", "path": ":part", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/tiktok/$part-R7Q347EA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-DB908377.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/tiktok": {
    id: "routes/tiktok",
    parentId: "root",
    path: "tiktok",
    index: void 0,
    caseSensitive: void 0,
    module: tiktok_exports
  },
  "routes/tiktok/$part": {
    id: "routes/tiktok/$part",
    parentId: "routes/tiktok",
    path: ":part",
    index: void 0,
    caseSensitive: void 0,
    module: part_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/post": {
    id: "routes/post",
    parentId: "root",
    path: "post",
    index: void 0,
    caseSensitive: void 0,
    module: post_exports
  },
  "routes/post/$articleName": {
    id: "routes/post/$articleName",
    parentId: "routes/post",
    path: ":articleName",
    index: void 0,
    caseSensitive: void 0,
    module: articleName_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
