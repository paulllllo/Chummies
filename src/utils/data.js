import nkwobi from '../Assets/Nkwobi.png'
import stew from '../Assets/Stew.png'
import offer_1 from '../Assets/offer_1.jpg'
import offer_2 from '../Assets/offer_2.jpg'
import offer_3 from '../Assets/offer_3.jpg'

export const heroSlides = [
	{
		title: 'Delicious Nkwobi',
		desc: 'Very sweet and special Nkwobi prepared by an affa woman gan gan. Get your hands on this delicious meal.',
		price: 5000,
		image: nkwobi,
        foodId: '2'
	},
	{
		title: 'Sweet Abacha Enugu',
		desc: 'Very sweet and special enugu abacha prepared by an affa woman gan gan. Get your hands on this delicious meal.',
		price: 4000,
		image: stew,
        foodId: '1'
	}
]

export const foodsInfo = [
    {
        id: '1',
        name: 'Abacha',
        price: 4000,
        image: stew,
        garnishes: [
            {
                desc: 'ponmo',
                default: true,
                price: 500
            },
            {
                desc: 'fish',
                default: true,
                price: 500
            },
            {
                desc: 'extra fish',
                default: false,
                price: 500
            },
            {
                desc: 'extra ponmo',
                default: false,
                price: 500
            },
            {
                desc: 'veggies',
                default: true,
                price: 0
            }
        ],
        base: {
            desc: '1 portion of abacha',
            price: 3000
        }
    },
    {
        id: '2',
        name: 'Nkwobi',
        price: 5000,
        image: nkwobi,
        garnishes: [
            {
                desc: 'veggies',
                default: true,
                price: 0
            }
        ],
        base: {
            desc: '1 portion of nkwobi',
            price: 5000
        }
    }
]

export const menuCards = [
	{
        id: '1',
		name: 'Abacha',
		title: 'Abacha Enugu',
		price: 4000,
		image: stew
	},
	{
        id: '2',
		name: 'Nkwobi',
		title: 'Nkwobi',
		price: 5000,
		image: nkwobi
	},
	{
        id: '1',
		name: 'Abacha',
		title: 'Abacha Enugu',
		price: 4000,
		image: stew
	},
	{
        id:'2',
		name: 'Nkwobi',
		title: 'Nkwobi',
		price: 5000,
		image: nkwobi
	}
]

export const offers = [
    {
        title: 'Happy Lunch',
        desc: 'Enjoy a sweet meal from chummies and release some stress. The savoury dishes from chummies is perfect to unwind.',
        image: offer_1
    },
    {
        title: 'Share a meal',
        desc: 'Enjoy a sweet meal from chummies with a friend or colleague. The savoury dishes from chummies is perfect to unwind.',
        image: offer_2
    },
    {
        title: 'It\'s a party',
        desc: 'Enjoy a sweet meal from chummies with your fellow staff or friends. The savoury dishes from chummies is perfect to unwind.',
        image: offer_3
    }
]