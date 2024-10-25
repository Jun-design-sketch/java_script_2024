// コード最適化、マージ、管理をしてくれる道具を使い始める

// modulizationは楽だけどhttpリクエストが多くなるから嫌だし
// 人が分かるようにするため書いてるこれらをより短く簡潔にし、パソコンに渡せば良い
// ブラウザサポート問題もある。
// JS最新版でしか動作しないコードを自動で旧バージョンにしてくれるとか
// spring devtoolsのように自動リフレッシュするとか
// コードクオリティーをチェックしてくれるとか。。。

// DevServer: need auto-reload: webpack-dev-server OR serve(standalone tool)
// BundlingTool: research import/export and auto-bundled: Webpack
// CodeOptimizationTool: optimize code : Webpack Optimizer Plugins
// CodeCompilationTool: write modernCode, get older code: Babel
// CodeQualityChecker: check code quality, patterns: ESLint

// node.jsインストールからnpm init
// npm install --save-dev eslint
// で、npm installしてみるとインストールされているけれどどう使うか
// F1 -> Create ESLint configuration
import { ProjectList } from "./App/ProjectList.js";

globalThis.DEFAULT_VALUE = 'MAX';

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );

    // const timerId = setTimeout(this.startAnalytics, 3000);

    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    //   clearTimeout(timerId);
    // });
  }

  static startAnalytics() {
    const analyticsScript = document.createElement("script");

    analyticsScript.src = "assets/scripts/Utility/Analytics.js";
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();
