import * as vscode from 'vscode';

export class CodeRunner implements vscode.Disposable {
    public runCode() {
        vscode.commands.executeCommand('workbench.action.debug.run', ['noDebug']);
    }

    public stopRunningCode() {
        vscode.commands.executeCommand('workbench.action.debug.stop');
    }

    public dispose() {
        this.stopRunningCode();
    }
}