class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility(){
        this.setState( (prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render(){
        return(
            <div>
                <h1> Visibility Toggle </h1>
                <button onClick ={this.handleToggleVisibility}> {this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>These are some details!</p>
                    </div>
                )}
            </div>
        )
    }
} 

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));




// const appRoot = document.getElementById('app');

// let visibility = false;

// const app = {
//     details: 'Hey. These are some details.'
// }

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1> Visibility toggle </h1>
//             <button onClick = {toggleVisibility}> {visibility ? 'Hide details' : 'Show details'} </button>
//             {visibility && (
//                 <div>    
//                     <p>{app.details}</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();