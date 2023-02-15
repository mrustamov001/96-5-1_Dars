import { useState } from 'react'
import List from '../components/List'

const Price = () => {

    const [img, setImg] = useState(1)

    function handleImg(id){
        if(id == 7){
            setImg(1)
            return 
        }
        setImg(id)
        console.log(img);
    }

    return (
        <div className={`landeng${img} min-vh-100 text-bg-light d-flex align-items-center justify-content-center`}>
            <div className="container">
                <h2 className="fs-1 text-center text-light">
                    Choose your plan
                </h2>
                <p className='text-center my-4 text-light'>
                    There are many reasons to get down and start to get depressed about your situation.
                </p>
                <ul className='d-flex justify-content-center gap-3'>
                    <List name={"Free"} price={"$0"} text1={"Free forever"} text2={"Up to 2 users"} text3={"Github"} btn={"GET STARTED"} />
                    <List name={"Lite"} price={"$199"} text1={"Teams"} text2={"Up to 8 users"} text3={"Github"} btn={"BUY NOW"} />
                    <List name={"Pro"} price={"$399"} text1={"Teams"} text2={"Unlimited users"} text3={"Github"} btn={"BUY NOW"} />
                    <List name={"Enterprise"} price={<i className="fa-solid fa-briefcase text-primary"></i>} text1={"Teams"} text2={"Unlimited users"} text3={"Github"} btn={"CONTACT US"} />
                </ul>
                <button onClick={() => handleImg(img+1)} className="btn text-light fs-2 text-center d-block mx-auto">Theme<i className="fa-solid fa-repeat mx-2"></i></button>
                {/* <button onClick={() => setImg(img > 0 && img < 6 ? img +1 : img = 1 )} className="btn text-light fs-2 text-center d-block mx-auto">Theme<i className="fa-solid fa-repeat mx-2"></i></button> */}
            </div>
        </div>
    )
}

export default Price