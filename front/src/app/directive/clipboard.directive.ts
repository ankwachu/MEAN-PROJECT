import { Directive } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { ClipboardService } from '../service/clipboard.service';

@Directive({
	selector: "[clipboard]",
	inputs: ["value: clipboard"],
	outputs: [
		"copyEvent: clipboardCopy",
		"errorEvent: clipboardError"
	],
	host: {
		"(click)": "copyToClipboard()"
	}
})

export class ClipboardDirective {

	public copyEvent: EventEmitter<string>;
	public errorEvent: EventEmitter<Error>;
	public value: string;

	// I initialize the clipboard directive.
	constructor(private clipboardService: ClipboardService) {

		this.clipboardService = clipboardService;
		this.copyEvent = new EventEmitter();
		this.errorEvent = new EventEmitter();
		this.value = "";

	}

	// I copy the value-input to the Clipboard. Emits success or error event.
	public copyToClipboard(): void {
		this.clipboardService
			.copy(this.value)
			.then((value: string): void => {
				this.copyEvent.emit(value);
			})
			.catch((error: Error): void => {
				this.errorEvent.emit(error);
			});
	}

}