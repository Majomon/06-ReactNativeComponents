import {MenuItem} from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {name: 'Animación 1', icon: 'cube-outline', component: 'Animation101Screen'},
  {
    name: 'Animación 2',
    icon: 'game-controller-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
];
