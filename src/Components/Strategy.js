import React from 'react';
import useApi from '../customApi/useApi';

const apikey='df9d83cbe0msh28ba752816a8b03p17b92ejsnaeceb234359f';
const URL=' https://www.freetogame.com/api/games?category=strategy';
const correctURL=`${URL}&rapidapi-key=${apikey}`;


const Strategy = () => {
    const [data,loading,isError]=useApi(correctURL);

    return (
      <div >
  <h2 className="text-center text-light">Shooter Games</h2>
  <div className='container'>
  <div className='row row row-cols-1 row-cols-md-4 gy-3 my-3 '> 
   
  {data.map((eachInfo)=>{
    const {id,thumbnail,title,release_date,short_description,game_url}=eachInfo;
     return(
  <div className="col-sm-4 col-md-4 col-lg-3 col-xs-10">
    <div className="card text-bg-light" style={{width:"19rem",height:"29rem"}}>
        <img src={thumbnail} className="card-img-top" alt="image" style={{height:"12rem"}}/>
        <div className="card-body overflow-auto">
          {title?(
          <h5 className="card-title "> {title}</h5>):<h1>no data</h1>}
          <h5 className="card-title">{}</h5>
          <p className="card-text">Release-Date: {release_date}</p>
          <p className="card-text">{short_description}</p>
          <a href={game_url} className="btn btn-primary" target='blank'>Read More</a>
  
        </div>
      </div>
      </div>
      
     )
      })}
    
    
       </div>
   
      </div>
  
   </div>
    )  
}

export default Strategy