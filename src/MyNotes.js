import {LitElement, html, css } from 'lit-element';
import './SingleNote'
export class MyNotes extends LitElement{

	static get styles(){
		return css`
		:host {
			background:peachpuff;
			display:flex;
			flex-wrap: wrap;
			align-content:flex-start;
			width:inherit;
			height:inherit;
		}
		`;
	}

	render(){
		return html`
		<slot></slot>
		`;
	}
}

