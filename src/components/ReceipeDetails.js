import React,{Component} from 'react';
import {recipe} from "../tempDetails";

export default class ReceipeDetails extends Component{
    // constructor(props)
    // {
    //     super(props);
    //     this.state = {
    //         recipe:recipe,
    //         url:`https://www.food2fork.com/api/get?key7cdec7df6a0fc8c04343b0b4a7b95f1b&rId=${this.props.id}` 
    //     }
    // }

    // async componentDidMount()
    // {
    //     try{
    //             const data = await fetch(this.state.url);
    //             const JsonData= await data.json();
    //             this.setState({
    //                 recipe:JsonData.recipe
    //             });
    //         }catch(error)
    //         {
    //             console.log(error);
    //         }
    // }
    state = {
        recipe:recipe
    }
render()
{
    const {recipe_url,image_url,publisher,publisher_url,source_url,title,ingredients} = this.state.recipe;
    
    return(
        <React.Fragment>
            <div className="container">
                <div className="row"> 
                    <div className="col-10 mx-auto col-md-6 my-3">
                       <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={() => this.props.handleIndex(1)}>;
                           back to recipe list</button> 
                           <img src={image_url} className="d-block w-100" />
                           <h6 className="text-uppercase">{title}</h6>
                          <h6 className="text-warninn text-capitalize text-slanted">
                              provided by {publisher}
                          </h6>



                    </div>
                    <div className="col-10 mx-auto col-md-6 mx-3">
   
                          <a href={publisher_url} target="_blank" rel="noopener noreferrer"  className="btn btn-primary mt-2 text-capitalize mx-2">publisher webpage</a>
                          <a href={recipe_url} target="_blank" rel="noopener noreferrer"  className="btn btn-success mt-2 text-capitalize ">Recipe Url</a>
                          <ul className="list-group mt-4">
                              <h2 className="mt-3 mb-5">Ingredients</h2>
                              {ingredients.map((item,index)=>{
                                  return(
                                      <li key={index} className="list-group-item">
                                          {item}
                                      </li>
                                  );
                              })};
                          </ul>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}
}