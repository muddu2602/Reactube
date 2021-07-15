import React from 'react'

class SearchBar extends React.Component{
    state = {term : ''};

    onInputChange = (e) => {
        this.setState({term:e.target.value});
    } 

    onFormSubmit = (e) => {
        e.preventDefault();
        // handle callBack from the Parent Component
        this.props.onFormSubmit(this.state.term)
    }

    render(){
        return(
            <div className=" search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Reactube Search </label>
                        <input placeholder="Enter your search term here..." type = "text" 
                        value={this.state.term} 
                        onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>  
        );
    }
}

export default SearchBar;
