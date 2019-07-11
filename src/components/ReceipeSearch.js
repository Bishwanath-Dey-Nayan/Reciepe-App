import React,{Component} from 'react';

export default class ReceipeSearch extends Component{
render()
{
    const {value,handleChange,handleSubmit} = this.props;
    return(
        <React.Fragment>
         <div className="container">
             <div className="row">
                 <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                     <h1 className="text-capitalize">
                      serach for recipe with {" "}
                      <strong className="text-danger">Food2Fork</strong>   
                     </h1>
                     <form className="mt-4" onSubmit={handleSubmit}>
                         <label htmlFor="search" className="text-capitalize">
                             type recipes separated by comma
                         </label>
                         <div className="input-group">
                             <input type="text" name="serach" placeholder="chicken,onions,carrots"
                             value={value}
                             onChange={handleChange}
                             className="form-control" />
                             <div type="input-group-append">
                                 <button type="submit" 
                                 className="input-group-text bg-primary text-white">
                                    <i className="fas fa-search"></i>
                                 </button>
                             </div>
                         </div>
                     </form>
                 </div>
             </div>
         </div>
        </React.Fragment>
    );
}
}