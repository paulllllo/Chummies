import React, { useEffect, useState } from 'react'

import styles from './Home.module.css'
import Layout from '../../components/layout/Layout'
import Button from '../../components/UI/button/Button'
import MenuCard from '../../components/MenuCard/MenuCard'
import eclipse from '../../Assets/eclipse.svg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Offer from '../../components/Offer/Offer'
import { foodsInfo, heroSlides, menuCards, offers } from '../../utils/data'
import { formatPrice } from '../../utils/utils'
import { useRecoilState } from 'recoil'
import { cartState, notifState } from '../../state/atoms'
import { useNavigate } from 'react-router-dom'



const Home = () => {
	const [heroSlide, setHeroSlide] = useState(heroSlides[0])

	const [cart, setCart] = useRecoilState(cartState)
	const [notif, setNotif] = useRecoilState(notifState)

	const navigate = useNavigate()

	const rotateHero = (slides, next) => {
		setHeroSlide(slides[next]);
	}

	// 						Responsiveness object for slider
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1024 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 1024, min: 800 },
			items: 4
		},
		tablet: {
			breakpoint: { max: 800, min: 600 },
			items: 3
		},
		mobile: {
			breakpoint: { max: 600, min: 0 },
			items: 2
		}
	};




	const onOrderNow = () => {
		const pack = {}
		const plate = []

		const getFood = () => {
			const foodArr = foodsInfo.filter(food => food.id == heroSlide.foodId)
			foodArr[0].garnishes.forEach(garnish => {
				if (garnish.default) {
					plate.push(garnish);
				}
			})
			return foodArr[0];
		}
		const food = getFood()

		const parseGarnish = (garnishList) => {
			return garnishList.join(', ')
		}

		const getTotalPrice = () => {
			let total = 0
			if (food.base) {
				// console.log('food.base.price=', food.base.price)
				total += food.base.price
			}
			plate.forEach(item => {
				total += item.price;
			});
			return total;
		}


		pack['foodData'] = food
		pack['plate'] = plate
		pack['desc'] = parseGarnish(plate.map(item => item.desc))
		pack['totalPrice'] = getTotalPrice()
		pack['id'] = cart.length + 1


		setCart(prevCart => [...prevCart, pack])
		navigate('/cart')

		setNotif('Added to cart')
		setTimeout(() => {
			setNotif('')
		}, 2000)
	}




	useEffect(() => {
		let count = 0;
		const intervalID = setInterval(() => {
			rotateHero(heroSlides, count)

			if (count === heroSlides.length - 1) {
				count = 0;
			} else {
				count++;
			}
		}, 5000)

		return () => {
			clearInterval(intervalID);
		};
	}, [])

	return (
		<Layout>
			<div className={styles.Hero}>
				<div className={styles.HeroContent}>
					<span className={styles.ContentTitle}>{heroSlide.title}</span>
					<p>{heroSlide.desc}</p>
					<div className={styles.HeroAction}>
						<Button onPress={onOrderNow}>Order Now</Button>
						<span className={styles.HeroPrice}><span className='nairaWhite'>&#8358;</span>{formatPrice(heroSlide.price)}</span>
					</div>
				</div>
				<div className={styles.Container}>
					<div className={styles.HeroImg}>
						{/* <svg className={styles.Ecc1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149.42 149.42"><defs><style></style></defs><title>eclipse</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="cls-1" cx="74.71" cy="74.71" r="74.58" /></g></g></svg> */}
						<img className={styles.HeroCut} src={heroSlide.image} alt='food Image' />
						<img className={`${styles.HeroEcc} ${styles.Ecc1}`} src={eclipse} alt='eclipse' />
						<img className={`${styles.HeroEcc} ${styles.Ecc2}`} src={eclipse} alt='eclipse' />
						<img className={`${styles.HeroEcc} ${styles.Ecc3}`} src={eclipse} alt='eclipse' />
					</div>
				</div>
			</div>
			<div className={styles.Menu}>
				<Carousel
					// containerClass={styles.Menu}
					// itemClass={styles.MenuItem}
					responsive={responsive}
				// centerMode={true}
				>
					{menuCards.map((card, index) => (
						<MenuCard
							key={index}
							id={card.id}
							title={card.title}
							price={card.price}
							image={card.image} />
					))}
				</Carousel>
			</div>

			<div className={styles.Offers}>
				{offers.map((offer) => (
					<Offer
						key={offer.title}
						title={offer.title}
						desc={offer.desc}
						image={offer.image} />
				))}
			</div>

		</Layout>
	)
}

export default Home