export const PostsListItem = function({id, image, text, date}) {
    return(
        <li className="posts__item" key={id}>
                            <img className="posts__img" src={image} alt="image" />
                            <p className="posts__date">{date}</p>
                            <p className="posts__text">{text}</p>
                        </li>
    )
}