import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

const UseeffectApi = () => {

    const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        // try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            
            // const data =await response.json();
            // console.log(data);

            setUsers(await response.json());
        
            // console.log(data);
             
        }

            //          setLoading(false);
    //         setUsers(await response.json());
    //     } catch (error) {
    //         setLoading(false);
    //         console.log("my error is "+ error);
    //     }
    // }

    useEffect(() => {
        getUsers();
    }, []);


const renderCard =(card, index)=>{
    return(
        <div className="container text-center">
  <div className="row">
    <div className="col">
     <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top"  src={card.thumbnailUrl} />
        <Card.Body>
          <Card.Title>{card.id}</Card.Title>
          <Card.Text>
            {card.title}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col mt-5">
     <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top"  src={card.thumbnailUrl} />
        <Card.Body>
          <Card.Title>{card.id}</Card.Title>
          <Card.Text>
            {card.title}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col">
     <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top"  src={card.thumbnailUrl} />
        <Card.Body>
          <Card.Title>{card.id}</Card.Title>
          <Card.Text>
            {card.title}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
</div>
    //     <Card style={{ width: '18rem' }} key={index}>
    //     <Card.Img variant="top"  src={card.thumbnailUrl} />
    //     <Card.Body>
    //       <Card.Title>{card.id}</Card.Title>
    //       <Card.Text>
    //         {card.title}
    //       </Card.Text>
    //       <Button variant="primary">Go somewhere</Button>
    //     </Card.Body>
    //   </Card>
    )
}


  return (
    <div className="app">
      {
        users.map(renderCard)
      }
    </div>
  )
}

export default UseeffectApi

