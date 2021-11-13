import * as vscode from 'vscode';
import { CodeRunner } from './codeRunner';

export function activate(context: vscode.ExtensionContext) {

	const codeRunner = new CodeRunner();

	const run = vscode.commands.registerCommand("quick-run-code.run", (fileUri: vscode.Uri) => {
		codeRunner.runCode();
	});
}

export function deactivate() { }
