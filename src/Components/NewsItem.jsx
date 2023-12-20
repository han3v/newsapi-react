import image from '../assets/news.jpg'
const NewsItem = ({judul, deskripsi, src, url}) => {
    return (
        <div className="card bg-dark text-light mb-5 d-inline-block my-3 mx-2 px-2 py-2" style={{maxWidth: "315px"}}>
          <img src={src?src:image} className="card-img-top" style={{height:"200px", width:"300px"}} />
            <div className="card-body">
              <h5 className="card-title">{judul.slice(0,50)}</h5>
              <p className="card-text">{deskripsi?deskripsi.slice(0,90): "The Patriots and Steelers are set to face off on with each fran"}</p>
              <a href={url} className="btn btn-primary">Lanjut Baca</a>
          </div>
        </div>
    )
}

export default NewsItem;