import nkwobi from '../Assets/Nkwobi.png'
import stew from '../Assets/Stew.webp'
import offer_1 from '../Assets/offer_1.jpg'
import offer_2 from '../Assets/offer_2.jpg'
import offer_3 from '../Assets/offer_3.jpg'


export const images = {
    abacha: {
        src: stew,
        desc: 'abacha',
        blurHash: "LgMiyfSz.Tn+xuj[R*jZ%~oKs9a{"
    },
    nkwobi: {
        src: nkwobi,
        desc: 'nkwobi',
        blurHash: "LgMGbWoe_NW=-:j[M{aeyYjan%j["
    },
    offer_1: {
        src: offer_1,
        desc: 'person eating',
        blurHash: "L6A,OH~o0|9G01IpIo%2JBMy^PNZ"
    },
    offer_2: {
        src: offer_2,
        desc: 'people eating',
        blurHash: "LEI;hd4p9cM~yF~9xuR.-mxZE1R*"
    },
    offer_3: {
        src: offer_3,
        desc: 'person eating',
        blurHash: "LPJ7~?4nRRM|?w9Fbcs.ozR*xtRj"
    }
}

export const heroSlides = [
	{
		title: 'Delicious Nkwobi',
		desc: 'Very sweet and special Nkwobi prepared by an affa woman gan gan. Get your hands on this delicious meal.',
		price: 5000,
		image: images.nkwobi,
        foodId: '2'
	},
	{
		title: 'Sweet Abacha Enugu',
		desc: 'Very sweet and special enugu abacha prepared by an affa woman gan gan. Get your hands on this delicious meal.',
		price: 4000,
		image: images.abacha,
        foodId: '1'
	}
]

export const foodsInfo = [
    {
        id: '1',
        name: 'Abacha',
        price: 4000,
        image: images.abacha,
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
        image: images.nkwobi,
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
		image: images.abacha
	},
	{
        id: '2',
		name: 'Nkwobi',
		title: 'Nkwobi',
		price: 5000,
		image: images.nkwobi
	},
	{
        id: '1',
		name: 'Abacha',
		title: 'Abacha Enugu',
		price: 4000,
		image: images.abacha
	},
	{
        id:'2',
		name: 'Nkwobi',
		title: 'Nkwobi',
		price: 5000,
		image: images.nkwobi
	}
]

export const offers = [
    {
        title: 'Happy Lunch',
        desc: 'Enjoy a sweet meal from chummies and release some stress. The savoury dishes from chummies is perfect to unwind.',
        image: images.offer_1
    },
    {
        title: 'Share a meal',
        desc: 'Enjoy a sweet meal from chummies with a friend or colleague. The savoury dishes from chummies is perfect to unwind.',
        image: images.offer_2
    },
    {
        title: 'It\'s a party',
        desc: 'Enjoy a sweet meal from chummies with your fellow staff or friends. The savoury dishes from chummies is perfect to unwind.',
        image: images.offer_3
    }
]

export const testimonials = [
    {
        id: '1',
        author: 'Adichie Chimamanda',
        text: "\"After eating chummies abacha just once, it has become the only thing i can eat after a long day's work. The ugba sauce is just the way my grandma used to make it.\"",
        role: 'customer'
    },
    {
        id: '1',
        author: 'Ikenna Alozie',
        text: "\"After eating chummies abacha just once, it has become the only thing i can eat after a long day's work. The ugba sauce is just the way my grandma used to make it.\"",
        role: 'customer'
    },
    {
        id: '1',
        author: 'Tolu Anifowose',
        text: "\"I heard about chummies abacha through a friend and i was a bit skeptical, because i had never eaten any abacha i enjoyed. Now i can't get enough of it\"",
        role: 'customer'
    }
]