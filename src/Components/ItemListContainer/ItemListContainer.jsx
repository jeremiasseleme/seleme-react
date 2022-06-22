import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"

export default function ItemListContainer({ greeting }) {

  const [listaProductos, setListaProductos] = useState([])

  useEffect(() => {
    let instrumentos = [
      { "id": "1", "price": 46270, "title": "Guitarra Clasica de Estudio C260", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2020/10/GUITARRA-NUNEZ-C260.jpg" },
      { "id": "2", "price": 118270, "title": "Bajo Electrico Yamaha Trbx 305", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2021/09/BAJO-YAMAHA-5-CUERDAS.jpg" },
      { "id": "3", "price": 203485, "title": "Bateria Yamaha Stage Custom", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2021/09/BATERIA-YAMAHA-STAGE-CUSTOM.jpg" },
      { "id": "4", "price": 176270, "title": "Guitarra Yamaha Silent Slg200n", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2021/09/GUITARRA-YAMAHA-SLG200.jpg" },
      { "id": "5", "price": 27432, "title": "Clarinete Estudio Parquer Custom", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2020/12/CLARINETE-PARQUER-1.jpg" },
      { "id": "6", "price": 63658, "title": "Saxo Alto Heimond 6430L Gold", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2020/10/SAXO-HEIMOND-1.jpg" },
      { "id": "7", "price": 220230, "title": "Saxo Tenor Mystic Parquer PSTM", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2021/07/SAXO-TENOR-MISTIQUE-PARQUER.jpg" },
      { "id": "8", "price": 139630, "title": "Flauta Traversa YFL222 Yamaha", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2021/07/FLAUTA-TRAVERSA-YAMAHA.jpg" },
      { "id": "9", "price": 11520, "title": "Set de 7 Armonicas Bluseras Swan", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2020/12/ARMONICA-SWAN-X-7-1.jpg" },
      { "id": "10", "price": 96000, "title": "Fiscornio Contralto Parquer", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2021/07/FLISCORNIO-PARQUER.jpg" },
      { "id": "11", "price": 2000, "title": "Cajon Peruano Skull ALEYMAR", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2020/10/CAJON-SKULL-PERUANO.jpg" },
      { "id": "12", "price": 101270, "title": "Bateria Completa Mapex Prodigy", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2021/08/BATERIA-MAPEX.jpg" },
      { "id": "13", "price": 26725, "title": "Platillo HIHAT 14 Tiger Uflip", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2020/10/PLATILLO-UFIP-TIGER-HIHAT.jpg" },
      { "id": "14", "price": 2570, "title": "Parche Remo Encore Pinstripe 18''", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2020/10/REMO-ENCORE-PINE-STRIPE.jpg" },
      { "id": "15", "price": 19300, "title": "Platillo 14 HiHat Sabian Sbr1402", "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_891306-MLA29433887307_022019-O.webp" },
      { "id": "16", "price": 124940, "title": "Bajo Electroacustico Takamine", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2021/06/BAJO-ACUSTICO-TAKAMINE1.jpg" },
      { "id": "17", "price": 56800, "title": "Cello 4/4 L1443 Heimond Completo", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2020/10/CELLO.jpg" },
      { "id": "18", "price": 132449, "title": "Guitarra electr Fender Coronado", "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_674767-MLA46456991314_062021-O.webp" },
      { "id": "19", "price": 16276, "title": "Violin Estudio 4/4 + Accesorios", "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_631186-MLA33084043263_122019-O.webp" },
      { "id": "20", "price": 150620, "title": "Contrabajo Custom 1/4 Parquer", "pictureUrl": "https://lacasadelmusico.com.ar/wp-content/uploads/2021/07/CONTRABAJO-PARQUER.jpg" }
    ]

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(instrumentos)
      }, 2500);
    }).then((res) => {
      setListaProductos(res)
    })

  }, [])



  return (
    <>
      {/* <span className="itemListContainer">{greeting}</span> */}
      <ItemList listaProductos={listaProductos} />
    </>
  )
}
