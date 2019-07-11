import React,{Component} from 'react';
import Receipe from './Receipe';
import ReceipeSearch from './ReceipeSearch';

export default class  ReceipeList extends Component{
render()
{
    const {receipes,handleDetails,value,handleChange,handleSubmit} = this.props;
    return(
        <React.Fragment>
            <ReceipeSearch
            value={value}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            />
            <div className="container my-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-center mb-3">
                        <h1 className="text-slanted">Recipe List</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        receipes.map(receipe =>
                            {
                                return (<Receipe 
                                key={receipe.recipe_id}
                                receipe = {receipe}
                                handleDetails={handleDetails}
                                id={receipe.recipe_id}
                                />)
                            })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}
}