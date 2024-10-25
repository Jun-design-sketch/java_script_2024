import globals from "globals";
import pluginJs from "@eslint/js";


// 講義ではjsonファイルが出来上がるけれど最新バージョンはmjsができる。。
export default [
  {
    // window, documentなどのブラウザ環境のglobal variableを自動認識させる
    languageOptions: { globals: globals.browser },
    // カスタムルール設定
    rules: {
      indent: ["error", 2],
      quotes: ["error", "single"],
      semi: ["error", "always"]
    },},
  // ESLintのおすすめ設定を用いる
  pluginJs.configs.recommended,
];