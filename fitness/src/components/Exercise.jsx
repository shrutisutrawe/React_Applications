import exerciseData from "../Data/exerciseData";

export const Exercise=()=>{
    return (
        <><div className="posts">
            {exerciseData.map(post => {
                return (
                    <div key={post.id} className="post">
                        <h3>{post.title}</h3>
                        <img src={post.img} alt={post.title} className='photo' />
                        <p>{post.content}</p>
                    </div>
                );
            })}
        </div>
        <div className='footer'>
        <p><small>Images &copy; 2021 Pexels GmbH</small></p>
        </div>
        </>       
    );
}