export class NavBar extends HTMLElement {
  constructor(){ // 인스턴스 초기화
    super();
  }
  connectedCallback(){ // 커스텀 엘리먼트가 Dom에 추가 될 때 호출되는 콜백 함수
    this.render();

  }
  get class(){ // class속성 정의
    return this.getAttribute('class') || null;
  }
  render(){
    this.innerHTML = this.template({
      class: this.class
    })
  }
  template(state){
    return `
    <div class='${state.class}'>
        <header>
        <div class="image-text">
          <span class="image">
            <img class="logo-img" src="images/logo.png" alt="logo">
          </span>
          <div class="text header-text">
            <span class="name">Customer</span>
            <span class="profession">bulletin board</span>
          </div>
        </div>
        <i class='bx bx-chevron-right toggle'></i>
      </header>
      <div class="menu-bar">
        <div class="menu">
          <ul class="menu-links">
            <li class="search-box display-none" id="search_notice_div">
              <i class='bx bx-search-alt-2 icon'></i>
              <input class="search-input" id="search_notice" type="search" placeholder="Search...">
            </li>
            <li class="nav-link" id="mainPage_li">
              <a class="nav-a active" href="#/" data-link>
                <i class='bx bx-home-alt icon'></i>
                <span class="nav-text">
                  이벤트 리스트
                </span>
              </a>
            </li>
            <li class="nav-link" id="customer_li">
              <a class="nav-a" href="#/about" data-link>
                <i class='bx bx-buildings icon'></i>
                <span class="nav-text">
                  소개 페이지
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="bottom-content">
          <li class="nav-link">
            <a class="nav-a" href="javascript:void(0)" id="btn_logout">
              <i class='bx bx-log-out icon'></i>
              <span class="nav-text text">Logout</span>
            </a>
          </li>
        </div>
      </div>
    </div>
    `;
  }

}