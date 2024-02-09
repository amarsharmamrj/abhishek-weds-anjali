import { Grid } from "@mui/material"
import Heading from "./Heading"
import flower from '../assests/flowers/flower6.png'
import cornerImage from '../assests/flowers/corner.png'

const Events = () => {
    return (
        <Grid container>
            {/* #00c4ff */}
            <Grid item xs={12} sm={12} md={12}>
                <div className="parallex">
                    <div className="heading" style={{ marginTop: '0', paddingTop: '2rem' }}>
                        <h1>You are invited</h1>
                        <img src={flower} alt="" />
                    </div>
                    <p className="quote-one">
                        Please join us in the celebration of our big day. We hope you will grant us your presence,
                        and we will be happy to see you on our special day. You are welcome!
                    </p>
                </div>
            </Grid>

            <Grid item container xs={12} sm={12} md={12} className="events">
                <Grid item xs={12} sm={12} md={12}>
                    <Heading name="Events" />
                </Grid>
                <Grid item xs={12} sm={12} md={4} p={1}>
                    <div class="event-card">
                        <h1 class="event-name">Tilak</h1>
                        <hr />
                        <h2 class="date">17 February, 2024</h2>
                        <p class="addess">Village and Post: Bheirya, Uttar Pradesh, 273207</p>
                        <a href="https://maps.app.goo.gl/zTSJduSa8ZN19WQg7" target="_blank" className="map">See Location</a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} p={1}>
                    <div class="event-card">
                        <h1 class="event-name">Haldi</h1>
                        <hr />
                        <h2 class="date">22 February, 2024</h2>
                        <p class="addess">Village and Post: Bheirya, Uttar Pradesh, 273207</p>
                        <a href="https://maps.app.goo.gl/zTSJduSa8ZN19WQg7" target="_blank" className="map">See Location</a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} p={1}>
                    <div class="event-card">
                        <h1 class="event-name">Marriage</h1>
                        <hr />
                        <h2 class="date">23 February, 2024</h2>
                        <p class="addess">Village and Post: Rampur Baldiha, Ghughli, Maharajganj, Uttar Pradesh</p>
                        <a href="https://maps.app.goo.gl/b8vRtX9Lf7urd647A" target="_blank" className="map">See Location</a>
                    </div>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default Events
