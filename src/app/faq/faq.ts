import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class FaqComponent {
  items: FaqItem[] = [
    {
      question: 'Что такое кофе-рейв?',
      answer:
        'Кофе-рейв — это современный молодежный формат культурно-досугового события, объединяющий музыку, кофейную культуру и визуальную эстетику.',
      open: false,
    },
    {
      question: 'Когда будет проходить мероприятие?',
      answer: 'ДРИП. пройдет 6 июня 2026 года с 11:00 до 18:00.',
      open: false,
    },
    {
      question: 'Где будет приходить мероприятие?',
      answer:
        'Гастромолл "Главный",<br />ул. Боевых Дружин, 20.',
      open: false,
    },
    {
      question: 'Как попасть на ваше мероприятие?',
      answer:
        'Если вы хотите принять участие в нашем мероприятии,<br />вам необходимо заполнить форму регистрации.',
      open: false,
    },
    {
      question: 'Кто главный организатор мероприятия?',
      answer:
        'Кофе-рейв ДРИП. организуют участники<br />молодежной организации МОСТ УрФУ.',
      open: false,
    },
  ];

  toggle(index: number): void {
    this.items[index].open = !this.items[index].open;
  }
}
