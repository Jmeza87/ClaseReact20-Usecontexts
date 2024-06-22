import React from 'react'
import Carrusel from '../components/Carrusel'
import inicio01 from '../assets/img/inicio01.jpg'

const inicio = () => {
  return (
    <>
    <Carrusel/>
    

     {/* Creacion de HERO */}

     <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
  <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
    <h1 className="display-4 fw-bold lh-1">Empresa en Soluciones Tecnológicas para tu Negocio</h1>
    <p className="lead">En Debiantec, nos especializamos en ofrecer soluciones tecnológicas tanto para empresas como para particulares. Entendemos que la tecnología desempeña un papel fundamental en el mundo empresarial y en la vida cotidiana de las personas, por lo que nos dedicamos a brindar servicios y herramientas que se adaptan a las necesidades específicas de cada cliente.</p>
    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
      <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
      <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
    </div>
  </div>
  <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
    <img className="rounded-lg-3" src={inicio01} alt width={720} />
  </div>
</div>

     {/* Fin del Hero */}

     <br />

     {/* Elemento heading */}
     <div className='container py-5 text-center'>
     <h1 className='text-center'>Nuestros Productos</h1>
<div className="row py-5">

<div className="col-sm-6 col-lg-4">
  <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
    <image  href="inicio01.jpg" width="140" height="140" preserveAspectRatio="none"
 />
  </svg>
  <h2 className="fw-normal">Laptops</h2>
  <p>¡Descubre nuestra increíble selección de laptops! Encuentra la laptop perfecta para tus necesidades en nuestra tienda online.</p>
  <p><a className="btn btn-secondary" href="#">View details »</a></p>
</div>


<div className="col-sm-6 col-lg-4">
  <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
    <image  href="heading02.jpg" width="140" height="140" preserveAspectRatio="none"
 />
  </svg>
  <h2 className="fw-normal">Smartphones</h2>
  <p>Tenemos los últimos modelos de smartphones de las mejores marcas del mercado.</p>
  <p className='py-4'><a className="btn btn-secondary" href="#">View details »</a></p>
</div>


<div className="col-sm-6 col-lg-4">
  <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
    <image  href="heading03.jpg" width="140" height="140" preserveAspectRatio="none"
 />
  </svg>
  <h2 className="fw-normal">Desktops</h2>
  <p>¡Descubre el poder y rendimiento de nuestras desktops! Tenemos una amplia selección de modelos que se adaptan a tus necesidades.</p>
  <p><a className="btn btn-secondary" href="#">View details »</a></p>
</div>


</div>
</div>

     {/* Fin del elemento heading */}


    </>
  )
}

export default inicio
