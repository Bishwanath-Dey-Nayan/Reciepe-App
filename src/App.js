import React,{Component} from 'react';
import ReceipeList from './components/ReceipeList';
import ReceipeDetails from './components/ReceipeDetails';
import {recipes} from './tempList';

export default class App extends Component{
    state = {
        receipes:recipes,
        url:"https:www.food2fork.com/api/search?key=7cdec7df6a0fc8c04343b0b4a7b95f1b" ,
        base_url:"https:www.food2fork.com/api/search?key=7cdec7df6a0fc8c04343b0b4a7b95f1b",
        details_id:35382,
        pageIndex:1,
        search:"",
        query:'&q='
    }
    // async getReceipes()
    // {
    //     try{
    //     const data = await fetch(this.state.url);
    //     const JsonData= await data.json();
    //     this.setState({
    //         receipes:JsonData.recipes
    //     });
    // }catch(error)
    // {
    //     console.log(error);
    // }
    // }

    // componentDidMount()
    // {
    //     this.getReceipes();
    // }
    displayPage = (index)=>
    {
        switch(index)
        {
            default:
            case 1:
                return <ReceipeList  receipes={this.state.receipes}
                 handleDetails={this.handleDetails} 
                 handleChange={this.handleChange}
                 value={this.state.search}
                 handleSubmit={this.handleSubmit}
                 />;
            case 0:
                return <ReceipeDetails id={this.state.details_id} handleIndex={this.handleIndex}/>
        }
    }
    handleIndex = (index) =>
    {
        this.setState({
            pageIndex:index
        })
    }
    handleDetails = (index,id) =>
    {
        this.setState({
            pageIndex:index,
            details_id:id
        })
    }
    handleChange = (e) =>
    {
        
        this.setState({
            search:e.target.value
        },() =>{console.log(this.state.serach)});
    }
    handleSubmit = (e) =>
    {
        e.preventDefault();
        const {base_url,query,search} = this.state;
        this.setState(() => {
            return {url:`${base_url}${query}${search}`,search:""}
        },() =>this.getReceipes())
    }

render()
{
    console.log(this.state.receipes);
    return(
        <React.Fragment>
            {this.displayPage(this.state.pageIndex)}
        </React.Fragment>
    );
}
}