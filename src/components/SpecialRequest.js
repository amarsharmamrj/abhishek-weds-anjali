import { Grid } from "@mui/material"
import Heading from "./Heading"
import flower from '../assests/flowers/flower6.png'
import image from '../assests/carousel/rajiv.jpg'


const SpecialRequest = () => {
    return (
        <Grid container>
            {/* #00c4ff */}
            <Grid item xs={12} sm={12} md={12} className="special">
                <div className="">
                    <div className="heading" style={{ marginTop: '0', paddingTop: '2rem' }}>
                        <h1>Special Request</h1>
                        <img src={flower} alt="" />
                    </div>
                </div>
                <div className="visit">
                    <img src={image} alt="Rajiv Dixit Ji" />
                    <a href="https://www.youtube.com/channel/UCBu1-C7zod8qigd2v1Ea5HA">Watch Videos</a>
                    <h1>Visit Rajiv Dixit Ji's Youtube channel to listen to him.</h1>
                </div>
            </Grid>

        </Grid>
    )
}

export default SpecialRequest
