import React from 'react'

const Detalles = ({item}) => {
  return (
    <>
        <div className="modal fade text-white" id={item.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
          {item.title}
          </h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
  
        <div className="row py-2">
                  <div className="col-md-4">
                     <img src={item.thumbnail} classname="card-img-top img-thumbnail" alt="..." loading="lazy" />
  
  
                  </div>
                  <div className="col-md-8">
                      <h3>{item.category}</h3>
                      <h3>Marca: <span className="fw-bold">{item.brand}</span></h3>
                      <h4>Stock: <span className="badge bg-info">{item.stock}</span></h4>
                      <h4>Raiting: <span className="badge bg-info">{item.rating}</span></h4>
                      <h4>Garantia: <span className="fw-bold">{item.warrantyInformation}</span></h4>
                      <h4>SKU: <span className="fw-bold">{item.sku}</span></h4>
                      <ul>Opiniones
                      {item.reviews.map((rev,index) => (
                          <li key={index}>{rev.comment} ({rev.reviewerEmail})</li>
                      ))}
                     </ul> 
                      <p>{item.description}</p>
                      <h3 className="text-danger">Precio: <span className="fw-bold">{item.price}$</span></h3>
                      <h3 className="text-info">Descuento Maximo: <span className="fw-bold">{item.discountPercentage}%</span></h3>
                  </div>
  
            </div>
  
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          
        </div>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default Detalles
