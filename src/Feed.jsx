const Feed = ({ title, link, date }) => {
    let formatted = { date: "numeric", month: "long", year: "numeric" }
    let articleDate = new Date(date).toLocaleDateString("vi", formatted);

    return (
        <>
            <a href="{link}" target="_blank" rel="noopener noreferrer"><h3>{title}</h3></a>
            <p>{articleDate}</p>
        </>
    )
}
export default Feed;