import { Component, OnInit, Directive, EventEmitter } from '@angular/core';
import { ClipboardService } from 'src/app/service/clipboard.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-guideline',
  templateUrl: './guideline.component.html',
  styleUrls: ['./guideline.component.scss']
})
export class GuidelineComponent implements OnInit {

  public copyEvent: EventEmitter<string>;
	public errorEvent: EventEmitter<Error>;
	public value: string;

  constructor(private clipboardService: ClipboardService) { }

  ngOnInit(): void {
  }

  public logError( error: Error ) : void {
		console.group( "Clipboard Error" );
		console.error( error );
		console.groupEnd();
	}

	public logSuccess( value: string ) : void {
		console.group( "Clipboard Success" );
		console.log( value );
		console.groupEnd();
		M.toast({html: 'URL copied !', classes: 'green lighten-1'})
	}
}
