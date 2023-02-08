import{_ as e,c as t,o as d,b as i}from"./app.67ca41c6.js";const u=JSON.parse('{"title":"模块","description":"","frontmatter":{},"headers":[{"level":2,"title":"index.vue","slug":"index-vue","link":"#index-vue","children":[]},{"level":2,"title":"index.ts","slug":"index-ts","link":"#index-ts","children":[]},{"level":2,"title":"index.css","slug":"index-css","link":"#index-css","children":[]}],"relativePath":"work/module.md"}'),n={name:"work/module.md"},s=i('<h1 id="模块" tabindex="-1">模块 <a class="header-anchor" href="#模块" aria-hidden="true">#</a></h1><p>模块，可以简单理解为<code>&lt;component&gt;</code>标签所渲染组件的模板，比如packages/title和packages/image，一个是文字（标题），一个是图片。</p><p>开发模块只需关注src下的三个文件：index.vue、index.ts、index.css。</p><h2 id="index-vue" tabindex="-1">index.vue <a class="header-anchor" href="#index-vue" aria-hidden="true">#</a></h2><p>在setup语法中，需要通过defineProps来代替props接收从EditorContent和EditorRight传过来的参数。</p><p>随之你就可以在<code>&lt;template&gt;</code>使用所接受的参数了</p><h2 id="index-ts" tabindex="-1">index.ts <a class="header-anchor" href="#index-ts" aria-hidden="true">#</a></h2><p>传递组件的渲染函数（render），以及对EditorContent和EditorRight传过来的参数进行限制（editorProps）。</p><p>可以通过editorProps设置默认值、参考值，如设置字体最大值、最小值。</p><h2 id="index-css" tabindex="-1">index.css <a class="header-anchor" href="#index-css" aria-hidden="true">#</a></h2><p>规定该组件的样式，独立出该文件以达到组件样式不污染编辑器的目的。</p>',11),a=[s];function r(o,c,l,p,h,x){return d(),t("div",null,a)}const m=e(n,[["render",r]]);export{u as __pageData,m as default};
