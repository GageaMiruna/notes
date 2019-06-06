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

	read(){
		return JSON.parse(localStorage.getItem('notes'));
	}

	write(data){
		localStorage.setItem('notes',JSON.stringify(data));
	}

	


	render(){
		const notes = this.read();
		
		return html`
			${notes.map((element) => html`<single-note id=${element.id} text=${element.text}></single-note>`)}
		`;
	}
}

