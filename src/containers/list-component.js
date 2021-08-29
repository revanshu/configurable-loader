import { React, PureComponent } from 'react';
import { getData, getAnotherData } from '../utils/load-data';
import LoadingComponent from '../component/loading-component/loading-component';

export default class ListComponent extends PureComponent{
    constructor(){
        super();
        this.state={
            loading: true,
            loadingMessage: '',
            loadingPercent: 0,
            data: []
        }
    }

    componentDidMount(){
        this.setState({loadingMessage: "Fetching data", loadingPercent: 0 });
       getData().then((data) => {
        this.setState({loadingMessage: "Initial Data loaded", loadingPercent: 40 });
        getAnotherData().then((dataAnother) => {
            const newData = [...data, ...dataAnother];
            this.setState({data: newData, loadingMessage: "FInal data", loadingPercent: 100});
           }).finally(() => {
               this.setState({loading: false});
           });
       });
    }

    render(){
        const { data, loading, loadingMessage, loadingPercent } = this.state;
        const resultDiv = data.map(el => (
            <div className="row" key={el.id}>
                {el.value}
            </div>
        ));
        return (
            <div className="container">
                {loading && <LoadingComponent message={loadingMessage} width={loadingPercent} />}
                {!loading && <div className="table">
                    <div className="header">
                        List Data
                    </div>
                    {resultDiv}
                </div>}
            </div>
        )
    }
}
 