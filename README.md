> This hinter is no longer required in CodeMirror 6. Please see [lezer-tex](https://github.com/mu-io/lezer-tex) for a grammar plugin for CodeMirror 6.
> Since CodeMirror 6 is in beta, this repository is deprecated.

# LaTeX Snippet Hinter for CodeMirror

This is a hinter function for use with [CodeMirror](https://codemirror.net)'s [showHint.js](https://codemirror.net/doc/manual.html#addon_show-hint) plugin. This is based on [TeXStudio](https://github.com/texstudio-org/texstudio)'s autocompletion mechanism.

# Features
Pressing `tab` allows users to move to the next argument of a macro. It also highlights user input in the list of matched hints.

<img src="https://github.com/jun-sheaf/codemirror-latex-hint/blob/master/demo_media/demo.gif" height="150px">

# Installation
```
npm install codemirror-latex-hint codemirror
```

# To Use
```javascript
import LaTeXHint from "codemirror-latex-hint";
import macros from "codemirror-latex-hint/lib/macros.json";
import "codemirror-latex-hint/lib/index.css";

CodeMirror.registerHelper("hint", "stex", (cm) => LaTeXHint(cm, macros));
```

# Customization
The list of macros in the package contains all MathJaX macros and environments. You can import your own list of macros (with the format given in `macros.json`) rather than the packaged one.
