const futureStyles = `:host{--color:#379c5a;--hover:#3cd070}button{font-family:"Roboto Condensed",sans-serif;outline:0;border:.1rem solid var(--color);color:var(--color);background:0 0;cursor:pointer;font-size:100%;padding:.5rem 1rem;position:relative;transform:skewX(-30deg);letter-spacing:.1rem;text-transform:uppercase;margin:0 0 1rem 0;min-width:17rem;text-align:left;transition:transform .3s cubic-bezier(.075,.82,.165,1),color .2s ease,border .2s ease}button .text{transform:skewX(30deg);overflow:hidden;text-overflow:ellipsis}button .text span{font-size:.8rem}button .slider::before{content:'';display:block;width:100%;height:100%;position:absolute;top:0;left:0;transform:scaleX(0);background:var(--hover);transition:transform .3s cubic-bezier(.075,.82,.165,1)}button::before{content:'';display:block;width:1rem;height:100%;background:var(--color);position:absolute;left:-1.75rem;top:0;transition:background .2s ease}button:hover{transform:scaleX(1.15) skewX(-30deg);border:.1rem solid var(--hover);color:#fff}button:hover::before{background:var(--hover)}button:hover div.slider::before{transform:scaleX(1)}`

class FutureButton extends HTMLElement {
	constructor() {
		super()
		const shadow = this.attachShadow({ mode: 'open' })
		
		const style = document.createElement('style')
		style.textContent = futureStyles

		const button = document.createElement('button')
		
		const slider = document.createElement('div')
		slider.setAttribute('class', 'slider')

		const text = document.createElement('div')
		text.setAttribute('class', 'text')
		text.appendChild(document.createTextNode(`${this.innerHTML.toString()} `))
		let options = [
			'tastes good',
			'uhhh',
			'no u',
			'u tried',
			'eat it',
			'aaaaa',
			'cool stuff',
			'be amazed',
			'awesome'
		]
		const span = document.createElement('span')
		span.textContent = options[Math.floor(Math.random() * options.length)]
		text.appendChild(span)

		button.appendChild(slider)
		button.appendChild(text)
		
		shadow.appendChild(style)
		shadow.appendChild(button)
	}
}

customElements.define('future-button', FutureButton)