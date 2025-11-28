import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImage2 from './imge.jpg';
import Image1 from "./imge.jpg"
import Image2 from "./image.webp"
import Image3 from "./image3.jpeg"

function BasicExample() {
  return (
    <div className='Cards'>
    <Card style={{ width: '16.5rem' }} className='card-img'>
      <Card.Img variant="top" src={Image2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: '16.5rem' }} className='card-img'>
      <Card.Img variant="top" src={Image3}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: '16.5rem' }} className='card-img'>
      <Card.Img variant="top" src={Image2}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: '16.5rem' }} className='card-img'>
      <Card.Img variant="top" src={Image3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: '16.5rem' }} className='card-img'>
      <Card.Img variant="top" src={Image2}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: '16.5rem' }} className='card-img'>
      <Card.Img variant="top" src={Image1}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;