import * as vscode from 'vscode';

export class CodeRunner implements vscode.Disposable {
    public async runCode() {
        vscode.commands.executeCommand('workbench.action.debug.run', ['noDebug']).then((value) => {
            vscode.window.showInformationMessage(`Got: ${value}`);
        });
    }

    public stopRunningCode() {
        vscode.commands.executeCommand('workbench.action.debug.stop');
    }

    public dispose() {
        this.stopRunningCode();
    }
}