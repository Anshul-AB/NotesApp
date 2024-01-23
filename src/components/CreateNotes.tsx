import * as React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Note } from '../models/notesModel';
// import { Note } from '../models/notesModel';

interface ICreateNotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({ notes, setNotes }) => {

    const [error, setError] = React.useState<string>("");
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === "" || textRef.current?.value === "") {
            return setError("All Fields are Mandatory");
        }
        setError("");
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString()
        }]);
        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLTextAreaElement).value = "";
    }

    return (
        <>
            <h2>Create Your Note</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title for your Note" ref={titleRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter Message for your Note" ref={textRef} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='colorInput' >Note's Color</Form.Label>
                    <Form.Control type="color" id='colorInput' defaultValue="dfdfdf" title='Select Color for your Note' ref={colorRef} />
                </Form.Group>
                <Button type='submit' variant='primary'>Submit</Button>
            </Form>
        </>
    )
};

export default CreateNotes;
