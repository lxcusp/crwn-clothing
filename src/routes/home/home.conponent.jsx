import Directory from '../../components/directory/directory.component'
import { Outlet } from 'react-router-dom'

const Home = () => {
    const categories = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            "id": 4,
            "title": "womens",
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
            "id": 5,
            "title": "mens",
            "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
    ]

    return (
        <div>
            <Outlet />
            {/* This Outlet is very powerful because the outlet now allows 
            us to leverage this pattern matching and this nesting tructure 
            in order to dynamically change portions of our code based on the 
            roots and the nested roots. we can kind of start to see a pattern
            emerge where we can keep the navigation bar but just change the 
            content inside using a specific nesting strategy.
            */}
            <Directory categories={categories} />
        </div>
    )
}

export default Home;