import * as React from 'react';

import "./Home.sass"


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
        <h2>简介(Introduction)</h2>
        全栈开发者，泛语言开发者。
        职业方向为WEB前端开发，业余爱好为嵌入式开发。
        希望能够为计算机科学与技术相关知识的科普做出微小的贡献。
        <br/>
        Full stack developer, pan-language developer.
        working for Web front-end development, hobby for embedded development.
        I hope to make a contribution to the popularization of computer science and electronic.
      </p>
      <p>
        <h2>ECE (ElectroniC Engineering)</h2>
        <ul>
          <li>嵌入式单片机开发，包括 STM32，MSC-51，ESP8266(NodeMCU) 等平台。</li>
          <li>Embedded development, including STM32，MSC-51，ESP8266(NodeMCU) and more platform.</li>
          <li>FPGA 开发，包括部分外设控制器的驱动模块开发，RISC-V 和 X86 等指令集的 CPU 软核开发</li>
          <li>FPGA development, including peripheral control unit and RISC-V or X86 soft-core CPU.</li>
        </ul>
      </p>
      <p>
        <h2>CS (Computer Science)</h2>
        <ul>
          <li>WEB全栈开发，泛语言开发者，目前正在进行中的项目请参考本人 GitHub，Username 为 cw1997。</li>
          <li>WEB Full-stack developer, you can see my project on my GitHub what the username is 'cw1997'</li>
        </ul>
      </p>
      <p>
        <h2>联系方式 (Contact)</h2>
        <ul>
          <li>Github: <a href="https://github.com/cw1997">https://github.com/cw1997</a></li>
          <li>ZhiHu: <a href="https://www.zhihu.com/people/changwei1006/posts">https://www.zhihu.com/people/changwei1006/posts</a></li>
          <li>Weibo: <a href="https://weibo.com/changweicw">https://weibo.com/changweicw</a></li>
          <li>SegmentFault: <a href="https://segmentfault.com/u/changwei">https://segmentfault.com/u/changwei</a></li>

          <li>QQ: 867597730</li>
          <li>WeChat: changwei1006</li>
        </ul>
      </p>
      <p>
        <table border="1" cellspacing="0">
          <caption>Experience (个人经历)</caption>
          <thead>
            <tr>
              <th>Date (时间)</th><th>Organization (组织机构)</th><th>Position (职位方向)</th><th>Nature (性质)</th>
            </tr>
            <tr>
              <td>2020.10 ~ 2021.3</td><td><a href="https://pingcap.com">PingCAP</a> (北京平凯星辰科技发展有限公司)</td><td>WEB Front-End (WEB前端开发)</td><td>intern (实习)</td>
            </tr>
            <tr>
              <td>2018.9 ~ 至今</td><td><a href="https://www.ntust.edu.tw/">NTUST</a> (台湾科技大学)</td><td>ElectriC Engineering (ECE) (电子工程)</td><td>full-time undergraduate (全日制本科)</td>
            </tr>
            <tr>
              <td>2015.9 ~ 2018.9</td><td><a href="http://www.wspc.edu.cn/">WSPC</a> (武汉船舶职业技术学院)</td><td>Software Technology (软件技术)</td><td>full-time college (全日制专科)</td>
            </tr>
          </thead>
        </table>
      </p>
      <hr/>
      <footer>
        <p>
          Source Code: <a href="https://github.com/cw1997/changwei.me">https://github.com/cw1997/changwei.me</a>
        </p>
        <p>
          Docker image: <a href="https://hub.docker.com/r/changwei1997/changwei.me">https://hub.docker.com/r/changwei1997/changwei.me</a>
        </p>
        <p>
          Powered by React.js, SSR by React-DOM-Server & koa2, running at CentOS with Docker.
        </p>
        <p>
          Copyright 2020 - 2021 cw1997. Last Update DateTime: Fri Apr 09 2021 18:32:19 GMT+0800 (中国标准时间)
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
