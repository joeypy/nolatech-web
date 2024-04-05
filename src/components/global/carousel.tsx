import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "../../global.css";

// Importa los módulos necesarios de Swiper
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

type Props = {
  className?: string;
};

export const Carousel = ({ className }: Props) => {
  const pagination = {
    clickable: true,
    renderBullet: function (_: number, className: string) {
      return '<span class="border-4  border-white ' + className + '"></span>';
    },
  };

  return (
    <div className={className}>
      <Swiper
        modules={[Pagination, Mousewheel, Keyboard]}
        spaceBetween={50} // Espacio entre slides
        slidesPerView={3} // Número de slides visibles a la vez
        pagination={pagination} // Habilita la paginación clickeable
        mousewheel={true} // Permite la navegación con rueda del mouse
        keyboard={true} // Permite la navegación con teclado
      >
        <SwiperSlide className="min-w-[250px]">
          <img src="/Pic7.png" alt="Imagen 1" />
        </SwiperSlide>
        <SwiperSlide className="min-w-[250px]">
          <img src="/Pic8.png" alt="Imagen 2" />
        </SwiperSlide>
        <SwiperSlide className="min-w-[250px]">
          <img src="/Pic9.png" alt="Imagen 3" />
        </SwiperSlide>
        <SwiperSlide className="min-w-[250px]">
          <img src="/Pic10.png" alt="Imagen 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
