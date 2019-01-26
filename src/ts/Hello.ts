import Vue from 'vue'
import Component from 'vue-class-component';

@Component({})
export default class Main extends Vue{
  header : string = 'Найди свою вторую половинку';
  description: string = 'Domino’s объединяет сердца.<br>Ответь на наши пицца-вопросы и узнай кто из медийных персон может стать твоей второй половинкой';
  buttonValue: string = 'Начать';

  pages: number = 2;
  curentPage: number = 0;
  content: HTMLElement;

  get FullMessage(){
    return `${this.header}`;
  }

  get Button(){
    return `${this.buttonValue}`;
  }

  get Description(){
    return `${this.description}`;
  }

  created(){
    console.log('created');
  }

  clicked(){
    switch(this.curentPage){
      case 0:
      this.curentPage++;
        document.getElementById('content').innerHTML =`
        <div class='test-quastion'>Любишь ли ты пиццу?</div>
        <ul>
          <li class='answer' id='first'>Да</li>
          <li class='answer' id='second'>Очень</li>
          <li class='answer' id='third'>Невероятно</li>
        </ul>
        `;
        document.getElementById('first').addEventListener('click',()=>{
          console.log('first');
          this.clicked();
        });
        document.getElementById('second').addEventListener('click',()=>{
          console.log('second');
          this.clicked();
        });
        document.getElementById('third').addEventListener('click',()=>{
          console.log('third');
          this.clicked();
        });
        break;
      case 1:
        this.curentPage++;
        document.getElementById('content').innerHTML =`
        <div class='test-answer'>Максим Пушкин</div>
        <div class='photo pushkin'></div>
        <div class='pizza'>Попробуй покорить сердце главного работяги страны с помощью пиццы «Барбекю де люкс»<div>
        `;

        document.getElementById('share').classList.toggle('hide');

    }
  }
}