import { Navigation } from "swiper";
import { Swiper, SwiperSlide, } from 'swiper/react';

import styles from './slider.module.scss'

const breakpoints = {
    320: {
        slidesPerView: 4,
    },
    480: {
        slidesPerView: 6,
    },
    640: {
        slidesPerView: 8,
    }
}

const onSwiper = (swiper: any) => {
    const svg_next = '<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#2b1a46" viewBox="0 0 16 16"><path d="M106.927-238.385c0 50.863-42.919 92.243-95.679 92.243H-252.75l-119.21 385.144h-29.11l-.934-.292 128.044-413.648H11.248c36.891 0 66.905-28.465 66.905-63.447zm133.068 0c0 59.718-23.822 115.852-67.086 158.042-43.17 42.107-100.54 65.296-161.543 65.296H-158.85L-238.067 239h-30.193l88.197-282.844H11.366c53.435 0 103.648-20.282 141.403-57.103 37.657-36.732 58.4-85.543 58.4-137.44zM173.99-238c.01.247.01.499.01.756 0 42.601-16.96 82.644-47.768 112.731-30.705 30.008-71.51 46.53-114.894 46.53H-206.76L-304.893 239H-335l107.044-345.757H11.338c73.836 0 133.908-58.54 133.908-130.487 0-.257-.005-.509-.01-.756z"></path><path d="M9.916 8l-4.458 4.458a.625.625 0 00.884.884l4.9-4.9a.625.625 0 000-.884l-4.9-4.9a.625.625 0 00-.884.884L9.916 8z"></path></svg>'
    const svg_prev = '<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#2b1a46" viewBox="0 0 16 16"><path d="M106.927-238.385c0 50.863-42.919 92.243-95.679 92.243H-252.75l-119.21 385.144h-29.11l-.934-.292 128.044-413.648H11.248c36.891 0 66.905-28.465 66.905-63.447zm133.068 0c0 59.718-23.822 115.852-67.086 158.042-43.17 42.107-100.54 65.296-161.543 65.296H-158.85L-238.067 239h-30.193l88.197-282.844H11.366c53.435 0 103.648-20.282 141.403-57.103 37.657-36.732 58.4-85.543 58.4-137.44zM173.99-238c.01.247.01.499.01.756 0 42.601-16.96 82.644-47.768 112.731-30.705 30.008-71.51 46.53-114.894 46.53H-206.76L-304.893 239H-335l107.044-345.757H11.338c73.836 0 133.908-58.54 133.908-130.487 0-.257-.005-.509-.01-.756z"></path><path d="M9.916 8l-4.458 4.458a.625.625 0 00.884.884l4.9-4.9a.625.625 0 000-.884l-4.9-4.9a.625.625 0 00-.884.884L9.916 8z"></path></svg>'
    const { nextEl, prevEl } = swiper.navigation;
    nextEl.innerHTML = svg_next
    prevEl.innerHTML = svg_prev
    nextEl.className += ` ${styles.swiper__button_modified}`;
    prevEl.className += ` ${styles.swiper__button_modified_rotate}`;
}

export const Slider = () => {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={8}
            navigation={true}
            modules={[Navigation]}
            breakpoints={breakpoints}
            onSwiper={(swiper) => onSwiper(swiper)}
        >
            <SwiperSlide>
                <img className={styles.img} src="/assets/burger_king.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.img} src="/assets/sushi_pop.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.img} src="/assets/el_club_de_la_milanesa.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.img} src="/assets/almacen-de-pizzas.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.img} src="/assets/morita.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.img} src="/assets/el_noble.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.img} src="/assets/carrefour.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.img} src="/assets/fabric.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.img} src="/assets/subway.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.img} src="/assets/pain_quotidien.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.img} src="/assets/la-farola.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.img} src="/assets/burger_king.png" alt="" />
            </SwiperSlide>
        </Swiper>
    )
}
