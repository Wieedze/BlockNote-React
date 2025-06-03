import showdown from 'showdown'

function NoteDisplay({ note }) {

    const converter = new showdown.Converter();


    if(!note) {
        return <p>Aucune Note</p>
    }

    const html = converter.makeHtml( note.content || '');

    return (
        <div>
            <h1>{note.title || "Sans titre" }</h1>
            <div
                style={{ border: '1px solid #ccc', padding: '1rem' }}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
}

export default NoteDisplay