import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextArrow from './assets/seta-direita.png';
import prevArrow from './assets/seta-esquerda.png';



function App() {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", alignItems: "center", right: "6px", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.20))" }}
        onClick={onClick}
      >
        <img src={nextArrow} alt="next" style={{ width: "35px", height: "35px", position: "absolute"}} />
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", alignItems: "center", left: "-6px ", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.20))", zIndex: "1" }}
        onClick={onClick}
      >
        <img src={prevArrow} alt="prev" style={{ width: "35px", height: "35px", position: "absolute"}} />
      </div>
    );
  }
  
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <>
      <div className="container-fluid" id='container'>

        <div className="row">
          <div className="col-12 ">
            <h3 className="text-center mt-3 " id='title'>EXPLORE OS ÚLTIMOS ANÚNCIOS</h3>
            <p className='text-center w-50 mx-auto' id='subtitle'>Descubra os carros mais recentes disponíveis para aluguel na sua região</p>
          </div>
        </div>
        <div className='row d-flex justify-content-center'>
          <div className='col-9'>
            <div className='slider-container'>
              <Slider {...sliderSettings}>
                <div className='d-flex justify-content-center'>
                  <div className='card m-1 border-0' id='card'>1</div>
                </div>
                <div className='d-flex justify-content-center'>
                  <div className='card m-1 border-0' id='card'>2</div>
                </div>
                <div className='d-flex justify-content-center'>
                  <div className='card m-1 border-0' id='card'>3</div>
                </div>
                <div className='d-flex justify-content-center'>
                  <div className='card m-1 border-0' id='card'>4</div>
                </div>
                <div className='d-flex justify-content-center'>
                  <div className='card m-1' id='card'>5</div>
                </div>
                <div className='d-flex justify-content-center'>
                  <div className='card m-1 border-0' id='card'>6</div>  
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className='row d-flex justify-content-center mt-5 mb-5'>
          <button href='#' className='col-2 bg-white border border-dark rounded-1 p-2 mb-3 text-center d-flex justify-content-center align-items-center'>
              <a id='subtitle' className='text-decoration-none text-black'>Ver Todos os Anúncios</a>
              <img src={nextArrow} className='ms-1 mt-1'/>
          </button>
        </div>
      </div>
    </>
  )

}

export default App
