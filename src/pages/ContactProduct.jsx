import React from 'react'
import Ochistit from '../components/Ochistit'
import './ContactProduct.css'
import { RotateCw } from 'lucide-react'

export default function ContactProduct() {
	return (
		<main className='contact-product'>
			<Ochistit />{' '}
			<section className='section2'>
				<div className='container'>
					<div className='contact-product-text2'>
						<h2>SEO Заголовок</h2>
						<p>
						Также как дальнейшее развитие различных форм деятельности предполагает независимые способы реализации существующих финансовых и административных условий. Каждый из нас понимает очевидную вещь: курс на социально-ориентированный национальный проект играет важную роль в формировании как самодостаточных, так и внешне зависимых концептуальных решений. Внезапно, интерактивные прототипы набирают популярность среди определенных слоев населения, а значит, должны быть...
						</p>
						<button className='more-text'><RotateCw className='rotate-cw' />Читать больше</button>
					</div>
				</div>
			</section>
			<section>
				<div className='contact-product-container'>
					<div className='contact-product-image'>
						<img src='spray.png' alt='spray' />
					</div>

					<div className='contact-product-form'>
						<h2>ХОТИТЕ СОТРУДНИЧАТЬ?</h2>
						<p>
							Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время
							ответит на все интересующие вопросы и поможем даже в самых сложных
							случаях!
						</p>

						<div className='form-row'>
							<input type='text' placeholder='Имя' />
							<input type='text' placeholder='+7 (___) ___-__-__' />
						</div>

						<div className='contact-product-button'>
							<button className='send-form'>Отправить заявку</button>

							<small>
								Обращаясь к нам вы получаете не только профессиональную работу,
								но и абсолютную конфиденциальность информации!
							</small>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
