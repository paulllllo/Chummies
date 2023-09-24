import React, { useEffect, useState } from 'react'

import styles from './Home.module.css'
import Layout from '../../components/layout/Layout'
import Button from '../../components/UI/button/Button'
import MenuCard from '../../components/MenuCard/MenuCard'
import eclipse from '../../Assets/eclipse.svg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Offer from '../../components/Offer/Offer'
import { foodsInfo, heroSlides, menuCards, offers, testimonials } from '../../utils/data'
import { formatPrice } from '../../utils/utils'
import { useRecoilState } from 'recoil'
import { cartState, notifState } from '../../state/atoms'
import { useNavigate } from 'react-router-dom'
import { heroResponsive, testimonialResponsive } from '../../utils/slider'
import Testimonial from '../../components/Testimonial/Testimonial'
import ImageComponent from '../../utils/imageProcess'



const Home = () => {
	const [heroSlide, setHeroSlide] = useState(heroSlides[0])

	const [cart, setCart] = useRecoilState(cartState)
	const [notif, setNotif] = useRecoilState(notifState)

	const navigate = useNavigate()

	const rotateHero = (slides, next) => {
		setHeroSlide(slides[next]);
	}




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
						<ImageComponent style={styles.HeroCut} src={heroSlide.image.src} desc={heroSlide.image.desc} blurHash={heroSlide.image.blurHash} width={400} height={400} />
						{/* <img className={styles.HeroCut} src={heroSlide.image.src} alt='food Image' /> */}
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
					responsive={heroResponsive}
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

			<div className={styles.Testimonials}>
				<Carousel 
				responsive={testimonialResponsive}
				autoPlay={true}
				autoPlaySpeed={7000}
				infinite={true}
				transitionDuration={1000}
				removeArrowOnDeviceType={['mobile']}>
					{testimonials.map(item => {
						return <Testimonial 
						key={item.id}
						author={item.author}
						role={item.role}
						text={item.text}/>
					})}
				</Carousel>
			</div>

		</Layout>
	)
}

export default Home