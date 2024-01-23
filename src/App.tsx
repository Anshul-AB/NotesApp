import { useState } from 'react';
import './App.css';
import { Note } from './models/notesModel';
import Header from './components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';


function App() {

  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date ()).toString(),
    title: "Money",
    text: "Success",
    color: "dfdfdf",
    date: (new Date ()).toString()
  }])

  return (
    <>
    <Header/>
    <Container className='mt-5' >
      <Row>
        <Col>
        <NotesList notes={notes} setNotes={setNotes} />
        </Col>
      </Row>
      <Row>
        <Col>
        <CreateNotes notes={notes} setNotes={setNotes} />
        </Col>
      </Row>
    </Container>
    </>
)
}

export default App;
