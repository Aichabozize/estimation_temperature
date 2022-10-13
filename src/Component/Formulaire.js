import React,{ useEffect, useState} from 'react';
import {servicerecevoirtemp} from '../Services/servicerecevoirtemp';
import { Info } from '../Services/serviceenvoinfo';
import Button from 'react-bootstrap/Button';
import { Col, Row,Container} from 'react-bootstrap';
// import { Infotime } from '../Services/serviceenvoietime';

import Form from 'react-bootstrap/Form';



 export default function Formulaire (){
    const [tempestime, setTempestime] = useState([]);
    const [time,  setTime ] = useState('');
    const [state, setState] = useState({
        temperatureamb: "",
        vitesse: "",
        intensite:"",
        temperatureini:"",                
    });

    const  getTempaturecable =() =>{
    servicerecevoirtemp
     .getTempaturecable()
     .then((res) => {
      setTempestime(res);
      console.log(res);  
    })    
    .catch(err => console.log(err))
    };

    useEffect(() =>{
        getTempaturecable();
    },[]);

 
    
    const onInputchange  = (e) =>{setState({ [e.target.name]: e.target.value })}
    const handleChange = event => { setTime(event.target.value);
    console.log('value is', event.target.value)}

    const onSubmit = async () => {
        const response = await Info(state);
        // const responsetime = await Infotime(time);
        try {
            // if(response.status === 200 && responsetime.status === 200)
            if(response.status === 200)
            {
                console.log("success");
            }        
     
        } catch(e){
            console.log(e);
        }   
    }      

    <Form.Control
    placeholder="Recipient's username"
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
  />
    return (
        <>
        <Container style={{padding:50}}>    
        <Row>
        <Col sm={10} md={6}>     
        <p>Pour avoir une prédiction de la Témpérature du cable, veillez entrer les informations suivantes.</p>
        <Form> 
        <Form.Group className="mb-3" id="time">
        <Form.Label>Temps d'estimation : </Form.Label>
        <Form.Control
            className="textFeedback"       
            as="textarea"
            cols="100"
            placeholder="time"
            value={time}
            onChange={handleChange}
            type="text"
          />
        
        {/* <Form.Control placeholder="time"  value={time} onChange={handleChange}  /> */}
        <Form.Label>Température ambiante : </Form.Label>
        <Form.Control
            className="textFeedback"       
            as="textarea"
            cols="100"
            placeholder="temperatureamb"
            value={state.temperatureamb}
            onChange={onInputchange}
            type="text"
          />
            <Form.Label>Température ambiante : </Form.Label>
            <Form.Control
            className="textFeedback"
            as="textarea"
            cols="100"
            placeholder="vitesse"
            value={state.vitesse}
            onChange={onInputchange}
            type="text"
          />
        <Form.Label>Intensite : </Form.Label>
            <Form.Control
            className="textFeedback"
            as="textarea"
            cols="100"
            placeholder="intensite"
            value={state.intensite}
            onChange={onInputchange}
            type="text"
          />
        <Form.Label>Température ambiante : </Form.Label>
            <Form.Control
            className="textFeedback"
            as="textarea"
            cols="100"
            placeholder="temperatureini"
            value={state.temperatureini}
            onChange={onInputchange}
            type="text"
          />
      {/* </Form.Group>     
        <Form.Group className="mb-3" controlId="tempature">
        <Form.Label>Température ambiante : </Form.Label>
        <Form.Control type="text" placeholder="temperatureamb"  value={state.temperatureamb} onChange={onInputchange}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridVitess">
        <Form.Label>Vitesse du vent : </Form.Label>
        <Form.Control type="text" placeholder="vitesse"  value={state.vitesse} onChange={onInputchange}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridIntensite">
        <Form.Label>Intensite : </Form.Label>
        <Form.Control type="text" placeholder="intensite" value={state.intensite} onChange={onInputchange}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridTempatureIn">
        <Form.Label>Température initiale : </Form.Label>
        <Form.Control type="text" placeholder="tempature initiale"  value={state.temperatureini} onChange={onInputchange}  /> */}
     
      <Button
            className="btnFormSend"
            variant="outline-success"
            onClick={onSubmit}
          >
            Envoyer
          </Button>
          </Form.Group>    
     </Form>  
     <div> Resultat:
       Array.from(tempestime()).map)
                </div>   
     </Col>
     </Row>
    
        </Container>
        </>
    );
    }



  