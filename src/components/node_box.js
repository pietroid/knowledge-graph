export const NodeBox = (props) => {
    return <div style={{
        border:'1px solid #000',
        justifyContent: 'start',
    }}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
    </div>
}