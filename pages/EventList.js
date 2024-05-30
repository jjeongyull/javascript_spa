
import e_data from '../js/data.js';
import Components from '../core/Components.js';

export default class EventList extends Components {
  setup() {
    // 데이터 초기 설정
    this.$state = {
      events: [...e_data],
    };
  }

  template() {
    return `
    <style>
      *{padding: 0; margin: 0; box-sizing: border-box;}
      .e-div{width: 100%; display: flex; flex-wrap: wrap; gap: 25px;}
      .event-card{padding: 15px; border-radius: 7px; width: 15%; background: #fff}
      .card-img{width: 100%; border-radius: 7px;}
      .e-title{font-size: 17px;}
      .card-content{margin-bottom: 7px;}
      .e-date-text{font-size: 12px; color: #6b6b6b;}
      .e-card{border: none; padding: 6px 12px; cursor: pointer; font-size: 12px;}
      .e-btn-group{widthL 100%; display: flex; justify-content: flex-end; gap: 7px;}
    </style>
    <div class='e-div'>
      ${this.$state.events.map(event => `
        <div class="event-card">
          <img class='card-img' src='https://www.menteimo.com/file/349/1715675831_[KBSI](E)%EC%B0%BD%EB%A6%BD%EA%B8%B0%EB%85%90%EC%9D%BC-%EA%B8%B0%EB%85%90-KBSI-%EC%83%9D%EC%9D%BC-%EC%B6%95%ED%95%98%ED%95%B4!-%EC%9D%B4%EB%B2%A4%ED%8A%B8_%EC%9C%A0%EA%B0%95%ED%9D%AC_v2.png'>
          <div>
            <h2 class='e-title'>${event.e_title}</h2>
          </div>
          <div class="card-content">
            <p class='e-date-text'>Start Date: ${event.e_start_date}</p>
            <p class='e-date-text'>End Date: ${event.e_end_date}</p>
            <p class='e-date-text'>Writer: ${event.e_writer}</p>
          </div>
          <div class='e-btn-group'>
            <button class='e-card btn_e_start' data-idx='${event.idx}'>시작</button>
            <button class='e-card btn_e_update' data-idx='${event.idx}'>수정</button>
            <button class='e-card btn_e_delete' data-idx='${event.idx}'>삭제</button>
          </div>
        </div>
          `).join('')}
      </div>`;
  }

  setEvent() {
    this.addEvent('click', '.btn_e_start', (event) => {
      const idx = event.target.dataset.idx;
      this.eventStart(idx);
    });
    this.addEvent('click', '.btn_e_update', (event) => {
      const idx = event.target.dataset.idx;
      this.eventUpdate(idx);
    });
    this.addEvent('click', '.btn_e_delete', (event) => {
      const idx = event.target.dataset.idx;
      this.eventDelete(idx);
    });
  }
  
  // 이벤트 시작 버튼 클릭 시
  eventStart(idx){
    alert(`${idx}번 이벤트 시작 버튼을 클릭 하셨습니다.`)
  }
  eventUpdate(idx){
    alert(`${idx}번 이벤트 수정 버튼을 클릭 하셨습니다.`)
  }
  eventDelete(idx){
    alert(`${idx}번 이벤트 삭제 버튼을 클릭 하셨습니다.`)
  }
}