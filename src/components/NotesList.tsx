import * as React from 'react';
import { Note } from '../models/notesModel';
import Notes from './Notes';

interface INotesListProps {
    notes: Note[],
    setNotes :React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList : React.FC<INotesListProps> = ({notes, setNotes}) => {

    //the filter method to create a new array that includes only the elements from the notes array 
    //where the id does not match the provided id.
    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    const renderNotes = ():JSX.Element[] =>{
        return notes.map(note => {
            return <Notes key={note.id} note={note} handleDelete={handleDelete}/>
        })
    }

  return (
    <>
    <h2 className='mt-5'>
        Noteslist
    </h2>
    <div>{ renderNotes() }</div>
    </>
  )
};

export default NotesList ;
