import React from 'react'
import { useParams } from 'react-router'
import useData from '../../customhook/useData'

const ServiceDtls = () => {
        const{id}=useParams()
        const{Data}=useData('/service.json')
    //    console.log(Data)
       const oneData= Data.filter((d)=> d.id===id)
       console.log(oneData,id)
    return (
        <>
            <div className="single-service d-flex justify-content-center align-items-center">
                    <h1 className="text-white">{oneData[0]?.title}</h1>
            </div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3">
                        <div>
                            <img src={oneData[0]?.img} width="260" alt="" />
                            <h5 className="common-color">{oneData[0]?.title}</h5>
                            <hr />
                            <button className="service-price-btn">${oneData[0]?.price}</button>
                            <button className="card-btn"><i className="fas me-2 fa-shopping-bag"></i> Add to card</button>

                        </div>
                </div>
                <div className="col-lg-9">
                    <p>A good medical website becomes an excellent lead-generating tool and a valuable business assistant. It is quite difficult to create a successful medical portal or website for a clinic if there is no relevant experience. Such a website has to meet the needs of the target audience and have well-structured content. Regardless of the type of site and its topic, a web resource should be easy to use and meet technical and marketing requirements. If you are looking for a top-notch website theme for your health care business, consider the following ready-made solution</p>
                    <hr />
                    <p className="text-muted">The mission of the Everyday Health resource is to inspire and empower people to live their healthiest lives every day. The medical blog delivers the most trusted health information as well as fun-to-read tips and insights that make life a little easier. The blog is written by talented, passionate, and award-winning health and medical journalists. The content is regularly updated to provide the latest news and medical studies. Follow one of the largest consumer health websites to check articles and slideshows, reference guides, interactive tools, fun quizzes, and social video. Make the right decisions about your health and wellness.</p>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default ServiceDtls
