export default class Component {
  $target; //컴포넌트를 넣을 부모
  $props;
  $state;


  constructor($target, $props) { // 객체를 초기화 시키는 생성자
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {} //컴포넌트 state 설정

  mounted() {} //컴포넌트가 마운트 되었을 때

  template() { //UI 구성 
    return '';
  }

  render() {
    this.$target.innerHTML = this.template(); //UI 렌더링
    this.mounted();
  }

  setEvent() {} //컴포넌트에서 필요한 이벤트 설정

  setState(newState) { //상태 변경 후 렌더링
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

  addEvent(eventType, selector, callback) { //이벤트 등록 추상화
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }
}