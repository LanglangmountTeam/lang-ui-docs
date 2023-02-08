import{_ as e,c as a,o as t,b as i}from"./app.67ca41c6.js";const _=JSON.parse('{"title":"TODOs","description":"","frontmatter":{},"headers":[{"level":2,"title":"实现功能","slug":"实现功能","link":"#实现功能","children":[{"level":3,"title":"组件","slug":"组件","link":"#组件","children":[]},{"level":3,"title":"要求","slug":"要求","link":"#要求","children":[]},{"level":3,"title":"测试（Mock/Vitest）","slug":"测试-mock-vitest","link":"#测试-mock-vitest","children":[]}]},{"level":2,"title":"高级功能","slug":"高级功能","link":"#高级功能","children":[{"level":3,"title":"组件工程化","slug":"组件工程化","link":"#组件工程化","children":[]},{"level":3,"title":"评分标准","slug":"评分标准","link":"#评分标准","children":[]}]}],"relativePath":"todos.md"}'),r={name:"todos.md"},l=i('<h1 id="todos" tabindex="-1">TODOs <a class="header-anchor" href="#todos" aria-hidden="true">#</a></h1><p>根据项目结构和进展阶段，划分多个组件。</p><p>对于大部分功能，建议是先实现再丰富。</p><h2 id="实现功能" tabindex="-1">实现功能 <a class="header-anchor" href="#实现功能" aria-hidden="true">#</a></h2><h3 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-hidden="true">#</a></h3><p>答辩场合展现功能的界面，主要的组件模块都集中在这里。</p><ul><li><p><strong>通用性组件: 比如Button，Icon等</strong>（必须）</p></li><li><p><strong>布局型组件: 比如Grid,Layout布局等</strong>（必须）</p></li><li><p><strong>导航型组件: 比如面包屑Breadcrumb,下拉菜单Dropdown,菜单Menu等</strong>（必须）</p></li><li><p><strong>数据录入型型组件: 比如form表单，Switch开关，Upload文件上传，日期选择，下拉选择等</strong>（必须）</p></li><li><p><strong>数据展示型组件: 比如Avator头像，Table表格，List列表等</strong>（必须）</p></li><li><p><strong>反馈型组件: 比如Progress进度条，Drawer抽屉，Modal对话框等</strong>（必须）</p></li></ul><h3 id="要求" tabindex="-1">要求 <a class="header-anchor" href="#要求" aria-hidden="true">#</a></h3><p><a href="https://ant.design/components/overview-cn" target="_blank" rel="noreferrer">具体功能可参考antd的组件库要求</a></p><h3 id="测试-mock-vitest" tabindex="-1">测试（Mock/Vitest） <a class="header-anchor" href="#测试-mock-vitest" aria-hidden="true">#</a></h3><p>待补充</p><h2 id="高级功能" tabindex="-1">高级功能 <a class="header-anchor" href="#高级功能" aria-hidden="true">#</a></h2><h3 id="组件工程化" tabindex="-1">组件工程化 <a class="header-anchor" href="#组件工程化" aria-hidden="true">#</a></h3><ul><li><p>支持国际化（中英两种语言）</p></li><li><p>支持用户手动输入日期&amp;时间，组件做好数值校验</p></li><li><p>日期选择中，支持年视图，月视图，日视图</p></li><li><p>支持特殊日期样式，例如: 节假日视图</p></li><li><p>补充单元测试，覆盖率要求超过60%</p></li></ul><h3 id="评分标准" tabindex="-1">评分标准 <a class="header-anchor" href="#评分标准" aria-hidden="true">#</a></h3><p>项目主要从功能实现完整度、页面兼容性、代码质量、开发流程规范4个维度进行考核，计算规则如下所示，最终分数为所有评分项之和。</p><h1 id="功能完备度" tabindex="-1">功能完备度 <a class="header-anchor" href="#功能完备度" aria-hidden="true">#</a></h1><details class="details custom-block"><summary>Details</summary><p>总占比60分</p><p>·各组件还原程度 ·文档站 ·工程化环境完备度(lint、UT、E2E测试、构建速度等)</p></details><h1 id="代码质量" tabindex="-1">代码质量 <a class="header-anchor" href="#代码质量" aria-hidden="true">#</a></h1><details class="details custom-block"><summary>Details</summary><p>20分</p><p>·项目结构清晰，有定义组件，单个文件长度不超过300行，lint和ts等报错是否处理 ·可迭代性强，耦合度合理(比如需要移除一个模块，或是增加一个主题色能否快速迭代支持)</p></details><h1 id="细节规范" tabindex="-1">细节规范 <a class="header-anchor" href="#细节规范" aria-hidden="true">#</a></h1><details class="details custom-block"><summary>Details</summary><p>15分</p><p>·是否使用github / gitlab 开发，不同成员之间有没有合理拆分需求模块，进行拉取，合码等过程</p></details><h1 id="组件兼容性" tabindex="-1">组件兼容性 <a class="header-anchor" href="#组件兼容性" aria-hidden="true">#</a></h1><details class="details custom-block"><summary>Details</summary><p>5分，出现变形，布局异常等情况 -1分 ·能否适配主流浏览器</p></details>',24),s=[l];function d(n,h,o,c,p,u){return t(),a("div",null,s)}const g=e(r,[["render",d]]);export{_ as __pageData,g as default};
