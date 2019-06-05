import {LitElement, html, css } from 'lit-element';

export class SingleNote extends LitElement{

	static get properties(){
		return {
			text: {type : String},
		}
	}

	static get styles(){
		return css`
		:host {
			background:pink;
			font-style: italic;
			text-align: center;
			height:100px;
			width: 100px;
			padding: 10px;
			margin: 10px;
		}
		
		:host(:hover){
			box-shadow: 2px 2px 2px 2px rgb(0,0,0,0.2);
		}

		button{
			position:relative;
			left: 2.5rem;
			background: #FF8D87;
			color: #B2170E;
			border-style:none; 
			border-radius:5px;
		}
		`;
	}

	onClickFind() {
		this.parentNode.removeChild(this);
		return false;
	}
	
	render(){
		return html`
		<button @click=${this.onClickFind} >x</button>
		<div> ${this.text} </div>
		`;
	}
}
