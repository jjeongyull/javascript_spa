export class TextInput extends HTMLElement {
  constructor(){ // 인스턴스 초기화
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback(){ 
    this.render();

    
  }
  get label(){ // label속성 정의
    return this.getAttribute('label') || null;
  }
  get id(){ // id속성 정의
    return this.getAttribute('id') || null;
  }
  get placeholder(){ // placeholder속성 정의
    return this.getAttribute('placeholder') || null;
  }
  get readonly(){ // readonly속성 정의
    return this.getAttribute('readonly') || null;
  }

  render(){
    this.shadowRoot.innerHTML = this.template({
      label: this.label,
      id: this.id,
      placeholder: this.placeholder,
      readonly: this.readonly,
    })
  }
  template(state){
    return `
      <style>
        div{display: flex; align-items: center; gap: 10px; font-size: 14px; margin-bottom: 10px;}
        label{display: block; width: 100px;}
        input{border: none; padding: 7px 12px; max-width: 300px; width: 100%; border-radius: 3px; transition: .3s;}
        input:focus{outline:none; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;}
      </style>
      <div>
        <label for='${state.id}'>${state.label}</label>
        <input type='text' id='${state.id}' placeholder='${state.placeholder}' ${state.readonly?'readonly':''}>
      </div>
    `;
  }
}