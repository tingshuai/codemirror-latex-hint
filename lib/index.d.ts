import CodeMirror, { Editor } from "codemirror";
import "codemirror/addon/hint/show-hint";
interface LaTeXMacro {
    text: string;
    snippet: string;
}
/**
 * The hinter function
 * @param cm CodeMirror instance
 * @param macros A list of LaTeX macros
 */
declare const LaTeXHint: (cm: Editor, macros: LaTeXMacro[]) => CodeMirror.Hints;
export default LaTeXHint;
