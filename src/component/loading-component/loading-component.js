import './loading.css';

export default function LoadingComponent(props){
    const {message, width} = props;
    const widthPercentage = `${width}%`;
    return (
        <div className="loading">
           <div>{message}</div>
           <div className="loading-bar">
               <div style={{width: widthPercentage}} className="loading-percentage"></div>
            </div>
        </div>
    );
}