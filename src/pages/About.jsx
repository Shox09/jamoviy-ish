import React from 'react'
import './About.css'
import { FileBadge, Hourglass } from 'lucide-react'

export default function About() {
	return (
		<main className='about-main'>
			<section className='about'>
				<div className='about-top-info'>
					<div className='container'>
						<div className='line'></div>
						<div className='about-text'>
							<h1>о компании</h1>
						</div>
						<div className='about-link'>
							<a href='/'>Главная</a>
							<p>—</p>
							<p>О компании</p>
						</div>
					</div>
				</div>

				<div className='container'>
					<div className='about-top'>
						<img src='about-img.jpg' alt='' className='about-image-circle' />

						<div className='about-text'>
							<h2>МЫ - ЭКСПЕРТЫ В ОБЛАСТИ ПРОИЗВОДСТВА ХИМИИ</h2>
							<p>
								Разнообразный и богатый опыт говорит нам, что перспективное
								планирование однозначно фиксирует необходимость поставленных
								обществом задач! Есть над чем задуматься: ключевые особенности
								структуры проекта могут быть объединены в целые кластеры себе
								подобных. Интерактивные прототипы, которые представляют собой
								яркий пример континентально-европейского типа политической
								культуры, будут описаны максимально подробно. Значимость этих
								проблем настолько очевидна, что перспективное планирование
								играет важную роль в формировании системы массового участия.
							</p>
						</div>
					</div>

					<div className='features'>
						<div className='feature-card'>
							<Hourglass className='icon' />
							<p>Непрерывная работа с 2017 года</p>
						</div>
						<div className='feature-card'>
							<FileBadge className='icon' />
							<p>Вся продукция сертифицирована</p>
						</div>
						<div className='feature-card'>
							<img src='Vector.png' alt='' className='icon' />

							<p>Контроль качества на всех этапах</p>
						</div>
						<div className='feature-card'>
							<img src='truck.svg' alt='' className='icon truck' />
							<p>Возможны поставки по всей России</p>
						</div>
						<div className='feature-card'>
							<img src='speed.svg' alt='' className='icon speed' />
							<p>Оперативное производство</p>
						</div>
					</div>
				</div>
			</section>

			<section className='about-section'>
				<div className='container'>
					<div className='production'>
						<div className='production-text'>
							<div className='line'></div>
							<h2>НАШЕ ПРОИЗВОДСТВО</h2>
							<p>
								Предварительные выводы неутешительны: разбавленное изрядной
								долей эмпатии, рациональное мышление обеспечивает широкому кругу
								(специалистов) участие в формировании глубокомысленных
								рассуждений. Но граница обучения кадров создаёт необходимость
								включения в производственный план целого ряда внеочередных
								мероприятий с учётом комплекса кластеризации усилий.
								<br />
								<br />
								Реализация намеченных плановых заданий, а также свежий взгляд на
								привычные вещи - безусловно открывает новые горизонты для
								соответствующих условий активизации. Предварительные выводы
								неутешительны: экономическая повестка сегодняшнего дня требует
								анализа анализа существующих паттернов поведения.
							</p>

							<ul className='ul'>
								<div className='ul-left'>
									<li className='li'>
										<img src='car.svg' alt='' />
										Автомобильная химия
									</li>
									<li className='li'>
										<img src='home.svg' alt='' />
										Бытовая химия
									</li>
									<li className='li'>
										<img src='dis.svg' alt='' />
										Дезинфицирующие средства
									</li>
								</div>
								<div className='ul-right'>
									<li className='li'>
										<img src='aerozol.svg' alt='' />
										Пищевые аэрозоли
									</li>
									<li className='li'>
										<img src='Vector.svg' alt='' />
										Косметическая продукция
									</li>
									<li className='li'>
										<img src='brush.svg' alt='' />
										Краски аэрозольные
									</li>
								</div>
							</ul>
						</div>

						<img src='pexels.png' alt='' className='pexels' />
					</div>

					<div className='about-block reverse'>
						<img src='pavel.png' alt='' className='pavel' />

						<div className='about-text'>
							<div className='line'></div>
							<h2 className='section-title'>ОТНОШЕНИЕ К ДЕЛУ И К КЛИЕНТАМ</h2>
							<p>
								Кстати, интерактивные прототипы описаны максимально подробно.
								Повседневная практика показывает, что укрепление и развитие
								внутренней структуры говорит о возможностях соответствующих
								условий активизации. Внезапно, независимые государства, которые
								представляют собой яркий пример континентально-европейского типа
								политической культуры, будут подвергнуты целой серии независимых
								исследований. С учётом сложившейся международной обстановки,
								синтетическое тестирование выявляет срочную потребность системы
								массового участия.
								<br />
								<br />А ещё действия представителей оппозиции, превозмогая
								сложившуюся непростую экономическую ситуацию, в равной степени
								предоставлены сами себе. Не следует, однако, забывать, что
								выбранный нами инновационный путь в значительной степени
								обусловливает важность дальнейших направлений развития.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className='research'>
				<div className='container'>
					<div className='line'></div>
					<h2>ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР ALIANCE PRODUCTION</h2>
					<div className='research-text'>
						<p>
							Явные признаки победы институционализации рассмотрены
							исключительно в разрезе маркетинговых и финансовых предпосылок.
							Приятно, граждане, наблюдать, как активно развивающиеся страны
							третьего мира могут быть ограничены исключительно образом
							мышления. Лишь независимые государства набирают популярность среди
							определённых слоёв населения, а значит, должны быть указаны как
							претенденты на роль ключевых факторов. Лишь акционеры крупнейших
							компаний могут быть призваны к ответу.
						</p>
						<p>
							С учётом сложившейся международной обстановки, синтетическое
							тестирование требует определения и уточнения анализа существующих
							паттернов поведения. Не следует, однако, забывать, что
							высокотехнологичная концепция общественного уклада представляет
							собой интересный эксперимент проверки как самостоятельных, так и
							внешне зависимых концептуальных решений. Предварительные выводы
							неутешительны: разбавленное изрядной долей эмпатии, рациональное
							мышление однозначно фиксирует необходимость стандартных подходов.
						</p>
					</div>

					<div className='research-images'>
						<img src='Frame 44.png' alt='lab1' />
						<img src='Frame 46.png' alt='factory' />
					</div>
				</div>
			</section>

			<section className='products'>
				<div className='container'>
					<div className='line'></div>
					<div className='product-parent'>
						<div className='product-left'>
							<h2>ПРОИЗВОДИМ АЭРОЗОЛЬНУЮ ПРОДУКЦИЮ ДЛЯ РАЗНЫХ СФЕР</h2>
							<div className='products-content'>
								<ul className='ul'>
									<div className='ul-left'>
										<li className='li'>
											<img src='Vector (2).svg' alt='' />
											Химические производства
										</li>
										<li className='li'>
											<img src='car.svg' alt='' />
											Автомойки
										</li>
										<li className='li'>
											<img src='vector1.svg' alt='' />
											Пищевая продукция
										</li>
										<li className='li'>
											<img src='brush.svg' alt='' />
											Лаки и краски
										</li>
										<li className='li'>
											<img src='Vector.svg' alt='' />
											Косметические средства
										</li>
									</div>
									<div className='ul-right'>
										<li className='li'>
											<img src='Vector (3).svg' alt='' />
											Автомобильная косметика
										</li>
										<li className='li'>
											<img src='Vector (4).svg' alt='' />
											Косметика по уходу за одеждой
										</li>
										<li className='li'>
											<img src='Vector (5).svg' alt='' />
											Косметика по уходу за обувью
										</li>
										<li className='li'>
											<img src='Vector (6).svg' alt='' />
											Строительные материалы
										</li>
										<li className='li'>
											<img src='Vector (7).svg' alt='' />И многих других
										</li>
									</div>
								</ul>
							</div>
						</div>
						<div className='products-logos'>
							<img src='Frame 16.png' alt='burgerking' />
							<img src='Frame 16.png' alt='burgerking' />
							<img src='Frame 16.png' alt='burgerking' />
							<img src='Frame 16.png' alt='burgerking' />
							<img src='Frame 16.png' alt='burgerking' />
							<img src='Frame 16.png' alt='burgerking' />
							<img src='Frame 16.png' alt='burgerking' />
							<img src='Frame 16.png' alt='burgerking' />
							<img src='Frame 16.png' alt='burgerking' />
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className='about-contact-container'>
					<div className='about-contact-image'>
						<img src='spray.png' alt='spray' />
					</div>

					<div className='about-contact-form'>
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

						<div className='about-contact-button'>
							<button>Отправить заявку</button>

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
