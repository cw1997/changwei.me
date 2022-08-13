import * as React from 'react';

import "./Home.sass"
import friendlyLink from './friendlyLink'

interface IPropsHome {

}

export default function Home(props: IPropsHome) {
  return (
    <div className="Home">
      {/*<HomeBackground/>*/}
      {/*<HomeAvatar/>*/}
      <header>
        <h1>昌维的网站 ChangWei's website</h1>
      </header>

      <hr/>

      <p>
        <h2>Introduction (简介)</h2>
        <p>
          姓名：昌维，生日（公历）：1997 / 10 / 6。
          全栈开发者，泛语言开发者。
          职业方向为 WEB 前端开发，业余爱好为嵌入式开发。
          希望能够为计算机科学与技术相关知识的科普做出微小的贡献。
        </p>
        <p>
          My name is Chang Wei, born on October 6, 1997.
          I'm Full stack developer, pan-language developer.
          Working for Web front-end development, hobby for embedded development.
          I hope to make a contribution to the popularization of computer science and electronic technology.
        </p>
      </p>

      <p>
        <h2>Major Research Direction (主要研究方向)</h2>

        <p>
          <h3>ECE (Electronic Engineering)</h3>
          <ul>
            <li>
              开源 CPU 开发，业余开发 <a href="https://github.com/OpenX86">OpenX86</a> 项目，
              目标为逆向 Intel P6 架构并使用 SystemVerilogHDL 编写对应之 RTL 电路，并且能够在 FPGA 开发板上验证成功。
              目前进度为 已将 IA-32 基础指令集 的译码器编写完成。还有较多模块待完成。
              （对该项目有兴趣者，欢迎使用本页面上述的联系方式与我取得联系，建议满足 (0 基础 && 初中以上学历 && 对 CPU 研发有兴趣) 之条件者参与）
            </li>
            <li>嵌入式单片机开发，包括 STM32，MSC-51，ESP8266(NodeMCU) 等平台。</li>
            <li>Embedded development, including STM32，MSC-51，ESP8266(NodeMCU) and more platform.</li>
            <li>FPGA 开发，包括部分外设控制器的驱动模块开发，RISC-V 和 X86 等指令集的 CPU 软核开发</li>
            <li>FPGA development, including peripheral control unit and RISC-V or X86 soft-core CPU.</li>
          </ul>
        </p>

        <p>
          <h3>CS (Computer Science)</h3>
          <ul>
            <li>WEB 全栈开发，泛语言开发者，目前正在进行中的项目请参考本人 GitHub，Username 为 cw1997。</li>
            <li>WEB Full-stack developer, you can see my project on my GitHub what the username is 'cw1997'</li>
          </ul>
        </p>

        <p>
          <h3>UED (User Experience Design)</h3>
          <ul>
            <li>设计产品原型，优化用户体验，主要使用 Axure RP 和 墨刀，可用 React.js 或者 Vue.js 开发高保真产品原型。</li>
            <li>Design PRD(Product Requirement Document) by Axure RP and modao.cc. I can design High-Fidelity product prototype by React.js or Vue.js.</li>
          </ul>
        </p>
      </p>

      <p>
        <h2>Contact (联系方式)</h2>
        <ul>
          <li>Github: <a href="https://github.com/cw1997">https://github.com/cw1997</a></li>
          <li>ZhiHu: <a href="https://www.zhihu.com/people/changwei1006/posts">https://www.zhihu.com/people/changwei1006/posts</a></li>
          <li>Weibo: <a href="https://weibo.com/changweicw">https://weibo.com/changweicw</a></li>
          <li>SegmentFault: <a href="https://segmentfault.com/u/changwei">https://segmentfault.com/u/changwei</a></li>

          <li>QQ: 867597730</li>
          <li>WeChat: changwei1006</li>

          <li>Email: <a href="mailto:867597730@qq.com">867597730@qq.com</a></li>
          <li>Email: <a href="mailto:changwei1006@gmail.com">changwei1006@gmail.com</a></li>
        </ul>
      </p>

      <p>
        <h2>Experience (个人经历)</h2>
        <table border={1} cellSpacing="0">
          {/*<caption>Experience (个人经历)</caption>*/}
          <thead>
            <tr>
              <th>Date (时间)</th><th>Organization (组织机构)</th><th>Position (职位方向)</th><th>Nature (性质)</th><th>Duty (方向与职责)</th>
            </tr>
            <tr>
              <td>2018.9 ~ Now</td><td><a href="https://www.ntust.edu.tw/">NTUST, National Taiwan University of Science and Technology</a> (National Taiwan University of Science and Technology, 台湾科技大学)</td><td>Electronic Engineering (电子工程)</td><td>full-time master (全日制硕士)</td>
              <td>台科大电子工程研究所丙组(光电及半导体组)</td>
            </tr>
            <tr>
              <td>2020.10 ~ 2022</td><td><a href="https://pingcap.com">PingCAP</a> (北京平凯星辰科技发展有限公司)</td><td>WEB Front-End (WEB前端开发)</td><td>intern (实习)</td>
              <td>负责 <a href="https://pingcap.com/zh">PingCAP 中文官网</a> 和 <a href="https://tidb.io">TiDB 社区</a> 开发</td>
            </tr>
            <tr>
              <td>2018.9 ~ 2021.8</td><td><a href="https://www.ntust.edu.tw/">NTUST, National Taiwan University of Science and Technology</a> (台湾科技大学)</td><td>Electronic Engineering (电子工程)</td><td>full-time bachelor (全日制学士)</td>
              <td>毕业设计为 <a href="https://github.com/risc-v-cpu">RISC-V 指令集架构的 CPU 软核设计</a></td>
            </tr>
            <tr>
              <td>2015.9 ~ 2018.9</td><td><a href="http://www.wspc.edu.cn/">WSPC, Wuhan Institute of Shipbuilding Technology</a> (武汉船舶职业技术学院)</td><td>Software Technology (软件技术)</td><td>full-time college (全日制专科)</td>
              <td>Web 全栈开发</td>
            </tr>
          </thead>
        </table>
      </p>

      <p>
        <h2>Friendly Link (友情链接)</h2>
        <p>
          申请友情链接，<a href="mailto:867597730@qq.com">请发送 Email 给我</a>，或将该项目 fork 到你自己的 GitHub 帐号后，修改
          &nbsp;<a href="https://github.com/cw1997/changwei.me/blob/master/src/pages/Home/friendlyLink.ts">src/pages/Home/friendlyLink.ts</a>&nbsp;
          并且提 pull request。
        </p>
        <p>
          To apply for a Friendly Link, <a href="mailto:changwei1006@gmail.com">please send Email to me</a>, or fork this repo, then edit this file:
          &nbsp;<a href="https://github.com/cw1997/changwei.me/blob/master/src/pages/Home/friendlyLink.ts">src/pages/Home/friendlyLink.ts</a>&nbsp;
          and create a pull request.
        </p>
        <div className="friendly-link">
          {friendlyLink.map((value) => <a key={value.name} href={value.url} target="_blank">{value.name}</a>)}
        </div>
      </p>

      <hr/>

      <footer>
        <p>
          GitHub Actions build status: 
          <a href="https://github.com/cw1997/changwei.me/actions/workflows/node.js.yml">
            <img src="https://github.com/cw1997/changwei.me/actions/workflows/node.js.yml/badge.svg" alt="Node.JS CI status" />
          </a>
          <a href="https://github.com/cw1997/changwei.me/actions/workflows/codeql-analysis.yml">
            <img src="https://github.com/cw1997/changwei.me/actions/workflows/codeql-analysis.yml/badge.svg" alt="CodeQL status" />
          </a>
        </p>
        {/*<p>*/}
        {/*  Circle CI build status: <a href="https://circleci.com/gh/cw1997/changwei.me"><img src="https://circleci.com/gh/cw1997/changwei.me.svg?style=shield" /></a>*/}
        {/*</p>*/}
        <p>
          Source Code: <a href="https://github.com/cw1997/changwei.me">https://github.com/cw1997/changwei.me</a>
        </p>
        <p>
          Docker image: <a href="https://hub.docker.com/r/changwei1997/changwei-homepage">https://hub.docker.com/r/changwei1997/changwei-homepage</a>
        </p>
        <p>
          Powered by React.js & TypeScript & sass & Webpack, SSR (Server Side Rendering) by React-DOM-Server & koa2, running at CentOS with nginx in Docker, build on GitHub Actions.
        </p>
        <p>
          Copyright 2020 - 2022 cw1997. Last Update DateTime: 2022-08-08 01:02:28 ( UTC+8 中国标准时间 )
        </p>
        <p>
          <a href="https://beian.miit.gov.cn/">赣ICP备15009162号-1</a>
        </p>
      </footer>
    </div>
  )
}

//function HomeBackground() {
//  return (
//    <div className="HomeBackground"/>
//  )
//}
//
//function HomeAvatar() {
//  return (
//    <div className="HomeAvatar">
//      img
//    </div>
//  )
//}
