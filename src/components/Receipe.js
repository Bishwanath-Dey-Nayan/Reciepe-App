import React,{Component} from 'react';

export default class Receipe extends Component{
render()
{
    const {
        title,
        image_url,
        publisher,
        source_url
    } = this.props.receipe;
    return(
        <React.Fragment>
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card">
                    <img src={image_url} alt=""  className="img-card-top"
                    style={{height:'14rem'}}
                    />
                    <div className="card-body text-capitalize">
                        <h6>{title}</h6>
                        <h6 className="text-warning text-slanted">provided by {publisher}</h6>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-primary" onClick={() => this.props.handleDetails(0,this.props.id)}>Details</button>
                        <a href={source_url} className="btn btn-success mx-2 text-capitalize" target="_blank">Source url</a>
                    </div>
                </div>
            </div>
        </React.Fragment> 
    );
}
}