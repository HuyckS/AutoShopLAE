import { Link } from '@reach/router';
import { useEffect } from 'react';
import styles from '../styles/HomePage.module.scss';
import SliderCarousel from '../components/SliderCarousel';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import GoogleMap from '../components/GoogleMap';
import Customer from '../static/images/satisfiedCustomer.jpg';
import Gallery from '../static/images/vehicle_repair.jpg';
import Services from '../static/images/repairService.jpg';

const HomePage = ({ page, setPage }) => {

    useEffect(() => {
        setPage(0)
    }, []);

    return (
        <div className={styles.App}>
            <div className={styles.wrapper}>
                <h1 className={styles.titleBox}>Latinos Auto Electric</h1>
                <Link to="/admin" style={{ marginLeft: "1500px", backgroundColor: "purple" }}>Admin Dashboard</Link>
                <NavBar page={page} />
                <div className={styles.container}>
                    <div className={styles.containerTop}>
                        <div className={styles.homeTopSection}>
                            <SliderCarousel />
                        </div>
                    </div>
                    <div className={styles.quote}>
                        <p>"Latinos Auto Electric has been taking care of my cars for over 20 years. They continue to do an amazing job and I will always choose them to take care of any auto issues I have."</p>
                    </div>
                    <div className={styles.quickSchedule}>
                        <Link to="/schedule"><button><h1>Schedule Now!</h1></button></Link>
                    </div>
                    <div className={styles.homeMidBox}>
                        <div className={styles.homeMidElement}>
                            <Link to="/about"> <p className={styles.homeMidP}> Gallery </p> </Link>
                            <img src={Gallery} alt="gallery" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, culpa ad saepe necessitatibus quidem mollitia numquam nihil eos sunt sequi adipisci, quae est, eaque sapiente. Sit reprehenderit animi voluptate molestias?</p>
                        </div>
                        <div className={styles.homeMidElement}>
                            <Link to="/services"> <p className={styles.homeMidP}>Service</p> </Link>
                            <img src={Services} alt="services" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, culpa ad saepe necessitatibus quidem mollitia numquam nihil eos sunt sequi adipisci, quae est, eaque sapiente. Sit reprehenderit animi voluptate molestias?</p>
                        </div>
                        <div className={styles.homeMidElement}>
                            <Link to="/reviews"><p className={styles.homeMidP}> Reviews </p> </Link>
                            <img src={Customer} alt="customer" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, culpa ad saepe necessitatibus quidem mollitia numquam nihil eos sunt sequi adipisci, quae est, eaque sapiente. Sit reprehenderit animi voluptate molestias?</p>
                        </div>
                    </div>

                </div>
                <div className={styles.locationBox}>
                    <GoogleMap />
                    <div style={{ marginLeft: "100px" }} className="locationBoxText">
                        <p>We currently have one local shop dedicated to serving our community's auto needs. We're located at:</p>
                        <div>
                            <br />
                            <p>427 E Anaheim st</p>
                            <p>Long Beach, CA</p>
                            <p>90813</p>
                            <p>562-218-8560</p>
                        </div>
                        <a href="https://www.google.com/maps/dir//Latinos+Auto+Electric,+427+E+Anaheim+St,+Long+Beach,+CA+90813/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x80dd31436e825685:0x124c3088759240bd?sa=X&ved=2ahUKEwjg8rjo0urvAhXRop4KHW0WAqgQ48ADMAB6BAgHED0">
                            Get Directions
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;