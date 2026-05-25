import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  phone: string;
  tg: string;
  cardBg: string;
  photo: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class TeamComponent {
  members: TeamMember[] = [
    {
      name: 'Аня',
      role: 'Главный организотор:',
      phone: '+7 922 611 22 13',
      tg: '@Mingalevaaa',
      cardBg: 'assets/images/Rectangle_134.png.webp',
      photo: 'assets/images/photo.png_010.webp',
    },
    {
      name: 'Маша',
      role: 'По вопросам участия:',
      phone: '+7 950 872 50 03',
      tg: '@Moy_mir_131',
      cardBg: 'assets/images/Rectangle_139.png.webp',
      photo: 'assets/images/photo.png.webp',
    },
    {
      name: 'Соня',
      role: 'По вопросам сотрудничества:',
      phone: '+7 902 792 12 18',
      tg: '@sofyaayaa02',
      cardBg: 'assets/images/Rectangle_136.png.webp',
      photo: 'assets/images/_.png.webp',
    },
    {
      name: 'Алёна',
      role: 'По вопросам рекламы:',
      phone: '+7 909 082 94 06',
      tg: '@allneushhka',
      cardBg: 'assets/images/Rectangle_138.png.webp',
      photo: 'assets/images/photo.png_010.webp',
    },
  ];
}
