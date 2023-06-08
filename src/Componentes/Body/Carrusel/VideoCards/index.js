import "./videoCard.css"
const VideoCards = (props)=>{
    const {link} = props.datos
    return <div className="video">
            <iframe  width="250" height="141" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
        </div>
    
}

export default VideoCards