import Components from '../core/Components.js';
import '../component/component_make.js';

export default class AboutPage extends Components {
  template() {
    return `
    <div>
      <h2 style='margin-bottom: 20px;'>AboutPage</h2>
      <text-input 
        label='이름' 
        id='test_id'
        placeholder='이름을 입력하세요'
      ></text-input>
      <text-input 
        label='읽기 전용' 
        id='test_id_2'
        placeholder='입력 안됨'
        readonly=true
      ></text-input>
    </div>`;
  }
}