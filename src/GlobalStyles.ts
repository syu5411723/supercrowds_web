import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }
    html{
        font-family: sans-serif;
    }
    body {
        font-family: Brown-Regular, "Noto Sans", HiraKakuProN-W3, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif;
    }
`