import React from 'react'

class TranslatePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputText:"",
            translationHistory:[]
        }
        /*Binding methods*/
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.saveToSessionStorage = this.saveToSessionStorage.bind(this);
    }

   componentDidMount() {
        // Gets tranlation history form session storage
        let history = sessionStorage.getItem('translationHistory')  
        
        // Checks if history is null
        if(history != null){
            let historyArray = history.split(',');
            this.setState({ translationHistory: historyArray });
        }     
    }
    // Input text from user
    handleChange(e) {
        this.setState({ inputText: e.target.value});
    }
    // Translate event on click
    handleClick() {   
        this.saveToSessionStorage()
    }
    
    // Saves translation to session storage
    saveToSessionStorage(){
       
        let history = this.state.translationHistory;

        // Checks if state is empty
        if(history == null){
            //Sets new state and updates session storage
            this.setState({ translationHistory: this.state.inputText});
            sessionStorage.setItem('translationHistory', [this.state.inputText]);
        }
        else{
            // Updates the new state to inklude the previous state plus the new value
            // Callback function executes when the state is set.
            this.setState(prevState => ({
                translationHistory: [...prevState.translationHistory, [this.state.inputText]]
            }), () => sessionStorage.setItem('translationHistory', this.state.translationHistory)); 
        }    
    }

    splitString(text){     
    }
    

    render(){
        return(
            <main>
                <h1>Translation</h1>
                <section id="translate-section">
                    <input id="translate-text-input" type="text" placeholder="Enter text"  onChange={ this.handleChange }/>
                    <button id="btn-translate"type="button" value="Submit" onClick={this.handleClick}>Translate</button>
                    <section id="display-signs-section">
                    <p>{this.state.translationHistory}</p>
                    </section>
                </section>
            </main>
        );
    }
}

export default TranslatePage;