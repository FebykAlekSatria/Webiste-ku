import Image from 'next/image'
import { Carousel } from 'react-bootstrap';
const CarouselSkills = (props) => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={props.image1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={props.image2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={props.image3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselSkills;