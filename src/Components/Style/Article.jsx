import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router'
import { getArticle } from '../../Redux/styles/action'
import { DropDownMenu } from './DropDownMenu'
import { StyleNavBar } from './StyleNavBar'

const Article = () => {
    // const dispatch = useDispatch()
    const location = useLocation()
    const {id}= useParams(location)
    console.log(id)
    
    const data = useSelector((state) => state.style.data,shallowEqual)
    const menu =  useSelector((state) => state.style.menu)

    // React.useEffect(() => {
    //     dispatch(getArticle(id))
    // },[dispatch,id])
    return (
        <div>
            <StyleNavBar/>
            {!menu?
                (data.map(((item) => item.publishedAt === id?
                    (<>
                    <div style={{width:"70%",margin:"20px auto"}}>
                        <p style={{color:"red"}}>Art</p>
                        <h1 style={{width:"50%"}}>{item.title}</h1>
                    <p>Updated: 13-March-2021</p>
                    </div>
                    {<img style={{width:"100%", height:"100%"}} src={item.urlToImage}/>}
                    <div style={{display:"flex",width:"50%", margin:"auto"}}>
                        <div style={{width:"25%"}}>
                            <h4 style={{color:"grey"}}>Written By:<br/> {item.author}</h4>
                        </div>
                        <div style={{width:"75%"}}>
                            <p style={{textAlign:'justify'}}>{item.content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet minima nisi officia obcaecati dolorum dolorem at eaque, perferendis non exercitationem! Asperiores nisi voluptas totam necessitatibus numquam ratione. Molestiae nobis, earum sequi reprehenderit accusantium esse obcaecati ut nulla quibusdam officiis provident, doloribus adipisci consequatur est veritatis a voluptatem vitae. Beatae quo ullam neque commodi quas voluptatibus temporibus. Maiores magnam tempora accusamus consequatur provident ad nobis, harum dolorum incidunt. Adipisci excepturi id consequatur maxime vel quibusdam reiciendis, deleniti ut facere in et voluptate, placeat quod explicabo nulla veniam corporis suscipit! Ipsam commodi hic nihil atque quod cum dolore alias qui sunt esse, dignissimos, repudiandae architecto unde molestias rem tempora corrupti earum deleniti nisi vel. Quis eum earum qui impedit quasi quaerat ut error non, commodi, tenetur accusantium optio deleniti unde incidunt. Neque architecto illum tenetur ea non aspernatur assumenda cumque, necessitatibus beatae accusantium ipsam reprehenderit pariatur dolor eligendi doloremque vitae debitis iure? Sed, illum deleniti! Sed aut quaerat aperiam nam recusandae porro optio, nostrum ipsa aliquam reprehenderit repellendus rerum ducimus, voluptas impedit odio sapiente? Perspiciatis dolorum iste earum nihil recusandae, amet vero optio alias repellendus eveniet maxime a molestias explicabo quod nisi mollitia laboriosam minus ab numquam? Aspernatur et perspiciatis aut.</p>
                        </div>
                    </div>
                    </>
                    ) : null)))
                :<DropDownMenu/>
            }
            
        </div>
    )
}

export{Article}