import { MaterialCommunityIcons } from '@expo/vector-icons';

interface AnotherService {
	title: string;
	icon: keyof typeof MaterialCommunityIcons.glyphMap;
}

export const service: AnotherService[] = [
	{
		title: 'Умный дом и видеонаблюдение',
		icon: 'home-plus-outline',
	},
	{
		title: 'Игровые опции',
		icon: 'gamepad-variant-outline',
	},
	{
		title: 'Антивирусы',
		icon: 'security',
	},
	{
		title: 'Добровольная блокировка',
		icon: 'stop-circle-outline',
	},
	{
		title: 'Статичный IP',
		icon: 'check-box-multiple-outline',
	},
];
