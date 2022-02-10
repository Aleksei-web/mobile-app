import dayjs from 'dayjs'
import 'dayjs/locale/ru'

export const messages = [
	{
		message: 'Добрый день',
		isUser: true,
		date: dayjs('2022-01-05 18:10:15').format('HH:mm'),
		id: '1'
	},
	{
		message: 'Здравствуйте',
		isUser: false,
		date: dayjs('2022-01-05 18:11:33').format('HH:mm'),
		id: '2'
	},
	{
		message: 'Пожалуйста, задайте Ваш вопрос',
		isUser: false,
		date: dayjs('2022-01-05 18:13:55').format('HH:mm'),
		id: '3'
	},
	{
		customerName: '',
		message: 'У меня ничего не работает',
		isUser: true,
		date: dayjs('2022-01-05 18:14:22').format('HH:mm'),
		id: '4'
	},
	{
		customerName: '',
		message: 'У Вас нет средств на счете',
		isUser: false,
		date: dayjs('2022-01-05 18:15:11').format('HH:mm'),
		id: '5'
	},
	{
		customerName: '',
		message: 'Я знаю',
		isUser: true,
		date: dayjs('2022-01-05 18:15:48').format('HH:mm'),
		id: '6'
	},
]